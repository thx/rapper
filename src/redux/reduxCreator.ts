import { Intf } from '../types';
import { RAPPER_STATE_KEY, RAPPER_CLEAR_STORE, RAPPER_REQUEST } from './index';

/** 定义 请求types interface  */
function getRequestTypesInterfaceStr(interfaces: Intf[]): string {
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
function getRequestActionInterfaceStr(interfaces: Intf[]): string {
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
function getRequestTypesStr(interfaces: Intf[]): string {
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
function getRequestActionStr(interfaces: Intf[]): string {
  return `export const RequestAction: RequestAction = {
    ${interfaces
      .map(({ id, repositoryId, moduleId, name, url, modelName, method }) => {
        return `
          /**
           * 接口名：${name}
           * Rap 地址: http://rap2.alibaba-inc.com/repository/editor?id=${repositoryId}&mod=${moduleId}&itf=${id}
           */
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
export function createActionStr(interfaces: Intf[]): string {
  return `
        /** 请求types interface  */
        ${getRequestTypesInterfaceStr(interfaces)}
    
        /** 请求action interface  */
        ${getRequestActionInterfaceStr(interfaces)}
    
        /** 请求types */
        ${getRequestTypesStr(interfaces)}
    
        /** 请求action */
        ${getRequestActionStr(interfaces)}
        `;
}

/** 生成 useResponse，useAllResponse */
export function createUseRapStr(interfaces: Intf[]): string {
  return `
    /** store中存储的数据结构 */
    interface RapperStore {
      '${RAPPER_STATE_KEY}': {
        ${interfaces
          .map(
            ({ modelName }) => `
        '${modelName}': {
          request: Models['${modelName}']['Req']
          response: Models['${modelName}']['Res']
          id: number
          requestTime: number
          responseTime: number
          isFetching: boolean
        }[]`,
          )
          .join(',\n\n')}
      }
    }
    
    export const useResponse = {
      ${interfaces
        .map(
          ({ modelName, name, repositoryId, moduleId, id }) => `
      /**
       * 接口名：${name}
       * Rap 地址: http://rap2.alibaba-inc.com/repository/editor?id=${repositoryId}&mod=${moduleId}&itf=${id}
       */
      /* tslint:disable */
      '${modelName}': function useData(
          filter?: { request?: Models['${modelName}']['Req'] } | { (
              storeData: RapperStore['${RAPPER_STATE_KEY}']['${modelName}'][0]
          ): boolean }
      ) {
        type M = keyof RapperStore['${RAPPER_STATE_KEY}']
        type Req = Models['${modelName}']['Req']
        type Item = RapperStore['${RAPPER_STATE_KEY}']['${modelName}'][0]
        type Res = ResponseTypes['${modelName}']
        return useResponseData<RapperStore, M, Req, Item>('${modelName}', filter) as [Res, boolean | undefined]
      }`,
        )
        .join(',\n\n')}
    }
    
    export const useAllResponse = {
      ${interfaces
        .map(
          ({ modelName, name, repositoryId, moduleId, id }) => `
      /**
       * 接口名：${name}
       * Rap 地址: http://rap2.alibaba-inc.com/repository/editor?id=${repositoryId}&mod=${moduleId}&itf=${id}
       */
      /* tslint:disable */
      '${modelName}': function useData() {
        return useSelector((state: State) => {
          const selectedState = (state['${RAPPER_STATE_KEY}'] && state['${RAPPER_STATE_KEY}']['${modelName}']) || []
          return selectedState as ResponseTypes['${modelName}'][]
        })
      }`,
        )
        .join(',\n\n')}
    }
    
    /** 重置接口数据 */
    export const clearResponseCache = {
        ${interfaces
          .map(
            ({ modelName, name, repositoryId, moduleId, id }) => `
        /**
         * 接口名：${name}
         * Rap 地址: http://rap2.alibaba-inc.com/repository/editor?id=${repositoryId}&mod=${moduleId}&itf=${id}
         */
        '${modelName}': (): void => {
            dispatchAction({
                type: '${RAPPER_CLEAR_STORE}', 
                payload: {
                    '${modelName}': undefined,
                }
            })
        }`,
          )
          .join(',\n\n')}
    }
    `;
}

export function createSelectorStr(interfaces: Intf[]): string {
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

/** 生成 connect */
export function createConnectStr(): string {
  return `
      type ConnectProps = Parameters<typeof defaultConnect>;
      export const connect = (
        mapStateToProps: ConnectProps[0],
        mapDispatchToProps?: any,
        mergeProps?: any,
        options?: ConnectProps[3],
      ) => {
        const newMapDispatchToProps: ConnectProps[1] = (dispatch: any) => {
          return { ...mapDispatchToProps(dispatch), fetch };
        };
        return defaultConnect(mapStateToProps, newMapDispatchToProps, mergeProps, options);
      };
    `;
}
