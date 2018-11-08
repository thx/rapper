/**
 * 本文件由 Pang 从 Rap 中自动生成，请勿修改
 * 接口名：创建广告创意列表(批量创建)
 * Rap: http://rap2.alibaba-inc.com/repository/editor?id=2025&itf=44918
 */
const url: string = "/board/createAdboardList.json";
const method: string = "GET";
export {url, method};

export interface Req {
  [k: string]: any;
}

export interface Res {
  data?: {
    adboardList?: {
      adId?: number;
      adboardExtContent?: null;
      adboardId?: number;
      adboardLevel?: number;
      adboardLevelDesc?: null;
      adboardName?: string;
      adboardSize?: string;
      adboardSizeList?: null;
      adboardXMediaDO?: null;
      advertiserId?: number;
      advertiserType?: number;
      archiveStatus?: number;
      assets?: null;
      auditTime?: null;
      campaignId?: null;
      campaignModel?: null;
      campaignName?: null;
      catId?: string;
      catName?: string;
      ccParaString?: string;
      clickUrl?: string;
      clickUrlMediaType?: number;
      clickUrlResource?: null;
      clickUrlUserId?: null;
      comments?: null;
      createTime?: null;
      creativeType?: number;
      creatives?: null;
      creator?: number;
      deriveSizeList?: null;
      endrow?: number;
      extendData?: string;
      format?: string;
      formatList?: null;
      imagePath?: string;
      isWhiteBackground?: null;
      jsContentsURL?: {
        clickurl?: string;
        imgurl?: string;
        [k: string]: any;
      }[];
      materials?: null;
      modifier?: number;
      multiMaterial?: number;
      offset?: number;
      outOfServiceTime?: null;
      outerId?: number;
      packageType?: number;
      pageSize?: number;
      paramList?: null;
      productId?: number;
      psdAuditList?: null;
      psdPath?: null;
      resizeable?: number;
      sizeCode?: string;
      sizeList?: null;
      source?: number;
      standard?: null;
      startrow?: number;
      status?: string;
      statusList?: null;
      subpkgList?: {
        [k: string]: any;
      }[];
      templateData?: string;
      templateId?: number;
      transId?: null;
      transName?: null;
      transcodingInfo?: null;
      updateTime?: null;
      videoChecksum?: string;
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
