import { createModel, createResponseTypes } from '../core/base-creator';
import { Intf, CreatorExtr } from '../types';
import { creatInterfaceHelpStr } from '../core/tools';
import { RAPPER_REQUEST } from './index';

export async function createBaseRequestStr(interfaces: Array<Intf>, extr: CreatorExtr) {
  const modelStr = await createModel(interfaces, extr);
  return `
    import { dispatchAction, RequesterOption, UserFetchParams, IExtra, getRapperRequest } from './lib'
    import { RequestTypes } from './redux'

    ${modelStr}

    ${extr.resSelector}
  
    ${createResponseTypes(interfaces)}

    export function createFetch(fetchConfig: RequesterOption) {
      const rapperFetch = getRapperRequest(fetchConfig);
      const sendRapperFetch = (modelName: string, requestParams: UserFetchParams) => {
        const { extra } = requestParams;
        if (extra && extra.type === 'normal') {
          return rapperFetch(requestParams);
        } else {
          const action = {
            type: '${RAPPER_REQUEST}',
            payload: { ...requestParams, modelName, types: RequestTypes[modelName] },
          };
          return dispatchAction(action, rapperFetch);
        }
      };

      return {
      ${interfaces
        .map(itf => {
          const { modelName, url, method } = itf;
          const extrText = `* @param req 请求参数
          * @param extra 请求配置项`;
          return `
          ${creatInterfaceHelpStr(extr.rapUrl, itf, extrText)}
          '${modelName}': (req?: Models['${modelName}']['Req'], extra?: IExtra) => {
            return sendRapperFetch('${modelName}', {
              url: '${url}',
              method: '${method.toUpperCase()}',
              params: req, 
              extra
            }) as Promise<ResponseTypes['${modelName}']>
          }`;
        })
        .join(',\n\n')}
      };
    }
  `;
}
