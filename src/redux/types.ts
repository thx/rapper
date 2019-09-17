import { REQUEST_METHOD } from '../types'

interface Action<T = any> {
    type: T
}
interface AnyAction extends Action {
    [extraProps: string]: any
}
interface IRequestAction {
    type: 'RAP_REDUX_REQUEST'
    payload?: {
        modelName: string
        endpoint: string
        method?: REQUEST_METHOD
        params?: any
        types: string[]
    }
}

export type IAction = AnyAction | IRequestAction

interface IResponseMapper {
    (data: any): any
}
/** store enhancer 参数 */
export interface IEnhancerProps {
    /** 响应数据处理函数 */
    responseMapper?: IResponseMapper
    /** 缓存数据最大长度 */
    maxCache?: number
}

interface Dispatch<A = AnyAction> {
    <T extends A>(action: T, ...extraArgs: any[]): T
}
interface Unsubscribe {
    (): void
}
type Reducer<S = any, A = AnyAction> = (state: S | undefined, action: A) => S
type ExtendState<State, Extension> = [Extension] extends [never] ? State : State & Extension
type Observer<T> = {
    next?(value: T): void
}
type Observable<T> = {
    subscribe: (observer: Observer<T>) => { unsubscribe: Unsubscribe }
    [Symbol.observable](): Observable<T>
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
