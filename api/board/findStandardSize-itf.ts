/**
 * 本文件由 Pang 从 Rap 中自动生成，请勿修改
 * 接口名：查询标准尺寸列表
 * Rap: http://rap2.alibaba-inc.com/repository/editor?id=2025&itf=44915
 */
const url: string = "/board/findStandardSize.json";
const method: string = "GET";
export {url, method};

export interface Req {
  [k: string]: any;
}

export interface Res {
  info?: {
    ok?: boolean;
    [k: string]: any;
  };
  data?: {
    [k: string]: any;
  };
  [k: string]: any;
}
