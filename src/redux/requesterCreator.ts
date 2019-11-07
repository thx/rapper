import { createModel, createResponseTypes } from '../core/base-creator';
import { Intf, CreatorExtr } from '../types';
import { creatInterfaceHelpStr } from '../core/tools';

export async function createBaseRequestStr(interfaces: Intf[], extr: CreatorExtr) {
  const modelStr = await createModel(interfaces, extr);
  return `
    import { parseUrl, dispatchAction, defaultFetch, defaultConfig, RequesterOption, FetchConfigObj } from './lib'
    import { RequestAction } from './redux'

    ${modelStr}

    ${extr.resSelector}
  
    ${createResponseTypes(interfaces)}

    export function createRequester(options?: RequesterOption) {
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
          const { modelName, url, method } = itf;
          const extrText = `* @param req 请求参数
          * @param extra 请求配置项`;
          return `
          ${creatInterfaceHelpStr(extr.rapUrl, itf, extrText)}
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
