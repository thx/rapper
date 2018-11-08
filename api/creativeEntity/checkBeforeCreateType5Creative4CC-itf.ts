/**
 * 本文件由 Pang 从 Rap 中自动生成，请勿修改
 * 接口名：校验是否可以创建品牌繁星智能创意(for 创意中心前端)
 * Rap: http://rap2.alibaba-inc.com/repository/editor?id=2025&itf=51214
 */
const url: string = "/creativeEntity/checkBeforeCreateType5Creative4CC.json";
const method: string = "GET";
export {url, method};

export interface Req {
  transId?: number;
  userId?: number;
  productId?: number;
  callback?: string;
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
    message?: string;
    ok?: boolean;
    unlockUrl?: null;
    [k: string]: any;
  };
  [k: string]: any;
}
