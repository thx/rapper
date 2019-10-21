"use strict";
exports.__esModule = true;
var RAP_REDUX_REQUEST = '$$_RAP_REDUX_REQUEST';
/** 定义 请求types interface  */
function getRequestTypesInterfaceStr(interfaces) {
    return "\n        export interface IRequestTypes {\n        " + interfaces
        .map(function (_a) {
        var modelName = _a.modelName;
        return "\n                    '" + modelName + "': [\n                        '" + modelName + "_REQUEST',\n                        '" + modelName + "_SUCCESS',\n                        '" + modelName + "_FAILURE',\n                    ]\n                ";
    })
        .join('\n\n') + "\n        }\n    ";
}
/** 定义 请求action interface  */
function getRequestActionInterfaceStr(interfaces) {
    return "\n        export interface IRequestAction {\n        " + interfaces
        .map(function (_a) {
        var modelName = _a.modelName, method = _a.method, url = _a.url;
        return "\n                    '" + modelName + "': (params?: ModelItf['" + modelName + "']['Req']) => {\n                        type: '" + RAP_REDUX_REQUEST + "',\n                        payload: {\n                            modelName: '" + modelName + "'\n                            endpoint: '" + url + "'\n                            method: '" + method + "'\n                            params?: ModelItf['" + modelName + "']['Req']\n                            types: ['" + modelName + "_REQUEST', '" + modelName + "_SUCCESS', '" + modelName + "_FAILURE']\n                        }\n                    },\n                ";
    })
        .join('\n\n') + "\n        }\n    ";
}
/** 定义 请求types */
function getRequestTypesStr(interfaces) {
    return "\n        export const RequestTypes:IRequestTypes = {\n            " + interfaces
        .map(function (_a) {
        var modelName = _a.modelName;
        return "\n                        '" + modelName + "': [\n                            '" + modelName + "_REQUEST',\n                            '" + modelName + "_SUCCESS',\n                            '" + modelName + "_FAILURE',\n                        ],\n                    ";
    })
        .join('\n\n') + "\n        }\n    ";
}
/** 定义 请求action */
function getRequestActionStr(interfaces) {
    return "\n        export const RequestAction:IRequestAction = {\n            " + interfaces
        .map(function (_a) {
        var id = _a.id, repositoryId = _a.repositoryId, moduleId = _a.moduleId, name = _a.name, url = _a.url, modelName = _a.modelName, method = _a.method;
        return "\n                        /**\n                         * \u63A5\u53E3\u540D\uFF1A" + name + "\n                         * Rap \u5730\u5740: http://rap2.alibaba-inc.com/repository/editor?id=" + repositoryId + "&mod=" + moduleId + "&itf=" + id + "\n                         */\n                        '" + modelName + "': (params) => ({\n                            type: '" + RAP_REDUX_REQUEST + "',\n                            payload: {\n                                modelName: '" + modelName + "',\n                                endpoint: '" + url + "',\n                                method: '" + method + "',\n                                params,\n                                types: RequestTypes['" + modelName + "'],\n                            },\n                        }),\n                    ";
    })
        .join('\n\n') + "\n        }\n    ";
}
/** 生成 Action 定义 */
function createActionStr(interfaces) {
    return "\n    /** request interface */\n    type RequestType = " + interfaces.reduce(function (a, _a) {
        var modelName = _a.modelName;
        return a + " | '" + modelName + "'";
    }, '') + "\n\n    /** \u8BF7\u6C42types interface  */\n    " + getRequestTypesInterfaceStr(interfaces) + "\n\n    /** \u8BF7\u6C42action interface  */\n    " + getRequestActionInterfaceStr(interfaces) + "\n\n    /** \u8BF7\u6C42types */\n    " + getRequestTypesStr(interfaces) + "\n\n    /** \u8BF7\u6C42action */\n    " + getRequestActionStr(interfaces) + "\n    ";
}
/** 生成 fetch.ts */
function createRequestStr(interfaces) {
    return "\n    const request = {\n        " + interfaces
        .map(function (_a) {
        var modelName = _a.modelName, name = _a.name, repositoryId = _a.repositoryId, moduleId = _a.moduleId, id = _a.id;
        return "\n        /**\n         * \u63A5\u53E3\u540D\uFF1A" + name + "\n         * Rap \u5730\u5740: http://rap2.alibaba-inc.com/repository/editor?id=" + repositoryId + "&mod=" + moduleId + "&itf=" + id + "\n         * @param req \u8BF7\u6C42\u53C2\u6570\n         */\n        '" + modelName + "': (req?: ModelItf['" + modelName + "']['Req']): Promise<ModelItf['" + modelName + "']['Res']> => {\n            const action = RequestAction['" + modelName + "'](req)\n            return dispatchAction(action)\n        }";
    })
        .join(',\n\n') + "\n    };\n    ";
}
/** 生成 useResponse，useAllResponse */
function createUseRapStr(interfaces) {
    return "\n    /** store\u4E2D\u5B58\u50A8\u7684\u6570\u636E\u7ED3\u6784 */\n    interface IStoreItem {\n        " + interfaces
        .map(function (_a) {
        var modelName = _a.modelName;
        return "\n        '" + modelName + "': {\n            request: ModelItf['" + modelName + "']['Req']\n            response: ModelItf['" + modelName + "']['Res']\n            id: number\n            requestTime: number\n            responseTime: number\n            isFetching: boolean\n        }";
    })
        .join(',\n\n') + "\n    }\n\n    interface IState {\n        [key: string]: any\n    }\n\n    const useResponse = {\n        " + interfaces
        .map(function (_a) {
        var modelName = _a.modelName, name = _a.name, repositoryId = _a.repositoryId, moduleId = _a.moduleId, id = _a.id;
        return "\n        /**\n         * \u63A5\u53E3\u540D\uFF1A" + name + "\n         * Rap \u5730\u5740: http://rap2.alibaba-inc.com/repository/editor?id=" + repositoryId + "&mod=" + moduleId + "&itf=" + id + "\n         */\n        /* tslint:disable */\n        '" + modelName + "': function useData(\n            filter?: { request?: ModelItf['" + modelName + "']['Req'] } | { (\n                storeData: IStoreItem['" + modelName + "']\n            ): boolean }\n        ): [null | ModelItf['" + modelName + "']['Res'], boolean] {\n            const reduxData = useSelector((state: IState) => {\n                return (state[RAP_STATE_KEY] && state[RAP_STATE_KEY]['" + modelName + "']) || []\n            })\n            const initData = reduxData.length ? reduxData.slice(-1)[0] : {}\n            const [filteredData, setFilteredData] = useState(initData.response || undefined)\n            const [isFetching, setIsFetching] = useState(initData.isFetching || false)\n\n            type Req = ModelItf['" + modelName + "']['Req']\n            type ItemType = IStoreItem['" + modelName + "']\n\n            useEffect(() => {\n                let resultArr = []\n                if (filter) {\n                    if (typeof filter === 'function') {\n                        resultArr = reduxData.filter((item: ItemType) => utils.functionFilter<ItemType, typeof filter>(item, filter))\n                    } else {\n                        resultArr = reduxData.filter((item: ItemType) => utils.paramsFilter<Req, ItemType, typeof filter>(item, filter))\n                    }\n                } else {\n                    resultArr = reduxData\n                }\n                /** \u8FC7\u6EE4\u51FA\u4E00\u6761\u6700\u65B0\u7684\u7B26\u5408\u6761\u4EF6\u7684\u6570\u636E */\n                const result = resultArr.length ? resultArr.slice(-1)[0] : {}\n\n                if (!utils.looseEqual(result.response, filteredData)) {\n                    setFilteredData(result.response || undefined)\n                    setIsFetching(result.isFetching || false)\n                }\n            }, [reduxData, filter, filteredData])\n\n            return [filteredData, isFetching]\n        }";
    })
        .join(',\n\n') + "\n    }\n\n    const useAllResponse = {\n        " + interfaces
        .map(function (_a) {
        var modelName = _a.modelName, name = _a.name, repositoryId = _a.repositoryId, moduleId = _a.moduleId, id = _a.id;
        return "\n        /**\n         * \u63A5\u53E3\u540D\uFF1A" + name + "\n         * Rap \u5730\u5740: http://rap2.alibaba-inc.com/repository/editor?id=" + repositoryId + "&mod=" + moduleId + "&itf=" + id + "\n         */\n        /* tslint:disable */\n        '" + modelName + "': function useData(): ModelItf['" + modelName + "']['Res'][] {\n            return useSelector((state: IState) => {\n                const selectedState = (state[RAP_STATE_KEY] && state[RAP_STATE_KEY]['" + modelName + "']) || []\n                return selectedState\n            })\n        }";
    })
        .join(',\n\n') + "\n    }\n\n    /** \u91CD\u7F6E\u63A5\u53E3\u6570\u636E */\n    const clearResponseCache = {\n        " + interfaces
        .map(function (_a) {
        var modelName = _a.modelName, name = _a.name, repositoryId = _a.repositoryId, moduleId = _a.moduleId, id = _a.id;
        return "\n        /**\n         * \u63A5\u53E3\u540D\uFF1A" + name + "\n         * Rap \u5730\u5740: http://rap2.alibaba-inc.com/repository/editor?id=" + repositoryId + "&mod=" + moduleId + "&itf=" + id + "\n         */\n        '" + modelName + "': (): void => {\n            dispatchAction({\n                type: RAP_REDUX_CLEAR_STORE, \n                payload: {\n                    ['" + modelName + "']: undefined,\n                }\n            })\n        }";
    })
        .join(',\n\n') + "\n    }\n    ";
}
/** 生成 index.ts */
function createIndexStr(projectId) {
    return "\n    /**\n     * \u672C\u6587\u4EF6\u7531 Rapper \u4ECE Rap \u4E2D\u81EA\u52A8\u751F\u6210\uFF0C\u8BF7\u52FF\u4FEE\u6539\n     * Rap \u5730\u5740: http://rap2.alibaba-inc.com/repository/editor?id=" + projectId + "\n     */\n\n    import { useAPI, useAPIAll, clearAPICache } from './useRap'\n    import fetch from './fetch'\n    import { requestAction } from './redux'\n    \n    export { useAPI, useAPIAll, clearAPICache, fetch, requestAction };\n    ";
}
exports.createIndexStr = createIndexStr;
/** 生成 fetch.ts */
function createFetchStr(interfaces, _a) {
    var projectId = _a.projectId;
    return "\n    /**\n     * \u672C\u6587\u4EF6\u7531 Rapper \u4ECE Rap \u4E2D\u81EA\u52A8\u751F\u6210\uFF0C\u8BF7\u52FF\u4FEE\u6539\n     * Rap \u5730\u5740: http://rap2.alibaba-inc.com/repository/editor?id=" + projectId + "\n     */\n    import { ModelItf } from './model'\n    import { RAP_STATE_KEY, dispatchAction, RAP_REDUX_CLEAR_STORE, utils } from './runtime'\n    import { useState, useEffect } from 'react'\n    import { useSelector } from 'react-redux'\n\n    " + createActionStr(interfaces) + "\n    " + createRequestStr(interfaces) + "\n    " + createUseRapStr(interfaces) + "\n    ";
}
exports.createFetchStr = createFetchStr;
