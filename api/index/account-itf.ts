/**
 * 本文件由 Pang 从 Rap 中自动生成，请勿修改
 * 接口名：查询账户
 * Rap: http://rap2.alibaba-inc.com/repository/editor?id=2025&itf=44967
 */
const url: string = "/index/account.json";
const method: string = "GET";
export {url, method};

export interface Req {
  [k: string]: any;
}

export interface Res {
  data?: {
    count?: number;
    list?: {
      accountCode?: null;
      accountName?: string;
      accountType?: number;
      amount?: null;
      balance?: string;
      bcode?: string;
      bizType?: null;
      comments?: null;
      facctID?: null;
      finType?: null;
      fundType?: null;
      memberID?: null;
      operateTime?: null;
      notSufficientBalance?: boolean;
      basketId?: null;
      yesterdayDeduct?: string;
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
