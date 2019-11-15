import { createModel, createResponseTypes } from '../core/base-creator';
import { Intf, CreatorExtr } from '../types';
import { creatInterfaceHelpStr } from '../core/tools';

export async function createBaseRequestStr(interfaces: Array<Intf>, extr: CreatorExtr) {
  const modelStr = await createModel(interfaces, extr);
  return `
    import { parseUrl, dispatchAction, defaultFetch, defaultConfig, RequesterOption, UserFetchParams, FetchConfigFunc } from './lib'
    import { RequestAction } from './redux'

    ${modelStr}

    ${extr.resSelector}
  
    ${createResponseTypes(interfaces)}

    export function createFetch(fetchConfig: RequesterOption) {
      let rapperFetch: FetchConfigFunc;
      if (typeof fetchConfig === 'function') {
        rapperFetch = fetchConfig;
      } else {
        const prefix = fetchConfig.prefix !== undefined ? fetchConfig.prefix : defaultConfig.prefix;
        const fetchOption =
          fetchConfig.fetchOption !== undefined ? fetchConfig.fetchOption : defaultConfig.fetchOption;
        rapperFetch = (requestParams: UserFetchParams) => {
          const url = parseUrl(requestParams.url, prefix);
          return defaultFetch({
            url,
            method: requestParams.method,
            params: requestParams.method,
            fetchOption,
          });
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
  `;
}
