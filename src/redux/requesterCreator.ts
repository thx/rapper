import { createModel, CreateFetchParams } from '../core/base-creator';
import { Intf } from '../types';

export async function createBaseRequestStr(interfaces: Intf[], extr: CreateFetchParams) {
  const { projectId, resSelector } = extr;
  const modelStr = await createModel(interfaces);
  return `
      /**
       * 本文件由 Rapper 从 Rap 中自动生成，请勿修改
       * Rap 地址: http://rap2.alibaba-inc.com/repository/editor?id=${projectId}
       */
      import { defaultFetch } from './lib'
  
      ${modelStr}
  
      ${resSelector}
  
      export function createRequester(option: {
        fetch: <T>(params: { url: string; method: string; params: any; extra: any }) => Promise<T>;
      } = {
        fetch: defaultFetch,
      }) {
        return {
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
          '${modelName}': (req: Models['${modelName}']['Req'], extra?: any) => {
              type Res = ResSelector<Models['${modelName}']['Res']>;
              return option.fetch<Res>({
                url: '${itf.url}',
                method: '${itf.method.toUpperCase()}',
                params: req, 
                extra
              });
          }`;
            })
            .join(',\n\n')}
        };
      }
      `;
}
