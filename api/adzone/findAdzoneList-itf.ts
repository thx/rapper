/**
 * 本文件由 Pang 从 Rap 中自动生成，请勿修改
 * 接口名：查找广告位列表
 * Rap: http://rap2.alibaba-inc.com/repository/editor?id=2025&itf=44939
 */
const url: string = "/adzone/findAdzoneList.json";
const method: string = "GET";
export {url, method};

export interface Req {
  info?: {
    ok?: boolean;
    [k: string]: any;
  };
  data?: {
    list?: {
      adzoneId?: number;
      adzoneName?: string;
      [k: string]: any;
    }[];
    [k: string]: any;
  };
  [k: string]: any;
}

export interface Res {
  [k: string]: any;
}
