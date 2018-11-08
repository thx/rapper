/**
 * 本文件由 Pang 从 Rap 中自动生成，请勿修改
 * 接口名：分时分地域——获取计划列表降价标签及对应折扣
 * Rap: http://rap2.alibaba-inc.com/repository/editor?id=2025&itf=45981
 */
const url: string = "/mooncampaign/getCampaignListReductionSign.json";
const method: string = "GET";
export {url, method};

export interface Req {
  pageSize?: string;
  status?: number;
  campaignType?: number;
  productId?: number;
  offset?: string;
  campaignName?: string;
  [k: string]: any;
}

export interface Res {
  data?: {
    count?: number;
    list?: {
      campaignId?: number;
      allSelectReduction?: string;
      discount?: number;
      hasPriceFlag?: boolean;
      [k: string]: any;
    }[];
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
