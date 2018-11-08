/**
 * 本文件由 Pang 从 Rap 中自动生成，请勿修改
 * 接口名：横向管理单个和批量解绑创意
 * Rap: http://rap2.alibaba-inc.com/repository/editor?id=2025&itf=44928
 */
const url: string = "/adgroup/bind/unbindAdboard.json";
const method: string = "POST";
export {url, method};

export interface Req {
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
