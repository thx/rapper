type IJSON = string | number | boolean | null | { [property: string]: IJSON } | IJSON[];

/** 请求的额外参数类型 */
export interface IExtra {
  /**
   * 请求的类型，默认不传 代表redux请求，会发送 Action，也存入redux store
   * normal 代表普通请求，不发送 Action，也不存入redux store
   * redux 代表redux请求，会发送 Action，也存入redux store
   */
  type?: 'normal' | 'redux';
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
  /**
   * 请求 url 后面拼接的 query 参数，比如 POST 请求需要拼接 token 参数
   */
  query?: { [key: string]: any };
  /**
   * 用户自定义的queryString函数，默认使用JSON.stringify处理，例如 { a: 1, b: 2 } 结果是 a=1&b=2
   */
  queryStringFn?: (input: any[] | object) => string;
  /** 扩展字段 */
  [key: string]: any;
}

/** defaultFetch 参数 */
interface IDefaultFetchParams {
  url: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'OPTIONS' | 'PATCH' | 'HEAD';
  params?: any;
  extra?: IExtra;
  fetchOption?: Omit<RequestInit, 'body' | 'method'>;
}
/** defaultFetch 参数 */
export interface IUserFetchParams {
  url: string;
  method: IDefaultFetchParams['method'];
  params?: IJSON;
  extra?: IExtra;
}

type TQueryFunc = () => { [key: string]: IJSON };

interface IDefaultConfigObj {
  /** 'prefix' 前缀，统一设置 url 前缀，默认是 '' */
  prefix?: string;
  /** fetch 的第二参数，除了 body 和 method 都可以自定义 */
  fetchOption?: IDefaultFetchParams['fetchOption'];
  /** 全局的query参数，可以配置 object，或者自定义函数 */
  query?: { [key: string]: IJSON } | TQueryFunc;
}

type FetchConfigObj = Partial<IDefaultConfigObj>;
type FetchConfigFunc = <T>(params: IUserFetchParams) => Promise<T>;
export type RequesterOption = FetchConfigObj | FetchConfigFunc;

/**
 * search 参数转换，比如 { a: 1, b: 2, c: undefined } 转换成 "a=1&b=2"
 * 会自动删除 undefined
 * fn，可以是用户自定义的转换函数，默认是 JSON.stringify
 */
function stringifyQueryString(
  obj: {
    [key: string]: any;
  } = {},
  fn: (input: any[] | object) => string = JSON.stringify,
): string {
  return Object.entries(obj).reduce((str, [key, value]) => {
    if (value === undefined) {
      return str;
    }
    str = str ? str + '&' : str;
    if (typeof value === 'object') {
      value = fn(value);
    }
    return str + encodeURIComponent(key) + '=' + encodeURIComponent(value);
  }, '');
}

/** 拼接组合request链接 */
function parseUrl(url: string, requestPrefix?: string): string {
  const urlReg = /^((https?:)?\/\/(([a-zA-Z0-9]+-?)+[a-zA-Z0-9]+\.)+[a-zA-Z]+)(:\d+)?(\/.*)?/;
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

function processRestfulUrl(url: string, params: any) {
  // 只处理 object
  if (Object.prototype.toString.call(params) === '[object Object]') {
    const urlSplit = url.split('/');
    const newParams = { ...params };
    for (let i = 0; i < urlSplit.length; ++i) {
      const part = urlSplit[i];
      // 兼容 oneApi 与 egg 两种 模式的 params 传参 例： :appId / {appId}
      const matchKeys = part.match(/(?:\{(.*)\}|\:(.*))/);
      if (!matchKeys) continue;
      const key = matchKeys[1] || matchKeys[2];
      if (!params.hasOwnProperty(key)) {
        console.warn('Please set value for template key: ', key);
        continue;
      }
      urlSplit[i] = params[key];
      delete newParams[key];
    }

    return { url: urlSplit.join('/'), params: newParams };
  }
  return { url, params };
}

/**
 * 包装请求函数，预处理 Restful API 的 url，把 params 塞到 url 里面
 */
function wrapPreProcessRestfulUrl(fetch: (fetchParams: IUserFetchParams) => Promise<any>) {
  return (fetchParams: IUserFetchParams) => {
    return fetch({
      ...fetchParams,
      ...processRestfulUrl(fetchParams.url, fetchParams.params),
    });
  };
}

const defaultConfig: IDefaultConfigObj = {
  prefix: '',
  fetchOption: {
    headers: {},
    credentials: 'same-origin',
  },
};

export const defaultFetch = async ({
  url,
  method,
  params,
  extra,
  fetchOption,
}: IDefaultFetchParams) => {
  extra = extra || {};
  let urlWithParams = url;
  const init: RequestInit = { ...(fetchOption || {}), method };
  if (method === 'GET') {
    const qs = stringifyQueryString(params, extra.queryStringFn);
    urlWithParams = qs ? url + '?' + qs : url;
  } else if (
    ['POST', 'DELETE', 'PUT'].includes(method) &&
    extra.contentType === 'application/x-www-form-urlencoded'
  ) {
    init.body = stringifyQueryString(params, extra.queryStringFn);
  } else if (
    ['POST', 'DELETE', 'PUT'].includes(method) &&
    extra.contentType === 'multipart/form-data'
  ) {
    const formdata = new FormData();
    params &&
      Object.keys(params).forEach(key => {
        formdata.append(key, params[key]);
      });
    init.body = formdata;
  } else {
    init.body = typeof params === 'object' ? JSON.stringify(params) : params;
  }

  /** 请求 url，增加 query 参数 */
  if (typeof extra.query === 'object') {
    const qs = stringifyQueryString(extra.query, extra.queryStringFn);
    if (qs) {
      const connectStr = urlWithParams.indexOf('?') > -1 ? '&' : '?';
      urlWithParams += connectStr + qs;
    }
  }

  /** 用户自定义 Content-Type */
  if (extra.contentType) {
    if (extra.contentType !== 'multipart/form-data') {
      init.headers = {
        ...init.headers,
        'Content-Type': extra.contentType,
      };
    }
  } else {
    init.headers = { 'Content-Type': 'application/json', ...init.headers };
  }

  const res = await fetch(urlWithParams, init);
  if (res.ok) {
    return res.json();
  } else {
    throw { name: 'Error', message: res.statusText, response: res };
  }
};

export const getRapperRequest = (fetchConfig: RequesterOption) => {
  let rapperFetch: FetchConfigFunc;
  if (typeof fetchConfig === 'function') {
    rapperFetch = fetchConfig;
  } else {
    let { prefix, fetchOption } = fetchConfig;
    const { query } = fetchConfig;
    prefix = prefix !== undefined ? prefix : defaultConfig.prefix;
    fetchOption =
      Object.prototype.toString.call(fetchOption) === '[object Object]'
        ? fetchOption
        : defaultConfig.fetchOption;
    /** 全局query参数处理 */
    let defaultQuery: { [key: string]: IJSON };
    if (typeof query === 'function') {
      defaultQuery = query();
    } else if (query && typeof query === 'object') {
      defaultQuery = query;
    } else {
      defaultQuery = {};
    }

    rapperFetch = (requestParams: IUserFetchParams) => {
      const { url, method, params, extra } = requestParams;
      fetchOption = fetchOption || {};
      let newExtra = typeof extra === 'object' ? extra : {};
      const newQuery =
        typeof newExtra.query === 'object' ? { ...defaultQuery, ...newExtra.query } : defaultQuery;
      newExtra = { ...newExtra, query: newQuery };
      return defaultFetch({
        url: parseUrl(url, prefix),
        method,
        params,
        extra: newExtra,
        fetchOption,
      });
    };
  }
  return wrapPreProcessRestfulUrl(rapperFetch);
};

/** fetch 的类型 */
export enum FetchType {
  /** 基础类型 */
  BASE = 1,
  /** 自定义覆盖类型 */
  AUTO = 2,
}

// polyfill for requestAnimationFrame
export const rAF = window['requestAnimationFrame']
  ? (f: FrameRequestCallback) => window['requestAnimationFrame'](f)
  : (f: (...args: any[]) => void) => setTimeout(f, 1);
