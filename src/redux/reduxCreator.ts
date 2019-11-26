import { Intf, ICreatorExtr } from '../types';
import { RAPPER_STATE_KEY, RAPPER_CLEAR_STORE } from './index';
import { creatInterfaceHelpStr } from '../core/tools';

/** 定义 请求types */
function getRequestTypesStr(interfaces: Array<Intf>): string {
  return `export const RequestTypes = {
    ${interfaces
      .map(({ modelName }) => {
        return `
          '${modelName}': [
              '${modelName}_REQUEST',
              '${modelName}_SUCCESS',
              '${modelName}_FAILURE',
          ],
        `;
      })
      .join('\n\n')}
  }`;
}

/** 生成 Action 定义 */
export function createActionStr(interfaces: Array<Intf>, extr: ICreatorExtr): string {
  return `
    /** 请求types */
    ${getRequestTypesStr(interfaces)}
  `;
}

/** 生成 useResponse，useAllResponse */
export function createUseRapStr(interfaces: Array<Intf>, extr: ICreatorExtr): string {
  return `
    /** store中存储的数据结构 */
    interface IRapperStore {
      ${interfaces
        .map(
          ({ modelName }) => `
      '${modelName}': Array<{
        request: IModels['${modelName}']['Req']
        response: IModels['${modelName}']['Res']
        id: number
        requestTime: number
        responseTime: number
        isPending: boolean
      }>`,
        )
        .join(',\n\n')}
    }
    type TRapperStoreKey = keyof IRapperStore
    
    export const useResponse = {
      ${interfaces
        .map(
          itf => `
      ${creatInterfaceHelpStr(extr.rapUrl, itf)}
      /* tslint:disable */
      '${itf.modelName}': function useData(
          filter?: { request?: IModels['${itf.modelName}']['Req'] } | { (
              storeData: IRapperStore['${itf.modelName}'][0]
          ): boolean }
      ) {
        type Req = IModels['${itf.modelName}']['Req']
        type Item = IRapperStore['${itf.modelName}'][0]
        type Res = IResponseTypes['${itf.modelName}']
        return useResponseData<TRapperStoreKey, Req, Res, Item>(
          '${itf.modelName}', filter)
      }`,
        )
        .join(',\n\n')}
    }
    
    export const useAllResponse = {
      ${interfaces
        .map(
          itf => `
      ${creatInterfaceHelpStr(extr.rapUrl, itf)}
      /* tslint:disable */
      '${itf.modelName}': function useData() {
        return useSelector((state: IState) => {
          const selectedState = (state['${RAPPER_STATE_KEY}'] && state['${RAPPER_STATE_KEY}']['${
            itf.modelName
          }']) || []
          return selectedState as Array<IResponseTypes['${itf.modelName}']>
        })
      }`,
        )
        .join(',\n\n')}
    }
    
    /** 重置接口数据 */
    export const clearResponseCache = {
      ${interfaces
        .map(
          itf => `
      ${creatInterfaceHelpStr(extr.rapUrl, itf)}
      '${itf.modelName}': (): void => {
        dispatchAction({
          type: '${RAPPER_CLEAR_STORE}', 
          payload: { '${itf.modelName}': undefined }
        })
      }`,
        )
        .join(',\n\n')}
    }
    `;
}

export function createSelectorStr(interfaces: Array<Intf>): string {
  return `
    export const rapperSelector = {
    ${interfaces
      .map(
        ({ modelName }) => `
      '${modelName}': (state: IState, filter?: { request?: IModels['${modelName}']['Req'] } | { (storeData: IRapperStore['${modelName}'][0]): boolean }) => {
        type Req = IModels['${modelName}']['Req'];
        type Res = IResponseTypes['${modelName}'];
        type Item = IRapperStore['${modelName}'][0];
        return getResponseData<TRapperStoreKey, Req, Res, Item>(state, '${modelName}', filter);
      }
    `,
      )
      .join(',\n\n')}
    }
  `;
}
