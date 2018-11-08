/**
 * 本文件由 Pang 从 Rap 中自动生成，请勿修改
 * 接口名：分时段分地域——获取预计下降百分数值及地域、时段折扣
 * Rap: http://rap2.alibaba-inc.com/repository/editor?id=2025&itf=45982
 */
const url: string = "/mooncampaign/getCampaignPriceReductionAndDiscount.json";
const method: string = "GET";
export {url, method};

export interface Req {
  status?: number;
  productId?: number;
  campaignType?: number;
  campaignId?: string;
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
      areaDiscountList?: {
        areaId?: string;
        discount?: number;
        [k: string]: any;
      }[];
      timeDiscountList?: {
        timeType?: string;
        discount?: number;
        [k: string]: any;
      }[];
      [k: string]: any;
    };
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
