export default `
/**
 * 项目的公共请求方法
 * 用户可在此加入自定义逻辑，比如请求、响应数据过滤
 * (如有需要可以修改，项目初始化后就不会更新此文件)
 */

import { defaultFetch } from './lib'

interface RequestParams {
    url: string
    /** 请求类型 */
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'OPTIONS' | 'PATCH' | 'HEAD'
    params?: any
    extra?: {
        [k: string]: any
    }
}

export default async function<Res>(params: RequestParams): Promise<Res> {
    return defaultFetch(params)
}
`;
