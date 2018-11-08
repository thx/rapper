/**
 * 本文件由 Pang 从 Rap 中自动生成，请勿修改
 * 接口名：smartmatch开关
 * Rap: http://rap2.alibaba-inc.com/repository/editor?id=2025&itf=46665
 */
const url: string = "/mooncampaign/openCampaignSmartMatch.json";
const method: string = "POST";
export {url, method};

export interface Req {
  productId?: string;
  campaignId?: string;
  isSmartMatch?: number;
  [k: string]: any;
}

export interface Res {
  data?: {
    [k: string]: any;
  };
  info?: {
    ok?: boolean;
    [k: string]: any;
  };
  [k: string]: any;
}
