/**
 * 本文件由 Pang 从 Rap 中自动生成，请勿修改
 * 接口名：获取模板使用场景的用户筛选项列表
 * Rap: http://rap2.alibaba-inc.com/repository/editor?id=2025&itf=44936
 */
const url: string = "/template/findTemplateBidScene.json";
const method: string = "GET";
export {url, method};

export interface Req {
  [k: string]: any;
}

export interface Res {
  data?: {
    templateBidScenes?: {
      "2"?: string;
      "4"?: string;
      "8"?: string;
      "64"?: string;
      "128"?: string;
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
