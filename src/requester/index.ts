import { Intf } from '../types';

/** fetch.ts 文件的内容 */
interface ICreateFetchParams {
  projectId: number;
  relModelPath: string;
  relBaseFetchPath: string;
}

/** 生成 index.ts */
function createIndexStr(): string {
  return ''
}

/** 生成 fetch.ts */
function createFetchStr(interfaces: Intf[], extr: ICreateFetchParams) {
  const {
    projectId,
    relModelPath,
    relBaseFetchPath
  } = extr;
  return `
          /**
           * 本文件由 Rapper 从 Rap 中自动生成，请勿修改
           * Rap 地址: http://rap2.alibaba-inc.com/repository/editor?id=${projectId}
           */
          import fetch from '${relBaseFetchPath}';
          import { ModelItf } from '${relModelPath}';

          type Extra = Parameters<typeof fetch>[3];
          const request = {
            ${interfaces
      .map(itf => {
        const modelName = itf.modelName;
        return `
              /**
               * 接口名：${itf.name}
               * Rap 地址: http://rap2.alibaba-inc.com/repository/editor?id=${
          itf.repositoryId
          }&mod=${itf.moduleId}&itf=${itf.id}
              * @param req 请求参数
              * @param extra 请求配置项
              */
              '${modelName}': (req: ModelItf['${modelName}']['Req'], extra: Extra) => {
                return fetch<ModelItf['${modelName}']['Res']>('${
          itf.url
          }','${itf.method.toUpperCase()}', req, extra);
              }`;
      })
      .join(',\n\n')}
          };
          export default request;
        `;
}

export { createIndexStr, createFetchStr }
