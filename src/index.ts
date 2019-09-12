import createModel from './createModel'
/** redux */
import { rapperEnhancer, dispatchAction } from './redux/rapperEnhancer'
import { RAP_STATE_KEY, RAP_REDUX_CLEAR_STORE } from './redux/constant'

export {
    /** 创建 model文件 */
    createModel,
    /** store enhancer */
    rapperEnhancer,
    /** request.ts 发送请求 */
    dispatchAction,
    /** 存入 store 的 key */
    RAP_STATE_KEY,
    RAP_REDUX_CLEAR_STORE,
}
