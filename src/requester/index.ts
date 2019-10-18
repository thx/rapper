import chalk from 'chalk';
import convert from '../core/convert';
import { Intf } from '../types';

/** model.ts 文件的内容 */
interface ICreateModelParams {
  projectId: number;
  additionalProperties?: boolean;
}
async function createModel(interfaces: Intf[], extr: ICreateModelParams) {
  const { projectId, additionalProperties } = extr;
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
        throw chalk.red(`接口：http://rap2.alibaba-inc.com/repository/editor?id=${itf.repositoryId}&mod=${itf.moduleId}&itf=${itf.id}
        生成出错
        ${error}`);
      }
    })
  );
  return `
        /**
         * 本文件由 Rapper 从 Rap 中自动生成，请勿修改
         * Rap 地址: http://rap2.alibaba-inc.com/repository/editor?id=${projectId}
         */
        export interface ModelItf {
        ${itfStrs.join('\n\n')}
        };
    `;
}

/** fetch.ts 文件的内容 */
interface ICreateFetchParams {
  projectId: number;
  useCommonJsModule?: boolean;
  optionalExtra?: boolean;
  relModelPath: string;
  relBaseFetchPath: string;
}
function createFetch(interfaces: Intf[], extr: ICreateFetchParams) {
  const {
    projectId,
    useCommonJsModule,
    optionalExtra,
    relModelPath,
    relBaseFetchPath
  } = extr;
  return `
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
              '${modelName}': (req: ModelItf['${modelName}']['Req'], extra${
                  optionalExtra ? '?' : ''
                }: Extra) => {
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
        `;
}

export { createModel, createFetch };
