import { REQUEST_METHOD } from '../types';
interface Action<T = any> {
    type: T;
}
interface AnyAction extends Action {
    [extraProps: string]: any;
}
interface IRequestAction {
    type: 'RAP_REDUX_REQUEST';
    payload?: {
        modelName: string;
        endpoint: string;
        method?: REQUEST_METHOD;
        params?: any;
        types: string[];
        isHideSuccess?: boolean;
        isHideFail?: boolean;
    };
}
export declare type IAction = AnyAction | IRequestAction;
export interface IRequestParams {
    endpoint: string;
    method?: REQUEST_METHOD;
    params?: any;
}
interface IResponseMapper {
    (data: any): any;
}
/** store enhancer 参数 */
export interface IEnhancerProps {
    /** 响应数据处理函数 */
    responseMapper?: IResponseMapper;
    /** 缓存数据最大长度 */
    maxCache?: number;
    /** 请求成功默认回调 */
    successCb?: (response: any) => void;
    /** 请求失败默认回调 */
    failCb?: (e: any) => void;
    /** 自定义请求函数 */
    request?: (params: IRequestParams) => Promise<any>;
    judgeSuccess?: (responseData: any) => boolean | string;
}
interface Dispatch<A = AnyAction> {
    <T extends A>(action: T, ...extraArgs: any[]): T;
}
interface Unsubscribe {
    (): void;
}
declare type Reducer<S = any, A = AnyAction> = (state: S | undefined, action: A) => S;
declare type ExtendState<State, Extension> = [Extension] extends [never] ? State : State & Extension;
declare type Observer<T> = {
    next?(value: T): void;
};
declare type Observable<T> = {
    subscribe: (observer: Observer<T>) => {
        unsubscribe: Unsubscribe;
    };
    [Symbol.observable](): Observable<T>;
};
/** Store */
export interface IStore<S = any, A = IAction, StateExt = never, Ext = {}> {
    dispatch: Dispatch<A>;
    getState(): S;
    subscribe(listener: () => void): Unsubscribe;
    replaceReducer<NewState, NewActions>(nextReducer: Reducer<NewState, NewActions>): IStore<ExtendState<NewState, StateExt>, NewActions, StateExt, Ext> & Ext;
    [Symbol.observable](): Observable<S>;
}
export {};
