/**
 * 本文件由 Pang 从 Rap 中自动生成，请勿修改
 * 接口名：流量包tag提示
 * Rap: http://rap2.alibaba-inc.com/repository/editor?id=2025&itf=61048
 */
const url: string = "/advertiserTool/findMemberPrompt.json";
const method: string = "GET";
export {url, method};

export interface Req {
  productId?: number;
  [k: string]: any;
}

export interface Res {
  data?: {
    prompts?: {
      wordReleaseRemind?: boolean;
      [k: string]: any;
    };
    [k: string]: any;
  };
  info?: {
    lockSla?: boolean;
    ok?: boolean;
    disableTime?: boolean;
    [k: string]: any;
  };
  [k: string]: any;
}
