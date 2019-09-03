import chalk from 'chalk'
import { UrlMapper } from './types'
import { createModel, createFetch } from './default/index'
import { createIndexStr, createReduxStr, createReduxFetchStr, createUseRapStr } from './redux/createRedux'
import { relativeImport, writeFile } from './utils'
import { getInterfaces, getIntfWithModelName, uniqueItfs, formatCode } from './common'

interface ICreateModel {
    projectId: number
    urlMapper?: UrlMapper
    useCommonJsModule?: boolean
    additionalProperties?: boolean
    optionalExtra?: boolean
    rapUrl?: string
    outputPath?: string
    modelPath?: string
    requesterPath?: string
    baseFetchPath?: string
    serverAPI?: string
    type?: 'default' | 'redux' | 'mobx' | 'vuex'
}
export default async function({
    projectId,
    modelPath,
    requesterPath,
    baseFetchPath,
    urlMapper = t => t,
    useCommonJsModule = false,
    additionalProperties = false,
    optionalExtra = true,
    rapUrl = 'http://rap2.taobao.org',
    outputPath = './model',
    serverAPI = '',
    type = 'default',
}: ICreateModel) {
    /** 输出文件集合 */
    const outputFiles = []

    /** 所有接口 */
    const interfaces = uniqueItfs(getIntfWithModelName(await getInterfaces(rapUrl, projectId), urlMapper, type === 'redux'))

    /** 生成 model.ts */
    const modelStr = await createModel(interfaces, { projectId, additionalProperties })
    outputFiles.push({
        path: outputPath ? `${outputPath}/model.ts` : modelPath,
        content: formatCode(modelStr),
    })

    if (type === 'redux') {
        if (!outputPath) {
            console.log(chalk.red('配置文件中 outputPath 不能为空'))
            return
        }
        /** 生成 index.ts */
        outputFiles.push({
            path: `${outputPath}/index.ts`,
            content: formatCode(createIndexStr()),
        })

        /** 生成 redux.ts */
        outputFiles.push({
            path: `${outputPath}/redux.ts`,
            content: formatCode(createReduxStr(interfaces, { projectId, serverAPI })),
        })

        /** 生成 redux 版本的 fetch.ts */
        outputFiles.push({
            path: `${outputPath}/fetch.ts`,
            content: formatCode(createReduxFetchStr(projectId, interfaces)),
        })

        /** 生成 useRap.ts */
        outputFiles.push({
            path: `${outputPath}/useRap.ts`,
            content: formatCode(createUseRapStr(interfaces)),
        })
    } else if (requesterPath) {
        /** 生成 fetch.ts */
        const relModelPath = relativeImport(requesterPath, modelPath)
        const relBaseFetchPath = relativeImport(requesterPath, baseFetchPath)

        const fetchStr = createFetch(interfaces, { projectId, useCommonJsModule, optionalExtra, relModelPath, relBaseFetchPath })
        outputFiles.push({
            path: requesterPath,
            content: formatCode(fetchStr),
        })
    }

    return Promise.all(outputFiles.map(({ path, content }) => writeFile(path, content)))
}
