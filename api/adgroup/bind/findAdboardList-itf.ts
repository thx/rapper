/**
 * 本文件由 Pang 从 Rap 中自动生成，请勿修改
 * 接口名：获取横向管理创意列表
 * Rap: http://rap2.alibaba-inc.com/repository/editor?id=2025&itf=41378
 */
const url: string = "/adgroup/bind/findAdboardList.json";
const method: string = "GET";
export {url, method};

export interface Req {
  campaignId?: number;
  transId?: number;
  pageSize?: number;
  offset?: number;
  adboardName?: string;
  status?: string;
  productId?: number;
  campaignType?: number;
  crowdId?: number;
  [k: string]: any;
}

export interface Res {
  data?: {
    count?: number;
    list?: {
      adId?: null;
      adboardId?: number;
      adboardLevel?: {
        [k: string]: any;
      }[];
      adboardName?: string;
      adboardSize?: {
        [k: string]: any;
      }[];
      adboardSizeList?: null;
      adboardXMediaDO?: null;
      advertiserId?: number;
      advertiserType?: number;
      archiveStatus?: number;
      assets?: null;
      auditTime?: string;
      campaignId?: number;
      campaignModel?: number;
      campaignName?: string;
      campaignType?: number;
      catId?: string;
      catName?: string;
      ccParaString?: null;
      clickUrl?: string;
      clickUrlMediaType?: null;
      clickUrlUserId?: null;
      comments?: null;
      creativeType?: {
        [k: string]: any;
      }[];
      creatives?: null;
      creator?: null;
      direct?: boolean;
      effectiveTime?: null;
      expireTime?: string;
      extendData?: {
        [k: string]: any;
      }[];
      format?: {
        [k: string]: any;
      }[];
      imagePath?: string;
      materials?: null;
      multiMaterial?: null;
      outOfServiceTime?: null;
      packageType?: number;
      psdPath?: null;
      resizeable?: number;
      sizeCode?: null;
      source?: number;
      startTime?: string;
      status?: {
        [k: string]: any;
      }[];
      subpkgList?: null;
      templateId?: number;
      transId?: number;
      transName?: string;
      transcodingInfo?: null;
      videoChecksum?: null;
      recommendNewTemplateId?: {
        [k: string]: any;
      }[];
      targetType?: number;
      [k: string]: any;
    }[];
    [k: string]: any;
  };
  info?: {
    disableTime?: boolean;
    errorCode?: null;
    lockSla?: boolean;
    message?: null;
    ok?: boolean;
    unlockUrl?: null;
    [k: string]: any;
  };
  [k: string]: any;
}
