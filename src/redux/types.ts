export default `
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
