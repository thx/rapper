"use strict";
exports.__esModule = true;
var createApi = require("./api");
var path_1 = require("path");
createApi({
    projectId: 2025,
    folder: path_1.resolve(__dirname, '../api'),
    requestFactory: function (itf, ReqType, ResType) {
        return "\n    import BaseManager = require('mxext/mmanager');\n    import BaseModel = require('app/models/basemodel');\n    const Manager = BaseManager.create(BaseModel);\n    Manager.registerModels([{\n      name: 'request',\n      url: '" + itf.url + "',\n      type: '" + itf.method + "'\n    }])\n    function request(req: " + ReqType + ", alertError: boolean = true): Promise<" + ResType + "['data']> {\n      return new Promise<" + ResType + "['data']>((resolve, reject) => {\n        Manager.fetchOne({\n          name: 'request',\n          " + (itf.method === 'GET' ? 'urlParams' : 'postParams') + ": req,\n        },(err, model) => {\n          if(err) {\n            alertError && alert(err.msg);\n            return reject(err);\n          }\n          resolve(model.get('data'));\n        })\n      });\n    }\n    export default request;\n    ";
    },
    urlMapper: function (url) { return url.replace('https://brandsearch.taobao.com', 'brandsearch'); }
})
    .then(function () {
    console.log('success');
})["catch"](function (err) {
    console.log(err);
});
