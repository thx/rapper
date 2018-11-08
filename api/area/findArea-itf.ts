/**
 * 本文件由 Pang 从 Rap 中自动生成，请勿修改
 * 接口名：城市信息查询
 * Rap: http://rap2.alibaba-inc.com/repository/editor?id=2025&itf=45588
 */
const url: string = "/area/findArea.json";
const method: string = "GET";
export {url, method};

export interface Req {
  areaCode?: number;
  [k: string]: any;
}

export interface Res {
  info?: {
    ok?: boolean;
    message?: string;
    [k: string]: any;
  };
  data?: {
    list?: {
      areaAbbname?: string;
      areaCode?: number;
      areaName?: string;
      [k: string]: any;
    }[];
    [k: string]: any;
  };
  [k: string]: any;
}
