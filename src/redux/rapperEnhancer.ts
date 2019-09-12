import { locationStringify } from '../common'
import { RAP_STATE_KEY, RAPPER_REDUX_REQUEST, RAPPER_REDUX_UPDATE_STORE, RAP_REDUX_CLEAR_STORE } from './constant'

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

/** Todo: 处理数据，存起来 */
function assignData(oldState, payload, maxCache?: number) {
    let newState = { ...oldState }
    Object.entries(payload).forEach(([key, value]) => {
        newState[key] = newState[key] || []
        /** 只存最近 maxCache 个数据 */
        newState[key] = [].concat(newState[key].splice(0, maxCache), value)
    })
    return newState
}

interface IEnhancerProps {
    /** 响应数据处理函数 */
    responseMapper?: IResponseMapper
    /** 缓存数据最大长度 */
    maxCache?: number
}
interface IAction {
    type: any
    payload: {
        [key: string]: any
    }
}
function rapperEnhancer({ responseMapper = data => data, maxCache = 2 }: IEnhancerProps) {
    return next => (reducers, initialState, enhancer) => {
        const newReducers = (state, action) => {
            if (state) {
                state[RAP_STATE_KEY] || (state[RAP_STATE_KEY] = {})
            } else {
                state = {}
            }

            if (action.type === RAPPER_REDUX_UPDATE_STORE) {
                /** 请求成功，更新 store */
                return {
                    ...state,
                    [RAP_STATE_KEY]: assignData(state[RAP_STATE_KEY], action.payload, maxCache),
                }
            } else if (action.type === RAP_REDUX_CLEAR_STORE) {
                /** 用户手动清空 */
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
