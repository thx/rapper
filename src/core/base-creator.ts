import chalk from 'chalk';
import convert from './convert';
import { Intf, GeneratedCode } from '../types';

/** 生成 model.ts 文件 */
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

export function createBaseIndexCode(): GeneratedCode {
  return {
    import: `
    import { createRequester, Models } from './request'
    import { defaultFetch } from './lib'`,
    body: ``,
    export: `export { defaultFetch, createRequester, Models }`,
  };
}

export function createBaseLibCode(): GeneratedCode {
  return {
    import: ``,
    body: `
  /**
   * search 参数转换，比如 { a: 1, b: 2, c: undefined } 转换成 "a=1&b=2"
   * 会自动删除 undefined
   */
  function locationStringify(
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

  export async function defaultFetch(params: any) {
      let requestUrl = params.url
      const requestParams: any = {
          credentials: 'include',
          method: params.method || 'GET',
          headers: { 'Content-Type': 'application/json' },
      }

      if (requestParams.method === 'GET') {
          requestUrl = requestUrl + '?' + locationStringify(params.params)
      } else if (params.params) {
          requestParams.body = JSON.stringify(params.params)
      }
      const res = await fetch(requestUrl, requestParams)
      const retJSON = res.clone() // clone before return
      return retJSON.json()
  }
  `,
    export: '',
  };
}
