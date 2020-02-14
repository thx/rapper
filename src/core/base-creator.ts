import chalk from 'chalk';
import convert from './convert';
import { Intf, IGeneratedCode, ICreatorExtr } from '../types';
import { creatInterfaceHelpStr } from './tools';

/** 生成 Models 文件 */
export async function createModel(interfaces: Array<Intf>, extr: ICreatorExtr) {
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
        throw chalk.red(`接口：${extr.rapUrl}/repository/editor?id=${itf.repositoryId}&mod=${itf.moduleId}&itf=${itf.id}
          生成出错
          ${error}`);
      }
    }),
  );
  return `
        export interface IModels {
            ${itfStrs.join('\n\n')}
        };
    `;
}

/** 生成 IResponseTypes */
export function createResponseTypes(interfaces: Array<Intf>) {
  return `
    export interface IResponseTypes {
      ${interfaces.map(
        ({ modelName }) => `
        '${modelName}': ResSelector<IModels['${modelName}']['Res']>
      `,
      )}
    }
  `;
}

export async function createBaseRequestStr(interfaces: Array<Intf>, extr: ICreatorExtr) {
  const { rapUrl, resSelector } = extr;
  const modelStr = await createModel(interfaces, extr);
  return `
    import { RequesterOption, getRapperRequest, IExtra } from './lib'
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
            '${modelName}': (req?: IModels['${modelName}']['Req'], extra?: IExtra) => {
              return rapperFetch({
                url: '${itf.url}',
                method: '${itf.method.toUpperCase()}',
                params: req, 
                extra
              }) as Promise<IResponseTypes['${modelName}']>;
            }`;
          })
          .join(',\n\n')}
      };
    }
    `;
}

export function createBaseIndexCode(): IGeneratedCode {
  return {
    import: `
      import { createFetch, IModels } from './request'
      import { defaultFetch } from './lib'
    `,
    body: `
      const fetch = createFetch({})
    `,
    export: `
      export { fetch, createFetch, defaultFetch }
      export type Models = IModels
    `,
  };
}

/** 生成 defaultFetch */
function createDefaultFetch() {
  return `
    type Json = string | number | boolean | null | { [property: string]: Json } | Json[];
    /** defaultFetch 参数 */
    export interface IDefaultFetchParams {
      url: string;
      method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'OPTIONS' | 'PATCH' | 'HEAD';
      params?: any;
      extra?: IExtra;
      fetchOption: Omit<RequestInit, 'body' | 'method'>;
    }
    /** defaultFetch 参数 */
    export interface IUserFetchParams {
      url: string;
      method: IDefaultFetchParams['method'];
      params?: object;
      extra?: IExtra;
    }

    /** 请求的额外参数类型 */
    export interface IExtra {
      /**
       * 请求头 content-type，默认是 'application/json'
       */
      contentType?: 'application/json' | 'multipart/form-data' | 'application/x-www-form-urlencoded' | 'text/plain' | 'text/html' | 'application/javascript';
      /**
       * 请求 url 后面拼接的 query 参数，比如 POST 请求需要拼接 token 参数
       */
      query?: { [key: string]: any };
    }
    
    type TQueryFunc = () => { [key: string]: Json };
    export interface IDefaultConfigObj {
      /** 'prefix' 前缀，统一设置 url 前缀，默认是 '' */
      prefix?: string;
      /** fetch 的第二参数，除了 body 和 method 都可以自定义 */
      fetchOption?: IDefaultFetchParams['fetchOption'];
      /** 全局的query参数，可以配置 object，或者自定义函数 */
      query?: { [key: string]: Json } | TQueryFunc;
    }
    export type FetchConfigObj =  Partial<IDefaultConfigObj>
    type FetchConfigFunc = <T>(params: IUserFetchParams) => Promise<T>
    export type RequesterOption = FetchConfigObj | FetchConfigFunc

    const defaultConfig: IDefaultConfigObj = {
      prefix: '',
      fetchOption: {
        headers: {},
        credentials: 'same-origin',
      },
    };

    export const defaultFetch = async ({ url, method, params, extra, fetchOption }: IDefaultFetchParams) => {
      let urlWithParams = url;
      const init: RequestInit = { ...fetchOption, method };
      if (method === 'GET') {
        const qs = stringifyQueryString(params)
        urlWithParams = qs ? url + '?' + qs : url;
      } else if (
        method === 'POST' &&
        extra &&
        extra.contentType === 'application/x-www-form-urlencoded'
      ) {
        init.body = stringifyQueryString(params);
      } else if (method === 'POST' && extra && extra.contentType === 'multipart/form-data') {
        const formdata = new FormData();
        params &&
          Object.keys(params).forEach(key => {
            params[key] && formdata.append(key, params[key]);
          });
        init.body = formdata;
      } else {
        init.body = typeof params === 'object' ? JSON.stringify(params) : params;
      }

      /** 请求 url，增加 query 参数 */
      if (extra && typeof extra.query === 'object') {
        const qs = stringifyQueryString(extra.query) || '';
        const connectStr = urlWithParams.indexOf('?') > -1 ? '&' : '?';
        urlWithParams += connectStr + qs;
      }

      /** 用户自定义 Content-Type */
      /** 自主设置 multipart 无法正确设定 boundary，所以对 multipart/form-data 特殊处理 */
      if (extra && extra.contentType) {
        if (extra.contentType !== 'multipart/form-data') {
          init.headers = {
            ...init.headers,
            'Content-Type': extra.contentType,
          }
        }
      } else {
        init.headers = { ...init.headers, 'Content-Type': 'application/json' }
      }

      const res = await fetch(urlWithParams, init);
      return Promise.resolve(res.json());
    };

    export const getRapperRequest = (fetchConfig: RequesterOption) => {
      let rapperFetch: FetchConfigFunc;
      if (typeof fetchConfig === 'function') {
        rapperFetch = fetchConfig;
      } else {
        let { prefix, fetchOption, query } = fetchConfig;
        prefix = prefix !== undefined ? prefix : defaultConfig.prefix;
        fetchOption = fetchOption !== undefined ? fetchOption : defaultConfig.fetchOption;
        /** 全局query参数处理 */
        let defaultQuery: { [key: string]: Json };
        if (typeof query === 'function') {
          defaultQuery = query();
        } else if (query && typeof query === 'object') {
          defaultQuery = query;
        } else {
          defaultQuery = {};
        }

        rapperFetch = (requestParams: IUserFetchParams) => {
          const { url, method, params, extra } = requestParams;
          fetchOption = fetchOption || {};
          let newExtra = typeof extra === 'object' ? extra : {};
          const newQuery =
            typeof newExtra.query === 'object' ? { ...defaultQuery, ...newExtra.query } : defaultQuery;
          newExtra = { ...newExtra, query: newQuery };
          return defaultFetch({
            url: parseUrl(url, prefix),
            method,
            params,
            extra: newExtra,
            fetchOption,
          });
        };
      }
      return wrapPreProcessRestfulUrl(rapperFetch);
    };
  `;
}

export function createBaseLibCode(): IGeneratedCode {
  return {
    import: ``,
    body: `
  /**
   * 包装请求函数，预处理 Restful API 的 url，把 params 塞到 url 里面
   */
  export function wrapPreProcessRestfulUrl(fetch: (fetchParams: IUserFetchParams) => Promise<any>) {
    return (fetchParams: IUserFetchParams) => {
      return fetch({
        ...fetchParams,
        ...processRestfulUrl(fetchParams.url, fetchParams.params),
      });
    };
  }
  
  export function processRestfulUrl(url: string, params: any) {
    const urlSplit = url.split('/');
    const newParams = { ...params };
    for (let i = 0; i < urlSplit.length; ++i) {
      const part = urlSplit[i];
      if (part[0] === ':') {
        const key = part.slice(1);
        if (params.hasOwnProperty(key)) {
          urlSplit[i] = params[key];
          delete newParams[key];
        }
      }
    }
    return { url: urlSplit.join('/'), params: newParams };
  }
  
    
  /**
   * search 参数转换，比如 { a: 1, b: 2, c: undefined } 转换成 "a=1&b=2"
   * 会自动删除 undefined
   */
  export function stringifyQueryString(
    obj: {
      [key: string]: any
    } = {}
  ): string {
    return Object.entries(obj).reduce((str, [key, value]) => {
      if (value === undefined) {
        return str
      }
      str = str ? str + '&' : str
      if (typeof value === 'object') {
        value = JSON.stringify(value)
      }
      return str + encodeURIComponent(key) + '=' + encodeURIComponent(value)
    }, '')
  }

  /** 拼接组合request链接 */
  function parseUrl(url: string, requestPrefix?: string): string {
    const urlReg = /^((https?:)?\\/\\/(([a-zA-Z0-9]+-?)+[a-zA-Z0-9]+\\.)+[a-zA-Z]+)(:\\d+)?(\\/.*)?/
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
