/**
 * 本文件由 Pang 从 Rap 中自动生成，请勿修改
 * 接口名：计划创意不足提醒
 * Rap: http://rap2.alibaba-inc.com/repository/editor?id=2025&itf=41380
 */
const url: string = "/mooncampaign/defectCampaignList.json";
const method: string = "GET";
export {url, method};

export interface Req {
  计划ID集合?: string;
  产品ID?: number;
  [k: string]: any;
}

export interface Res {
  data?: {
    count?: number;
    list?: {
      adGroupId?: null;
      adGroupNoEnough?: null;
      adGroupReasonDesc?: null;
      campaignId?: number;
      campaignNoEnough?: boolean;
      campaignReasonDesc?: string;
      productId?: number;
      type?: null;
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
