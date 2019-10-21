import axios from 'axios'
import * as _ from 'lodash'
import chalk from 'chalk'
import convert from './convert'
import { IModules, ICollaborator, Intf } from '../types'

/** 从rap查询所有接口数据 */
export async function getInterfaces(rapUrl: string, projectId: number) {
    const response = await axios.get(`${rapUrl}/repository/get?id=${projectId}`)

    const data = response.data.data
    const modules: IModules[] = data.modules
    const collaborators: ICollaborator[] = data.collaborators

    let interfaces = _(modules)
        .map(m => m.interfaces)
        .flatten()
        .value()

    if (collaborators.length) {
        const collaboratorsInterfaces = await Promise.all(collaborators.map(e => getInterfaces(rapUrl, e.id)))
        interfaces = interfaces.concat(collaboratorsInterfaces.flat())
    }

    return interfaces
}

/** 生成 model.ts 文件 */
interface ICreateModelParams {
    projectId: number;
}
export async function createModel(interfaces: Intf[], extr: ICreateModelParams) {
    const { projectId } = extr;
    const itfStrs = await Promise.all(
        interfaces.map(async itf => {
            try {
                const [reqItf, resItf] = await convert(itf);
                return `
            /**
             * 接口名：${itf.name}
             * Rap 地址: http://rap2.alibaba-inc.com/repository/editor?id=${
                    itf.repositoryId
                    }&mod=${itf.moduleId}&itf=${itf.id}
             */
            '${itf.modelName}': {
              Req: ${reqItf.replace('export interface Req', '')};
              Res: ${resItf.replace('export interface Res', '')};
            }
          `;
            } catch (error) {
                throw chalk.red(`接口：http://rap2.alibaba-inc.com/repository/editor?id=${itf.repositoryId}&mod=${itf.moduleId}&itf=${itf.id}
          生成出错
          ${error}`);
            }
        })
    );
    return `
          /**
           * 本文件由 Rapper 从 Rap 中自动生成，请勿修改
           * Rap 地址: http://rap2.alibaba-inc.com/repository/editor?id=${projectId}
           */
          export interface ModelItf {
          ${itfStrs.join('\n\n')}
          };
      `;
}