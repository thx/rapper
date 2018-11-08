/**
 * 本文件由 Pang 从 Rap 中自动生成，请勿修改
 * 接口名：查询方案详情
 * Rap: http://rap2.alibaba-inc.com/repository/editor?id=2025&itf=63495
 */
const url: string = "/overnight/getSolution.json";
const method: string = "GET";
export {url, method};

export interface Req {
  productId?: number;
  id?: number;
  [k: string]: any;
}

export interface Res {
  data?: {
    solution?: {
      amount?: number;
      autoZk?: number;
      bizNumber?: number;
      brandId?: string;
      custId?: number;
      discountAmount?: number;
      endTime?: string;
      gmtCreate?: string;
      gmtModified?: string;
      id?: number;
      lastDayDeductAmount?: string;
      lastDayDeductAmountZK?: string;
      memberId?: number;
      name?: string;
      releaseTime?: string;
      remainAmount?: number;
      remainZkAmount?: number;
      settleEndTime?: string;
      settlePv?: string;
      signPv?: string;
      solutionFreq?: string;
      solutionMode?: string;
      startTime?: string;
      status?: string;
      [k: string]: any;
    };
    [k: string]: any;
  };
  info?: {
    ok?: boolean;
    disableTime?: boolean;
    errorCode?: string;
    lockSla?: boolean;
    message?: string;
    unlockUrl?: string;
    [k: string]: any;
  };
  [k: string]: any;
}
