export default `
import { IAction, IEnhancerProps, IStore, StoreEnhancer, StoreCreator, Reducer, AnyAction } from './types'
import baseFetch from './base-fetch'

export const RAPPER_REQUEST = '$$RAPPER_REQUEST'
export const RAPPER_UPDATE_STORE = '$$RAPPER_UPDATE_STORE'
export const RAPPER_CLEAR_STORE = '$$RAPPER_CLEAR_STORE'
export const RAPPER_STATE_KEY = '$$rapperResponseData'

/** 拼接组合request链接 */
const getEndpoint = (url: string, requestPrefix?: string): string => {
    if (!requestPrefix) {
        requestPrefix = ''
    }
    requestPrefix = requestPrefix.replace(/\\/$/, '')
    url = url.replace(/^\\//, '')
    return requestPrefix + '/' + url
}

let dispatch = <Res>(action: IAction): Promise<AnyAction | Res> => {
    return new Promise(() => { })
}

/** redux store存的数据结构 */
interface IStateInterfaceItem {
    /** 请求的唯一id，暂时等于requestTime */
    id: number
    /** 请求时间 */
    requestTime: number
    /** 请求参数*/
    request?: any
    /** 是否正在 fetching */
    isFetching: boolean
    /** 响应时间 */
    reponseTime?: number
    /** 请求响应数据 */
    response?: any
}
interface IAssignDataProps {
    /** 合并前的State */
    oldState: {
        [key: string]: IStateInterfaceItem[]
    }
    /** 最大缓存数 */
    maxCacheLength?: number
    payload: {
        /** 接口的key */
        interfaceKey: string
        id: number
        requestTime: number
        reponseTime?: number
        request?: any
        response?: any
        isFetching: boolean
    }
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
        newState[interfaceKey] = [...data, { id, requestTime, request, isFetching }]
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
    const { requestPrefix, maxCacheLength = 2 } = config

    return (next: StoreCreator) => (reducers: Reducer<any, any>, ...args: any[]) => {
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
        dispatch = async <Res>(action: IAction): Promise<any> => {
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
                const responseData = await baseFetch<Res>({
                    endpoint: getEndpoint(endpoint, requestPrefix),
                    method,
                    params,
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
                        response: responseData,
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
export function dispatchAction<Res>(action: AnyAction) {
    return dispatch<Res>(action)
}
`