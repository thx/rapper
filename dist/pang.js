"use strict";
exports.__esModule = true;
var createApi = require("./api");
var path_1 = require("path");
createApi({
    projectId: 2025,
    folder: path_1.resolve(__dirname, '../api'),
    requestFactory: function () {
        return "\n  import axios, { AxiosRequestConfig } from 'axios';\n  function request(req: Req, cfg?: AxiosRequestConfig): Promise<Res> {\n    return new Promise<Res>((resolve, reject) => {\n      axios({\n        url,\n        method,\n        ...cfg\n      })\n        .then(res => {\n          const data: Res = res.data;\n          resolve(data);\n        })\n        .catch(reject);\n    });\n  }\n  export default request;\n  ";
    },
    urlMapper: function (url) { return url.replace('https://brandsearch.taobao.com', 'brandsearch'); }
})
    .then(function () {
    console.log('success');
})["catch"](function (err) {
    console.log(err);
});
