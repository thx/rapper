/**
 * 本文件由 Pang 从 Rap 中自动生成，请勿修改
 * 接口名：获取模板的类目
 * Rap: http://rap2.alibaba-inc.com/repository/editor?id=2025&itf=44937
 */
const url: string = "/template/findTemplateCategories.json";
const method: string = "GET";
export {url, method};

export interface Req {
  [k: string]: any;
}

export interface Res {
  data?: {
    map?: {
      "1"?: string;
      "2"?: string;
      "3"?: string;
      "4"?: string;
      "6"?: string;
      "7"?: string;
      "8"?: string;
      "9"?: string;
      "10"?: string;
      "11"?: string;
      "12"?: string;
      "14"?: string;
      "15"?: string;
      "16"?: string;
      "17"?: string;
      "18"?: string;
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
