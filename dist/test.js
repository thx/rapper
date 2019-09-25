"use strict";
exports.__esModule = true;
var index_1 = require("./index");
var path_1 = require("path");
index_1.createModel({
    /** rap项目id */
    projectId: 3564,
    baseFetchPath: path_1.resolve(__dirname, './basefetch.ts'),
    additionalProperties: false,
    useCommonJsModule: true,
    optionalExtra: false,
    /** 输出文件的目录，默认是 ./model */
    outputPath: path_1.resolve(__dirname, '../test_data/model'),
    /** rap地址，默认是 http://rap2api.taobao.org */
    rapUrl: 'https://rap2api.alibaba-inc.com',
    /** 服务端api地址，默认是根目录相对路径 */
    serverAPI: 'https://rap2api.alibaba-inc.com/app/mock/3283',
    type: 'redux',
    codeStyle: {
        /** 默认单引号 */
        singleQuote: true
    }
});
// .then(() => {
//     console.log('rapper:generate model success')
// })
// .catch(err => {
//     console.log('rapper:generate model failed', err)
// })
