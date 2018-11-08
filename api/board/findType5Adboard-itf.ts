/**
 * 本文件由 Pang 从 Rap 中自动生成，请勿修改
 * 接口名：根据单元id查询品牌繁星类型创意
 * Rap: http://rap2.alibaba-inc.com/repository/editor?id=2025&itf=51284
 */
const url: string = "/board/findType5Adboard.json";
const method: string = "GET";
export {url, method};

export interface Req {
  productId?: number;
  transId?: number;
  [k: string]: any;
}

export interface Res {
  data?: {
    count?: number;
    list?: {
      adId?: null;
      adboardExtContent?: null;
      adboardId?: number;
      adboardIdList?: null;
      adboardLevel?: number;
      adboardLevelDesc?: null;
      adboardLevelName?: string;
      adboardName?: string;
      adboardSize?: string;
      adboardSizeList?: null;
      adboardXMediaDO?: null;
      advertiserId?: number;
      advertiserType?: number;
      adzoneId?: null;
      archiveStatus?: number;
      assets?: null;
      auditTime?: null;
      blockReasonDTOList?: {
        [k: string]: any;
      }[];
      brandIdList?: null;
      campaignId?: null;
      campaignModel?: null;
      campaignName?: null;
      canBind?: null;
      canBindForCrowd?: null;
      canUse?: boolean;
      catId?: string;
      catName?: string;
      ccParaString?: null;
      channelId?: null;
      channelName?: null;
      clickUrl?: string;
      clickUrlMediaType?: null;
      clickUrlMediaTypeName?: null;
      clickUrlResource?: null;
      clickUrlUserId?: null;
      comments?: null;
      contentType?: null;
      createTime?: string;
      creativeType?: number;
      creatives?: null;
      creator?: null;
      ctr?: null;
      deriveSizeList?: null;
      duration?: null;
      durationName?: null;
      effectiveTime?: null;
      endrow?: number;
      expireTime?: null;
      extendData?: string;
      format?: string;
      formatList?: null;
      imagePath?: string;
      isRefCrowd?: null;
      isWhiteBackground?: null;
      jsContentsList?: null;
      jsContentsURL?: null;
      level?: null;
      levelName?: null;
      materialGroups?: {
        [k: string]: any;
      }[];
      materialReasonList?: null;
      materials?: null;
      modifier?: null;
      multiMaterial?: null;
      offset?: number;
      outOfServiceTime?: null;
      outerId?: number;
      packageType?: number;
      pageSize?: number;
      paramList?: null;
      personalizedProperties?: {
        [k: string]: any;
      };
      pphBound?: boolean;
      productId?: null;
      psdAuditList?: null;
      psdPath?: null;
      recommendNewTemplateId?: null;
      resizeable?: number;
      shouldUpdate?: null;
      sizeCode?: null;
      sizeList?: null;
      smartType?: null;
      sortField?: null;
      sortRule?: null;
      source?: number;
      standard?: null;
      startTime?: string;
      startrow?: number;
      status?: string;
      statusList?: null;
      subpkgList?: null;
      taskCrowdId?: null;
      taskCrowdRefCreativeId?: null;
      taskId?: null;
      taskName?: null;
      templateData?: string;
      templateDiscount?: null;
      templateId?: number;
      thumbnailPicUrl?: string;
      transId?: null;
      transName?: null;
      transcodingInfo?: null;
      updateTime?: string;
      videoChecksum?: null;
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
