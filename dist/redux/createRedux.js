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
    return "\n    /**\n     * \u672C\u6587\u4EF6\u7531 Rapper \u4ECE Rap \u4E2D\u81EA\u52A8\u751F\u6210\uFF0C\u8BF7\u52FF\u4FEE\u6539\n     */\n\n    import { useAPI, useAPIAll, clearAPI } from './useRap'\n    import fetch from './fetch'\n    \n    export { useAPI, useAPIAll, clearAPI, fetch };\n    ";
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
    return "\n    /**\n     * \u672C\u6587\u4EF6\u7531 Rapper \u4ECE Rap \u4E2D\u81EA\u52A8\u751F\u6210\uFF0C\u8BF7\u52FF\u4FEE\u6539\n     * Rap \u5730\u5740: http://rap2.alibaba-inc.com/repository/editor?id=" + projectId + "\n     */\n    import { dispatchAction } from '@ali/rapper-redux';\n    import { ModelItf } from './model';\n    import { RequestAction } from './redux';\n\n    interface IExtra {\n        isHideSuccess?: boolean\n        isHideFail?: boolean\n    }\n\n    const request = {\n        " + interfaces
        .map(function (_a) {
        var modelName = _a.modelName, name = _a.name, repositoryId = _a.repositoryId, moduleId = _a.moduleId, id = _a.id;
        return "\n        /**\n         * \u63A5\u53E3\u540D\uFF1A" + name + "\n         * Rap \u5730\u5740: http://rap2.alibaba-inc.com/repository/editor?id=" + repositoryId + "&mod=" + moduleId + "&itf=" + id + "\n         * @param req \u8BF7\u6C42\u53C2\u6570\n         * @param extra \u8BF7\u6C42\u914D\u7F6E\u9879\n         */\n        '" + modelName + "': (req?: ModelItf['" + modelName + "']['Req'], extra?: IExtra): Promise<ModelItf['" + modelName + "']['Res']> => {\n            const action = RequestAction['" + getName(modelName) + "'](req)\n            if (Object.prototype.toString.call(extra)) {\n                action.payload = { ...action.payload, ...extra }\n            }\n            return dispatchAction(action)\n        }";
    })
        .join(',\n\n') + "\n    };\n    export default request;\n    ";
}
exports.createReduxFetchStr = createReduxFetchStr;
/** 生成 useRap.ts */
function createUseRapStr(interfaces) {
    return "\n    /**\n     * \u672C\u6587\u4EF6\u7531 Rapper \u4ECE Rap \u4E2D\u81EA\u52A8\u751F\u6210\uFF0C\u8BF7\u52FF\u4FEE\u6539\n     */\n    import { useState, useEffect } from 'react';\n    import { useSelector } from 'react-redux';\n    import { ModelItf } from './model';\n    import { RAP_STATE_KEY, dispatchAction, RAP_REDUX_CLEAR_STORE } from '@ali/rapper-redux';\n\n    /** \u6DF1\u6BD4\u8F83 */\n    function looseEqual(newData: any, oldData: any): boolean {\n        const newType = Object.prototype.toString.call(newData)\n        const oldType = Object.prototype.toString.call(oldData)\n    \n        if (newType !== oldType) {\n            return false\n        }\n    \n        if (newType === '[object Object]' || newType === '[object Array]') {\n            for (const key in newData) {\n                if (!looseEqual(newData[key], oldData[key])) {\n                    return false\n                }\n            }\n            for (const key in oldData) {\n                if (!looseEqual(newData[key], oldData[key])) {\n                    return false\n                }\n            }\n        } else if (newData !== oldData) {\n            return false\n        }\n    \n        return true\n    }\n\n    interface IDefaultItem {\n        request: any\n        response: any\n    }\n    interface IFilter {\n        request?: any\n    }\n    /** \u6839\u636E\u8BF7\u6C42\u53C2\u6570\u7B5B\u9009\uFF0C\u6682\u65F6\u53EA\u652F\u6301 request */\n    function paramsFilter(item: IDefaultItem, filter?: IFilter) {\n        if (filter && filter.request) {\n            if (Object.prototype.toString.call(filter.request) === '[object Object]') {\n                const reqResult = Object.keys(filter.request).every((key: keyof typeof filter.request): boolean => {\n                    return item.request[key] === filter.request[key]\n                })\n                if (!reqResult) {\n                    return false\n                }\n            } else {\n                return false\n            }\n        }\n        return true\n    }\n    /** \u6839\u636Efilter\u51FD\u6570\u81EA\u5B9A\u4E49\u7B5B\u9009 */\n    function functionFilter(item: IDefaultItem, filter: any) {\n        if (filter !== undefined) {\n            if (typeof filter === 'function') {\n                return filter(item)\n            } else {\n                return false\n            }\n        }\n        return true\n    }\n\n    interface IState {\n        " + constant_1.RAP_STATE_KEY + ": any\n        [key: string]: any\n    }\n\n    const useAPI = {\n        " + interfaces
        .map(function (_a) {
        var modelName = _a.modelName, name = _a.name, repositoryId = _a.repositoryId, moduleId = _a.moduleId, id = _a.id;
        return "\n        /**\n         * \u63A5\u53E3\u540D\uFF1A" + name + "\n         * Rap \u5730\u5740: http://rap2.alibaba-inc.com/repository/editor?id=" + repositoryId + "&mod=" + moduleId + "&itf=" + id + "\n         */\n        /* tslint:disable */\n        '" + modelName + "': function useData(\n            filter?: { request?: ModelItf['" + modelName + "']['Req'] } | { (\n                request: ModelItf['" + modelName + "']['Req'],\n                response: ModelItf['" + modelName + "']['Res']\n            ): boolean }\n        ): [ModelItf['" + modelName + "']['Res'], boolean] {\n            const reduxData = useSelector((state: IState) => {\n                return (state[RAP_STATE_KEY] && state[RAP_STATE_KEY]['" + modelName + "']) || []\n            })\n            const [filteredData, setFilteredData] = useState({})\n            const [isFetching, setIsFetching] = useState(false)\n\n            interface IItem {\n                request: ModelItf['" + modelName + "']['Req']\n                response: ModelItf['" + modelName + "']['Res']\n            }\n            useEffect(() => {\n                let resultArr = []\n                if (filter) {\n                    const func = typeof filter === 'function' ? functionFilter : paramsFilter\n                    resultArr = reduxData.filter(\n                        (item: IItem) => func(item, filter)\n                    )\n                } else {\n                    resultArr = reduxData\n                }\n                /** \u8FC7\u6EE4\u51FA\u4E00\u6761\u6700\u65B0\u7684\u7B26\u5408\u6761\u4EF6\u7684\u6570\u636E */\n                const result = resultArr.length ? resultArr.slice(-1)[0] : {}\n\n                if (!looseEqual(result, filteredData)) {\n                    setFilteredData(result.response)\n                    setIsFetching(result.isFetching)\n                }\n            }, [reduxData, filter])\n\n            return [filteredData, isFetching]\n        }";
    })
        .join(',\n\n') + "\n    }\n\n    const useAPIAll = {\n        " + interfaces
        .map(function (_a) {
        var modelName = _a.modelName, name = _a.name, repositoryId = _a.repositoryId, moduleId = _a.moduleId, id = _a.id;
        return "\n        /**\n         * \u63A5\u53E3\u540D\uFF1A" + name + "\n         * Rap \u5730\u5740: http://rap2.alibaba-inc.com/repository/editor?id=" + repositoryId + "&mod=" + moduleId + "&itf=" + id + "\n         */\n        /* tslint:disable */\n        '" + modelName + "': function useData(): ModelItf['" + modelName + "']['Res'][] {\n            return useSelector((state: IState) => {\n                const selectedState = (state[RAP_STATE_KEY] && state[RAP_STATE_KEY]['" + modelName + "']) || []\n                return selectedState\n            })\n        }";
    })
        .join(',\n\n') + "\n    }\n\n    /** \u91CD\u7F6E\u63A5\u53E3\u6570\u636E */\n    const clearAPI = {\n        " + interfaces
        .map(function (_a) {
        var modelName = _a.modelName, name = _a.name, repositoryId = _a.repositoryId, moduleId = _a.moduleId, id = _a.id;
        return "\n        /**\n         * \u63A5\u53E3\u540D\uFF1A" + name + "\n         * Rap \u5730\u5740: http://rap2.alibaba-inc.com/repository/editor?id=" + repositoryId + "&mod=" + moduleId + "&itf=" + id + "\n         */\n        '" + modelName + "': (): void => {\n            dispatchAction({\n                type: RAP_REDUX_CLEAR_STORE, \n                payload: {\n                    ['" + modelName + "']: undefined,\n                }\n            })\n        }";
    })
        .join(',\n\n') + "\n    }\n\n    export { useAPI, useAPIAll, clearAPI };\n    ";
}
exports.createUseRapStr = createUseRapStr;
