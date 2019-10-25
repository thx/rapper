export default `
/**
 * 项目的公共请求方法
 * 用户可在此加入自定义逻辑，比如请求、响应数据过滤
 * (如有需要可以修改，项目初始化后就不会更新此文件)
 */

/** 服务端api地址，默认是根目录相对路径 */
const requestPrefix = 'https://rap2api.alibaba-inc.com/app/mock/3402'

interface RequestParams {
    url: string
    /** 请求类型 */
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'OPTIONS' | 'PATCH' | 'HEAD'
    params?: any
    extra?: {
        [k: string]: any
    }
}

export default async <Res>(params: RequestParams): Promise<Res> => {
    let requestUrl = getUrl(params.url, requestPrefix)
    const requestParams: any = {
        credentials: 'include',
        method: params.method || 'GET',
        headers: { 'Content-Type': 'application/json' },
    }

    if (requestParams.method === 'GET') {
        requestUrl = requestUrl + '?' + locationStringify(params.params)
    } else if (params.params) {
        requestParams.body = JSON.stringify(params.params)
    }
    const res = await fetch(requestUrl, requestParams)
    const retJSON = res.clone() // clone before return
    return retJSON.json()
}

/**
 * search 参数转换，比如 { a: 1, b: 2, c: undefined } 转换成 "a=1&b=2"
 * 会自动删除 undefined
 */
function locationStringify(
    obj: {
        [key: string]: any
    } = {}
): string {
    return Object.entries(obj).reduce((str, [key, value]) => {
        if (value === undefined) {
            return str
        }
        str = str ? str + '&' : str
        return str + key + '=' + value
    }, '')
}

/** 拼接组合request链接 */
const getUrl = (url: string, requestPrefix?: string): string => {
  if (!requestPrefix) {
    requestPrefix = ''
  }
  requestPrefix = requestPrefix.replace(/\\/$/, '')
  url = url.replace(/^\\//, '')
  return requestPrefix + '/' + url
}
`;
