/**
 * 本文件由 Pang 从 Rap 中自动生成，请勿修改
 * 接口名：分时段分地域-----获取计划降价幅度
 * Rap: http://rap2.alibaba-inc.com/repository/editor?id=2025&itf=45230
 */
const url: string = "/mooncampaign/getCampaignPriceReduction.json";
const method: string = "GET";
export {url, method};

export interface Req {
  status?: number;
  productId?: number;
  campaignType?: number;
  campaignId?: number;
  timeTargetList?: string;
  areaIdList?: string;
  [k: string]: any;
}

export interface Res {
  data?: {
    data?: {
      campaignId?: string;
      selectReduction?: string;
      allSelectReduction?: string;
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
