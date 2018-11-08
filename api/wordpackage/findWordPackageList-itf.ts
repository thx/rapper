/**
 * 本文件由 Pang 从 Rap 中自动生成，请勿修改
 * 接口名：查询宝贝词
 * Rap: http://rap2.alibaba-inc.com/repository/editor?id=2025&itf=61771
 */
const url: string = "/wordpackage/findWordPackageList.json";
const method: string = "GET";
export {url, method};

export interface Req {
  productId?: number;
  itemIdList?: {
    [k: string]: any;
  }[];
  [k: string]: any;
}

export interface Res {
  data?: {
    wordPackages?: {
      availableRegion?: string;
      availableStatus?: number;
      brandId?: number;
      brandName?: string;
      cost?: number;
      count?: number;
      description?: string;
      memberId?: number;
      minPrice?: number;
      packageType?: number;
      pv?: number;
      pvRelease?: number;
      reservePrice?: number;
      tags?: {
        [k: string]: any;
      }[];
      wordPackageId?: number;
      wordPackageName?: string;
      itemId?: number;
      [k: string]: any;
    }[];
    [k: string]: any;
  };
  info?: {
    disableTime?: boolean;
    lockSla?: boolean;
    ok?: boolean;
    [k: string]: any;
  };
  [k: string]: any;
}
