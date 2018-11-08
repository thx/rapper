/**
 * 本文件由 Pang 从 Rap 中自动生成，请勿修改
 * 接口名：获取任务详细信息
 * Rap: http://rap2.alibaba-inc.com/repository/editor?id=2025&itf=41668
 */
const url: string = "/overnight/getTask.json";
const method: string = "GET";
export {url, method};

export interface Req {
  [k: string]: any;
}

export interface Res {
  data?: {
    task?: {
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
      crowds?: {
        bizNumber?: null;
        coverage?: number;
        crowdId?: number;
        crowdName?: string;
        custId?: null;
        expireTime?: string;
        fullStatus?: number;
        gmtCreate?: null;
        gmtModified?: null;
        id?: null;
        labelId?: null;
        memberId?: number;
        syncTime?: string;
        targetId?: null;
        [k: string]: any;
      }[];
      custId?: null;
      discountAmount?: number;
      endTime?: string;
      freq?: number;
      gender?: null;
      gmtCreate?: null;
      gmtModified?: null;
      id?: number;
      isNeedAdd?: number;
      mappingElementMap?: {
        _adgroup?: {
          adzoneTargetingTaskElements?: {
            adIndex?: null;
            adzoneId?: number;
            adzoneList?: null;
            adzoneName?: null;
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
            cpm?: null;
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
          crowdTaskElementDTO?: {
            appId?: number;
            bizNumber?: null;
            custId?: null;
            dmpCrowdId?: number;
            dmpCrowdName?: string;
            gmtCreate?: null;
            gmtModified?: null;
            id?: null;
            labelId?: null;
            memberId?: number;
            tag?: string;
            targetId?: null;
            [k: string]: any;
          };
          crowdTaskElementDTOs?: null;
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
        _campaign?: {
          area?: string;
          areaGroupId?: null;
          bizNumber?: null;
          campaignName?: string;
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
      remainAmount?: number;
      showElementMap?: {
        _adzone_setting?: {
          adzoneAlgoInfoList?: {
            adzoneId?: number;
            adzoneType?: number;
            amount?: number;
            avilablePv?: null;
            bizNumber?: null;
            custId?: null;
            estimatePv?: null;
            gmtCreate?: null;
            gmtModified?: null;
            id?: null;
            maxAdviceAmount?: null;
            memberId?: null;
            recommendType?: null;
            sellPrice?: null;
            [k: string]: any;
          }[];
          bizNumber?: null;
          bucUserId?: string;
          custId?: null;
          dynamicPackageEstimateResultDTO?: {
            bizNumber?: null;
            budget?: number;
            corePercent?: number;
            cpmsold?: number;
            ctr?: string;
            custId?: null;
            destStrName?: string;
            detailInfoList?: {
              adzoneDetail?: {
                adzoneId?: string;
                adzoneMachine?: string;
                adzoneName?: string;
                adzoneType?: number;
                budget?: number;
                ctr?: string;
                measure?: string;
                price?: number;
                pv?: number;
                [k: string]: any;
              }[];
              resourceType?: number;
              sumCpm?: number;
              sumCtr?: string;
              sumPv?: number;
              [k: string]: any;
            }[];
            dynamicPackageEstimateResultStr?: null;
            endDate?: string;
            gmtCreate?: null;
            gmtModified?: null;
            id?: null;
            measureNum?: number;
            memberId?: null;
            packageAdzoneId?: null;
            pv?: number;
            startDate?: string;
            summaryInfoList?: {
              adzoneType?: number;
              budget?: number;
              budgetPercent?: number;
              ctr?: string;
              measureNum?: number;
              price?: number;
              pv?: number;
              wlResourcePercent?: number;
              [k: string]: any;
            }[];
            wlPercent?: number;
            [k: string]: any;
          };
          elementKey?: string;
          estimateSettingParamDTO?: {
            bizNumber?: null;
            coreChangeType?: number;
            corePercent?: number;
            custId?: null;
            deployType?: number;
            gmtCreate?: null;
            gmtModified?: null;
            id?: null;
            maxCmp?: number;
            memberId?: null;
            wlPercent?: number;
            [k: string]: any;
          };
          gmtCreate?: null;
          gmtModified?: null;
          id?: null;
          inquiryId?: null;
          memberId?: null;
          processInfo?: null;
          processStatus?: null;
          productId?: null;
          productLineId?: null;
          type?: number;
          [k: string]: any;
        };
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
          contentFormats?: null;
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
      solutionName?: string;
      startTime?: string;
      supplementTask?: boolean;
      taskAuditReason?: string;
      taskAuditStatus?: number;
      type?: number;
      [k: string]: any;
    };
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
