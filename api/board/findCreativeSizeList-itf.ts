/**
 * 本文件由 Pang 从 Rap 中自动生成，请勿修改
 * 接口名：获取创意模板尺寸列表
 * Rap: http://rap2.alibaba-inc.com/repository/editor?id=2025&itf=44923
 */
const url: string = "/board/findCreativeSizeList.json";
const method: string = "GET";
export {url, method};

export interface Req {
  [k: string]: any;
}

export interface Res {
  data?: {
    templateSizeList?: {
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
