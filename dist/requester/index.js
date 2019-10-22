"use strict";
exports.__esModule = true;
/** 生成 index.ts */
function createIndexStr(projectId) {
    return '';
}
/** 生成 fetch.ts */
function createFetchStr(interfaces, extr) {
    var projectId = extr.projectId, relModelPath = extr.relModelPath, relBaseFetchPath = extr.relBaseFetchPath;
    return "\n          /**\n           * \u672C\u6587\u4EF6\u7531 Rapper \u4ECE Rap \u4E2D\u81EA\u52A8\u751F\u6210\uFF0C\u8BF7\u52FF\u4FEE\u6539\n           * Rap \u5730\u5740: http://rap2.alibaba-inc.com/repository/editor?id=" + projectId + "\n           */\n          import fetch from '" + relBaseFetchPath + "';\n          import { ModelItf } from '" + relModelPath + "';\n\n          type Extra = Parameters<typeof fetch>[3];\n          const request = {\n            " + interfaces
        .map(function (itf) {
        var modelName = itf.modelName;
        return "\n              /**\n               * \u63A5\u53E3\u540D\uFF1A" + itf.name + "\n               * Rap \u5730\u5740: http://rap2.alibaba-inc.com/repository/editor?id=" + itf.repositoryId + "&mod=" + itf.moduleId + "&itf=" + itf.id + "\n              * @param req \u8BF7\u6C42\u53C2\u6570\n              * @param extra \u8BF7\u6C42\u914D\u7F6E\u9879\n              */\n              '" + modelName + "': (req: ModelItf['" + modelName + "']['Req'], extra: Extra) => {\n                return fetch<ModelItf['" + modelName + "']['Res']>('" + itf.url + "','" + itf.method.toUpperCase() + "', req, extra);\n              }";
    })
        .join(',\n\n') + "\n          };\n          export default request;\n        ";
}
exports["default"] = { createIndexStr: createIndexStr, createFetchStr: createFetchStr };
