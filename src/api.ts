import convert from './convert';
import axios from 'axios';
import * as _ from 'lodash';
import * as path from 'path';
import * as fs from 'fs';
import * as mkdirp from 'mkdirp';
import { format } from 'json-schema-to-typescript/dist/src/formatter';
import { DEFAULT_OPTIONS } from 'json-schema-to-typescript';
import { Interface } from './itf';

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

function itfToModelName(itf: Interface.Root, urlMapper: UrlMapper = t => t) {
  const url = withoutExt(
    urlMapper(itf.url)
      .trim()
      .replace(/^\/+/g, '')
  );
  return [...url.split('/'), itf.method.toLowerCase()].join('_');
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

async function getInterfaces(projectId: number) {
  return axios
    .get(`http://rap2api.alibaba-inc.com/repository/get?id=${projectId}`)
    .then(response => {
      const modules: Array<any> = response.data.data.modules;
      const interfaces: Array<Interface.Root> = _(modules)
        .map(m => m.interfaces)
        .flatten()
        .value();
      return interfaces;
    });
}

interface RequestFactory {
  (itf: Interface.Root, ReqType: string, ResType: string): string;
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
              * Rap: http://rap2.alibaba-inc.com/repository/editor?id=${projectId}&mod=${
                  itf.moduleId
                }&itf=${itf.id}
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
              * Rap: http://rap2.alibaba-inc.com/repository/editor?id=${projectId}&mod=${
                  itf.moduleId
                }&itf=${itf.id}
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
  additionalProperties = false
}: {
  projectId: number;
  modelPath: string;
  requesterPath?: string;
  baseFetchPath?: string;
  urlMapper?: UrlMapper;
  useCommonJsModule?: boolean;
  additionalProperties?: boolean;
}) {
  const interfaces = await getInterfaces(projectId);
  const itfStrs = await Promise.all(
    interfaces.map(itf => {
      return convert(itf, additionalProperties).then(([reqItf, resItf]) => {
        return `
        /**
         * 接口名：${itf.name}
         * Rap 地址: http://rap2.alibaba-inc.com/repository/editor?id=${projectId}&mod=${
          itf.moduleId
        }&itf=${itf.id}
         */
        export namespace ${itfToModelName(itf, urlMapper)} {
          ${reqItf}

          ${resItf}
        }
      `;
      });
    })
  );
  const modelItf = formatCode(`
    /**
     * 本文件由 Rapper 从 Rap 中自动生成，请勿修改
     * Rap 地址: http://rap2.alibaba-inc.com/repository/editor?id=${projectId}
     */
    export namespace ModelItf {
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
    const request = {
      ${interfaces
        .map(itf => {
          const modelName = itfToModelName(itf, urlMapper);
          return `
        '${modelName}': (req: ModelItf.${modelName}.Req): Promise<ModelItf.${modelName}.Res> => {
          return fetch('${
            itf.url
          }','${itf.method.toUpperCase()}', req) as Promise<ModelItf.${modelName}.Res>;
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
