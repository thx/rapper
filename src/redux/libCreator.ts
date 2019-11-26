import { RAPPER_STATE_KEY, RAPPER_UPDATE_STORE, RAPPER_CLEAR_STORE, RAPPER_REQUEST } from './index';

/** 生成 types 定义 */
export function createTypesStr(): string {
  return `
    /** 请求类型 */
    type REQUEST_METHOD = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'OPTIONS' | 'PATCH' | 'HEAD'
    
    interface IAction<T = any> {
      type: T
    }
    export interface IAnyAction extends IAction {
      [extraProps: string]: any
    }
    export interface IRequestAction {
      type: '${RAPPER_REQUEST}'
      payload?: {
        modelName: string
        url: string
        method?: REQUEST_METHOD
        params?: any
        types: string[]
      }
    }
    
    export type TAction = IAnyAction | IRequestAction
    
    /** store enhancer 参数 */
    export interface IEnhancerProps {
      /** 缓存数据最大长度 */
      maxCacheLength?: number
    }
    
    type Dispatch<A = IAnyAction> = <T extends A>(action: T, ...extraArgs: any[]) => T
    type Unsubscribe = () => void
    export type Reducer<S = any, A = IAnyAction> = (state: S | undefined, action: A) => S
    type ExtendState<IState, Extension> = [Extension] extends [never] ? IState : IState & Extension
    type Observer<T> = {
      next?(value: T): void
    }
    type Observable<T> = {
      subscribe: (observer: Observer<T>) => { unsubscribe: Unsubscribe }
      [Symbol.observable](): Observable<T>
    }
    
    export type StoreEnhancer<Ext = {}, StateExt = {}> = (next: StoreEnhancerStoreCreator) => StoreEnhancerStoreCreator<Ext, StateExt>
    
    export type StoreEnhancerStoreCreator<Ext = {}, StateExt = {}> = <S = any, A extends IAction = IAnyAction>(
      reducer: Reducer<S, A>,
      preloadedState?: DeepPartial<S>
    ) => IStore<S & StateExt, A> & Ext
    
    export type DeepPartial<T> = {
      [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K]
    }
    
    /** IStore */
    export interface IStore<S = any, A = TAction, StateExt = never, Ext = {}> {
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
    
    export interface IStoreCreator {
      <S, A extends IAction, Ext = {}, StateExt = never>(reducer: Reducer<S, A>, enhancer?: StoreEnhancer<Ext, StateExt>): IStore<
        ExtendState<S, StateExt>,
        A,
        StateExt,
        Ext
      > &
        Ext
      <S, A extends IAction, Ext = {}, StateExt = never>(
        reducer: Reducer<S, A>,
        preloadedState?: PreloadedState<S>,
        enhancer?: StoreEnhancer<Ext>
      ): IStore<ExtendState<S, StateExt>, A, StateExt, Ext> & Ext
    }
  
    interface IFilterObj<Req> {
      request?: Req
    }
    type FilterFunc<Item> = (storeData: Item) => boolean
    
    export interface IState {
      [key: string]: any
    }

    /** 请求的额外参数类型, redux 模式对上面 IExtra 的补充 */
    export interface IExtra {
      /** 
       * 请求的类型，默认不传 代表redux请求，会发送 Action，也存入redux store
       * normal 代表普通请求，不发送 Action，也不存入redux store
       * redux 代表redux请求，会发送 Action，也存入redux store
       */
      type?: 'normal' | 'redux',
    }
    `;
}

/** 生成 redux 运行时依赖 */
export function createReduxRuntime(): string {
  return `
  type dispatch = <Res>(action: TAction) => Promise<IAnyAction | Res>;
  let dispatch: dispatch;
  interface IRequestParams {
    url: string;
    /** 请求类型 */
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'OPTIONS' | 'PATCH' | 'HEAD';
    params?: any;
    extra?: {
      [k: string]: any;
    };
  }
  let fetchFunc: (params: IRequestParams) => Promise<any>;
  
  /** redux store存的数据结构 */
  interface IStateInterfaceItem {
    /** 请求的唯一id，暂时等于requestTime */
    id: number
    /** 请求时间 */
    requestTime: number
    /** 请求参数 */
    request?: any
    /** 是否正在 fetching */
    isPending: boolean
    /** 错误信息 */
    errorMessage?: string
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
      isPending: boolean
      errorMessage?: string
    }
  }
  function assignData({
    oldState,
    payload: { interfaceKey, id, requestTime, reponseTime, request = {}, response, isPending, errorMessage },
    maxCacheLength,
  }: IAssignDataProps) {
    const newState = { ...oldState }
    if (typeof maxCacheLength !== 'number' || maxCacheLength < 1) {
      maxCacheLength = 2
    }

    let data = newState[interfaceKey] || []
    if (isPending === true) {
      /** 只存最近 maxCacheLength 个数据 */
      if (maxCacheLength !== Infinity && data.length >= maxCacheLength) {
        data = newState[interfaceKey].slice(data.length - maxCacheLength + 1)
      }
      newState[interfaceKey] = [...data, { id, requestTime, request, isPending }]
    } else {
      newState[interfaceKey] = data.map((item: IStateInterfaceItem) => (item.id === id ? { ...item, reponseTime, response, isPending, errorMessage } : item))
    }

    return newState
  }
  
  export const rapperReducers = {
    '${RAPPER_STATE_KEY}': (state = {}) => state,
  }
  
  /** store enhancer */
  export function rapperEnhancer(config?: IEnhancerProps): any {
    config = config || {}
    const { maxCacheLength = 2 } = config
  
    return (next: IStoreCreator) => (reducers: Reducer<any, any>, ...args: any[]) => {
      const store = next(reducers, ...args)
  
      /** 重新定义 reducers */
      const newReducers = (state: any, action: TAction): IStore => {
        if (state && !state.${RAPPER_STATE_KEY}) {
          throw Error('rapper初始化配置失败，rootReducer应该加入rapperReducers，具体请查看demo配置: https://www.yuque.com/rap/rapper/redux#e391cb1c')
        }
  
        if (!action.hasOwnProperty('type')) {
          return reducers(state, action)
        }
  
        switch (action.type) {
          /** 请求成功，更新 store */
          case '${RAPPER_UPDATE_STORE}':
            return {
              ...state,
              '${RAPPER_STATE_KEY}': assignData({
                oldState: state.${RAPPER_STATE_KEY},
                maxCacheLength,
                payload: action.payload,
              }),
            }
          /** 用户手动清空 */
          case '${RAPPER_CLEAR_STORE}':
            return {
              ...state,
              '${RAPPER_STATE_KEY}': {
                ...state.${RAPPER_STATE_KEY},
                ...action.payload,
              },
            }
          default:
            return reducers(state, action)
        }
      }
      store.replaceReducer(newReducers)
  
      /** 重新定义 dispatch */
      dispatch = async (action: TAction) => {
        if (action.type !== '${RAPPER_REQUEST}') {
          return store.dispatch(action)
        }

        const {
          modelName,
          url,
          method,
          params,
          extra,
          types: [REQUEST, SUCCESS, FAILURE],
        } = action.payload
        const requestTime = new Date().getTime()

        store.dispatch({ type: REQUEST })
        store.dispatch({
          type: '${RAPPER_UPDATE_STORE}',
          payload: {
            interfaceKey: modelName,
            id: requestTime,
            requestTime,
            request: params,
            isPending: true,
          },
        })
        try {
          const responseData = await fetchFunc({ url, method, params, extra })
          const reponseTime = new Date().getTime()

          store.dispatch({ type: SUCCESS, payload: responseData })
          /** 请求成功，更新store */
          store.dispatch({
            type: '${RAPPER_UPDATE_STORE}',
            payload: {
              interfaceKey: modelName,
              id: requestTime,
              requestTime,
              reponseTime,
              request: params,
              response: responseData,
              isPending: false,
            },
          })
          return Promise.resolve(responseData)
        } catch (err) {
          const errorMessage = typeof err === 'object' ? err.message : JSON.stringify(err)
          store.dispatch({ type: FAILURE, payload: errorMessage })
          store.dispatch({
            type: '$$RAPPER_UPDATE_STORE',
            payload: {
              interfaceKey: modelName,
              id: requestTime,
              requestTime,
              isPending: false,
              errorMessage
            },
          })
          return Promise.reject(err)
        }
      }
      return { ...store, dispatch }
    }
  }
  
  /** 发送请求 */
  export function dispatchAction<Res>(action: IAnyAction, fetch?: any) {
    fetch && (fetchFunc = fetch)
    return dispatch<Res>(action)
  }
  `;
}

/** 生成工具函数 */
export function createTools(): string {
  return `
      /** 深比较 */
      function looseEqual(newData: any, oldData: any): boolean {
          const newType = Object.prototype.toString.call(newData)
          const oldType = Object.prototype.toString.call(oldData)
  
          if (newType !== oldType) {
              return false
          }
  
          if (newType === '[object Object]' || newType === '[object Array]') {
              for (const key in newData) {
                  if (!looseEqual(newData[key], oldData[key])) {
                      return false
                  }
              }
              for (const key in oldData) {
                  if (!looseEqual(newData[key], oldData[key])) {
                      return false
                  }
              }
          } else if (newData !== oldData) {
              return false
          }
  
          return true
      }
  
      /** 根据请求参数筛选，暂时只支持 request */
      function paramsFilter<Req extends { [key: string]: any }, I extends { request: Req },
      Fil extends { request?: Req }>(item: I, filter: Fil): boolean {
        if (filter && filter.request) {
          const filterRequest = filter.request; // 这一行是解决 ts2532 报错
          if (Object.prototype.toString.call(filter.request) === '[object Object]') {
            const reqResult = Object.keys(filter.request).every((key): boolean => {
              return item.request[key] === filterRequest[key];
            });
            if (!reqResult) {
                return false;
            }
          } else {
            return false;
          }
        }
        return true;
      }
      
      /** 根据filter函数自定义筛选 */
      function functionFilter<I, Fil>(item: I, filter: Fil) {
        if (filter !== undefined) {
          if (typeof filter === 'function') {
            return filter(item)
          } else {
            return false
          }
        }
        return true
      }

      function getFilterData<Req, Item extends { request: Req }>(reduxData: any[], filter?: IFilterObj<Req> | FilterFunc<Item>) {
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
        return resultArr.length ? resultArr.slice(-1)[0] : {}
      }
  
      /** 以Hooks方式获取response数据 */
      export function useResponseData<M, Req, Res, Item extends { request: Req }>(
        modelName: M,
        filter?: IFilterObj<Req> | FilterFunc<Item>
      ) {
        const reduxData = useSelector((state: IState) => {
          return (state.${RAPPER_STATE_KEY} && state.${RAPPER_STATE_KEY}[modelName]) || []
        })
        const initData = getFilterData<Req, Item>(reduxData, filter)
        const [id, setId] = useState(initData.response || undefined)
        const [filteredData, setFilteredData] = useState(initData.response || undefined)
        const [isPending, setIsPending] = useState(initData.isPending || false)
        const [errorMessage, setErrorMessage] = useState(initData.errorMessage || undefined)
        
        useEffect(() => {
          /** 过滤出一条最新的符合条件的数据 */
          const result = getFilterData<Req, Item>(reduxData, filter)
      
          !looseEqual(result.response, filteredData) && setFilteredData(result.response || undefined)
          setId(result.id)
          setIsPending(result.isPending || false)
          setErrorMessage(result.errorMessage)
        }, [reduxData, filter, filteredData])
        
        return [filteredData, { id, isPending, errorMessage }] as [
          Res | undefined,
          {
            /** 本次请求的唯一id */
            id: number;
            /** 是否正在请求中 */
            isPending: boolean;
            /** 请求错误信息 */
            errorMessage?: string;
          },
        ]
      }

      /** class component获取response数据 */
      export function getResponseData<M, Req, Res, Item extends { request: Req }>(
        state: IState,
        modelName: M,
        filter?: IFilterObj<Req> | FilterFunc<Item>,
      ) {
        const reduxData = (state.$$rapperResponseData && state.$$rapperResponseData[modelName]) || [];
        const result = getFilterData<Req, Item>(reduxData, filter);
        return [
          result.response || undefined,
          { id: result.id, isPending: result.isPending || false, errorMessage: result.errorMessage },
        ] as [Res | undefined, { id: number; isPending: boolean; errorMessage?: string }];
      }
    `;
}
