import axios from 'axios'
import * as _ from 'lodash'
import chalk from 'chalk'
import { format } from 'json-schema-to-typescript/dist/src/formatter'
import { DEFAULT_OPTIONS } from 'json-schema-to-typescript'
import { Interface, Intf, UrlMapper } from './types'

interface Collaborator {
    id: number
    name: string
    description: string
    logo?: any
    visibility: boolean
    ownerId: number
    organizationId?: any
    creatorId: number
    lockerId?: any
    createdAt: Date
    updatedAt: Date
    deletedAt?: any
}

/** 从rap查询所有接口数据 */
export async function getInterfaces(projectId: number) {
    const response = await axios.get(`http://rap2api.alibaba-inc.com/repository/get?id=${projectId}`)

    const data = response.data.data
    const modules: Array<any> = data.modules
    const collaborators: Collaborator[] = data.collaborators

    let interfaces: Array<Intf> = _(modules)
        .map(m => m.interfaces)
        .flatten()
        .value()

    if (collaborators.length) {
        const collaboratorsInterfaces = await Promise.all(collaborators.map(e => getInterfaces(e.id)))
        interfaces = interfaces.concat(_.flatten(collaboratorsInterfaces))
    }

    return interfaces
}

/** 给接口增加 modelName */
export function getIntfWithModelName(intfs: Interface.Root[], urlMapper: UrlMapper = t => t, noTransform?: boolean): Intf[] {
    return intfs.map(itf => ({
        ...itf,
        modelName: rap2name(itf, urlMapper, noTransform),
    }))
}

/**
 * 转换rap接口地址
 * 比如 magix 将 / 转换成 _ ，RESTful接口，清除占位符
 * 参数 noTransform 用来配置是否 将 / 转换成 _ ，默认转换
 */
export function rap2name(itf: Interface.Root, urlMapper: UrlMapper = t => t, noTransform?: boolean) {
    // copy from http://gitlab.alibaba-inc.com/thx/magix-cli/blob/master/util/rap.js
    let method = itf.method.toLowerCase()
    let apiUrl = urlMapper(itf.url)
    let projectId = itf.repositoryId
    const id = itf.id

    const regExp = /^(?:https?:\/\/[^\/]+)?(\/?.+?\/?)(?:\.[^./]+)?$/
    const regExpExec = regExp.exec(apiUrl)

    if (!regExpExec) {
        console.log(
            chalk.red(`\n  ✘ 您的rap接口url设置格式不正确，参考格式：/api/test.json (接口url:${apiUrl}, 项目id:${projectId}, 接口id:${id})\n`)
        )
        return
    }

    const urlSplit = regExpExec[1].split('/')

    //接口地址为RESTful的，清除占位符
    //api/:id/get -> api//get
    //api/bid[0-9]{4}/get -> api//get
    urlSplit.forEach((item, i) => {
        if (/\:id/.test(item)) {
            urlSplit[i] = '$id'
        } else if (/[\[\]\{\}]/.test(item)) {
            urlSplit[i] = '$regx'
        }
    })

    //只去除第一个为空的值，最后一个为空保留
    //有可能情况是接口 /api/login 以及 /api/login/ 需要同时存在
    if (urlSplit[0].trim() === '') {
        urlSplit.shift()
    }

    urlSplit.push(method)

    return noTransform ? urlSplit.join('/') : urlSplit.join('_')
}

/** 接口去重 */
export function uniqueItfs(itfs: Intf[]) {
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

/** 格式化输出字符串 */
export function formatCode(code: string) {
    return format(code, DEFAULT_OPTIONS)
}
