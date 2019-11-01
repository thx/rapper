import { createModel, CreateFetchParams, createResponseTypes } from '../core/base-creator';
import { Intf } from '../types';

export async function createBaseRequestStr(interfaces: Intf[], extr: CreateFetchParams) {
  const { projectId, resSelector } = extr;
  const modelStr = await createModel(interfaces);
  return `
    /**
     * 本文件由 Rapper 从 Rap 中自动生成，请勿修改
     * Rap 地址: http://rap2.alibaba-inc.com/repository/editor?id=${projectId}
     */
    import { parseUrl, dispatchAction, defaultFetch, defaultConfig, RequesterOption, FetchConfigObj } from './lib'
    import { RequestAction } from './redux'

    ${modelStr}

    ${resSelector}
  
    ${createResponseTypes(interfaces)}

    export function createRequester(options: RequesterOption) {
      let rapperFetch: any;
      if (options && typeof options.fetchConfig === 'function') {
        rapperFetch = options.fetchConfig;
      } else {
        let fetchConfig: FetchConfigObj = {};
        if (options && typeof options.fetchConfig === 'object') {
          fetchConfig = { ...defaultConfig, ...options.fetchConfig };
        }
        rapperFetch = async (requestParams: {
          url: string;
          method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'OPTIONS' | 'PATCH' | 'HEAD';
          params?: any;
          extra?: { [key: string]: any };
        }) => {
          requestParams.url = parseUrl(requestParams.url, fetchConfig.prefix);
          return await defaultFetch({ ...fetchConfig, ...requestParams });
        };
      }
      return {
      ${interfaces
        .map(({ modelName, name, moduleId, id, repositoryId, url, method }) => {
          return `
      /**
       * 接口名：${name}
       * Rap 地址: http://rap2.alibaba-inc.com/repository/editor?id=${repositoryId}&mod=${moduleId}&itf=${id}
      * @param req 请求参数
      * @param extra 请求配置项
      */
      '${modelName}': (req?: Models['${modelName}']['Req'], extra?: any) => {
        if(extra && extra.type === 'normal') {
          return rapperFetch({
            url: '${url}',
            method: '${method.toUpperCase()}',
            params: req, 
            extra
          }) as Promise<ResponseTypes['${modelName}']>
        } else {
          const action = RequestAction['${modelName}'](req)
          return dispatchAction(action, rapperFetch) as Promise<ResponseTypes['${modelName}']>
        }
      }`;
        })
        .join(',\n\n')}
      };
    }

    export interface RapperProps{
      fetch: ReturnType<typeof createRequester>
    }
      `;
}
