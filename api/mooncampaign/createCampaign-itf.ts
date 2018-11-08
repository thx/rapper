/**
 * 本文件由 Pang 从 Rap 中自动生成，请勿修改
 * 接口名：创建推广计划
 * Rap: http://rap2.alibaba-inc.com/repository/editor?id=2025&itf=44946
 */
const url: string = "/mooncampaign/createCampaign.json";
const method: string = "POST";
export {url, method};

export interface Req {
  campaignType?: number;
  speedType?: string;
  campaignModel?: number;
  campaignName?: string;
  beginTime?: string;
  dayBudget?: string;
  isLaunchEndTimeForever?: boolean;
  contractId?: number;
  contractStartTime?: string;
  contractEndTime?: string;
  contractName?: string;
  productId?: number;
  [k: string]: any;
}

export interface Res {
  data?: {
    campaignId?: number;
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
