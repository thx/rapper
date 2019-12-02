/* eslint-disable */
/* tslint:disable */

/**
 * 本文件由 Rapper 同步 Rap 平台接口，自动生成，请勿修改
 * Rap仓库 地址: https://rap2.alibaba-inc.com/repository/editor?id=3601
 */

/**
 * 包装请求函数，预处理 Restful API 的 url，把 params 塞到 url 里面
 */
export function wrapPreProcessRestfulUrl(fetch: (fetchParams: IUserFetchParams) => Promise<any>) {
  return (fetchParams: IUserFetchParams) => {
    return fetch({
      ...fetchParams,
      ...processRestfulUrl(fetchParams.url, fetchParams.params),
    });
  };
}

export function processRestfulUrl(url: string, params: any) {
  const urlSplit = url.split('/');
  const newParams = { ...params };
  for (let i = 0; i < urlSplit.length; ++i) {
    const part = urlSplit[i];
    if (part[0] === ':') {
      const key = part.slice(1);
      if (params.hasOwnProperty(key)) {
        urlSplit[i] = params[key];
        delete newParams[key];
      }
    }
  }
  return { url: urlSplit.join('/'), params: newParams };
}

/**
 * search 参数转换，比如 { a: 1, b: 2, c: undefined } 转换成 "a=1&b=2"
 * 会自动删除 undefined
 */
export function locationStringify(
  obj: {
    [key: string]: any;
  } = {},
): string {
  return Object.entries(obj).reduce((str, [key, value]) => {
    if (value === undefined) {
      return str;
    }
    str = str ? str + '&' : str;
    return str + encodeURIComponent(key) + '=' + encodeURIComponent(value);
  }, '');
}

/** 拼接组合request链接 */
function parseUrl(url: string, requestPrefix?: string): string {
  const urlReg = /^((https?:\/\/)?(([a-zA-Z0-9]+-?)+[a-zA-Z0-9]+\.)+[a-zA-Z]+)(:\d+)?(\/.*)?(\?.*)?(#.*)?$/;
  /** 如果url含有host，就不再混入prefix */
  if (urlReg.test(url)) {
    return url;
  }
  if (!requestPrefix) {
    requestPrefix = '';
  }
  requestPrefix = requestPrefix.replace(/\/$/, '');
  url = url.replace(/^\//, '');
  return requestPrefix + '/' + url;
}

/** defaultFetch 参数 */
export interface IDefaultFetchParams {
  url: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'OPTIONS' | 'PATCH' | 'HEAD';
  params?: any;
  extra?: IExtra;
  fetchOption: Omit<RequestInit, 'body' | 'method'>;
}
/** defaultFetch 参数 */
export interface IUserFetchParams {
  url: string;
  method: IDefaultFetchParams['method'];
  params?: object;
  extra?: IExtra;
}

/** 请求的额外参数类型 */
export interface IExtra {
  /**
   * 请求头 content-type，默认是 'application/json'
   */
  contentType?:
    | 'application/json'
    | 'multipart/form-data'
    | 'application/x-www-form-urlencoded'
    | 'text/plain'
    | 'text/html'
    | 'application/javascript';
}

export interface IDefaultConfigObj {
  /** 'prefix' 前缀，统一设置 url 前缀，默认是 '' */
  prefix: string;
  /** fetch 的第二参数，除了 body 和 method 都可以自定义 */
  fetchOption: IDefaultFetchParams['fetchOption'];
}
export type FetchConfigObj = Partial<IDefaultConfigObj>;
type FetchConfigFunc = <T>(params: IUserFetchParams) => Promise<T>;
export type RequesterOption = FetchConfigObj | FetchConfigFunc;

const defaultConfig: IDefaultConfigObj = {
  prefix: '',
  fetchOption: {
    headers: { 'Content-Type': 'application/json' },
    credentials: 'same-origin',
  },
};

const defaultFetch = async ({ url, method, params, extra, fetchOption }: IDefaultFetchParams) => {
  let urlWithParams = url;
  const init: RequestInit = { ...fetchOption, method };
  if (method === 'GET') {
    const qs = locationStringify(params);
    urlWithParams = qs ? url + '?' + qs : url;
  } else if (
    method === 'POST' &&
    extra &&
    extra.contentType === 'application/x-www-form-urlencoded'
  ) {
    init.body = locationStringify(params);
  } else if (method === 'POST' && extra && extra.contentType === 'multipart/form-data') {
    const formdata = new FormData();
    params &&
      Object.keys(params).forEach(key => {
        params[key] && formdata.append(key, params[key]);
      });
    init.body = formdata;
  } else {
    init.body = typeof params === 'object' ? JSON.stringify(params) : params;
  }

  /** 用户自定义 Content-Type */
  if (extra && extra.contentType) {
    init.headers = { ...init.headers, 'Content-Type': extra.contentType };
  }

  const res = await fetch(urlWithParams, init);
  return Promise.resolve(res.json());
};

export const getRapperRequest = (fetchConfig: RequesterOption) => {
  let rapperFetch: FetchConfigFunc;
  if (typeof fetchConfig === 'function') {
    rapperFetch = fetchConfig;
  } else {
    let { prefix, fetchOption } = fetchConfig;
    prefix = prefix !== undefined ? prefix : defaultConfig.prefix;
    fetchOption = fetchOption !== undefined ? fetchOption : defaultConfig.fetchOption;

    rapperFetch = (requestParams: IUserFetchParams) => {
      const { url, method, params, extra } = requestParams;
      fetchOption = fetchOption || {};
      return defaultFetch({ url: parseUrl(url, prefix), method, params, extra, fetchOption });
    };
  }
  return wrapPreProcessRestfulUrl(rapperFetch);
};
