/**
 * 本文件由 Pang 从 Rap 中自动生成，请勿修改
 * 接口名：根据创意Id列表回收创意
 * Rap: http://rap2.alibaba-inc.com/repository/editor?id=2025&itf=44921
 */
const url: string = "/board/recycleAdboardByIdList.json";
const method: string = "POST";
export {url, method};

export interface Req {
  [k: string]: any;
}

export interface Res {
  data?: {
    list?: {
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
