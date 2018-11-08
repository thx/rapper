/**
 * 本文件由 Pang 从 Rap 中自动生成，请勿修改
 * 接口名：推广单元创意不足提醒
 * Rap: http://rap2.alibaba-inc.com/repository/editor?id=2025&itf=41570
 */
const url: string = "/adgroup/defectAdgroupList.json";
const method: string = "GET";
export {url, method};

export interface Req {
  [k: string]: any;
}

export interface Res {
  data?: {
    count?: number;
    list?: {
      adGroupId?: number;
      adGroupNoEnough?: boolean;
      adGroupReasonDesc?: string;
      productId?: number;
      type?: null;
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
