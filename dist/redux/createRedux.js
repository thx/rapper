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
/** 生成 index.ts */
function createIndexStr() {
    return "\n    /**\n     * \u672C\u6587\u4EF6\u7531 Rapper \u4ECE Rap \u4E2D\u81EA\u52A8\u751F\u6210\uFF0C\u8BF7\u52FF\u4FEE\u6539\n     */\n\n    import { useRap, useRapAll, clearRap } from './useRap'\n    import fetch from './fetch'\n    \n    export { useRap, useRapAll, clearRap, fetch };\n    ";
}
exports.createIndexStr = createIndexStr;
/** 定义 请求types interface  */
function getRequestTypesInterfaceStr(interfaces, serverAPI) {
    return "\n        export interface IRequestTypes {\n        " + interfaces
        .map(function (_a) {
        var modelName = _a.modelName;
        var actionName = getName(modelName);
        return "\n                    '" + actionName + "_REQUEST': '" + actionName + "_REQUEST'\n                    '" + actionName + "_SUCCESS': '" + actionName + "_SUCCESS'\n                    '" + actionName + "_FAILURE': '" + actionName + "_FAILURE'\n                ";
    })
        .join('\n\n') + "\n        }\n    ";
}
/** 定义 请求action interface  */
function getRequestActionInterfaceStr(interfaces, serverAPI) {
    return "\n        export interface IRequestAction {\n        " + interfaces
        .map(function (_a) {
        var modelName = _a.modelName, method = _a.method, url = _a.url;
        var actionName = getName(modelName);
        return "\n                    '" + actionName + "': (params?: ModelItf['" + modelName + "']['Req']) => {\n                        type: '" + constant_1.RAP_REDUX_REQUEST + "',\n                        payload: {\n                            modelName: '" + modelName + "'\n                            endpoint: '" + getEndpoint(serverAPI, url) + "'\n                            method: '" + method + "'\n                            params?: ModelItf['" + modelName + "']['Req']\n                            types: ['" + actionName + "_REQUEST', '" + actionName + "_SUCCESS', '" + actionName + "_FAILURE']\n                        }\n                    },\n                ";
    })
        .join('\n\n') + "\n        }\n    ";
}
/** 定义 请求types */
function getRequestTypesStr(interfaces, serverAPI) {
    return "\n        export const RequestTypes:IRequestTypes = {\n            " + interfaces
        .map(function (_a) {
        var modelName = _a.modelName;
        var actionName = getName(modelName);
        return "\n                        '" + actionName + "_REQUEST': '" + actionName + "_REQUEST',\n                        '" + actionName + "_SUCCESS': '" + actionName + "_SUCCESS',\n                        '" + actionName + "_FAILURE': '" + actionName + "_FAILURE',\n                    ";
    })
        .join('\n\n') + "\n        }\n    ";
}
/** 定义 请求action */
function getRequestActionStr(interfaces, serverAPI) {
    return "\n        export const RequestAction:IRequestAction = {\n            " + interfaces
        .map(function (_a) {
        var id = _a.id, repositoryId = _a.repositoryId, moduleId = _a.moduleId, name = _a.name, url = _a.url, modelName = _a.modelName, method = _a.method;
        var actionName = getName(modelName);
        return "\n                        /**\n                         * \u63A5\u53E3\u540D\uFF1A" + name + "\n                         * Rap \u5730\u5740: http://rap2.alibaba-inc.com/repository/editor?id=" + repositoryId + "&mod=" + moduleId + "&itf=" + id + "\n                         */\n                        '" + actionName + "': (params) => ({\n                            type: '" + constant_1.RAP_REDUX_REQUEST + "',\n                            payload: {\n                                modelName: '" + modelName + "',\n                                endpoint: '" + getEndpoint(serverAPI, url) + "',\n                                method: '" + method + "',\n                                params,\n                                types: [\n                                    RequestTypes['" + actionName + "_REQUEST'],\n                                    RequestTypes['" + actionName + "_SUCCESS'],\n                                    RequestTypes['" + actionName + "_FAILURE'],\n                                ],\n                            },\n                        }),\n                    ";
    })
        .join('\n\n') + "\n        }\n    ";
}
function createReduxStr(interfaces, _a) {
    var projectId = _a.projectId, serverAPI = _a.serverAPI;
    return "\n    /**\n     * \u672C\u6587\u4EF6\u7531 Rapper \u4ECE Rap \u4E2D\u81EA\u52A8\u751F\u6210\uFF0C\u8BF7\u52FF\u4FEE\u6539\n     * Rap \u5730\u5740: http://rap2.alibaba-inc.com/repository/editor?id=" + projectId + "\n     */\n\n    import { ModelItf } from './model'\n\n    /** \u8BF7\u6C42types interface  */\n    " + getRequestTypesInterfaceStr(interfaces, serverAPI) + "\n\n    /** \u8BF7\u6C42action interface  */\n    " + getRequestActionInterfaceStr(interfaces, serverAPI) + "\n\n    /** \u8BF7\u6C42types */\n    " + getRequestTypesStr(interfaces, serverAPI) + "\n\n    /** \u8BF7\u6C42action */\n    " + getRequestActionStr(interfaces, serverAPI) + "\n    ";
}
exports.createReduxStr = createReduxStr;
/** 生成 fetch.ts */
function createReduxFetchStr(projectId, interfaces) {
    return "\n    /**\n     * \u672C\u6587\u4EF6\u7531 Rapper \u4ECE Rap \u4E2D\u81EA\u52A8\u751F\u6210\uFF0C\u8BF7\u52FF\u4FEE\u6539\n     * Rap \u5730\u5740: http://rap2.alibaba-inc.com/repository/editor?id=" + projectId + "\n     */\n    import { dispatchAction } from '@ali/rapper';\n    import { ModelItf } from './model';\n    import { RequestAction } from './redux';\n\n    interface IExtra {\n        isHideSuccess?: boolean\n        isHideFail?: boolean\n    }\n\n    const request = {\n        " + interfaces
        .map(function (_a) {
        var modelName = _a.modelName, name = _a.name, repositoryId = _a.repositoryId, moduleId = _a.moduleId, id = _a.id;
        return "\n        /**\n         * \u63A5\u53E3\u540D\uFF1A" + name + "\n         * Rap \u5730\u5740: http://rap2.alibaba-inc.com/repository/editor?id=" + repositoryId + "&mod=" + moduleId + "&itf=" + id + "\n         * @param req \u8BF7\u6C42\u53C2\u6570\n         * @param extra \u8BF7\u6C42\u914D\u7F6E\u9879\n         */\n        '" + modelName + "': (req?: ModelItf['" + modelName + "']['Req'], extra?: IExtra): Promise<ModelItf['" + modelName + "']['Res']> => {\n            const action = RequestAction['" + getName(modelName) + "'](req)\n            if (Object.prototype.toString.call(extra)) {\n                action.payload = { ...action.payload, ...extra }\n            }\n            return dispatchAction(action)\n        }";
    })
        .join(',\n\n') + "\n    };\n    export default request;\n    ";
}
exports.createReduxFetchStr = createReduxFetchStr;
/** 生成 useRap.ts */
function createUseRapStr(interfaces) {
    return "\n    /**\n     * \u672C\u6587\u4EF6\u7531 Rapper \u4ECE Rap \u4E2D\u81EA\u52A8\u751F\u6210\uFF0C\u8BF7\u52FF\u4FEE\u6539\n     */\n    import { useSelector } from 'react-redux';\n    import { ModelItf } from './model';\n    import { RAP_STATE_KEY, dispatchAction, RAP_REDUX_CLEAR_STORE } from '@ali/rapper';\n\n    const useRap = {\n        " + interfaces
        .map(function (_a) {
        var modelName = _a.modelName, name = _a.name, repositoryId = _a.repositoryId, moduleId = _a.moduleId, id = _a.id;
        return "\n        /**\n         * \u63A5\u53E3\u540D\uFF1A" + name + "\n         * Rap \u5730\u5740: http://rap2.alibaba-inc.com/repository/editor?id=" + repositoryId + "&mod=" + moduleId + "&itf=" + id + "\n         */\n        '" + modelName + "': (params?: {\n            req?: ModelItf['" + modelName + "']['Req']\n            filter?: (\n                req: ModelItf['" + modelName + "']['Req'],\n                res: ModelItf['" + modelName + "']['Res']\n            ) => any\n        }): ModelItf['" + modelName + "']['Res'] => {\n            return useSelector(state => {\n                const currentState = (state[RAP_STATE_KEY] && state[RAP_STATE_KEY]['" + modelName + "']) || []\n                \n                const data = Object.prototype.toString.call(params) === '[object Object]' ? currentState.filter(\n                    (item: {\n                        req: ModelItf['" + modelName + "']['Req']\n                        res: ModelItf['" + modelName + "']['Res']\n                    }) => {\n                        /** \u6267\u884Cfilter */\n                        if (params.filter !== undefined) {\n                            if (typeof params.filter === 'function') {\n                                return params.filter(item.req, item.res)\n                            } else {\n                                return false\n                            }\n                        }\n    \n                        /** \u6BD4\u8F83 req */\n                        if (params.req !== undefined) {\n                            if (Object.prototype.toString.call(params.req) === '[object Object]') {\n                                const reqResult = Object.keys(params.req).every(key => {\n                                    return item[key] === params.req[key]\n                                })\n                                if (!reqResult) return false\n                            } else {\n                                return false\n                            }\n                        }\n                        return true\n                    }\n                ) : currentState\n                /** \u8FC7\u6EE4\u51FA\u4E00\u6761\u6700\u65B0\u7684\u7B26\u5408\u6761\u4EF6\u7684\u6570\u636E */\n                return data.length ? data.slice(-1)[0].res : undefined\n            })\n        }";
    })
        .join(',\n\n') + "\n    }\n\n    const useRapAll = {\n        " + interfaces
        .map(function (_a) {
        var modelName = _a.modelName, name = _a.name, repositoryId = _a.repositoryId, moduleId = _a.moduleId, id = _a.id;
        return "\n        /**\n         * \u63A5\u53E3\u540D\uFF1A" + name + "\n         * Rap \u5730\u5740: http://rap2.alibaba-inc.com/repository/editor?id=" + repositoryId + "&mod=" + moduleId + "&itf=" + id + "\n         */\n        '" + modelName + "': (): ModelItf['" + modelName + "']['Res'][] => {\n            return useSelector(state => {\n                const selectedState = (state[RAP_STATE_KEY] && state[RAP_STATE_KEY]['" + modelName + "']) || []\n                return selectedState.map(({ res }) => res)\n            })\n        }";
    })
        .join(',\n\n') + "\n    }\n\n    /** \u91CD\u7F6E\u63A5\u53E3\u6570\u636E */\n    const clearRap = {\n        " + interfaces
        .map(function (_a) {
        var modelName = _a.modelName, name = _a.name, repositoryId = _a.repositoryId, moduleId = _a.moduleId, id = _a.id;
        return "\n        /**\n         * \u63A5\u53E3\u540D\uFF1A" + name + "\n         * Rap \u5730\u5740: http://rap2.alibaba-inc.com/repository/editor?id=" + repositoryId + "&mod=" + moduleId + "&itf=" + id + "\n         */\n        '" + modelName + "': (): void => {\n            dispatchAction({\n                type: RAP_REDUX_CLEAR_STORE, \n                payload: {\n                    ['" + modelName + "']: undefined,\n                }\n            })\n        }";
    })
        .join(',\n\n') + "\n    }\n\n    export { useRap, useRapAll, clearRap };\n    ";
}
exports.createUseRapStr = createUseRapStr;
