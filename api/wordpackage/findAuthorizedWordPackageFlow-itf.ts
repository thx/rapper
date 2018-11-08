/**
 * 本文件由 Pang 从 Rap 中自动生成，请勿修改
 * 接口名：竞争缓解流量包列表
 * Rap: http://rap2.alibaba-inc.com/repository/editor?id=2025&itf=60957
 */
const url: string = "/wordpackage/findAuthorizedWordPackageFlow.json";
const method: string = "GET";
export {url, method};

export interface Req {
  [k: string]: any;
}

export interface Res {
  data?: {
    count?: number;
    package?: {
      brandPackages?: {
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
        tags?: {
          recReason?: string;
          recType?: string;
          [k: string]: any;
        }[];
        [k: string]: any;
      }[];
      userDefinedPackages?: {
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
        tags?: {
          recReason?: string;
          recType?: string;
          [k: string]: any;
        }[];
        [k: string]: any;
      }[];
      releasePackages?: {
        bidPrice?: null;
        brandId?: number;
        brandName?: string;
        catePath?: null;
        cost?: number;
        count?: number;
        description?: string;
        isExclusive?: boolean;
        mainCategory?: null;
        memberId?: number;
        minPrice?: number;
        packageChangeObj?: null;
        packageType?: number;
        pv?: number;
        reservePrice?: number;
        tags?: {
          [k: string]: any;
        }[];
        wordPackageId?: number;
        wordPackageName?: string;
        availableStatus?: number;
        availableRegion?: string;
        pvRelease?: number;
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
