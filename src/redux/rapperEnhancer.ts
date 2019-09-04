import { locationStringify } from '../common'
import { RAP_STATE_KEY, RAPPER_REDUX_REQUEST, RAPPER_REDUX_UPDATE_STORE } from './constant'

/** 响应参数匹配函数 */
export interface IResponseMapper {
    (data: any): any
}

const sendRequest = async params => {
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

let dispatch = action => {
    console.log('空dispatch', action)
}
function rapperEnhancer(responseMapper: IResponseMapper = data => data) {
    return next => (reducers, initialState, enhancer) => {
        const newReducers = (state, action) => {
            if (state) {
                state[RAP_STATE_KEY] || (state[RAP_STATE_KEY] = {})
            } else {
                state = {}
            }

            /**
             * 情况一：请求成功，更新 store
             * 情况二：用户手动清空
             */
            if (action.type === RAPPER_REDUX_UPDATE_STORE) {
                return {
                    ...state,
                    [RAP_STATE_KEY]: { ...state[RAP_STATE_KEY], ...action.payload },
                }
            }
            return reducers(state, action)
        }

        const store = next(reducers, initialState, enhancer)
        store.replaceReducer(newReducers)
        dispatch = async action => {
            if (action[RAPPER_REDUX_REQUEST] === undefined) {
                return store.dispatch(action)
            }

            const {
                modelName,
                endpoint,
                method,
                params,
                cb,
                types: [REQUEST, SUCCESS, FAILURE],
            } = action[RAPPER_REDUX_REQUEST]

            store.dispatch({ type: REQUEST })
            try {
                const responseData = await sendRequest({ endpoint, method, params })
                cb && cb(responseData)
                store.dispatch({
                    type: RAPPER_REDUX_UPDATE_STORE,
                    payload: { [modelName]: responseMapper(responseData) },
                })
                return store.dispatch({ type: SUCCESS, payload: responseData })
            } catch (e) {
                return store.dispatch({ type: FAILURE, payload: e })
            }
        }

        return { ...store, dispatch }
    }
}

/** 发送请求 */
function dispatchAction(action) {
    dispatch(action)
}
export { rapperEnhancer, dispatchAction }