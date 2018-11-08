/**
 * 本文件由 Pang 从 Rap 中自动生成，请勿修改
 * 接口名：获取人群标签
 * Rap: http://rap2.alibaba-inc.com/repository/editor?id=2025&itf=53906
 */
const url: string = "/direct/getBrandCrowdLabel.json";
const method: string = "GET";
export {url, method};

export interface Req {
  productId?: number;
  isNewProcess?: boolean;
  campaignId?: number;
  adgroupId?: number;
  creativeId?: number;
  [k: string]: any;
}

export interface Res {
  info?: {
    disableTime?: boolean;
    errorCode?: null;
    lockSla?: boolean;
    message?: string;
    ok?: boolean;
    unlockUrl?: null;
    [k: string]: any;
  };
  data?: {
    targetVOList?: {
      id?: number;
      targetLabelVOList?: {
        labelDesc?: string;
        labelId?: number;
        labelName?: string;
        pvInfo?: string;
        selected?: number;
        [k: string]: any;
      }[];
      targetingDesc?: string;
      targetingName?: string;
      [k: string]: any;
    }[];
    [k: string]: any;
  };
  [k: string]: any;
}
