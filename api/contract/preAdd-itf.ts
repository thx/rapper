/**
 * 本文件由 Pang 从 Rap 中自动生成，请勿修改
 * 接口名：签订合同表单查询基础信息
 * Rap: http://rap2.alibaba-inc.com/repository/editor?id=2025&itf=63573
 */
const url: string = "/contract/preAdd.json";
const method: string = "GET";
export {url, method};

export interface Req {
  productId?: number;
  solutionId?: number;
  [k: string]: any;
}

export interface Res {
  data?: {
    _payedTime?: string;
    solution?: {
      amount?: number;
      autoZk?: null;
      bizNumber?: null;
      brandId?: null;
      chargingModelList?: {
        [k: string]: any;
      }[];
      custId?: null;
      delayReleaseDay?: null;
      discountAmount?: number;
      endTime?: string;
      gmtCreate?: string;
      gmtModified?: string;
      id?: number;
      lastDayDeductAmount?: null;
      lastDayDeductAmountZK?: null;
      memberId?: number;
      name?: string;
      offset?: number;
      page?: number;
      pageSize?: number;
      productId?: number;
      productLineId?: number;
      releaseTime?: string;
      remainAmount?: null;
      remainZkAmount?: null;
      settleAmount?: number;
      settleEndTime?: string;
      settlePv?: null;
      signPv?: number;
      solutionFreq?: null;
      solutionIdList?: null;
      solutionMode?: number;
      solutionStatusList?: null;
      startTime?: string;
      status?: number;
      totalItem?: null;
      [k: string]: any;
    };
    _alimamaCompany?: string;
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
