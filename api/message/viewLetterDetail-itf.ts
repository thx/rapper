/**
 * 本文件由 Pang 从 Rap 中自动生成，请勿修改
 * 接口名：查看站内信
 * Rap: http://rap2.alibaba-inc.com/repository/editor?id=2025&itf=44973
 */
const url: string = "/message/viewLetterDetail.json";
const method: string = "GET";
export {url, method};

export interface Req {
  [k: string]: any;
}

export interface Res {
  data?: {
    letterDetail?: {
      content?: string;
      createTime?: string;
      endTime?: string;
      extendProperties?: null;
      id?: number;
      isNew?: null;
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
    };
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
