"use strict";
exports.__esModule = true;
var createModel_1 = require("./createModel");
exports.createModel = createModel_1["default"];
/** redux */
var rapEnhancer_1 = require("./redux/rapEnhancer");
exports.rapEnhancer = rapEnhancer_1.rapEnhancer;
exports.dispatchAction = rapEnhancer_1.dispatchAction;
var constant_1 = require("./redux/constant");
exports.RAP_STATE_KEY = constant_1.RAP_STATE_KEY;
exports.RAP_REDUX_CLEAR_STORE = constant_1.RAP_REDUX_CLEAR_STORE;
