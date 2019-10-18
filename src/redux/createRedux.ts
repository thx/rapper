import { Intf } from '../types'
import { RAP_STATE_KEY, RAP_REDUX_REQUEST } from './constant'

/** 生成 index.ts */
function createIndexStr(): string {
    return `
    /**
     * 本文件由 Rapper 从 Rap 中自动生成，请勿修改
     */

    import { useAPI, useAPIAll, clearAPICache } from './useRap'
    import fetch from './fetch'
    import { requestAction } from './redux'
    
    export { useAPI, useAPIAll, clearAPICache, fetch, requestAction };
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
function getRequestActionInterfaceStr(interfaces: Intf[]): string {
    return `
        export interface IRequestAction {
        ${interfaces
            .map(({ modelName, method, url }) => {
                return `
                    '${modelName}': (params?: ModelItf['${modelName}']['Req']) => {
                        type: '${RAP_REDUX_REQUEST}',
                        payload: {
                            modelName: '${modelName}'
                            endpoint: '${url}'
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
function getRequestTypesStr(interfaces: Intf[]): string {
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
function getRequestActionStr(interfaces: Intf[]): string {
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
                                endpoint: '${url}',
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
}
function createReduxStr(interfaces: Intf[], { projectId }: IOptionsParams): string {
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
    ${getRequestActionInterfaceStr(interfaces)}

    /** 请求types */
    ${getRequestTypesStr(interfaces)}

    /** 请求action */
    ${getRequestActionStr(interfaces)}

    export const requestAction = RequestTypes
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
    import { RAP_STATE_KEY, dispatchAction, RAP_REDUX_CLEAR_STORE, utils } from '@ali/rapper-redux';

    /** store中存储的数据结构 */
    export interface IStoreItem {
        ${interfaces
            .map(
                ({ modelName }) => `
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
            const initData = reduxData.length ? reduxData.slice(-1)[0] : {}
            const [filteredData, setFilteredData] = useState(initData.response || undefined)
            const [isFetching, setIsFetching] = useState(initData.isFetching || false)

            type Req = ModelItf['${modelName}']['Req']
            type ItemType = IStoreItem['${modelName}']

            useEffect(() => {
                let resultArr = []
                if (filter) {
                    if (typeof filter === 'function') {
                        resultArr = reduxData.filter((item: ItemType) => utils.functionFilter<ItemType, typeof filter>(item, filter))
                    } else {
                        resultArr = reduxData.filter((item: ItemType) => utils.paramsFilter<Req, ItemType, typeof filter>(item, filter))
                    }
                } else {
                    resultArr = reduxData
                }
                /** 过滤出一条最新的符合条件的数据 */
                const result = resultArr.length ? resultArr.slice(-1)[0] : {}

                if (!utils.looseEqual(result.response, filteredData)) {
                    setFilteredData(result.response || undefined)
                    setIsFetching(result.isFetching || false)
                }
            }, [reduxData, filter, filteredData])

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
