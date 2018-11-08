/**
 * 本文件由 Pang 从 Rap 中自动生成，请勿修改
 * 接口名：获取创意定向
 * Rap: http://rap2.alibaba-inc.com/repository/editor?id=2025&itf=44932
 */
const url: string = "/direct/getCreativeDirect.json";
const method: string = "GET";
export {url, method};

export interface Req {
  [k: string]: any;
}

export interface Res {
  data?: {
    crowds?: {
      crowdId?: number;
      crowdName?: string;
      enableTime?: string;
      coverage?: string;
      id?: number;
      targetLabels?: {
        labelId?: number;
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
    message?: null;
    ok?: boolean;
    unlockUrl?: null;
    [k: string]: any;
  };
  [k: string]: any;
}
