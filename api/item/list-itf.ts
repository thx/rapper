/**
 * 本文件由 Pang 从 Rap 中自动生成，请勿修改
 * 接口名：获取单品宝贝
 * Rap: http://rap2.alibaba-inc.com/repository/editor?id=2025&itf=61006
 */
const url: string = "/item/list.json";
const method: string = "GET";
export {url, method};

export interface Req {
  productId?: number;
  campaignId?: number;
  categoryId?: number;
  title?: string;
  searchItemsType?: string;
  orderByFiled?: string;
  orderByDesc?: string;
  [k: string]: any;
}

export interface Res {
  data?: {
    count?: number;
    list?: {
      outItemDTO?: {
        bidCount?: number;
        categoryId?: string;
        extProperties?: {
          [k: string]: any;
        };
        id?: number;
        imgUrl?: string;
        linkUrl?: string;
        price?: number;
        quantity?: number;
        starts?: string;
        timingStart?: boolean;
        title?: string;
        [k: string]: any;
      };
      wordPackage?: {
        availableRegion?: string;
        availableStatus?: number;
        brandId?: number;
        brandName?: string;
        catePath?: string;
        cost?: number;
        count?: number;
        description?: string;
        itemId?: number;
        memberId?: number;
        minPrice?: number;
        packageType?: number;
        pv?: number;
        pvRelease?: number;
        recReason?: string;
        recTypeList?: string;
        reservePrice?: number;
        wordPackageId?: number;
        wordPackageName?: string;
        [k: string]: any;
      };
      allowSelect?: boolean;
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
