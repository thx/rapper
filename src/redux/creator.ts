import { Intf } from '../types';

/** 定义 请求types interface  */
function getRequestTypesInterfaceStr(interfaces: Intf[]): string {
  return `interface IRequestTypes {
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
  return `interface IRequestAction {
          ${interfaces
            .map(({ modelName, method, url }) => {
              return `
                      '${modelName}': (params?: Models['${modelName}']['Req']) => {
                          type: '$$RAPPER_REQUEST',
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
  return `const RequestTypes:IRequestTypes = {
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
  return `const RequestAction:IRequestAction = {
          ${interfaces
            .map(({ id, repositoryId, moduleId, name, url, modelName, method }) => {
              return `
                      /**
                       * 接口名：${name}
                       * Rap 地址: http://rap2.alibaba-inc.com/repository/editor?id=${repositoryId}&mod=${moduleId}&itf=${id}
                       */
                      '${modelName}': (params) => ({
                          type: RAPPER_REQUEST,
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

/** 生成 rapperRequest */
export function createRapperRequestStr(interfaces: Intf[]): string {
  return `
      export const rapperRequest = {
          ${interfaces
            .map(
              ({ modelName, name, repositoryId, moduleId, id }) => `
          /**
           * 接口名：${name}
           * Rap 地址: http://rap2.alibaba-inc.com/repository/editor?id=${repositoryId}&mod=${moduleId}&itf=${id}
           * @param req 请求参数
           */
          '${modelName}': (req?: Models['${modelName}']['Req']) => {
              const action = RequestAction['${modelName}'](req)
              return dispatchAction(action) as ResponsePromiseType<Models['${modelName}']['Res']>
          }`,
            )
            .join(',\n\n')}
      };
      `;
}

/** 生成 useResponse，useAllResponse */
export function createUseRapStr(interfaces: Intf[]): string {
  return `
      /** store中存储的数据结构 */
      interface IStoreItem {
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
          }`,
            )
            .join(',\n\n')}
      }
  
      interface FilterObj<Req> {
          request?: Req
      }
      type FilterFunc<Item> = (storeData: Item) => boolean
      interface IState {
          [key: string]: any
      }
      function useResponseData<Req, Res, Item extends { request: Req }>(
          modelName: string,
          filter?: FilterObj<Req> | FilterFunc<Item>
      ) {
          const reduxData = useSelector((state: IState) => {
            return (state[RAPPER_STATE_KEY] && state[RAPPER_STATE_KEY][modelName]) || []
          })
          const initData = reduxData.length ? reduxData.slice(-1)[0] : {}
          const [filteredData, setFilteredData] = useState(initData.response || undefined)
          const [isFetching, setIsFetching] = useState(initData.isFetching || false)
        
          useEffect(() => {
            let resultArr = []
            if (filter) {
              if (typeof filter === 'function') {
                resultArr = reduxData.filter((item: Item) => functionFilter<Item, typeof filter>(item, filter))
              } else {
                resultArr = reduxData.filter((item: Item) => paramsFilter<Req, Item, typeof filter>(item, filter))
              }
            } else {
              resultArr = reduxData
            }
            /** 过滤出一条最新的符合条件的数据 */
            const result = resultArr.length ? resultArr.slice(-1)[0] : {}
        
            if (!looseEqual(result.response, filteredData)) {
              setFilteredData(result.response || undefined)
              setIsFetching(result.isFetching || false)
            }
          }, [reduxData, filter, filteredData])
        
          return [filteredData, isFetching] as [ResponseType<Res>, boolean | undefined]
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
                  storeData: IStoreItem['${modelName}']
              ): boolean }
          ) {
              type Req = Models['${modelName}']['Req']
              type Res = Models['${modelName}']['Res']
              type Item = IStoreItem['${modelName}']
              return useResponseData<Req, Res, Item>('${modelName}', filter)
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
              return useSelector((state: IState) => {
                  const selectedState = (state[RAPPER_STATE_KEY] && state[RAPPER_STATE_KEY]['${modelName}']) || []
                  return selectedState as Models['${modelName}']['Res'][]
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
                  type: RAPPER_CLEAR_STORE, 
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

/** 生成 types 定义 */
export function createTypesStr(): string {
  return `
    /** 请求类型 */
    type REQUEST_METHOD = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'OPTIONS' | 'PATCH' | 'HEAD'
    
    interface Action<T = any> {
        type: T
    }
    export interface AnyAction extends Action {
        [extraProps: string]: any
    }
    export interface IRequestAction {
        type: '$$RAPPER_REQUEST'
        payload?: {
            modelName: string
            url: string
            method?: REQUEST_METHOD
            params?: any
            types: string[]
        }
    }
    
    export type IAction = AnyAction | IRequestAction
    
    /** store enhancer 参数 */
    export interface IEnhancerProps {
        /** 缓存数据最大长度 */
        maxCacheLength?: number
    }
    
    type Dispatch<A = AnyAction> = <T extends A>(action: T, ...extraArgs: any[]) => T
    type Unsubscribe = () => void
    export type Reducer<S = any, A = AnyAction> = (state: S | undefined, action: A) => S
    type ExtendState<State, Extension> = [Extension] extends [never] ? State : State & Extension
    type Observer<T> = {
        next?(value: T): void
    }
    type Observable<T> = {
        subscribe: (observer: Observer<T>) => { unsubscribe: Unsubscribe }
        [Symbol.observable](): Observable<T>
    }
    
    export type StoreEnhancer<Ext = {}, StateExt = {}> = (next: StoreEnhancerStoreCreator) => StoreEnhancerStoreCreator<Ext, StateExt>
    
    export type StoreEnhancerStoreCreator<Ext = {}, StateExt = {}> = <S = any, A extends Action = AnyAction>(
        reducer: Reducer<S, A>,
        preloadedState?: DeepPartial<S>
    ) => IStore<S & StateExt, A> & Ext
    
    export type DeepPartial<T> = {
        [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K]
    }
    
    /** Store */
    export interface IStore<S = any, A = IAction, StateExt = never, Ext = {}> {
        dispatch: Dispatch<A>
        getState(): S
        subscribe(listener: () => void): Unsubscribe
        replaceReducer<NewState, NewActions>(
            nextReducer: Reducer<NewState, NewActions>
        ): IStore<ExtendState<NewState, StateExt>, NewActions, StateExt, Ext> & Ext
        [Symbol.observable](): Observable<S>
    }
    
    declare const $CombinedState: unique symbol
    
    export type CombinedState<S> = { readonly [$CombinedState]?: undefined } & S
    
    export type PreloadedState<S> = Required<S> extends {
        [$CombinedState]: undefined
    }
        ? S extends CombinedState<infer S1>
        ? {
            [K in keyof S1]?: S1[K] extends object ? PreloadedState<S1[K]> : S1[K]
        }
        : never
        : {
            [K in keyof S]: S[K] extends object ? PreloadedState<S[K]> : S[K]
        }
    
    export interface StoreCreator {
        <S, A extends Action, Ext = {}, StateExt = never>(reducer: Reducer<S, A>, enhancer?: StoreEnhancer<Ext, StateExt>): IStore<
            ExtendState<S, StateExt>,
            A,
            StateExt,
            Ext
        > &
            Ext
        <S, A extends Action, Ext = {}, StateExt = never>(
            reducer: Reducer<S, A>,
            preloadedState?: PreloadedState<S>,
            enhancer?: StoreEnhancer<Ext>
        ): IStore<ExtendState<S, StateExt>, A, StateExt, Ext> & Ext
    }
    `;
}

/** 生成 redux 运行时依赖 */
export function createReduxRuntime(): string {
  return `
export const RAPPER_REQUEST = '$$RAPPER_REQUEST'
export const RAPPER_UPDATE_STORE = '$$RAPPER_UPDATE_STORE'
export const RAPPER_CLEAR_STORE = '$$RAPPER_CLEAR_STORE'
export const RAPPER_STATE_KEY = '$$rapperResponseData'

let dispatch = <Res>(action: IAction): Promise<AnyAction | Res> => {
    return new Promise(() => null)
}

/** redux store存的数据结构 */
interface IStateInterfaceItem {
    /** 请求的唯一id，暂时等于requestTime */
    id: number
    /** 请求时间 */
    requestTime: number
    /** 请求参数 */
    request?: any
    /** 是否正在 fetching */
    isFetching: boolean
    /** 响应时间 */
    reponseTime?: number
    /** 请求响应数据 */
    response?: any
}
interface IAssignDataProps {
    /** 合并前的State */
    oldState: {
        [key: string]: IStateInterfaceItem[]
    }
    /** 最大缓存数 */
    maxCacheLength?: number
    payload: {
        /** 接口的key */
        interfaceKey: string
        id: number
        requestTime: number
        reponseTime?: number
        request?: any
        response?: any
        isFetching: boolean
    }
}
function assignData({
    oldState,
    payload: { interfaceKey, id, requestTime, reponseTime, request = {}, response, isFetching },
    maxCacheLength,
}: IAssignDataProps) {
    const newState = { ...oldState }
    if (typeof maxCacheLength !== 'number' || maxCacheLength < 1) {
        maxCacheLength = 2
    }

    let data = newState[interfaceKey] || []
    if (isFetching === true) {
        /** 只存最近 maxCacheLength 个数据 */
        if (maxCacheLength !== Infinity && data.length >= maxCacheLength) {
            data = newState[interfaceKey].slice(data.length - maxCacheLength + 1)
        }
        newState[interfaceKey] = [...data, { id, requestTime, request, isFetching }]
    } else {
        newState[interfaceKey] = data.map((item: IStateInterfaceItem) => (item.id === id ? { ...item, reponseTime, response, isFetching } : item))
    }

    return newState
}

export const rapReducers = {
    [RAPPER_STATE_KEY]: (state = {}) => state,
}

/** store enhancer */
export function rapEnhancer(config?: IEnhancerProps): StoreEnhancer<any> {
    config = config || {}
    const { maxCacheLength = 2 } = config

    return (next: StoreCreator) => (reducers: Reducer<any, any>, ...args: any[]) => {
        const store = next(reducers, ...args)

        /** 重新定义 reducers */
        const newReducers = (state: any, action: IAction): IStore => {
            if (state && !state[RAPPER_STATE_KEY]) {
                throw Error('rapper初始化配置失败，rootReducer应该加入rapReducers，具体请查看demo配置')
            }

            if (!action.hasOwnProperty('type')) {
                return reducers(state, action)
            }

            switch (action.type) {
                /** 请求成功，更新 store */
                case RAPPER_UPDATE_STORE:
                    return {
                        ...state,
                        [RAPPER_STATE_KEY]: assignData({
                            oldState: state[RAPPER_STATE_KEY],
                            maxCacheLength,
                            payload: action.payload,
                        }),
                    }
                /** 用户手动清空 */
                case RAPPER_CLEAR_STORE:
                    return {
                        ...state,
                        [RAPPER_STATE_KEY]: {
                            ...state[RAPPER_STATE_KEY],
                            ...action.payload,
                        },
                    }
                default:
                    return reducers(state, action)
            }
        }
        store.replaceReducer(newReducers)

        /** 重新定义 dispatch */
        dispatch = async <Res>(action: IAction) => {
            if (action.type !== RAPPER_REQUEST) {
                return store.dispatch(action)
            }

            const {
                modelName,
                url,
                method,
                params,
                cb,
                types: [REQUEST, SUCCESS, FAILURE],
            } = action.payload
            const requestTime = new Date().getTime()

            store.dispatch({ type: REQUEST })
            store.dispatch({
                type: RAPPER_UPDATE_STORE,
                payload: {
                    interfaceKey: modelName,
                    id: requestTime,
                    requestTime,
                    request: params,
                    isFetching: true,
                },
            })
            try {
                const responseData = await baseFetch<Res>({ url, method, params })
                const reponseTime = new Date().getTime()

                cb && cb(responseData)
                store.dispatch({ type: SUCCESS, payload: responseData })
                /** 请求成功，更新store */
                store.dispatch({
                    type: RAPPER_UPDATE_STORE,
                    payload: {
                        interfaceKey: modelName,
                        id: requestTime,
                        requestTime,
                        reponseTime,
                        request: params,
                        response: responseData,
                        isFetching: false,
                    },
                })
                return responseData
            } catch (e) {
                store.dispatch({ type: FAILURE, payload: e })
                store.dispatch({
                    type: RAPPER_UPDATE_STORE,
                    payload: {
                        interfaceKey: modelName,
                        id: requestTime,
                        requestTime,
                        isFetching: false,
                    },
                })
                throw Error(e)
            }
        }

        return { ...store, dispatch }
    }
}

/** 发送请求 */
export function dispatchAction<Res>(action: AnyAction) {
    return dispatch<Res>(action)
}
`;
}
