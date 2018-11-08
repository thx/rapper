/**
 * 本文件由 Pang 从 Rap 中自动生成，请勿修改
 * 接口名：获取创意属性
 * Rap: http://rap2.alibaba-inc.com/repository/editor?id=2025&itf=44926
 */
const url: string = "/board/findCreativeAttr.json";
const method: string = "GET";
export {url, method};

export interface Req {
  [k: string]: any;
}

export interface Res {
  data?: {
    category?: {
      catId?: number;
      catName?: string;
      catPathName?: string;
      [k: string]: any;
    };
    attributes?: {
      attrId?: string;
      attrName?: string;
      type?: number;
      required?: boolean;
      hint?: string;
      values?: {
        valueId?: number;
        valueName?: string;
        selected?: boolean;
        [k: string]: any;
      }[];
      [k: string]: any;
    }[];
    [k: string]: any;
  };
  info?: {
    disableTime?: boolean;
    errorCode?: null;
    lockSla?: boolean;
    message?: string;
    ok?: boolean;
    unlockUrl?: null;
    [k: string]: any;
  };
  [k: string]: any;
}
