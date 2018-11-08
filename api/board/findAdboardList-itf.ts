/**
 * 本文件由 Pang 从 Rap 中自动生成，请勿修改
 * 接口名：获取创意列表
 * Rap: http://rap2.alibaba-inc.com/repository/editor?id=2025&itf=41367
 */
const url: string = "/board/findAdboardList.json";
const method: string = "GET";
export {url, method};

export interface Req {
  adzoneIdList?: {
    [k: string]: any;
  }[];
  offset?: number;
  pageSize?: number;
  status?: number;
  adboardSize?: string;
  adboardName?: string;
  archiveStatus?: number;
  campaignType?: number;
  productId?: number;
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
      adboardLevel?: {
        [k: string]: any;
      }[];
      adboardLevelDesc?: null;
      adboardLevelName?: string;
      adboardName?: string;
      adboardSize?: {
        [k: string]: any;
      }[];
      adboardSizeList?: null;
      adboardXMediaDO?: null;
      advertiserId?: number;
      advertiserType?: number;
      adzoneId?: null;
      archiveStatus?: number;
      assets?: null;
      auditTime?: string;
      blockReasonDTOList?: {
        blockId?: string;
        blockName?: string;
        blockUrl?: string;
        reasonDTOs?: {
          auditReasonId?: string;
          auditReasonName?: string;
          flawUrls?: string;
          redirectUrl?: string;
          [k: string]: any;
        }[];
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
      createTime?: string;
      creativeType?: {
        [k: string]: any;
      }[];
      creatives?: null;
      creator?: null;
      ctr?: null;
      deriveSizeList?: null;
      duration?: null;
      durationName?: null;
      effectiveTime?: null;
      endrow?: number;
      expireTime?: string;
      extendData?: {
        [k: string]: any;
      }[];
      format?: {
        [k: string]: any;
      }[];
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
      materialReasonList?: {
        type?: number;
        content?: string;
        blockReasonDTOs?: {
          blockId?: number;
          blockUrl?: string;
          reasonDTOs?: {
            auditReasonId?: number;
            auditReasonName?: string;
            flawUrls?: {
              [k: string]: any;
            }[];
            [k: string]: any;
          }[];
          [k: string]: any;
        }[];
        [k: string]: any;
      }[];
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
      productId?: null;
      psdAuditList?: null;
      psdPath?: null;
      resizeable?: number;
      sizeCode?: null;
      sizeList?: null;
      sortField?: null;
      sortRule?: null;
      source?: number;
      standard?: null;
      startTime?: string;
      startrow?: number;
      status?: {
        [k: string]: any;
      }[];
      statusList?: null;
      subpkgList?: null;
      taskCrowdId?: null;
      taskCrowdRefCreativeId?: null;
      taskId?: null;
      taskName?: null;
      templateData?: null;
      templateDiscount?: null;
      templateId?: number;
      thumbnailPicUrl?: string;
      transId?: null;
      transName?: null;
      transcodingInfo?: null;
      updateTime?: string;
      videoChecksum?: null;
      recommendNewTemplateId?: {
        [k: string]: any;
      }[];
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
