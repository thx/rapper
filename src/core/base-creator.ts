import chalk from 'chalk';
import convert from './convert';
import { Intf, IGeneratedCode, ICreatorExtr } from '../types';
import { creatInterfaceHelpStr } from './tools';
import { getPackageName } from '../utils';

const packageName = getPackageName();

/** 生成 Models 文件 */
export async function createModel(interfaces: Array<Intf>, extr: ICreatorExtr) {
  const itfStrs = await Promise.all(
    interfaces.map(async itf => {
      try {
        const [reqItf, resItf] = await convert(itf);
        return `
            ${creatInterfaceHelpStr(extr.rapUrl, itf)}
            '${itf.modelName}': {
              Req: ${reqItf.replace(/export (type|interface) Req =?/, '').replace(/;/g, '')};
              Res: ${resItf.replace(/export (type|interface) Res =?/, '').replace(/;/g, '')};
            }
          `;
      } catch (error) {
        throw chalk.red(`接口：${extr.rapUrl}/repository/editor?id=${itf.repositoryId}&mod=${itf.moduleId}&itf=${itf.id}
          生成出错
          ${error}`);
      }
    }),
  );
  return `
        export interface IModels {
            ${itfStrs.join('\n\n')}
        };
    `;
}

/** 生成 IResponseTypes */
export function createResponseTypes(interfaces: Array<Intf>) {
  return `
    export interface IResponseTypes {
      ${interfaces.map(
        ({ modelName }) => `
        '${modelName}': ResSelector<IModels['${modelName}']['Res']>
      `,
      )}
    }
  `;
}

export async function createBaseRequestStr(interfaces: Array<Intf>, extr: ICreatorExtr) {
  const { rapUrl, resSelector } = extr;
  const modelStr = await createModel(interfaces, extr);
  return `
    import * as commonLib from '${packageName}/runtime/commonLib'

    ${modelStr}

    ${resSelector}
  
    ${createResponseTypes(interfaces)}

    export function createFetch(fetchConfig: commonLib.RequesterOption) {
      const rapperFetch = commonLib.getRapperRequest(fetchConfig)

      return {
        ${interfaces
          .map(itf => {
            const modelName = itf.modelName;
            const extra = `* @param req 请求参数
            * @param extra 请求配置项`;
            return `
            ${creatInterfaceHelpStr(rapUrl, itf, extra)}
            '${modelName}': (req?: IModels['${modelName}']['Req'], extra?: commonLib.IExtra) => {
              return rapperFetch({
                url: '${itf.url}',
                method: '${itf.method.toUpperCase()}',
                params: req, 
                extra
              }) as Promise<IResponseTypes['${modelName}']>;
            }`;
          })
          .join(',\n\n')}
      };
    }
    `;
}

export function createBaseIndexCode(): IGeneratedCode {
  return {
    import: `
      import { createFetch, IModels } from './request'
      import * as commonLib from '${packageName}/runtime/commonLib'
    `,
    body: `
      const { defaultFetch } = commonLib
      const fetch = createFetch({})
    `,
    export: `
      export { fetch, createFetch, defaultFetch }
      export type Models = IModels
    `,
  };
}
