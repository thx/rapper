/**
 * 本文件由 Pang 从 Rap 中自动生成，请勿修改
 * 接口名：通过关键词查询词包
 * Rap: http://rap2.alibaba-inc.com/repository/editor?id=2025&itf=44981
 */
const url: string = "/wordpackage/findPackageByWord.json";
const method: string = "GET";
export {url, method};

export interface Req {
  [k: string]: any;
}

export interface Res {
  data?: {
    count?: number;
    list?: {
      insidePcDiscount?: null;
      insideWLDiscount?: null;
      minPrice?: null;
      outsideUCDiscount?: null;
      packageDiscount?: null;
      packageId?: null;
      packageName?: string;
      word?: string;
      wordId?: null;
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
