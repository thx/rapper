"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var _a;
var _this = this;
var common_1 = require("../common");
var constant_1 = require("./constant");
// MC-Todo: 兼容没有/
/** 请求链接 */
var getEndpoint = function (requestPrefix, url) {
    if (!requestPrefix) {
        return url;
    }
    return "" + requestPrefix + url;
};
var sendRequest = function (params) { return __awaiter(_this, void 0, void 0, function () {
    var requestUrl, requestParams, res, retJSON;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                requestUrl = params.endpoint;
                requestParams = {
                    credentials: 'include',
                    method: params.method || 'GET',
                    headers: { 'Content-Type': 'application/json' }
                };
                if (requestParams.method === 'GET') {
                    requestUrl = requestUrl + "?" + common_1.locationStringify(params.params);
                }
                else if (params.params) {
                    requestParams.body = JSON.stringify(params.params);
                }
                return [4 /*yield*/, fetch(requestUrl, requestParams)];
            case 1:
                res = _a.sent();
                retJSON = res.clone() // clone before return
                ;
                // const json = await res.json() // we need json just to check status
                // if (!json.info.ok) {
                //     throw new Error(json.info.message)
                // }
                return [2 /*return*/, retJSON.json()];
        }
    });
}); };
var dispatch = function (action) {
    return new Promise(function () { });
};
function assignData(_a) {
    var oldState = _a.oldState, _b = _a.payload, interfaceKey = _b.interfaceKey, id = _b.id, requestTime = _b.requestTime, reponseTime = _b.reponseTime, _c = _b.request, request = _c === void 0 ? {} : _c, response = _b.response, isFetching = _b.isFetching, maxCacheLength = _a.maxCacheLength;
    var newState = __assign({}, oldState);
    if (typeof maxCacheLength !== 'number' || maxCacheLength < 1) {
        maxCacheLength = 2;
    }
    var data = newState[interfaceKey] || [];
    if (isFetching === true) {
        /** 只存最近 maxCacheLength 个数据 */
        if (maxCacheLength !== Infinity && data.length >= maxCacheLength) {
            data = newState[interfaceKey].slice(data.length - maxCacheLength + 1);
        }
        newState[interfaceKey] = [].concat(data, {
            id: id,
            requestTime: requestTime,
            request: request,
            isFetching: isFetching
        });
    }
    else {
        newState[interfaceKey] = data.map(function (item) { return (item.id === id ? __assign({}, item, { reponseTime: reponseTime, response: response, isFetching: isFetching }) : item); });
    }
    return newState;
}
var rapReducers = (_a = {},
    _a[constant_1.RAP_STATE_KEY] = function (state) {
        if (state === void 0) { state = {}; }
        return state;
    },
    _a);
exports.rapReducers = rapReducers;
/** store enhancer */
function rapEnhancer(config) {
    var _this = this;
    config = config || {};
    var requestPrefix = config.requestPrefix, _a = config.transformRequest, transformRequest = _a === void 0 ? function (data) { return data; } : _a, _b = config.transformResponse, transformResponse = _b === void 0 ? function (data) { return data; } : _b, _c = config.maxCacheLength, maxCacheLength = _c === void 0 ? 2 : _c, fetch = config.fetch;
    var request = typeof fetch === 'function' ? fetch : sendRequest;
    return function (next) { return function (reducers) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var newReducers = function (state, action) {
            var _a, _b;
            if (state) {
                state[constant_1.RAP_STATE_KEY] || (state[constant_1.RAP_STATE_KEY] = {});
            }
            else {
                state = {};
            }
            if (action.hasOwnProperty('type')) {
                if (action.type === constant_1.RAP_REDUX_UPDATE_STORE) {
                    /** 请求成功，更新 store */
                    return __assign({}, state, (_a = {}, _a[constant_1.RAP_STATE_KEY] = assignData({
                        oldState: state[constant_1.RAP_STATE_KEY],
                        maxCacheLength: maxCacheLength,
                        payload: action.payload
                    }), _a));
                }
                else if (action.type === constant_1.RAP_REDUX_CLEAR_STORE) {
                    /** 用户手动清空 */
                    return __assign({}, state, (_b = {}, _b[constant_1.RAP_STATE_KEY] = __assign({}, state[constant_1.RAP_STATE_KEY], action.payload), _b));
                }
            }
            return reducers(state, action);
        };
        var store = next.apply(void 0, [reducers].concat(args));
        store.replaceReducer(newReducers);
        dispatch = function (action) { return __awaiter(_this, void 0, void 0, function () {
            var _a, modelName, endpoint, method, params, cb, _b, REQUEST, SUCCESS, FAILURE, requestTime, newParams, responseData, reponseTime, e_1;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (action.type !== constant_1.RAP_REDUX_REQUEST) {
                            return [2 /*return*/, store.dispatch(action)];
                        }
                        _a = action.payload, modelName = _a.modelName, endpoint = _a.endpoint, method = _a.method, params = _a.params, cb = _a.cb, _b = _a.types, REQUEST = _b[0], SUCCESS = _b[1], FAILURE = _b[2];
                        requestTime = new Date().getTime();
                        store.dispatch({ type: REQUEST });
                        store.dispatch({
                            type: constant_1.RAP_REDUX_UPDATE_STORE,
                            payload: {
                                interfaceKey: modelName,
                                id: requestTime,
                                requestTime: requestTime,
                                request: params,
                                isFetching: true
                            }
                        });
                        _c.label = 1;
                    case 1:
                        _c.trys.push([1, 3, , 4]);
                        newParams = params;
                        if (typeof transformRequest === 'function') {
                            newParams = transformRequest(action.payload);
                        }
                        return [4 /*yield*/, request({
                                endpoint: getEndpoint(requestPrefix, endpoint),
                                method: method,
                                params: newParams
                            })];
                    case 2:
                        responseData = _c.sent();
                        reponseTime = new Date().getTime();
                        cb && cb(responseData);
                        store.dispatch({
                            type: constant_1.RAP_REDUX_UPDATE_STORE,
                            payload: {
                                interfaceKey: modelName,
                                id: requestTime,
                                requestTime: requestTime,
                                reponseTime: reponseTime,
                                request: params,
                                response: transformResponse(responseData),
                                isFetching: false
                            }
                        });
                        store.dispatch({ type: SUCCESS, payload: responseData });
                        return [2 /*return*/, responseData];
                    case 3:
                        e_1 = _c.sent();
                        store.dispatch({ type: FAILURE, payload: e_1 });
                        throw Error(e_1);
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        return __assign({}, store, { dispatch: dispatch });
    }; };
}
exports.rapEnhancer = rapEnhancer;
/** 发送请求 */
function dispatchAction(action) {
    return dispatch(action);
}
exports.dispatchAction = dispatchAction;
