/** 接口名称转义 */
function getName(name) {
    return name.toLocaleUpperCase()
}

/** 定义 action interface  */
function getInterfaceStr(interfaces) {
    return `
        export interface IAction {
        ${interfaces
            .map(item => {
                const actionName = getName(item.modelName)
                return `
                    '${actionName}': '${actionName}'
                    '${actionName}_REQUEST': '${actionName}_REQUEST'
                    '${actionName}_SUCCESS': '${actionName}_SUCCESS'
                    '${actionName}_FAILURE': '${actionName}_FAILURE'
                    '${actionName}_SUCCESS_ACTION'?: {
                        type: '${actionName}_SUCCESS',
                        payload: ModelItf['${item.modelName}']['Res']
                    }
                    '${item.modelName}': (params?: ModelItf['${item.modelName}']['Req'], cb?: () => void) => {},
                `
            })
            .join('\n\n')}
        }
    `
}

/** 定义 action */
function getActionStr(interfaces) {
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
                        '${actionName}': '${actionName}',
                        '${actionName}_REQUEST': '${actionName}_REQUEST',
                        '${actionName}_SUCCESS': '${actionName}_SUCCESS',
                        '${actionName}_FAILURE': '${actionName}_FAILURE',
                        '${modelName}': (params, cb) => ({
                            'RAPPER_REDUX_REQUEST': {
                                endpoint: '${url}',
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

/** 生成 redux.ts */
function createReduxStr(projectId: number, interfaces: Array<any>): string {
    const interfaceStr = getInterfaceStr(interfaces)
    const actionStr = getActionStr(interfaces)

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
function createReduxFetchStr(projectId: number, interfaces: Array<any>, relBaseFetchPath: string) {
    return `
    /**
     * 本文件由 Rapper 从 Rap 中自动生成，请勿修改
     * Rap 地址: http://rap2.alibaba-inc.com/repository/editor?id=${projectId}
     */
    import { dispatchRequest } from '@ali/rapper';
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
            dispatchRequest(Action['${modelName}'](req, cb))
        }`
            )
            .join(',\n\n')}
    };
    export default request;
    `
}

export { createReduxStr, createReduxFetchStr }
