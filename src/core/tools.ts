import chalk from 'chalk';
import axios from 'axios';
import * as _ from 'lodash';
import { IModules, ICollaborator, Interface, Intf, IUrlMapper } from '../types';

/** 从rap查询所有接口数据 */
export async function getInterfaces(rapApiUrl: string) {
  const response = await axios.get(rapApiUrl);

  const data = response.data.data;
  const modules: Array<IModules> = data.modules;
  const collaborators: Array<ICollaborator> = data.collaborators;

  let interfaces = _(modules)
    .map(m => m.interfaces)
    .flatten()
    .value();

  if (collaborators.length) {
    const collaboratorsInterfaces = await Promise.all(
      collaborators.map(e => getInterfaces(rapApiUrl)),
    );
    interfaces = interfaces.concat(collaboratorsInterfaces.flat());
  }

  return interfaces;
}
/**
 * 转换rap接口名称
 */
export function rap2name(itf: Interface.IRoot, urlMapper: IUrlMapper = t => t) {
  // copy from http://gitlab.alibaba-inc.com/thx/magix-cli/blob/master/util/rap.js
  const { method, url, repositoryId: projectId, id } = itf;
  const apiUrl = urlMapper(url);

  const regExp = /^(?:https?:\/\/[^\/]+)?(\/?.+?\/?)(?:\.[^./]+)?$/;
  const regExpExec = regExp.exec(apiUrl);

  if (!regExpExec) {
    console.log(
      chalk.red(
        `\n  ✘ 您的rap接口url设置格式不正确，参考格式：/api/test.json (接口url:${apiUrl}, 项目id:${projectId}, 接口id:${id})\n`,
      ),
    );
    return;
  }

  const urlSplit = apiUrl.split('/');

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

  urlSplit.unshift(method.toLocaleUpperCase());
  return urlSplit.join('/');
}

/** 给接口增加 modelName */
export function getIntfWithModelName(
  intfs: Array<Interface.IRoot>,
  urlMapper: IUrlMapper = t => t,
): Array<Intf> {
  return intfs.map(itf => ({
    ...itf,
    modelName: rap2name(itf, urlMapper),
  }));
}

/** 接口去重 */
export function uniqueItfs(itfs: Array<Intf>) {
  const itfMap = new Map<string, Array<Intf>>();
  itfs.forEach(itf => {
    const name = itf.modelName;
    if (itfMap.has(name)) {
      itfMap.get(name).push(itf);
    } else {
      itfMap.set(name, [itf]);
    }
  });
  const newItfs: Array<Intf> = [];
  itfMap.forEach(dupItfs => {
    dupItfs.sort(
      // 后更改的在前面
      (a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime(),
    );
    newItfs.push(dupItfs[0]);
    if (dupItfs.length > 1) {
      console.log(
        chalk.yellow('发现重复接口，修改时间最晚的被采纳：\n') +
          dupItfs
            .map((itf, index) => {
              const str = `${itf.name}: http://rap2.alibaba-inc.com/repository/editor?id=${itf.repositoryId}&mod=${itf.moduleId}&itf=${itf.id}`;

              return index === 0 ? chalk.green(str) : chalk.gray(str);
            })
            .join('\n') +
          '\n',
      );
    }
  });
  return newItfs;
}

/** 生成提示文案 */
export function creatHeadHelpStr(rapUrl: string, projectId: number): string {
  return `
  /**
   * 本文件由 Rapper 同步 Rap 平台接口，自动生成，请勿修改
   * Rap仓库 地址: ${rapUrl}/repository/editor?id=${projectId}
   */
  `;
}

/**
 * 生成接口提示文案
 * @param rapUrl Rap平台地址
 * @param itf 接口信息
 * @param extra 额外信息
 */
export function creatInterfaceHelpStr(rapUrl: string, itf: Intf, extra?: string): string {
  const { name, repositoryId, moduleId, id } = itf;
  if (extra) {
    return `
    /**
     * 接口名：${name}
     * Rap 地址: ${rapUrl}/repository/editor?id=${repositoryId}&mod=${moduleId}&itf=${id}
     ${extra}
     */`;
  }

  return `
    /**
     * 接口名：${name}
     * Rap 地址: ${rapUrl}/repository/editor?id=${repositoryId}&mod=${moduleId}&itf=${id}
     */`;
}
