/**
 * 本文件由 Pang 从 Rap 中自动生成，请勿修改
 * 接口名：批量添加宝贝单元
 * Rap: http://rap2.alibaba-inc.com/repository/editor?id=2025&itf=61767
 */
const url: string = "/adgroup/batchCreateAdgroup.json";
const method: string = "GET";
export {url, method};

export interface Req {
  productId?: number;
  trans?: string;
  [k: string]: any;
}

export interface Res {
  data?: {
    transIds?: {
      [k: string]: any;
    }[];
    [k: string]: any;
  };
  info?: {
    disableTime?: boolean;
    lockSla?: boolean;
    ok?: boolean;
    message?: string;
    [k: string]: any;
  };
  [k: string]: any;
}
