import { compile, Options, DEFAULT_OPTIONS } from 'json-schema-to-typescript';
import { JSONSchema4 } from 'json-schema';
import * as _ from 'lodash';

function rapSchema2JSONSchema(rapSchema): JSONSchema4 {
  if (!rapSchema.properties) {
    return {
      type: rapSchema.type
    };
  }
  return {
    type: rapSchema.type,
    properties: _(rapSchema.properties)
      .map(p => [p.name, rapSchema2JSONSchema(p)])
      .fromPairs()
      .value()
  };
}

type Scope = 'request' | 'response';

function interfaceToJSONSchema(itf, scope: Scope): JSONSchema4 {
  const properties: Array<any> = itf.properties.filter(p => p.scope === scope);
  function findChildren(parentId: number) {
    return _.chain(properties)
      .filter(p => p.parentId === parentId)
      .map(p => {
        const type = p.type.toLowerCase().replace(/regexp|function/, 'string');
        const children = findChildren(p.id);
        const common: { description?: string } = {};
        if (p.description) common.description = p.description;
        if (['string', 'number', 'integer', 'boolean', 'null'].includes(type)) {
          return [
            p.name,
            {
              type,
              ...common
            }
          ];
        } else if (type === 'object') {
          return [
            p.name,
            {
              type,
              properties: children,
              ...common
            }
          ];
        } else if (type === 'array') {
          return [
            p.name,
            {
              type,
              items: { type: 'object', properties: children },
              ...common
            }
          ];
        } else {
          throw `type: ${type}
          parentID: ${parentId}
          itf.url: ${itf.url}
          ${JSON.stringify(children)}`;
        }
      })
      .fromPairs()
      .value();
  }

  const propertyChildren = findChildren(-1);
  if (_.isEmpty(properties)) {
    return {
      type: 'object'
    };
  } else {
    return {
      type: 'object',
      properties: propertyChildren
    };
  }
}

export default function convert(itf): Promise<Array<string>> {
  const reqJSONSchema = interfaceToJSONSchema(itf, 'request');
  const resJSONSchema = interfaceToJSONSchema(itf, 'response');

  const options: Options = {
    ...DEFAULT_OPTIONS,
    bannerComment: ''
  };
  return Promise.all([
    compile(reqJSONSchema, 'Req', options),
    compile(resJSONSchema, 'Res', options)
  ]);
}
