/**
 * 本文件由 Pang 从 Rap 中自动生成，请勿修改
 * 接口名：提交品牌繁星创意前检查是否能够创建
 * Rap: http://rap2.alibaba-inc.com/repository/editor?id=2025&itf=51032
 */
const url: string = "/creativeEntity/checkBeforeCreateType5Creative.json";
const method: string = "GET";
export {url, method};

export interface Req {
  userId?: string;
  transId?: string;
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
