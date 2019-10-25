import { Intf } from '../types';

/** fetch.ts 文件的内容 */
interface CreateFetchParams {
  projectId: number;
  relModelPath: string;
  relBaseFetchPath: string;
}

/** 生成 index.ts */
function createIndexStr(projectId: number): string {
  return '';
}

/** 生成 request.ts */
function createRequestStr(interfaces: Intf[], extr: CreateFetchParams) {
  const { projectId, relModelPath, relBaseFetchPath } = extr;
  return `
          /**
           * 本文件由 Rapper 从 Rap 中自动生成，请勿修改
           * Rap 地址: http://rap2.alibaba-inc.com/repository/editor?id=${projectId}
           */
          import fetch from '${relBaseFetchPath}';
          import { Models } from '${relModelPath}';

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
              '${modelName}': (req: Models['${modelName}']['Req'], extra: Extra) => {
                return fetch<Models['${modelName}']['Res']>('${
                  itf.url
                }','${itf.method.toUpperCase()}', req, extra);
              }`;
              })
              .join(',\n\n')}
          };
          export default request;
        `;
}

export default { createIndexStr, createRequestStr };
