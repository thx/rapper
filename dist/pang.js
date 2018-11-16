"use strict";
exports.__esModule = true;
var createApi = require("./api");
var path_1 = require("path");
createApi(2025, path_1.resolve(__dirname, '../api'))
    .then(function () {
    console.log('success');
})["catch"](function (err) {
    console.log(err);
});
