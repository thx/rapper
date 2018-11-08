/**
 * 本文件由 Pang 从 Rap 中自动生成，请勿修改
 * 接口名：品牌繁星获取预览实体和素材
 * Rap: http://rap2.alibaba-inc.com/repository/editor?id=2025&itf=51203
 */
const url: string = "/creativeEntity/getBlindCreativePreviewInfo.json";
const method: string = "GET";
export {url, method};

export interface Req {
  userId?: number;
  transId?: number;
  productId?: string;
  callback?: string;
  [k: string]: any;
}

export interface Res {
  data?: {
    blindCreativePreviewInfoResult?: {
      memberId?: number;
      resultList?: {
        materialGroupList?: {
          auditStatus?: number;
          auditTime?: string;
          deliveryId?: null;
          gmtCreate?: string;
          gmtModified?: string;
          groupType?: number;
          id?: number;
          itemId?: number;
          materialGroupExtendList?: {
            [k: string]: any;
          }[];
          materialList?: {
            auditStatus?: number;
            auditTime?: string;
            blockReasonDTOs?: null;
            content?: string;
            entityType?: null;
            expireTime?: null;
            gmtCreate?: string;
            gmtModified?: string;
            id?: number;
            itemId?: number;
            memberId?: number;
            productId?: number;
            promoteMaterialId?: null;
            properties?: {
              [k: string]: any;
            };
            shopId?: number;
            source?: number;
            type?: number;
            [k: string]: any;
          }[];
          mediaType?: null;
          memberId?: number;
          name?: null;
          onlineStatus?: number;
          productId?: number;
          properties?: {
            [k: string]: any;
          };
          shopId?: number;
          size?: null;
          [k: string]: any;
        }[];
        pkgId?: number;
        query?: string;
        [k: string]: any;
      }[];
      shopId?: number;
      [k: string]: any;
    };
    params?: {
      memberId?: number;
      pkgIDList?: {
        [k: string]: any;
      }[];
      productId?: number;
      shopId?: number;
      transId?: number;
      userId?: number;
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
