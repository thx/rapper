"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var json_schema_to_typescript_1 = require("json-schema-to-typescript");
var JSON5 = require("json5");
var _ = require("lodash");
function inferArrayType(p) {
    // 当 rule 为 +1 时 mockjs 从属性值 array 中顺序选取 1 个元素，作为最终值。
    // 当 rule 为 1 时 mockjs 从属性值 array 中随机选取 1 个元素，作为最终值。
    // 这时候这个属性的类型并非 array，而是 array 子元素的类型
    // 子元素的类型可以从 value 中推断出来
    var rule = p.rule && p.rule.trim() || '';
    if (['1', '+1'].includes(rule) && p.value != null) {
        try {
            var arr = JSON5.parse(p.value);
            return _.chain(arr).map(function (e) { return typeof e; }).uniq().value();
        }
        catch (error) {
            return ['string', 'number', 'boolean', 'object'];
        }
    }
    return 'array';
}
var removeComment = function (str) { return str.replace(/\/\*|\*\//g, ''); };
function interfaceToJSONSchema(itf, scope, additionalProperties) {
    var properties = itf.properties.filter(function (p) { return p.scope === scope; });
    function findChildren(parentId) {
        return _.chain(properties)
            .filter(function (p) { return p.parentId === parentId; })
            .map(function (p) {
            var type = p.type.toLowerCase().replace(/regexp|function/, 'string');
            var children = findChildren(p.id);
            var common = {};
            if (p.description)
                common.description = removeComment(p.description);
            if (['string', 'number', 'integer', 'boolean', 'null'].includes(type)) {
                return [
                    p.name,
                    __assign({ type: type }, common)
                ];
            }
            else if (type === 'object') {
                return [
                    p.name,
                    __assign({ type: type, properties: children, additionalProperties: additionalProperties }, common)
                ];
            }
            else if (type === 'array') {
                var inferedType = inferArrayType(p);
                if (typeof inferedType === 'string' && inferedType === 'array') {
                    return [
                        p.name,
                        __assign({ type: type, items: {
                                type: 'object',
                                properties: children,
                                additionalProperties: additionalProperties
                            } }, common)
                    ];
                }
                else {
                    return [
                        p.name,
                        __assign({ type: inferedType }, common)
                    ];
                }
            }
            else {
                throw "type: " + type + "\n          parentID: " + parentId + "\n          itf.url: " + itf.url + "\n          " + JSON.stringify(children);
            }
        })
            .fromPairs()
            .value();
    }
    var propertyChildren = findChildren(-1);
    if (_.isEmpty(properties)) {
        return {
            type: 'object',
            additionalProperties: additionalProperties
        };
    }
    else {
        return {
            type: 'object',
            properties: propertyChildren,
            additionalProperties: additionalProperties
        };
    }
}
function convert(itf, additionalProperties) {
    var reqJSONSchema = interfaceToJSONSchema(itf, 'request', additionalProperties);
    var resJSONSchema = interfaceToJSONSchema(itf, 'response', additionalProperties);
    var options = __assign({}, json_schema_to_typescript_1.DEFAULT_OPTIONS, { bannerComment: '' });
    return Promise.all([
        json_schema_to_typescript_1.compile(reqJSONSchema, 'Req', options),
        json_schema_to_typescript_1.compile(resJSONSchema, 'Res', options)
    ]);
}
exports["default"] = convert;
