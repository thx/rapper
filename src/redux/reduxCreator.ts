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
      '${RAPPER_STATE_KEY}': {
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
    }
    
    export const useResponse = {
      ${interfaces
        .map(
          itf => `
      ${creatInterfaceHelpStr(extr.rapUrl, itf)}
      /* tslint:disable */
      '${itf.modelName}': function useData(
          filter?: { request?: IModels['${itf.modelName}']['Req'] } | { (
              storeData: IRapperStore['${RAPPER_STATE_KEY}']['${itf.modelName}'][0]
          ): boolean }
      ) {
        type M = keyof IRapperStore['${RAPPER_STATE_KEY}']
        type Req = IModels['${itf.modelName}']['Req']
        type Item = IRapperStore['${RAPPER_STATE_KEY}']['${itf.modelName}'][0]
        type Res = IResponseTypes['${itf.modelName}']
        return useResponseData<IRapperStore, M, Req, Item>('${
          itf.modelName
        }', filter) as [Res | undefined, {
          /** 本次请求的唯一id */
          id: number,
          /** 是否正在请求中 */
          isPending: boolean,
          /** 请求错误信息 */
          errorMessage?: string
        } ]
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
      '${modelName}': (state: IState) => {
        const responseData = state['${RAPPER_STATE_KEY}']['${modelName}']
        return connectGetResponse(responseData) as IResponseTypes['${modelName}'] | undefined
      }
    `,
      )
      .join(',\n\n')}
    }
  `;
}
