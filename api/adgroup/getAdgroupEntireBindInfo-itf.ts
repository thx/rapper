/**
 * 本文件由 Pang 从 Rap 中自动生成，请勿修改
 * 接口名：获取推广单元全部的信息
 * Rap: http://rap2.alibaba-inc.com/repository/editor?id=2025&itf=44945
 */
const url: string = "/adgroup/getAdgroupEntireBindInfo.json";
const method: string = "GET";
export {url, method};

export interface Req {
  [k: string]: any;
}

export interface Res {
  info?: {
    ok?: boolean;
    [k: string]: any;
  };
  data?: {
    trans?: {
      [k: string]: any;
    };
    [k: string]: any;
  };
  [k: string]: any;
}
