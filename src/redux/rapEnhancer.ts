import { locationStringify } from '../common'
import { RAP_STATE_KEY, RAP_REDUX_REQUEST, RAP_REDUX_UPDATE_STORE, RAP_REDUX_CLEAR_STORE } from './constant'
import { IAction, IEnhancerProps, IStore, IRequestParams, StoreEnhancer, StoreCreator, Reducer, AnyAction } from './types'

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

let dispatch = (action: IAction): Promise<any> => {
    return new Promise(() => {})
}

interface IAssignDataProps {
    /** 合并前的State */
    oldState: object
    /** 最大缓存数 */
    maxCacheLength?: number
    payload: {
        /** 接口的key */
        interfaceKey: string
        /** 请求的唯一id，暂时等于requestTime */
        id: number
        /** 请求时间，同时也可作为本次请求的key */
        requestTime: number
        /** 响应时间 */
        reponseTime?: number
        /** 请求参数*/
        request?: any
        /** 请求响应数据 */
        response?: any
        /** 是否正在 fetching */
        isFetching: boolean
    }
}
interface IStateInterfaceItem {
    id: number
    requestTime: number
    request?: any
    isFetching: boolean
    reponseTime?: number
    response?: any
}
function assignData({
    oldState,
    payload: { interfaceKey, id, requestTime, reponseTime, request = {}, response, isFetching },
    maxCacheLength,
}: IAssignDataProps) {
    let newState = { ...oldState }
    if (typeof maxCacheLength !== 'number' || maxCacheLength < 1) {
        maxCacheLength = 2
    }

    let data = newState[interfaceKey] || []
    if (isFetching === true) {
        /** 只存最近 maxCacheLength 个数据 */
        if (maxCacheLength !== Infinity && data.length > maxCacheLength) {
            data = newState[interfaceKey].slice(data.length - maxCacheLength + 1)
        }
        newState[interfaceKey] = [].concat(data, {
            id,
            requestTime,
            request,
            isFetching,
        })
    } else {
        newState[interfaceKey] = data.map((item: IStateInterfaceItem) => (item.id === id ? { ...item, reponseTime, response, isFetching } : item))
    }

    return newState
}

const rapReducers = {
    [RAP_STATE_KEY]: (state = {}) => state,
}

/** store enhancer */
function rapEnhancer(config?: IEnhancerProps): StoreEnhancer<any> {
    config = config || {}
    const { transformRequest = data => data, transformResponse = data => data, maxCacheLength = 2, fetch } = config

    const request = typeof fetch === 'function' ? fetch : sendRequest

    return (next: StoreCreator) => <S, A extends AnyAction>(reducers: Reducer<any, any>, ...args: any[]) => {
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
                            maxCacheLength,
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

        const store = next(reducers, ...args)
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
            } = action.payload
            const requestTime = new Date().getTime()

            store.dispatch({ type: REQUEST })
            store.dispatch({
                type: RAP_REDUX_UPDATE_STORE,
                payload: {
                    interfaceKey: modelName,
                    id: requestTime,
                    requestTime,
                    request: params,
                    isFetching: true,
                },
            })
            try {
                /** 请求参数统一处理 */
                let newParams = params
                if (typeof transformRequest === 'function') {
                    newParams = transformRequest(action.payload)
                }

                const responseData = await request({ endpoint, method, params: newParams })
                const reponseTime = new Date().getTime()

                cb && cb(responseData)
                store.dispatch({
                    type: RAP_REDUX_UPDATE_STORE,
                    payload: {
                        interfaceKey: modelName,
                        id: requestTime,
                        requestTime,
                        reponseTime,
                        request: params,
                        response: transformResponse(responseData),
                        isFetching: false,
                    },
                })
                store.dispatch({ type: SUCCESS, payload: responseData })
                return responseData
            } catch (e) {
                store.dispatch({ type: FAILURE, payload: e })
                throw Error(e)
            }
        }

        return { ...store, dispatch }
    }
}

/** 发送请求 */
function dispatchAction(action: IAction): Promise<any> {
    return dispatch(action)
}
export { rapReducers, rapEnhancer, dispatchAction }
