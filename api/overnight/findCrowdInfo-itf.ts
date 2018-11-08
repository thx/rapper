/**
 * 本文件由 Pang 从 Rap 中自动生成，请勿修改
 * 接口名：添加定向人群新
 * Rap: http://rap2.alibaba-inc.com/repository/editor?id=2025&itf=41667
 */
const url: string = "/overnight/findCrowdInfo.json";
const method: string = "GET";
export {url, method};

export interface Req {
  productId?: number;
  type?: string;
  [k: string]: any;
}

export interface Res {
  data?: {
    list?: {
      bizNumber?: null;
      coverage?: number;
      crowdId?: number;
      crowdName?: string;
      custId?: null;
      expireTime?: string;
      fullStatus?: number;
      gmtCreate?: null;
      gmtModified?: null;
      id?: null;
      labelId?: null;
      memberId?: number;
      syncTime?: null;
      targetId?: null;
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
