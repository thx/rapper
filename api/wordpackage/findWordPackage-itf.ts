/**
 * 本文件由 Pang 从 Rap 中自动生成，请勿修改
 * 接口名：查找词包
 * Rap: http://rap2.alibaba-inc.com/repository/editor?id=2025&itf=44984
 */
const url: string = "/wordpackage/findWordPackage.json";
const method: string = "GET";
export {url, method};

export interface Req {
  [k: string]: any;
}

export interface Res {
  data?: {
    count?: number;
    list?: {
      adgroupName?: string;
      bidPrice?: number;
      campaignId?: number;
      id?: number;
      keyword?: null;
      transId?: number;
      wordPackageId?: number;
      wordPackageName?: string;
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
