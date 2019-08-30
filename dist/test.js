"use strict";
exports.__esModule = true;
var index_1 = require("./index");
var path_1 = require("path");
index_1.createModel({
    projectId: 3564,
    baseFetchPath: path_1.resolve(__dirname, './basefetch.ts'),
    additionalProperties: false,
    useCommonJsModule: true,
    optionalExtra: false,
    type: 'redux',
    outputPath: path_1.resolve(__dirname, '../test_data/model') /** 输出文件的目录 */,
    serverAPI: 'https://rap2api.alibaba-inc.com/app/mock/3283'
})
    .then(function () {
    console.log('rapper:generate model success');
})["catch"](function (err) {
    console.log('rapper:generate model failed', err);
});
