/**
 * 本文件由 Pang 从 Rap 中自动生成，请勿修改
 * 接口名：获取单品宝贝类目条件
 * Rap: http://rap2.alibaba-inc.com/repository/editor?id=2025&itf=61773
 */
const url: string = "/item/catList.json";
const method: string = "GET";
export {url, method};

export interface Req {
  productId?: number;
  [k: string]: any;
}

export interface Res {
  data?: {
    list?: {
      id?: number;
      imgUrl?: string;
      name?: string;
      parentId?: number;
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
    redirectUrl?: null;
    unlockUrl?: null;
    [k: string]: any;
  };
  [k: string]: any;
}
