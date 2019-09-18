import { Intf } from '../types'
import { RAP_REDUX_REQUEST } from './constant'

/** 接口名称转义 */
function getName(name: string): string {
    return name.toLocaleUpperCase()
}

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

    import { useRap, useRapAll, clearRap } from './useRap'
    import fetch from './fetch'
    
    export { useRap, useRapAll, clearRap, fetch };
    `
}

/** 定义 请求types interface  */
function getRequestTypesInterfaceStr(interfaces: Intf[], serverAPI: string): string {
    return `
        export interface IRequestTypes {
        ${interfaces
            .map(({ modelName }) => {
                const actionName = getName(modelName)
                return `
                    '${actionName}_REQUEST': '${actionName}_REQUEST'
                    '${actionName}_SUCCESS': '${actionName}_SUCCESS'
                    '${actionName}_FAILURE': '${actionName}_FAILURE'
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
                const actionName = getName(modelName)
                return `
                    '${actionName}': (params?: ModelItf['${modelName}']['Req']) => {
                        type: '${RAP_REDUX_REQUEST}',
                        payload: {
                            modelName: '${modelName}'
                            endpoint: '${getEndpoint(serverAPI, url)}'
                            method: '${method}'
                            params?: ModelItf['${modelName}']['Req']
                            types: ['${actionName}_REQUEST', '${actionName}_SUCCESS', '${actionName}_FAILURE']
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
                    const actionName = getName(modelName)
                    return `
                        '${actionName}_REQUEST': '${actionName}_REQUEST',
                        '${actionName}_SUCCESS': '${actionName}_SUCCESS',
                        '${actionName}_FAILURE': '${actionName}_FAILURE',
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
                    const actionName = getName(modelName)
                    return `
                        /**
                         * 接口名：${name}
                         * Rap 地址: http://rap2.alibaba-inc.com/repository/editor?id=${repositoryId}&mod=${moduleId}&itf=${id}
                         */
                        '${actionName}': (params) => ({
                            type: '${RAP_REDUX_REQUEST}',
                            payload: {
                                modelName: '${modelName}',
                                endpoint: '${getEndpoint(serverAPI, url)}',
                                method: '${method}',
                                params,
                                types: [
                                    RequestTypes['${actionName}_REQUEST'],
                                    RequestTypes['${actionName}_SUCCESS'],
                                    RequestTypes['${actionName}_FAILURE'],
                                ],
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

    /** 请求types interface  */
    ${getRequestTypesInterfaceStr(interfaces, serverAPI)}

    /** 请求action interface  */
    ${getRequestActionInterfaceStr(interfaces, serverAPI)}

    /** 请求types */
    ${getRequestTypesStr(interfaces, serverAPI)}

    /** 请求action */
    ${getRequestActionStr(interfaces, serverAPI)}
    `
}

/** 生成 fetch.ts */
function createReduxFetchStr(projectId: number, interfaces: Intf[]): string {
    return `
    /**
     * 本文件由 Rapper 从 Rap 中自动生成，请勿修改
     * Rap 地址: http://rap2.alibaba-inc.com/repository/editor?id=${projectId}
     */
    import { dispatchAction } from '@ali/rapper';
    import { ModelItf } from './model';
    import { RequestAction } from './redux';

    interface IExtra {
        isHideSuccess?: boolean
        isHideFail?: boolean
    }

    const request = {
        ${interfaces
            .map(
                ({ modelName, name, repositoryId, moduleId, id }) => `
        /**
         * 接口名：${name}
         * Rap 地址: http://rap2.alibaba-inc.com/repository/editor?id=${repositoryId}&mod=${moduleId}&itf=${id}
         * @param req 请求参数
         * @param extra 请求配置项
         */
        '${modelName}': (req?: ModelItf['${modelName}']['Req'], extra?: IExtra): Promise<ModelItf['${modelName}']['Res']> => {
            const action = RequestAction['${getName(modelName)}'](req)
            if (Object.prototype.toString.call(extra)) {
                action.payload = { ...action.payload, ...extra }
            }
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
    import { useSelector } from 'react-redux';
    import { ModelItf } from './model';
    import { RAP_STATE_KEY, dispatchAction, RAP_REDUX_CLEAR_STORE } from '@ali/rapper';

    const useRap = {
        ${interfaces
            .map(
                ({ modelName, name, repositoryId, moduleId, id }) => `
        /**
         * 接口名：${name}
         * Rap 地址: http://rap2.alibaba-inc.com/repository/editor?id=${repositoryId}&mod=${moduleId}&itf=${id}
         */
        '${modelName}': (params?: {
            req?: ModelItf['${modelName}']['Req']
            filter?: (
                req: ModelItf['${modelName}']['Req'],
                res: ModelItf['${modelName}']['Res']
            ) => any
        }): ModelItf['${modelName}']['Res'] => {
            return useSelector(state => {
                const currentState = (state[RAP_STATE_KEY] && state[RAP_STATE_KEY]['${modelName}']) || []
                const data = currentState.filter(
                    (item: {
                        req: ModelItf['${modelName}']['Req']
                        res: ModelItf['${modelName}']['Res']
                    }) => {
                        /** 执行filter */
                        if (params.filter !== undefined) {
                            if (typeof params.filter === 'function') {
                                return params.filter(item.req, item.res)
                            } else {
                                return false
                            }
                        }
    
                        /** 比较 req */
                        if (params.req !== undefined) {
                            if (Object.prototype.toString.call(params.req) === 'object') {
                                const reqResult = Object.keys(params.req).every(key => {
                                    return item[key] === params.req[key]
                                })
                                if (!reqResult) return false
                            } else {
                                return false
                            }
                        }
                        return true
                    }
                )
                /** 过滤出一条最新的符合条件的数据 */
                return data.length ? data.slice(-1)[0].res : undefined
            })
        }`
            )
            .join(',\n\n')}
    }

    const useRapAll = {
        ${interfaces
            .map(
                ({ modelName, name, repositoryId, moduleId, id }) => `
        /**
         * 接口名：${name}
         * Rap 地址: http://rap2.alibaba-inc.com/repository/editor?id=${repositoryId}&mod=${moduleId}&itf=${id}
         */
        '${modelName}': (): ModelItf['${modelName}']['Res'][] => {
            return useSelector(state => {
                const selectedState = (state[RAP_STATE_KEY] && state[RAP_STATE_KEY]['${modelName}']) || []
                return selectedState.map(({ res }) => res)
            })
        }`
            )
            .join(',\n\n')}
    }

    /** 重置接口数据 */
    const clearRap = {
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

    export { useRap, useRapAll, clearRap };
    `
}

export { createIndexStr, createReduxStr, createReduxFetchStr, createUseRapStr }
