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
    import { locationStringify, parseUrl, dispatchAction } from './lib'
    import { RequestAction } from './redux'

    ${modelStr}

    ${resSelector}
  
    interface FetchParams {
      url: string
      method: string
      params?: any
      extra?: any
    }
    type FetchConfigFunc = <T>(params: FetchParams) => Promise<T>
    interface RequesterOption {
      fetchConfig: {
        /** 'prefix' 前缀，统一设置 url 前缀，默认是 '' */
        prefix?: string,
        /** 'headers' 请求头，默认 { 'Content-Type': 'application/json' } */
        headers?: any,
        /**
         * credentials 用于设置是否发送带凭据的请求，默认值 'same-origin'
         * credentials: 'include'，浏览器发送包含凭据的请求（即使是跨域源）
         * credentials: 'same-origin'，只在请求URL与调用脚本位于同一起源处时发送凭据
         * credentials: 'omit'，浏览器不在请求中包含凭据
         */
        credentials?: 'include' | 'same-origin' | 'omit',
      } | FetchConfigFunc
    };
    const defaultConfig = {
      prefix: '',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'same-origin',
    }
    export function createRequester(options: RequesterOption) {
      let rapperFetch: any = undefined
      if (options && typeof options.fetchConfig === 'function') {
        rapperFetch = options.fetchConfig
      } else {
        let fetchConfig: any = undefined
        if (options && typeof options.fetchConfig === 'object') {
          fetchConfig = { ...defaultConfig, ...options.fetchConfig }
        } else {
          fetchConfig = options.fetchConfig
        }
        rapperFetch = async ({ url, method, params, extra }: FetchParams) => {
          let requestUrl = parseUrl(url, fetchConfig.prefix)
          const requestParams: any = {
            method,
            headers: fetchConfig.headers,
            credentials: fetchConfig.credentials,
          }
          if (requestParams.method === 'GET') {
            requestUrl = requestUrl + '?' + locationStringify(params)
          } else if (params) {
            requestParams.body = JSON.stringify(params)
          }
          const res = await fetch(requestUrl, requestParams)
          return res.json()
        }
      }
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
      '${modelName}': (req?: Models['${modelName}']['Req'], extra?: any) => {
        type Res = ResSelector<Models['${modelName}']['Res']>;
        if(extra && extra.type === 'normal') {
          return rapperFetch({
            url: '${itf.url}',
            method: '${itf.method.toUpperCase()}',
            params: req, 
            extra
          }) as Promise<Res>;
        } else {
          const action = RequestAction['${modelName}'](req)
          return dispatchAction(action, rapperFetch) as Promise<Res>
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
