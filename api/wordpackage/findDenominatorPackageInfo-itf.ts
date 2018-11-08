/**
 * 本文件由 Pang 从 Rap 中自动生成，请勿修改
 * 接口名：流量攻坚-获取pv等汇总分母信息
 * Rap: http://rap2.alibaba-inc.com/repository/editor?id=2025&itf=45367
 */
const url: string = "/wordpackage/findDenominatorPackageInfo.json";
const method: string = "POST";
export {url, method};

export interface Req {
  productId?: number;
  [k: string]: any;
}

export interface Res {
  data?: {
    result?: {
      brandId?: null;
      pCost?: number;
      pCtr?: number;
      pCvr?: null;
      pv?: number;
      rcmdBudget?: number;
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
