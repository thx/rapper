"use strict";
exports.__esModule = true;
var fetch = function (uri, params) {
    if (params === void 0) { params = {}; }
    var url;
    var promise = window.fetch(url, {
        method: 'POST',
        body: JSON.stringify(params),
        headers: { 'Content-Type': 'application/json' }
    })
        .then(function (res) { return res.json(); })
        .then(function (json) {
        var data = json.data;
        return data;
    })["catch"](function (e) {
        throw e;
    });
    return promise;
};
exports["default"] = fetch;
