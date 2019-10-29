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
      export interface RequestAction {
          type: '$$RAPPER_REQUEST'
          payload?: {
              modelName: string
              url: string
              method?: REQUEST_METHOD
              params?: any
              types: string[]
          }
      }
      
      export type IAction = AnyAction | RequestAction
      
      /** store enhancer 参数 */
      export interface EnhancerProps {
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
      ) => Store<S & StateExt, A> & Ext
      
      export type DeepPartial<T> = {
          [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K]
      }
      
      /** Store */
      export interface Store<S = any, A = IAction, StateExt = never, Ext = {}> {
          dispatch: Dispatch<A>
          getState(): S
          subscribe(listener: () => void): Unsubscribe
          replaceReducer<NewState, NewActions>(
              nextReducer: Reducer<NewState, NewActions>
          ): Store<ExtendState<NewState, StateExt>, NewActions, StateExt, Ext> & Ext
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
          <S, A extends Action, Ext = {}, StateExt = never>(reducer: Reducer<S, A>, enhancer?: StoreEnhancer<Ext, StateExt>): Store<
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
          ): Store<ExtendState<S, StateExt>, A, StateExt, Ext> & Ext
      }
      
      class Helper<Req> {
          Return = baseFetch<Req>({ url: '' })
      }
      export type ResponsePromiseType<T> = Helper<T>['Return']
      
      type ThenArg<T> = T extends Promise<infer U> ? U : T
      export type ResponseType<T> = ThenArg<Helper<T>['Return']>
    
      interface FilterObj<Req> {
        request?: Req
      }
      type FilterFunc<Item> = (storeData: Item) => boolean
      
      export interface State {
        [key: string]: any
      }
      `;
}

/** 生成 redux 运行时依赖 */
export function createReduxRuntime(): string {
  return `
  let dispatch = <Res>(action: IAction): Promise<AnyAction | Res> => {
      return new Promise(() => null)
  }
  
  /** redux store存的数据结构 */
  interface StateInterfaceItem {
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
  interface AssignDataProps {
      /** 合并前的State */
      oldState: {
          [key: string]: StateInterfaceItem[]
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
  }: AssignDataProps) {
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
          newState[interfaceKey] = data.map((item: StateInterfaceItem) => (item.id === id ? { ...item, reponseTime, response, isFetching } : item))
      }
  
      return newState
  }
  
  export const rapReducers = {
      [RAPPER_STATE_KEY]: (state = {}) => state,
  }
  
  /** store enhancer */
  export function rapEnhancer(config?: EnhancerProps): StoreEnhancer<any> {
      config = config || {}
      const { maxCacheLength = 2 } = config
  
      return (next: StoreCreator) => (reducers: Reducer<any, any>, ...args: any[]) => {
          const store = next(reducers, ...args)
  
          /** 重新定义 reducers */
          const newReducers = (state: any, action: IAction): Store => {
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
  
      export function useResponseData<Req, Res, Item extends { request: Req }>(
          modelName: string,
          filter?: FilterObj<Req> | FilterFunc<Item>
      ) {
          const reduxData = useSelector((state: State) => {
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
    `;
}
