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
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
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
var axios_1 = require("axios");
var _ = require("lodash");
var chalk_1 = require("chalk");
/** 从rap查询所有接口数据 */
function getInterfaces(rapUrl, projectId) {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, modules, collaborators, interfaces, collaboratorsInterfaces;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1["default"].get(rapUrl + "/repository/get?id=" + projectId)];
                case 1:
                    response = _a.sent();
                    data = response.data.data;
                    modules = data.modules;
                    collaborators = data.collaborators;
                    interfaces = _(modules)
                        .map(function (m) { return m.interfaces; })
                        .flatten()
                        .value();
                    if (!collaborators.length) return [3 /*break*/, 3];
                    return [4 /*yield*/, Promise.all(collaborators.map(function (e) { return getInterfaces(rapUrl, e.id); }))];
                case 2:
                    collaboratorsInterfaces = _a.sent();
                    interfaces = interfaces.concat(collaboratorsInterfaces.flat());
                    _a.label = 3;
                case 3: return [2 /*return*/, interfaces];
            }
        });
    });
}
exports.getInterfaces = getInterfaces;
/** 给接口增加 modelName */
function getIntfWithModelName(intfs, urlMapper, type) {
    if (urlMapper === void 0) { urlMapper = function (t) { return t; }; }
    return intfs.map(function (itf) { return (__assign(__assign({}, itf), { modelName: rap2name(itf, urlMapper, type) })); });
}
exports.getIntfWithModelName = getIntfWithModelName;
/**
 * 转换rap接口名称
 * 比如 magix 将 / 转换成 _ ，RESTful接口，清除占位符
 * 参数 noTransform 用来配置是否 将 / 转换成 _ ，默认转换
 */
function rap2name(itf, urlMapper, type) {
    if (urlMapper === void 0) { urlMapper = function (t) { return t; }; }
    // copy from http://gitlab.alibaba-inc.com/thx/magix-cli/blob/master/util/rap.js
    var method = itf.method, url = itf.url, projectId = itf.repositoryId, id = itf.id;
    var apiUrl = urlMapper(url);
    var regExp = /^(?:https?:\/\/[^\/]+)?(\/?.+?\/?)(?:\.[^./]+)?$/;
    var regExpExec = regExp.exec(apiUrl);
    if (!regExpExec) {
        console.log(chalk_1["default"].red("\n  \u2718 \u60A8\u7684rap\u63A5\u53E3url\u8BBE\u7F6E\u683C\u5F0F\u4E0D\u6B63\u786E\uFF0C\u53C2\u8003\u683C\u5F0F\uFF1A/api/test.json (\u63A5\u53E3url:" + apiUrl + ", \u9879\u76EEid:" + projectId + ", \u63A5\u53E3id:" + id + ")\n"));
        return;
    }
    var urlSplit = regExpExec[1].split('/');
    //接口地址为RESTful的，清除占位符
    //api/:id/get -> api//get
    //api/bid[0-9]{4}/get -> api//get
    urlSplit.forEach(function (item, i) {
        if (/\:id/.test(item)) {
            urlSplit[i] = '$id';
        }
        else if (/[\[\]\{\}]/.test(item)) {
            urlSplit[i] = '$regx';
        }
    });
    //只去除第一个为空的值，最后一个为空保留
    //有可能情况是接口 /api/login 以及 /api/login/ 需要同时存在
    if (urlSplit[0].trim() === '') {
        urlSplit.shift();
    }
    var modelName = '';
    if (type === 'default') {
        urlSplit.push(method.toLocaleLowerCase());
        modelName = urlSplit.join('_');
    }
    else {
        urlSplit.unshift(method.toLocaleUpperCase());
        modelName = urlSplit.join('/');
    }
    return modelName;
}
exports.rap2name = rap2name;
/** 接口去重 */
function uniqueItfs(itfs) {
    var itfMap = new Map();
    itfs.forEach(function (itf) {
        var name = itf.modelName;
        if (itfMap.has(name)) {
            itfMap.get(name).push(itf);
        }
        else {
            itfMap.set(name, [itf]);
        }
    });
    var newItfs = [];
    itfMap.forEach(function (dupItfs, name) {
        dupItfs.sort(
        // 后更改的在前面
        function (a, b) { return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime(); });
        newItfs.push(dupItfs[0]);
        if (dupItfs.length > 1) {
            console.log(chalk_1["default"].yellow('发现重复接口，修改时间最晚的被采纳：\n') +
                dupItfs
                    .map(function (itf, index) {
                    var str = itf.name + ": http://rap2.alibaba-inc.com/repository/editor?id=" + itf.repositoryId + "&mod=" + itf.moduleId + "&itf=" + itf.id;
                    return index === 0 ? chalk_1["default"].green(str) : chalk_1["default"].gray(str);
                })
                    .join('\n') +
                '\n');
        }
    });
    return newItfs;
}
exports.uniqueItfs = uniqueItfs;
/**
 * search 参数转换，比如 { a: 1, b: 2, c: undefined } 转换成 "a=1&b=2"
 * 会自动删除 undefined
 */
function locationStringify(obj) {
    if (obj === void 0) { obj = {}; }
    return Object.entries(obj).reduce(function (str, _a) {
        var key = _a[0], value = _a[1];
        if (value === undefined) {
            return str;
        }
        str = str && str + "&";
        return "" + str + key + "=" + value;
    }, '');
}
exports.locationStringify = locationStringify;
/** 深比较 */
function looseEqual(newData, oldData) {
    var newType = Object.prototype.toString.call(newData);
    var oldType = Object.prototype.toString.call(oldData);
    if (newType !== oldType) {
        return false;
    }
    if (newType === '[object Object]' || newType === '[object Array]') {
        for (var key in newData) {
            if (!looseEqual(newData[key], oldData[key])) {
                return false;
            }
        }
        for (var key in oldData) {
            if (!looseEqual(newData[key], oldData[key])) {
                return false;
            }
        }
    }
    else if (newData !== oldData) {
        return false;
    }
    return true;
}
exports.looseEqual = looseEqual;
/** 根据请求参数筛选，暂时只支持 request */
function paramsFilter(item, filter) {
    if (filter && filter.request) {
        var filterRequest_1 = filter.request; // 这一行是解决 ts2532 报错
        if (Object.prototype.toString.call(filter.request) === '[object Object]') {
            var reqResult = Object.keys(filter.request).every(function (key) {
                return item.request[key] === filterRequest_1[key];
            });
            if (!reqResult) {
                return false;
            }
        }
        else {
            return false;
        }
    }
    return true;
}
exports.paramsFilter = paramsFilter;
/** 根据filter函数自定义筛选 */
function functionFilter(item, filter) {
    if (filter !== undefined) {
        if (typeof filter === 'function') {
            return filter(item);
        }
        else {
            return false;
        }
    }
    return true;
}
exports.functionFilter = functionFilter;
