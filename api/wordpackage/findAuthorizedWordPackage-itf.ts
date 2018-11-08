/**
 * 本文件由 Pang 从 Rap 中自动生成，请勿修改
 * 接口名：查找词包
 * Rap: http://rap2.alibaba-inc.com/repository/editor?id=2025&itf=44957
 */
const url: string = "/wordpackage/findAuthorizedWordPackage.json";
const method: string = "GET";
export {url, method};

export interface Req {
  [k: string]: any;
}

export interface Res {
  data?: {
    count?: number;
    list?: {
      bidPrice?: null;
      brandId?: number;
      brandName?: string;
      catePath?: string;
      cost?: number;
      count?: number;
      description?: string;
      mainCategory?: null;
      minPrice?: number;
      packageType?: number;
      reservePrice?: number;
      pv?: number;
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
       }[];
        wordPackageId?: number;
        wordPackageName?: string;
        [k: string]: any;
      }[];
      userDefinedPackages?: {
        [k: string]: any;
      }[];
      [k: string]: any;
    };
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
