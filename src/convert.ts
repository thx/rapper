import { JSONSchema4 } from 'json-schema';
import { compile, DEFAULT_OPTIONS, Options } from 'json-schema-to-typescript';
import { Interface } from './itf';
import * as JSON5 from 'json5';
import * as _ from 'lodash';

function inferArrayType(p: Interface.Property): string[] | string {
  // 当 rule 为 +1 时 mockjs 从属性值 array 中顺序选取 1 个元素，作为最终值。
  // 当 rule 为 1 时 mockjs 从属性值 array 中随机选取 1 个元素，作为最终值。
  // 这时候这个属性的类型并非 array，而是 array 子元素的类型
  // 子元素的类型可以从 value 中推断出来
  const rule = p.rule && p.rule.trim() || '';
  if (['1', '+1'].includes(rule) && p.value != null) {
    try {
      const arr: any[] = JSON5.parse(p.value);
      return _.chain(arr).map(e => typeof e).uniq().value();
    } catch (error) {
      return ['string', 'number', 'boolean', 'object'];
    }
  }
  return 'array';
}

type Scope = 'request' | 'response';

const removeComment = (str: string) => str.replace(/\/\*|\*\//g, '');

function interfaceToJSONSchema(
  itf,
  scope: Scope,
  additionalProperties: boolean
): JSONSchema4 {
  const properties: Array<any> = itf.properties.filter(p => p.scope === scope);
  function findChildren(parentId: number) {
    return _.chain(properties)
      .filter(p => p.parentId === parentId)
      .map(p => {
        const type = p.type.toLowerCase().replace(/regexp|function/, 'string');
        const children = findChildren(p.id);
        const common: { description?: string } = {};
        if (p.description) common.description = removeComment(p.description);
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
              additionalProperties,
              ...common
            }
          ];
        } else if (type === 'array') {
          const inferedType = inferArrayType(p);
          if (typeof inferedType === 'string' && inferedType === 'array') {
            return [
              p.name,
              {
                type,
                items: {
                  type: 'object',
                  properties: children,
                  additionalProperties
                },
                ...common
              }
            ];
          } else {
            return [
              p.name,
              {
                type: inferedType,
                ...common
              }
            ];
          }
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
      type: 'object',
      additionalProperties
    };
  } else {
    return {
      type: 'object',
      properties: propertyChildren,
      additionalProperties
    };
  }
}

export default function convert(
  itf,
  additionalProperties: boolean
): Promise<Array<string>> {
  const reqJSONSchema = interfaceToJSONSchema(
    itf,
    'request',
    additionalProperties
  );
  const resJSONSchema = interfaceToJSONSchema(
    itf,
    'response',
    additionalProperties
  );

  const options: Options = {
    ...DEFAULT_OPTIONS,
    bannerComment: ''
  };
  return Promise.all([
    compile(reqJSONSchema, 'Req', options),
    compile(resJSONSchema, 'Res', options)
  ]);
}
