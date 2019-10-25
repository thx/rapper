import chalk from 'chalk';
import convert from './convert';
import { Intf } from '../types';

/** 生成 model.ts 文件 */
interface CreateModelParams {
  projectId: number;
}

async function createModel(interfaces: Intf[], extr: CreateModelParams) {
  const { projectId } = extr;
  const itfStrs = await Promise.all(
    interfaces.map(async itf => {
      try {
        const [reqItf, resItf] = await convert(itf);
        return `
            /**
             * 接口名：${itf.name}
             * Rap 地址: http://rap2.alibaba-inc.com/repository/editor?id=${itf.repositoryId}&mod=${
          itf.moduleId
        }&itf=${itf.id}
             */
            '${itf.modelName}': {
              Req: ${reqItf.replace('export interface Req', '')};
              Res: ${resItf.replace('export interface Res', '')};
            }
          `;
      } catch (error) {
        throw chalk.red(`接口：http://rap2.alibaba-inc.com/repository/editor?id=${itf.repositoryId}&mod=${itf.moduleId}&itf=${itf.id}
          生成出错
          ${error}`);
      }
    }),
  );
  return `
        /**
         * 本接口类型由 Rapper 从 Rap 中自动生成，请勿修改
         * Rap 地址: http://rap2.alibaba-inc.com/repository/editor?id=${projectId}
         */
        export interface Models {
            ${itfStrs.join('\n\n')}
        };
    `;
}

interface CreateFetchParams {
  projectId: number;
}

export async function createBaseRequestStr(interfaces: Intf[], extr: CreateFetchParams) {
  const { projectId } = extr;
  const modelStr = await createModel(interfaces, {
    projectId: extr.projectId,
  });
  return `
    /**
     * 本文件由 Rapper 从 Rap 中自动生成，请勿修改
     * Rap 地址: http://rap2.alibaba-inc.com/repository/editor?id=${projectId}
     */
    import fetch from './base-fetch';
    type Extra = Parameters<typeof fetch>[3];

    ${modelStr}

    export const request = {
        ${interfaces
          .map(itf => {
            const modelName = itf.modelName;
            return `
        /**
         * 接口名：${itf.name}
         * Rap 地址: http://rap2.alibaba-inc.com/repository/editor?id=${itf.repositoryId}&mod=${
              itf.moduleId
            }&itf=${itf.id}
        * @param req 请求参数
        * @param extra 请求配置项
        */
        '${modelName}': (req: Models['${modelName}']['Req'], extra: Extra) => {
            return fetch<Models['${modelName}']['Res']>('${
              itf.url
            }','${itf.method.toUpperCase()}', req, extra);
        }`;
          })
          .join(',\n\n')}
    };
    `;
}

export function createBaseIndexStr(projectId: number): string {
  return `
    /**
     * 本文件由 Rapper 从 Rap 中自动生成，请勿修改
     * Rap 地址: http://rap2.alibaba-inc.com/repository/editor?id=${projectId}
     */
     import { request, Models } from './request'
     export { request, Models }
  `;
}
