import { Intf, CreatorExtr } from '../types';
import { RAPPER_STATE_KEY, RAPPER_CLEAR_STORE, RAPPER_REQUEST } from './index';
import { creatInterfaceHelpStr } from '../core/tools';

/** 定义 请求types interface  */
function getRequestTypesInterfaceStr(interfaces: Array<Intf>): string {
  return `interface RequestTypes {
    ${interfaces
      .map(
        ({ modelName }) =>
          `'${modelName}': ['${modelName}_REQUEST', '${modelName}_SUCCESS', '${modelName}_FAILURE']`,
      )
      .join('\n\n')}
    }
  `;
}

/** 定义 请求action interface  */
function getRequestActionInterfaceStr(interfaces: Array<Intf>): string {
  return `interface RequestAction {
    ${interfaces
      .map(({ modelName, method, url }) => {
        return `
          '${modelName}': (params?: Models['${modelName}']['Req']) => {
              type: '${RAPPER_REQUEST}',
              payload: {
                  modelName: '${modelName}'
                  url: '${url}'
                  method: '${method}'
                  params?: Models['${modelName}']['Req']
                  types: ['${modelName}_REQUEST', '${modelName}_SUCCESS', '${modelName}_FAILURE']
              }
          },
        `;
      })
      .join('\n\n')}
    }
`;
}

/** 定义 请求types */
function getRequestTypesStr(interfaces: Array<Intf>): string {
  return `const RequestTypes:RequestTypes = {
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

/** 定义 请求action */
function getRequestActionStr(interfaces: Array<Intf>, extr: CreatorExtr): string {
  return `export const RequestAction: RequestAction = {
    ${interfaces
      .map(itf => {
        const { url, modelName, method } = itf;
        return `
          ${creatInterfaceHelpStr(extr.rapUrl, itf)}
          '${modelName}': (params) => ({
            type: '${RAPPER_REQUEST}',
            payload: {
                modelName: '${modelName}',
                url: '${url}',
                method: '${method}',
                params,
                types: RequestTypes['${modelName}'],
            },
          }),
      `;
      })
      .join('\n\n')}
    }
`;
}

/** 生成 Action 定义 */
export function createActionStr(interfaces: Array<Intf>, extr: CreatorExtr): string {
  return `
        /** 请求types interface  */
        ${getRequestTypesInterfaceStr(interfaces)}
    
        /** 请求action interface  */
        ${getRequestActionInterfaceStr(interfaces)}
    
        /** 请求types */
        ${getRequestTypesStr(interfaces)}
    
        /** 请求action */
        ${getRequestActionStr(interfaces, extr)}
        `;
}

/** 生成 useResponse，useAllResponse */
export function createUseRapStr(interfaces: Array<Intf>, extr: CreatorExtr): string {
  return `
    /** store中存储的数据结构 */
    interface RapperStore {
      '${RAPPER_STATE_KEY}': {
        ${interfaces
          .map(
            ({ modelName }) => `
        '${modelName}': Array<{
          request: Models['${modelName}']['Req']
          response: Models['${modelName}']['Res']
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
          filter?: { request?: Models['${itf.modelName}']['Req'] } | { (
              storeData: RapperStore['${RAPPER_STATE_KEY}']['${itf.modelName}'][0]
          ): boolean }
      ) {
        type M = keyof RapperStore['${RAPPER_STATE_KEY}']
        type Req = Models['${itf.modelName}']['Req']
        type Item = RapperStore['${RAPPER_STATE_KEY}']['${itf.modelName}'][0]
        type Res = ResponseTypes['${itf.modelName}']
        return useResponseData<RapperStore, M, Req, Item>('${
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
        return useSelector((state: State) => {
          const selectedState = (state['${RAPPER_STATE_KEY}'] && state['${RAPPER_STATE_KEY}']['${
            itf.modelName
          }']) || []
          return selectedState as Array<ResponseTypes['${itf.modelName}']>
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
      '${modelName}': createSelector(
        (state: State) => state['${RAPPER_STATE_KEY}']['${modelName}'],
        responseData => {
          return connectGetResponse(responseData) as ResponseTypes['${modelName}']
        }
      )
    `,
      )
      .join(',\n\n')}
    }
  `;
}
