/**
 * 本文件由 Pang 从 Rap 中自动生成，请勿修改
 * 接口名：品牌号添加内容
 * Rap: http://rap2.alibaba-inc.com/repository/editor?id=2025&itf=41567
 */
const url: string = "/overnight/addAdzoneContent.json";
const method: string = "GET";
export {url, method};

export interface Req {
  solutionId?: number;
  id?: number;
  taskAttributeDTO?: {
    adzoneInfoList?: {
      channelId?: number;
      contentIdList?: {
        [k: string]: any;
      }[];
      adzoneId?: number;
      [k: string]: any;
    }[];
    [k: string]: any;
  };
  [k: string]: any;
}

export interface Res {
  [k: string]: any;
}
