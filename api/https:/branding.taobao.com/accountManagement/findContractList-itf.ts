/**
 * 本文件由 Pang 从 Rap 中自动生成，请勿修改
 * 接口名：查询合同列表
 * Rap: http://rap2.alibaba-inc.com/repository/editor?id=2025&itf=63554
 */
const url: string = "https://branding.taobao.com/accountManagement/findContractList.json";
const method: string = "GET";
export {url, method};

export interface Req {
  productId?: number;
  [k: string]: any;
}

export interface Res {
  data?: {
    count?: number;
    list?: {
      amount?: number;
      discountAmount?: number;
      id?: number;
      memberId?: number;
      name?: string;
      productId?: number;
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
