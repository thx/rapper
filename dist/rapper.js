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
var chalk_1 = require("chalk");
var fs = require("fs");
var formatter_1 = require("json-schema-to-typescript/dist/src/formatter");
var json_schema_to_typescript_1 = require("json-schema-to-typescript");
var types_1 = require("./types");
var common_1 = require("./core/common");
var requester_1 = require("./requester");
var redux_1 = require("./redux");
var utils_1 = require("./utils");
var base_fetch_1 = require("./core/base-fetch");
var runtime_1 = require("./redux/runtime");
var types_2 = require("./redux/types");
var tools_1 = require("./core/tools");
function default_1(_a) {
    var type = _a.type, projectId = _a.projectId, _b = _a.rapUrl, rapUrl = _b === void 0 ? 'http://rap2.taobao.org' : _b, _c = _a.rapperPath, rapperPath = _c === void 0 ? './rapper' : _c, _d = _a.urlMapper, urlMapper = _d === void 0 ? function (t) { return t; } : _d, codeStyle = _a.codeStyle;
    return __awaiter(this, void 0, void 0, function () {
        var outputFiles, interfaces, e_1, Creator, modelStr;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    /** 参数校验 */
                    if (!type) {
                        return [2 /*return*/, new Promise(function () { return console.log(chalk_1["default"].red('rapper: 请配置 type 参数')); })];
                    }
                    else if (!['requester', 'redux'].includes(type)) {
                        return [2 /*return*/, new Promise(function () { return console.log(chalk_1["default"].red('rapper: type 参数配置错误，请重新配置')); })];
                    }
                    if (!projectId) {
                        return [2 /*return*/, new Promise(function () { return console.log(chalk_1["default"].red('rapper: 请配置 projectId 参数')); })];
                    }
                    if (codeStyle && typeof codeStyle === 'object') {
                        json_schema_to_typescript_1.DEFAULT_OPTIONS.style = __assign({}, json_schema_to_typescript_1.DEFAULT_OPTIONS.style, codeStyle);
                    }
                    json_schema_to_typescript_1.DEFAULT_OPTIONS.style = __assign({}, json_schema_to_typescript_1.DEFAULT_OPTIONS.style, { singleQuote: true, semi: false, trailingComma: types_1.TRAILING_COMMA.ES5 });
                    if (!rapperPath) {
                        return [2 /*return*/, new Promise(function () { return console.log(chalk_1["default"].red('rapper: rapperPath 配置失败，请修改')); })];
                    }
                    else {
                        rapperPath = rapperPath.replace(/\/$/, '');
                    }
                    outputFiles = [];
                    interfaces = [];
                    _e.label = 1;
                case 1:
                    _e.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, common_1.getInterfaces(rapUrl, projectId)];
                case 2:
                    interfaces = _e.sent();
                    return [3 /*break*/, 4];
                case 3:
                    e_1 = _e.sent();
                    return [2 /*return*/, new Promise(function () { return console.log(chalk_1["default"].red("rapper: \u540C\u6B65 rap \u63A5\u53E3\u5931\u8D25\uFF0C" + e_1)); })];
                case 4:
                    if (!(Array.isArray(interfaces) && interfaces.length)) {
                        return [2 /*return*/, new Promise(function () { return console.log(chalk_1["default"].yellow('rapper: 没有课同步的 rap 接口')); })];
                    }
                    interfaces = tools_1.uniqueItfs(tools_1.getIntfWithModelName(interfaces, urlMapper));
                    Creator = {};
                    switch (type) {
                        case 'requester':
                            Creator = requester_1["default"];
                            break;
                        case 'redux':
                            Creator = redux_1["default"];
                            break;
                        default:
                            Creator = {};
                    }
                    /** 生成 index.ts */
                    Creator.createIndexStr && outputFiles.push({
                        path: rapperPath + "/index.ts",
                        content: formatter_1.format(Creator.createIndexStr(projectId), json_schema_to_typescript_1.DEFAULT_OPTIONS)
                    });
                    return [4 /*yield*/, common_1.createModel(interfaces, { projectId: projectId })];
                case 5:
                    modelStr = _e.sent();
                    outputFiles.push({
                        path: rapperPath + "/model.ts",
                        content: formatter_1.format(modelStr, json_schema_to_typescript_1.DEFAULT_OPTIONS)
                    });
                    /** 生成 request.ts */
                    Creator.createRequestStr && outputFiles.push({
                        path: rapperPath + "/request.ts",
                        content: formatter_1.format(Creator.createRequestStr(interfaces, { projectId: projectId }), json_schema_to_typescript_1.DEFAULT_OPTIONS)
                    });
                    /** 生成 base-fetch.ts */
                    if (!fs.existsSync(rapperPath + "/base-fetch.ts")) {
                        outputFiles.push({
                            path: rapperPath + "/base-fetch.ts",
                            content: formatter_1.format(base_fetch_1["default"], json_schema_to_typescript_1.DEFAULT_OPTIONS)
                        });
                    }
                    /** 生成 redux runtime.ts */
                    if (type === 'redux') {
                        outputFiles.push({
                            path: rapperPath + "/runtime.ts",
                            content: formatter_1.format(runtime_1["default"], json_schema_to_typescript_1.DEFAULT_OPTIONS)
                        });
                        outputFiles.push({
                            path: rapperPath + "/types.ts",
                            content: formatter_1.format(types_2["default"], json_schema_to_typescript_1.DEFAULT_OPTIONS)
                        });
                    }
                    return [2 /*return*/, Promise.all(outputFiles.map(function (_a) {
                            var path = _a.path, content = _a.content;
                            return utils_1.writeFile(path, content);
                        }))
                            .then(function () {
                            console.log(chalk_1["default"].green("rapper: \u540C\u6B65\u6210\u529F\uFF01\u5171\u540C\u6B65:" + interfaces.length + " \u4E2A\u63A5\u53E3"));
                        })["catch"](function (err) {
                            console.log(chalk_1["default"].red(err));
                        })];
            }
        });
    });
}
exports["default"] = default_1;
