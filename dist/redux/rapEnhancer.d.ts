import { RAP_STATE_KEY } from './constant';
import { IAction, IEnhancerProps, StoreEnhancer } from './types';
declare const rapReducers: {
    [RAP_STATE_KEY]: (state?: {}) => {};
};
/** store enhancer */
declare function rapEnhancer(config?: IEnhancerProps): StoreEnhancer<any>;
/** 发送请求 */
declare function dispatchAction(action: IAction): Promise<any>;
export { rapReducers, rapEnhancer, dispatchAction };
