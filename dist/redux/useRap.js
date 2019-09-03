"use strict";
exports.__esModule = true;
var react_redux_1 = require("react-redux");
var constant_1 = require("./constant");
function useRap(modelName) {
    return react_redux_1.useSelector(function (state) { return state[constant_1.rapperStateKey][modelName]; });
}
exports["default"] = useRap;
