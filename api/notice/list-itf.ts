/**
 * 本文件由 Pang 从 Rap 中自动生成，请勿修改
 * 接口名：展示用户已经确认协议状态
 * Rap: http://rap2.alibaba-inc.com/repository/editor?id=2025&itf=44965
 */
const url: string = "/notice/list.json";
const method: string = "GET";
export {url, method};

export interface Req {
  [k: string]: any;
}

export interface Res {
  data?: {
    single_day_sign?: boolean;
    info?: number;
    home_new_hand?: boolean;
    newbie_plan_create_word_package?: boolean;
    newbie_plan_create?: boolean;
    word_package_censored?: boolean;
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
