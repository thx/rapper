"use strict";
exports.__esModule = true;
/** 接口名称转义 */
function getName(name) {
    return name.toLocaleUpperCase();
}
/** 定义 action interface  */
function getInterfaceStr(interfaces) {
    return "\n        export interface IAction {\n        " + interfaces
        .map(function (item) {
        var actionName = getName(item.modelName);
        return "\n                    '" + actionName + "': '" + actionName + "'\n                    '" + actionName + "_REQUEST': '" + actionName + "_REQUEST'\n                    '" + actionName + "_SUCCESS': '" + actionName + "_SUCCESS'\n                    '" + actionName + "_FAILURE': '" + actionName + "_FAILURE'\n                    '" + actionName + "_SUCCESS_ACTION'?: {\n                        type: '" + actionName + "_SUCCESS',\n                        payload: ModelItf['" + item.modelName + "']['Res']\n                    }\n                    '" + item.modelName + "': (params?: ModelItf['" + item.modelName + "']['Req'], cb?: () => void) => {},\n                ";
    })
        .join('\n\n') + "\n        }\n    ";
}
/** 定义 action */
function getActionStr(interfaces) {
    return "\n        export const Action:IAction = {\n            " + interfaces
        .map(function (_a) {
        var id = _a.id, repositoryId = _a.repositoryId, moduleId = _a.moduleId, name = _a.name, url = _a.url, modelName = _a.modelName, method = _a.method;
        var actionName = getName(modelName);
        return "\n                        /**\n                         * \u63A5\u53E3\u540D\uFF1A" + name + "\n                         * Rap \u5730\u5740: http://rap2.alibaba-inc.com/repository/editor?id=" + repositoryId + "&mod=" + moduleId + "&itf=" + id + "\n                         */\n                        '" + actionName + "': '" + actionName + "',\n                        '" + actionName + "_REQUEST': '" + actionName + "_REQUEST',\n                        '" + actionName + "_SUCCESS': '" + actionName + "_SUCCESS',\n                        '" + actionName + "_FAILURE': '" + actionName + "_FAILURE',\n                        '" + modelName + "': (params, cb) => ({\n                            'RAPPER_REDUX_REQUEST': {\n                                endpoint: '" + url + "',\n                                method: '" + method + "',\n                                params,\n                                cb,\n                                types: [\n                                    '" + actionName + "_REQUEST',\n                                    '" + actionName + "_SUCCESS',\n                                    '" + actionName + "_FAILURE',\n                                ],\n                            },\n                        }),\n                    ";
    })
        .join('\n\n') + "\n        }\n    ";
}
/** 生成 redux.ts */
function createReduxStr(projectId, interfaces) {
    var interfaceStr = getInterfaceStr(interfaces);
    var actionStr = getActionStr(interfaces);
    return "\n    /**\n     * \u672C\u6587\u4EF6\u7531 Rapper \u4ECE Rap \u4E2D\u81EA\u52A8\u751F\u6210\uFF0C\u8BF7\u52FF\u4FEE\u6539\n     * Rap \u5730\u5740: http://rap2.alibaba-inc.com/repository/editor?id=" + projectId + "\n     */\n\n    import { ModelItf } from './model'\n\n    " + interfaceStr + "\n\n    " + actionStr + "\n    ";
}
exports.createReduxStr = createReduxStr;
/** 生成 fetch.ts */
function createReduxFetchStr(projectId, interfaces, relBaseFetchPath) {
    return "\n    /**\n     * \u672C\u6587\u4EF6\u7531 Rapper \u4ECE Rap \u4E2D\u81EA\u52A8\u751F\u6210\uFF0C\u8BF7\u52FF\u4FEE\u6539\n     * Rap \u5730\u5740: http://rap2.alibaba-inc.com/repository/editor?id=" + projectId + "\n     */\n    import { dispatchRequest } from '@ali/rapper';\n    import { ModelItf } from './model';\n    import { Action } from './redux';\n\n    const request = {\n        " + interfaces
        .map(function (_a) {
        var modelName = _a.modelName, name = _a.name, repositoryId = _a.repositoryId, moduleId = _a.moduleId, id = _a.id;
        return "\n        /**\n         * \u63A5\u53E3\u540D\uFF1A" + name + "\n         * Rap \u5730\u5740: http://rap2.alibaba-inc.com/repository/editor?id=" + repositoryId + "&mod=" + moduleId + "&itf=" + id + "\n         * @param req \u8BF7\u6C42\u53C2\u6570\n         * @param extra \u8BF7\u6C42\u914D\u7F6E\u9879\n         */\n        '" + modelName + "': (req: ModelItf['" + modelName + "']['Req'], cb?: () => void) => {\n            dispatchRequest(Action['" + modelName + "'](req, cb))\n        }";
    })
        .join(',\n\n') + "\n    };\n    export default request;\n    ";
}
exports.createReduxFetchStr = createReduxFetchStr;
