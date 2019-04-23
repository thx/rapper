"use strict";
exports.__esModule = true;
var api_1 = require("./api");
var path_1 = require("path");
// createApi({
//   projectId: 2025,
//   folder: resolve(__dirname, '../test_data/api'),
//   requestFactory: (itf, ReqType, ResType) => {
//     return `
//     import BaseManager = require('mxext/mmanager');
//     import BaseModel = require('app/models/basemodel');
//     const Manager = BaseManager.create(BaseModel);
//     Manager.registerModels([{
//       name: 'request',
//       url: '${itf.url}',
//       type: '${itf.method}'
//     }])
//     function request(req: ${ReqType}, alertError: boolean = true): Promise<${ResType}['data']> {
//       return new Promise<${ResType}['data']>((resolve, reject) => {
//         Manager.fetchOne({
//           name: 'request',
//           ${itf.method === 'GET' ? 'urlParams' : 'postParams'}: req,
//         },(err, model) => {
//           if(err) {
//             alertError && alert(err.msg);
//             return reject(err);
//           }
//           resolve(model.get('data'));
//         })
//       });
//     }
//     export default request;
//     `;
//   },
//   urlMapper: url => url.replace('https://brandsearch.taobao.com', 'brandsearch')
// })
// .then(() => {
//   console.log('rapper:generate api success');
// })
// .catch(err => {
//   console.log('rapper:generate api failed', err);
// });
api_1.createModel({
    projectId: 2428,
    // projectId: 3014, // 示源 / 官方运营工作台
    // projectId: 2025,
    modelPath: path_1.resolve(__dirname, '../test_data/model/model.ts'),
    requesterPath: path_1.resolve(__dirname, '../test_data/model/fetch.ts'),
    baseFetchPath: path_1.resolve(__dirname, './basefetch.ts'),
    additionalProperties: false,
    useCommonJsModule: true,
    optionalExtra: false
    // urlMapper: url =>
    // parseUrl(url)
    //   .pathname.replace(/^\//, '')
    //   .replace(/\.json|\.htm$/, ''),
    // urlMapper: url => url.replace('https://brandsearch.taobao.com', 'brandsearch')
})
    .then(function () {
    console.log('rapper:generate model success');
})["catch"](function (err) {
    console.log('rapper:generate model failed', err);
});
