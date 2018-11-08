/**
 * 本文件由 Pang 从 Rap 中自动生成，请勿修改
 * 接口名：时段地域
 * Rap: http://rap2.alibaba-inc.com/repository/editor?id=2025&itf=45248
 */
const url: string = "/wordpackage/getPackageReductionSign.json";
const method: string = "POST";
export {url, method};

export interface Req {
  productId?: number;
  query?: string;
  [k: string]: any;
}

export interface Res {
  data?: {
    count?: number;
    list?: {
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
