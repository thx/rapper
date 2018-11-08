/**
 * 本文件由 Pang 从 Rap 中自动生成，请勿修改
 * 接口名：目标展现位置计算预估
 * Rap: http://rap2.alibaba-inc.com/repository/editor?id=2025&itf=63160
 */
const url: string = "/overnight/getTargetingEstimateInfo.json";
const method: string = "GET";
export {url, method};

export interface Req {
  [k: string]: any;
}

export interface Res {
  data?: {
    adzoneId?: number;
    pv?: number;
    sellPrice?: number;
    availablePv?: number;
    availableAmount?: number;
    adzoneInfoList?: {
      adzoneId?: number;
      sellPrice?: number;
      pv?: number;
      amount?: number;
      msg?: string;
      availablePv?: number;
      availableAmount?: number;
      conflictDetailinfos?: {
        word?: string;
        adzoneId?: number;
        adzoneName?: string;
        dates?: string;
        [k: string]: any;
      }[];
      adzoneInfoList?: {
        adzoneId?: number;
        sellPrice?: number;
        pv?: number;
        amount?: number;
        msg?: string;
        availablePv?: number;
        availableAmount?: number;
        conflictDetailinfos?: {
          [k: string]: any;
        }[];
        adzoneInfoList?: {
          [k: string]: any;
        }[];
        [k: string]: any;
      }[];
      [k: string]: any;
    }[];
    [k: string]: any;
  };
  [k: string]: any;
}
