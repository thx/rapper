/**
 * 本文件由 Pang 从 Rap 中自动生成，请勿修改
 * 接口名：获取推广计划草稿列表
 * Rap: http://rap2.alibaba-inc.com/repository/editor?id=2025&itf=44955
 */
const url: string = "/mooncampaign/findUnfinishedCampaignList.json";
const method: string = "POST";
export {url, method};

export interface Req {
  [k: string]: any;
}

export interface Res {
  data?: {
    list?: {
      campaign?: {
        advSettleStatus?: null;
        advertiserId?: null;
        basketId?: null;
        beginTime?: string;
        campSettleStatus?: null;
        campaignId?: number;
        campaignModel?: number;
        campaignName?: string;
        campaignType?: number;
        campaignXDate?: null;
        creator?: null;
        dayBudget?: number;
        endTime?: string;
        isLaunchEndTimeForever?: boolean;
        lifeCycle?: number;
        marketingPreferenceId?: null;
        marketingSceneId?: null;
        modifier?: null;
        speedType?: number;
        status?: number;
        topTime?: null;
        unSellVideoTheme?: null;
        [k: string]: any;
      };
      trans?: {
        adboardFilter?: null;
        campaignId?: null;
        campaignModel?: null;
        campaignName?: null;
        campaignType?: null;
        cpmScope?: null;
        frequency?: null;
        productId?: number;
        status?: null;
        transId?: number;
        transName?: null;
        [k: string]: any;
      }[];
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
