/**
 * 本文件由 Pang 从 Rap 中自动生成，请勿修改
 * 接口名：分时分地域----获取呼吸灯
 * Rap: http://rap2.alibaba-inc.com/repository/editor?id=2025&itf=46107
 */
const url: string = "/mooncampaign/getCampaignBreatheBtn.json";
const method: string = "GET";
export {url, method};

export interface Req {
  campaignId?: string;
  [k: string]: any;
}

export interface Res {
  data?: {
    hasPriceFlag?: boolean;
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
