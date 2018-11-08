/**
 * 本文件由 Pang 从 Rap 中自动生成，请勿修改
 * 接口名：更新创意定向
 * Rap: http://rap2.alibaba-inc.com/repository/editor?id=2025&itf=44930
 */
const url: string = "/direct/updateCreativeDirect.json";
const method: string = "POST";
export {url, method};

export interface Req {
  productId?: string;
  campaignId?: string;
  adgroupId?: string;
  creativeId?: string;
  crowdstr?: string;
  targetLabelVOListStr?: string;
  targetType?: number;
  [k: string]: any;
}

export interface Res {
  data?: {
    id?: number;
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
