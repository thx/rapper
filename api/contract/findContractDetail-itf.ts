/**
 * 本文件由 Pang 从 Rap 中自动生成，请勿修改
 * 接口名：获取合同详细信息
 * Rap: http://rap2.alibaba-inc.com/repository/editor?id=2025&itf=64154
 */
const url: string = "/contract/findContractDetail.json";
const method: string = "GET";
export {url, method};

export interface Req {
  productId?: number;
  contractId?: number;
  [k: string]: any;
}

export interface Res {
  data?: {
    list?: {
      alimamaCompany?: string;
      contractFee?: string;
      customerAddress?: string;
      customerBrand?: string;
      customerCompany?: string;
      customerEmail?: string;
      customerName?: string;
      customerShopName?: string;
      customerTel?: string;
      endTime?: string;
      name?: string;
      packagenames?: string;
      payedFee?: string;
      payedTime?: string;
      productId?: null;
      pv?: string;
      solutionId?: null;
      startTime?: string;
      totalmount?: string;
      validPeriod?: string;
      contractTotalFee?: number;
      [k: string]: any;
    }[];
    count?: number;
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
