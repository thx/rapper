"use strict";
exports.__esModule = true;
var constant_1 = require("./constant");
/** 接口名称转义 */
function getName(name) {
    return name.toLocaleUpperCase();
}
/** 请求链接 */
function getEndpoint(serverAPI, url) {
    return "" + serverAPI + url;
}
/** 定义 action interface  */
function getInterfaceStr(interfaces, serverAPI) {
    return "\n        export interface IAction {\n        " + interfaces
        .map(function (_a) {
        var modelName = _a.modelName, method = _a.method, url = _a.url;
        var actionName = getName(modelName);
        return "\n                    '" + actionName + "_REQUEST': '" + actionName + "_REQUEST'\n                    '" + actionName + "_SUCCESS': '" + actionName + "_SUCCESS'\n                    '" + actionName + "_FAILURE': '" + actionName + "_FAILURE'\n                    '" + actionName + "_SUCCESS_ACTION'?: {\n                        type: '" + actionName + "_SUCCESS',\n                        payload: ModelItf['" + modelName + "']['Res']\n                    }\n                    '" + actionName + "': (params?: ModelItf['" + modelName + "']['Req'], cb?: () => void) => {\n                        " + constant_1.RAPPER_REDUX_REQUEST + ": {\n                            modelName: '" + modelName + "'\n                            endpoint: '" + getEndpoint(serverAPI, url) + "'\n                            method: '" + method + "'\n                            params?: ModelItf['" + modelName + "']['Req']\n                            cb?: () => void\n                            types: ['" + actionName + "_REQUEST', '" + actionName + "_SUCCESS', '" + actionName + "_FAILURE']\n                        }\n                    },\n                ";
    })
        .join('\n\n') + "\n        }\n    ";
}
/** 定义 action */
function getActionStr(interfaces, serverAPI) {
    return "\n        export const Action:IAction = {\n            " + interfaces
        .map(function (_a) {
        var id = _a.id, repositoryId = _a.repositoryId, moduleId = _a.moduleId, name = _a.name, url = _a.url, modelName = _a.modelName, method = _a.method;
        var actionName = getName(modelName);
        return "\n                        /**\n                         * \u63A5\u53E3\u540D\uFF1A" + name + "\n                         * Rap \u5730\u5740: http://rap2.alibaba-inc.com/repository/editor?id=" + repositoryId + "&mod=" + moduleId + "&itf=" + id + "\n                         */\n                        '" + actionName + "_REQUEST': '" + actionName + "_REQUEST',\n                        '" + actionName + "_SUCCESS': '" + actionName + "_SUCCESS',\n                        '" + actionName + "_FAILURE': '" + actionName + "_FAILURE',\n                        '" + actionName + "': (params, cb) => ({\n                            'RAPPER_REDUX_REQUEST': {\n                                modelName: '" + modelName + "',\n                                endpoint: '" + getEndpoint(serverAPI, url) + "',\n                                method: '" + method + "',\n                                params,\n                                cb,\n                                types: [\n                                    '" + actionName + "_REQUEST',\n                                    '" + actionName + "_SUCCESS',\n                                    '" + actionName + "_FAILURE',\n                                ],\n                            },\n                        }),\n                    ";
    })
        .join('\n\n') + "\n        }\n    ";
}
/** 生成 index.ts */
function createIndexStr() {
    return "\n    /**\n     * \u672C\u6587\u4EF6\u7531 Rapper \u4ECE Rap \u4E2D\u81EA\u52A8\u751F\u6210\uFF0C\u8BF7\u52FF\u4FEE\u6539\n     */\n\n    import { useRap, clearRap } from './useRap'\n    import fetch from './fetch'\n    \n    export { useRap, clearRap, fetch };\n    ";
}
exports.createIndexStr = createIndexStr;
function createReduxStr(interfaces, _a) {
    var projectId = _a.projectId, serverAPI = _a.serverAPI;
    var interfaceStr = getInterfaceStr(interfaces, serverAPI);
    var actionStr = getActionStr(interfaces, serverAPI);
    return "\n    /**\n     * \u672C\u6587\u4EF6\u7531 Rapper \u4ECE Rap \u4E2D\u81EA\u52A8\u751F\u6210\uFF0C\u8BF7\u52FF\u4FEE\u6539\n     * Rap \u5730\u5740: http://rap2.alibaba-inc.com/repository/editor?id=" + projectId + "\n     */\n\n    import { ModelItf } from './model'\n\n    " + interfaceStr + "\n\n    " + actionStr + "\n    ";
}
exports.createReduxStr = createReduxStr;
/** 生成 fetch.ts */
function createReduxFetchStr(projectId, interfaces) {
    return "\n    /**\n     * \u672C\u6587\u4EF6\u7531 Rapper \u4ECE Rap \u4E2D\u81EA\u52A8\u751F\u6210\uFF0C\u8BF7\u52FF\u4FEE\u6539\n     * Rap \u5730\u5740: http://rap2.alibaba-inc.com/repository/editor?id=" + projectId + "\n     */\n    import { dispatchAction } from '@ali/rapper';\n    import { ModelItf } from './model';\n    import { Action } from './redux';\n\n    const request = {\n        " + interfaces
        .map(function (_a) {
        var modelName = _a.modelName, name = _a.name, repositoryId = _a.repositoryId, moduleId = _a.moduleId, id = _a.id;
        return "\n        /**\n         * \u63A5\u53E3\u540D\uFF1A" + name + "\n         * Rap \u5730\u5740: http://rap2.alibaba-inc.com/repository/editor?id=" + repositoryId + "&mod=" + moduleId + "&itf=" + id + "\n         * @param req \u8BF7\u6C42\u53C2\u6570\n         * @param extra \u8BF7\u6C42\u914D\u7F6E\u9879\n         */\n        '" + modelName + "': (req: ModelItf['" + modelName + "']['Req'], cb?: () => void) => {\n            dispatchAction(Action['" + getName(modelName) + "'](req, cb))\n        }";
    })
        .join(',\n\n') + "\n    };\n    export default request;\n    ";
}
exports.createReduxFetchStr = createReduxFetchStr;
/** 生成 useRap.ts */
function createUseRapStr(interfaces) {
    return "\n    /**\n     * \u672C\u6587\u4EF6\u7531 Rapper \u4ECE Rap \u4E2D\u81EA\u52A8\u751F\u6210\uFF0C\u8BF7\u52FF\u4FEE\u6539\n     */\n    import { useSelector } from 'react-redux';\n    import { ModelItf } from './model';\n    import { RAP_STATE_KEY, dispatchAction, RAPPER_REDUX_UPDATE_STORE } from '@ali/rapper';\n\n    /*\n    const useRap = modelName => {\n        return useSelector(state => state[RAP_STATE_KEY][modelName])\n    }\n\n    const clearRap = modelName => {\n        dispatchAction({\n            type: RAPPER_REDUX_UPDATE_STORE, \n            payload: {\n                [modelName]: undefined,\n            }\n        })\n    }\n    */\n\n    const useRap = {\n        " + interfaces
        .map(function (_a) {
        var modelName = _a.modelName, name = _a.name, repositoryId = _a.repositoryId, moduleId = _a.moduleId, id = _a.id;
        return "\n        /**\n         * \u63A5\u53E3\u540D\uFF1A" + name + "\n         * Rap \u5730\u5740: http://rap2.alibaba-inc.com/repository/editor?id=" + repositoryId + "&mod=" + moduleId + "&itf=" + id + "\n         */\n        '" + modelName + "': (): ModelItf['" + modelName + "']['Res'] => {\n            return useSelector(state => state[RAP_STATE_KEY] && state[RAP_STATE_KEY]['" + modelName + "'])\n        }";
    })
        .join(',\n\n') + "\n    }\n\n    /** \u91CD\u7F6E\u63A5\u53E3\u6570\u636E */\n    const clearRap = {\n        " + interfaces
        .map(function (_a) {
        var modelName = _a.modelName, name = _a.name, repositoryId = _a.repositoryId, moduleId = _a.moduleId, id = _a.id;
        return "\n        /**\n         * \u63A5\u53E3\u540D\uFF1A" + name + "\n         * Rap \u5730\u5740: http://rap2.alibaba-inc.com/repository/editor?id=" + repositoryId + "&mod=" + moduleId + "&itf=" + id + "\n         */\n        '" + modelName + "': (): void => {\n            dispatchAction({\n                type: RAPPER_REDUX_UPDATE_STORE, \n                payload: {\n                    ['" + modelName + "']: undefined,\n                }\n            })\n        }";
    })
        .join(',\n\n') + "\n    }\n\n    export { useRap, clearRap };\n    ";
}
exports.createUseRapStr = createUseRapStr;
