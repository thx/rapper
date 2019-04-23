import axios from 'axios';
import * as fs from 'fs';
import { DEFAULT_OPTIONS } from 'json-schema-to-typescript';
import { format } from 'json-schema-to-typescript/dist/src/formatter';
import * as _ from 'lodash';
import * as mkdirp from 'mkdirp';
import * as path from 'path';
import chalk from 'chalk';

import convert from './convert';
import { Interface } from './itf';

type Intf = Interface.Root & { modelName: string };

function formatCode(code: string) {
  return format(code, DEFAULT_OPTIONS);
}

function urlToName(url: string, namePrefix: string = ''): string {
  url = url.trim();
  return namePrefix + path.basename(url, path.extname(url));
}

function withoutExt(p: string) {
  return p.replace(/\.[^/.]+$/, '');
}

function relativeImport(from: string, to: string) {
  return withoutExt('./' + path.relative(path.dirname(from), to));
}

function urlToPath(folder: string, url: string, suffix: string = ''): string {
  const relativePath = url.trim().replace(/^\/+/g, '');
  const newFileName = path.join(
    path.dirname(relativePath),
    `${urlToName(relativePath)}${suffix}.ts`
  );
  return path.resolve(folder, newFileName);
}

function getIntfWithModelName(
  intfs: Interface.Root[],
  urlMapper: UrlMapper = t => t
): Intf[] {
  return intfs.map(itf => {
    return {
      ...itf,
      modelName: rap2name(itf, urlMapper)
    };
  });
}

function uniqueItfs(itfs: Intf[]) {
  const itfMap = new Map<string, Intf[]>();
  itfs.forEach(itf => {
    const name = itf.modelName;
    if (itfMap.has(name)) {
      itfMap.get(name).push(itf);
    } else {
      itfMap.set(name, [itf]);
    }
  });
  const newItfs: Intf[] = [];
  itfMap.forEach((dupItfs, name) => {
    dupItfs.sort(
      // 后更改的在前面
      (a, b) =>
        new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
    );
    newItfs.push(dupItfs[0]);
    if (dupItfs.length > 1) {
      console.log(
        chalk.yellow('发现重复接口，修改时间最晚的被采纳：\n') +
          dupItfs
            .map((itf, index) => {
              const str = `${
                itf.name
              }: http://rap2.alibaba-inc.com/repository/editor?id=${
                itf.repositoryId
              }&mod=${itf.moduleId}&itf=${itf.id}`;

              return index === 0 ? chalk.green(str) : chalk.gray(str);
            })
            .join('\n') +
          '\n'
      );
    }
  });
  return newItfs;
}

function rap2name(itf: Interface.Root, urlMapper: UrlMapper = t => t) {
  // copy from http://gitlab.alibaba-inc.com/thx/magix-cli/blob/master/util/rap.js
  let method = itf.method.toLowerCase();
  let apiUrl = urlMapper(itf.url);
  let projectId = itf.repositoryId;
  const id = itf.id;

  const regExp = /^(?:https?:\/\/[^\/]+)?(\/?.+?\/?)(?:\.[^./]+)?$/;
  const regExpExec = regExp.exec(apiUrl);

  if (!regExpExec) {
    console.log(
      chalk.red(
        `\n  ✘ 您的rap接口url设置格式不正确，参考格式：/api/test.json (接口url:${apiUrl}, 项目id:${projectId}, 接口id:${id})\n`
      )
    );
    return;
  }

  const urlSplit = regExpExec[1].split('/');

  //接口地址为RESTful的，清除占位符
  //api/:id/get -> api//get
  //api/bid[0-9]{4}/get -> api//get
  urlSplit.forEach((item, i) => {
    if (/\:id/.test(item)) {
      urlSplit[i] = '$id';
    } else if (/[\[\]\{\}]/.test(item)) {
      urlSplit[i] = '$regx';
    }
  });

  //只去除第一个为空的值，最后一个为空保留
  //有可能情况是接口 /api/login 以及 /api/login/ 需要同时存在
  if (urlSplit[0].trim() === '') {
    urlSplit.shift();
  }

  urlSplit.push(method);

  const urlToName = urlSplit.join('_');
  return urlToName;
}

function writeFile(filepath: string, contents: string) {
  return new Promise((resolve, reject) => {
    mkdirp(path.dirname(filepath), function(err) {
      if (err) return reject(`filepath: ${filepath}, ${err}`);
      fs.writeFile(filepath, contents, err => {
        if (err) return reject(`filepath: ${filepath}, ${err}`);
        resolve();
      });
    });
  });
}

interface Collaborator {
  id: number;
  name: string;
  description: string;
  logo?: any;
  visibility: boolean;
  ownerId: number;
  organizationId?: any;
  creatorId: number;
  lockerId?: any;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: any;
}
async function getInterfaces(projectId: number) {
  const response = await axios.get(
    `http://rap2api.alibaba-inc.com/repository/get?id=${projectId}`
  );

  const data = response.data.data;
  const modules: Array<any> = data.modules;
  const collaborators: Collaborator[] = data.collaborators;

  let interfaces: Array<Intf> = _(modules)
    .map(m => m.interfaces)
    .flatten()
    .value();

  if (collaborators.length) {
    const collaboratorsInterfaces = await Promise.all(
      collaborators.map(e => getInterfaces(e.id))
    );
    interfaces = interfaces.concat(_.flatten(collaboratorsInterfaces));
  }

  return interfaces;
}

interface RequestFactory {
  (itf: Intf, ReqType: string, ResType: string): string;
}

interface UrlMapper {
  (url: string): string;
}

interface CreateApiParams {
  projectId: number;
  folder: string;
  requestFactory: RequestFactory;
  urlMapper?: UrlMapper;
  additionalProperties?: boolean;
}

export async function createApi({
  projectId,
  folder,
  requestFactory,
  urlMapper = s => s,
  additionalProperties = false
}: CreateApiParams) {
  return getInterfaces(projectId).then(interfaces => {
    return Promise.all(
      interfaces.map(async itf => {
        const url = urlMapper(itf.url);
        const writeItf = ([reqItf, resItf]: [string, string]) => {
          const itfFileName = urlToPath(folder, url, '-itf');
          return Promise.all([
            writeFile(
              itfFileName,
              formatCode(
                `/**
              * 本文件由 Rapper 从 Rap 中自动生成，请勿修改
              * 接口名：${itf.name}
              * Rap: http://rap2.alibaba-inc.com/repository/editor?id=${
                itf.repositoryId
              }&mod=${itf.moduleId}&itf=${itf.id}
              */
            ${reqItf}
  
            ${resItf}`
              )
            ),
            writeFile(
              urlToPath(folder, url),
              formatCode(
                `/**
              * 本文件由 Rapper 从 Rap 中自动生成，请勿修改
              * 接口名：${itf.name}
              * Rap: http://rap2.alibaba-inc.com/repository/editor?id=${
                itf.repositoryId
              }&mod=${itf.moduleId}&itf=${itf.id}
              */
              import { Req, Res } from './${path.basename(
                itfFileName,
                path.extname(itfFileName)
              )}';
              /* 自定义请求代码开始 */
              ${requestFactory(itf, 'Req', 'Res')}
              /* 自定义请求代码结束 */
              `
              )
            )
          ]);
        };
        return convert(itf, additionalProperties)
          .then(writeItf)
          .catch(err => `${url}+${err}`);
      })
    );
  });
}

export async function createModel({
  projectId,
  modelPath,
  requesterPath,
  baseFetchPath,
  urlMapper = t => t,
  useCommonJsModule = false,
  additionalProperties = false,
  optionalExtra = true
}: {
  projectId: number;
  modelPath: string;
  requesterPath?: string;
  baseFetchPath?: string;
  urlMapper?: UrlMapper;
  useCommonJsModule?: boolean;
  additionalProperties?: boolean;
  optionalExtra?: boolean;
}) {
  let interfaces = uniqueItfs(
    getIntfWithModelName(await getInterfaces(projectId), urlMapper)
  );
  const itfStrs = await Promise.all(
    interfaces.map(async itf => {
      try {
        const [reqItf, resItf] = await convert(itf, additionalProperties);
        return `
          /**
           * 接口名：${itf.name}
           * Rap 地址: http://rap2.alibaba-inc.com/repository/editor?id=${
             itf.repositoryId
           }&mod=${itf.moduleId}&itf=${itf.id}
           */
          '${itf.modelName}': {
            Req: ${reqItf.replace('export interface Req', '')};
            Res: ${resItf.replace('export interface Res', '')};
          }
        `;
      } catch (error) {
        throw chalk.red(`接口：http://rap2.alibaba-inc.com/repository/editor?id=${
          itf.repositoryId
        }&mod=${itf.moduleId}&itf=${itf.id}
        生成出错
        ${error}`);
      }
    })
  );
  const modelItf = formatCode(`
    /**
     * 本文件由 Rapper 从 Rap 中自动生成，请勿修改
     * Rap 地址: http://rap2.alibaba-inc.com/repository/editor?id=${projectId}
     */
    export interface ModelItf {
      ${itfStrs.join('\n\n')}
    };
  `);
  if (requesterPath) {
    const relModelPath = relativeImport(requesterPath, modelPath);
    const relBaseFetchPath = relativeImport(requesterPath, baseFetchPath);

    const fetcher = formatCode(`
      /**
       * 本文件由 Rapper 从 Rap 中自动生成，请勿修改
       * Rap 地址: http://rap2.alibaba-inc.com/repository/editor?id=${projectId}
       */
    ${
      useCommonJsModule
        ? `
      import fetch =  require('${relBaseFetchPath}');
      import { ModelItf } from '${relModelPath}';
      `
        : `
      import fetch from '${relBaseFetchPath}';
      import { ModelItf } from '${relModelPath}';
    `
    }
      type Extra = Parameters<typeof fetch>[3];
      const request = {
        ${interfaces
          .map(itf => {
            const modelName = itf.modelName;
            return `
          /**
           * 接口名：${itf.name}
           * Rap 地址: http://rap2.alibaba-inc.com/repository/editor?id=${
             itf.repositoryId
           }&mod=${itf.moduleId}&itf=${itf.id}
          * @param req 请求参数
          * @param extra 请求配置项
          */
          '${modelName}': (req: ModelItf['${modelName}']['Req'], extra${optionalExtra ? '?' : ''}: Extra) => {
            return fetch<ModelItf['${modelName}']['Res']>('${
              itf.url
            }','${itf.method.toUpperCase()}', req, extra);
          }`;
          })
          .join(',\n\n')}
      };

    ${
      useCommonJsModule
        ? `
      export = request;
      `
        : `
      export default request;
      `
    }
  `);
    return Promise.all([
      writeFile(modelPath, modelItf),
      writeFile(requesterPath, fetcher)
    ]);
  } else {
    return writeFile(modelPath, modelItf);
  }
}
