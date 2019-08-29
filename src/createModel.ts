import { DEFAULT_OPTIONS } from 'json-schema-to-typescript'
import { format } from 'json-schema-to-typescript/dist/src/formatter'
import chalk from 'chalk'
import convert from './convert'
import { Interface, Intf, UrlMapper } from './types'
import { createReduxStr, createReduxFetchStr } from './redux/createRedux'
import { relativeImport, writeFile } from './utils'
import { getInterfaces, rap2name } from './common'

function formatCode(code: string) {
    return format(code, DEFAULT_OPTIONS)
}

function getIntfWithModelName(intfs: Interface.Root[], urlMapper: UrlMapper = t => t): Intf[] {
    return intfs.map(itf => {
        return {
            ...itf,
            modelName: rap2name(itf, urlMapper),
        }
    })
}

function uniqueItfs(itfs: Intf[]) {
    const itfMap = new Map<string, Intf[]>()
    itfs.forEach(itf => {
        const name = itf.modelName
        if (itfMap.has(name)) {
            itfMap.get(name).push(itf)
        } else {
            itfMap.set(name, [itf])
        }
    })
    const newItfs: Intf[] = []
    itfMap.forEach((dupItfs, name) => {
        dupItfs.sort(
            // 后更改的在前面
            (a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
        )
        newItfs.push(dupItfs[0])
        if (dupItfs.length > 1) {
            console.log(
                chalk.yellow('发现重复接口，修改时间最晚的被采纳：\n') +
                    dupItfs
                        .map((itf, index) => {
                            const str = `${itf.name}: http://rap2.alibaba-inc.com/repository/editor?id=${itf.repositoryId}&mod=${itf.moduleId}&itf=${itf.id}`

                            return index === 0 ? chalk.green(str) : chalk.gray(str)
                        })
                        .join('\n') +
                    '\n'
            )
        }
    })
    return newItfs
}

interface ICreateModel {
    projectId: number
    urlMapper?: UrlMapper
    useCommonJsModule?: boolean
    additionalProperties?: boolean
    optionalExtra?: boolean
    type?: 'magix' | 'redux' | 'mobx' | 'vuex'
    outputPath?: string
    modelPath?: string
    requesterPath?: string
    baseFetchPath?: string
}
export default async function createModel({
    projectId,
    modelPath,
    requesterPath,
    baseFetchPath,
    urlMapper = t => t,
    useCommonJsModule = false,
    additionalProperties = false,
    optionalExtra = true,
    type = 'magix',
    outputPath = '../model',
}: ICreateModel) {
    const outputFiles = []
    let interfaces = uniqueItfs(getIntfWithModelName(await getInterfaces(projectId), urlMapper))

    /** 生成 model.ts */
    const itfStrs = await Promise.all(
        interfaces.map(async itf => {
            try {
                const [reqItf, resItf] = await convert(itf, additionalProperties)
                return `
          /**
           * 接口名：${itf.name}
           * Rap 地址: http://rap2.alibaba-inc.com/repository/editor?id=${itf.repositoryId}&mod=${itf.moduleId}&itf=${itf.id}
           */
          '${itf.modelName}': {
            Req: ${reqItf.replace('export interface Req', '')};
            Res: ${resItf.replace('export interface Res', '')};
          }
        `
            } catch (error) {
                throw chalk.red(`接口：http://rap2.alibaba-inc.com/repository/editor?id=${itf.repositoryId}&mod=${itf.moduleId}&itf=${itf.id}
        生成出错
        ${error}`)
            }
        })
    )
    const modelItf = formatCode(`
    /**
     * 本文件由 Rapper 从 Rap 中自动生成，请勿修改
     * Rap 地址: http://rap2.alibaba-inc.com/repository/editor?id=${projectId}
     */
    export interface ModelItf {
      ${itfStrs.join('\n\n')}
    };
    `)
    console.log('outputPath', outputPath)
    outputFiles.push({
        path: outputPath ? `${outputPath}/model.ts` : modelPath,
        content: modelItf,
    })

    if (type === 'redux') {
        if (!outputPath) {
            console.log(chalk.red('配置文件中 outputPath 不能为空'))
            return
        }
        /** 生成 redux.ts */
        outputFiles.push({
            path: `${outputPath}/redux.ts`,
            content: formatCode(createReduxStr(projectId, interfaces)),
        })

        /** 生成 redux 版本的 fetch.ts */
        const relBaseFetchPath = relativeImport(`${outputPath}/fetch.ts`, baseFetchPath)
        outputFiles.push({
            path: `${outputPath}/fetch.ts`,
            content: formatCode(createReduxFetchStr(projectId, interfaces, relBaseFetchPath)),
        })
    } else if (requesterPath) {
        /** 生成 fetch.ts */
        const relModelPath = relativeImport(requesterPath, modelPath)
        const relBaseFetchPath = relativeImport(requesterPath, baseFetchPath)

        const fetcher = formatCode(`
          /**
           * 本文件由 Rapper 从 Rap 中自动生成，请勿修改
           * Rap 地址: http://rap2.alibaba-inc.com/repository/editor?id=${projectId}
           */
        ${
            useCommonJsModule
                ? `
          import fetch =  require('${relBaseFetchPath}');
          import { ModelItf } from '${relModelPath}';
          `
                : `
          import fetch from '${relBaseFetchPath}';
          import { ModelItf } from '${relModelPath}';
        `
        }
          type Extra = Parameters<typeof fetch>[3];
          const request = {
            ${interfaces
                .map(itf => {
                    const modelName = itf.modelName
                    return `
              /**
               * 接口名：${itf.name}
               * Rap 地址: http://rap2.alibaba-inc.com/repository/editor?id=${itf.repositoryId}&mod=${itf.moduleId}&itf=${itf.id}
              * @param req 请求参数
              * @param extra 请求配置项
              */
              '${modelName}': (req: ModelItf['${modelName}']['Req'], extra${optionalExtra ? '?' : ''}: Extra) => {
                return fetch<ModelItf['${modelName}']['Res']>('${itf.url}','${itf.method.toUpperCase()}', req, extra);
              }`
                })
                .join(',\n\n')}
          };
    
        ${
            useCommonJsModule
                ? `
          export = request;
          `
                : `
          export default request;
          `
        }
        `)
        outputFiles.push({ path: requesterPath, content: fetcher })
    }

    return Promise.all(outputFiles.map(({ path, content }) => writeFile(path, content)))
}
