import { createModel, createResponseTypes } from '../core/base-creator';
import { Intf, ICreatorExtr } from '../types';
import { creatInterfaceHelpStr } from '../core/tools';
import { RAPPER_REQUEST } from './index';

export async function createBaseRequestStr(interfaces: Array<Intf>, extr: ICreatorExtr) {
  const modelStr = await createModel(interfaces, extr);
  return `
    import { dispatchAction, RequesterOption, IUserFetchParams, IExtra, getRapperRequest } from './lib'
    import { RequestTypes } from './redux'

    ${modelStr}

    ${extr.resSelector}
  
    ${createResponseTypes(interfaces)}

    export function createFetch(fetchConfig: RequesterOption) {
      const rapperFetch = getRapperRequest(fetchConfig);
      const sendRapperFetch = (modelName: keyof typeof RequestTypes, requestParams: IUserFetchParams) => {
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
          '${modelName}': (req?: IModels['${modelName}']['Req'], extra?: IExtra) => {
            return sendRapperFetch('${modelName}', {
              url: '${url}',
              method: '${method.toUpperCase()}',
              params: req, 
              extra
            }) as Promise<IResponseTypes['${modelName}']>
          }`;
        })
        .join(',\n\n')}
      };
    }
  `;
}
