import axios from 'axios'
import * as _ from 'lodash'
import chalk from 'chalk'
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

/** 重命名rap接口地址
 * 比如 magix 将 / 转换成 _
 */
export function rap2name(itf: Interface.Root, urlMapper: UrlMapper = t => t) {
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

    const urlToName = urlSplit.join('_')
    return urlToName
}
