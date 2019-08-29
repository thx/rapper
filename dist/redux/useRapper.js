"use strict";
exports.__esModule = true;
var react_redux_1 = require("react-redux");
function useRapper(key) {
    return react_redux_1.useSelector(function (state) { return state[key]; });
}
exports["default"] = useRapper;
