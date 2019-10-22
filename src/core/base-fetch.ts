export default `
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

/** 请求类型 */
type REQUEST_METHOD = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'OPTIONS' | 'PATCH' | 'HEAD'

interface IRequestParams {
    endpoint: string
    method?: REQUEST_METHOD
    params?: any
}

export default async <Res extends { [x: string]: any }>(params: IRequestParams): Promise<Res> => {
    let requestUrl = params.endpoint
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
`