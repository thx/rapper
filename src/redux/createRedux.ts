import { Intf } from '../types'
import { RAPPER_REDUX_REQUEST } from './constant'

/** 接口名称转义 */
function getName(name: string): string {
    return name.toLocaleUpperCase()
}

/** 请求链接 */
function getEndpoint(serverAPI: string, url: string): string {
    return `${serverAPI}${url}`
}

/** 定义 action interface  */
function getInterfaceStr(interfaces: Intf[], serverAPI: string): string {
    return `
        export interface IAction {
        ${interfaces
            .map(({ modelName, method, url }) => {
                const actionName = getName(modelName)
                return `
                    '${actionName}_REQUEST': '${actionName}_REQUEST'
                    '${actionName}_SUCCESS': '${actionName}_SUCCESS'
                    '${actionName}_FAILURE': '${actionName}_FAILURE'
                    '${actionName}_SUCCESS_ACTION'?: {
                        type: '${actionName}_SUCCESS',
                        payload: ModelItf['${modelName}']['Res']
                    }
                    '${actionName}': (params?: ModelItf['${modelName}']['Req'], cb?: () => void) => {
                        ${RAPPER_REDUX_REQUEST}: {
                            modelName: '${modelName}'
                            endpoint: '${getEndpoint(serverAPI, url)}'
                            method: '${method}'
                            params?: ModelItf['${modelName}']['Req']
                            cb?: () => void
                            types: ['${actionName}_REQUEST', '${actionName}_SUCCESS', '${actionName}_FAILURE']
                        }
                    },
                `
            })
            .join('\n\n')}
        }
    `
}

/** 定义 action */
function getActionStr(interfaces: Intf[], serverAPI: string): string {
    return `
        export const Action:IAction = {
            ${interfaces
                .map(({ id, repositoryId, moduleId, name, url, modelName, method }) => {
                    const actionName = getName(modelName)
                    return `
                        /**
                         * 接口名：${name}
                         * Rap 地址: http://rap2.alibaba-inc.com/repository/editor?id=${repositoryId}&mod=${moduleId}&itf=${id}
                         */
                        '${actionName}_REQUEST': '${actionName}_REQUEST',
                        '${actionName}_SUCCESS': '${actionName}_SUCCESS',
                        '${actionName}_FAILURE': '${actionName}_FAILURE',
                        '${actionName}': (params, cb) => ({
                            'RAPPER_REDUX_REQUEST': {
                                modelName: '${modelName}',
                                endpoint: '${getEndpoint(serverAPI, url)}',
                                method: '${method}',
                                params,
                                cb,
                                types: [
                                    '${actionName}_REQUEST',
                                    '${actionName}_SUCCESS',
                                    '${actionName}_FAILURE',
                                ],
                            },
                        }),
                    `
                })
                .join('\n\n')}
        }
    `
}

/** 生成 index.ts */
function createIndexStr(): string {
    return `
    /**
     * 本文件由 Rapper 从 Rap 中自动生成，请勿修改
     */

    import { useRap, clearRap } from './useRap'
    import fetch from './fetch'
    
    export { useRap, clearRap, fetch };
    `
}

/** 生成 redux.ts */
interface IOptionsParams {
    projectId: number
    serverAPI: string
}
function createReduxStr(interfaces: Intf[], { projectId, serverAPI }: IOptionsParams): string {
    const interfaceStr = getInterfaceStr(interfaces, serverAPI)
    const actionStr = getActionStr(interfaces, serverAPI)

    return `
    /**
     * 本文件由 Rapper 从 Rap 中自动生成，请勿修改
     * Rap 地址: http://rap2.alibaba-inc.com/repository/editor?id=${projectId}
     */

    import { ModelItf } from './model'

    ${interfaceStr}

    ${actionStr}
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
    import { Action } from './redux';

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
        '${modelName}': (req: ModelItf['${modelName}']['Req'], cb?: () => void) => {
            dispatchAction(Action['${getName(modelName)}'](req, cb))
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
    import { rapperStateKey, dispatchAction, RAPPER_REDUX_UPDATE_STORE } from '@ali/rapper';

    /*
    const useRap = modelName => {
        return useSelector(state => state[rapperStateKey][modelName])
    }
    const clearRap = modelName => {
        dispatchAction({
            type: RAPPER_REDUX_UPDATE_STORE, 
            payload: {
                [modelName]: undefined,
            }
        })
    }
    */

    const useRap = {
        ${interfaces
            .map(
                ({ modelName, name, repositoryId, moduleId, id }) => `
        /**
         * 接口名：${name}
         * Rap 地址: http://rap2.alibaba-inc.com/repository/editor?id=${repositoryId}&mod=${moduleId}&itf=${id}
         */
        '${modelName}': (): ModelItf['${modelName}']['Res'] => {
            return useSelector(state => state[rapperStateKey]['${modelName}'])
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
                type: RAPPER_REDUX_UPDATE_STORE, 
                payload: {
                    ['${modelName}']: undefined,
                }
            })
        }`
            )
            .join(',\n\n')}
    }

    export { useRap, clearRap };
    `
}

export { createIndexStr, createReduxStr, createReduxFetchStr, createUseRapStr }
