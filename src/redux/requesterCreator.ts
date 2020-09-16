import { createModel, createResponseTypes } from '../core/base-creator';
import { Intf, ICreatorExtr } from '../types';
import { creatInterfaceHelpStr } from '../core/tools';
import { getPackageName } from '../utils';

const packageName = getPackageName();

export async function createBaseRequestStr(interfaces: Array<Intf>, extr: ICreatorExtr) {
  const modelStr = await createModel(interfaces, extr);
  return `
    import * as commonLib from '${packageName}/runtime/commonLib'
    import * as reduxLib from '${packageName}/runtime/reduxLib'
    import { RequestTypes } from './redux'

    ${modelStr}

    ${extr.resSelector}
  
    ${createResponseTypes(interfaces)}

    export function createFetch(fetchConfig: commonLib.RequesterOption, extraConfig?: { fetchType?: commonLib.FetchType }) {
      if (!extraConfig || !extraConfig.fetchType) {
        console.warn('Rapper Warning: createFetch API will be deprecated, if you want to customize fetch, please use overrideFetch instead, since new API guarantees better type consistency during frontend lifespan. See detail https://www.yuque.com/rap/rapper/overridefetch')
      }
      const rapperFetch = commonLib.getRapperRequest(fetchConfig);
      const sendRapperFetch = (modelName: keyof typeof RequestTypes, requestParams: commonLib.IUserFetchParams) => {
        const { extra } = requestParams;
        if (extra && extra.type === 'normal') {
          return rapperFetch(requestParams);
        } else {
          const action = {
            type: '$$RAPPER_REQUEST',
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
          '${modelName}': (req?: IModels['${modelName}']['Req'], extra?: commonLib.IExtra) => {
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
