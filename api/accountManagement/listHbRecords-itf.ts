/**
 * 本文件由 Pang 从 Rap 中自动生成，请勿修改
 * 接口名：获取红包流水
 * Rap: http://rap2.alibaba-inc.com/repository/editor?id=2025&itf=42891
 */
const url: string = "/accountManagement/listHbRecords.json";
const method: string = "GET";
export {url, method};

export interface Req {
  productId?: number;
  startTime?: string;
  endTime?: string;
  finType?: string;
  page?: number;
  pageSize?: number;
  [k: string]: any;
}

export interface Res {
  data?: {
    count?: number;
    list?: {
      productId?: string;
      memberId?: null;
      facctId?: number;
      fundType?: string;
      amountFen?: string;
      balanceFen?: string;
      finType?: string;
      bizType?: null;
      comments?: string;
      facctID?: number;
      transtime?: string;
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
