import { locationStringify } from '../common'
import { RAP_STATE_KEY, RAP_REDUX_REQUEST, RAP_REDUX_UPDATE_STORE, RAP_REDUX_CLEAR_STORE } from './constant'
import { IAction, IEnhancerProps, IStore, IRequestParams } from './types'

const sendRequest = async (params: IRequestParams): Promise<any> => {
    let requestUrl = params.endpoint
    const requestParams: any = {
        credentials: 'include',
        method: params.method || 'GET',
        headers: { 'Content-Type': 'application/json' },
    }

    if (requestParams.method === 'GET') {
        requestUrl = `${requestUrl}?${locationStringify(params.params)}`
    } else if (params.params) {
        requestParams.body = JSON.stringify(params.params)
    }
    const res = await fetch(requestUrl, requestParams)
    const retJSON = res.clone() // clone before return
    // const json = await res.json() // we need json just to check status
    // if (!json.info.ok) {
    //     throw new Error(json.info.message)
    // }
    return retJSON.json()
}

let dispatch = (action: IAction) => {
    console.log('空dispatch', action)
}

interface IAssignDataProps {
    /** 合并前的State */
    oldState: object
    /** 最大缓存数 */
    maxCache?: number
    payload: {
        /** 合并的key */
        key: string
        /** 请求参数*/
        req?: any
        /** 请求响应数据 */
        res?: any
    }
}
function assignData({ oldState, payload: { key, req, res }, maxCache }: IAssignDataProps) {
    let newState = { ...oldState }
    if (typeof maxCache !== 'number' || maxCache < 1) {
        maxCache = 2
    }

    let data = newState[key] || []
    /** 只存最近 maxCache 个数据 */
    if (maxCache !== Infinity && data.length > maxCache) {
        data = newState[key].slice(data.length - maxCache)
    }
    newState[key] = [].concat(data, {
        req,
        res,
    })
    return newState
}

const rapReducers = {
    [RAP_STATE_KEY]: (state = {}) => state,
}

/** store enhancer */
function rapEnhancer(config?: IEnhancerProps) {
    const { responseMapper = data => data, maxCache = 2, successCb, failCb, judgeSuccess } = config
    let { request } = config
    request = typeof request === 'function' ? request : sendRequest
    return next => (reducers, initialState, enhancer) => {
        const newReducers = (state: any, action: IAction): IStore => {
            if (state) {
                state[RAP_STATE_KEY] || (state[RAP_STATE_KEY] = {})
            } else {
                state = {}
            }

            if (action.hasOwnProperty('type')) {
                if (action.type === RAP_REDUX_UPDATE_STORE) {
                    /** 请求成功，更新 store */
                    return {
                        ...state,
                        [RAP_STATE_KEY]: assignData({
                            oldState: state[RAP_STATE_KEY],
                            maxCache,
                            payload: action.payload,
                        }),
                    }
                } else if (action.type === RAP_REDUX_CLEAR_STORE) {
                    /** 用户手动清空 */
                    return {
                        ...state,
                        [RAP_STATE_KEY]: { ...state[RAP_STATE_KEY], ...action.payload },
                    }
                }
            }

            return reducers(state, action)
        }

        const store = next(reducers, initialState, enhancer)
        store.replaceReducer(newReducers)
        dispatch = async (action: IAction): Promise<any> => {
            if (action.type !== RAP_REDUX_REQUEST) {
                return store.dispatch(action)
            }

            const {
                modelName,
                endpoint,
                method,
                params,
                cb,
                types: [REQUEST, SUCCESS, FAILURE],
                /** 是否不调用成功回调，默认调用 */
                isHideSuccess = false,
                /** 是否不调用失败回调，默认调用 */
                isHideFail = false,
            } = action.payload

            store.dispatch({ type: REQUEST })
            try {
                const responseData = await request({ endpoint, method, params })
                /** 自定义判断请求状态 */
                if (typeof judgeSuccess === 'function') {
                    const judgeResult = judgeSuccess(responseData)
                    if (judgeResult !== true) {
                        throw Error(judgeResult as string)
                    }
                }
                cb && cb(responseData)
                store.dispatch({
                    type: RAP_REDUX_UPDATE_STORE,
                    payload: {
                        key: modelName,
                        req: params,
                        res: responseMapper(responseData),
                    },
                })
                store.dispatch({ type: SUCCESS, payload: responseData })
                /** 请求成功回调，用户可以增加 success 提示 */
                !isHideSuccess && successCb && typeof successCb === 'function' && successCb(responseData)
                return responseData
            } catch (e) {
                store.dispatch({ type: FAILURE, payload: e })
                /** 请求失败回调，用户可以增加 fail 提示 */
                !isHideFail && failCb && typeof failCb === 'function' && failCb(e)
                throw Error(e)
            }
        }

        return { ...store, dispatch }
    }
}

/** 发送请求 */
function dispatchAction(action: IAction) {
    return dispatch(action)
}
export { rapReducers, rapEnhancer, dispatchAction }