/**
 * 本文件由 Pang 从 Rap 中自动生成，请勿修改
 * 接口名：获取现有红包信息
 * Rap: http://rap2.alibaba-inc.com/repository/editor?id=2025&itf=42630
 */
const url: string = "/accountManagement/findHbInfo.json";
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
      accountComment?: string;
      availableBalance?: number;
      beginTime?: string;
      endTime?: string;
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
  beginTime?: string;
  endTime?: string;
  [k: string]: any;
}
