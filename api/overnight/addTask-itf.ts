/**
 * 本文件由 Pang 从 Rap 中自动生成，请勿修改
 * 接口名：新建任务
 * Rap: http://rap2.alibaba-inc.com/repository/editor?id=2025&itf=63557
 */
const url: string = "/overnight/addTask.json";
const method: string = "GET";
export {url, method};

export interface Req {
  productId?: number;
  taskDTO?: {
    solutionId?: number;
    type?: number;
    name?: string;
    freq?: number;
    amountDayMap?: string;
    startTime?: string;
    endTime?: string;
    amount?: number;
    signPV?: number;
    taskAttributeDTO?: {
      contentFormat?: {
        [k: string]: any;
      }[];
      crowdList?: {
        targetId?: number;
        labelId?: number;
        crowdId?: string;
        crowdName?: string;
        [k: string]: any;
      }[];
      distance?: number;
      storeList?: {
        [k: string]: any;
      }[];
      adzoneInfoList?: {
        channelId?: number;
        adzoneId?: number;
        amount?: number;
        [k: string]: any;
      }[];
      [k: string]: any;
    };
    discountAmount?: number;
    [k: string]: any;
  };
  [k: string]: any;
}

export interface Res {
  data?: {
    isWarn?: null;
    id?: number;
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
