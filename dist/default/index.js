"use strict";
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
var convert_1 = require("../convert");
function createModel(interfaces, extr) {
    return __awaiter(this, void 0, void 0, function () {
        var projectId, additionalProperties, itfStrs;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    projectId = extr.projectId, additionalProperties = extr.additionalProperties;
                    return [4 /*yield*/, Promise.all(interfaces.map(function (itf) { return __awaiter(_this, void 0, void 0, function () {
                            var _a, reqItf, resItf, error_1;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        _b.trys.push([0, 2, , 3]);
                                        return [4 /*yield*/, convert_1["default"](itf, additionalProperties)];
                                    case 1:
                                        _a = _b.sent(), reqItf = _a[0], resItf = _a[1];
                                        return [2 /*return*/, "\n          /**\n           * \u63A5\u53E3\u540D\uFF1A" + itf.name + "\n           * Rap \u5730\u5740: http://rap2.alibaba-inc.com/repository/editor?id=" + itf.repositoryId + "&mod=" + itf.moduleId + "&itf=" + itf.id + "\n           */\n          '" + itf.modelName + "': {\n            Req: " + reqItf.replace('export interface Req', '') + ";\n            Res: " + resItf.replace('export interface Res', '') + ";\n          }\n        "];
                                    case 2:
                                        error_1 = _b.sent();
                                        throw chalk_1["default"].red("\u63A5\u53E3\uFF1Ahttp://rap2.alibaba-inc.com/repository/editor?id=" + itf.repositoryId + "&mod=" + itf.moduleId + "&itf=" + itf.id + "\n        \u751F\u6210\u51FA\u9519\n        " + error_1);
                                    case 3: return [2 /*return*/];
                                }
                            });
                        }); }))];
                case 1:
                    itfStrs = _a.sent();
                    return [2 /*return*/, "\n        /**\n         * \u672C\u6587\u4EF6\u7531 Rapper \u4ECE Rap \u4E2D\u81EA\u52A8\u751F\u6210\uFF0C\u8BF7\u52FF\u4FEE\u6539\n         * Rap \u5730\u5740: http://rap2.alibaba-inc.com/repository/editor?id=" + projectId + "\n         */\n        export interface ModelItf {\n        " + itfStrs.join('\n\n') + "\n        };\n    "];
            }
        });
    });
}
exports.createModel = createModel;
function createFetch(interfaces, extr) {
    var projectId = extr.projectId, useCommonJsModule = extr.useCommonJsModule, optionalExtra = extr.optionalExtra, relModelPath = extr.relModelPath, relBaseFetchPath = extr.relBaseFetchPath;
    return "\n          /**\n           * \u672C\u6587\u4EF6\u7531 Rapper \u4ECE Rap \u4E2D\u81EA\u52A8\u751F\u6210\uFF0C\u8BF7\u52FF\u4FEE\u6539\n           * Rap \u5730\u5740: http://rap2.alibaba-inc.com/repository/editor?id=" + projectId + "\n           */\n        " + (useCommonJsModule
        ? "\n          import fetch =  require('" + relBaseFetchPath + "');\n          import { ModelItf } from '" + relModelPath + "';\n          "
        : "\n          import fetch from '" + relBaseFetchPath + "';\n          import { ModelItf } from '" + relModelPath + "';\n        ") + "\n          type Extra = Parameters<typeof fetch>[3];\n          const request = {\n            " + interfaces
        .map(function (itf) {
        var modelName = itf.modelName;
        return "\n              /**\n               * \u63A5\u53E3\u540D\uFF1A" + itf.name + "\n               * Rap \u5730\u5740: http://rap2.alibaba-inc.com/repository/editor?id=" + itf.repositoryId + "&mod=" + itf.moduleId + "&itf=" + itf.id + "\n              * @param req \u8BF7\u6C42\u53C2\u6570\n              * @param extra \u8BF7\u6C42\u914D\u7F6E\u9879\n              */\n              '" + modelName + "': (req: ModelItf['" + modelName + "']['Req'], extra" + (optionalExtra ? '?' : '') + ": Extra) => {\n                return fetch<ModelItf['" + modelName + "']['Res']>('" + itf.url + "','" + itf.method.toUpperCase() + "', req, extra);\n              }";
    })
        .join(',\n\n') + "\n          };\n    \n        " + (useCommonJsModule
        ? "\n          export = request;\n          "
        : "\n          export default request;\n          ") + "\n        ";
}
exports.createFetch = createFetch;
