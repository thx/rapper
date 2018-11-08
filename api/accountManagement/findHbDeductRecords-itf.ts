/**
 * 本文件由 Pang 从 Rap 中自动生成，请勿修改
 * 接口名：获取红包扣款计划
 * Rap: http://rap2.alibaba-inc.com/repository/editor?id=2025&itf=42634
 */
const url: string = "/accountManagement/findHbDeductRecords.json";
const method: string = "GET";
export {url, method};

export interface Req {
  contractId?: number;
  [k: string]: any;
}

export interface Res {
  data?: {
    list?: {
      dedeuctTime?: string;
      amount?: string;
      discountAmount?: string;
      [k: string]: any;
    }[];
    [k: string]: any;
  };
  info?: {
    ok?: boolean;
    errorCode?: string;
    [k: string]: any;
  };
  [k: string]: any;
}
