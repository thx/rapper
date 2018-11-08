/**
 * 本文件由 Pang 从 Rap 中自动生成，请勿修改
 * 接口名：余额提醒发送短信验证码
 * Rap: http://rap2.alibaba-inc.com/repository/editor?id=2025&itf=44964
 */
const url: string = "/remind/sendMobileCode.json";
const method: string = "POST";
export {url, method};

export interface Req {
  [k: string]: any;
}

export interface Res {
  data?: {
    isSuccess?: boolean;
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
