/**
 * 本文件由 Pang 从 Rap 中自动生成，请勿修改
 * 接口名：记录已查看可竞争缓解流量包
 * Rap: http://rap2.alibaba-inc.com/repository/editor?id=2025&itf=60958
 */
const url: string = "/advertiserTool/checkWordReleaseRemind.json";
const method: string = "GET";
export {url, method};

export interface Req {
  productId?: number;
  [k: string]: any;
}

export interface Res {
  data?: {
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
