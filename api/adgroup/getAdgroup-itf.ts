/**
 * 本文件由 Pang 从 Rap 中自动生成，请勿修改
 * 接口名：获取推广单元信息
 * Rap: http://rap2.alibaba-inc.com/repository/editor?id=2025&itf=44944
 */
const url: string = "/adgroup/getAdgroup.json";
const method: string = "GET";
export {url, method};

export interface Req {
  [k: string]: any;
}

export interface Res {
  data?: {
    trans?: {
      adboardFilter?: number;
      campaignId?: number;
      campaignModel?: null;
      campaignName?: null;
      campaignType?: null;
      cpmScope?: null;
      frequency?: null;
      status?: number;
      transId?: number;
      transName?: string;
      [k: string]: any;
    };
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
