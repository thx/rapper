export default `
import { IAction, IEnhancerProps, IStore, IRequestParams, StoreEnhancer, StoreCreator, Reducer, AnyAction } from './types'

export const RAPPER_REQUEST = '$$RAPPER_REQUEST'
export const RAPPER_UPDATE_STORE = '$$RAPPER_UPDATE_STORE'
export const RAPPER_CLEAR_STORE = '$$RAPPER_CLEAR_STORE'
export const RAPPER_STATE_KEY = '$$rapperResponseData'

/** 拼接组合request链接 */
const getEndpoint = (requestPrefix: string, url: string): string => {
    if (!requestPrefix) {
        requestPrefix = ''
    }
    requestPrefix = requestPrefix.replace(/\\/$/, '')
    url = url.replace(/^\\//, '')
    return requestPrefix + '/' + url
}

/**
 * search 参数转换，比如 { a: 1, b: 2, c: undefined } 转换成 "a=1&b=2"
 * 会自动删除 undefined
 */
function locationStringify(
    obj: {
        [key: string]: any
    } = {}
): string {
    return Object.entries(obj).reduce((str, [key, value]) => {
        if (value === undefined) {
            return str
        }
        str = str ? str + '&' : str
        return str + key + '=' + value
    }, '')
}

const sendRequest = async (params: IRequestParams): Promise<any> => {
    let requestUrl = params.endpoint
    const requestParams: any = {
        credentials: 'include',
        method: params.method || 'GET',
        headers: { 'Content-Type': 'application/json' },
    }

    if (requestParams.method === 'GET') {
        requestUrl = requestUrl + '?' + locationStringify(params.params)
    } else if (params.params) {
        requestParams.body = JSON.stringify(params.params)
    }
    const res = await fetch(requestUrl, requestParams)
    const retJSON = res.clone() // clone before return
    return retJSON.json()
}

let dispatch = (action: IAction): Promise<any> => {
    return new Promise(() => { })
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
        if (maxCacheLength !== Infinity && data.length >= maxCacheLength) {
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

export const rapReducers = {
    [RAPPER_STATE_KEY]: (state = {}) => state,
}

/** store enhancer */
export function rapEnhancer(config?: IEnhancerProps): StoreEnhancer<any> {
    config = config || {}
    const { requestPrefix, transformRequest = data => data, transformResponse = data => data, maxCacheLength = 2, fetch } = config

    const request = typeof fetch === 'function' ? fetch : sendRequest

    return (next: StoreCreator) => <S, A extends AnyAction>(reducers: Reducer<any, any>, ...args: any[]) => {
        const store = next(reducers, ...args)

        /** 重新定义 reducers */
        const newReducers = (state: any, action: IAction): IStore => {
            if (state) {
                state[RAPPER_STATE_KEY] || (state[RAPPER_STATE_KEY] = {})
            } else {
                state = { [RAPPER_STATE_KEY]: {} }
            }

            if (!action.hasOwnProperty('type')) {
                return reducers(state, action)
            }

            switch (action.type) {
                /** 请求成功，更新 store */
                case RAPPER_UPDATE_STORE:
                    return {
                        ...state,
                        [RAPPER_STATE_KEY]: assignData({
                            oldState: state[RAPPER_STATE_KEY],
                            maxCacheLength,
                            payload: action.payload,
                        }),
                    }
                /** 用户手动清空 */
                case RAPPER_CLEAR_STORE:
                    return {
                        ...state,
                        [RAPPER_STATE_KEY]: {
                            ...state[RAPPER_STATE_KEY],
                            ...action.payload,
                        },
                    }
                default:
                    return reducers(state, action)
            }
        }
        store.replaceReducer(newReducers)

        /** 重新定义 dispatch */
        dispatch = async (action: IAction): Promise<any> => {
            if (action.type !== RAPPER_REQUEST) {
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
                type: RAPPER_UPDATE_STORE,
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

                const responseData = await request({
                    endpoint: getEndpoint(requestPrefix, endpoint),
                    method,
                    params: newParams,
                })
                const reponseTime = new Date().getTime()

                cb && cb(responseData)
                store.dispatch({ type: SUCCESS, payload: responseData })
                /** 请求成功，更新store */
                store.dispatch({
                    type: RAPPER_UPDATE_STORE,
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
                return responseData
            } catch (e) {
                store.dispatch({ type: FAILURE, payload: e })
                store.dispatch({
                    type: RAPPER_UPDATE_STORE,
                    payload: {
                        interfaceKey: modelName,
                        id: requestTime,
                        requestTime,
                        isFetching: false,
                    },
                })
                throw Error(e)
            }
        }

        return { ...store, dispatch }
    }
}

/** 发送请求 */
export function dispatchAction(action: IAction): Promise<any> {
    return dispatch(action)
}
`