import { compile } from 'json-schema-to-typescript';
import { JSONSchema4 } from 'json-schema'
import * as _ from 'lodash';

function rapSchema2JSONSchema(rapSchema) : JSONSchema4 {
  if(!rapSchema.properties) {
    return {
      type: rapSchema.type
    }
  }
  return {
    type: rapSchema.type,
    properties: _(rapSchema.properties)
      .map(p => [p.name, rapSchema2JSONSchema(p)])
      .fromPairs()
      .value()
  };
}

export default function convert(schema: string, name: string) : Promise<string> {
  const jsonSchema = rapSchema2JSONSchema(JSON.parse(schema));
  return compile(jsonSchema, name);
}