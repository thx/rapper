import chalk from 'chalk';
import convert from './convert';
import { Intf, GeneratedCode, CreatorExtr } from '../types';
import { creatInterfaceHelpStr } from './tools';

/** 生成 Models 文件 */
export async function createModel(interfaces: Intf[], extr: CreatorExtr) {
  const itfStrs = await Promise.all(
    interfaces.map(async itf => {
      try {
        const [reqItf, resItf] = await convert(itf);
        return `
            ${creatInterfaceHelpStr(extr.rapUrl, itf)}
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

export async function createBaseRequestStr(interfaces: Intf[], extr: CreatorExtr) {
  const { rapUrl, resSelector } = extr;
  const modelStr = await createModel(interfaces, extr);
  return `
    import { parseUrl, defaultFetch, defaultConfig, RequesterOption, FetchConfigObj } from './lib'
    ${modelStr}

    ${resSelector}
  
    ${createResponseTypes(interfaces)}

    export function createFetch(fetchConfig: RequesterOption) {
      let rapperFetch: any;
      if (typeof fetchConfig === 'function') {
        rapperFetch = fetchConfig;
      } else {
        let prefix = ''
        if (typeof fetchConfig === 'object') {
          fetchConfig = { ...defaultConfig, ...fetchConfig }
          prefix = fetchConfig.prefix || ''
        }
        rapperFetch = async (requestParams: {
          url: string
          method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'OPTIONS' | 'PATCH' | 'HEAD'
          params?: any
          extra?: { [key: string]: any }
        }) => {
          requestParams.url = parseUrl(requestParams.url, prefix)
          return await defaultFetch({ ...fetchConfig, ...requestParams })
        }
      }

      return {
        ${interfaces
          .map(itf => {
            const modelName = itf.modelName;
            const extra = `* @param req 请求参数
            * @param extra 请求配置项`;
            return `
            ${creatInterfaceHelpStr(rapUrl, itf, extra)}
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
      import { createFetch, Models } from './request'
      import { defaultFetch } from './lib'
    `,
    body: `
      const fetch = createFetch({})
    `,
    export: `
      export { fetch, createFetch, defaultFetch }
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
    export type RequesterOption = FetchConfigObj | FetchConfigFunc;

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
      return Promise.resolve(res.json());
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
  export function parseUrl(url: string, requestPrefix?: string): string {
    const urlReg = /^((https?:\\/\\/)?(([a-zA-Z0-9]+-?)+[a-zA-Z0-9]+\\.)+[a-zA-Z]+)(:\\d+)?(\\/.*)?(\\?.*)?(#.*)?$/
    /** 如果url含有host，就不再混入prefix */
    if (urlReg.test(url)) {
      return url
    }
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
