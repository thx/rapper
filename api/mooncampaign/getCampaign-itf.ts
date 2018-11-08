/**
 * 本文件由 Pang 从 Rap 中自动生成，请勿修改
 * 接口名：获取推广计划信息
 * Rap: http://rap2.alibaba-inc.com/repository/editor?id=2025&itf=44951
 */
const url: string = "/mooncampaign/getCampaign.json";
const method: string = "GET";
export {url, method};

export interface Req {
  [k: string]: any;
}

export interface Res {
  data?: {
    campaign?: {
      areaIdList?: {
        [k: string]: any;
      }[];
      basketId?: null;
      contractId?: number;
      contractName?: string;
      contractStartTime?: string;
      contractEndTime?: string;
      beginTime?: string;
      campaignId?: number;
      campaignModel?: number;
      campaignName?: string;
      campaignType?: number;
      dayBudget?: number;
      endTime?: string;
      isLaunchEndTimeForever?: boolean;
      lifeCycle?: number;
      marketingPreferenceId?: null;
      marketingSceneId?: null;
      speedType?: number;
      status?: number;
      timeTargetList?: {
        dayOfWeek?: string;
        timeSpanList?: {
          [k: string]: any;
        }[];
        [k: string]: any;
      }[];
      hasPriceFlag?: boolean;
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
