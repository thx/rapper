import qs from 'qs'
import { rapperStateKey, RAPPER_REDUX_REQUEST, RAPPER_REDUX_UPDATE_STORE } from './constant'

const sendRequest = async params => {
    let requestUrl = params.endpoint
    const requestParams: any = {
        credentials: 'include',
        method: params.method || 'GET',
        headers: { 'Content-Type': 'application/json' },
    }

    if (requestParams.method === 'GET') {
        // requestUrl = `${requestUrl}?${qs.stringify(params.params)}`
        requestUrl = `${requestUrl}?`
    } else if (params.params) {
        requestParams.body = JSON.stringify(params.params)
    }
    console.log('sendRequest', requestUrl, requestParams)
    const res = await fetch(requestUrl, requestParams)
    const retJSON = res.clone() // clone before return
    const json = await res.json() // we need json just to check status
    if (!json.info.ok) {
        throw new Error(json.info.message)
    }
    return retJSON.json()
}

let dispatch = action => {
    console.log('空dispatch', action)
}
function rapperEnhancer() {
    return next => (reducers, initialState, enhancer) => {
        /** 请求成功，更新 store  */
        const newReducers = (state, action) => {
            if (action.type === RAPPER_REDUX_UPDATE_STORE) {
                return {
                    ...state,
                    [rapperStateKey]: { ...state[rapperStateKey], ...action.payload },
                }
            }
            return reducers(state, action)
        }
        /** 初始 state 增加 rapperStateKey */
        initialState = initialState ? { ...initialState, [rapperStateKey]: {} } : { [rapperStateKey]: {} }

        const store = next(newReducers, initialState, enhancer)
        dispatch = async action => {
            if (action[RAPPER_REDUX_REQUEST] === undefined) {
                return store.dispatch(action)
            }

            const {
                endpoint,
                method,
                params,
                cb,
                types: [REQUEST, SUCCESS, FAILURE],
            } = action[RAPPER_REDUX_REQUEST]

            store.dispatch({ type: REQUEST })
            try {
                console.log('before sendRequest')
                const responseData = await sendRequest({ endpoint, method, params })
                cb && cb(responseData)
                store.dispatch({
                    type: RAPPER_REDUX_UPDATE_STORE,
                    payload: { [endpoint]: responseData },
                })
                return store.dispatch({ type: SUCCESS, payload: responseData })
            } catch (e) {
                console.log('error', e)
                return store.dispatch({ type: FAILURE, payload: e })
            }
        }

        return { ...store, dispatch }
    }
}

/** 发送请求 */
function dispatchRequest(action) {
    dispatch(action)
}

export { dispatchRequest, rapperEnhancer }
