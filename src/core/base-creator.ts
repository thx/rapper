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
        throw chalk.red(`接口：http://rap2.alibaba-inc.com/repository/editor?id=${itf.repositoryId}&mod=${itf.moduleId}&itf=${itf.id}
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
            '${modelName}': (req?: IModels['${modelName}']['Req'], extra?: any) => {
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
    `,
    body: `
      const fetch = createFetch({})
    `,
    export: `
      export { fetch, createFetch }
      export type Models = IModels
    `,
  };
}

/** 生成 defaultFetch */
function createDefaultFetch() {
  return `
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
    
    export interface IDefaultConfigObj {
      /** 'prefix' 前缀，统一设置 url 前缀，默认是 '' */
      prefix: string
      /** fetch 的第二参数，除了 body 和 method 都可以自定义 */
      fetchOption: IDefaultFetchParams['fetchOption']
    }
    export type FetchConfigObj =  Partial<IDefaultConfigObj>
    type FetchConfigFunc = <T>(params: IUserFetchParams) => Promise<T>
    export type RequesterOption = FetchConfigObj | FetchConfigFunc

    const defaultConfig: IDefaultConfigObj = {
      prefix: '',
      fetchOption: {
        headers: { 'Content-Type': 'application/json' },
        credentials: 'same-origin',
      },
    };

    const defaultFetch = async ({ url, method, params, extra, fetchOption }: IDefaultFetchParams) => {
      let urlWithParams = url;
      const init: RequestInit = { ...fetchOption, method };
      if (method === 'GET') {
        urlWithParams = url + '?' + locationStringify(params);
      } else if (
        method === 'POST' &&
        extra &&
        extra.contentType === 'application/x-www-form-urlencoded'
      ) {
        init.body = locationStringify(params);
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

      /** 用户自定义 Content-Type */
      if (extra && extra.contentType) {
        init.headers = { ...init.headers, 'Content-Type': extra.contentType };
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
    
        rapperFetch = (requestParams: IUserFetchParams) => {
          const { url, method, params, extra } = requestParams;
          fetchOption = fetchOption || {};
          return defaultFetch({ url: parseUrl(url, prefix), method, params, extra, fetchOption });
        };
      }
      return rapperFetch;
    };
  `;
}

export function createBaseLibCode(): IGeneratedCode {
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
