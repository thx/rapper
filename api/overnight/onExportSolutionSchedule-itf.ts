/**
 * 本文件由 Pang 从 Rap 中自动生成，请勿修改
 * 接口名：检测是否可以导出排期
 * Rap: http://rap2.alibaba-inc.com/repository/editor?id=2025&itf=43325
 */
const url: string = "/overnight/onExportSolutionSchedule.json";
const method: string = "GET";
export {url, method};

export interface Req {
  solutionId?: string;
  productId?: string;
  [k: string]: any;
}

export interface Res {
  info?: {
    message?: null;
    ok?: boolean;
    [k: string]: any;
  };
  [k: string]: any;
}
