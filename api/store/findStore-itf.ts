/**
 * 本文件由 Pang 从 Rap 中自动生成，请勿修改
 * 接口名：门店信息查询
 * Rap: http://rap2.alibaba-inc.com/repository/editor?id=2025&itf=45578
 */
const url: string = "/store/findStore.json";
const method: string = "GET";
export {url, method};

export interface Req {
  provCode?: string;
  cityCode?: string;
  page?: number;
  pageSize?: number;
  [k: string]: any;
}

export interface Res {
  info?: {
    ok?: boolean;
    message?: string;
    [k: string]: any;
  };
  data?: {
    count?: number;
    list?: {
      storeName?: string;
      storeId?: number;
      posx?: number;
      posy?: number;
      [k: string]: any;
    }[];
    [k: string]: any;
  };
  [k: string]: any;
}
