import { Intf } from '../types'
import { RAP_STATE_KEY, RAP_REDUX_REQUEST } from './constant'

/** 请求链接 */
function getEndpoint(serverAPI: string, url: string): string {
    return `${serverAPI}${url}`
}

/** 生成 index.ts */
function createIndexStr(): string {
    return `
    /**
     * 本文件由 Rapper 从 Rap 中自动生成，请勿修改
     */

    import { useAPI, useAPIAll, clearAPICache } from './useRap'
    import fetch from './fetch'
    import { getAction } from './redux'
    
    export { useAPI, useAPIAll, clearAPICache, fetch, getAction };
    `
}

/** 定义 请求types interface  */
function getRequestTypesInterfaceStr(interfaces: Intf[]): string {
    return `
        export interface IRequestTypes {
        ${interfaces
            .map(({ modelName }) => {
                return `
                    '${modelName}': [
                        '${modelName}_REQUEST',
                        '${modelName}_SUCCESS',
                        '${modelName}_FAILURE',
                    ]
                `
            })
            .join('\n\n')}
        }
    `
}

/** 定义 请求action interface  */
function getRequestActionInterfaceStr(interfaces: Intf[], serverAPI: string): string {
    return `
        export interface IRequestAction {
        ${interfaces
            .map(({ modelName, method, url }) => {
                return `
                    '${modelName}': (params?: ModelItf['${modelName}']['Req']) => {
                        type: '${RAP_REDUX_REQUEST}',
                        payload: {
                            modelName: '${modelName}'
                            endpoint: '${getEndpoint(serverAPI, url)}'
                            method: '${method}'
                            params?: ModelItf['${modelName}']['Req']
                            types: ['${modelName}_REQUEST', '${modelName}_SUCCESS', '${modelName}_FAILURE']
                        }
                    },
                `
            })
            .join('\n\n')}
        }
    `
}

/** 定义 请求types */
function getRequestTypesStr(interfaces: Intf[], serverAPI: string): string {
    return `
        export const RequestTypes:IRequestTypes = {
            ${interfaces
                .map(({ modelName }) => {
                    return `
                        '${modelName}': [
                            '${modelName}_REQUEST',
                            '${modelName}_SUCCESS',
                            '${modelName}_FAILURE',
                        ],
                    `
                })
                .join('\n\n')}
        }
    `
}

/** 定义 请求action */
function getRequestActionStr(interfaces: Intf[], serverAPI: string): string {
    return `
        export const RequestAction:IRequestAction = {
            ${interfaces
                .map(({ id, repositoryId, moduleId, name, url, modelName, method }) => {
                    return `
                        /**
                         * 接口名：${name}
                         * Rap 地址: http://rap2.alibaba-inc.com/repository/editor?id=${repositoryId}&mod=${moduleId}&itf=${id}
                         */
                        '${modelName}': (params) => ({
                            type: '${RAP_REDUX_REQUEST}',
                            payload: {
                                modelName: '${modelName}',
                                endpoint: '${getEndpoint(serverAPI, url)}',
                                method: '${method}',
                                params,
                                types: RequestTypes['${modelName}'],
                            },
                        }),
                    `
                })
                .join('\n\n')}
        }
    `
}

/** 生成 redux.ts */
interface IOptionsParams {
    projectId: number
    serverAPI: string
}
function createReduxStr(interfaces: Intf[], { projectId, serverAPI }: IOptionsParams): string {
    return `
    /**
     * 本文件由 Rapper 从 Rap 中自动生成，请勿修改
     * Rap 地址: http://rap2.alibaba-inc.com/repository/editor?id=${projectId}
     */

    import { ModelItf } from './model'

    /** request interface */
    export type RequestType = ${interfaces.reduce((a, { modelName }) => `${a} | '${modelName}'`, '')}

    /** 请求types interface  */
    ${getRequestTypesInterfaceStr(interfaces)}

    /** 请求action interface  */
    ${getRequestActionInterfaceStr(interfaces, serverAPI)}

    /** 请求types */
    ${getRequestTypesStr(interfaces, serverAPI)}

    /** 请求action */
    ${getRequestActionStr(interfaces, serverAPI)}

    export function getAction(requestPath: RequestType) {
        return RequestTypes[requestPath] || []
    }
    `
}

/** 生成 fetch.ts */
function createReduxFetchStr(projectId: number, interfaces: Intf[]): string {
    return `
    /**
     * 本文件由 Rapper 从 Rap 中自动生成，请勿修改
     * Rap 地址: http://rap2.alibaba-inc.com/repository/editor?id=${projectId}
     */
    import { dispatchAction } from '@ali/rapper-redux';
    import { ModelItf } from './model';
    import { RequestAction } from './redux';

    const request = {
        ${interfaces
            .map(
                ({ modelName, name, repositoryId, moduleId, id }) => `
        /**
         * 接口名：${name}
         * Rap 地址: http://rap2.alibaba-inc.com/repository/editor?id=${repositoryId}&mod=${moduleId}&itf=${id}
         * @param req 请求参数
         */
        '${modelName}': (req?: ModelItf['${modelName}']['Req']): Promise<ModelItf['${modelName}']['Res']> => {
            const action = RequestAction['${modelName}'](req)
            return dispatchAction(action)
        }`
            )
            .join(',\n\n')}
    };
    export default request;
    `
}

/** 生成 useRap.ts */
function createUseRapStr(interfaces: Intf[]): string {
    return `
    /**
     * 本文件由 Rapper 从 Rap 中自动生成，请勿修改
     */
    import { useState, useEffect } from 'react';
    import { useSelector } from 'react-redux';
    import { ModelItf } from './model';
    import { RAP_STATE_KEY, dispatchAction, RAP_REDUX_CLEAR_STORE } from '@ali/rapper-redux';

    /** 深比较 */
    function looseEqual(newData: any, oldData: any): boolean {
        const newType = Object.prototype.toString.call(newData)
        const oldType = Object.prototype.toString.call(oldData)
    
        if (newType !== oldType) {
            return false
        }
    
        if (newType === '[object Object]' || newType === '[object Array]') {
            for (const key in newData) {
                if (!looseEqual(newData[key], oldData[key])) {
                    return false
                }
            }
            for (const key in oldData) {
                if (!looseEqual(newData[key], oldData[key])) {
                    return false
                }
            }
        } else if (newData !== oldData) {
            return false
        }
    
        return true
    }

    /** 根据请求参数筛选，暂时只支持 request */
    function paramsFilter<Req extends { [key: string]: any }, Res, Fil extends { request?: Req }>(item: { request: Req; response: Res }, filter: Fil): boolean {
        if (filter && filter.request) {
            const filterRequest = filter.request // 这一行是解决 ts2532 报错
            if (Object.prototype.toString.call(filter.request) === '[object Object]') {
                const reqResult = Object.keys(filter.request).every((key): boolean => {
                    return item.request[key] === filterRequest[key]
                })
                if (!reqResult) {
                    return false
                }
            } else {
                return false
            }
        }
        return true
    }
    /** 根据filter函数自定义筛选 */
    function functionFilter<Req, Res, Fil>(item: { request: Req; response: Res }, filter: Fil) {
        if (filter !== undefined) {
            if (typeof filter === 'function') {
                return filter(item.request, item.response)
            } else {
                return false
            }
        }
        return true
    }

    /** store中存储的数据结构 */
    export interface IStoreItem {
        ${interfaces
            .map(
                ({ modelName, name, repositoryId, moduleId, id }) => `
        '${modelName}': {
            request: ModelItf['${modelName}']['Req']
            response: ModelItf['${modelName}']['Res']
            id: number
            requestTime: number
            responseTime: number
            isFetching: boolean
        }`
            )
            .join(',\n\n')}
    }

    interface IState {
        ${RAP_STATE_KEY}: any
        [key: string]: any
    }

    export const useAPI = {
        ${interfaces
            .map(
                ({ modelName, name, repositoryId, moduleId, id }) => `
        /**
         * 接口名：${name}
         * Rap 地址: http://rap2.alibaba-inc.com/repository/editor?id=${repositoryId}&mod=${moduleId}&itf=${id}
         */
        /* tslint:disable */
        '${modelName}': function useData(
            filter?: { request?: ModelItf['${modelName}']['Req'] } | { (
                storeData: IStoreItem['${modelName}']
            ): boolean }
        ): [null | ModelItf['${modelName}']['Res'], boolean] {
            const reduxData = useSelector((state: IState) => {
                return (state[RAP_STATE_KEY] && state[RAP_STATE_KEY]['${modelName}']) || []
            })
            const [filteredData, setFilteredData] = useState(null)
            const [isFetching, setIsFetching] = useState(false)

            type Req = ModelItf['${modelName}']['Req']
            type Res = ModelItf['${modelName}']['Res']

            useEffect(() => {
                let resultArr = []
                if (filter) {
                    if (typeof filter === 'function') {
                        resultArr = reduxData.filter((item: { request: Req; response: Res }) => functionFilter<Req, Res, typeof filter>(item, filter))
                    } else {
                        resultArr = reduxData.filter((item: { request: Req; response: Res }) => paramsFilter<Req, Res, typeof filter>(item, filter))
                    }
                } else {
                    resultArr = reduxData
                }
                /** 过滤出一条最新的符合条件的数据 */
                const result = resultArr.length ? resultArr.slice(-1)[0] : {}

                if (!looseEqual(result, filteredData)) {
                    setFilteredData(result.response)
                    setIsFetching(result.isFetching || false)
                }
            }, [reduxData, filter])

            return [filteredData, isFetching]
        }`
            )
            .join(',\n\n')}
    }

    export const useAPIAll = {
        ${interfaces
            .map(
                ({ modelName, name, repositoryId, moduleId, id }) => `
        /**
         * 接口名：${name}
         * Rap 地址: http://rap2.alibaba-inc.com/repository/editor?id=${repositoryId}&mod=${moduleId}&itf=${id}
         */
        /* tslint:disable */
        '${modelName}': function useData(): ModelItf['${modelName}']['Res'][] {
            return useSelector((state: IState) => {
                const selectedState = (state[RAP_STATE_KEY] && state[RAP_STATE_KEY]['${modelName}']) || []
                return selectedState
            })
        }`
            )
            .join(',\n\n')}
    }

    /** 重置接口数据 */
    export const clearAPICache = {
        ${interfaces
            .map(
                ({ modelName, name, repositoryId, moduleId, id }) => `
        /**
         * 接口名：${name}
         * Rap 地址: http://rap2.alibaba-inc.com/repository/editor?id=${repositoryId}&mod=${moduleId}&itf=${id}
         */
        '${modelName}': (): void => {
            dispatchAction({
                type: RAP_REDUX_CLEAR_STORE, 
                payload: {
                    ['${modelName}']: undefined,
                }
            })
        }`
            )
            .join(',\n\n')}
    }
    `
}

export { createIndexStr, createReduxStr, createReduxFetchStr, createUseRapStr }
