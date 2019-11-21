import chalk from 'chalk';
import convert from './convert';
import { Intf, GeneratedCode, CreatorExtr } from '../types';
import { creatInterfaceHelpStr } from './tools';

/** 生成 Models 文件 */
export async function createModel(interfaces: Array<Intf>, extr: CreatorExtr) {
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
export function createResponseTypes(interfaces: Array<Intf>) {
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

export async function createBaseRequestStr(interfaces: Array<Intf>, extr: CreatorExtr) {
  const { rapUrl, resSelector } = extr;
  const modelStr = await createModel(interfaces, extr);
  return `
    import { RequesterOption, getRapperRequest } from './lib'
    ${modelStr}

    ${resSelector}
  
    ${createResponseTypes(interfaces)}

    export function createFetch(fetchConfig: RequesterOption) {
      const rapperFetch = getRapperRequest(fetchConfig)

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
      import { createFetch, Models as RequestModels } from './request'
    `,
    body: `
      const fetch = createFetch({})
    `,
    export: `
      export { fetch, createFetch }
      export type Models = RequestModels
    `,
  };
}

/** 生成 defaultFetch */
function createDefaultFetch() {
  return `
    /** defaultFetch 参数 */
    export interface DefaultFetchParams {
      url: string;
      method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'OPTIONS' | 'PATCH' | 'HEAD';
      params?: any;
      fetchOption: Omit<RequestInit, 'body' | 'method'>;
    }
    /** defaultFetch 参数 */
    export interface UserFetchParams {
      url: string;
      method: DefaultFetchParams['method'];
      params?: any;
      extra?: { [key: string]: any };
    }
    
    export interface DefaultConfigObj {
      /** 'prefix' 前缀，统一设置 url 前缀，默认是 '' */
      prefix: string
      /** fetch 的第二参数，除了 body 和 method 都可以自定义 */
      fetchOption: DefaultFetchParams['fetchOption']
    }
    export type FetchConfigObj =  Partial<DefaultConfigObj>
    type FetchConfigFunc = <T>(params: UserFetchParams) => Promise<T>
    export type RequesterOption = FetchConfigObj | FetchConfigFunc

    const defaultConfig: DefaultConfigObj = {
      prefix: '',
      fetchOption: {
        headers: { 'Content-Type': 'application/json' },
        credentials: 'same-origin',
      },
    };

    const defaultFetch = async ({ url, method, params, fetchOption }: DefaultFetchParams) => {
      let urlWithParams = url;
      const init: RequestInit = { ...fetchOption, method };
      if (method === 'GET') {
        urlWithParams = url + '?' + locationStringify(params);
      } else {
        init.body = typeof params === 'object' ? JSON.stringify(params) : params;
      }
      const res = await fetch(urlWithParams, init);
      return Promise.resolve(res.json());
    };

    export const getRapperRequest = (fetchConfig: RequesterOption) => {
      let rapperFetch: FetchConfigFunc;
      if (typeof fetchConfig === 'function') {
        rapperFetch = fetchConfig;
      } else {
        let { prefix, fetchOption } = fetchConfig;
        prefix = prefix !== undefined ? prefix : defaultConfig.prefix;
        fetchOption = fetchOption !== undefined ? fetchOption : defaultConfig.fetchOption;
    
        rapperFetch = (requestParams: UserFetchParams) => {
          const { url, method, params, extra } = requestParams;
          /** 用户自定义 Content-Type */
          if (extra && extra.contentType) {
            fetchOption = {
              ...fetchOption,
              headers: { ...fetchOption.headers, 'Content-Type': extra.contentType },
            };
          }
          return defaultFetch({ url: parseUrl(url, prefix), method, params, fetchOption });
        };
      }
      return rapperFetch;
    };
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
  function parseUrl(url: string, requestPrefix?: string): string {
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

  ${createDefaultFetch()}
  `,
    export: '',
  };
}
