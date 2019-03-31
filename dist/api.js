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
var convert_1 = require("./convert");
var axios_1 = require("axios");
var _ = require("lodash");
var path = require("path");
var fs = require("fs");
var mkdirp = require("mkdirp");
var formatter_1 = require("json-schema-to-typescript/dist/src/formatter");
var json_schema_to_typescript_1 = require("json-schema-to-typescript");
function formatCode(code) {
    return formatter_1.format(code, json_schema_to_typescript_1.DEFAULT_OPTIONS);
}
function urlToName(url, namePrefix) {
    if (namePrefix === void 0) { namePrefix = ''; }
    url = url.trim();
    return namePrefix + path.basename(url, path.extname(url));
}
function withoutExt(p) {
    return p.replace(/\.[^/.]+$/, '');
}
function relativeImport(from, to) {
    return withoutExt('./' + path.relative(path.dirname(from), to));
}
function urlToPath(folder, url, suffix) {
    if (suffix === void 0) { suffix = ''; }
    var relativePath = url.trim().replace(/^\/+/g, '');
    var newFileName = path.join(path.dirname(relativePath), "" + urlToName(relativePath) + suffix + ".ts");
    return path.resolve(folder, newFileName);
}
function itfToModelName(itf, urlMapper) {
    var url = urlMapper(itf.url.trim());
    return url.split('/').concat([itf.method.toLowerCase()]).join('_');
}
function writeFile(filepath, contents) {
    return new Promise(function (resolve, reject) {
        mkdirp(path.dirname(filepath), function (err) {
            if (err)
                return reject("filepath: " + filepath + ", " + err);
            fs.writeFile(filepath, contents, function (err) {
                if (err)
                    return reject("filepath: " + filepath + ", " + err);
                resolve();
            });
        });
    });
}
function getInterfaces(projectId) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, axios_1["default"]
                    .get("http://rap2api.alibaba-inc.com/repository/get?id=" + projectId)
                    .then(function (response) {
                    var modules = response.data.data.modules;
                    var interfaces = _(modules)
                        .map(function (m) { return m.interfaces; })
                        .flatten()
                        .value();
                    return interfaces;
                })];
        });
    });
}
function createApi(_a) {
    var projectId = _a.projectId, folder = _a.folder, requestFactory = _a.requestFactory, _b = _a.urlMapper, urlMapper = _b === void 0 ? function (s) { return s; } : _b;
    return __awaiter(this, void 0, void 0, function () {
        var _this = this;
        return __generator(this, function (_c) {
            return [2 /*return*/, getInterfaces(projectId).then(function (interfaces) {
                    return Promise.all(interfaces.map(function (itf) { return __awaiter(_this, void 0, void 0, function () {
                        var url, writeItf;
                        return __generator(this, function (_a) {
                            url = urlMapper(itf.url);
                            writeItf = function (_a) {
                                var reqItf = _a[0], resItf = _a[1];
                                var itfFileName = urlToPath(folder, url, '-itf');
                                return Promise.all([
                                    writeFile(itfFileName, formatCode("/**\n              * \u672C\u6587\u4EF6\u7531 Rapper \u4ECE Rap \u4E2D\u81EA\u52A8\u751F\u6210\uFF0C\u8BF7\u52FF\u4FEE\u6539\n              * \u63A5\u53E3\u540D\uFF1A" + itf.name + "\n              * Rap: http://rap2.alibaba-inc.com/repository/editor?id=" + projectId + "&mod=" + itf.moduleId + "&itf=" + itf.id + "\n              */\n            " + reqItf + "\n  \n            " + resItf)),
                                    writeFile(urlToPath(folder, url), formatCode("/**\n              * \u672C\u6587\u4EF6\u7531 Rapper \u4ECE Rap \u4E2D\u81EA\u52A8\u751F\u6210\uFF0C\u8BF7\u52FF\u4FEE\u6539\n              * \u63A5\u53E3\u540D\uFF1A" + itf.name + "\n              * Rap: http://rap2.alibaba-inc.com/repository/editor?id=" + projectId + "&mod=" + itf.moduleId + "&itf=" + itf.id + "\n              */\n              import { Req, Res } from './" + path.basename(itfFileName, path.extname(itfFileName)) + "';\n              /* \u81EA\u5B9A\u4E49\u8BF7\u6C42\u4EE3\u7801\u5F00\u59CB */\n              " + requestFactory(itf, 'Req', 'Res') + "\n              /* \u81EA\u5B9A\u4E49\u8BF7\u6C42\u4EE3\u7801\u7ED3\u675F */\n              "))
                                ]);
                            };
                            return [2 /*return*/, convert_1["default"](itf)
                                    .then(writeItf)["catch"](function (err) { return url + "+" + err; })];
                        });
                    }); }));
                })];
        });
    });
}
exports.createApi = createApi;
function createModel(_a) {
    var projectId = _a.projectId, modelPath = _a.modelPath, requesterPath = _a.requesterPath, baseFetchPath = _a.baseFetchPath, _b = _a.urlMapper, urlMapper = _b === void 0 ? function (t) { return t; } : _b;
    return __awaiter(this, void 0, void 0, function () {
        var interfaces, itfStrs, modelItf, relModelPath, relBaseFetchPath, fetcher;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0: return [4 /*yield*/, getInterfaces(projectId)];
                case 1:
                    interfaces = _c.sent();
                    return [4 /*yield*/, Promise.all(interfaces.map(function (itf) {
                            return convert_1["default"](itf).then(function (_a) {
                                var reqItf = _a[0], resItf = _a[1];
                                return "\n        /**\n         * \u63A5\u53E3\u540D\uFF1A" + itf.name + "\n         * Rap \u5730\u5740: http://rap2.alibaba-inc.com/repository/editor?id=" + projectId + "&mod=" + itf.moduleId + "&itf=" + itf.id + "\n         */\n        export namespace " + itfToModelName(itf, urlMapper) + " {\n          " + reqItf + "\n\n          " + resItf + "\n        }\n      ";
                            });
                        }))];
                case 2:
                    itfStrs = _c.sent();
                    modelItf = formatCode("\n    /**\n     * \u672C\u6587\u4EF6\u7531 Rapper \u4ECE Rap \u4E2D\u81EA\u52A8\u751F\u6210\uFF0C\u8BF7\u52FF\u4FEE\u6539\n     * Rap \u5730\u5740: http://rap2.alibaba-inc.com/repository/editor?id=" + projectId + "\n     */\n    export namespace ModelItf {\n      " + itfStrs.join('\n\n') + "\n    };\n  ");
                    if (requesterPath) {
                        relModelPath = relativeImport(requesterPath, modelPath);
                        relBaseFetchPath = relativeImport(requesterPath, baseFetchPath);
                        fetcher = formatCode("\n    /**\n     * \u672C\u6587\u4EF6\u7531 Rapper \u4ECE Rap \u4E2D\u81EA\u52A8\u751F\u6210\uFF0C\u8BF7\u52FF\u4FEE\u6539\n     * Rap \u5730\u5740: http://rap2.alibaba-inc.com/repository/editor?id=" + projectId + "\n     */\n    import fetch from '" + relBaseFetchPath + "';\n    import { ModelItf } from '" + relModelPath + "';\n    const request = {\n      " + interfaces
                            .map(function (itf) {
                            var modelName = itfToModelName(itf, urlMapper);
                            return "\n        '" + modelName + "': (req: ModelItf." + modelName + ".Req | object = {}): Promise<ModelItf." + modelName + ".Res> => {\n          return fetch('" + itf.url + "', req) as Promise<ModelItf." + modelName + ".Res>;\n        }";
                        })
                            .join(',\n\n') + "\n    };\n    export default request;\n  ");
                        return [2 /*return*/, Promise.all([
                                writeFile(modelPath, modelItf),
                                writeFile(requesterPath, fetcher)
                            ])];
                    }
                    else {
                        return [2 /*return*/, writeFile(modelPath, modelItf)];
                    }
                    return [2 /*return*/];
            }
        });
    });
}
exports.createModel = createModel;
