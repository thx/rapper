/**
 * 本文件由 Pang 从 Rap 中自动生成，请勿修改
 * 接口名：获取单元下所有的定向人群
 * Rap: http://rap2.alibaba-inc.com/repository/editor?id=2025&itf=60198
 */
const url: string = "/direct/getCrowdList.json";
const method: string = "GET";
export {url, method};

export interface Req {
  campaignId?: number;
  adgroupId?: number;
  productId?: number;
  [k: string]: any;
}

export interface Res {
  data?: {
    crowdList?: {
      crowdId?: number;
      crowdName?: string;
      adgroupId?: number;
      adgroupName?: string;
      creativeList?: {
        creativeId?: number;
        creativeName?: string;
        [k: string]: any;
      }[];
      campaignId?: number;
      [k: string]: any;
    }[];
    count?: number;
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
