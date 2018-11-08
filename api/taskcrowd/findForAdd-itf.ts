/**
 * 本文件由 Pang 从 Rap 中自动生成，请勿修改
 * 接口名：添加品牌人群
 * Rap: http://rap2.alibaba-inc.com/repository/editor?id=2025&itf=41629
 */
const url: string = "/taskcrowd/findForAdd.json";
const method: string = "GET";
export {url, method};

export interface Req {
  taskId?: number;
  dmpCrowdName?: string;
  [k: string]: any;
}

export interface Res {
  data?: {
    count?: number;
    list?: {
      dmpCrowdDesc?: null;
      dmpCrowdId?: number;
      dmpCrowdName?: string;
      dmpCrowdNum?: number;
      expireTime?: string;
      fullStatus?: number;
      hasRefCreative?: null;
      isBinding?: boolean;
      syncTime?: string;
      taskCrowdId?: null;
      taskId?: null;
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
