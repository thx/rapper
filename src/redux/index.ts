import { Intf } from '../types'

/** 定义 请求types interface  */
function getRequestTypesInterfaceStr(interfaces: Intf[]): string {
    return `interface IRequestTypes {
        ${interfaces
            .map(({ modelName }) => `'${modelName}': ['${modelName}_REQUEST', '${modelName}_SUCCESS', '${modelName}_FAILURE']`)
            .join('\n\n')}
        }
    `
}

/** 定义 请求action interface  */
function getRequestActionInterfaceStr(interfaces: Intf[]): string {
    return `interface IRequestAction {
        ${interfaces
            .map(({ modelName, method, url }) => {
                return `
                    '${modelName}': (params?: ModelItf['${modelName}']['Req']) => {
                        type: '$$RAPPER_REQUEST',
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
    return `const RequestTypes:IRequestTypes = {
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
    }`
}

/** 定义 请求action */
function getRequestActionStr(interfaces: Intf[]): string {
    return `const RequestAction:IRequestAction = {
        ${interfaces
            .map(({ id, repositoryId, moduleId, name, url, modelName, method }) => {
                return `
                    /**
                     * 接口名：${name}
                     * Rap 地址: http://rap2.alibaba-inc.com/repository/editor?id=${repositoryId}&mod=${moduleId}&itf=${id}
                     */
                    '${modelName}': (params) => ({
                        type: RAPPER_REQUEST,
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

/** 生成 Action 定义 */
function createActionStr(interfaces: Intf[]): string {
    return `
    /** 请求types interface  */
    ${getRequestTypesInterfaceStr(interfaces)}

    /** 请求action interface  */
    ${getRequestActionInterfaceStr(interfaces)}

    /** 请求types */
    ${getRequestTypesStr(interfaces)}

    /** 请求action */
    ${getRequestActionStr(interfaces)}
    `
}

/** 生成 rapperRequest */
function createRapperRequestStr(interfaces: Intf[]): string {
    return `
    export const rapperRequest = {
        ${interfaces
            .map(
                ({ modelName, name, repositoryId, moduleId, id }) => `
        /**
         * 接口名：${name}
         * Rap 地址: http://rap2.alibaba-inc.com/repository/editor?id=${repositoryId}&mod=${moduleId}&itf=${id}
         * @param req 请求参数
         */
        '${modelName}': (req?: ModelItf['${modelName}']['Req']) => {
            const action = RequestAction['${modelName}'](req)
            return dispatchAction(action) as ReturnType<ModelItf['${modelName}']['Res']>
        }`
            )
            .join(',\n\n')}
    };
    `
}

/** 生成 useResponse，useAllResponse */
function createUseRapStr(interfaces: Intf[]): string {
    return `
    /** store中存储的数据结构 */
    interface IStoreItem {
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
        [key: string]: any
    }

    export const useResponse = {
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
        ) {
            const reduxData = useSelector((state: IState) => {
                return (state[RAPPER_STATE_KEY] && state[RAPPER_STATE_KEY]['${modelName}']) || []
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
                        resultArr = reduxData.filter((item: ItemType) => functionFilter<ItemType, typeof filter>(item, filter))
                    } else {
                        resultArr = reduxData.filter((item: ItemType) => paramsFilter<Req, ItemType, typeof filter>(item, filter))
                    }
                } else {
                    resultArr = reduxData
                }
                /** 过滤出一条最新的符合条件的数据 */
                const result = resultArr.length ? resultArr.slice(-1)[0] : {}

                if (!looseEqual(result.response, filteredData)) {
                    setFilteredData(result.response || undefined)
                    setIsFetching(result.isFetching || false)
                }
            }, [reduxData, filter, filteredData])

            return [filteredData, isFetching] as [ReturnType<ModelItf['${modelName}']['Res']>, boolean | undefined]
        }`
            )
            .join(',\n\n')}
    }

    export const useAllResponse = {
        ${interfaces
            .map(
                ({ modelName, name, repositoryId, moduleId, id }) => `
        /**
         * 接口名：${name}
         * Rap 地址: http://rap2.alibaba-inc.com/repository/editor?id=${repositoryId}&mod=${moduleId}&itf=${id}
         */
        /* tslint:disable */
        '${modelName}': function useData() {
            return useSelector((state: IState) => {
                const selectedState = (state[RAPPER_STATE_KEY] && state[RAPPER_STATE_KEY]['${modelName}']) || []
                return selectedState as ReturnType<ModelItf['${modelName}']['Res']>[]
            })
        }`
            )
            .join(',\n\n')}
    }

    /** 重置接口数据 */
    export const clearResponseCache = {
        ${interfaces
            .map(
                ({ modelName, name, repositoryId, moduleId, id }) => `
        /**
         * 接口名：${name}
         * Rap 地址: http://rap2.alibaba-inc.com/repository/editor?id=${repositoryId}&mod=${moduleId}&itf=${id}
         */
        '${modelName}': (): void => {
            dispatchAction({
                type: RAPPER_CLEAR_STORE, 
                payload: {
                    '${modelName}': undefined,
                }
            })
        }`
            )
            .join(',\n\n')}
    }
    `
}

/** 生成 index.ts */
function createIndexStr(projectId: number): string {
    return `
    /**
     * 本文件由 Rapper 从 Rap 中自动生成，请勿修改
     * Rap 地址: http://rap2.alibaba-inc.com/repository/editor?id=${projectId}
     */

    import { rapperRequest, useResponse, useAllResponse, clearResponseCache, rapperActions } from './request'
    import { rapReducers, rapEnhancer } from './runtime'
    
    export {
        /** 发送rapper请求 */
        rapperRequest,
        /** 以Hooks的方式使用请求响应数据 */
        useResponse,
        /** 使用请求响应数据（包含缓存） */
        useAllResponse,
        /** 清除此接口的缓存 */
        clearResponseCache,
        rapperActions,
        rapReducers,
        rapEnhancer,
    };
    `
}

/** 生成 request.ts */
function createRequestStr(interfaces: Intf[], { projectId }): string {
    return `
    /**
     * 本文件由 Rapper 从 Rap 中自动生成，请勿修改
     * Rap 地址: http://rap2.alibaba-inc.com/repository/editor?id=${projectId}
     */
    import { useState, useEffect } from 'react'
    import { useSelector } from 'react-redux'
    import { ModelItf } from './model'
    import { dispatchAction, RAPPER_REQUEST, RAPPER_CLEAR_STORE, RAPPER_STATE_KEY } from './runtime'
    import baseFetch from './base-fetch'

    class Helper<Req> {
        Return = baseFetch<Req>({ endpoint: '' })
    }
    type ReturnType<T> = Helper<T>['Return']

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
    function paramsFilter<Req extends { [key: string]: any }, I extends { request: Req }, Fil extends { request?: Req }>(
        item: I,
        filter: Fil
    ): boolean {
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
    function functionFilter<I, Fil>(item: I, filter: Fil) {
        if (filter !== undefined) {
            if (typeof filter === 'function') {
                return filter(item)
            } else {
                return false
            }
        }
        return true
    }

    ${createActionStr(interfaces)}
    ${createRapperRequestStr(interfaces)}
    ${createUseRapStr(interfaces)}

    export const rapperActions = RequestTypes || []
    `
}

export default { createIndexStr, createRequestStr }
