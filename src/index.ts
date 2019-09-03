import createModel from './createModel'
/** redux */
import { rapperEnhancer, dispatchAction } from './redux/rapperEnhancer'
import { rapperStateKey, RAPPER_REDUX_UPDATE_STORE } from './redux/constant'

export {
    /** 创建 model文件 */
    createModel,
    /** store enhancer */
    rapperEnhancer,
    /** request.ts 发送请求 */
    dispatchAction,
    /** 存入 store 的 key */
    rapperStateKey,
    RAPPER_REDUX_UPDATE_STORE,
}
