/**
 * 本文件由 Pang 从 Rap 中自动生成，请勿修改
 * 接口名：获取系统消息
 * Rap: http://rap2.alibaba-inc.com/repository/editor?id=2025&itf=44970
 */
const url: string = "/message/listMessage.json";
const method: string = "GET";
export {url, method};

export interface Req {
  [k: string]: any;
}

export interface Res {
  data?: {
    allCount?: number;
    cpmLetterList?: {
      content?: null;
      createTime?: string;
      custName?: string;
      id?: number;
      isIgnore?: number;
      status?: number;
      subject?: string;
      type?: number;
      unIgnoreCount?: null;
      unReadCount?: null;
      [k: string]: any;
    }[];
    currentCount?: number;
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
