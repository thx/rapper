import { createModel, createResponseTypes } from '../core/base-creator';
import { Intf, ICreatorExtr } from '../types';
import { creatInterfaceHelpStr } from '../core/tools';
import { RAPPER_REQUEST } from '../runtime/reduxLib';
import { getPackageName } from '../utils';

const packageName = getPackageName();

export async function createBaseRequestStr(interfaces: Array<Intf>, extr: ICreatorExtr) {
  const modelStr = await createModel(interfaces, extr);
  return `
    import commonLib from '${packageName}/runtime/commonLib'
    import reduxLib from '${packageName}/runtime/reduxLib'
    import { RequestTypes } from './redux'

    ${modelStr}

    ${extr.resSelector}
  
    ${createResponseTypes(interfaces)}

    export function createFetch(fetchConfig: commonLib.RequesterOption) {
      const rapperFetch = reduxLib.getRapperRequest(fetchConfig);
      const sendRapperFetch = (modelName: keyof typeof RequestTypes, requestParams: reduxLib.IUserFetchParams) => {
        const { extra } = requestParams;
        if (extra && extra.type === 'normal') {
          return rapperFetch(requestParams);
        } else {
          const action = {
            type: '${RAPPER_REQUEST}',
            payload: { ...requestParams, modelName, types: RequestTypes[modelName] },
          };
          return reduxLib.dispatchAction(action, rapperFetch);
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
          '${modelName}': (req?: IModels['${modelName}']['Req'], extra?: reduxLib.IReduxExtra) => {
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
