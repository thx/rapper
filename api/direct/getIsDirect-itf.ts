/**
 * 本文件由 Pang 从 Rap 中自动生成，请勿修改
 * 接口名：创意是否定向
 * Rap: http://rap2.alibaba-inc.com/repository/editor?id=2025&itf=44933
 */
const url: string = "/direct/getIsDirect.json";
const method: string = "GET";
export {url, method};

export interface Req {
  [k: string]: any;
}

export interface Res {
  data?: {
    binds?: {
      campaignId?: number;
      adgroupId?: number;
      creativeId?: number;
      hasCrowd?: boolean;
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
