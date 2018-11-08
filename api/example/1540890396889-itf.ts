/**
 * 本文件由 Pang 从 Rap 中自动生成，请勿修改
 * 接口名：示例接口
 * Rap: http://rap2.alibaba-inc.com/repository/editor?id=2025&itf=63496
 */
const url: string = "/example/1540890396889";
const method: string = "GET";
export {url, method};

export interface Req {
  foo?: string;
  [k: string]: any;
}

export interface Res {
  string?: string;
  number?: number;
  boolean?: boolean;
  regexp?: string;
  function?: string;
  array?: {
    foo?: number;
    bar?: string;
    [k: string]: any;
  }[];
  items?: {
    [k: string]: any;
  }[];
  object?: {
    foo?: number;
    bar?: string;
    [k: string]: any;
  };
  placeholder?: string;
  [k: string]: any;
}
