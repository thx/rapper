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
var _ = require("lodash");
function rapSchema2JSONSchema(rapSchema) {
    if (!rapSchema.properties) {
        return {
            type: rapSchema.type
        };
    }
    return {
        type: rapSchema.type,
        properties: _(rapSchema.properties)
            .map(function (p) { return [p.name, rapSchema2JSONSchema(p)]; })
            .fromPairs()
            .value()
    };
}
function interfaceToJSONSchema(itf, scope) {
    var properties = itf.properties.filter(function (p) { return p.scope === scope; });
    function findChildren(parentId) {
        return _.chain(properties)
            .filter(function (p) { return p.parentId === parentId; })
            .map(function (p) {
            var type = p.type.toLowerCase().replace(/regexp|function/, 'string');
            var children = findChildren(p.id);
            var common = {};
            if (p.description)
                common.description = p.description;
            if (['string', 'number', 'integer', 'boolean', 'null'].includes(type)) {
                return [
                    p.name,
                    __assign({ type: type }, common)
                ];
            }
            else if (type === 'object') {
                return [
                    p.name,
                    __assign({ type: type, properties: children }, common)
                ];
            }
            else if (type === 'array') {
                return [
                    p.name,
                    __assign({ type: type, items: { type: 'object', properties: children } }, common)
                ];
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
            type: 'object'
        };
    }
    else {
        return {
            type: 'object',
            properties: propertyChildren
        };
    }
}
function convert(itf) {
    var reqJSONSchema = interfaceToJSONSchema(itf, 'request');
    var resJSONSchema = interfaceToJSONSchema(itf, 'response');
    var options = __assign({}, json_schema_to_typescript_1.DEFAULT_OPTIONS, { bannerComment: '' });
    return Promise.all([
        json_schema_to_typescript_1.compile(reqJSONSchema, 'Req', options),
        json_schema_to_typescript_1.compile(resJSONSchema, 'Res', options)
    ]);
}
exports["default"] = convert;
