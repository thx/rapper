/**
 * 本文件由 Pang 从 Rap 中自动生成，请勿修改
 * 接口名：查询方案列表
 * Rap: http://rap2.alibaba-inc.com/repository/editor?id=2025&itf=63487
 */
const url: string = "/overnight/findSolutionList.json";
const method: string = "GET";
export {url, method};

export interface Req {
  productId?: number;
  name?: string;
  status?: number;
  page?: number;
  pageSize?: number;
  solutionIdList?: {
    [k: string]: any;
  }[];
  solutionStatusList?: {
    [k: string]: any;
  }[];
  [k: string]: any;
}

export interface Res {
  data?: {
    count?: number;
    list?: {
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
      lastDayDeductAmount?: number;
      lastDayDeductAmountZK?: number;
      memberId?: number;
      name?: string;
      releaseTime?: string;
      remainAmount?: number;
      remainZkAmount?: number;
      settleEndTime?: string;
      settlePv?: number;
      signPv?: number;
      solutionFreq?: string;
      solutionMode?: number;
      startTime?: string;
      status?: number;
      [k: string]: any;
    }[];
    [k: string]: any;
  };
  [k: string]: any;
}
