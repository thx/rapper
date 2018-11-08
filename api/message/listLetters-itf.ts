/**
 * 本文件由 Pang 从 Rap 中自动生成，请勿修改
 * 接口名：获取站内信
 * Rap: http://rap2.alibaba-inc.com/repository/editor?id=2025&itf=44972
 */
const url: string = "/message/listLetters.json";
const method: string = "POST";
export {url, method};

export interface Req {
  [k: string]: any;
}

export interface Res {
  data?: {
    allCount?: number;
    stationLetterList?: {
      content?: null;
      createTime?: string;
      endTime?: string;
      extendProperties?: null;
      id?: number;
      isNew?: number;
      isTop?: number;
      letterType?: null;
      pageSize?: number;
      readStatus?: number;
      sendType?: number;
      startTime?: null;
      status?: number;
      subject?: string;
      toPage?: number;
      topAvailDate?: null;
      updateTime?: string;
      [k: string]: any;
    }[];
    unReadCount?: number;
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
