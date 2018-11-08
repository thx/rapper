/**
 * 本文件由 Pang 从 Rap 中自动生成，请勿修改
 * 接口名：查询任务列表
 * Rap: http://rap2.alibaba-inc.com/repository/editor?id=2025&itf=63558
 */
const url: string = "/overnight/findTaskList.json";
const method: string = "GET";
export {url, method};

export interface Req {
  productId?: number;
  solutionId?: number;
  page?: number;
  pageSize?: number;
  [k: string]: any;
}

export interface Res {
  data?: {
    count?: number;
    list?: {
      addtionalElementMap?: {
        [k: string]: any;
      };
      age?: null;
      amount?: number;
      amountDayMap?: string;
      areaGroupId?: number;
      areas?: null;
      auditReason?: null;
      auditStatus?: null;
      bizNumber?: null;
      campaignId?: null;
      crowds?: null;
      custId?: null;
      discountAmount?: number;
      endTime?: string;
      freq?: number;
      gender?: null;
      gmtCreate?: null;
      gmtModified?: null;
      id?: number;
      isNeedAdd?: number;
      lbsDistance?: number;
      mappingElementMap?: {
        _campaign?: {
          area?: string;
          areaGroupId?: null;
          bizNumber?: null;
          campaignMode?: null;
          campaignName?: string;
          custId?: null;
          elementKey?: string;
          gmtCreate?: null;
          gmtModified?: null;
          id?: null;
          lbsDistance?: number;
          memberId?: null;
          processInfo?: null;
          processStatus?: null;
          productId?: number;
          productLineId?: number;
          type?: number;
          [k: string]: any;
        };
        _adgroup?: {
          adzoneTargetingTaskElements?: {
            adIndex?: null;
            adzoneId?: number;
            adzoneList?: null;
            adzoneName?: null;
            amount?: number;
            bizNumber?: null;
            budgets?: {
              bizNumber?: null;
              budget?: number;
              cpm?: null;
              custId?: null;
              date?: string;
              gmtCreate?: null;
              gmtModified?: null;
              id?: null;
              memberId?: null;
              status?: number;
              [k: string]: any;
            }[];
            cpm?: number;
            custId?: null;
            dealId?: null;
            discardratio?: null;
            endTime?: null;
            gmtCreate?: null;
            gmtModified?: null;
            id?: null;
            memberId?: null;
            startTime?: null;
            wordList?: null;
            [k: string]: any;
          }[];
          bizNumber?: null;
          crowdTaskElementDTO?: null;
          crowdTaskElementDTOs?: {
            appId?: null;
            bizNumber?: null;
            custId?: null;
            dmpCrowdId?: number;
            dmpCrowdName?: string;
            gmtCreate?: null;
            gmtModified?: null;
            id?: null;
            labelId?: number;
            memberId?: null;
            tag?: null;
            targetId?: number;
            [k: string]: any;
          }[];
          custId?: null;
          elementKey?: string;
          gmtCreate?: null;
          gmtModified?: null;
          id?: null;
          memberId?: null;
          processInfo?: null;
          processStatus?: null;
          productId?: number;
          productLineId?: number;
          type?: number;
          [k: string]: any;
        };
        [k: string]: any;
      };
      memberId?: null;
      name?: string;
      newAreas?: null;
      originalId?: number;
      remainAmount?: null;
      showElementMap?: {
        _crowd_and_area?: {
          areaGroupId?: null;
          areas?: null;
          bizNumber?: null;
          crowdTags?: string;
          custId?: null;
          elementKey?: string;
          gmtCreate?: null;
          gmtModified?: null;
          id?: null;
          memberId?: null;
          processInfo?: null;
          processStatus?: null;
          productId?: number;
          productLineId?: number;
          type?: number;
          [k: string]: any;
        };
        _resource?: {
          adzoneIds?: {
            [k: string]: any;
          }[];
          bizNumber?: null;
          contentFormats?: {
            [k: string]: any;
          }[];
          custId?: null;
          elementKey?: string;
          gmtCreate?: null;
          gmtModified?: null;
          id?: null;
          memberId?: null;
          processInfo?: null;
          processStatus?: null;
          productId?: number;
          productLineId?: number;
          type?: number;
          [k: string]: any;
        };
        [k: string]: any;
      };
      signPV?: number;
      signPrice?: null;
      solutionId?: number;
      solutionMode?: null;
      solutionName?: null;
      startTime?: string;
      storeList?: null;
      supplementTask?: boolean;
      taskAuditReason?: string;
      taskAuditStatus?: number;
      type?: number;
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
