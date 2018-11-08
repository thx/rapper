/**
 * 本文件由 Pang 从 Rap 中自动生成，请勿修改
 * 接口名：流量攻坚-获取选择词包分子汇总信息
 * Rap: http://rap2.alibaba-inc.com/repository/editor?id=2025&itf=45368
 */
const url: string = "/wordpackage/finDmoleculePackageInfo.json";
const method: string = "POST";
export {url, method};

export interface Req {
  brandId?: number;
  wordPackageId?: number;
  wordPackageName?: string;
  packageType?: number;
  bidRate?: number;
  campaignId?: string;
  campaignType?: string;
  adgroupId?: string;
  productId?: number;
  [k: string]: any;
}

export interface Res {
  data?: {
    result?: {
      brandId?: number;
      pCost?: null;
      pCtr?: null;
      pCvr?: null;
      pv?: null;
      rcmdBudget?: null;
      type?: number;
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
