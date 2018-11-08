/**
 * 本文件由 Pang 从 Rap 中自动生成，请勿修改
 * 接口名：统一跳转接口
 * Rap: http://rap2.alibaba-inc.com/repository/editor?id=2025&itf=41391
 */
const url: string = "/boardTool/goRedirectUrl.json";
const method: string = "GET";
export {url, method};

export interface Req {
  productId?: number;
  redirectUrl?: string;
  其他参数?: string;
  [k: string]: any;
}

export interface Res {
  [k: string]: any;
}
