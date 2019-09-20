import { RAP_STATE_KEY } from './constant';
import { IAction, IEnhancerProps } from './types';
declare const rapReducers: {
    [RAP_STATE_KEY]: (state?: {}) => {};
};
/** store enhancer */
declare function rapEnhancer({ responseMapper, maxCache, successCb, failCb, request, judgeSuccess }: IEnhancerProps): (next: any) => (reducers: any, initialState: any, enhancer: any) => any;
/** 发送请求 */
declare function dispatchAction(action: IAction): void;
export { rapReducers, rapEnhancer, dispatchAction };
