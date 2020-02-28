import { Intf, ICreatorExtr } from '../types';
import { RAPPER_STATE_KEY, RAPPER_CLEAR_STORE } from '../runtime/reduxLib';
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
      '${modelName}': Array<reduxLib.IInterfaceInfo & {
        request: IModels['${modelName}']['Req']
        response: IResponseTypes['${modelName}']
      }>`,
        )
        .join(',\n\n')}
    }
    export type TRapperStoreKey = keyof IRapperStore
    
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
        return reduxLib.useResponseData<TRapperStoreKey, Req, Res, Item>(
          '${itf.modelName}', filter)
      }`,
        )
        .join(',\n\n')}
    }

    export const useRapper = {
      ${interfaces
        .map(
          itf => `
      ${creatInterfaceHelpStr(extr.rapUrl, itf)}
      /* tslint:disable */
      '${itf.modelName}': function useData(
        requestParams: IModels['${itf.modelName}']['Req'],
        extra?: reduxLib.IUseRapperExtra & { fetch?: ReturnType<typeof createFetch> }
      ) {
        type Req = IModels['${itf.modelName}']['Req']
        type Res = IResponseTypes['${itf.modelName}']
        type IFetcher = typeof rapperFetch['GET/example/1574387719563']
        const rapperFetch = (extra && extra.fetch) ? extra.fetch : fetch
        return reduxLib.useRapperCommon<TRapperStoreKey, Req, Res, IFetcher>({
          modelName: '${itf.modelName}',
          fetcher: rapperFetch['${itf.modelName}'],
          requestParams,
          extra,
        })
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
        return useSelector((state: reduxLib.IState) => {
          const selectedState = (state['${RAPPER_STATE_KEY}'] && state['${RAPPER_STATE_KEY}']['${
            itf.modelName
          }']) || []
          type TReturnItem = reduxLib.IInterfaceInfo & {
            request?: IModels['${itf.modelName}']['Req'];
            response?: IResponseTypes['${itf.modelName}'];
          }
          return selectedState as Array<TReturnItem>
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
        reduxLib.dispatchAction({
          type: '${RAPPER_CLEAR_STORE}', 
          payload: { '${itf.modelName}': undefined }
        })
      }`,
        )
        .join(',\n\n')}
    }
    `;
}

export function createBaseSelectorStr(interfaces: Array<Intf>): string {
  return `
    export const rapperBaseSelector = {
    ${interfaces
      .map(
        ({ modelName }) => `
      '${modelName}': (state: reduxLib.IState, filter?: { request?: IModels['${modelName}']['Req'] } | { (storeData: IRapperStore['${modelName}'][0]): boolean }) => {
        type Req = IModels['${modelName}']['Req'];
        type Res = IResponseTypes['${modelName}'];
        type Item = IRapperStore['${modelName}'][0];
        return reduxLib.getResponseData<TRapperStoreKey, Req, Res, Item>(state, '${modelName}', filter);
      }
    `,
      )
      .join(',\n\n')}
    }
  `;
}

export function createDataSelectorStr(interfaces: Array<Intf>): string {
  return `
    export const rapperDataSelector = {
    ${interfaces
      .map(
        ({ modelName }) => `
      '${modelName}': (state: reduxLib.IState) => {
        type Res = IResponseTypes['${modelName}'];
        return reduxLib.getRapperDataSelector<TRapperStoreKey, Res>(state, '${modelName}');
      }
    `,
      )
      .join(',\n\n')}
    }
  `;
}
