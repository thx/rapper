/**
 * 本文件由 Pang 从 Rap 中自动生成，请勿修改
 * 接口名：获得广告主计划提醒设置
 * Rap: http://rap2.alibaba-inc.com/repository/editor?id=2025&itf=44960
 */
const url: string = "/remind/getCampaignBudgetRemindSetting.json";
const method: string = "GET";
export {url, method};

export interface Req {
  [k: string]: any;
}

export interface Res {
  data?: {
    campaignBudgetRemindSetting?: {
      aliWangwang?: string;
      campaignId?: number;
      memberId?: number;
      mobile?: null;
      productLineId?: number;
      remindHour?: number;
      remindMinValue?: number;
      remindType?: number;
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
