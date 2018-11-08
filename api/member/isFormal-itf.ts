/**
 * 本文件由 Pang 从 Rap 中自动生成，请勿修改
 * 接口名：是否正式用户
 * Rap: http://rap2.alibaba-inc.com/repository/editor?id=2025&itf=44969
 */
const url: string = "/member/isFormal.json";
const method: string = "GET";
export {url, method};

export interface Req {
  [k: string]: any;
}

export interface Res {
  data?: {
    isFormal?: boolean;
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
