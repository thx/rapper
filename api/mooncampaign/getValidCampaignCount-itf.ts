/**
 * 本文件由 Pang 从 Rap 中自动生成，请勿修改
 * 接口名：获取有效推广计划个数
 * Rap: http://rap2.alibaba-inc.com/repository/editor?id=2025&itf=44947
 */
const url: string = "/mooncampaign/getValidCampaignCount.json";
const method: string = "GET";
export {url, method};

export interface Req {
  [k: string]: any;
}

export interface Res {
  data?: {
    count?: number;
    [k: string]: any;
  };
  info?: {
    disableTime?: boolean;
    errorCode?: string;
    lockSla?: boolean;
    message?: string;
    ok?: boolean;
    unlockUrl?: string;
    [k: string]: any;
  };
  [k: string]: any;
}
