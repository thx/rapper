import chalk from 'chalk';
import convert from './convert';
import { Intf, GeneratedCode } from '../types';

/** 生成 Models 文件 */
export async function createModel(interfaces: Intf[]) {
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
        export interface Models {
            ${itfStrs.join('\n\n')}
        };
    `;
}

/** 生成 ResponseTypes */
export function createResponseTypes(interfaces: Intf[]) {
  return `
    export interface ResponseTypes {
      ${interfaces.map(
        ({ modelName }) => `
        '${modelName}': ResSelector<Models['${modelName}']['Res']>
      `,
      )}
    }
  `;
}

export interface CreateFetchParams {
  projectId: number;
  resSelector: string;
}

export async function createBaseRequestStr(interfaces: Intf[], extr: CreateFetchParams) {
  const { projectId, resSelector } = extr;
  const modelStr = await createModel(interfaces);
  return `
    /**
     * 本文件由 Rapper 从 Rap 中自动生成，请勿修改
     * Rap 地址: http://rap2.alibaba-inc.com/repository/editor?id=${projectId}
     */
    import { parseUrl, defaultFetch, defaultConfig, RequesterOption, FetchConfigObj } from './lib'
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
          return rapperFetch({
            url: '${itf.url}',
            method: '${itf.method.toUpperCase()}',
            params: req, 
            extra
          }) as Promise<ResponseTypes['${modelName}']>;
        }`;
          })
          .join(',\n\n')}
      };
    }
    `;
}

export function createBaseIndexCode(): GeneratedCode {
  return {
    import: `
      import { createRequester, Models } from './request'
      import { defaultFetch } from './lib'
    `,
    body: ``,
    export: `
      export { createRequester, defaultFetch }
      export type Models = Models
    `,
  };
}

/** 生成 defaultFetch */
function createDefaultFetch() {
  return `interface FetchParams {
      url: string;
      method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'OPTIONS' | 'PATCH' | 'HEAD';
      headers?: any;
      credentials?: 'include' | 'same-origin' | 'omit';
      params?: any;
      body?: any;
      extra?: { [key: string]: any };
    }
    type FetchConfigFunc = <T>(params: FetchParams) => Promise<T>;
    export interface FetchConfigObj {
      /** 'prefix' 前缀，统一设置 url 前缀，默认是 '' */
      prefix?: string;
      /** 'headers' 请求头，默认 { 'Content-Type': 'application/json' } */
      headers?: any;
      /**
       * credentials 用于设置是否发送带凭据的请求，默认值 'same-origin'
       * credentials: 'include'，浏览器发送包含凭据的请求（即使是跨域源）
       * credentials: 'same-origin'，只在请求URL与调用脚本位于同一起源处时发送凭据
       * credentials: 'omit'，浏览器不在请求中包含凭据
       */
      credentials?: 'include' | 'same-origin' | 'omit';
    }
    export interface RequesterOption {
      fetchConfig: FetchConfigObj | FetchConfigFunc;
    }
    export const defaultConfig: FetchConfigObj = {
      prefix: '',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'same-origin',
    };
    export const defaultFetch = async ({ url, params, extra, ...otherParams }: FetchParams) => {
      if (otherParams.method === 'GET') {
        url = url + '?' + locationStringify(params);
      } else if (params && otherParams.body) {
        otherParams.body = typeof params === 'object' ? JSON.stringify(params) : params;
      }
      const res = await fetch(url, otherParams);
      const responseType = res.headers.get('Content-Type')
      if (responseType && responseType.includes('application/json')) {
        return res.json()
      } else {
        throw Error('rapper 仅支持响应数据类型为 application/json 的接口')
      }
    }
  `;
}

export function createBaseLibCode(): GeneratedCode {
  return {
    import: ``,
    body: `
  /**
   * search 参数转换，比如 { a: 1, b: 2, c: undefined } 转换成 "a=1&b=2"
   * 会自动删除 undefined
   */
  export function locationStringify(
      obj: {
          [key: string]: any
      } = {}
  ): string {
      return Object.entries(obj).reduce((str, [key, value]) => {
          if (value === undefined) {
              return str
          }
          str = str ? str + '&' : str
          return str + encodeURIComponent(key) + '=' + encodeURIComponent(value)
      }, '')
  }

  /** 拼接组合request链接 */
  export function parseUrl (url: string, requestPrefix?: string): string {
    if (!requestPrefix) {
      requestPrefix = ''
    }
    requestPrefix = requestPrefix.replace(/\\/$/, '')
    url = url.replace(/^\\//, '')
    return requestPrefix + '/' + url
  }

  /** defaultFetch */
  ${createDefaultFetch()}
  `,
    export: '',
  };
}
