"use strict";
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
function convert(schema, name) {
    var jsonSchema = rapSchema2JSONSchema(JSON.parse(schema));
    return json_schema_to_typescript_1.compile(jsonSchema, name);
}
exports["default"] = convert;
