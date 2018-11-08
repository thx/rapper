/**
 * 本文件由 Pang 从 Rap 中自动生成，请勿修改
 * 接口名：通过content id获取 content url
 * Rap: http://rap2.alibaba-inc.com/repository/editor?id=2025&itf=46452
 */
const url: string = "https://branding.taobao.com/board/getContentUrlById.json";
const method: string = "GET";
export {url, method};

export interface Req {
  contentId?: number;
  callback?: string;
  [k: string]: any;
}

export interface Res {
  data?: {
    contentUrl?: string;
    contentUserName?: string;
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
