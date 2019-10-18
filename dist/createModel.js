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
var chalk_1 = require("chalk");
var formatter_1 = require("json-schema-to-typescript/dist/src/formatter");
var json_schema_to_typescript_1 = require("json-schema-to-typescript");
var types_1 = require("./types");
var index_1 = require("./default/index");
var createRedux_1 = require("./redux/createRedux");
var utils_1 = require("./utils");
var common_1 = require("./common");
function default_1(_a) {
    var projectId = _a.projectId, modelPath = _a.modelPath, requesterPath = _a.requesterPath, baseFetchPath = _a.baseFetchPath, _b = _a.urlMapper, urlMapper = _b === void 0 ? function (t) { return t; } : _b, _c = _a.useCommonJsModule, useCommonJsModule = _c === void 0 ? false : _c, _d = _a.additionalProperties, additionalProperties = _d === void 0 ? false : _d, _e = _a.optionalExtra, optionalExtra = _e === void 0 ? true : _e, _f = _a.rapUrl, rapUrl = _f === void 0 ? 'http://rap2.taobao.org' : _f, _g = _a.outputPath, outputPath = _g === void 0 ? './model' : _g, _h = _a.type, type = _h === void 0 ? 'default' : _h, codeStyle = _a.codeStyle;
    return __awaiter(this, void 0, void 0, function () {
        var outputFiles, interfaces, _j, _k, modelStr, relModelPath, relBaseFetchPath, fetchStr;
        return __generator(this, function (_l) {
            switch (_l.label) {
                case 0:
                    json_schema_to_typescript_1.DEFAULT_OPTIONS.style = __assign(__assign({}, json_schema_to_typescript_1.DEFAULT_OPTIONS.style), { singleQuote: true, semi: false, trailingComma: types_1.TRAILING_COMMA.ES5 });
                    if (codeStyle && typeof codeStyle === 'object') {
                        json_schema_to_typescript_1.DEFAULT_OPTIONS.style = __assign(__assign({}, json_schema_to_typescript_1.DEFAULT_OPTIONS.style), codeStyle);
                    }
                    outputFiles = [];
                    _j = common_1.uniqueItfs;
                    _k = common_1.getIntfWithModelName;
                    return [4 /*yield*/, common_1.getInterfaces(rapUrl, projectId)];
                case 1:
                    interfaces = _j.apply(void 0, [_k.apply(void 0, [_l.sent(), urlMapper, type])]);
                    return [4 /*yield*/, index_1.createModel(interfaces, { projectId: projectId, additionalProperties: additionalProperties })];
                case 2:
                    modelStr = _l.sent();
                    outputFiles.push({
                        path: outputPath ? outputPath + "/model.ts" : modelPath,
                        content: formatter_1.format(modelStr, json_schema_to_typescript_1.DEFAULT_OPTIONS)
                    });
                    if (type === 'redux') {
                        if (!outputPath) {
                            console.log(chalk_1["default"].red('配置文件中 outputPath 不能为空'));
                            return [2 /*return*/];
                        }
                        /** 生成 index.ts */
                        outputFiles.push({
                            path: outputPath + "/index.ts",
                            content: formatter_1.format(createRedux_1.createIndexStr(), json_schema_to_typescript_1.DEFAULT_OPTIONS)
                        });
                        /** 生成 redux.ts */
                        outputFiles.push({
                            path: outputPath + "/redux.ts",
                            content: formatter_1.format(createRedux_1.createReduxStr(interfaces, { projectId: projectId }), json_schema_to_typescript_1.DEFAULT_OPTIONS)
                        });
                        /** 生成 redux 版本的 fetch.ts */
                        outputFiles.push({
                            path: outputPath + "/fetch.ts",
                            content: formatter_1.format(createRedux_1.createReduxFetchStr(projectId, interfaces), json_schema_to_typescript_1.DEFAULT_OPTIONS)
                        });
                        /** 生成 useRap.ts */
                        outputFiles.push({
                            path: outputPath + "/useRap.ts",
                            content: formatter_1.format(createRedux_1.createUseRapStr(interfaces), json_schema_to_typescript_1.DEFAULT_OPTIONS)
                        });
                    }
                    else if (requesterPath) {
                        relModelPath = utils_1.relativeImport(requesterPath, modelPath);
                        relBaseFetchPath = utils_1.relativeImport(requesterPath, baseFetchPath);
                        fetchStr = index_1.createFetch(interfaces, { projectId: projectId, useCommonJsModule: useCommonJsModule, optionalExtra: optionalExtra, relModelPath: relModelPath, relBaseFetchPath: relBaseFetchPath });
                        outputFiles.push({
                            path: requesterPath,
                            content: formatter_1.format(fetchStr, json_schema_to_typescript_1.DEFAULT_OPTIONS)
                        });
                    }
                    return [2 /*return*/, Promise.all(outputFiles.map(function (_a) {
                            var path = _a.path, content = _a.content;
                            return utils_1.writeFile(path, content);
                        }))
                            .then(function () {
                            console.log(chalk_1["default"].green("rapper-redux: model \u751F\u6210\u6210\u529F\uFF01\u5171\u540C\u6B65:" + interfaces.length + " \u4E2A\u63A5\u53E3"));
                        })["catch"](function (err) {
                            console.log(chalk_1["default"].red(err));
                        })];
            }
        });
    });
}
exports["default"] = default_1;
