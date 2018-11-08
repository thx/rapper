/**
 * 本文件由 Pang 从 Rap 中自动生成，请勿修改
 * 接口名：分时段分地域-----获取推广单元降价标签
 * Rap: http://rap2.alibaba-inc.com/repository/editor?id=2025&itf=45232
 */
const url: string = "/adgroup/getAdgroupReductionSign.json";
const method: string = "GET";
export {url, method};

export interface Req {
  pageSize?: number;
  offset?: number;
  status?: number;
  campaignType?: number;
  productId?: number;
  campaignId?: number;
  [k: string]: any;
}

export interface Res {
  data?: {
    count?: number;
    list?: {
      [k: string]: any;
    }[];
    [k: string]: any;
  };
  info?: {
    disableTime?: boolean;
    errorCode?: null;
    lockSla?: boolean;
    message?: null;
    ok?: boolean;
    unlockUrl?: null;
    [k: string]: any;
  };
  [k: string]: any;
}
