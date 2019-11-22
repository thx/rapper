/* eslint-disable */

/**
 * 本文件由 Rapper 同步 Rap 平台接口，自动生成，请勿修改
 * Rap仓库 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900
 */

import {
  parseUrl,
  dispatchAction,
  defaultFetch,
  defaultConfig,
  RequesterOption,
  UserFetchParams,
  FetchConfigFunc,
} from './lib'
import {RequestAction} from './redux'

export interface Models {
  /**
   * 接口名：计划相关字段参考[新建]
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6615&itf=67832
   */
  'GET/readme/campaign': {
    Req: {
      bizCode?: string
      startTime?: string
      endTime?: string
      effectType?: string
    }
    Res: {
      info: {
        disableTime: boolean
        lockSla: boolean
        errorCode: string
        message: string
        ok: boolean
        redirectUrl: string
        unlockUrl: string
      }
      data: {
        list: {
          logDate: string
          charge: number
          adPv: number
          click: number
          deepShopUv: number
          prepayInshopNum: number
          couponNum: number
          redPacketNum: number
          inshopItemColNum: number
          dirShopColNum: number
          cartNum: number
          uv: number
          prepayInshopAmt: number
          ctr: number
          alipayInshopAmt: number
          alipayInShopNum: number
        }[]
      }
    }
  }

  /**
   * 接口名：获取计划默认设置
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6615&itf=67189
   */
  'GET/api/campaign/default.json': {
    Req: {
      /**
       * 业务编码
       */
      bizCode?: string
    }
    Res: {
      data: {
        campaign: {
          bizCode: string
          campaignName: string
          campaignType: string
          dayBudget: number
          solutionType: number
          launchTime: {
            beginTime: string
            endTime: string
            launchForever: boolean
          }
          launchAreaList: {
            code: number
            name: string
          }[]
          launchPeriodList: {
            dayOfWeek: string
            timeSpanList: {
              time: string
              discount: string
            }[]
          }[]
        }
      }
      info: {
        unlockUrl: string
        disableTime: boolean
        errorCode: string
        lockSla: boolean
        ok: boolean
        message: string
      }
    }
  }

  /**
   * 接口名：获取计划详情
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6615&itf=67240
   */
  'GET/api/campaign/get.json': {
    Req: {
      /**
       * 业务编码
       */
      bizCode?: string
      /**
       * 计划id
       */
      campaignId?: number
    }
    Res: {
      data: {
        campaign: {
          bizCode: string
          campaignId: number
          campaignName: string
          campaignType: string
          dayBudget: number
          solutionType: string
          marketAim: string
          status: string
          lifeCycle: number
          launchTime: {
            beginTime: string
            endTime: string
            launchForever: boolean
          }
          launchAreaList: {
            code: number
            name: string
          }[]
          launchPeriodList: {
            dayOfWeek: number
            timeSpanList: {
              time: string
              discount: string
            }[]
          }[]
          crowdList: {
            crowdId: number
            crowdName: string
            crowdDesc: string
            targetLabel: {
              targetId: number
              targetType: number
              labelId: number
              labelName: string
              labelDesc: string
              status: number
              labelValue: string
              options: {
                optionId: number
                optionName: string
                optionValue: number
                status: number
                optionDesc: string
                properties: {}
              }[]
              properties: {}
              labelPriceMode: string
            }
            price: string
          }[]
          adgroupIdList: string
          speedType: string
          marketScene: string
        }
      }
      info: {
        unlockUrl: string
        disableTime: boolean
        errorCode: string
        lockSla: boolean
        ok: boolean
        message: string
      }
    }
  }

  /**
   * 接口名：获取计划结算信息
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6615&itf=73647
   */
  'GET/api/campaign/getSettleInfo.json': {
    Req: {
      /**
       * 业务编码
       */
      bizCode?: string
      /**
       * 计划id
       */
      campaignId?: number
    }
    Res: {
      data: {
        campaign: {
          activityAutoTransfer: null
          activityId: null
          adStrategy: null
          adStrategyInfo: null
          adgroupIdList: null
          adgroupList: null
          assureMoney: null
          assureType: null
          assureValue: null
          autoBid: boolean
          bizCode: null
          campaignId: null
          campaignName: null
          campaignType: null
          canEdit: null
          crowdList: null
          dayBudget: null
          dayBudgetUnlimit: boolean
          faultEnumList: null
          focusBuyerList: null
          hasActivityItem: null
          launchAreaList: any[]
          launchPeriodList: any[]
          launchTime: {
            beginTime: null
            endTime: null
            launchForever: boolean
          }
          lifeCycle: null
          marketAim: null
          marketScene: null
          operationList: any[]
          promotionEntity: {
            bizCode: null
            itemIdList: null
            type: null
            url: null
          }
          reportInfoList: any[]
          settleCharge: number
          showTagList: null
          solutionType: null
          sourceChannel: null
          sourceEntityId: null
          speedType: null
          status: null
          systemBid: null
          targetBuyer: null
          topTime: null
          transferSceneInfo: null
          transferStatus: string
        }
      }
      info: {
        errorCode: null
        message: null
        ok: boolean
        redirectUrl: null
      }
    }
  }

  /**
   * 接口名：获取计划列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6615&itf=67241
   */
  'GET/api/campaign/findList.json': {
    Req: {
      /**
       * 状态列表[0-暂停,1-投放中,3-等待投放,9-结束,99-异常]（筛选时传入）
       */
      statusList?: number[]
      /**
       * 计划名称（搜索时传入）
       */
      campaignName?: string
      /**
       * 业务线
       */
      bizCode?: string
      /**
       * 方案类型（是否智能）
       */
      solutionTypeList?: any[]
      /**
       * 计划（付费）类型
       */
      campaignTypeList?: any[]
      /**
       * 出价方式
       */
      autoBidList?: any[]
      /**
       * 报表查询参数
       */
      reportQuery?: {
        startTime?: string
        endTime?: string
        logDateList?: any[]
      }
      /**
       * 表示是什么场景的计划列表：trans4Activity表示是往活动计划迁移要刷新出来的列表
       */
      module?: string
    }
    Res: {
      /**
       * 字段简介参考新建计划
       */
      data: {
        /**
         * 列表里计划的个数
         */
        count: number
        /**
         * 计划列表
         */
        list: {
          bizCode: string
          campaignId: number
          campaignName: string
          campaignType: number
          dayBudget: number
          autoBid: number
          speedType: number
          solutionType: number
          marketAim: number
          status: number
          lifeCycle: number
          launchTime: {
            beginTime: string
            endTime: string
            launchForever: boolean
          }
          launchAreaList: {
            code: number
            name: string
          }[]
          launchPeriodList: {
            dayOfWeek: string
            timeSpanList: {
              time: string
              discount: string
            }[]
          }[]
          adgroupIdList: string
          /**
           * 报表信息
           */
          reportInfoList: {
            /**
             * 消耗
             */
            charge: number
            /**
             * 展示
             */
            adPv: number
            /**
             * 点击
             */
            click: number
            /**
             * 点击率
             */
            ctr: number
            ecpm: number
            ecpc: number
            logDate: string
          }[]
          /**
           * true表示含有618宝贝
           */
          hasActivityItem: boolean
          assureMoney: number
        }[]
      }
      info: {
        unlockUrl: string
        disableTime: boolean
        errorCode: string
        lockSla: boolean
        ok: boolean
        message: string
      }
    }
  }

  /**
   * 接口名：分页获取计划列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6615&itf=67264
   */
  'GET/api/campaign/findPage.json': {
    Req: {
      /**
       * 状态列表
       */
      statusList?: number[]
      /**
       * 计划名称
       */
      campaignName?: string
      /**
       * 业务编码
       */
      bizCode?: string
      /**
       * 方案类型
       */
      solutionTypeList?: string
      /**
       * 计划出价类型
       */
      campaignTypeList?: any[]
      /**
       * 是否智能出价
       */
      autoBid?: string
      /**
       * 偏移量
       */
      offset?: number
      /**
       * 每页的大小
       */
      pageSIze?: number
      /**
       * 排序字段
       */
      orderField?: string
      /**
       * 排序方式
       */
      orderBy?: string
      reportQuery?: {
        startTime?: string
        endTime?: string
        logDateList?: any[]
      }
      /**
       * 618活动id
       */
      activityId?: number
      /**
       * tuijian 表示是超级推荐新建的
       * subway 表示是从直通车迁移的
       * zuanshi 表示是从钻展迁移的
       * 默认不要传
       */
      transferBp?: string
    }
    Res: {
      data: {
        list: {
          campaignId: number
          autoBid: boolean
          campaignType: string
          dayBudget: number
          speedType: number
          campaignName: string
          launchTime: {
            beginTime: string
            endTime: string
            launchForever: boolean[]
          }
          launchAreaList: {
            code: string
            name: number
          }[]
          lifeCycle: number
          launchPeriodList: {
            dayOfWeek: number
            timeSpanList: {
              time: string
              discount: string
            }[]
          }[]
          status: string
          solutionType: string
          topTime: string
          showTags: any[]
          faultEnumList: {
            faultEnumValue: string
          }[]
          bizCode: string
          reportInfoList: {
            logDate: string
            click: string
          }[]
          /**
           * 为空表示不需要出现转换的按钮
           */
          transferSceneInfo: {
            /**
             * 0，表示不可以，1表示可以，存在返回对象同时表示不可以的，这个时候按钮置灰且展现reason
             */
            transferType: number
            /**
             * 可以转换的类型范围，metaCode
             */
            sceneScope: string[]
            /**
             * 不能的原因
             */
            reason: string
          }
          showTagInfoList: {
            showTag: string
            color: string
            tips: string
          }[]
          assureMoney: string
          assureValue: string
          /**
           * 操作按钮列表
           */
          operationList: {
            /**
             * transferActivityPhase 表示主动切换活动阶段
             */
            key: string
            /**
             * true表示不可以点击，展示reason
             */
            disabled: boolean
            /**
             * 不可操作的时候悬浮的提示
             */
            reason: string
          }[]
        }[]
        count: number
      }
      info: {
        unlockUrl: string
        disableTime: boolean
        errorCode: string
        lockSla: boolean
        ok: boolean
        message: string
      }
    }
  }

  /**
   * 接口名：获取草稿计划列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6615&itf=67236
   */
  'GET/api/campaign/findDraftList.json': {
    Req: {
      /**
       * 业务编码
       */
      bizCode?: string
      /**
       * 计划名称（搜索时传入）
       */
      campaignName?: string
      /**
       * 状态列表[0-暂停,1-投放中,3-等待投放,9-结束,99-异常]（筛选时传入）
       *
       */
      statusList?: number[]
      /**
       * 方案类型（是否智能投放）
       */
      solutionType?: string
      /**
       * 计划（付费）类型列表
       */
      campaignTypeList?: any[]
      /**
       * 出价方式（是否智能出价）
       */
      autoBid?: string
      /**
       * activity
       */
      module?: string
    }
    Res: {
      data: {
        list: {
          /**
           * 计划id
           */
          campaignId: number
          /**
           * 计划名称TODO：类型
           */
          campaignName: string
          /**
           * 计划出价类型
           */
          campaignType: number
          /**
           * 日预算
           */
          dayBudget: number
          /**
           * 投放类型
           */
          speedType: number
          /**
           * 出价方式
           */
          autoBid: boolean
          /**
           * 计划状态
           */
          status: number
          /**
           * 生命周期TODO：类型
           */
          lifeCycle: number[]
          /**
           * 投放时间
           */
          launchTime: {
            /**
             * 投放开始时间
             */
            beginTime: string
            /**
             * 投放结束时间
             */
            endTime: string
            /**
             * 是否长期投放
             */
            launchForever: boolean
          }
          /**
           * 投放地域
           */
          launchAreaList: {
            /**
             * 地域代码
             */
            code: string
            /**
             * 地域名称
             */
            name: string
          }[]
          /**
           * 投放时间
           */
          launchPeriodList: {
            /**
             * 本周的第几天
             */
            dayOfWeek: string
            /**
             * 当天的各个时间段
             */
            timeSpans: any[]
            /**
             * 各个时段的折扣
             */
            timeDiscount: any[]
          }[]
          /**
           * 投放诉求（营销目标）
           */
          marketingAim: number
          /**
           * 单元id 列表
           */
          adgroupIdList: number[]
          /**
           * 是否可编辑TODO：类型
           */
          canEdit: boolean
          solutionType: string
          activityId: string
          bizCode: string
        }[]
        count: string
      }
      info: {
        unlockUrl: string
        disableTime: boolean
        errorCode: string
        lockSla: boolean
        ok: boolean
        message: string
      }
    }
  }

  /**
   * 接口名：删除计划
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6615&itf=67242
   */
  'DELETE/api/campaign/delete.json': {
    Req: {
      bizCode?: string
      campaignIdList?: number[]
    }
    Res: {
      data: {}
      info: {
        unlockUrl: string
        disableTime: boolean
        errorCode: string
        lockSla: boolean
        ok: boolean
        message: string
      }
    }
  }

  /**
   * 接口名：克隆计划
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6615&itf=67277
   */
  'POST/api/campaign/clone.json': {
    Req: {
      /**
       * 业务编码
       */
      bizCode?: string
      /**
       * 计划id
       */
      campaignId?: number
      /**
       * 计划名称
       */
      campaignName?: string
      /**
       * 日预算
       */
      dayBudget?: number
      /**
       * 投放时间
       */
      launchTime?: {
        /**
         * 开始投放时间
         */
        beginTime?: string
        /**
         * 结束投放时间
         */
        endTime?: string
        /**
         * 是否长期投放
         */
        launchForever?: string
      }
      /**
       * 单元id列表
       */
      adgroupIdList?: any[]
    }
    Res: {
      data: {
        campaignId: number
      }
      info: {
        unlockUrl: string
        disableTime: boolean
        errorCode: string
        lockSla: boolean
        ok: boolean
        message: string
      }
    }
  }

  /**
   * 接口名：【提醒】修改计划预算提醒
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6615&itf=67321
   */
  'PUT/api/campaign/updateCampaignBudgetRemindSetting.json': {
    Req: {
      /**
       * 产品线编码
       */
      bizCode?: string
      /**
       * 广告主id
       */
      memberId?: number
      /**
       * 提醒阈值
       */
      remindMinValue?: number
      /**
       * 阿里旺旺
       */
      aliWangwang?: string
      /**
       * 手机号
       */
      mobile?: string
      /**
       * 提醒类型（二进制表示00,01,10,11，二进制右数第一位表示旺旺，第二位表示短信，值只能为0,1,2,3）
       */
      remindType?: number
    }
    Res: {
      info: {
        unlockUrl: string
        disableTime: string
        errorCode: string
        lockSla: string
        ok: string
        message: string
      }
    }
  }

  /**
   * 接口名：【提醒】获取计划预算提醒
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6615&itf=67369
   */
  'GET/api/campaign/getCampaignBudgetRemindSetting.json': {
    Req: {
      bizCode?: string
      memberId?: string
    }
    Res: {
      data: {
        campaignBudgetRemindSetting: {
          memberId: number
          remindMinValue: number
          aliWangwang: string
          remindType: string
          mobile: string
          productLineId: string
        }
      }
      info: {
        unlockUrl: string
        disableTime: string
        errorCode: string
        lockSla: string
        ok: boolean
        message: string
      }
    }
  }

  /**
   * 接口名：批量修改计划信息
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6615&itf=67654
   */
  'PUT/api/campaign/batchModify.json': {
    Req: {
      bizCode?: string
      /**
       * 要修改的计划id列表
       */
      campaignIdList?: number[]
      campaignName?: string
      dayBudget?: number
      speedType?: number
      marketAim?: number
      status?: number
      launchTime?: {
        beginTime?: string
        endTime?: string
        launchForever?: boolean
      }
      launchAreaList?: {
        code: number
        name: string
      }[]
      launchPeriodList?: {
        dayOfWeek: string
        timeSpanList: {
          time: string
          discount: string
        }[]
      }[]
    }
    Res: {
      data: {}
      info: {
        unlockUrl: string
        disableTime: boolean
        errorCode: string
        lockSla: boolean
        ok: boolean
        message: string
      }
    }
  }

  /**
   * 接口名：计划完成
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6615&itf=67672
   */
  'PUT/api/campaign/complete.json': {
    Req: {
      bizCode?: string
      campaignId?: number
    }
    Res: {
      data: {}
      info: {
        unlockUrl: string
        disableTime: boolean
        errorCode: string
        lockSla: boolean
        ok: boolean
        message: string
      }
    }
  }

  /**
   * 接口名：修改置顶状态
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6615&itf=67674
   */
  'PUT/api/campaign/setTop.json': {
    Req: {
      campaignId?: number
      topStatus?: boolean
      bizCode?: string
    }
    Res: {
      data: {}
      info: {
        unlockUrl: string
        disableTime: boolean
        errorCode: string
        lockSla: boolean
        ok: boolean
        message: string
      }
    }
  }

  /**
   * 接口名：获取有效计划数
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6615&itf=67975
   */
  'GET/api/campaign/validCount.json': {
    Req: {
      bizCode?: string
      /**
       * activity
       */
      module?: string
    }
    Res: {
      data: {
        count: number
      }
      info: {
        unlockUrl: string
        disableTime: boolean
        errorCode: string
        lockSla: boolean
        ok: boolean
        message: string
      }
    }
  }

  /**
   * 接口名：获取总预算
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6615&itf=69603
   */
  'GET/api/campaign/findDayBudgetSum.json': {
    Req: {
      /**
       * feedFlow
       */
      bizCode?: string
    }
    Res: {
      data: {
        feedFlowItem: number
        feedFlowLive: number
        feedFlowPicture: number
      }
      info: {
        disableTime: boolean
        errorCode: null
        lockSla: boolean
        message: null
        ok: boolean
        redirectUrl: null
        unlockUrl: null
      }
    }
  }

  /**
   * 接口名：获取计划流程信息
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6615&itf=73883
   */
  'GET/api/campaign/displayConfig.json': {
    Req: {
      bizCode?: string
      campaignId?: string
    }
    Res: {
      data: {
        /**
         * material_local：基于实体的本地上传（商品）
         * template：创意模板
         */
        creativeTypeList: string[]
        creativeSolutionList: {
          /**
           * material_local：基于实体的本地上传（商品）
           * template：创意模板
           */
          uploadType: string
          /**
           * 一个map
           */
          properties: {
            /**
             * 方图限制,一般都是4，主流程使用
             */
            squareLimit: string
            /**
             * 长图限制，只有存在且大于0才可以长图
             */
            longLimit: string
            /**
             * 是否可以使用智能，用于在主流程要不要显示那个智能定向占个坑位，只有true才渲染
             */
            canUseSystem: boolean
            /**
             * 是否可以把默认的系统的创意删除
             */
            canDeleteSystem: boolean
            /**
             * 存在且是true表示可以使用优惠券
             */
            canUseCoupon: boolean
            /**
             * 存在且是true表示可以使用淘积木
             */
            canUseSmartTeemo: boolean
            /**
             * 存在且是true表示可以使用活动打标
             */
            canUseActivityIcon: boolean
          }
        }[]
        /**
         * 主流程的流量预估配置
         */
        uvPvPredictedType: {
          /**
           * 1正常流量预估模块 2显示文案
           */
          type: number
          /**
           * 显示的文案
           */
          tips: string
        }
      }
      info: {
        disableTime: boolean
        errorCode: null
        lockSla: boolean
        message: null
        ok: boolean
        redirectUrl: null
        unlockUrl: null
      }
    }
  }

  /**
   * 接口名：获取计划可以修改的配置
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6615&itf=76004
   */
  'GET/api/campaign/modifyConfig.json': {
    Req: {
      bizCode?: string
      campaignId?: string
    }
    Res: {
      data: {
        /**
         * 这个计划可以修改的组件类型
         */
        componentList: {
          /**
           * 这个计划可以修改的组件类型，目前只有appeal需要设置
           */
          componentType: string
        }[]
      }
      info: {
        disableTime: boolean
        errorCode: null
        lockSla: boolean
        message: null
        ok: boolean
        redirectUrl: null
        unlockUrl: null
      }
    }
  }

  /**
   * 接口名：批量转换计划到活动计划
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6615&itf=75064
   */
  'PUT/api/campaign/activity/transfer.json': {
    Req: {
      bizCode?: string
      campaignIdList?: any[]
      useCrowd?: boolean
      discount?: number
    }
    Res: {
      data: {}
      info: {
        disableTime: boolean
        errorCode: null
        lockSla: boolean
        message: null
        ok: boolean
        redirectUrl: null
        unlockUrl: null
      }
    }
  }

  /**
   * 接口名：批量转换活动scene
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6615&itf=75562
   */
  'PUT/api/campaign/transferScene.json': {
    Req: {
      bizCode?: string
      campaignIdList?: any[]
      marketScene?: string
    }
    Res: {
      data: {}
      info: {
        ok: boolean
      }
    }
  }

  /**
   * 接口名：转换活动阶段
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6615&itf=83231
   */
  'PUT/api/campaign/activity/transferPhase.json': {
    Req: {
      bizCode?: string
      campaignId?: number
    }
    Res: {
      data: {}
      info: {
        disableTime: boolean
        errorCode: null
        lockSla: boolean
        message: null
        ok: boolean
        redirectUrl: null
        unlockUrl: null
      }
    }
  }

  /**
   * 接口名：获取再营销-标签信息
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6615&itf=80101
   */
  'GET/api/target/getRemarketingCoverage.json': {
    Req: {
      campaignIdList?: any[]
      /**
       * pv 曝光次数
       * click 点击次数
       * collect 收藏次数
       * cart 加购
       */
      optionGroup?: string
    }
    Res: {
      data: {
        count: number
      }
      info: {
        errorCode: null
        message: null
        ok: boolean
        redirectUrl: null
      }
    }
  }

  /**
   * 接口名：新建单元
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6699&itf=67272
   */
  'POST/api/adgroup/add.json': {
    Req: {
      list?: {
        campaignId: number
        adgroupId: number
        adgroupName: string
        materialId: number
        crowdList: {
          /**
           * 人群名称
           */
          crowdName: string
          /**
           * 新建时不需要
           */
          crowdId: number
          /**
           * 人群扩展信息
           */
          properties: {}
          /**
           * 所选标签信息
           */
          targetLabel: {}
          /**
           * 出价
           */
          price: string
        }[]
        intelligentBid: {
          open?: boolean
          /**
           * 1促进进店 2促进成交 4促进粉丝 按位
           */
          strategy?: number
          scopePercent?: number
        }
        adzoneList: {
          adzoneId: number
          discount: string
        }[]
        /**
         * 系统托管手动出价时候的基础价格
         */
        basePrice: string
        /**
         * 批量出价选项1采用建议出价2采用自己设置的价格
         */
        batchBidOption: number
        /**
         * 30在建议出价的时候表示使用建议出价的30%，在自己设置的时候等同crowdList里面的price
         */
        batchBidValue: number
        /**
         * 宝贝上带的
         */
        materialTagId: number
        /**
         * 手动出价，目前只有在信息流商品推广新品获客新场景下使用，实际引擎不关心，和之前托管的basePrice不一样
         */
        userPrice: string
      }[]
      bizCode?: string
    }
    Res: {
      data: {
        adgroupIdList: number[]
      }
      info: {
        unlockUrl: string
        disableTime: boolean
        errorCode: string
        lockSla: boolean
        ok: boolean
        message: string
      }
    }
  }

  /**
   * 接口名：获取单元默认设置
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6699&itf=67271
   */
  'GET/api/adgroup/default.json': {
    Req: {
      bizCode?: string
      campaignId?: string
    }
    Res: {
      data: {
        adgroup: {
          adgroupName: string
          campaignId: number
          materialId: number
          crowdList: {
            crowdId: number
            crowdName: string
            crowdDesc: string
            targetLabel: {
              targetId: number
              targetType: number
              labelId: number
              labelName: string
              labelDesc: string
              status: number
              labelValue: string
              options: {
                optionId: number
                optionName: string
                optionValue: number
                status: number
                optionDesc: string
                properties: {}
              }[]
              properties: {}
              labelPriceMode: string
            }
            /**
             * 定向出价
             */
            price: number
          }[]
          intelligentBid: {
            open: boolean
            maxDiscount: string
            strategy: string
          }
          adzoneList: {
            adzoneId: number
          }[]
          cpcLimit: string
          status: string
        }
      }
      info: {
        unlockUrl: string
        disableTime: boolean
        errorCode: string
        lockSla: boolean
        ok: boolean
        message: string
      }
    }
  }

  /**
   * 接口名：获取单元详情
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6699&itf=67273
   */
  'GET/api/adgroup/get.json': {
    Req: {
      /**
       * 业务编码
       */
      bizCode?: string
      /**
       * 计划id
       */
      campaignId?: number
      /**
       * 单元id
       */
      adgroupId?: string
    }
    Res: {
      data: {
        adgroup: {
          adgroupName: string
          campaignId: number
          materialId: number
          crowdList: {
            crowdId: number
            crowdName: string
            crowdDesc: string
            targetLabel: {
              targetId: number
              targetType: number
              labelId: number
              labelName: string
              labelDesc: string
              status: number
              labelValue: string
              options: {
                optionId: number
                optionName: string
                optionValue: number
                status: number
                optionDesc: string
                properties: {}
              }[]
              properties: {}
              labelPriceMode: string
            }
            price: string
          }[]
          intelligentBid: {
            open: boolean
            scopePercent: string
            strategy: string
          }
          adzoneList: {
            adzoneId: number
            discount: string
          }[]
          cpcLimit: string
          status: string
          adgroupId: string
          basePrice: string
          bizCode: string
          materialTagId: string
          userPrice: string
        }
      }
      info: {
        unlockUrl: string
        disableTime: boolean
        errorCode: string
        lockSla: boolean
        ok: boolean
        message: string
      }
    }
  }

  /**
   * 接口名：获取单元列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6699&itf=67274
   */
  'GET/api/adgroup/findList.json': {
    Req: {
      /**
       * 业务编码
       */
      bizCode?: string
      /**
       * 计划id列表
       */
      campaignId?: string
      /**
       * 状态列表
       */
      statusList?: any[]
      adgroupName?: string
      adgroupIdList?: string
    }
    Res: {
      data: {
        list: {
          adgroupName: string
          campaignId: number
          materialId: number
          crowdList: {
            crowdId: number
            crowdName: string
            crowdDesc: string
            targetLabel: {
              targetId: number
              targetType: number
              labelId: number
              labelName: string
              labelDesc: string
              status: number
              labelValue: string
              options: {
                optionId: number
                optionName: string
                optionValue: number
                status: number
                optionDesc: string
                properties: {}
              }[]
              properties: {}
              labelPriceMode: string
            }
            price: number
          }[]
          intelligentBid: {
            open: boolean
            scopePercent: number
            strategy: number
          }
          cpcLimit: string
          status: string
          adgroupId: number
          bizCode: string
          materialTagId: string
        }[]
      }
      info: {
        unlockUrl: string
        disableTime: boolean
        errorCode: string
        lockSla: boolean
        ok: boolean
        message: string
      }
    }
  }

  /**
   * 接口名：批量删除单元
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6699&itf=67276
   */
  'DELETE/api/adgroup/batchDelete.json': {
    Req: {
      /**
       * 业务编码
       */
      bizCode?: string
      /**
       * 单元列表
       */
      adgroupIdList?: any[]
    }
    Res: {
      data: {
        errorList: {
          reason: string
          list: {
            adgroupId: number
          }[]
        }[]
      }
      info: {
        unlockUrl: string
        disableTime: boolean
        errorCode: string
        lockSla: boolean
        ok: boolean
        message: string
      }
    }
  }

  /**
   * 接口名：克隆单元
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6699&itf=67278
   */
  'POST/api/adgroup/clone.json': {
    Req: {
      /**
       * 模板计划id
       */
      campaignId?: number
      adgroups?: {
        /**
         * 单元id
         */
        adgroupId: string
        /**
         * 单元名称
         */
        adgroupName: string
      }[]
      /**
       * 业务编码
       */
      bizCode?: string
    }
    Res: {
      info: {
        unlockUrl: string
        disableTime: boolean
        errorCode: string
        lockSla: boolean
        ok: boolean
        message: string
      }
    }
  }

  /**
   * 接口名：批量全量修改单元信息
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6699&itf=67342
   */
  'PUT/api/adgroup/batchModEntire.json': {
    Req: {
      list?: {
        adgroupId: number
        adgroupName: string
        campaignId: number
        materialIdList: any[]
        crowdList: string
        intelligentBid: number
        adzoneIdList: any[]
        cpcLimit: number
        autoBidStrategy: string
        maxPriceRate: string
      }[]
      bizCode?: string
    }
    Res: {
      data: {
        /**
         * 编辑成功的单元id
         */
        adgroupIdList: number[]
      }
      info: {
        unlockUrl: string
        disableTime: boolean
        errorCode: string
        lockSla: boolean
        ok: boolean
        message: string
      }
    }
  }

  /**
   * 接口名：批量部分修改单元信息
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6699&itf=79050
   */
  'PUT/api/adgroup/batchModifyPart.json': {
    Req: {
      adgroupList?: {
        couponInfo: {
          open?: boolean
          /**
           * value = 'auto' or 'manual'
           */
          mode?: string
          /**
           * 优惠券id，打开前mode=manual的时候需要
           */
          couponId?: number
          /**
           * 优惠券类型
           */
          type?: number
        }
        adgroupId: string
        /**
         * 是否使用系统创意，没有设置的时候不要传，只有传了才会修改
         */
        useSystemCreative: boolean
      }[]
      bizCode?: string
    }
    Res: {
      data: {
        errorList: any[]
      }
      info: {
        unlockUrl: string
        disableTime: boolean
        errorCode: string
        lockSla: boolean
        ok: boolean
        message: string
      }
    }
  }

  /**
   * 接口名：质量分接口
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6699&itf=67557
   */
  'GET/api/adgroup/qualityScore/findList.json': {
    Req: {
      adgroupId?: string
      /**
       * 分析维度 1广告位 2创意 3定向
       */
      analysisTargetType?: string
      analysisTargetId?: number
      /**
       * feedFlowItem
       */
      bizCode?: string
    }
    Res: {
      data: {
        list: {
          adzoneId: number
          adzoneName: string
          creativeName: string
          creativeId: number
          targetType: number
          targetName: string
          qualityScore: number
        }[]
      }
      info: {
        disableTime: boolean
        errorCode: null
        lockSla: boolean
        message: null
        ok: boolean
        redirectUrl: null
        unlockUrl: null
      }
    }
  }

  /**
   * 接口名：质量分折线图
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6699&itf=69823
   */
  'GET/api/adgroup/qualityScore/findHisList.json': {
    Req: {
      adgroupId?: string
      adzoneId?: number
      creativeId?: number
      targetType?: number
      /**
       * feedFlowItem
       */
      bizCode?: string
    }
    Res: {
      data: {
        list: {
          qualityScore: number
          pv: number
          logDate: string
        }[]
      }
      info: {}
    }
  }

  /**
   * 接口名：批量修改单元
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6699&itf=67703
   */
  'PUT/api/adgroup/batchModify.json': {
    Req: {
      bizCode?: string
      adgroupIdList?: any[]
      status?: number
      /**
       * 创意万花筒
       */
      directedSmartCreative?: boolean
      intelligentBid?: {
        open?: boolean
        scopePercent?: number
        /**
         * 1促进进店 2促进成交 4促进粉丝 按位
         */
        strategy?: number
      }
      /**
       * 创意优选
       */
      creativeFilter?: boolean
      couponInfo?: {
        open?: boolean
        /**
         * value = 'auto' or 'manual'
         */
        mode?: string
        /**
         * 优惠券id，打开前mode=manual的时候需要
         */
        couponId?: number
        /**
         * 优惠券类型
         */
        type?: number
      }
    }
    Res: {
      data: {
        errorList: {
          reason: string
          list: {
            adgroupId: number
          }[]
        }[]
      }
      info: {
        unlockUrl: string
        disableTime: boolean
        errorCode: string
        lockSla: boolean
        ok: boolean
        message: string
      }
    }
  }

  /**
   * 接口名：质量分查询条件
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6699&itf=68838
   */
  'GET/api/adgroup/qualityScore/findQueryCondition.json': {
    Req: {
      adgroupId?: number
      analysisTargetType?: number
      /**
       * feedFlowItem
       */
      bizCode?: string
    }
    Res: {
      data: {
        activityList: {
          activityId: number
          activityName: string
          bizCode: null
        }[]
        catList: {
          bizCode: null
          catName: string
          categoryId: number
        }[]
        tagList: {
          bizCode: null
          tagId: number
          tagName: string
        }[]
      }
      info: {
        errorCode: null
        message: null
        ok: boolean
      }
    }
  }

  /**
   * 接口名：查看计划带着单元的组合接口
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6699&itf=69419
   */
  'GET/api/adgroup/findCampaignAndAdgroupList.json': {
    Req: {
      bizcode?: string
      adgroupName?: string
      campaignName?: string
      solutionTypeList?: any[]
      campaignTypeList?: any[]
      campaignMarketSceneList?: any[]
      /**
       * creative adzone crowd
       */
      module?: string
    }
    Res: {
      data: {
        list: {
          activityAutoTransfer:
            | {
                [k: string]: any
              }
            | boolean
          activityId:
            | {
                [k: string]: any
              }
            | number
          adStrategy: null
          adStrategyInfo: null
          adgroupIdList: null
          adgroupList: {
            adgroupId: number
            adgroupIdList: null
            adgroupName: string
            adzoneList: null
            autoBid: null
            autoMatch: null
            basePrice: null
            batchBidOption: number
            batchBidValue: null
            bizCode: string
            campaignId: number
            campaignName: string
            campaignType: string
            clickUrl: null
            couponInfo: {
              bizCode: null
              couponId: null
              couponName: null
              mode: string
              open: boolean
              type: null
            }
            creativeFilter: null
            creativeList: null
            crowdList: null
            directedSmartCreative: boolean
            faultEnumList: null
            imgUrl: null
            intelligentBid: {
              open: boolean
              scopePercent: number
              strategy: number
            }
            itemIdList: null
            marketScene: string
            material: null
            materialId: number
            materialTagId: number
            punishReasonList: any[]
            qualityScore: null
            reportInfoList: any[]
            showTagInfoList: any[]
            solutionType: string
            status: string
            strategyPath: null
            systemBid: null
            systemBidUpperLimit: null
            useSystemCreative: null
            userPrice: null
            wordList: null
          }[]
          assureMoney: null
          assureType: null
          assureValue: null
          autoBid: boolean
          bizCode: string
          campaignId: number
          campaignName: string
          campaignType: string
          canEdit: null
          crowdList: null
          dayBudget:
            | number
            | {
                [k: string]: any
              }
          dayBudgetUnlimit: boolean
          faultEnumList: null
          focusBuyerList: null
          hasActivityItem: null
          launchAreaList: null
          launchPeriodList: {
            dayOfWeek: number
            timeSpanList: {
              discount: number
              time: string
            }[]
          }[]
          launchTime: {
            beginTime: string
            endTime: string
            launchForever: boolean
          }
          lifeCycle: number
          marketAim: string
          marketScene:
            | string
            | {
                [k: string]: any
              }
          operationList: any[]
          promotionEntity: {
            bizCode: null
            itemIdList: null
            type: null
            url: null
          }
          reportInfoList: any[]
          settleCharge: null
          showTagList: string[]
          solutionType: string
          sourceChannel: null
          sourceEntityId: null
          speedType: number
          status: string
          systemBid: null
          targetBuyer: number
          topTime:
            | {
                [k: string]: any
              }
            | string
          transferSceneInfo: null
          transferStatus: string
        }[]
        '': string
      }
      info: {
        errorCode: null
        message: null
        ok: boolean
        redirectUrl: null
      }
    }
  }

  /**
   * 接口名：修改单元上的系统创意设置
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6699&itf=75561
   */
  'PUT/api/adgroup/useSystemCreative.json': {
    Req: {
      adgroupList?: {
        adgroupId: number
        useSystemCreative: boolean
      }[]
    }
    Res: {
      info: {
        unlockUrl: string
        disableTime: boolean
        errorCode: string
        lockSla: boolean
        ok: boolean
        message: string
      }
    }
  }

  /**
   * 接口名：【接口优化】修改单元
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6699&itf=78328
   */
  'PUT/api/adgroup/batchModifyEntire.json': {
    Req: {
      adgroupList?: any[]
      crowdList?: any[]
      adzoneList?: number
    }
    Res: {
      data: {
        adgroupIdList: number[]
      }
      info: {
        errorCode: null
        message: null
        ok: boolean
        redirectUrl: null
      }
    }
  }

  /**
   * 接口名：批量修改单元出价
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6699&itf=87108
   */
  'PUT/api/adgroup/batchModifyPrice.json': {
    Req: {
      bizCode?: string
      adgroupList?: {
        adgroupId: number
        campaignId: number
        /**
         * 托管-手动
         */
        basePrice: number
        /**
         * 侧重人群-手动出价
         */
        userPrice: number
        /**
         * 侧重人群-出价上限
         */
        systemBidUpperLimit: number
      }[]
    }
    Res: {
      data: {}
      info: {
        errorCode: null
        message: null
        ok: boolean
        redirectUrl: null
      }
    }
  }

  /**
   * 接口名：批量新建创意
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6662&itf=67197
   */
  'POST/api/creative/batchAddAndBind.json': {
    Req: {
      creativeList?: {
        adgroupId: number
        /**
         * 这个是用户设置的文案，其实和创意名字不一样，所以不用name，但是返回创意列表时候都会返回
         */
        title: string
        /**
         * 修改，对方的jsInHtml
         */
        imgUrl: string
        /**
         * 如果是前端创意中心生成的创意，会有这个标示是不是采用了智能文案，以及具体采用的是哪个tag的文案
         */
        titleTag: string
        /**
         * 图片类型 1用户自己上传 2主图 3附图
         */
        imgType: number
        /**
         * 新增--对应format
         * 钻展模板--10
         */
        format: number
        /**
         * 新增--width + "x" + height
         * 钻展模板--创意模板包id
         */
        creativeSize: string
        /**
         * 新增--对应templateId
         * 钻展模板--不需要
         */
        templateId: string
        /**
         * 新增--创意名称
         * 钻展模板--商品标题
         */
        creativeName: string
        /**
         * 新增--templetData
         * 钻展模板--内部有key，itemId,couponId
         */
        templateData: string
        /**
         * 新增--jsContentsMap
         */
        jsContentsMap: string
        /**
         * 新增--对应outerId
         */
        outerId: number
        /**
         * 钻展模板--模板包id
         */
        templatePackageId: number
        /**
         * 是否使用淘积木
         */
        useSmartTeemo: boolean
        /**
         * 淘积木id
         */
        smartTeemoId: number
        /**
         * 是否使用活动打标
         */
        useActivityIcon: boolean
      }[]
      bizcode?: string
    }
    Res: {
      data: {
        failAdgroupList: {
          adgroupId: string
          adgroupName: string
        }[]
      }
      info: {
        disableTime: boolean
        errorCode: null
        lockSla: boolean
        message: null
        ok: boolean
        redirectUrl: null
        unlockUrl: null
      }
    }
  }

  /**
   * 接口名：批量解绑创意
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6662&itf=73851
   */
  'PUT/api/creative/batchUnbind.json': {
    Req: {
      creativeBindList?: {
        adgroupId: number
        creativeId: number
      }[]
      bizcode?: string
    }
    Res: {
      data: {}
      info: {}
    }
  }

  /**
   * 接口名：推荐创意
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6662&itf=83233
   */
  'GET/api/creative/recommend.json': {
    Req: {
      bizcode?: string
      adgroupIdList?: any[]
    }
    Res: {
      date: {
        list: {
          adgroupId: number
          format: number
          creativeSize: string
          templateId: string
          creativeName: string
          templateData: string
          jsContentsMap: string
          templatePackageId: number
          outerId: number
          imgUrl: string
        }[]
      }
      info: {
        disableTime: boolean
        errorCode: null
        lockSla: boolean
        message: null
        ok: boolean
        redirectUrl: null
        unlockUrl: null
      }
    }
  }

  /**
   * 接口名：横向管理查看创意列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6662&itf=67199
   */
  'GET/api/creative/findPage.json': {
    Req: {
      status?: string
      solutionTypeList?: number
      bizcode?: string
      offset?: number
      pageSize?: number
      campaignName?: string
      reportQuery?: {
        startTime?: string
        endTime?: string
        logDateList?: string
      }
      adgroupName?: string
      creativeName?: string
      needReport?: boolean
      activityId?: number
    }
    Res: {
      data: {
        list: {
          adgroupId: number
          adgroupName: string
          bizCode: string
          bizType: number
          campaignId: number
          campaignModel: number
          campaignName: string
          clickUrl: string
          contentMediaTypeNames: null
          creativeId: number
          creativeName: string
          creativeSize: string
          creativeFormat: number
          creativeFormatName: string
          imgUrl: string
          faultEnumList: {
            faultEnumName: string[]
          }[]
          reportInfoList: {
            click: string
            charge: number
            adPv: number
            ecpm: number
            ctr: number
            ecpc: number
            /**
             * 有logDateList查询时候才会返回
             */
            logDate: string
          }[]
          solutionType: string
          campaignType: string
          system: boolean
          creativeLevel: number
          status: string
          punishReasonList: {
            blockId: string
            blockName: string
            blockUrl: string
            reasonDTOs: {
              auditReasonId: number
              auditReasonName: string
              flawUrls: string[]
              redirectUrl: string
            }[]
          }[]
          format: string
          /**
           * false表示不可以移除
           */
          canEdit: boolean
          materialId: string
          /**
           * 创意有效时间
           */
          effectiveTime: {
            beginTime: string
            endTime: string
          }
          /**
           * 预览的类型，决定在横向管理里面预览的形式
           */
          previewFormat: string
          /**
           * 预览的尺寸，决定在横向管理里面预览时候的尺寸
           */
          previewSize: string
          /**
           * 预览地址
           */
          previewImgUrl: string
        }[]
        count: number
      }
      info: {
        disableTime: boolean
        errorCode: null
        lockSla: boolean
        message: null
        ok: boolean
        redirectUrl: null
        unlockUrl: null
      }
    }
  }

  /**
   * 接口名：查询创意违规记录
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6662&itf=67558
   */
  'GET/api/creative/findPunishRecordList.json': {
    Req: {
      offset?: number
      pageSize?: number
    }
    Res: {
      data: {
        count: number
        list: {
          appId: null
          bizCode: null
          creative: {
            adgroupId: null
            adzoneId: null
            appId: null
            auditReason: string
            auditStatus: number
            bizCode: string
            campaignId: null
            canEdit: boolean
            clickUrl: string
            creativeId: number
            creativeName: string
            creativeSize: string
            creativeType: number
            crowdId: null
            dataMap: null
            faultEnumList: null
            feedIdInTemplateData: null
            format: number
            formatName: string
            gmtCreate: null
            gmtModified: null
            imgType: null
            imgUrl: string
            itemId: null
            jsContentsMap: null
            outerId: null
            pageFocusType: null
            punishReasonList: {
              appId: null
              bizCode: null
              blockId: number
              blockName: string
              blockUrl: string
              gmtCreate: null
              gmtModified: null
              reasonDTOs: {
                appId: null
                auditReasonId: number
                auditReasonName: string
                bizCode: null
                flawUrls: null
                gmtCreate: null
                gmtModified: null
                redirectUrl: string
              }[]
            }[]
            reportInfoList: null
            templateData: null
            templateId: number
            templatePackageId: null
            title: null
            titleTag: null
          }
          gmtCreate: null
          gmtModified: null
          penaltyPoints: number
          punishReason: string
          punishReasonDTOs: {
            appId: null
            bizCode: null
            blockId: number
            blockName: string
            blockUrl: string
            gmtCreate: null
            gmtModified: null
            reasonDTOs: {
              appId: null
              auditReasonId: number
              auditReasonName: string
              bizCode: null
              flawUrls: any[]
              gmtCreate: null
              gmtModified: null
              redirectUrl: string
            }[]
          }[]
          punishTime: string
          punishType: string
          punishViolatedLevel: number
        }[]
      }
      info: {
        errorCode: null
        message: null
        ok: boolean
      }
    }
  }

  /**
   * 接口名：创意查询条件
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6662&itf=67560
   */
  'GET/api/creative/findQueryCondition.json': {
    Req: {
      bizcode?: string
    }
    Res: {
      data: {
        formatList: {
          formatName: string
          format: number
        }[]
      }
      info: {
        ok: boolean
      }
    }
  }

  /**
   * 接口名：跳转新建创意页面
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6662&itf=68950
   */
  'GET/api/creativeCenter/gotoCreation.json': {
    Req: {
      bizCode?: string
      /**
       * 类型  square、long
       */
      imageType?: string
      adgroupId?: number
    }
    Res: {}
  }

  /**
   * 接口名：查看创意模板
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6662&itf=70224
   */
  'GET/api/creative/template/findPackageList.json': {
    Req: {
      bizCode?: string
      adgroupId?: number
    }
    Res: {
      data: {
        list: {
          imgUrl: string
          templatePackageId: number
          size: string
          /**
           * 模板制作时候的方案
           * all_items (纯粹商品) 和 item_template （先商品列表再去模板浮层）
           */
          createSolution: string
        }[]
      }
      info: {
        disableTime: boolean
        errorCode: null
        lockSla: boolean
        message: null
        ok: boolean
        redirectUrl: null
        unlockUrl: null
      }
    }
  }

  /**
   * 接口名：跳转模板制作页面
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6662&itf=70256
   */
  'GET/api/creativeCenter/gotoTemplateNew.json': {
    Req: {
      bizCode?: string
      templatePackageId?: number
      /**
       * 那种先出我们前端浮层再到修拙的使用
       */
      templateData?: string
    }
    Res: {}
  }

  /**
   * 接口名：获取创意中心需要的物料
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6662&itf=70355
   */
  'GET/api/creativeCenter/getMaterial.json': {
    Req: {
      bizCode?: string
      adgroupId?: number
      templatePackageId?: number
      templateData?: string
    }
    Res: {
      data: {
        optionalSetting: {
          itemList: {
            id: number
            picture: string
            algoTitle: string
            price: string
          }[]
        }
        defaultSetting: {
          clickurl: string
          video_duration: string
        }
      }
      info: {
        disableTime: boolean
        errorCode: null
        lockSla: boolean
        message: null
        ok: boolean
        redirectUrl: null
        unlockUrl: null
      }
    }
  }

  /**
   * 接口名：删除创意
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6662&itf=73923
   */
  'DELETE/api/creative/delete.json': {
    Req: {}
    Res: {
      data: {}
      info: {
        disableTime: boolean
        errorCode: null
        lockSla: boolean
        message: null
        ok: boolean
        redirectUrl: null
        unlockUrl: null
      }
    }
  }

  /**
   * 接口名：活动创意打标
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6662&itf=85285
   */
  'PUT/api/creative/activity/batchAddTag.json': {
    Req: {
      bizCode?: string
    }
    Res: {
      data: {}
      info: {
        errorCode: null
        message: null
        ok: boolean
        redirectUrl: null
      }
    }
  }

  /**
   * 接口名：预览创意接口
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6662&itf=77911
   */
  'POST/api/creative/preview.json': {
    Req: {
      bizCode?: string
      adgroupId?: number
      imgUrl?: string
      /**
       * 1表示是用户自己上传 2主图 3附图 分不清主副图就都用2号了
       */
      imgType?: number
      title?: string
      /**
       * 单元其他还没有提交的设置
       */
      adgroup?: {
        /**
         * 优惠券信息
         */
        couponInfo?: {
          open?: boolean
          mode?: string
          couponId?: string
          type?: number
        }
      }
      useSmartTeemo?: boolean
      smartTeemoId?: string
      useActivityIcon?: boolean
    }
    Res: {
      data: {
        appId: null
        bizCode: null
        gmtCreate: null
        gmtModified: null
        previewFormat: number
        previewImgUrl: string
        previewScale: number
        previewSize: string
      }
      info: {
        errorCode: null
        message: null
        ok: boolean
        redirectUrl: null
      }
    }
  }

  /**
   * 接口名：获取资源位列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6687&itf=67190
   */
  'GET/api/adzone/findList.json': {
    Req: {
      /**
       * bizCode
       */
      bizcode?: string
      /**
       * 物料id List
       */
      materialIdList?: any[]
      /**
       * 资源位id List
       */
      adzoneIdList?: any[]
      /**
       * 宝贝来源
       */
      materialSource?: number
      adgroupId?: number
      campaignId?: number
    }
    Res: {
      data: {
        list: {
          /**
           * 资源位Id
           */
          adzoneId: number
          /**
           * 资源位名称
           */
          adzoneName: number
          /**
           * 是否站内 outside 与 inside
           */
          inside: string
          /**
           * 允许的媒体类型 pc 与 wireless 还有 all （无线+PC）
           */
          allowMediaTypeList: string[]
          /**
           * 日均可竞得流量
           */
          pv: string
          tags: {
            /**
             * 打标文案
             */
            name: string
            /**
             * 打标hover提示内容，可选
             */
            desc: string
            /**
             * 打标icon颜色，默认品牌色，可选
             */
            color: string
          }[]
          /**
           * 操作情况
           */
          operationList: {
            reason: string
            /**
             *  true表示不可以点击，展示reason
             */
            disabled: string
            /**
             * 操作key
             */
            key: string
          }[]
        }[]
      }
      info: {
        disableTime: boolean
        errorCode: null
        lockSla: boolean
        message: null
        ok: boolean
        redirectUrl: null
        unlockUrl: null
      }
    }
  }

  /**
   * 接口名：检查资源位匹配情况
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6687&itf=67243
   */
  'GET/api/adzone/checkList.json': {
    Req: {
      bizcode?: string
      /**
       * 物料ID list
       */
      materialIdList?: any[]
      /**
       * 资源位Id List
       */
      adzoneIdList?: any[]
    }
    Res: {
      data: {
        list: {
          materialId: number
          adzoneList: {
            isMatched: boolean
            id: number
          }[]
        }[]
      }
      info: {
        disableTime: boolean
        errorCode: null
        lockSla: boolean
        message: null
        ok: boolean
        redirectUrl: null
        unlockUrl: null
      }
    }
  }

  /**
   * 接口名：【横向】移除绑定资源位
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6687&itf=67248
   */
  'PUT/api/adzone/unbindList.json': {
    Req: {
      list?: {
        adzoneId: number
        adgroupId: number
        campaignId: number
      }[]
      bizcode?: string
    }
    Res: {
      data: {
        errorList: {
          reason: string
          list: {
            adgroupId: number
            adzoneId: number
          }[]
        }[]
      }
      info: {
        disableTime: boolean
        errorCode: null
        lockSla: boolean
        message: null
        ok: boolean
        redirectUrl: null
        unlockUrl: null
      }
    }
  }

  /**
   * 接口名：【横向】更新广告位绑定情况
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6687&itf=67254
   */
  'PUT/api/adzone/bindList.json': {
    Req: {
      list?: {
        campaignId: number
        adgroupId: number
        adzoneId: number
        discount: string
      }[]
      bizcode?: string
    }
    Res: {
      data: {}
      info: {
        disableTime: boolean
        errorCode: null
        lockSla: boolean
        message: null
        ok: boolean
        redirectUrl: null
        unlockUrl: null
      }
    }
  }

  /**
   * 接口名：【横向】分页获取资源位列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6687&itf=67267
   */
  'GET/api/adzone/findPage.json': {
    Req: {
      /**
       * 偏移量
       */
      offset?: number
      /**
       * 每页显示数量
       */
      pageSize?: number
      bizcode?: string
      /**
       * 计划Id
       */
      campaignId?: number
      /**
       * 单元Id
       */
      adgroupId?: number
      /**
       * 是否需要查询报表参数
       */
      needReport?: boolean
      /**
       * 报表查询参数
       */
      reportQuery?: {
        startTime?: string
        endTime?: string
        logDateList?: any[]
      }
      campaignName?: string
      adzoneName?: string
      adgroupName?: string
    }
    Res: {
      data: {
        /**
         * 总数，不是list的size
         */
        count: number
        list: {
          /**
           * 资源位Id
           */
          adzoneId: number
          /**
           * 单元ID
           */
          adgroupId: number
          /**
           * 资源位名称
           */
          adzoneName: string
          /**
           * 计划名称
           */
          campaignName: string
          /**
           * 计划ID
           */
          campaignId: number
          /**
           * 溢价比例
           */
          discount: number
          reportInfoList: {
            /**
             * 展现量
             */
            adPv: number
            /**
             * 点击量
             */
            click: number
            /**
             * 千次展现成本
             */
            ecpm: number
            /**
             * 点击率
             */
            ctr: number
            /**
             * 点击单价
             */
            ecpc: number
            /**
             * 消耗
             */
            charge: number
            logDate: string
          }[]
          adgroupName: string
          solutionType: string
          campaignType: string
          autoBid: boolean
          tags: {
            name: string
            desc: string
            color: string
          }[]
          bizCode: string
          /**
           * 是否是基础流量包
           */
          basePackage: boolean
          /**
           * false表示不可以移除改价
           */
          canEdit: boolean
        }[]
      }
      info: {
        disableTime: boolean
        errorCode: null
        lockSla: boolean
        message: null
        ok: boolean
        redirectUrl: null
        unlockUrl: null
      }
    }
  }

  /**
   * 接口名：【管理】批量修改溢价
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6687&itf=68949
   */
  'PUT/api/adzone/batchModify.json': {
    Req: {
      adzoneList?: {
        adzoneId: number
        discount: number
        campaignId: number
        adgroupId: number
      }[]
    }
    Res: {
      data: {}
      info: {
        disableTime: boolean
        errorCode: null
        lockSla: boolean
        message: null
        ok: boolean
        redirectUrl: null
        unlockUrl: null
      }
    }
  }

  /**
   * 接口名：分页获取物料列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6688&itf=67403
   */
  'GET/api/material/findPage.json': {
    Req: {
      /**
       * 计划id
       */
      campaignId?: string
      /**
       * 产品编码
       */
      bizCode?: string
      /**
       * 分页大小
       */
      pageSize?: string
      /**
       * 类目id
       */
      categoryId?: string
      /**
       * 排序字段 只有商品支持排序，bidCount quantity和上架时间
       */
      orderField?: string
      /**
       * 排序方式
       */
      orderBy?: string
      /**
       * 偏移量
       */
      offset?: number
      /**
       * 1全部宝贝 2推荐宝贝 3活动宝贝 4有好货宝贝  5微淘 6有好货帖子 7直播
       */
      tagId?: number
      activityId?: string
      materialIdList?: any[]
      /**
       * 搜索标题
       */
      title?: string
      adgroupIdList?: any[]
      sourceChannel?: string
    }
    Res: {
      data: {
        count: number
        list: {
          /**
           * 销量
           */
          bidCount: number
          /**
           * 类目id
           */
          categoryId: string
          /**
           * 宝贝id/帖子Id
           */
          materialId: number
          /**
           * 图片链接
           */
          imgUrl: string
          /**
           * 是否推荐
           */
          isRecommend: boolean
          /**
           * 宝贝链接
           */
          linkUrl: string
          /**
           * 有用，多张图片，在新建创意的时候前端会使用
           */
          multiImageURL: string[]
          /**
           * 价格
           */
          price: number
          /**
           * 库存
           */
          quantity: number
          /**
           * 推荐指数
           */
          recommendScore: number
          /**
           * 发布时间
           */
          starts: string
          status: number
          /**
           * 商品标题
           */
          title: string
          /**
           * 支持的类型
           */
          mediaTypeNames: string[]
          /**
           * 帖子流量信息
           */
          feedReportInfo: {
            pv: string
            click: string
          }
          /**
           * 直播开始时间，只有直播下有
           *
           */
          liveStartTime: string
          /**
           * 帖子发布时间
           *
           */
          publishTime: string
          /**
           * 新建时间
           */
          createTime: string
          /**
           * 最后修改时间
           */
          modifyTime: string
          /**
           * 根据单元id或者有tagId的情况下才有可能反查的视频时长，单位秒
           */
          videoDuration: number
          /**
           * 先只有文案，将来有其他的再说
           */
          showTagList: {
            /**
             * 展示的文案
             */
            showTag: string
          }[]
          materialTagId: number
          submissionCreateTime: string
          submissionReceiveTime: string
          darenName: string
          submissionSubject: string
          multiLongImageURL: any[]
        }[]
      }
      info: {
        disableTime: boolean
        errorCode: null
        lockSla: boolean
        message: null
        ok: boolean
        redirectUrl: null
        unlockUrl: null
      }
    }
  }

  /**
   * 接口名：获取推荐物料列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6688&itf=87196
   */
  'GET/api/material/recommend.json': {
    Req: {
      /**
       * 产品编码
       */
      bizCode?: string
      sourceChannel?: string
    }
    Res: {
      info: {
        disableTime: boolean
        errorCode: null
        lockSla: boolean
        message: null
        ok: boolean
        redirectUrl: null
        unlockUrl: null
      }
      data: {
        list: {
          /**
           * 是否推荐
           */
          isRecommend: boolean
          /**
           * 宝贝链接
           */
          linkUrl: string
          /**
           * 有用，多张图片，在新建创意的时候前端会使用
           */
          multiImageURL: string[]
          /**
           * 价格
           */
          price: number
          /**
           * 库存
           */
          quantity: number
          /**
           * 推荐指数
           */
          recommendScore: number
          /**
           * 发布时间
           */
          starts: string
          status: number
          /**
           * 商品标题
           */
          title: string
          /**
           * 新建时间
           */
          createTime: string
          /**
           * 最后修改时间
           */
          modifyTime: string
          /**
           * 支持的类型
           */
          mediaTypeNames: string[]
          /**
           * 帖子流量信息
           */
          feedReportInfo: {
            pv: string
            click: string
          }
          /**
           * 直播开始时间，只有直播下有
           *
           */
          liveStartTime: string
          /**
           * 帖子发布时间
           *
           */
          publishTime: string
          /**
           * 先只有文案，将来有其他的再说
           */
          showTagList: {
            /**
             * 展示的文案
             */
            showTag: string
          }[]
          submissionCreateTime: string
          submissionReceiveTime: string
          darenName: string
          submissionSubject: string
          multiLongImageURL: any[]
          materialTagId: number
          /**
           * 根据单元id或者有tagId的情况下才有可能反查的视频时长，单位秒
           */
          videoDuration: number
          /**
           * 销量
           */
          bidCount: number
          /**
           * 类目id
           */
          categoryId: string
          /**
           * 宝贝id/帖子Id
           */
          materialId: number
          /**
           * 图片链接
           */
          imgUrl: string
        }[]
      }
    }
  }

  /**
   * 接口名：获取物料查询条件
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6688&itf=67405
   */
  'GET/api/material/findQueryCondition.json': {
    Req: {
      bizCode?: string
      campaignId?: string
      /**
       * feedFlowItemNewGuest
       */
      sourceChannel?: string
    }
    Res: {
      data: {
        activityList: {
          activityId: number
          activityName: string
          bizCode: null
        }[]
        catList: {
          bizCode: null
          catName: string
          categoryId: number
        }[]
        tagList: {
          bizCode: null
          tagId: number
          tagName: string
          dropdownKeyList: any[]
        }[]
        dropdownList: {
          key: string
          list: {
            text: number
            value: number
          }[]
        }[]
      }
      info: {
        errorCode: null
        message: null
        ok: boolean
      }
    }
  }

  /**
   * 接口名：获取商品查询条件
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6688&itf=70820
   */
  'GET/api/material/item/findQueryCondition.json': {
    Req: {
      bizCode?: string
      campaignId?: string
    }
    Res: {
      data: {
        tagList: {
          tagId: number
          tagName: string
          dropdownKeyList: any[]
        }[]
        dropdownList: {
          key: string
          list: {
            text: number
            value: number
          }[]
        }[]
      }
      info: {
        disableTime: boolean
        errorCode: null
        lockSla: boolean
        message: null
        ok: boolean
        redirectUrl: null
        unlockUrl: null
      }
    }
  }

  /**
   * 接口名：获取权益查询条件
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6688&itf=78780
   */
  'GET/api/coupon/findQueryCondition.json': {
    Req: {
      bizCode?: string
      campaignId?: string
    }
    Res: {
      data: {
        typeList: {
          type: number
          typeName: string
        }[]
      }
      info: {
        ok: boolean
      }
    }
  }

  /**
   * 接口名：查询物料违规记录
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6688&itf=67559
   */
  'GET/api/material/findPunishRecordList.json': {
    Req: {
      offset?: number
      pageSize?: number
      bizCode?: string
    }
    Res: {
      data: {
        count: number
        list: {
          punishType: number
          punishTime: string
          id: number
          imgUrl: string
          linkUrl: string
          title: string
          punishReasonList: {
            blockId: number
            blockName: string
            blockUrl: string
            reasonDTOs: {
              auditReasonId: number
              auditReasonName: string
              flawUrls: string[]
              redirectUrl: string
            }[]
          }[]
          punishViolatedLevel: number
          penaltyPoints: number
        }[]
      }
      info: {
        disableTime: boolean
        message: string
        errorCode: string
        ok: boolean
        unlockUrl: string
        lockSla: boolean
      }
    }
  }

  /**
   * 接口名：校验推广
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6688&itf=67656
   */
  'GET/api/material/accessAllowed.json': {
    Req: {
      bizCode?: string
      materialId?: number
      campaignId?: number
      tagId?: number
    }
    Res: {
      data: {
        isAccessAllowed: boolean
        /**
         * 直播推广使用，以下宝贝不存在授权关系
         */
        notAgencyItemList: {
          imgUrl: string
          linkUrl: string
          title: string
          materialId: number
        }[]
        /**
         * 直播推广使用，以下宝贝不满足直播投放商品准入规则
         */
        notAccessItemList: {
          imgUrl: string
          linkUrl: string
          title: string
          materialId: number
        }[]
        reason: string
      }
      info: {
        disableTime: boolean
        errorCode: null
        lockSla: boolean
        message: null
        ok: boolean
        redirectUrl: null
        unlockUrl: null
      }
    }
  }

  /**
   * 接口名：校验商品
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6688&itf=70819
   */
  'GET/api/material/item/accessAllowed.json': {
    Req: {
      bizCode?: string
      materialId?: number
      campaignId?: number
      tagId?: number
    }
    Res: {
      data: {
        isAccessAllowed: boolean
        reason: string
      }
      info: {
        disableTime: boolean
        errorCode: null
        lockSla: boolean
        message: null
        ok: boolean
        redirectUrl: null
        unlockUrl: null
      }
    }
  }

  /**
   * 接口名：优惠券接口
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6688&itf=70837
   */
  'GET/api/coupon/findList.json': {
    Req: {
      bizCode?: string
      adgroupId?: number
    }
    Res: {
      data: {
        list: {
          couponId: number
          couponName: string
        }[]
      }
      info: {
        disableTime: boolean
        errorCode: null
        lockSla: boolean
        message: null
        ok: boolean
        redirectUrl: null
        unlockUrl: null
      }
    }
  }

  /**
   * 接口名：分页获取权益信息
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6688&itf=78647
   */
  'GET/api/coupon/findPage.json': {
    Req: {
      bizCode?: string
      /**
       * 单元，必传，这个不是用来指定某个单元下已经选择的优惠券的，是根据单元来查可以用的优惠券的
       */
      adgroupId?: number
      offset?: number
      pageSize?: number
      /**
       * 类型，必传
       */
      type?: number
    }
    Res: {
      data: {
        count: number
        list: {
          couponId: number
          couponName: string
          /**
           * 发行量
           */
          issueNum: number
          /**
           * 已领取数量
           */
          usedNum: number
          /**
           * 优惠券开始时间
           */
          startTime: string
          /**
           * 结束时间
           */
          endTime: string
          /**
           * 店铺宝的活动详情
           */
          promotionDescription: string
          /**
           * 店铺宝的活动时间
           */
          promotionTime: string
          /**
           * 类型
           */
          type: number
          /**
           * 门槛
           */
          threshold: number
          /**
           * 面额
           */
          denomination: number
        }[]
      }
      info: {
        disableTime: boolean
        errorCode: null
        lockSla: boolean
        message: null
        ok: boolean
        redirectUrl: null
        unlockUrl: null
      }
    }
  }

  /**
   * 接口名：获取推荐优惠券
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6688&itf=78925
   */
  'GET/api/coupon/recommend.json': {
    Req: {
      bizCode?: string
      /**
       * 单元，必传，这个不是用来指定某个单元下已经选择的优惠券的，是根据单元来查可以用的优惠券的
       */
      adgroupIdList?: number
    }
    Res: {
      data: {
        list: {
          adgroupId: number
          couponId: number
          couponName: string
          type: number
        }[]
      }
      info: {
        ok: boolean
      }
    }
  }

  /**
   * 接口名：批量校验接口
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6688&itf=75890
   */
  'GET/api/material/batchAccessAllowed.json': {
    Req: {
      bizCode?: string
      /**
       * 物料id数组
       */
      materialIdList?: any[]
      campaignId?: number
      tagId?: number
    }
    Res: {
      data: {
        /**
         * key是materialId
         */
        '1': {
          bizCode: null
          isAccessAllowed: boolean
          notAccessItemList: any[]
          notAgencyItemList: any[]
          reason: null
        }
        '2': {
          isAccessAllowed: boolean
        }
        '3': {
          isAccessAllowed: boolean
        }
      }
      info: {
        errorCode: null
        message: null
        ok: boolean
        redirectUrl: null
      }
    }
  }

  /**
   * 接口名：【管理】新增定向
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6840&itf=68388
   */
  'PUT/api/crowd/modifyByType.json': {
    Req: {
      bizCode?: string
      crowdList?: {
        campaignId: number
        adgroupId: number
        crowdName: string
        targetLabel: {
          bidPrice?: null
          bizType?: null
          campaignId?: null
          createTime?: string
          crowdId?: null
          dayBudget?: null
          deleteCrowd?: boolean
          discount?: null
          id?: number
          isDefaultPrice?: null
          labelDesc?: string
          labelId?: number
          labelName?: string
          labelOptionMode?: string
          labelPriceMode?: string
          labelSourceType?: string
          labelValue?: string
          matrixPrice?: any[]
          memberId?: null
          optionCount?: null
          optionGroups?: null
          options?: {
            bidPrice: null
            createTime: string
            filter: null
            id: number
            labelId: number
            labelOptionSourceType: string
            labelOptionType: string
            matrixPrice: any[]
            optionDesc: null
            optionName: string
            optionValue: string
            parentOptionId: null
            properties: {}
            sortNum: null
            status: number
            updateTime: string
            selected: boolean
          }[]
          priority?: null
          productId?: null
          properties?: {}
          shopId?: null
          sortNum?: number
          status?: number
          suggestPrice?: null
          targetId?: number
          targetType?: number
          targetingDimension?: null
          targetingId?: number
          transId?: null
          updateTime?: string
          videoId?: null
          videoType?: null
          selected?: boolean
        }
        /**
         * 定向出价
         */
        price: number
      }[]
    }
    Res: {
      data: {}
      info: {
        ok: boolean
      }
    }
  }

  /**
   * 接口名：【管理】删除定向绑定
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6840&itf=68391
   */
  'DELETE/api/crowd/delete.json': {
    Req: {
      crowdList?: {
        campaignId: number
        adgroupId: number
        crowdId: number
      }[]
    }
    Res: {
      data: {}
      info: {
        disableTime: boolean
        errorCode: null
        lockSla: boolean
        message: null
        ok: boolean
        redirectUrl: null
        unlockUrl: null
      }
    }
  }

  /**
   * 接口名：【管理】查询定向列表不分页
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6840&itf=68395
   */
  'GET/api/crowd/findList.json': {
    Req: {
      bizCode?: string
      campaignId?: number
      adgroupId?: number
      offset?: number
      pageSize?: number
      campaignTypeList?: number[]
      targetTypeList?: number
    }
    Res: {
      data: {
        count: number
        list: {
          adgroupId: number
          adgroupName: string
          autoBid: number
          autoBidStrategy: null
          bizCode: null
          campaignId: number
          campaignName: string
          campaignType: number
          cpcLimit: null
          crowdDesc: null
          crowdId: number
          crowdName: string
          dayBudget: number
          faultEnumList: null
          objectId: number
          priceScope: string
          priceWarn: number
          properties: null
          solutionCode: null
          solutionType: number
          targetLabel: {
            adgroupId: null
            campaignId: null
            labelDesc: null
            labelId: null
            labelName: null
            labelPriceMode: null
            labelValue: null
            options: null
            properties: null
            status: null
            targetId: null
            targetType: number
          }
          price: number
        }[]
      }
      info: {
        disableTime: boolean
        errorCode: null
        lockSla: boolean
        message: null
        ok: boolean
        redirectUrl: null
        unlockUrl: null
      }
    }
  }

  /**
   * 接口名：【主流程】查询推荐定向
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6840&itf=68397
   */
  'GET/api/target/findSuggest.json': {
    Req: {
      campaignType?: number
      targetTypeList?: any[]
    }
    Res: {
      data: {
        list: any[]
      }
      info: {
        ok: boolean
      }
    }
  }

  /**
   * 接口名：【工具】查询建议出价&市场平均价
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6840&itf=68400
   */
  'POST/api/crowd/getSuggestPrice.json': {
    Req: {
      bizCode?: string
      crowdList?: {
        adgroupId: number
        campaignId: number
        /**
         * 主流程新建
         */
        targetLabel: {
          targetType?: string
        }
        /**
         * 管理
         */
        crowdId: boolean
        materialId: number
      }[]
    }
    Res: {
      data: {
        list: {
          adgroupId: number
          campaignId: number
          crowdId: number
          targetLabel: {
            targetType: number
          }
          suggestPrice: string
          averagePrice: string
        }[]
      }
      info: {
        disableTime: boolean
        errorCode: null
        lockSla: boolean
        message: null
        ok: boolean
        redirectUrl: null
        unlockUrl: null
      }
      suggestPrice: number
      averagePrice: number
    }
  }

  /**
   * 接口名：【工具】流量预估
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6840&itf=68418
   */
  'POST/api/algotool/getPredictedPvUv.json': {
    Req: {
      crowdList?: any[]
      materialId?: string
      /**
       * TARGET_UV 定向uv预估
       * TARGET_PV 定向展示预估
       * TARGET_HOUR_REGION_UV 定向时段地域uv
       * TARGET_HOUR_REGION_PV 定向时段地域Pv
       *
       */
      queryCode?: string
      campaignId?: number
    }
    Res: {
      predictedValue: number
    }
  }

  /**
   * 接口名：查询定向列表（没有category）
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6840&itf=68420
   */
  'GET/api/target/findList.json': {
    Req: {}
    Res: {
      data: {
        count: number
        list: {
          bizCode: null
          businessType: null
          settings: {
            SCENE_QUERY: string
          }
          sortNum: null
          status: number
          targetDesc: string
          targetId: number
          targetName: string
          targetType: number
        }[]
      }
      info: {
        errorCode: null
        message: null
        ok: boolean
        redirectUrl: null
      }
    }
  }

  /**
   * 接口名：查询定向分组列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6840&itf=68421
   */
  'GET/api/target/findCategoryList.json': {
    Req: {}
    Res: {
      data: {
        count: number
        list: {
          bizCode: null
          categoryDesc: string
          categoryName: string
          icon: null
          id: number
          properties: {
            SCENE_QUERY: string
          }
          sortNum: number
          targetIdList: number[]
        }[]
      }
      info: {
        errorCode: null
        message: null
        ok: boolean
        redirectUrl: null
      }
    }
  }

  /**
   * 接口名：查询定向标签分页
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6840&itf=68425
   */
  'GET/api/target/findLabelPage.json': {
    Req: {}
    Res: {
      data: {
        count: number
        list: {
          adgroupBindCrowdId: null
          bidPrice: null
          bindCrowd: boolean
          bizType: null
          campaignId: null
          createTime: string
          dayBudget: null
          deleteCrowd: boolean
          id: number
          isDefaultPrice: null
          labelDesc: string
          labelId: number
          labelName: number
          labelOptionMode: string
          labelPriceMode: string
          labelSourceType: string
          labelValue: string
          matrixPrice: any[]
          memberId: null
          optionCount: number
          optionGroups: null
          options: {
            bidPrice: null
            createTime: string
            filter: null
            id: number
            labelId: number
            labelOptionSourceType: string
            labelOptionType: string
            matrixPrice: any[]
            optionDesc: null
            optionName: number
            optionValue: number
            parentOptionId: number
            properties: {
              coverage: string
              validateTime: string
              dmpCrowdDescription: string
              enableTime: string
              isRecommended: string
              scoreRank: string
              businessType: string
            }
            sortNum: number
            status: number
            updateTime: string
          }[]
          priority: null
          productId: null
          properties: {
            dspGidsKey: string
            dspMemberIdKey: string
            labelOptionEmptyMode: string
          }
          shopId: null
          sortNum: number
          status: number
          targetType: number
          targetingDimension: null
          targetingId: number
          transId: null
          updateTime: string
          videoId: null
          videoType: null
        }[]
      }
      info: {
        disableTime: boolean
        errorCode: null
        lockSla: boolean
        message: null
        ok: boolean
        redirectUrl: null
        unlockUrl: null
      }
    }
  }

  /**
   * 接口名：【管理】查询定向筛选框
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6840&itf=68426
   */
  'GET/api/target/findTargetTypeCondition.json': {
    Req: {}
    Res: {
      data: {
        count: number
        list: {
          categoryName: string
          targetTypes: {
            targetName: string
            targetType: number
          }[]
        }[]
      }
      info: {
        disableTime: boolean
        errorCode: null
        lockSla: boolean
        message: null
        ok: boolean
        redirectUrl: null
        unlockUrl: null
      }
    }
  }

  /**
   * 接口名：查询店铺关键词
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6840&itf=68427
   */
  'GET/api/target/getKeywordShopUv.json': {
    Req: {}
    Res: {
      data: {}
      info: {
        disableTime: boolean
        errorCode: null
        lockSla: boolean
        message: null
        ok: boolean
        redirectUrl: null
        unlockUrl: null
      }
    }
  }

  /**
   * 接口名：查询店铺定向筛选条件
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6840&itf=68429
   */
  'GET/api/target/findShopTargetQueryCondition.json': {
    Req: {}
    Res: {
      data: {
        conditions: {
          catList: {
            cateId: number
            cateName: string
          }[]
          maxPerSale: number
          minPerSale: number
          shopScaleList: {
            shopScaleId: number
            shopScaleName: string
          }[]
        }
      }
      info: {
        disableTime: boolean
        errorCode: null
        lockSla: boolean
        message: null
        ok: boolean
        redirectUrl: null
        unlockUrl: null
      }
    }
  }

  /**
   * 接口名：【工具】单品托管手动出价建议价
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6840&itf=68552
   */
  'GET/api/algotool/findManualBidSuggestPrice.json': {
    Req: {
      bizCode?: string
      materialIdList?: any[]
      campaignId?: number
    }
    Res: {
      data: {
        list: {
          campaignId: string
          materialId: string
          suggestPrice: string
        }[]
      }
      info: {
        disableTime: boolean
        errorCode: null
        lockSla: boolean
        message: null
        ok: boolean
        redirectUrl: null
        unlockUrl: null
      }
    }
  }

  /**
   * 接口名：【管理】批量出价
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6840&itf=68946
   */
  'POST/api/crowd/batchModify.json': {
    Req: {
      crowdList?: {
        crowdId: number
        price: number
        campaignId: number
        adgroupId: number
        targetType: number
        status: string
      }[]
    }
    Res: {
      data: {}
      info: {
        disableTime: boolean
        errorCode: null
        lockSla: boolean
        message: null
        ok: boolean
        redirectUrl: null
        unlockUrl: null
      }
    }
  }

  /**
   * 接口名：【工具】出价模拟器
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6840&itf=69205
   */
  'GET/api/crowd/findSimulatorPointList.json': {
    Req: {
      materialId?: number
      /**
       * 1-出价 2-预算 3-溢价模拟器  4-资源位模拟器
       */
      simulatorType?: number
      campaignId?: number
      /**
       * 出价模拟器才有
       */
      adgroupId?: number
      /**
       * 出价才有
       */
      crowdId?: number
    }
    Res: {
      data: {
        simulator: {
          points: {
            index: number
            x: number
            pv: number
            ppc: number
            cost: number
            isHightlight: number
            click: number
          }[]
          maxXValue: number
          minXValue: number
        }
      }
      info: {
        disableTime: boolean
        errorCode: null
        lockSla: boolean
        message: null
        ok: boolean
        redirectUrl: null
        unlockUrl: null
      }
    }
  }

  /**
   * 接口名：【工具】资源位建议溢价
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6840&itf=69646
   */
  'POST/api/adzone/getSuggestDiscount.json': {
    Req: {
      adzoneList?: {
        adzoneId: string
        campaignId: string
        adgroupId: string
        materialId: string
      }[]
      bizCode?: string
    }
    Res: {
      data: {
        list: {
          adgroupId: number
          campaignId: number
          adzoneId: number
          suggestDiscount: number
          materialId: number
        }[]
      }
      info: {
        disableTime: boolean
        errorCode: null
        lockSla: boolean
        message: null
        ok: boolean
        redirectUrl: null
        unlockUrl: null
      }
    }
  }

  /**
   * 接口名：关键词包含优化
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6840&itf=77913
   */
  'POST/api/target/findSonkeywordList.json': {
    Req: {
      optionList?: any[]
    }
    Res: {
      data: {
        list: {
          fatherWord: string
          sonWordList: any[]
        }[]
      }
      info: {
        disableTime: boolean
        errorCode: null
        lockSla: boolean
        message: null
        ok: boolean
        redirectUrl: null
        unlockUrl: null
      }
    }
  }

  /**
   * 接口名：【人群推荐】获取人群推荐
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6840&itf=83230
   */
  'GET/api/target/findRecommendList.json': {
    Req: {
      ''?: string
    }
    Res: {
      data: {
        list: {
          bindCrowd: boolean
          createTime: string
          deleteCrowd: boolean
          id: number
          labelDesc: string
          labelId: number
          labelName: number
          labelOptionMode: string
          labelPriceMode: string
          labelSourceType: string
          labelValue: string
          matrixPrice: any[]
          options: {
            createTime: string
            id: number
            labelId: number
            labelOptionSourceType: string
            labelOptionType: string
            matrixPrice: any[]
            /**
             * 人群名称（行业常用标签）
             */
            optionName: string
            optionValue: number
            parentOptionId: number
            properties: {
              /**
               * 全网人群数量
               */
              coverage: number
              /**
               * 初步同步时间
               */
              enableTime: string
              /**
               * 宝贝名称
               */
              itemName: string
              /**
               * 宝贝图片url
               */
              itemPicUrl: string
              /**
               * 宝贝落地页
               */
              itemLandingPage: string
              /**
               * 人群热度
               */
              _dmp_hotUsedScore: string
              /**
               *  value格式:  0-未生成    1-生成中    2-已生成
               */
              _dmp_crowd_status: number
              /**
               *  上面状态为1、2时，这里有值，且为dmp人群id
               */
              _dmp_crowd_id: string
            }
            status: number
            updateTime: string
            /**
             * 人群描述（常用标签组合
             */
            optionDesc: string
          }[]
          properties: {
            /**
             * 标签规模 用于画圆
             */
            _chance_coverage_scale: number
            /**
             * 2 - 达摩盘精选人群   3 - 达摩盘标签组合推荐  4 - 算法推荐
             */
            _rcmd_scene_id: number
            /**
             * value为scene_query的值，eg. ITEM_NEW_CROWD
             */
            _direct_scene_code: string
            /**
             * 适用场景
             */
            marketSceneStr: string
          }
          sortNum: number
          status: number
          targetType: number
          targetingId: number
          updateTime: string
        }[]
      }
      info: {
        disableTime: boolean
        lockSla: boolean
        ok: boolean
      }
    }
  }

  /**
   * 接口名：【人群推荐】分页获取指定推荐人群
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6840&itf=83235
   */
  'GET/api/target/findRecommendPage.json': {
    Req: {
      /**
       * 推荐类型
       */
      optionName?: string
      offset?: number
      pageSIze?: number
      orderField?: string
      /**
       * 定向不支持排序
       */
      orderBy?: string
    }
    Res: {
      data: {
        list: {
          bindCrowd: boolean
          createTime: string
          deleteCrowd: boolean
          id: number
          labelDesc: string
          labelId: number
          labelName: number
          labelOptionMode: string
          labelPriceMode: string
          labelSourceType: string
          labelValue: string
          matrixPrice: any[]
          options: {
            createTime: string
            id: number
            labelId: number
            labelOptionSourceType: string
            labelOptionType: string
            matrixPrice: any[]
            optionName: string
            optionValue: number
            parentOptionId: number
            properties: {
              coverage: number
              enableTime: string
              _rcmd_scene_id: string
              _direct_scene_code: string
              itemName: string
              itemPicUrl: string
              itemLandingPage: string
              _chance_coverage_scale: string
              extendObj: {}
              _dmp_crowd_status: number
              _dmp_crowd_id: number
              _dmp_hotUsedScore: number
              marketSceneStr: string
            }
            status: number
            updateTime: string
            optionDesc: string
            extendObj: {
              DmpTagCombinationDTO: {
                selects: any[]
              }
            }
          }[]
          properties: {}
          sortNum: number
          status: number
          targetType: number
          targetingId: number
          updateTime: string
        }[]
        count: number
      }
      info: {
        disableTime: boolean
        lockSla: boolean
        ok: boolean
      }
    }
  }

  /**
   * 接口名：【人群推荐】新增定向（非覆盖）
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6840&itf=83236
   */
  'PUT/api/target/addTargetLabel.json': {
    Req: {
      /**
       * 直接传对应的label，类似新增定向里面，带campaignid和adgroupid
       */
      labelVO?: {}
      campaignId?: string
      adgroupId?: string
      discount?: string
      price?: string
    }
    Res: {
      data: {}
      info: {
        disableTime: boolean
        lockSla: boolean
        ok: boolean
      }
    }
  }

  /**
   * 接口名：更新报表展现指标
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6692&itf=67498
   */
  'POST/api/member/updateConfig.json': {
    Req: {
      bizCode?: string
      /**
       * 配置类型  待定
       */
      configType?: number
      config?: any[]
    }
    Res: {
      data: {}
      info: {
        disableTime: boolean
        errorCode: null
        lockSla: boolean
        message: null
        ok: boolean
        redirectUrl: null
        unlockUrl: null
      }
    }
  }

  /**
   * 接口名：用户登出
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6692&itf=67238
   */
  'GET/api/member/logout.action': {
    Req: {}
    Res: {
      /**
       * https://login.taobao.com/member/logout.jhtml?redirectURL=https%3A%2F%2Fdingxiang.taobao.com%2Findex.html
       */
      redirect: string
    }
  }

  /**
   * 接口名：【CRM】伪登陆
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6692&itf=67244
   */
  'GET/api/member/adminLogin.action': {
    Req: {}
    Res: {
      redirect: string
    }
  }

  /**
   * 接口名：用户协议签署
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6692&itf=67246
   */
  'POST/api/member/signProtocol.json': {
    Req: {
      protocolCode?: string
    }
    Res: {
      data: {}
      info: {
        disableTime: boolean
        errorCode: null
        lockSla: boolean
        message: null
        ok: boolean
        redirectUrl: null
        unlockUrl: null
      }
    }
  }

  /**
   * 接口名：获取用户信息
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6692&itf=67253
   */
  'GET/api/member/getInfo.json': {
    Req: {}
    Res: {
      data: {
        csrfID: string
        meta: {
          configs: {
            config: string
            configType: number
            memberId: number
          }[]
          createTime: string
          mainCatName: string
          memberId: number
          nickName: string
          /**
           * 是否国际版客户
           */
          isOverseas: boolean
        }
        permission: {
          account_admarketing_r: boolean
          account_admarketing_w: boolean
          feedFlowItem: boolean
          feedFlowLive: boolean
          feedFlowPicture: boolean
          itemBatch: boolean
          mamaClubPermission: boolean
          mamaclub_homepage_w: boolean
          mamaclub_myasset_w: boolean
          mamaclub_myresource_w: boolean
          mamaclub_r: boolean
          mamaclub_w: boolean
          picture_smart_teemo: boolean
          k2_transfer: boolean
          activity: boolean
          consumer_circulation: boolean
          account_detail: boolean
          /**
           * 营销结案
           */
          feed_flow_item_new: boolean
          item_new_guest: boolean
          dmp_crowd_remarket: boolean
          koubei: boolean
          feedFlowPictureGuarantee: boolean
        }
        seedToken: string
        pin: string
      }
      info: {
        ok: boolean
      }
    }
  }

  /**
   * 接口名：创建用户联系人
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6692&itf=67294
   */
  'POST/api/member/addContacts.json': {
    Req: {
      /**
       * 联系人旺旺昵称
       */
      contactsName?: string
      /**
       * 联系人邮件地址
       */
      contactsEmail?: string
      /**
       * 联系人电话
       */
      contactsMobilePhone?: string
      /**
       * 联系人类型（PROMOTION_MANAGER=推广负责人；PROMOTION_EXECUTIVE=推广专员）
       */
      contactsType?: string
      bizCode?: string
    }
    Res: {
      data: {}
      info: {
        disableTime: boolean
        errorCode: null
        lockSla: boolean
        message: null
        ok: boolean
        redirectUrl: null
        unlockUrl: null
      }
    }
  }

  /**
   * 接口名：用户品牌检测
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6692&itf=67350
   */
  'GET/api/member/getQualificationBrandAccess.json': {
    Req: {}
    Res: {
      data: {
        userId: number
        productId: number
        actionCode: number
        reason: string
      }
      info: {
        disableTime: boolean
        errorCode: null
        lockSla: boolean
        message: null
        ok: boolean
        redirectUrl: null
        unlockUrl: null
      }
    }
  }

  /**
   * 接口名：校验用户联系人旺旺合法性
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6692&itf=67295
   */
  'GET/api/member/checkContactsName.json': {
    Req: {
      /**
       * 联系人旺旺
       */
      contactsName?: string
    }
    Res: {
      data: {
        /**
         * true/false
         */
        verify: boolean
      }
      info: {
        disableTime: boolean
        errorCode: null
        lockSla: boolean
        message: null
        ok: boolean
        redirectUrl: null
        unlockUrl: null
      }
    }
  }

  /**
   * 接口名：获取用户联系人列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6692&itf=67298
   */
  'GET/api/member/findContactsList.json': {
    Req: {}
    Res: {
      data: {
        list: {
          contactsName: string
          contactsEmail: string
          contactsMobilePhone: string
          contactsType: string
        }[]
      }
      info: {
        disableTime: boolean
        errorCode: null
        lockSla: boolean
        message: null
        ok: boolean
        redirectUrl: null
        unlockUrl: null
      }
    }
  }

  /**
   * 接口名：查询用户违规状态
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6692&itf=67473
   */
  'GET/api/member/getPunishStatus.json': {
    Req: {}
    Res: {
      data: {
        endPunishTime: string
        punish_Level2_Score: number
        punish_Level3_Score: number
        /**
         * 用户状态：1-正常 2-屏蔽中 0-封闭中
         *
         */
        status: number
      }
      info: {
        disableTime: boolean
        errorCode: null
        lockSla: boolean
        message: null
        ok: boolean
        redirectUrl: null
        unlockUrl: null
      }
    }
  }

  /**
   * 接口名：查询用户违规记录
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6692&itf=67476
   */
  'GET/api/member/findPunishRecordList.json': {
    Req: {
      offset?: number
      pageSize?: number
    }
    Res: {
      data: {
        count: number
        list: {
          startrow: number
          punishRecordStatus: number
          endrow: number
          punishReasonList: {
            blockId: number
            blockName: string
            blockUrl: string
            reasonDTOs: {
              auditReasonId: number
              auditReasonName: string
              flawUrls: string[]
              redirectUrl: string
            }[]
          }[]
          punishResource: string
          pageSize: number
          offset: number
          punishEndTime: string
          punishStartTime: string
          punishReason: string
        }[]
      }
      info: {
        disableTime: boolean
        message: string
        errorCode: string
        ok: boolean
        unlockUrl: string
        lockSla: boolean
      }
    }
  }

  /**
   * 接口名：查询用户资质违规记录
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6692&itf=67482
   */
  'GET/api/member/findQualificationPunishRecordList.json': {
    Req: {
      offset?: number
      pageSize?: number
    }
    Res: {
      data: {
        count: number
        list: {
          punishType: number
          punishTime: string
          qualificationName: string
          qualificationId: number
          punishViolatedLevel: number
          penaltyPoints: number
          punishReasonList: {
            blockId: number
            blockName: string
            blockUrl: string
            reasonDTOs: {
              auditReasonId: number
              auditReasonName: string
              flawUrls: string[]
              redirectUrl: string
            }[]
          }[]
        }[]
      }
      info: {
        disableTime: boolean
        message: string
        errorCode: string
        ok: boolean
        unlockUrl: string
        lockSla: boolean
      }
    }
  }

  /**
   * 接口名：判断用户是否签订协议
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6692&itf=67731
   */
  'GET/api/member/isProtocolSigned.json': {
    Req: {
      protocolCode?: string
    }
    Res: {
      data: {
        isSignProtocol: boolean
      }
      info: {
        disableTime: boolean
        errorCode: null
        lockSla: boolean
        message: null
        ok: boolean
        redirectUrl: null
        unlockUrl: null
      }
    }
  }

  /**
   * 接口名：用户准入
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6692&itf=68649
   */
  'POST/api/member/joinBusinessPlatform.json': {
    Req: {
      bizCode?: string
    }
    Res: {}
  }

  /**
   * 接口名：用户处罚
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6692&itf=68692
   */
  'GET/TODO': {
    Req: {}
    Res: {}
  }

  /**
   * 接口名：获取用户维度故障信息
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6692&itf=69558
   */
  'GET/api/member/findDiagnoseList.json': {
    Req: {
      bizCode?: string
    }
    Res: {
      data: {
        list: {
          adgroupFaultCount: number
          campaignFaultCount: number
          memberId: null
          bizCode: string
          campaignBudgetFaultCount: string
        }[]
      }
      info: {
        disableTime: boolean
        errorCode: null
        lockSla: boolean
        message: null
        ok: boolean
        redirectUrl: null
        unlockUrl: null
      }
    }
  }

  /**
   * 接口名：信息流运营编辑接口
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6692&itf=70153
   */
  'GET/https://mo.m.taobao.com/feeds/': {
    Req: {}
    Res: {}
  }

  /**
   * 接口名：一站式运营编辑接口
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6692&itf=71471
   */
  'GET/https://mo.m.taobao.com/one-stop/': {
    Req: {}
    Res: {}
  }

  /**
   * 接口名：获取邀请链接
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6692&itf=73310
   */
  'GET/api/member/invitation/url.json': {
    Req: {
      /**
       * feedflow
       */
      bizCode?: string
    }
    Res: {
      data: {
        invitationUrl: string
      }
      info: {
        unlockUrl: string
        disableTime: boolean
        errorCode: string
        lockSla: boolean
        ok: boolean
        message: string
      }
    }
  }

  /**
   * 接口名：获取用户使用进度
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6692&itf=73741
   */
  'GET/api/member/stage.json': {
    Req: {
      /**
       * feedflow
       */
      bizCode?: string
    }
    Res: {
      data: {
        /**
         * success表示不需要提示，recharge表示需要充值，campaign表示需要新建计划，其他情况都不需要提示，防止将来新加了阶段不好上线
         */
        stage: string
      }
      info: {
        unlockUrl: string
        disableTime: boolean
        errorCode: string
        lockSla: boolean
        ok: boolean
        message: string
      }
    }
  }

  /**
   * 接口名：用户活动的一些信息
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6692&itf=75881
   */
  'GET/api/member/activity.json': {
    Req: {
      /**
       * feedflow
       */
      bizCode?: string
    }
    Res: {
      data: {
        /**
         * true 表示需要提醒，有活动商品，但是没有新建活动计划
         */
        remindNew4NoActivity: boolean
        /**
         * true 表示需要提醒有活动宝贝在普通计划里面，需要去转移
         */
        remindTransfer4ItemInNormal: boolean
        /**
         * true表示天猫客户
         */
        tmallUser: boolean
      }
      info: {
        unlockUrl: string
        disableTime: boolean
        errorCode: string
        lockSla: boolean
        ok: boolean
        message: string
      }
    }
  }

  /**
   * 接口名：用户活动的宝贝引导信息
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6692&itf=87195
   */
  'GET/api/member/activity/itemGuide.json': {
    Req: {
      /**
       * feedflow
       */
      bizCode?: string
    }
    Res: {
      data: {
        /**
         * 所有活动宝贝，如果小于等于0的话不出提示
         */
        allItemNumber: boolean
        /**
         * 已经使用
         */
        hasUsedItemNumber: boolean
        /**
         * 没有使用
         */
        noUsedItemNumber: boolean
      }
      info: {
        unlockUrl: string
        disableTime: boolean
        errorCode: string
        lockSla: boolean
        ok: boolean
        message: string
      }
    }
  }

  /**
   * 接口名：转移计划信息
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6692&itf=77790
   */
  'GET/api/member/transfer.json': {
    Req: {}
    Res: {
      data: {
        remindTransfer4ItemNew: boolean
      }
      info: {
        unlockUrl: string
        disableTime: boolean
        errorCode: string
        lockSla: boolean
        ok: boolean
        message: string
      }
    }
  }

  /**
   * 接口名：新客任务
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6692&itf=79580
   */
  'GET/api/member/newGuestTask.json': {
    Req: {
      ' bizCode'?: string
    }
    Res: {
      data: {
        /**
         * 枚举值待定
         */
        rechargeCondition: {
          status: number
        }
        createCampaignCondition: {
          status: number
        }
        promotion: {
          status: number
        }
        newGuestReport: {
          status: number
        }
        list: {
          /**
           * rechargeCondition,createCampaignCondition,promotion,newGuestReport
           */
          key: string
          /**
           * acting 进行中  completed 完成 wait 等待xxx
           */
          status: string
        }[]
      }
      info: {
        unlockUrl: string
        disableTime: boolean
        errorCode: string
        lockSla: boolean
        ok: boolean
        message: string
      }
    }
  }

  /**
   * 接口名：获取账户及自动充值提醒
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6707&itf=67316
   */
  'GET/api/account/getAcctBalanceRemindSettingAutoRecharge.json': {
    Req: {}
    Res: {
      data: {
        /**
         * 提醒设置
         */
        remindSetting: {
          aliWangwang: string
          memberId: number
          mobilePhone: string
          productLineId: number
          remindMinValue: number
          remindType: number
        }
        /**
         * 自动充值设置
         */
        autoRecharge: {
          alipayId: string
          alipayNO: string
          amount: number
          mainAlipayId: string
          mainAlipayNO: string
          memberId: number
          status: number
          taobaoUid: number
          times: number
        }
      }
      info: {
        disableTime: boolean
        errorCode: null
        lockSla: boolean
        message: null
        ok: boolean
        redirectUrl: null
        unlockUrl: null
      }
    }
  }

  /**
   * 接口名：查询支付宝账号是否完成代扣协议签约
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6707&itf=67323
   */
  'GET/api/account/getSignInfo.json': {
    Req: {
      /**
       * 支付宝id
       */
      alipayId?: string
    }
    Res: {
      data: {
        /**
         * 协议地址
         */
        signUrl: string
      }
      info: {
        disableTime: boolean
        errorCode: null
        lockSla: boolean
        message: null
        ok: boolean
        redirectUrl: null
        unlockUrl: null
      }
    }
  }

  /**
   * 接口名：更新账户及自动充值设置
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6707&itf=67324
   */
  'PUT/api/account/modifyAcctBalanceRemindSettingAutoRecharge.json': {
    Req: {
      remindMinValue?: number
      aliWangwang?: string
      mobilePhone?: string
      remindType?: number
      status?: number
      amount?: number
      times?: number
      alipayNO?: string
      alipayId?: string
      verifyCode?: string
      remindHour?: number
    }
    Res: {
      data: {}
      info: {
        disableTime: boolean
        errorCode: null
        lockSla: boolean
        message: null
        /**
         * 通过该值判断是否修改成功
         */
        ok: boolean
        redirectUrl: null
        unlockUrl: null
      }
    }
  }

  /**
   * 接口名：账户解约自动充值
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6707&itf=67330
   */
  'PUT/api/account/unsignAutoRecharge.json': {
    Req: {}
    Res: {
      data: {}
      info: {
        disableTime: boolean
        errorCode: null
        lockSla: boolean
        message: null
        /**
         * 该字段返回是否解约成功
         */
        ok: boolean
        redirectUrl: null
        unlockUrl: null
      }
    }
  }

  /**
   * 接口名：查询账户流水
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6707&itf=67374
   */
  'GET/api/account/findItemList.json': {
    Req: {
      startTime?: string
      endTime?: string
      faccId?: number
      dealType?: string
      offset?: number
      pageSize?: number
    }
    Res: {
      data: {
        count: number
        list: {
          accountComment: string
          actId: number
          adgroupId: null
          amount: string
          balance: string
          bizCode: null
          bizType: string
          comments: string
          createTime: string
          endDate: null
          facctId: number
          facctIds: null
          finType: string
          hongbao: null
          mactId: null
          memberId: number
          operateTime: string
          startDate: null
        }[]
      }
      info: {
        errorCode: null
        message: null
        ok: boolean
      }
    }
  }

  /**
   * 接口名：下载账户流水
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6707&itf=67375
   */
  'GET/api/account/exportItemList.action': {
    Req: {
      startTime?: string
      endTime?: string
      faccId?: number
      dealType?: string
      modelMap?: {}
    }
    Res: {
      /**
       * excel
       */
      ModelAndView: {}
    }
  }

  /**
   * 接口名：优惠券
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6707&itf=67407
   */
  'GET/和钻展保持一致': {
    Req: {}
    Res: {}
  }

  /**
   * 接口名：获取提醒设置（账户余额和计划预算）
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6707&itf=68995
   */
  'GET/api/account/findMessageRemindList.json': {
    Req: {
      bizCode?: string
    }
    Res: {
      data: {
        list: {
          memberId: number
          bizCode: string
          /**
           * ACCOUNT_BALANCE：账户提醒
           * CAMPAIGN_BUDGET：计划提醒
           */
          remindType: string
          /**
           * 发送设置
           */
          sends: {
            memberId: number
            /**
             * 发送类型
             * NULL：未设置
             * SHORT_MESSAGE：短信
             * EMAIL：短信
             * QIAN_NIU：千牛
             */
            sendType: string
            /**
             * 发送目标
             */
            target: string
          }[]
          /**
           * 配置规则
           */
          ruleContext: {
            /**
             * 提醒截止日期
             */
            remindDeadLine: number
            /**
             * 提醒金额
             */
            remindMoney: number
            /**
             * 金额规则
             * （本期默认lt，小于）
             */
            moneyRule: string
          }
        }[]
      }
      info: {
        disableTime: boolean
        errorCode: null
        lockSla: boolean
        message: null
        ok: boolean
        redirectUrl: null
        unlockUrl: null
      }
    }
  }

  /**
   * 接口名：覆盖更新提醒设置
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6707&itf=69000
   */
  'POST/api/account/modifyAllMessageRemindList.json': {
    Req: {
      bizCode?: string
      messageRemindList?: {
        memberId: number
        bizCode: string
        remindType: string
        sends: {
          memberId: number
          sendType: string
          target: string
        }[]
        ruleContext: {
          remindDeadLine?: number
          remindMoney?: number
          moneyRule?: string
        }
      }[]
    }
    Res: {
      data: {}
      info: {
        disableTime: boolean
        errorCode: null
        lockSla: boolean
        message: null
        ok: boolean
        redirectUrl: null
        unlockUrl: null
      }
    }
  }

  /**
   * 接口名：获取退款列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6707&itf=72837
   */
  'GET/api/account/getRefundList.json': {
    Req: {
      bizCode: string
    }
    Res: {
      data: {
        count: number
        list: {
          itemId: number
          alipayTradeNo: number
          amount: number
          chargeTime: string
          refundAmount: number
        }[]
      }
      info: {
        errorCode: null
        message: null
        ok: boolean
      }
    }
  }

  /**
   * 接口名：创建退款
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6707&itf=72838
   */
  'POST/api/account/createRefund.json': {
    Req: {
      bizCode?: string
      refundReason?: string
    }
    Res: {
      data: {}
      info: {
        errorCode: null
        message: null
        ok: boolean
      }
    }
  }

  /**
   * 接口名：退款校验
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6707&itf=72839
   */
  'GET/api/account/checkRefund.json': {
    Req: {
      bizCode: string
    }
    Res: {
      data: {
        result: {
          allowRefund: boolean
          refuseReason: string
        }
      }
      info: {
        errorCode: null
        message: null
        ok: boolean
      }
    }
  }

  /**
   * 接口名：【国际版】是否签署cae代扣协议
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6707&itf=72855
   */
  'GET/api/account/isSignGlobalAlipay.json': {
    Req: {}
    Res: {
      data: {
        signUrl: string
        isSign: boolean
      }
      info: {
        disableTime: boolean
        errorCode: null
        lockSla: boolean
        message: null
        ok: boolean
        redirectUrl: null
        unlockUrl: null
      }
    }
  }

  /**
   * 接口名：【国际版】充值
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6707&itf=72857
   */
  'GET/api/account/charge.json': {
    Req: {
      /**
       * 充值金额 单位 元
       */
      amount?: number
    }
    Res: {
      data: {}
      info: {
        disableTime: boolean
        errorCode: null
        lockSla: boolean
        message: null
        ok: boolean
        redirectUrl: null
        unlockUrl: null
      }
    }
  }

  /**
   * 接口名：获取操作日志信息
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6707&itf=74120
   */
  'GET/api/log/findOperationLog.json': {
    Req: {
      /**
       * 分页查询其实条数
       */
      offset: number
      /**
       * 每页条数
       */
      pageSize: number
      /**
       * 操作类型数组，20100 新增推广计划，20101 新增投放区域，20102 修改推广计划 ，20103 修改投放区域，20104 移除推广计划，20200 添加推广单元，20201 删除推广单元 20202 推广单元修改，20300 删除人群包，20301 修改人群包，20303 删除人群包，20400 新增广告位绑定，20401绑定广告位 ，20402 解除广告位绑定，20500 删除推广内容，20501 添加推广内容，20501 添加推广内容。
       */
      opTypes?: any[]
      /**
       * 日志操作开始时间
       */
      startTime: string
      /**
       * 日志操作结束时间
       */
      endTime: string
      /**
       * 被操作对象的实体类型  102 计划相关 ,103 单元相关，107 定向相关 ，110资源位相关，104 创意相关
       */
      entityTypes?: any[]
      /**
       * 计划id
       */
      campaignId?: number
      /**
       * 单元id
       */
      adgroupId?: number
      /**
       * 固定值，对应业务场景
       */
      bizCode: string
    }
    Res: {
      info: {
        errorCode: null
        message: null
        ok: boolean
      }
      data: {
        list: {
          opId: string
          operType: string
          opType: string
          opName: string
          objType: string
          objectName: null
          operId: string
          operName: string
          opTime: string
          objParentId: string
          objectId: string
          opDetail: string
          operIP: string
          clientApp: string
          opTimeToDate: string
        }[]
      }
    }
  }

  /**
   * 接口名：通过单元名称查询单元信息
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6707&itf=74341
   */
  'GET/api/log/findAdgroupByName.json': {
    Req: {
      /**
       * 计划名称
       */
      adgroupName: string
      /**
       * 固定值
       */
      bizCode: string
    }
    Res: {
      info: {
        errorCode: null
        message: null
        ok: boolean
      }
      data: {
        list: {
          adgroupId: number
          adgroupName: string
        }[]
      }
    }
  }

  /**
   * 接口名：通过计划名称查询计划信息
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6707&itf=74342
   */
  'GET/api/log/findCampaignByName.json': {
    Req: {
      /**
       * 计划名称
       */
      campaignName: string
      /**
       * 固定值
       */
      bizCode: string
    }
    Res: {
      info: {
        errorCode: null
        message: null
        ok: boolean
      }
      data: {
        list: {
          campaignId: number
          campaignName: string
        }[]
      }
    }
  }

  /**
   * 接口名：获取累计消耗
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6707&itf=76780
   */
  'GET/api/account/findAccumulateDeduct.json': {
    Req: {
      startDate?: string
      endDate?: string
    }
    Res: {
      data: {
        result: {
          /**
           * 消耗总和
           */
          totalDeduct: number
          /**
           * 现金消耗
           */
          cashDeduct: number
          /**
           * 现金券消耗
           */
          cashPromotionDeduct: number
          /**
           * 满折满减券消耗
           */
          discountPromotionDeduct: number
          /**
           * 优惠券消耗
           */
          couponDeduct: number
        }
      }
      info: {
        errorCode: null
        message: null
        ok: boolean
      }
    }
  }

  /**
   * 接口名：发送短信验证码
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6708&itf=67327
   */
  'GET/api/message/sendMobileCode.json': {
    Req: {
      mobilePhone?: string
    }
    Res: {
      data: {}
      info: {
        disableTime: boolean
        errorCode: null
        lockSla: boolean
        message: null
        /**
         * 该字段判断接口是否发送成功
         */
        ok: boolean
        redirectUrl: null
        unlockUrl: null
      }
    }
  }

  /**
   * 接口名：验证短信验证码
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6708&itf=67328
   */
  'POST/api/message/verifyMobilePhoneCode.json': {
    Req: {
      mobilePhone?: string
      code?: string
    }
    Res: {
      data: {}
      info: {
        disableTime: boolean
        errorCode: null
        lockSla: boolean
        message: null
        /**
         * 该字段判断是否校验成功
         */
        ok: boolean
        redirectUrl: null
        unlockUrl: null
      }
    }
  }

  /**
   * 接口名：系统码表获取
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6711&itf=67372
   */
  'GET/api/common/findCodeList.json': {
    Req: {}
    Res: {
      data: {
        areas: any[]
        protocolCodes: {
          protocolCode: string
          protocolLink: string
        }[]
        validCampaignCount: number
        uncompleteCampaignCount: number
        minDayBudget: string
        batchAdgroupLimit: string
        minPrice: number
        maxPrice: number
        minDiscount: number
        maxDiscount: number
        copyAdgroupLimit: number
        minPaymentAmount: number
        maxPaymentAmount: number
        bindCreativeLimit: number
        itemTitleLimit: string
        campaignCrowdScenes: string[]
        campaignCrowdActivities: string[]
        minCrowdDiscount: string
        maxCrowdDiscount: string
        defCrowdDiscount: string
        cpcMinDayBudget: number
        cpmMinDayBudget: number
        homeRecItems: {
          tagId: number
          logo: string
          title: string
          link: string
          needId: boolean
        }[]
      }
      info: {
        disableTime: boolean
        errorCode: null
        lockSla: boolean
        message: null
        ok: boolean
        redirectUrl: null
        unlockUrl: null
      }
    }
  }

  /**
   * 接口名：获取前端CDN版本
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6711&itf=67763
   */
  'GET/api/common/getVersion.json': {
    Req: {}
    Res: {
      data: {
        version: string
      }
      info: {
        disableTime: boolean
        errorCode: null
        lockSla: boolean
        message: null
        ok: boolean
        redirectUrl: null
        unlockUrl: null
      }
    }
  }

  /**
   * 接口名：获取组件元数据列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6712&itf=67393
   */
  'GET/api/component/findComponentMetaList.json': {
    Req: {
      bizCode?: string
      /**
       * campaign：计划 appeal：诉求 solution:计划的生成方案 activity 活动
       * scene 首页场景
       */
      componentType?: string
      /**
       * intelligentBid：智能调价
       */
      componentCode?: string
    }
    Res: {
      data: {
        list: {
          bizCode: null
          componentCode: string
          componentDesc: string
          componentId: number
          componentName: string
          componentType: string
          metas: {
            bizCode: null
            componentId: number
            metaDesc: string
            metaId: number
            metaName: string
            metaSort: number
            metaSourceType: string
            metaValue: string
            properties: {
              metaLogo: string
              campaignDesc: string
              creativeDesc: string
              solutionType: string
            }
            status: number
          }[]
          properties: null
          status: number
          webType: string
        }[]
      }
      info: {
        errorCode: null
        message: null
        ok: boolean
      }
    }
  }

  /**
   * 接口名：获取用户组建模板
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6712&itf=67395
   */
  'GET/api/component/findMemberTemplateList.json': {
    Req: {
      bizCode?: string
      componentCode?: string
    }
    Res: {
      data: {
        list: {
          componentId: number
          templateName: string
          templateValue: string
          templateDesc: string
          memberId: number
          componentTemplateId: number
        }[]
      }
      info: {
        unlockUrl: string
        disableTime: boolean
        errorCode: string
        lockSla: boolean
        ok: boolean
        message: string
      }
    }
  }

  /**
   * 接口名：新增用户组件模板
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6712&itf=67396
   */
  'POST/api/component/addMemberTemplate.json': {
    Req: {
      componentCode?: string
      bizCode?: string
      componentTemplate?: {
        templateName?: string
        templateValue?: string
        templateDesc?: string
      }
    }
    Res: {
      data: {}
      info: {
        unlockUrl: string
        disableTime: boolean
        errorCode: string
        lockSla: boolean
        ok: boolean
        message: string
      }
    }
  }

  /**
   * 接口名：修改用户组建模板
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6712&itf=67398
   */
  'PUT/api/component/updateMemberTemplate.json': {
    Req: {
      componentCode?: string
      bizCode?: string
      componentTemplate?: {
        templateName?: string
        templateValue?: string
        templateDesc?: string
      }
    }
    Res: {
      data: {}
      info: {
        unlockUrl: string
        disableTime: boolean
        errorCode: string
        lockSla: boolean
        ok: boolean
        message: string
      }
    }
  }

  /**
   * 接口名：删除用户组建模板
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6712&itf=67399
   */
  'DELETE/api/component/deleteMemberTemplate.json': {
    Req: {
      componentTemplateId?: number
      bizCode?: string
    }
    Res: {
      data: {}
      info: {
        unlockUrl: string
        disableTime: boolean
        errorCode: string
        lockSla: boolean
        ok: boolean
        message: string
      }
    }
  }

  /**
   * 接口名：✅【新】获取菜单列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6712&itf=80888
   */
  'GET/api/component/findMenuList.json': {
    Req: {
      /**
       * 业务编码（该请求为站点级别）
       */
      bizCode: string
    }
    Res: {
      data: {
        /**
         * 返回的是componentList
         */
        list: {
          /**
           * 组件id（因为底层的菜单都是通过component-meta结构存储的）
           */
          id: number
          /**
           * 业务编码
           */
          bizCode: string
          /**
           * 编码（也是请求组件的入参）
           */
          code: string
          /**
           * 名称
           */
          name: string
          /**
           * 描述
           */
          desc: string
          /**
           * 状态（0-无效，1-有效）
           */
          status: number
          /**
           * 前端类型（input、radio等）
           */
          webType: string
          /**
           * 帮助（文档链接或话术）
           */
          assistant: string
          /**
           * 类型（Menu、Block等，该接口仅为Menu）
           */
          type: string
          /**
           * 排序
           */
          sort: number
          /**
           * 规则，JSON
           */
          rule: string
          /**
           * 扩展属性KV
           */
          properties: {}
          /**
           * 子组件列表（循环当前列表，递归）
           */
          subComponents: any[]
          /**
           * 元数据列表
           */
          metas: {
            /**
             * 元数据id
             */
            id: number
            /**
             * 组件id
             */
            componentId: number
            /**
             * 数据编码（cpm，laxin等）
             */
            code: string
            /**
             * 数据值（1，2等，对应code的enum数据存储）
             */
            value: string
            /**
             * 数据名
             */
            name: string
            /**
             * 描述
             */
            desc: string
            /**
             * 帮助（文档链接或话术）
             */
            assistant: string
            /**
             * 类型（Component，Data，Service，Other）
             */
            type: string
            /**
             * 排序
             */
            sort: number
            /**
             * 状态（0-无效，1-有效）
             */
            status: number
            /**
             * 规则，JSON
             */
            rule: string
            /**
             * 附属属性KV
             */
            properties: {}
          }[]
        }[]
      }
      info: {
        ok: boolean
      }
    }
  }

  /**
   * 接口名：✅【新】获取组件列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6712&itf=80943
   */
  'GET/api/component/findComponentList.json': {
    Req: {
      /**
       * 业务编码
       */
      bizCode: string
      /**
       * 组件编码（首页、计划详情页、账户）
       */
      componentCode: string
      /**
       * 查询深度，纯页面逻辑（即：当前页面需要渲染几层子结构）
       */
      componentDeep?: number
    }
    Res: {
      data: {
        list: {
          id: number
          bizCode: string
          /**
           * componentCode，节点本身
           */
          code:
            | string
            | number
            | boolean
            | {
                [k: string]: any
              }
          name: string
          desc: string
          status: number
          webType: string
          assistant: string
          type: string
          sort: number
          rule: string
          properties: {}
          subComponentList: {
            code: string
            subComponentList: {
              code: string
            }[]
          }[]
          metas: {
            id: number
            componentId: number
            code: string
            value: string
            name: string
            desc: string
            assistant: string
            type: string
            sort: number
            status: number
            rule: string
            /**
             * 附属属性KV
             */
            properties: {}
          }[]
        }[]
      }
      info: {
        ok: boolean
      }
    }
  }

  /**
   * 接口名：【报表】账户分时汇总
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6752&itf=67459
   */
  'GET/api/account/report/findHourSum.json': {
    Req: {
      bizCode?: string
      logDateList?: any[]
    }
    Res: {
      data: {
        list: {
          adPv: number
          click: number
          ecpm: number
          ctr: number
          ecpc: number
          charge: number
          logDate: string
          hourId: number
        }[]
      }
      info: {
        disableTime: boolean
        lockSla: boolean
        errorCode: string
        message: string
        ok: boolean
        redirectUrl: string
        unlockUrl: string
      }
    }
  }

  /**
   * 接口名：【报表】账户分时列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6752&itf=67344
   */
  'GET/api/account/report/findHourList.json': {
    Req: {
      bizCode?: string
      /**
       * 查询日期
       */
      logDateList?: any[]
    }
    Res: {
      data: {
        /**
         * 分时汇总信息
         */
        list: {
          /**
           * 展现量
           */
          adPv: number
          /**
           * 点击数
           */
          click: number
          /**
           * 千次展现成本
           */
          ecpm: number
          /**
           * 点击率
           */
          ctr: number
          /**
           * 点击单价
           */
          ecpc: number
          /**
           * 消耗
           */
          charge: number
          /**
           * 小时ID
           */
          hourId: number
          logDate: string
        }[]
      }
      info: {
        disableTime: boolean
        lockSla: boolean
        errorCode: string
        message: string
        ok: boolean
        redirectUrl: string
        unlockUrl: string
      }
    }
  }

  /**
   * 接口名：【报表】账户整体分日汇总
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6752&itf=67472
   */
  'GET/api/account/report/findDaySum.json': {
    Req: {
      bizCode?: string
      /**
       * 结束日期，格式yyyy-MM-dd
       */
      startTime?: string
      /**
       * 开始日期，格式yyyy-MM-dd
       */
      endTime?: string
      /**
       * click点击 /impression展现效果
       */
      effectType?: string
      /**
       * 3、7、15、30
       */
      effect?: number
    }
    Res: {
      info: {
        disableTime: boolean
        lockSla: boolean
        errorCode: string
        message: string
        ok: boolean
        redirectUrl: string
        unlockUrl: string
      }
      data: {
        list: {
          logDate: string
          charge: number
          adPv: number
          click: number
          ctr: number
          ecpm: number
          ecpc: number
        }[]
      }
    }
  }

  /**
   * 接口名：【报表】账户整体分日列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6752&itf=67475
   */
  'GET/api/account/report/findDayList.json': {
    Req: {
      bizCode?: string
      startTime?: string
      endTime?: string
      effectType?: string
      effect?: number
    }
    Res: {
      info: {
        disableTime: boolean
        lockSla: boolean
        errorCode: string
        message: string
        ok: boolean
        redirectUrl: string
        unlockUrl: string
      }
      data: {
        list: {
          logDate: string
          charge: number
          adPv: number
          click: number
          ctr: number
          ecpm: number
          ecpc: number
        }[]
      }
    }
  }

  /**
   * 接口名：【 报表】计划分页列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6752&itf=67623
   */
  'GET/api/campaign/report/findPage.json': {
    Req: {
      bizCode?: string
      startTime?: string
      endTime?: string
      effectType?: number
      offset?: number
      pageSize?: number
      searchName?: string
      effect?: string
      orderField?: string
      orderBy?: string
    }
    Res: {
      info: {
        disableTime: boolean
        lockSla: boolean
        errorCode: string
        message: string
        ok: boolean
        redirectUrl: string
        unlockUrl: string
      }
      data: {
        count: number
        list: {
          campaignId: number
          campaignName: string
          campaignType: string
          autoBid: number
          status: string
          reportInfoList: {
            logDate: string
            charge: number
            adPv: number
            click: number
            ctr: number
            ecpm: number
            ecpc: number
            isFs:
              | {
                  [k: string]: any
                }
              | number
          }[]
        }[]
      }
    }
  }

  /**
   * 接口名：【报表】单个计划报表： 列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6752&itf=67480
   */
  'GET/api/campaign/report/findList.json': {
    Req: {
      bizCode?: string
      startTime?: string
      endTime?: string
      effectType?: number
      effect?: string
      campaignId?: number
    }
    Res: {
      data: {
        list: {
          adPv: number
          click: number
          ecpm: number
          ctr: number
          ecpc: number
          charge: number
          logDate: string
          campaignId: string
          campaignName: string
        }[]
      }
      info: {
        disableTime: boolean
        lockSla: boolean
        errorCode: string
        message: string
        ok: boolean
        redirectUrl: string
        unlockUrl: string
      }
    }
  }

  /**
   * 接口名：【报表】单个计划报表：汇总
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6752&itf=67481
   */
  'GET/api/campaign/report/findSum.json': {
    Req: {
      bizCode?: string
      startTime?: string
      endTime?: string
      effectType?: number
      effect?: string
      campaignId?: number
    }
    Res: {
      data: {
        list: {
          adPv: number
          click: number
          ecpm: number
          ctr: number
          ecpc: number
          charge: number
        }[]
      }
      info: {
        disableTime: boolean
        lockSla: boolean
        errorCode: string
        message: string
        ok: boolean
        redirectUrl: string
        unlockUrl: string
      }
    }
  }

  /**
   * 接口名：【报表】单元分页列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6752&itf=67621
   */
  'GET/api/adgroup/report/findPage.json': {
    Req: {
      bizCode?: string
      startTime?: string
      endTime?: string
      effectType?: number
      offset?: number
      pageSize?: number
      searchName?: string
      campaignId?: number
      adgroupId?: number
      effect?: string
    }
    Res: {
      info: {
        disableTime: boolean
        lockSla: boolean
        errorCode: string
        message: string
        ok: boolean
        redirectUrl: string
        unlockUrl: string
      }
      data: {
        count: number
        list: {
          campaignId: number
          campaignName: string
          campaignType: number
          autoBid: boolean
          campaignStatus: number
          adgroupName: string
          adgroupId: number
          materialId: number
          status: number
          reportInfoList: {
            logDate: string
            charge: number
            adPv: number
            click: number
            ctr: number
            ecpm: number
            ecpc: number
            isFs: number
          }[]
        }[]
      }
    }
  }

  /**
   * 接口名：【报表】单个单元报表： 列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6752&itf=67486
   */
  'GET/api/adgroup/report/findList.json': {
    Req: {
      bizCode?: string
      startTime?: string
      endTime?: string
      effectType?: number
      effect?: string
      campaignId?: number
      adgroupId?: number
    }
    Res: {
      data: {
        list: {
          adPv: number
          click: number
          ecpm: number
          ctr: number
          ecpc: number
          charge: number
          logDate: string
          campaignId: string
          campaignName: string
          adgroupId: string
          adgroupName: string
        }[]
      }
      info: {
        disableTime: boolean
        lockSla: boolean
        errorCode: string
        message: string
        ok: boolean
        redirectUrl: string
        unlockUrl: string
      }
    }
  }

  /**
   * 接口名：【报表】单个单元报表：汇总
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6752&itf=67487
   */
  'GET/api/adgroup/report/findSum.json': {
    Req: {
      bizCode?: string
      startTime?: string
      endTime?: string
      effectType?: number
      effect?: string
      campaignId?: number
      adgroupId?: number
    }
    Res: {
      data: {
        list: {
          adPv: number
          click: number
          ecpm: number
          ctr: number
          ecpc: number
          charge: number
        }[]
      }
      info: {
        disableTime: boolean
        lockSla: boolean
        errorCode: string
        message: string
        ok: boolean
        redirectUrl: string
        unlockUrl: string
      }
    }
  }

  /**
   * 接口名：【报表】创意分页列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6752&itf=67639
   */
  'GET/api/creative/report/findPage.json': {
    Req: {
      bizCode?: string
      startTime?: string
      endTime?: string
      effectType?: number
      effect?: string
      offset?: number
      pageSize?: number
      searchName?: string
    }
    Res: {
      info: {
        disableTime: boolean
        lockSla: boolean
        errorCode: string
        message: string
        ok: boolean
        redirectUrl: string
        unlockUrl: string
      }
      data: {
        count: number
        list: {
          adgroupId: number
          adgroupName: string
          bizCode: string
          bizType: number
          campaignId: number
          campaignModel: number
          campaignName: string
          clickUrl: string
          contentMediaTypeNames: null
          creativeId: number
          creativeName: string
          creativeSize: string
          creativeFormat: number
          creativeFormatName: string
          imgUrl: string
          faultEnumList: {
            faultEnumName: string[]
          }[]
          reportInfoList: {
            click: string
            charge: number
            adPv: number
            ecpm: number
            ctr: number
            ecpc: number
            logDate: string
          }[]
          solutionType: string
          campaignType: string
          system: boolean
          creativeLevel: number
          status: string
          punishReasonList: {
            auditReasonId: string
            blockName: string
            blockUrl: string
            reasonDTOs: {
              auditReasonId: number
              auditReasonName: string
              flawUrls: string[]
              redirectUrl: string
            }[]
          }[]
          format: string
          canEdit: boolean
          materialId: string
        }[]
      }
    }
  }

  /**
   * 接口名：【报表】单个创意报表： 列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6752&itf=69359
   */
  'GET/api/creative/report/findList.json': {
    Req: {
      bizCode?: string
      startTime?: string
      endTime?: string
      effectType?: number
      effect?: string
      campaignId?: number
      adgroupId?: number
      creativeId?: string
    }
    Res: {
      data: {
        list: {
          adPv: number
          click: number
          ecpm: number
          ctr: number
          ecpc: number
          charge: number
          logDate: string
          campaignId: string
          campaignName: string
          adgroupId: string
          adgroupName: string
          creativeId: string
          creativeName: string
        }[]
      }
      info: {
        disableTime: boolean
        lockSla: boolean
        errorCode: string
        message: string
        ok: boolean
        redirectUrl: string
        unlockUrl: string
      }
    }
  }

  /**
   * 接口名：【报表】单个创意报表： 汇总
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6752&itf=69360
   */
  'GET/api/creative/report/findSum.json': {
    Req: {
      bizCode?: string
      startTime?: string
      endTime?: string
      effectType?: number
      effect?: string
      campaignId?: number
      adgroupId?: number
      creativeId?: string
    }
    Res: {
      data: {
        list: {
          adPv: number
          click: number
          ecpm: number
          ctr: number
          ecpc: number
          charge: number
          logDate: string
        }[]
      }
      info: {
        disableTime: boolean
        lockSla: boolean
        errorCode: string
        message: string
        ok: boolean
        redirectUrl: string
        unlockUrl: string
      }
    }
  }

  /**
   * 接口名：【报表】定向分页列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6752&itf=67637
   */
  'GET/api/crowd/report/findPage.json': {
    Req: {
      bizCode?: string
      startTime?: string
      endTime?: string
      effectType?: number
      effect?: string
      offset?: number
      pageSize?: number
      searchName?: string
    }
    Res: {
      info: {
        disableTime: boolean
        lockSla: boolean
        errorCode: string
        message: string
        ok: boolean
        redirectUrl: string
        unlockUrl: string
      }
      data: {
        count: number
        list: {
          adgroupId: number
          adgroupName: string
          autoBid: number
          autoBidStrategy: null
          bizCode: null
          campaignId: number
          campaignName: string
          campaignType: number
          cpcLimit: null
          crowdDesc: null
          crowdId: number
          crowdName: string
          dayBudget: number
          faultEnumList: null
          objectId: number
          priceScope: string
          priceWarn: number
          properties: null
          solutionType: string
          targetLabel: {
            adgroupId: null
            campaignId: null
            labelDesc: null
            labelId: null
            labelName: null
            labelPriceMode: null
            labelValue: null
            options: null
            properties: null
            status: null
            targetId: null
            targetType: number
          }
          price: number
          status: string
          reportInfoList: {
            logDate: string
            charge: number
            adPv: number
            click: number
            ctr: number
            ecpm: number
            ecpc: number
          }[]
        }[]
      }
    }
  }

  /**
   * 接口名：【报表】单个定向报表： 列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6752&itf=69469
   */
  'GET/api/crowd/report/findList.json': {
    Req: {
      bizCode?: string
      startTime?: string
      endTime?: string
      effectType?: number
      effect?: string
      campaignId?: number
      adgroupId?: number
      crowdId?: string
    }
    Res: {
      data: {
        list: {
          adPv: number
          click: number
          ecpm: number
          ctr: number
          ecpc: number
          charge: number
          campaignId: string
          campaignName: string
          adgroupId: string
          adgroupName: string
          crowdId: string
          crowdName: string
        }[]
      }
      info: {
        disableTime: boolean
        lockSla: boolean
        errorCode: string
        message: string
        ok: boolean
        redirectUrl: string
        unlockUrl: string
      }
    }
  }

  /**
   * 接口名：【报表】单个定向报表： 汇总
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6752&itf=69470
   */
  'GET/api/crowd/report/findSum.json': {
    Req: {
      bizCode?: string
      startTime?: string
      endTime?: string
      effectType?: number
      effect?: string
      campaignId?: number
      adgroupId?: number
      creativeId?: string
    }
    Res: {
      data: {
        list: {
          adPv: number
          click: number
          ecpm: number
          ctr: number
          ecpc: number
          charge: number
        }[]
      }
      info: {
        disableTime: boolean
        lockSla: boolean
        errorCode: string
        message: string
        ok: boolean
        redirectUrl: string
        unlockUrl: string
      }
    }
  }

  /**
   * 接口名：【报表】资源位分页列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6752&itf=67622
   */
  'GET/api/adzone/report/findPage.json': {
    Req: {
      bizCode?: string
      startTime?: string
      endTime?: string
      effectType?: number
      effect?: string
      offset?: number
      pageSize?: number
      searchName?: string
    }
    Res: {
      info: {
        disableTime: boolean
        lockSla: boolean
        errorCode: string
        message: string
        ok: boolean
        redirectUrl: string
        unlockUrl: string
      }
      data: {
        count: number
        list: {
          adzoneId: number
          adgroupId: number
          adzoneName: string
          campaignName: string
          campaignId: number
          discount: number
          reportInfoList: {
            adPv: number
            click: number
            ecpm: number
            ctr: number
            ecpc: number
            charge: number
            logDate: string
          }[]
          adgroupName: string
          solutionType: string
          campaignType: string
          autoBid: boolean
          tags: {
            name: string
            desc: string
            color: string
          }[]
          bizCode: string
          basePackage: boolean
          canEdit: boolean
        }[]
      }
    }
  }

  /**
   * 接口名：【报表】单个资源位报表： 列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6752&itf=69472
   */
  'GET/api/adzone/report/findList.json': {
    Req: {
      bizCode?: string
      startTime?: string
      endTime?: string
      effectType?: number
      effect?: string
      campaignId?: number
      adgroupId?: number
      creativeId?: string
    }
    Res: {
      data: {
        list: {
          adPv: number
          click: number
          ecpm: number
          ctr: number
          ecpc: number
          charge: number
          logDate: string
          campaignId: string
          campaignName: string
          adgroupId: string
          adgroupName: string
          adzoneId: string
        }[]
      }
      info: {
        disableTime: boolean
        lockSla: boolean
        errorCode: string
        message: string
        ok: boolean
        redirectUrl: string
        unlockUrl: string
      }
    }
  }

  /**
   * 接口名：【报表】单个资源位报表： 汇总
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6752&itf=69471
   */
  'GET/api/adzone/report/findSum.json': {
    Req: {
      bizCode?: string
      startTime?: string
      endTime?: string
      effectType?: number
      effect?: string
      campaignId?: number
      adgroupId?: number
      adzoneId?: string
    }
    Res: {
      data: {
        list: {
          adPv: number
          click: number
          ecpm: number
          ctr: number
          ecpc: number
          charge: number
          logDate: string
        }[]
      }
      info: {
        disableTime: boolean
        lockSla: boolean
        errorCode: string
        message: string
        ok: boolean
        redirectUrl: string
        unlockUrl: string
      }
    }
  }

  /**
   * 接口名：【报表】账户概览：人群整体分日汇总
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6752&itf=79815
   */
  'GET/api/account/report/findCrowdDaySum.json': {
    Req: {
      bizCode?: string
      startTime?: string
      endTime?: string
      effectType?: string
    }
    Res: {
      info: {
        disableTime: boolean
        lockSla: boolean
        errorCode: string
        message: string
        ok: boolean
        redirectUrl: string
        unlockUrl: string
      }
      data: {
        list: {
          logDate: string
          newUv: number
          oldUv: number
          potentialUv: number
          uv: number
        }[]
      }
    }
  }

  /**
   * 接口名：【报表】账户概览：人群整体分日列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6752&itf=79816
   */
  'GET/api/account/report/findCrowdDayList.json': {
    Req: {
      bizCode?: string
      startTime?: string
      endTime?: string
      effectType?: string
    }
    Res: {
      info: {
        disableTime: boolean
        lockSla: boolean
        errorCode: string
        message: string
        ok: boolean
        redirectUrl: string
        unlockUrl: string
      }
      data: {
        list: {
          logDate: string[]
          charge: string
          adPv: string
          click: string
          deepShopUv: string
          prepayInshopNum: string
          couponNum: string
          redPacketNum: string
          inshopItemColNum: string
          dirShopColNum: string
          cartNum: string
          uv: string
          prepayInshopAmt: string
          custType: number[]
        }[]
      }
    }
  }

  /**
   * 接口名：【报表】账户概览：宝贝分页列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6752&itf=79817
   */
  'GET/api/material/report/findItemPage.json': {
    Req: {
      bizCode?: string
      startTime?: string
      endTime?: string
      effectType?: string
      offset?: number
      pageSize?: number
      itemName?: string
      orderField?: string
      orderBy?: string
    }
    Res: {
      data: {
        count: number
        list: {
          bidCount: number
          categoryId: string
          materialId: number
          imgUrl: string
          isRecommend: boolean
          linkUrl: string
          multiImageURL: string[]
          price: number
          quantity: number
          recommendScore: number
          starts: string
          status: number
          title: string
          mediaTypeNames: string[]
          feedReportInfo: {
            pv: string
            click: string
          }
          liveStartTime: string
          publishTime: string
          createTime: string
          modifyTime: string
          reportInfoList: {
            click: string
            charge: number
            adPv: number
            ctr: number
            logDate: string
            cartNum: number
            prepayInshopNum: number
            prepayInshopAmt: number
            inshopItemColNum: number
          }[]
          videoDuration: number
        }[]
      }
      info: {
        disableTime: boolean
        lockSla: boolean
        ok: boolean
      }
    }
  }

  /**
   * 接口名：【报表】双十一活动报表-消费者触达
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6752&itf=82974
   */
  'GET/api/activity/report/consumerReach.json': {
    Req: {
      bizCode?: string
      startTime?: string
      endTime?: string
    }
    Res: {
      data: {
        list: {
          /**
           * 本店店铺消费者
           */
          shopUv: number
          /**
           * 广告触达率
           */
          adRechRate: number
          /**
           * 行业潜在消费者
           */
          catPotentialUv: number
          /**
           * 行业潜在消费者渗透率
           */
          shopUvRate: number
        }[]
      }
      info: {
        disableTime: boolean
        lockSla: boolean
        ok: boolean
      }
    }
  }

  /**
   * 接口名：【报表】账户分时列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7005&itf=69611
   */
  'GET/api/account/report/exportHourList.json': {
    Req: {
      bizCode?: string
      /**
       * 查询日期
       */
      logDateList?: any[]
    }
    Res: {
      data: {}
      info: {}
    }
  }

  /**
   * 接口名：【报表】账户整体分日列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7005&itf=69612
   */
  'GET/api/account/report/exportDayList.json': {
    Req: {
      bizCode?: string
      /**
       * 结束日期，格式yyyy-MM-dd
       */
      startTime?: string
      /**
       * 开始日期，格式yyyy-MM-dd
       */
      endTime?: string
      /**
       * click点击 /impression展现效果
       */
      effectType?: string
      /**
       * 3、7、15、30
       */
      effect?: number
    }
    Res: {
      info: {}
      data: {}
    }
  }

  /**
   * 接口名：【 报表】计划报表下载
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7005&itf=69614
   */
  'GET/api/campaign/report/exportCampaign.json': {
    Req: {
      bizCode?: string
      startTime?: string
      endTime?: string
      effectType?: number
      searchName?: string
      effect?: string
      orderField?: string
      orderBy?: string
    }
    Res: {
      info: {}
      data: {}
    }
  }

  /**
   * 接口名：【报表】单个计划报表： 列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7005&itf=69615
   */
  'GET/api/campaign/report/exportDayOrHourList.json': {
    Req: {
      bizCode?: string
      startTime?: string
      endTime?: string
      effectType?: number
      effect?: string
      campaignId?: number
    }
    Res: {
      data: {}
      info: {}
    }
  }

  /**
   * 接口名：【报表】单个计划报表：汇总
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7005&itf=69616
   */
  'GET/api/campaign/report/exportDayOrHourSum.json': {
    Req: {
      bizCode?: string
      startTime?: string
      endTime?: string
      effectType?: number
      effect?: string
      campaignId?: number
    }
    Res: {
      data: {}
      info: {}
    }
  }

  /**
   * 接口名：【报表】单元报表下载
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7005&itf=69617
   */
  'GET/api/adgroup/report/exportAdgroup.json': {
    Req: {
      bizCode?: string
      startTime?: string
      endTime?: string
      effectType?: number
      searchName?: string
      campaignId?: number
      adgroupId?: number
      effect?: string
    }
    Res: {
      info: {}
      data: {}
    }
  }

  /**
   * 接口名：【报表】单个单元报表： 列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7005&itf=69618
   */
  'GET/api/adgroup/report/exportDayOrHourList.json': {
    Req: {
      bizCode?: string
      startTime?: string
      endTime?: string
      effectType?: number
      effect?: string
      campaignId?: number
      adgroupId?: number
    }
    Res: {
      data: {}
      info: {}
    }
  }

  /**
   * 接口名：【报表】单个单元报表：汇总
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7005&itf=69619
   */
  'GET/api/adgroup/report/exportDayOrHourSum.json': {
    Req: {
      bizCode?: string
      startTime?: string
      endTime?: string
      effectType?: number
      effect?: string
      campaignId?: number
      adgroupId?: number
    }
    Res: {
      data: {}
      info: {}
    }
  }

  /**
   * 接口名：【报表】创意下载
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7005&itf=69620
   */
  'GET/api/creative/report/exportCreative.json': {
    Req: {
      bizCode?: string
      startTime?: string
      endTime?: string
      effectType?: number
      effect?: string
      offset?: number
      pageSize?: number
      searchName?: string
    }
    Res: {
      info: {}
      data: {}
    }
  }

  /**
   * 接口名：【报表】单个创意报表： 列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7005&itf=69622
   */
  'GET/api/creative/report/exportDayOrHourList.json': {
    Req: {
      bizCode?: string
      startTime?: string
      endTime?: string
      effectType?: number
      effect?: string
      campaignId?: number
      adgroupId?: number
      creativeId?: string
    }
    Res: {
      data: {}
      info: {}
    }
  }

  /**
   * 接口名：【报表】单个创意报表： 汇总
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7005&itf=69623
   */
  'GET/api/creative/report/exportDayOrHourSum.json': {
    Req: {
      bizCode?: string
      startTime?: string
      endTime?: string
      effectType?: number
      effect?: string
      campaignId?: number
      adgroupId?: number
      creativeId?: string
    }
    Res: {
      data: {}
      info: {}
    }
  }

  /**
   * 接口名：【报表】定向下载
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7005&itf=69624
   */
  'GET/api/crowd/report/exportCrowd.json': {
    Req: {
      bizCode?: string
      startTime?: string
      endTime?: string
      effectType?: number
      effect?: string
      searchName?: string
    }
    Res: {
      info: {}
      data: {}
    }
  }

  /**
   * 接口名：【报表】单个定向报表： 列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7005&itf=69625
   */
  'GET/api/crowd/report/exportDayOrHourList.json': {
    Req: {
      bizCode?: string
      startTime?: string
      endTime?: string
      effectType?: number
      effect?: string
      campaignId?: number
      adgroupId?: number
      crowdId?: string
    }
    Res: {
      data: {}
      info: {}
    }
  }

  /**
   * 接口名：【报表】单个定向报表： 汇总
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7005&itf=69626
   */
  'GET/api/crowd/report/exportDayOrHourSum.json': {
    Req: {
      bizCode?: string
      startTime?: string
      endTime?: string
      effectType?: number
      effect?: string
      campaignId?: number
      adgroupId?: number
      creativeId?: string
    }
    Res: {
      data: {}
      info: {}
    }
  }

  /**
   * 接口名：【报表】资源位下载
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7005&itf=69627
   */
  'GET/api/adzone/report/exportAdzone.json': {
    Req: {
      bizCode?: string
      startTime?: string
      endTime?: string
      effectType?: number
      effect?: string
      searchName?: string
    }
    Res: {
      info: {}
      data: {}
    }
  }

  /**
   * 接口名：【报表】单个资源位报表： 列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7005&itf=69628
   */
  'GET/api/adzone/report/exportDayOrHourList.json': {
    Req: {
      bizCode?: string
      startTime?: string
      endTime?: string
      effectType?: number
      effect?: string
      campaignId?: number
      adgroupId?: number
      creativeId?: string
    }
    Res: {
      data: {}
      info: {}
    }
  }

  /**
   * 接口名：【报表】单个资源位报表： 汇总
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7005&itf=69629
   */
  'GET/api/adzone/report/exportDayOrHourSum.json': {
    Req: {
      bizCode?: string
      startTime?: string
      endTime?: string
      effectType?: number
      effect?: string
      campaignId?: number
      adgroupId?: number
      adzoneId?: string
    }
    Res: {
      data: {}
      info: {}
    }
  }

  /**
   * 接口名：【报表】账户概览：宝贝分页列表下载
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7005&itf=79824
   */
  'GET/api/material/report/exportItem.json': {
    Req: {
      bizCode?: string
      startTime?: string
      endTime?: string
      effectType?: string
      offset?: number
      pageSize?: number
      itemName?: string
      orderField?: string
      orderBy?: string
    }
    Res: {
      info: {}
      data: {}
    }
  }

  /**
   * 接口名：【报表】账户概览：人群整体分日列表下载
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7005&itf=80230
   */
  'GET/api/account/report/exportCrowdDayList.json': {
    Req: {
      bizCode?: string
      startTime?: string
      endTime?: string
      effectType?: string
    }
    Res: {
      info: {}
      data: {}
    }
  }

  /**
   * 接口名：查询站内信列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7037&itf=69919
   */
  'GET/api/message/findLetterList.json': {
    Req: {
      /**
       * 开始时间
       */
      beginTime?: string
      /**
       * 结束时间
       */
      endTime?: string
      /**
       * login_window,
       * daily_notice,
       * top_banner
       */
      letterType?: string
      /**
       * read
       * unread
       */
      readStatus?: string
      /**
       * 标题搜索
       */
      subject?: string
      offset?: number
      pageSize?: number
    }
    Res: {
      info: {
        ok: boolean
      }
      data: {
        letterList: {
          subject: string
          messageId: number
          letterType: string
          readStatus: string
          setTop: boolean
          topTime: string
        }[]
        unReadCount: number
        totalCount: number
      }
    }
  }

  /**
   * 接口名：查看站内信
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7037&itf=69920
   */
  'GET/api/message/getLetterDetail.json': {
    Req: {
      messageId?: number
    }
    Res: {
      data: {
        letterDetail: {
          content: string
          setTop: number
          letterType: null
          readStatus: string
          subject: string
          topAvailDate: string
          topTime: string
          messageId: string
        }
      }
      info: {
        disableTime: boolean
        errorCode: null
        lockSla: boolean
        message: null
        ok: boolean
        redirectUrl: null
        unlockUrl: null
      }
    }
  }

  /**
   * 接口名：批量已读站内信
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7037&itf=70115
   */
  'POST/api/message/batchReadLetters.json': {
    Req: {
      messageIdList?: any[]
    }
    Res: {
      info: {
        ok: boolean
      }
    }
  }

  /**
   * 接口名：消费者汇总卡片
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7107&itf=70493
   */
  'GET/api/report/consumer/findSummary.json': {
    Req: {
      bizCode?: string
      /**
       * yyyy-MM-dd
       */
      logDate?: string
      /**
       * 全店归因(1_1)还是广告归因(2_1(钻展)/2_2(信息流))
       */
      dataType?: string
      /**
       * 推算周期1周,2月
       *
       */
      dateType?: string
    }
    Res: {
      data: {
        list: {
          bizCode: null
          changeUv: number
          consumerType: number
          inUv: number
          outUv: number
        }[]
      }
      info: {
        errorCode: null
        message: null
        ok: boolean
      }
    }
  }

  /**
   * 接口名：消费者流转
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7107&itf=70497
   */
  'GET/api/report/consumer/findConsumerCirculation.json': {
    Req: {
      bizCode?: string
      /**
       * yyyy-MM-dd
       */
      logDate?: string
      /**
       * 全店归因(1_1)还是广告归因(2_1(钻展)/2_2(信息流))
       */
      dataType?: string
      /**
       * 推算周期1周,2月
       *
       */
      dateType?: string
    }
    Res: {
      data: {
        list: {
          adPvUvRate: null
          bizCode: null
          changeUv: null
          finalDatas: {
            changeUv: number
            cmoDatas: {
              changeUv: number
              cmoFinalState: number
            }[]
            finalState: number
          }[]
          initialState: number
        }[]
      }
      info: {
        errorCode: null
        message: null
        ok: boolean
      }
    }
  }

  /**
   * 接口名：粉丝汇总卡片
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7167&itf=70935
   */
  'GET/api/report/fans/findSummary.json': {
    Req: {
      bizCode?: string
      /**
       * yyyy-MM-dd
       */
      logDate?: string
      /**
       * 全店归因(1_1)还是广告归因(2_1(钻展)/2_2(信息流)) （钻展暂时无用，但保留和消费者洞察一致
       */
      dataType?: string
      /**
       * 推算周期，1周 2月
       */
      dateType?: string
    }
    Res: {
      info: {
        ok: boolean
      }
      data: {
        list: {
          /**
           * 粉丝类型 0非粉,2潜在粉丝,3沉默粉丝,4活跃粉丝
           */
          fansType: number
          /**
           * 广告曝光
           */
          pvUv: number
          /**
           * 流入
           */
          inUv: string
          /**
           * 流出
           */
          outUv: number
        }[]
      }
    }
  }

  /**
   * 接口名：粉丝流转
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7167&itf=70962
   */
  'GET/api/report/fans/findCirculation.json': {
    Req: {
      bizCode?: string
      /**
       * yyyy-MM-dd
       */
      logDate?: string
      /**
       *  全店归因(1_1)还是广告归因(2_1(钻展)/2_2(信息流)) （钻展暂时无用，但保留和消费者洞察一致
       */
      dataType?: string
      /**
       * 推算周期，1周 2月
       */
      dateType?: string
    }
    Res: {
      info: {
        ok: boolean
      }
      data: {
        list: {
          /**
           * 初始状态：0非粉,2潜在粉丝,3沉默粉丝,4活跃粉丝'
           */
          initialState: number
          /**
           * 广告曝光人数
           */
          pvUv: number
          /**
           * 广告曝光比率
           */
          adPvUvRate: number
          finalDatas: {
            /**
             * 最终状态：0非粉,2潜在粉丝,3沉默粉丝,4活跃粉丝'
             */
            finalState: number
            /**
             * 人数
             */
            changeUv: number
          }[]
        }[]
      }
    }
  }

  /**
   * 接口名：查询直钻迁移计划
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7473&itf=73258
   */
  'GET/api/campaign/findTransferPage.json': {
    Req: {
      /**
       * zuanshi - 钻展
       * subway - 直通车
       */
      bp?: string
      /**
       * feedFlowItem
       */
      bizcode?: string
      /**
       * undone-未迁移
       * done-已迁移
       * doing-迁移中
       */
      transferStatus?: string
      campaignName?: string
      offset?: number
      pageSize?: number
    }
    Res: {
      data: {
        count: number
        list: {
          campaignId: number
          campaignName: string
          transferStatus: string
          dayBudget: number
        }[]
      }
      info: {
        errorCode: null
        message: null
        ok: boolean
      }
    }
  }

  /**
   * 接口名：迁移完成
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7473&itf=73370
   */
  'POST/api/campaign/transfer.json': {
    Req: {
      bizcode?: string
      camapignId?: number
      bp?: string
    }
    Res: {
      info: {
        ok: boolean
      }
    }
  }

  /**
   * 接口名：活动整体分日汇总
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7723&itf=75133
   */
  'GET/api/activity/report/findDaySum.json': {
    Req: {
      bizCode?: string
      /**
       * 开始日期，格式yyyy-MM-dd
       */
      startTime?: string
      /**
       * 结算日期，格式yyyy-MM-dd
       */
      endTime?: string
      /**
       * click点击 /impression展现效果
       */
      effectType?: string
    }
    Res: {
      info: {
        disableTime: boolean
        lockSla: boolean
        errorCode: string
        message: string
        ok: boolean
        redirectUrl: string
        unlockUrl: string
      }
      data: {
        list: {
          logDate: string
          /**
           * 消耗
           */
          charge: number
          /**
           * 展现量
           */
          adPv: number
          /**
           * 点击量
           */
          click: number
          /**
           * 深度进店量uv,按点击计算
           */
          deepShopUv: number
          /**
           * 预售订单量
           */
          prepayInshopNum: number
          /**
           * 发放优惠券个数
           */
          couponNum: number
          /**
           * 发放红包个数
           */
          redPacketNum: number
          /**
           * 宝贝收藏量
           */
          inshopItemColNum: number
          /**
           * 店铺收藏量
           */
          dirShopColNum: number
          /**
           * 加购量
           */
          cartNum: number
          /**
           * uv
           */
          uv: number
          /**
           * 预售金额
           */
          prepayInshopAmt: number
          ctr: number
          /**
           * 成交金额
           */
          alipayInshopAmt: number
          /**
           * 成交订单量
           */
          alipayInShopNum: number
        }[]
      }
    }
  }

  /**
   * 接口名：活动整体分日列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7723&itf=75150
   */
  'GET/api/activity/report/findDayList.json': {
    Req: {
      bizCode?: string
      startTime?: string
      endTime?: string
      effectType?: string
    }
    Res: {
      info: {
        disableTime: boolean
        lockSla: boolean
        errorCode: string
        message: string
        ok: boolean
        redirectUrl: string
        unlockUrl: string
      }
      data: {
        list: {
          logDate: string
          charge: string
          adPv: string
          click: string
          deepShopUv: string
          prepayInshopNum: string
          couponNum: number
          redPacketNum: number
          inshopItemColNum: number
          dirShopColNum: number
          cartNum: number
          uv: number
          prepayInshopAmt: number
        }[]
      }
    }
  }

  /**
   * 接口名：活动人群整体分日汇总
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7723&itf=75151
   */
  'GET/api/activity/report/findCrowdDaySum.json': {
    Req: {
      bizCode?: string
      startTime?: string
      endTime?: string
      effectType?: string
    }
    Res: {
      info: {
        disableTime: boolean
        lockSla: boolean
        errorCode: string
        message: string
        ok: boolean
        redirectUrl: string
        unlockUrl: string
      }
      data: {
        list: {
          logDate: string
          /**
           * 新客
           */
          newUv: number
          /**
           * 老客
           */
          oldUv: number
          /**
           * 潜客
           */
          potentialUv: number
          /**
           * 总
           */
          uv: number
        }[]
      }
    }
  }

  /**
   * 接口名：活动人群整体分日报表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7723&itf=75152
   */
  'GET/api/activity/report/findCrowdDayList.json': {
    Req: {
      bizCode?: string
      startTime?: string
      endTime?: string
      effectType?: string
    }
    Res: {
      info: {
        disableTime: boolean
        lockSla: boolean
        errorCode: string
        message: string
        ok: boolean
        redirectUrl: string
        unlockUrl: string
      }
      data: {
        list: {
          logDate: string
          charge: string
          adPv: string
          click: string
          deepShopUv: string
          prepayInshopNum: string
          couponNum: string
          redPacketNum: string
          inshopItemColNum: string
          dirShopColNum: string
          cartNum: string
          uv: string
          prepayInshopAmt: string
          /**
           * 0-新，1-潜，2-老
           */
          custType: number
        }[]
      }
    }
  }

  /**
   * 接口名：活动宝贝分页列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7723&itf=75153
   */
  'GET/api/activity/report/findItemPage.json': {
    Req: {
      bizCode?: string
      startTime?: string
      endTime?: string
      effectType?: string
      offset?: number
      pageSize?: number
      itemName?: string
      orderField?: string
      orderBy?: string
    }
    Res: {
      data: {
        count: number
        list: {
          bidCount: number
          categoryId: string
          materialId: number
          imgUrl: string
          isRecommend: boolean
          linkUrl: string
          multiImageURL: string[]
          price: number
          quantity: number
          recommendScore: number
          starts: string
          status: number
          title: string
          mediaTypeNames: string[]
          feedReportInfo: {
            pv: string
            click: string
          }
          liveStartTime: string
          publishTime: string
          createTime: string
          modifyTime: string
          reportInfoList: {
            /**
             * 点击量
             */
            click: string
            /**
             * 消耗
             */
            charge: number
            /**
             * 展现
             */
            adPv: number
            /**
             * 点击率
             */
            ctr: number
            logDate: string
            /**
             * 添加购物车量
             */
            cartNum: number
            /**
             * 预售订单量
             */
            prepayInshopNum: number
            /**
             * 预售金额
             */
            prepayInshopAmt: number
            /**
             * 宝贝收藏量
             */
            inshopItemColNum: number
          }[]
          videoDuration: number
        }[]
      }
      info: {
        disableTime: boolean
        lockSla: boolean
        ok: boolean
      }
    }
  }

  /**
   * 接口名：活动整体分日列表下载
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7723&itf=75164
   */
  'GET/api/activity/report/exportDayList.json': {
    Req: {
      bizCode?: string
      startTime?: string
      endTime?: string
      effectType?: string
    }
    Res: {
      info: {}
      data: {}
    }
  }

  /**
   * 接口名：活动人群整体分日报表下载
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7723&itf=75165
   */
  'GET/api/activity/report/exportCrowdDayList.json': {
    Req: {
      bizCode?: string
      startTime?: string
      endTime?: string
      effectType?: string
    }
    Res: {
      info: {}
      data: {}
    }
  }

  /**
   * 接口名：活动宝贝列表下载
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7723&itf=75166
   */
  'GET/api/activity/report/exportItem.json': {
    Req: {
      bizCode?: string
      startTime?: string
      endTime?: string
      effectType?: string
      offset?: number
      pageSize?: number
      itemName?: string
      orderField?: string
      orderBy?: string
    }
    Res: {
      info: {}
      data: {}
    }
  }

  /**
   * 接口名：618活动接口迁移到日常接口的map
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7723&itf=79825
   */
  'GET/map': {
    Req: {}
    Res: {}
  }

  /**
   * 接口名：结案-计划投放效果
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7789&itf=75586
   */
  'GET/api/report/case/findCampaignDaySum.json': {
    Req: {
      bizCode?: string
      /**
       * 计划id
       */
      campaignId?: number
      /**
       * 开始日期
       */
      startTime?: string
      /**
       * 结束日期
       */
      endTime?: string
    }
    Res: {
      data: {
        list: {
          /**
           * 展现量
           */
          adPv: string
          /**
           * 点击量
           */
          click: number
          /**
           * 点击率
           */
          ctr: number
          /**
           * 消耗
           */
          charge: number
          /**
           * 展现人数
           */
          uv: number
          /**
           * 点击人数
           */
          clickUv: number
          /**
           * 收藏宝贝量
           */
          inshopItemColNum: number
          /**
           * 添加购物车量
           */
          cartNum: number
          /**
           * 收藏加购率
           */
          favCartRate: number
          /**
           * 展现人数
           */
          pvUv: number
          /**
           * 加购收藏人数
           */
          colCartUv: number
          /**
           * 关注店铺数=收藏店铺数
           */
          dirShopColNum: number
        }[]
      }
      info: {
        disableTime: boolean
        lockSla: boolean
        errorCode: string
        message: string
        ok: boolean
        redirectUrl: string
        unlockUrl: string
      }
    }
  }

  /**
   * 接口名：结案-商品明细分析
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7789&itf=75587
   */
  'GET/api/report/case/findItemSumList.json': {
    Req: {
      bizCode?: string
      /**
       * 计划id
       */
      campaignId?: number
    }
    Res: {
      data: {
        list: {
          /**
           * 展现量
           */
          adPv: string
          /**
           * 点击量
           */
          click: number
          /**
           * 点击率
           */
          ctr: number
          /**
           * 消耗
           */
          charge: number
          /**
           * 展现人数
           */
          uv: number
          /**
           * 点击人数
           */
          clickUv: number
          /**
           * 收藏宝贝数
           */
          inshopItemColNum: number
          /**
           * 添加购物车量
           */
          cartNum: number
          /**
           * 收藏加购率
           */
          favCartRate: number
          /**
           * 商品id
           */
          itemId: number
          /**
           * 商品标题
           */
          title: string
          /**
           * 跳转链接
           */
          linkUrl: string
          /**
           * 图片url
           */
          imgUrl: string
          /**
           * 投放开始时间
           */
          launchBeginTime: string
          /**
           * 投放结束时间
           */
          launchEndTime: string
        }[]
      }
      info: {
        disableTime: boolean
        lockSla: boolean
        errorCode: string
        message: string
        ok: boolean
        redirectUrl: string
        unlockUrl: string
      }
    }
  }

  /**
   * 接口名：结案-商品整体趋势
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7789&itf=75588
   */
  'GET/api/report/case/findItemTrendDayList.json': {
    Req: {
      bizCode?: string
      /**
       * 计划id
       */
      campaignId?: number
      /**
       * 商品id
       */
      itemId?: number
    }
    Res: {
      data: {
        list: {
          /**
           * 访问量
           */
          ipv: string
          /**
           * 商品id
           */
          itemId: number
          /**
           * 日期
           */
          logDate: string
          /**
           * 加购收藏量=加购+收藏
           */
          cartColNum: number
        }[]
        /**
         * 汇总数据
         */
        summary: {
          /**
           * 上架时间
           */
          onShelfTime: string
          /**
           * 推广开始时间
           */
          promoteBeginTime: string
          /**
           * 结束推广
           */
          launchEndTime: string
        }
      }
      info: {
        disableTime: boolean
        lockSla: boolean
        errorCode: string
        message: string
        ok: boolean
        redirectUrl: string
        unlockUrl: string
      }
    }
  }

  /**
   * 接口名：【已有接口】查询新品计划列表 /api/campaign/findList.json
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7789&itf=75590
   */
  'GET/findList.json': {
    Req: {
      /**
       * 新品
       */
      module?: string
    }
    Res: {}
  }

  /**
   * 接口名：结案-查询商品对比曲线
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7789&itf=77755
   */
  'GET/api/report/case/findFeedShopItemAllListComp.json': {
    Req: {
      bizCode?: string
      /**
       * 计划id
       */
      campaignId?: number
      /**
       * 商品id
       */
      itemId?: number
      /**
       * 对比类型： 1 代表对比的是同店,2 代表对比的是叶子类目
       */
      compType?: number
    }
    Res: {
      data: {
        list: {
          /**
           * 加购收藏量
           */
          cartColNum: number
          /**
           * 宝贝加购量
           */
          cartItemNum: number
          /**
           * 宝贝收藏量
           */
          colItemNum: number
          /**
           * 自然访问量
           */
          ipv: string
          logDate: string
          /**
           * 支付金额
           */
          payAmt: number
          /**
           * 支付笔数
           */
          payNum: number
          /**
           * 有效金额
           */
          validGmvAmt: number
          /**
           * 有效笔数
           */
          validGmvNum: number
        }[]
      }
      info: {
        errorCode: null
        message: null
        ok: boolean
        redirectUrl: null
      }
    }
  }

  /**
   * 接口名：查询计划绑定的定向列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7935&itf=76654
   */
  'GET/api/campaign/crowd/findList.json': {
    Req: {
      /**
       * 请求属性示例
       */
      campaignId?: number
      bizCode?: string
    }
    Res: {
      data: {
        campaign: {
          crowdList: {
            crowdId: number
            crowdName: string
            crowdDesc: string
            targetLabel: {
              targetId: number
              targetType: number
              labelId: number
              labelName: string
              labelDesc: string
              status: number
              labelValue: string
              options: {
                optionId: number
                optionName: string
                optionValue: number
                status: number
                optionDesc: string
                properties: {}
              }[]
              properties: {}
              labelPriceMode: string
            }
            price: string
          }[]
        }
      }
      info: {
        errorCode: null
        message: null
        ok: boolean
        redirectUrl: null
      }
    }
  }

  /**
   * 接口名：修改计划绑定定向
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7935&itf=76656
   */
  'PUT/api/campaign/crowd/modify.json': {
    Req: {
      campaignId?: number
      crowdList?: any[]
    }
    Res: {
      info: {
        ok: boolean
      }
    }
  }

  /**
   * 接口名：一键创建推广计划单环
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7956&itf=76782
   */
  'POST/api/solution/add.json': {
    Req: {
      campaignName?: string
      dayBudget?: number
      sourceChannel?: string
      launchPeriodList?: any[]
      marketScene?: string
      adgroupList?: {
        basePrice: number
        itemIdList: any[]
        materialId: number
      }[]
    }
    Res: {
      data: {
        campaignId: string
      }
      info: {
        errorCode: null
        message: null
        ok: boolean
        redirectUrl: null
      }
    }
  }

  /**
   * 接口名：分页获取商品列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7956&itf=70821
   */
  'GET/api/material/item/findPage.json': {
    Req: {
      /**
       * 计划id
       */
      campaignId?: string
      /**
       * 产品编码
       */
      bizCode?: string
      /**
       * 分页大小
       */
      pageSize?: string
      /**
       * 类目id
       */
      categoryId?: string
      /**
       * 排序字段 只有商品支持排序，bidCount quantity和上架时间
       */
      orderField?: string
      /**
       * 排序方式
       */
      orderBy?: string
      /**
       * 偏移量
       */
      offset?: number
      /**
       * 1全部宝贝  3活动宝贝
       */
      tagId?: number
      activityId?: string
      /**
       * 搜索标题
       */
      title?: string
      adgroupId?: number
    }
    Res: {
      data: {
        count: number
        list: {
          bidCount: number
          categoryId: string
          materialId: number
          imgUrl: string
          isRecommend: boolean
          linkUrl: string
          multiImageURL: string[]
          price: number
          quantity: number
          recommendScore: number
          starts: string
          status: number
          title: string
          mediaTypeNames: string[]
          feedReportInfo: {
            pv: string
            click: string
          }
          liveStartTime: string
          publishTime: string
          createTime: string
          modifyTime: string
          videoDuration: number
        }[]
      }
      info: {
        disableTime: boolean
        errorCode: null
        lockSla: boolean
        message: null
        ok: boolean
        redirectUrl: null
        unlockUrl: null
      }
    }
  }

  /**
   * 接口名：是否可使用一键推广
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7956&itf=77116
   */
  'GET/api/solution/allowPromotion.json': {
    Req: {
      bizcode?: string
      materialId?: number
    }
    Res: {
      data: {
        allow: boolean
        reason: string
      }
      info: {
        errorCode: null
        message: null
        ok: boolean
        redirectUrl: null
      }
    }
  }

  /**
   * 接口名：批量一键创建
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7956&itf=77594
   */
  'POST/api/solution/batchAdd.json': {
    Req: {
      solutionList?: {
        campaignName: string
        dayBudget: number
        sourceChannel: string
        launchPeriodList: any[]
        marketScene: string
        adgroupList: {
          basePrice: number
          itemIdList: any[]
          materialId: number
        }[]
      }[]
    }
    Res: {
      data: {
        list: {
          campaignId: number
          adgroupIdList: any[]
        }[]
      }
      info: {
        errorCode: null
        message: null
        ok: boolean
        redirectUrl: null
      }
    }
  }

  /**
   * 接口名：查询定向标签不分页
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=8120&itf=68423
   */
  'GET/api/target/findLabelList.json': {
    Req: {
      categoryId?: string
    }
    Res: {
      data: {
        list: {
          adgroupBindCrowdId: null
          bidPrice: null
          bindCrowd: boolean
          bizType: null
          campaignId: null
          createTime: string
          dayBudget: null
          deleteCrowd: boolean
          id: number
          isDefaultPrice: null
          labelDesc: string
          labelId: number
          labelName: number
          labelOptionMode: string
          labelPriceMode: string
          labelSourceType: string
          labelValue: string
          matrixPrice: any[]
          memberId: null
          optionCount: null
          optionGroups: null
          options: {
            bidPrice: null
            createTime: string
            filter: null
            id: number
            labelId: number
            labelOptionSourceType: string
            labelOptionType: string
            matrixPrice: any[]
            optionDesc: null
            optionName: number
            optionValue: number
            parentOptionId: number
            properties: {}
            sortNum: null
            status: number
            updateTime: string
          }[]
          priority: null
          productId: null
          properties: {}
          shopId: null
          sortNum: number
          status: number
          targetType: number
          targetingDimension: null
          targetingId: number
          transId: null
          updateTime: string
          videoId: null
          videoType: null
        }[]
      }
      info: {
        disableTime: boolean
        errorCode: null
        lockSla: boolean
        message: null
        ok: boolean
        redirectUrl: null
        unlockUrl: null
      }
    }
  }

  /**
   * 接口名：查询类目精选的类目列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=8120&itf=78707
   */
  'GET/api/target/findSelectionCategoryList.json': {
    Req: {}
    Res: {
      data: {
        list: {
          mainCategoryName: string
          mainCategoryId: string
          leafCategoryList: {
            leafCategoryName: string
            leafCategoryId: string
          }[]
        }[]
      }
      info: {
        errorCode: null
        message: null
        ok: boolean
        redirectUrl: null
      }
    }
  }

  /**
   * 接口名：账户充值
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=8524&itf=67373
   */
  'GET/api/account/recharge.action': {
    Req: {
      amount?: number
    }
    Res: {
      /**
       * 支付宝充值地址
       */
      redirect: string
    }
  }

  /**
   * 接口名：获取账户详情
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=8524&itf=67468
   */
  'GET/api/account/getInfo.json': {
    Req: {
      /**
       * normal：常规账号
       * guarantee：保量账号
       */
      wallet?: string
    }
    Res: {
      data: {
        result: {
          alipayAccount: string
          availableBalance: number
          balance: number
          bizCode: null
          creditAmount: null
          dayBudget: null
          /**
           * 冻结金额
           */
          guaranteeXBalance: number
          notSufficientBalance: null
          redPacket: null
          refundFreezeBalance: null
          shouxinAmount: number
          shouxinAvailableAmount: null
          shouxinNow: null
          totalBalance: number
          tpBalance: number
          unitedMarketingFreezeBalance: null
          /**
           * 现金余额
           */
          xjBalance: number
          yesterdayDeduct: number
          zkBalance: number
          /**
           * 现金券余额（新增）
           */
          xjQuanBalance: number
          /**
           * 满折满减券余额（新增）
           */
          discountPromotionBalance: number
          /**
           * 优惠券余额
           */
          couponBalance: number
        }
      }
      info: {
        errorCode: null
        message: null
        ok: boolean
      }
    }
  }

  /**
   * 接口名：【接口优化】新建单元
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=8524&itf=78321
   */
  'POST/api/adgroup/batchAdd.json': {
    Req: {
      adgroupList?: {
        /**
         * 落地页url， 需要校验url格式
         */
        clickUrl: string
      }[]
      crowdList?: any[]
      adzoneList?: any[]
    }
    Res: {
      info: {
        ok: boolean
      }
      data: {
        adgroupIdList: number[]
      }
    }
  }

  /**
   * 接口名：盘量接口(待定)
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=8524&itf=80936
   */
  'POST/api/campaign/estimateContractPv.json': {
    Req: {
      bizCode?: string
      solutionType?: string
      marketScene?: string
      campaignName?: string
      launchTime?: string
      launchPeriodList?: string
      campaignType?: string
      launchAreaList?: string
      assureType?: string
      assureMoney?: number
      assureValue?: number
      /**
       * 定向数据
       */
      crowdList?: string
    }
    Res: {
      data: {
        crowdList: {
          /**
           * 单个人群询量值
           */
          consultValue: string
        }[]
        /**
         * 整体询量值
         */
        totalConsultValue: string
        /**
         * 是否询量成功
         */
        consultSuccess: string
      }
      info: {
        errorCode: null
        message: null
        ok: boolean
        redirectUrl: null
      }
    }
  }

  /**
   * 接口名：锁量接口
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=8524&itf=84599
   */
  'POST/api/algotool/lockQuantity.json': {
    Req: {
      adgroupId?: string
    }
    Res: {
      data: {}
      info: {
        errorCode: null
        message: null
        ok: boolean
        redirectUrl: null
      }
    }
  }

  /**
   * 接口名：【管理】查询定向列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=8828&itf=68386
   */
  'GET/api/crowd/findPage.json': {
    Req: {
      bizCode?: string
      campaignId?: number
      adgroupId?: number
      offset?: number
      pageSize?: number
      campaignTypeList?: number[]
      targetTypeList?: number
      reportQuery?: {
        startTime?: string
        endTime?: string
        logDateList?: any[]
      }
      /**
       * 汇总给前端的打标字段
       */
      recordTag?: {
        /**
         * 是否有智能人群探索
         */
        hasProbe?: string
      }
    }
    Res: {
      data: {
        count: number
        list: {
          adgroupId: number
          adgroupName: string
          autoBid: number
          autoBidStrategy: null
          bizCode: null
          campaignId: number
          campaignName: string
          campaignType: number
          cpcLimit: null
          crowdDesc: null
          crowdId: number
          crowdName: string
          dayBudget: number
          faultEnumList: null
          objectId: number
          priceScope: string
          priceWarn: number
          properties: null
          solutionType: string
          targetLabel: {
            adgroupId: null
            campaignId: null
            labelDesc: null
            labelId: null
            labelName: null
            labelPriceMode: null
            labelValue: null
            options: null
            properties: null
            status: null
            targetId: null
            targetType: number
          }
          price: number
          status: string
          reportInfoList: {
            logDate: string
            charge: number
            adPv: number
            click: number
            ctr: number
            ecpm: number
            ecpc: number
          }[]
          simulatorType: number
          operationList: {
            /**
             * 约定KEY
             */
            key: string
            /**
             * 能否点击
             */
            disabled: boolean
            /**
             * 不能点击悬浮原因
             */
            reason: string
          }[]
          crowdValue: string
        }[]
      }
      info: {
        disableTime: boolean
        errorCode: null
        lockSla: boolean
        message: null
        ok: boolean
        redirectUrl: null
        unlockUrl: null
      }
    }
  }

  /**
   * 接口名：查询预算模拟器
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=8828&itf=83281
   */
  'POST/api/algotool/getBudgetSimulator.json': {
    Req: {
      /**
       * 有就传
       */
      campaignId?: string
      /**
       * 有就传
       */
      marketAim?: string
      /**
       * 必传
       */
      dayBudget?: string
    }
    Res: {
      data: {
        simulator: {
          points: {
            index: number
            x: number
            pv: number
            ppc: number
            cost: number
            isHightlight: number
            click: number
            '': string
          }[]
          maxXValue: number
          minXValue: number
        }
      }
      info: {
        disableTime: boolean
        errorCode: null
        lockSla: boolean
        message: null
        ok: boolean
        redirectUrl: null
        unlockUrl: null
      }
    }
  }

  /**
   * 接口名：新建推广计划
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=8828&itf=67209
   */
  'POST/api/campaign/add.json': {
    Req: {
      /**
       * 计划id
       */
      campaignId?: number
      /**
       * 计划名称
       */
      campaignName?: string
      /**
       * 计划付费类型（'cpc','cpm'）
       */
      campaignType?: string
      /**
       * 日预算
       */
      dayBudget?: number
      /**
       * 投放类型（均匀、尽快）
       */
      speedType?: number
      /**
       * 出价方式（是否智能出价）
       */
      autoBid?: boolean
      /**
       * 计划状态['pause':暂停,'start':投放中,'wait':等待投放,'terminate'-结束,'abnormal':异常]
       *
       */
      status?: string
      /**
       * 生命周期
       */
      lifeCycle?: number
      /**
       * 方案类型（'black':智能、'white':自定义）
       */
      solutionType?: string
      /**
       * 业务编码('feedFlowItem':单品,'feedFlowPicture':图文,'feedFlowLive':直播)
       */
      bizCode?: string
      /**
       * 投放时间
       */
      launchTime?: {
        /**
         * 投放开始时间
         */
        beginTime?: string
        /**
         * 投放结束时间
         */
        endTime?: string
        /**
         * 是否长期投放
         */
        launchForever?: boolean
      }
      /**
       * 投放地域
       */
      launchAreaList?: {
        /**
         * 投放地域编码
         */
        code: number
        /**
         * 投放地域名称
         */
        name: string
      }[]
      /**
       * 投放时间
       */
      launchPeriodList?: {
        /**
         * 本周的第几天（从周一开始）
         */
        dayOfWeek: number
        /**
         * 当天的各个时段
         */
        timeSpanList: {
          /**
           * 时间段（[00：00-12：00,12:00-24:00]）
           */
          time: string
          /**
           * 100（正常价格）、0（不投放）、xxx（按xxx%的价格投放）
           */
          discount: string
        }[]
      }[]
      /**
       * 投放诉求（拓展新客，打造爆款、日常销售）
       */
      marketAim?: number
      /**
       * 单元id列表
       */
      adgroupIdList?: any[]
      /**
       * 618活动新增，支持复选的目标人群
       */
      targetBuyerList?: any[]
      /**
       * 618活动新增
       */
      activityId?: number
      /**
       * 618活动新增
       */
      activityAutoTransfer?: boolean
      /**
       * 侧重人群，618新增，可以为空
       */
      focusBuyerList?: any[]
      assureMoney?: string
      assureValue?: string
      assureType?: string
      /**
       * max -目标量最大
       * upper-价格上限
       * manual-手动
       */
      systemBid?: string
    }
    Res: {
      data: {
        campaignId: number
      }
      info: {
        unlockUrl: string
        disableTime: boolean
        errorCode: string
        lockSla: boolean
        ok: boolean
        message: string
      }
    }
  }

  /**
   * 接口名：分页获取单元列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=8828&itf=67275
   */
  'GET/api/adgroup/findPage.json': {
    Req: {
      /**
       * 业务编码
       */
      bizCode?: string
      /**
       * 计划名称
       */
      campaignName?: string
      /**
       * 单元名称
       */
      adgroupName?: string
      /**
       * 状态列表
       */
      statusList?: any[]
      /**
       * 计划方案类型
       */
      solutionList?: number
      /**
       * 计划付费类型
       */
      campaignTypeList?: any[]
      /**
       * 偏移量
       */
      offset?: number
      /**
       * 每页大小
       */
      pageSize?: number
      /**
       * 排序字段
       */
      orderField?: string
      /**
       * 排序方式
       */
      orderBy?: string
      reportQuery?: {
        startTime?: string
        endTime?: string
        logDateList?: any[]
      }
      /**
       * 1表示需要质量分数据
       */
      needQualityScore?: number
      activityId?: number
    }
    Res: {
      data: {
        count: number
        list: {
          adgroupName: string
          campaignId: number
          materialId: number
          crowdList: {
            crowdId: number
            crowdName: string
            crowdDesc: string
            targetLabel: {
              targetId: number
              targetType: number
              labelId: number
              labelName: string
              labelDesc: string
              status: number
              labelValue: string
              options: {
                optionId: number
                optionName: string
                optionValue: number
                status: number
                optionDesc: string
                properties: {}
              }[]
              properties: {}
              labelPriceMode: string
            }
            matrixPrice: {
              adzoneId: number
              bidPrice: number
              adzoneName: string
            }[]
          }[]
          intelligentBid: {
            open: boolean
            maxDiscount: string
            strategy: string
          }
          cpcLimit: string
          status: string
          adgroupId: number
          autoBid: boolean
          basePrice: number
          campaignType: string
          solutionType: string
          campaignName: string
          bizCode: string
          reportInfoList: {
            logDate: string
            click: string
          }[]
          /**
           * 质量分
           */
          qualityScore: number
          /**
           * 类目质量分
           */
          categoryQualityScore: number
          imgUrl: string
          couponInfo: {
            open: string
            mode: string
            couponId: number
            type: string
            couponName: string
          }
          showTagInfoList: {
            showTag: string
            /**
             * 可能为空
             */
            color: string
            /**
             * 悬浮描述，要支持超链接等
             */
            tips: string
          }[]
          operationList: {
            key: string
          }[]
        }[]
      }
      info: {
        unlockUrl: string
        disableTime: boolean
        errorCode: string
        lockSla: boolean
        ok: boolean
        message: string
      }
    }
  }

  /**
   * 接口名：全量修改计划信息
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=8828&itf=67338
   */
  'PUT/api/campaign/modEntire.json': {
    Req: {
      /**
       * 业务编码
       */
      bizCode?: string
      /**
       * 计划id
       */
      campaignId?: number
      /**
       * 出价方式（智能出价）
       */
      autoBid?: number
      /**
       * 计划付费类型
       */
      campaignType?: number
      /**
       * 日预算
       */
      dayBudget?: number
      /**
       * 投放类型
       */
      speedType?: number
      /**
       * 计划名称
       */
      campaignName?: string
      /**
       * 投放时间
       */
      launchTime?: {
        /**
         * 开始时间
         */
        beginTime?: string
        /**
         * 结束时间
         */
        endTime?: string
        /**
         * 长期投放
         */
        launchForever?: boolean
      }
      /**
       * 投放地域
       */
      launchAreaList?: {
        /**
         * 地域编码
         */
        code: number
        /**
         * 地域名称
         */
        name: string
      }[]
      /**
       * 生命周期
       */
      lifeCycle?: number
      /**
       * 时段设置的详情列表
       */
      launchPeriodList?: {
        /**
         * 一周的第几天（周日开始）
         */
        dayOfWeek: string
        /**
         * 当天的各个时间段
         */
        timeSpanList: {
          time: string
          discount: string
        }[]
      }[]
      /**
       * 状态
       */
      status?: number
      /**
       * 方案类型
       */
      solutionType?: number
      /**
       * 投放诉求
       */
      marketingAim?: number
      adgroupIdList?: any[]
      assureMoney?: string
      assureValue?: string
      assureType?: string
      /**
       * max -目标量最大 upper-价格上限 manual-手动
       */
      systemBid?: string
    }
    Res: {
      data: {}
      info: {
        unlockUrl: string
        disableTime: boolean
        errorCode: string
        lockSla: boolean
        ok: boolean
        message: string
      }
    }
  }

  /**
   * 接口名：智能人群探索
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=8828&itf=83321
   */
  'GET/api/algotool/probeInterest.json': {
    Req: {
      adgroupId?: number
      materialId?: number
    }
    Res: {
      data: {
        interestList: {
          ' interestRelevance': string
          highQualityList: {
            interestName: string
            trafficScale: string
          }[]
          interestName: string
          interestRelevanceDescription: string
          interestValue: string
          trafficScale: number
        }[]
        material: {
          imgUrl: string
          materialId: number
          price: string
          title: string
        }
        bindSmartProbe: boolean
      }
      info: {
        errorCode: null
        message: null
        ok: boolean
        redirectUrl: null
      }
    }
  }
}

type ResSelector<T> = T

export interface ResponseTypes {
  'GET/readme/campaign': ResSelector<Models['GET/readme/campaign']['Res']>
  'GET/api/campaign/default.json': ResSelector<Models['GET/api/campaign/default.json']['Res']>
  'GET/api/campaign/get.json': ResSelector<Models['GET/api/campaign/get.json']['Res']>
  'GET/api/campaign/getSettleInfo.json': ResSelector<Models['GET/api/campaign/getSettleInfo.json']['Res']>
  'GET/api/campaign/findList.json': ResSelector<Models['GET/api/campaign/findList.json']['Res']>
  'GET/api/campaign/findPage.json': ResSelector<Models['GET/api/campaign/findPage.json']['Res']>
  'GET/api/campaign/findDraftList.json': ResSelector<Models['GET/api/campaign/findDraftList.json']['Res']>
  'DELETE/api/campaign/delete.json': ResSelector<Models['DELETE/api/campaign/delete.json']['Res']>
  'POST/api/campaign/clone.json': ResSelector<Models['POST/api/campaign/clone.json']['Res']>
  'PUT/api/campaign/updateCampaignBudgetRemindSetting.json': ResSelector<
    Models['PUT/api/campaign/updateCampaignBudgetRemindSetting.json']['Res']
  >
  'GET/api/campaign/getCampaignBudgetRemindSetting.json': ResSelector<
    Models['GET/api/campaign/getCampaignBudgetRemindSetting.json']['Res']
  >
  'PUT/api/campaign/batchModify.json': ResSelector<Models['PUT/api/campaign/batchModify.json']['Res']>
  'PUT/api/campaign/complete.json': ResSelector<Models['PUT/api/campaign/complete.json']['Res']>
  'PUT/api/campaign/setTop.json': ResSelector<Models['PUT/api/campaign/setTop.json']['Res']>
  'GET/api/campaign/validCount.json': ResSelector<Models['GET/api/campaign/validCount.json']['Res']>
  'GET/api/campaign/findDayBudgetSum.json': ResSelector<Models['GET/api/campaign/findDayBudgetSum.json']['Res']>
  'GET/api/campaign/displayConfig.json': ResSelector<Models['GET/api/campaign/displayConfig.json']['Res']>
  'GET/api/campaign/modifyConfig.json': ResSelector<Models['GET/api/campaign/modifyConfig.json']['Res']>
  'PUT/api/campaign/activity/transfer.json': ResSelector<Models['PUT/api/campaign/activity/transfer.json']['Res']>
  'PUT/api/campaign/transferScene.json': ResSelector<Models['PUT/api/campaign/transferScene.json']['Res']>
  'PUT/api/campaign/activity/transferPhase.json': ResSelector<
    Models['PUT/api/campaign/activity/transferPhase.json']['Res']
  >
  'GET/api/target/getRemarketingCoverage.json': ResSelector<Models['GET/api/target/getRemarketingCoverage.json']['Res']>
  'POST/api/adgroup/add.json': ResSelector<Models['POST/api/adgroup/add.json']['Res']>
  'GET/api/adgroup/default.json': ResSelector<Models['GET/api/adgroup/default.json']['Res']>
  'GET/api/adgroup/get.json': ResSelector<Models['GET/api/adgroup/get.json']['Res']>
  'GET/api/adgroup/findList.json': ResSelector<Models['GET/api/adgroup/findList.json']['Res']>
  'DELETE/api/adgroup/batchDelete.json': ResSelector<Models['DELETE/api/adgroup/batchDelete.json']['Res']>
  'POST/api/adgroup/clone.json': ResSelector<Models['POST/api/adgroup/clone.json']['Res']>
  'PUT/api/adgroup/batchModEntire.json': ResSelector<Models['PUT/api/adgroup/batchModEntire.json']['Res']>
  'PUT/api/adgroup/batchModifyPart.json': ResSelector<Models['PUT/api/adgroup/batchModifyPart.json']['Res']>
  'GET/api/adgroup/qualityScore/findList.json': ResSelector<Models['GET/api/adgroup/qualityScore/findList.json']['Res']>
  'GET/api/adgroup/qualityScore/findHisList.json': ResSelector<
    Models['GET/api/adgroup/qualityScore/findHisList.json']['Res']
  >
  'PUT/api/adgroup/batchModify.json': ResSelector<Models['PUT/api/adgroup/batchModify.json']['Res']>
  'GET/api/adgroup/qualityScore/findQueryCondition.json': ResSelector<
    Models['GET/api/adgroup/qualityScore/findQueryCondition.json']['Res']
  >
  'GET/api/adgroup/findCampaignAndAdgroupList.json': ResSelector<
    Models['GET/api/adgroup/findCampaignAndAdgroupList.json']['Res']
  >
  'PUT/api/adgroup/useSystemCreative.json': ResSelector<Models['PUT/api/adgroup/useSystemCreative.json']['Res']>
  'PUT/api/adgroup/batchModifyEntire.json': ResSelector<Models['PUT/api/adgroup/batchModifyEntire.json']['Res']>
  'PUT/api/adgroup/batchModifyPrice.json': ResSelector<Models['PUT/api/adgroup/batchModifyPrice.json']['Res']>
  'POST/api/creative/batchAddAndBind.json': ResSelector<Models['POST/api/creative/batchAddAndBind.json']['Res']>
  'PUT/api/creative/batchUnbind.json': ResSelector<Models['PUT/api/creative/batchUnbind.json']['Res']>
  'GET/api/creative/recommend.json': ResSelector<Models['GET/api/creative/recommend.json']['Res']>
  'GET/api/creative/findPage.json': ResSelector<Models['GET/api/creative/findPage.json']['Res']>
  'GET/api/creative/findPunishRecordList.json': ResSelector<Models['GET/api/creative/findPunishRecordList.json']['Res']>
  'GET/api/creative/findQueryCondition.json': ResSelector<Models['GET/api/creative/findQueryCondition.json']['Res']>
  'GET/api/creativeCenter/gotoCreation.json': ResSelector<Models['GET/api/creativeCenter/gotoCreation.json']['Res']>
  'GET/api/creative/template/findPackageList.json': ResSelector<
    Models['GET/api/creative/template/findPackageList.json']['Res']
  >
  'GET/api/creativeCenter/gotoTemplateNew.json': ResSelector<
    Models['GET/api/creativeCenter/gotoTemplateNew.json']['Res']
  >
  'GET/api/creativeCenter/getMaterial.json': ResSelector<Models['GET/api/creativeCenter/getMaterial.json']['Res']>
  'DELETE/api/creative/delete.json': ResSelector<Models['DELETE/api/creative/delete.json']['Res']>
  'PUT/api/creative/activity/batchAddTag.json': ResSelector<Models['PUT/api/creative/activity/batchAddTag.json']['Res']>
  'POST/api/creative/preview.json': ResSelector<Models['POST/api/creative/preview.json']['Res']>
  'GET/api/adzone/findList.json': ResSelector<Models['GET/api/adzone/findList.json']['Res']>
  'GET/api/adzone/checkList.json': ResSelector<Models['GET/api/adzone/checkList.json']['Res']>
  'PUT/api/adzone/unbindList.json': ResSelector<Models['PUT/api/adzone/unbindList.json']['Res']>
  'PUT/api/adzone/bindList.json': ResSelector<Models['PUT/api/adzone/bindList.json']['Res']>
  'GET/api/adzone/findPage.json': ResSelector<Models['GET/api/adzone/findPage.json']['Res']>
  'PUT/api/adzone/batchModify.json': ResSelector<Models['PUT/api/adzone/batchModify.json']['Res']>
  'GET/api/material/findPage.json': ResSelector<Models['GET/api/material/findPage.json']['Res']>
  'GET/api/material/recommend.json': ResSelector<Models['GET/api/material/recommend.json']['Res']>
  'GET/api/material/findQueryCondition.json': ResSelector<Models['GET/api/material/findQueryCondition.json']['Res']>
  'GET/api/material/item/findQueryCondition.json': ResSelector<
    Models['GET/api/material/item/findQueryCondition.json']['Res']
  >
  'GET/api/coupon/findQueryCondition.json': ResSelector<Models['GET/api/coupon/findQueryCondition.json']['Res']>
  'GET/api/material/findPunishRecordList.json': ResSelector<Models['GET/api/material/findPunishRecordList.json']['Res']>
  'GET/api/material/accessAllowed.json': ResSelector<Models['GET/api/material/accessAllowed.json']['Res']>
  'GET/api/material/item/accessAllowed.json': ResSelector<Models['GET/api/material/item/accessAllowed.json']['Res']>
  'GET/api/coupon/findList.json': ResSelector<Models['GET/api/coupon/findList.json']['Res']>
  'GET/api/coupon/findPage.json': ResSelector<Models['GET/api/coupon/findPage.json']['Res']>
  'GET/api/coupon/recommend.json': ResSelector<Models['GET/api/coupon/recommend.json']['Res']>
  'GET/api/material/batchAccessAllowed.json': ResSelector<Models['GET/api/material/batchAccessAllowed.json']['Res']>
  'PUT/api/crowd/modifyByType.json': ResSelector<Models['PUT/api/crowd/modifyByType.json']['Res']>
  'DELETE/api/crowd/delete.json': ResSelector<Models['DELETE/api/crowd/delete.json']['Res']>
  'GET/api/crowd/findList.json': ResSelector<Models['GET/api/crowd/findList.json']['Res']>
  'GET/api/target/findSuggest.json': ResSelector<Models['GET/api/target/findSuggest.json']['Res']>
  'POST/api/crowd/getSuggestPrice.json': ResSelector<Models['POST/api/crowd/getSuggestPrice.json']['Res']>
  'POST/api/algotool/getPredictedPvUv.json': ResSelector<Models['POST/api/algotool/getPredictedPvUv.json']['Res']>
  'GET/api/target/findList.json': ResSelector<Models['GET/api/target/findList.json']['Res']>
  'GET/api/target/findCategoryList.json': ResSelector<Models['GET/api/target/findCategoryList.json']['Res']>
  'GET/api/target/findLabelPage.json': ResSelector<Models['GET/api/target/findLabelPage.json']['Res']>
  'GET/api/target/findTargetTypeCondition.json': ResSelector<
    Models['GET/api/target/findTargetTypeCondition.json']['Res']
  >
  'GET/api/target/getKeywordShopUv.json': ResSelector<Models['GET/api/target/getKeywordShopUv.json']['Res']>
  'GET/api/target/findShopTargetQueryCondition.json': ResSelector<
    Models['GET/api/target/findShopTargetQueryCondition.json']['Res']
  >
  'GET/api/algotool/findManualBidSuggestPrice.json': ResSelector<
    Models['GET/api/algotool/findManualBidSuggestPrice.json']['Res']
  >
  'POST/api/crowd/batchModify.json': ResSelector<Models['POST/api/crowd/batchModify.json']['Res']>
  'GET/api/crowd/findSimulatorPointList.json': ResSelector<Models['GET/api/crowd/findSimulatorPointList.json']['Res']>
  'POST/api/adzone/getSuggestDiscount.json': ResSelector<Models['POST/api/adzone/getSuggestDiscount.json']['Res']>
  'POST/api/target/findSonkeywordList.json': ResSelector<Models['POST/api/target/findSonkeywordList.json']['Res']>
  'GET/api/target/findRecommendList.json': ResSelector<Models['GET/api/target/findRecommendList.json']['Res']>
  'GET/api/target/findRecommendPage.json': ResSelector<Models['GET/api/target/findRecommendPage.json']['Res']>
  'PUT/api/target/addTargetLabel.json': ResSelector<Models['PUT/api/target/addTargetLabel.json']['Res']>
  'POST/api/member/updateConfig.json': ResSelector<Models['POST/api/member/updateConfig.json']['Res']>
  'GET/api/member/logout.action': ResSelector<Models['GET/api/member/logout.action']['Res']>
  'GET/api/member/adminLogin.action': ResSelector<Models['GET/api/member/adminLogin.action']['Res']>
  'POST/api/member/signProtocol.json': ResSelector<Models['POST/api/member/signProtocol.json']['Res']>
  'GET/api/member/getInfo.json': ResSelector<Models['GET/api/member/getInfo.json']['Res']>
  'POST/api/member/addContacts.json': ResSelector<Models['POST/api/member/addContacts.json']['Res']>
  'GET/api/member/getQualificationBrandAccess.json': ResSelector<
    Models['GET/api/member/getQualificationBrandAccess.json']['Res']
  >
  'GET/api/member/checkContactsName.json': ResSelector<Models['GET/api/member/checkContactsName.json']['Res']>
  'GET/api/member/findContactsList.json': ResSelector<Models['GET/api/member/findContactsList.json']['Res']>
  'GET/api/member/getPunishStatus.json': ResSelector<Models['GET/api/member/getPunishStatus.json']['Res']>
  'GET/api/member/findPunishRecordList.json': ResSelector<Models['GET/api/member/findPunishRecordList.json']['Res']>
  'GET/api/member/findQualificationPunishRecordList.json': ResSelector<
    Models['GET/api/member/findQualificationPunishRecordList.json']['Res']
  >
  'GET/api/member/isProtocolSigned.json': ResSelector<Models['GET/api/member/isProtocolSigned.json']['Res']>
  'POST/api/member/joinBusinessPlatform.json': ResSelector<Models['POST/api/member/joinBusinessPlatform.json']['Res']>
  'GET/TODO': ResSelector<Models['GET/TODO']['Res']>
  'GET/api/member/findDiagnoseList.json': ResSelector<Models['GET/api/member/findDiagnoseList.json']['Res']>
  'GET/https://mo.m.taobao.com/feeds/': ResSelector<Models['GET/https://mo.m.taobao.com/feeds/']['Res']>
  'GET/https://mo.m.taobao.com/one-stop/': ResSelector<Models['GET/https://mo.m.taobao.com/one-stop/']['Res']>
  'GET/api/member/invitation/url.json': ResSelector<Models['GET/api/member/invitation/url.json']['Res']>
  'GET/api/member/stage.json': ResSelector<Models['GET/api/member/stage.json']['Res']>
  'GET/api/member/activity.json': ResSelector<Models['GET/api/member/activity.json']['Res']>
  'GET/api/member/activity/itemGuide.json': ResSelector<Models['GET/api/member/activity/itemGuide.json']['Res']>
  'GET/api/member/transfer.json': ResSelector<Models['GET/api/member/transfer.json']['Res']>
  'GET/api/member/newGuestTask.json': ResSelector<Models['GET/api/member/newGuestTask.json']['Res']>
  'GET/api/account/getAcctBalanceRemindSettingAutoRecharge.json': ResSelector<
    Models['GET/api/account/getAcctBalanceRemindSettingAutoRecharge.json']['Res']
  >
  'GET/api/account/getSignInfo.json': ResSelector<Models['GET/api/account/getSignInfo.json']['Res']>
  'PUT/api/account/modifyAcctBalanceRemindSettingAutoRecharge.json': ResSelector<
    Models['PUT/api/account/modifyAcctBalanceRemindSettingAutoRecharge.json']['Res']
  >
  'PUT/api/account/unsignAutoRecharge.json': ResSelector<Models['PUT/api/account/unsignAutoRecharge.json']['Res']>
  'GET/api/account/findItemList.json': ResSelector<Models['GET/api/account/findItemList.json']['Res']>
  'GET/api/account/exportItemList.action': ResSelector<Models['GET/api/account/exportItemList.action']['Res']>
  'GET/和钻展保持一致': ResSelector<Models['GET/和钻展保持一致']['Res']>
  'GET/api/account/findMessageRemindList.json': ResSelector<Models['GET/api/account/findMessageRemindList.json']['Res']>
  'POST/api/account/modifyAllMessageRemindList.json': ResSelector<
    Models['POST/api/account/modifyAllMessageRemindList.json']['Res']
  >
  'GET/api/account/getRefundList.json': ResSelector<Models['GET/api/account/getRefundList.json']['Res']>
  'POST/api/account/createRefund.json': ResSelector<Models['POST/api/account/createRefund.json']['Res']>
  'GET/api/account/checkRefund.json': ResSelector<Models['GET/api/account/checkRefund.json']['Res']>
  'GET/api/account/isSignGlobalAlipay.json': ResSelector<Models['GET/api/account/isSignGlobalAlipay.json']['Res']>
  'GET/api/account/charge.json': ResSelector<Models['GET/api/account/charge.json']['Res']>
  'GET/api/log/findOperationLog.json': ResSelector<Models['GET/api/log/findOperationLog.json']['Res']>
  'GET/api/log/findAdgroupByName.json': ResSelector<Models['GET/api/log/findAdgroupByName.json']['Res']>
  'GET/api/log/findCampaignByName.json': ResSelector<Models['GET/api/log/findCampaignByName.json']['Res']>
  'GET/api/account/findAccumulateDeduct.json': ResSelector<Models['GET/api/account/findAccumulateDeduct.json']['Res']>
  'GET/api/message/sendMobileCode.json': ResSelector<Models['GET/api/message/sendMobileCode.json']['Res']>
  'POST/api/message/verifyMobilePhoneCode.json': ResSelector<
    Models['POST/api/message/verifyMobilePhoneCode.json']['Res']
  >
  'GET/api/common/findCodeList.json': ResSelector<Models['GET/api/common/findCodeList.json']['Res']>
  'GET/api/common/getVersion.json': ResSelector<Models['GET/api/common/getVersion.json']['Res']>
  'GET/api/component/findComponentMetaList.json': ResSelector<
    Models['GET/api/component/findComponentMetaList.json']['Res']
  >
  'GET/api/component/findMemberTemplateList.json': ResSelector<
    Models['GET/api/component/findMemberTemplateList.json']['Res']
  >
  'POST/api/component/addMemberTemplate.json': ResSelector<Models['POST/api/component/addMemberTemplate.json']['Res']>
  'PUT/api/component/updateMemberTemplate.json': ResSelector<
    Models['PUT/api/component/updateMemberTemplate.json']['Res']
  >
  'DELETE/api/component/deleteMemberTemplate.json': ResSelector<
    Models['DELETE/api/component/deleteMemberTemplate.json']['Res']
  >
  'GET/api/component/findMenuList.json': ResSelector<Models['GET/api/component/findMenuList.json']['Res']>
  'GET/api/component/findComponentList.json': ResSelector<Models['GET/api/component/findComponentList.json']['Res']>
  'GET/api/account/report/findHourSum.json': ResSelector<Models['GET/api/account/report/findHourSum.json']['Res']>
  'GET/api/account/report/findHourList.json': ResSelector<Models['GET/api/account/report/findHourList.json']['Res']>
  'GET/api/account/report/findDaySum.json': ResSelector<Models['GET/api/account/report/findDaySum.json']['Res']>
  'GET/api/account/report/findDayList.json': ResSelector<Models['GET/api/account/report/findDayList.json']['Res']>
  'GET/api/campaign/report/findPage.json': ResSelector<Models['GET/api/campaign/report/findPage.json']['Res']>
  'GET/api/campaign/report/findList.json': ResSelector<Models['GET/api/campaign/report/findList.json']['Res']>
  'GET/api/campaign/report/findSum.json': ResSelector<Models['GET/api/campaign/report/findSum.json']['Res']>
  'GET/api/adgroup/report/findPage.json': ResSelector<Models['GET/api/adgroup/report/findPage.json']['Res']>
  'GET/api/adgroup/report/findList.json': ResSelector<Models['GET/api/adgroup/report/findList.json']['Res']>
  'GET/api/adgroup/report/findSum.json': ResSelector<Models['GET/api/adgroup/report/findSum.json']['Res']>
  'GET/api/creative/report/findPage.json': ResSelector<Models['GET/api/creative/report/findPage.json']['Res']>
  'GET/api/creative/report/findList.json': ResSelector<Models['GET/api/creative/report/findList.json']['Res']>
  'GET/api/creative/report/findSum.json': ResSelector<Models['GET/api/creative/report/findSum.json']['Res']>
  'GET/api/crowd/report/findPage.json': ResSelector<Models['GET/api/crowd/report/findPage.json']['Res']>
  'GET/api/crowd/report/findList.json': ResSelector<Models['GET/api/crowd/report/findList.json']['Res']>
  'GET/api/crowd/report/findSum.json': ResSelector<Models['GET/api/crowd/report/findSum.json']['Res']>
  'GET/api/adzone/report/findPage.json': ResSelector<Models['GET/api/adzone/report/findPage.json']['Res']>
  'GET/api/adzone/report/findList.json': ResSelector<Models['GET/api/adzone/report/findList.json']['Res']>
  'GET/api/adzone/report/findSum.json': ResSelector<Models['GET/api/adzone/report/findSum.json']['Res']>
  'GET/api/account/report/findCrowdDaySum.json': ResSelector<
    Models['GET/api/account/report/findCrowdDaySum.json']['Res']
  >
  'GET/api/account/report/findCrowdDayList.json': ResSelector<
    Models['GET/api/account/report/findCrowdDayList.json']['Res']
  >
  'GET/api/material/report/findItemPage.json': ResSelector<Models['GET/api/material/report/findItemPage.json']['Res']>
  'GET/api/activity/report/consumerReach.json': ResSelector<Models['GET/api/activity/report/consumerReach.json']['Res']>
  'GET/api/account/report/exportHourList.json': ResSelector<Models['GET/api/account/report/exportHourList.json']['Res']>
  'GET/api/account/report/exportDayList.json': ResSelector<Models['GET/api/account/report/exportDayList.json']['Res']>
  'GET/api/campaign/report/exportCampaign.json': ResSelector<
    Models['GET/api/campaign/report/exportCampaign.json']['Res']
  >
  'GET/api/campaign/report/exportDayOrHourList.json': ResSelector<
    Models['GET/api/campaign/report/exportDayOrHourList.json']['Res']
  >
  'GET/api/campaign/report/exportDayOrHourSum.json': ResSelector<
    Models['GET/api/campaign/report/exportDayOrHourSum.json']['Res']
  >
  'GET/api/adgroup/report/exportAdgroup.json': ResSelector<Models['GET/api/adgroup/report/exportAdgroup.json']['Res']>
  'GET/api/adgroup/report/exportDayOrHourList.json': ResSelector<
    Models['GET/api/adgroup/report/exportDayOrHourList.json']['Res']
  >
  'GET/api/adgroup/report/exportDayOrHourSum.json': ResSelector<
    Models['GET/api/adgroup/report/exportDayOrHourSum.json']['Res']
  >
  'GET/api/creative/report/exportCreative.json': ResSelector<
    Models['GET/api/creative/report/exportCreative.json']['Res']
  >
  'GET/api/creative/report/exportDayOrHourList.json': ResSelector<
    Models['GET/api/creative/report/exportDayOrHourList.json']['Res']
  >
  'GET/api/creative/report/exportDayOrHourSum.json': ResSelector<
    Models['GET/api/creative/report/exportDayOrHourSum.json']['Res']
  >
  'GET/api/crowd/report/exportCrowd.json': ResSelector<Models['GET/api/crowd/report/exportCrowd.json']['Res']>
  'GET/api/crowd/report/exportDayOrHourList.json': ResSelector<
    Models['GET/api/crowd/report/exportDayOrHourList.json']['Res']
  >
  'GET/api/crowd/report/exportDayOrHourSum.json': ResSelector<
    Models['GET/api/crowd/report/exportDayOrHourSum.json']['Res']
  >
  'GET/api/adzone/report/exportAdzone.json': ResSelector<Models['GET/api/adzone/report/exportAdzone.json']['Res']>
  'GET/api/adzone/report/exportDayOrHourList.json': ResSelector<
    Models['GET/api/adzone/report/exportDayOrHourList.json']['Res']
  >
  'GET/api/adzone/report/exportDayOrHourSum.json': ResSelector<
    Models['GET/api/adzone/report/exportDayOrHourSum.json']['Res']
  >
  'GET/api/material/report/exportItem.json': ResSelector<Models['GET/api/material/report/exportItem.json']['Res']>
  'GET/api/account/report/exportCrowdDayList.json': ResSelector<
    Models['GET/api/account/report/exportCrowdDayList.json']['Res']
  >
  'GET/api/message/findLetterList.json': ResSelector<Models['GET/api/message/findLetterList.json']['Res']>
  'GET/api/message/getLetterDetail.json': ResSelector<Models['GET/api/message/getLetterDetail.json']['Res']>
  'POST/api/message/batchReadLetters.json': ResSelector<Models['POST/api/message/batchReadLetters.json']['Res']>
  'GET/api/report/consumer/findSummary.json': ResSelector<Models['GET/api/report/consumer/findSummary.json']['Res']>
  'GET/api/report/consumer/findConsumerCirculation.json': ResSelector<
    Models['GET/api/report/consumer/findConsumerCirculation.json']['Res']
  >
  'GET/api/report/fans/findSummary.json': ResSelector<Models['GET/api/report/fans/findSummary.json']['Res']>
  'GET/api/report/fans/findCirculation.json': ResSelector<Models['GET/api/report/fans/findCirculation.json']['Res']>
  'GET/api/campaign/findTransferPage.json': ResSelector<Models['GET/api/campaign/findTransferPage.json']['Res']>
  'POST/api/campaign/transfer.json': ResSelector<Models['POST/api/campaign/transfer.json']['Res']>
  'GET/api/activity/report/findDaySum.json': ResSelector<Models['GET/api/activity/report/findDaySum.json']['Res']>
  'GET/api/activity/report/findDayList.json': ResSelector<Models['GET/api/activity/report/findDayList.json']['Res']>
  'GET/api/activity/report/findCrowdDaySum.json': ResSelector<
    Models['GET/api/activity/report/findCrowdDaySum.json']['Res']
  >
  'GET/api/activity/report/findCrowdDayList.json': ResSelector<
    Models['GET/api/activity/report/findCrowdDayList.json']['Res']
  >
  'GET/api/activity/report/findItemPage.json': ResSelector<Models['GET/api/activity/report/findItemPage.json']['Res']>
  'GET/api/activity/report/exportDayList.json': ResSelector<Models['GET/api/activity/report/exportDayList.json']['Res']>
  'GET/api/activity/report/exportCrowdDayList.json': ResSelector<
    Models['GET/api/activity/report/exportCrowdDayList.json']['Res']
  >
  'GET/api/activity/report/exportItem.json': ResSelector<Models['GET/api/activity/report/exportItem.json']['Res']>
  'GET/map': ResSelector<Models['GET/map']['Res']>
  'GET/api/report/case/findCampaignDaySum.json': ResSelector<
    Models['GET/api/report/case/findCampaignDaySum.json']['Res']
  >
  'GET/api/report/case/findItemSumList.json': ResSelector<Models['GET/api/report/case/findItemSumList.json']['Res']>
  'GET/api/report/case/findItemTrendDayList.json': ResSelector<
    Models['GET/api/report/case/findItemTrendDayList.json']['Res']
  >
  'GET/findList.json': ResSelector<Models['GET/findList.json']['Res']>
  'GET/api/report/case/findFeedShopItemAllListComp.json': ResSelector<
    Models['GET/api/report/case/findFeedShopItemAllListComp.json']['Res']
  >
  'GET/api/campaign/crowd/findList.json': ResSelector<Models['GET/api/campaign/crowd/findList.json']['Res']>
  'PUT/api/campaign/crowd/modify.json': ResSelector<Models['PUT/api/campaign/crowd/modify.json']['Res']>
  'POST/api/solution/add.json': ResSelector<Models['POST/api/solution/add.json']['Res']>
  'GET/api/material/item/findPage.json': ResSelector<Models['GET/api/material/item/findPage.json']['Res']>
  'GET/api/solution/allowPromotion.json': ResSelector<Models['GET/api/solution/allowPromotion.json']['Res']>
  'POST/api/solution/batchAdd.json': ResSelector<Models['POST/api/solution/batchAdd.json']['Res']>
  'GET/api/target/findLabelList.json': ResSelector<Models['GET/api/target/findLabelList.json']['Res']>
  'GET/api/target/findSelectionCategoryList.json': ResSelector<
    Models['GET/api/target/findSelectionCategoryList.json']['Res']
  >
  'GET/api/account/recharge.action': ResSelector<Models['GET/api/account/recharge.action']['Res']>
  'GET/api/account/getInfo.json': ResSelector<Models['GET/api/account/getInfo.json']['Res']>
  'POST/api/adgroup/batchAdd.json': ResSelector<Models['POST/api/adgroup/batchAdd.json']['Res']>
  'POST/api/campaign/estimateContractPv.json': ResSelector<Models['POST/api/campaign/estimateContractPv.json']['Res']>
  'POST/api/algotool/lockQuantity.json': ResSelector<Models['POST/api/algotool/lockQuantity.json']['Res']>
  'GET/api/crowd/findPage.json': ResSelector<Models['GET/api/crowd/findPage.json']['Res']>
  'POST/api/algotool/getBudgetSimulator.json': ResSelector<Models['POST/api/algotool/getBudgetSimulator.json']['Res']>
  'POST/api/campaign/add.json': ResSelector<Models['POST/api/campaign/add.json']['Res']>
  'GET/api/adgroup/findPage.json': ResSelector<Models['GET/api/adgroup/findPage.json']['Res']>
  'PUT/api/campaign/modEntire.json': ResSelector<Models['PUT/api/campaign/modEntire.json']['Res']>
  'GET/api/algotool/probeInterest.json': ResSelector<Models['GET/api/algotool/probeInterest.json']['Res']>
}

export function createFetch(fetchConfig: RequesterOption) {
  let rapperFetch: FetchConfigFunc
  if (typeof fetchConfig === 'function') {
    rapperFetch = fetchConfig
  } else {
    const prefix = fetchConfig.prefix !== undefined ? fetchConfig.prefix : defaultConfig.prefix
    const fetchOption = fetchConfig.fetchOption !== undefined ? fetchConfig.fetchOption : defaultConfig.fetchOption
    rapperFetch = (requestParams: UserFetchParams) => {
      const url = parseUrl(requestParams.url, prefix)
      return defaultFetch({
        url,
        method: requestParams.method,
        params: requestParams.params,
        fetchOption,
      })
    }
  }
  return {
    /**
     * 接口名：计划相关字段参考[新建]
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6615&itf=67832
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/readme/campaign': (req?: Models['GET/readme/campaign']['Req'], extra?: {type?: 'normal' | 'redux'}) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/readme/campaign',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/readme/campaign']>
      } else {
        const action = RequestAction['GET/readme/campaign'](req)
        return dispatchAction(action, rapperFetch) as Promise<ResponseTypes['GET/readme/campaign']>
      }
    },

    /**
     * 接口名：获取计划默认设置
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6615&itf=67189
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/api/campaign/default.json': (
      req?: Models['GET/api/campaign/default.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/campaign/default.json',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/api/campaign/default.json']>
      } else {
        const action = RequestAction['GET/api/campaign/default.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<ResponseTypes['GET/api/campaign/default.json']>
      }
    },

    /**
     * 接口名：获取计划详情
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6615&itf=67240
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/api/campaign/get.json': (
      req?: Models['GET/api/campaign/get.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/campaign/get.json',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/api/campaign/get.json']>
      } else {
        const action = RequestAction['GET/api/campaign/get.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<ResponseTypes['GET/api/campaign/get.json']>
      }
    },

    /**
     * 接口名：获取计划结算信息
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6615&itf=73647
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/api/campaign/getSettleInfo.json': (
      req?: Models['GET/api/campaign/getSettleInfo.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/campaign/getSettleInfo.json',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/api/campaign/getSettleInfo.json']>
      } else {
        const action = RequestAction['GET/api/campaign/getSettleInfo.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<ResponseTypes['GET/api/campaign/getSettleInfo.json']>
      }
    },

    /**
     * 接口名：获取计划列表
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6615&itf=67241
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/api/campaign/findList.json': (
      req?: Models['GET/api/campaign/findList.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/campaign/findList.json',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/api/campaign/findList.json']>
      } else {
        const action = RequestAction['GET/api/campaign/findList.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<ResponseTypes['GET/api/campaign/findList.json']>
      }
    },

    /**
     * 接口名：分页获取计划列表
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6615&itf=67264
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/api/campaign/findPage.json': (
      req?: Models['GET/api/campaign/findPage.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/campaign/findPage.json',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/api/campaign/findPage.json']>
      } else {
        const action = RequestAction['GET/api/campaign/findPage.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<ResponseTypes['GET/api/campaign/findPage.json']>
      }
    },

    /**
     * 接口名：获取草稿计划列表
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6615&itf=67236
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/api/campaign/findDraftList.json': (
      req?: Models['GET/api/campaign/findDraftList.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/campaign/findDraftList.json',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/api/campaign/findDraftList.json']>
      } else {
        const action = RequestAction['GET/api/campaign/findDraftList.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<ResponseTypes['GET/api/campaign/findDraftList.json']>
      }
    },

    /**
     * 接口名：删除计划
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6615&itf=67242
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'DELETE/api/campaign/delete.json': (
      req?: Models['DELETE/api/campaign/delete.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/campaign/delete.json',
          method: 'DELETE',
          params: req,
          extra,
        }) as Promise<ResponseTypes['DELETE/api/campaign/delete.json']>
      } else {
        const action = RequestAction['DELETE/api/campaign/delete.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<ResponseTypes['DELETE/api/campaign/delete.json']>
      }
    },

    /**
     * 接口名：克隆计划
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6615&itf=67277
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'POST/api/campaign/clone.json': (
      req?: Models['POST/api/campaign/clone.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/campaign/clone.json',
          method: 'POST',
          params: req,
          extra,
        }) as Promise<ResponseTypes['POST/api/campaign/clone.json']>
      } else {
        const action = RequestAction['POST/api/campaign/clone.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<ResponseTypes['POST/api/campaign/clone.json']>
      }
    },

    /**
     * 接口名：【提醒】修改计划预算提醒
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6615&itf=67321
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'PUT/api/campaign/updateCampaignBudgetRemindSetting.json': (
      req?: Models['PUT/api/campaign/updateCampaignBudgetRemindSetting.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: 'api/campaign/updateCampaignBudgetRemindSetting.json',
          method: 'PUT',
          params: req,
          extra,
        }) as Promise<ResponseTypes['PUT/api/campaign/updateCampaignBudgetRemindSetting.json']>
      } else {
        const action = RequestAction['PUT/api/campaign/updateCampaignBudgetRemindSetting.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<
          ResponseTypes['PUT/api/campaign/updateCampaignBudgetRemindSetting.json']
        >
      }
    },

    /**
     * 接口名：【提醒】获取计划预算提醒
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6615&itf=67369
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/api/campaign/getCampaignBudgetRemindSetting.json': (
      req?: Models['GET/api/campaign/getCampaignBudgetRemindSetting.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: 'api/campaign/getCampaignBudgetRemindSetting.json',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/api/campaign/getCampaignBudgetRemindSetting.json']>
      } else {
        const action = RequestAction['GET/api/campaign/getCampaignBudgetRemindSetting.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<
          ResponseTypes['GET/api/campaign/getCampaignBudgetRemindSetting.json']
        >
      }
    },

    /**
     * 接口名：批量修改计划信息
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6615&itf=67654
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'PUT/api/campaign/batchModify.json': (
      req?: Models['PUT/api/campaign/batchModify.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/campaign/batchModify.json',
          method: 'PUT',
          params: req,
          extra,
        }) as Promise<ResponseTypes['PUT/api/campaign/batchModify.json']>
      } else {
        const action = RequestAction['PUT/api/campaign/batchModify.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<ResponseTypes['PUT/api/campaign/batchModify.json']>
      }
    },

    /**
     * 接口名：计划完成
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6615&itf=67672
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'PUT/api/campaign/complete.json': (
      req?: Models['PUT/api/campaign/complete.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/campaign/complete.json',
          method: 'PUT',
          params: req,
          extra,
        }) as Promise<ResponseTypes['PUT/api/campaign/complete.json']>
      } else {
        const action = RequestAction['PUT/api/campaign/complete.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<ResponseTypes['PUT/api/campaign/complete.json']>
      }
    },

    /**
     * 接口名：修改置顶状态
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6615&itf=67674
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'PUT/api/campaign/setTop.json': (
      req?: Models['PUT/api/campaign/setTop.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/campaign/setTop.json',
          method: 'PUT',
          params: req,
          extra,
        }) as Promise<ResponseTypes['PUT/api/campaign/setTop.json']>
      } else {
        const action = RequestAction['PUT/api/campaign/setTop.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<ResponseTypes['PUT/api/campaign/setTop.json']>
      }
    },

    /**
     * 接口名：获取有效计划数
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6615&itf=67975
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/api/campaign/validCount.json': (
      req?: Models['GET/api/campaign/validCount.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/campaign/validCount.json',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/api/campaign/validCount.json']>
      } else {
        const action = RequestAction['GET/api/campaign/validCount.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<ResponseTypes['GET/api/campaign/validCount.json']>
      }
    },

    /**
     * 接口名：获取总预算
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6615&itf=69603
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/api/campaign/findDayBudgetSum.json': (
      req?: Models['GET/api/campaign/findDayBudgetSum.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/campaign/findDayBudgetSum.json',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/api/campaign/findDayBudgetSum.json']>
      } else {
        const action = RequestAction['GET/api/campaign/findDayBudgetSum.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<ResponseTypes['GET/api/campaign/findDayBudgetSum.json']>
      }
    },

    /**
     * 接口名：获取计划流程信息
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6615&itf=73883
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/api/campaign/displayConfig.json': (
      req?: Models['GET/api/campaign/displayConfig.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/campaign/displayConfig.json',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/api/campaign/displayConfig.json']>
      } else {
        const action = RequestAction['GET/api/campaign/displayConfig.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<ResponseTypes['GET/api/campaign/displayConfig.json']>
      }
    },

    /**
     * 接口名：获取计划可以修改的配置
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6615&itf=76004
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/api/campaign/modifyConfig.json': (
      req?: Models['GET/api/campaign/modifyConfig.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/campaign/modifyConfig.json',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/api/campaign/modifyConfig.json']>
      } else {
        const action = RequestAction['GET/api/campaign/modifyConfig.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<ResponseTypes['GET/api/campaign/modifyConfig.json']>
      }
    },

    /**
     * 接口名：批量转换计划到活动计划
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6615&itf=75064
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'PUT/api/campaign/activity/transfer.json': (
      req?: Models['PUT/api/campaign/activity/transfer.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/campaign/activity/transfer.json',
          method: 'PUT',
          params: req,
          extra,
        }) as Promise<ResponseTypes['PUT/api/campaign/activity/transfer.json']>
      } else {
        const action = RequestAction['PUT/api/campaign/activity/transfer.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<ResponseTypes['PUT/api/campaign/activity/transfer.json']>
      }
    },

    /**
     * 接口名：批量转换活动scene
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6615&itf=75562
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'PUT/api/campaign/transferScene.json': (
      req?: Models['PUT/api/campaign/transferScene.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/campaign/transferScene.json',
          method: 'PUT',
          params: req,
          extra,
        }) as Promise<ResponseTypes['PUT/api/campaign/transferScene.json']>
      } else {
        const action = RequestAction['PUT/api/campaign/transferScene.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<ResponseTypes['PUT/api/campaign/transferScene.json']>
      }
    },

    /**
     * 接口名：转换活动阶段
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6615&itf=83231
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'PUT/api/campaign/activity/transferPhase.json': (
      req?: Models['PUT/api/campaign/activity/transferPhase.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/campaign/activity/transferPhase.json',
          method: 'PUT',
          params: req,
          extra,
        }) as Promise<ResponseTypes['PUT/api/campaign/activity/transferPhase.json']>
      } else {
        const action = RequestAction['PUT/api/campaign/activity/transferPhase.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<
          ResponseTypes['PUT/api/campaign/activity/transferPhase.json']
        >
      }
    },

    /**
     * 接口名：获取再营销-标签信息
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6615&itf=80101
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/api/target/getRemarketingCoverage.json': (
      req?: Models['GET/api/target/getRemarketingCoverage.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/target/getRemarketingCoverage.json',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/api/target/getRemarketingCoverage.json']>
      } else {
        const action = RequestAction['GET/api/target/getRemarketingCoverage.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<
          ResponseTypes['GET/api/target/getRemarketingCoverage.json']
        >
      }
    },

    /**
     * 接口名：新建单元
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6699&itf=67272
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'POST/api/adgroup/add.json': (
      req?: Models['POST/api/adgroup/add.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/adgroup/add.json',
          method: 'POST',
          params: req,
          extra,
        }) as Promise<ResponseTypes['POST/api/adgroup/add.json']>
      } else {
        const action = RequestAction['POST/api/adgroup/add.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<ResponseTypes['POST/api/adgroup/add.json']>
      }
    },

    /**
     * 接口名：获取单元默认设置
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6699&itf=67271
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/api/adgroup/default.json': (
      req?: Models['GET/api/adgroup/default.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/adgroup/default.json',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/api/adgroup/default.json']>
      } else {
        const action = RequestAction['GET/api/adgroup/default.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<ResponseTypes['GET/api/adgroup/default.json']>
      }
    },

    /**
     * 接口名：获取单元详情
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6699&itf=67273
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/api/adgroup/get.json': (
      req?: Models['GET/api/adgroup/get.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/adgroup/get.json',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/api/adgroup/get.json']>
      } else {
        const action = RequestAction['GET/api/adgroup/get.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<ResponseTypes['GET/api/adgroup/get.json']>
      }
    },

    /**
     * 接口名：获取单元列表
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6699&itf=67274
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/api/adgroup/findList.json': (
      req?: Models['GET/api/adgroup/findList.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/adgroup/findList.json',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/api/adgroup/findList.json']>
      } else {
        const action = RequestAction['GET/api/adgroup/findList.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<ResponseTypes['GET/api/adgroup/findList.json']>
      }
    },

    /**
     * 接口名：批量删除单元
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6699&itf=67276
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'DELETE/api/adgroup/batchDelete.json': (
      req?: Models['DELETE/api/adgroup/batchDelete.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/adgroup/batchDelete.json',
          method: 'DELETE',
          params: req,
          extra,
        }) as Promise<ResponseTypes['DELETE/api/adgroup/batchDelete.json']>
      } else {
        const action = RequestAction['DELETE/api/adgroup/batchDelete.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<ResponseTypes['DELETE/api/adgroup/batchDelete.json']>
      }
    },

    /**
     * 接口名：克隆单元
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6699&itf=67278
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'POST/api/adgroup/clone.json': (
      req?: Models['POST/api/adgroup/clone.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/adgroup/clone.json',
          method: 'POST',
          params: req,
          extra,
        }) as Promise<ResponseTypes['POST/api/adgroup/clone.json']>
      } else {
        const action = RequestAction['POST/api/adgroup/clone.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<ResponseTypes['POST/api/adgroup/clone.json']>
      }
    },

    /**
     * 接口名：批量全量修改单元信息
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6699&itf=67342
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'PUT/api/adgroup/batchModEntire.json': (
      req?: Models['PUT/api/adgroup/batchModEntire.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/adgroup/batchModEntire.json',
          method: 'PUT',
          params: req,
          extra,
        }) as Promise<ResponseTypes['PUT/api/adgroup/batchModEntire.json']>
      } else {
        const action = RequestAction['PUT/api/adgroup/batchModEntire.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<ResponseTypes['PUT/api/adgroup/batchModEntire.json']>
      }
    },

    /**
     * 接口名：批量部分修改单元信息
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6699&itf=79050
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'PUT/api/adgroup/batchModifyPart.json': (
      req?: Models['PUT/api/adgroup/batchModifyPart.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/adgroup/batchModifyPart.json',
          method: 'PUT',
          params: req,
          extra,
        }) as Promise<ResponseTypes['PUT/api/adgroup/batchModifyPart.json']>
      } else {
        const action = RequestAction['PUT/api/adgroup/batchModifyPart.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<ResponseTypes['PUT/api/adgroup/batchModifyPart.json']>
      }
    },

    /**
     * 接口名：质量分接口
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6699&itf=67557
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/api/adgroup/qualityScore/findList.json': (
      req?: Models['GET/api/adgroup/qualityScore/findList.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/adgroup/qualityScore/findList.json',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/api/adgroup/qualityScore/findList.json']>
      } else {
        const action = RequestAction['GET/api/adgroup/qualityScore/findList.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<
          ResponseTypes['GET/api/adgroup/qualityScore/findList.json']
        >
      }
    },

    /**
     * 接口名：质量分折线图
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6699&itf=69823
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/api/adgroup/qualityScore/findHisList.json': (
      req?: Models['GET/api/adgroup/qualityScore/findHisList.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/adgroup/qualityScore/findHisList.json',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/api/adgroup/qualityScore/findHisList.json']>
      } else {
        const action = RequestAction['GET/api/adgroup/qualityScore/findHisList.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<
          ResponseTypes['GET/api/adgroup/qualityScore/findHisList.json']
        >
      }
    },

    /**
     * 接口名：批量修改单元
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6699&itf=67703
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'PUT/api/adgroup/batchModify.json': (
      req?: Models['PUT/api/adgroup/batchModify.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/adgroup/batchModify.json',
          method: 'PUT',
          params: req,
          extra,
        }) as Promise<ResponseTypes['PUT/api/adgroup/batchModify.json']>
      } else {
        const action = RequestAction['PUT/api/adgroup/batchModify.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<ResponseTypes['PUT/api/adgroup/batchModify.json']>
      }
    },

    /**
     * 接口名：质量分查询条件
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6699&itf=68838
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/api/adgroup/qualityScore/findQueryCondition.json': (
      req?: Models['GET/api/adgroup/qualityScore/findQueryCondition.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/adgroup/qualityScore/findQueryCondition.json',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/api/adgroup/qualityScore/findQueryCondition.json']>
      } else {
        const action = RequestAction['GET/api/adgroup/qualityScore/findQueryCondition.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<
          ResponseTypes['GET/api/adgroup/qualityScore/findQueryCondition.json']
        >
      }
    },

    /**
     * 接口名：查看计划带着单元的组合接口
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6699&itf=69419
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/api/adgroup/findCampaignAndAdgroupList.json': (
      req?: Models['GET/api/adgroup/findCampaignAndAdgroupList.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/adgroup/findCampaignAndAdgroupList.json',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/api/adgroup/findCampaignAndAdgroupList.json']>
      } else {
        const action = RequestAction['GET/api/adgroup/findCampaignAndAdgroupList.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<
          ResponseTypes['GET/api/adgroup/findCampaignAndAdgroupList.json']
        >
      }
    },

    /**
     * 接口名：修改单元上的系统创意设置
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6699&itf=75561
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'PUT/api/adgroup/useSystemCreative.json': (
      req?: Models['PUT/api/adgroup/useSystemCreative.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/adgroup/useSystemCreative.json',
          method: 'PUT',
          params: req,
          extra,
        }) as Promise<ResponseTypes['PUT/api/adgroup/useSystemCreative.json']>
      } else {
        const action = RequestAction['PUT/api/adgroup/useSystemCreative.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<ResponseTypes['PUT/api/adgroup/useSystemCreative.json']>
      }
    },

    /**
     * 接口名：【接口优化】修改单元
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6699&itf=78328
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'PUT/api/adgroup/batchModifyEntire.json': (
      req?: Models['PUT/api/adgroup/batchModifyEntire.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/adgroup/batchModifyEntire.json',
          method: 'PUT',
          params: req,
          extra,
        }) as Promise<ResponseTypes['PUT/api/adgroup/batchModifyEntire.json']>
      } else {
        const action = RequestAction['PUT/api/adgroup/batchModifyEntire.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<ResponseTypes['PUT/api/adgroup/batchModifyEntire.json']>
      }
    },

    /**
     * 接口名：批量修改单元出价
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6699&itf=87108
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'PUT/api/adgroup/batchModifyPrice.json': (
      req?: Models['PUT/api/adgroup/batchModifyPrice.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/adgroup/batchModifyPrice.json',
          method: 'PUT',
          params: req,
          extra,
        }) as Promise<ResponseTypes['PUT/api/adgroup/batchModifyPrice.json']>
      } else {
        const action = RequestAction['PUT/api/adgroup/batchModifyPrice.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<ResponseTypes['PUT/api/adgroup/batchModifyPrice.json']>
      }
    },

    /**
     * 接口名：批量新建创意
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6662&itf=67197
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'POST/api/creative/batchAddAndBind.json': (
      req?: Models['POST/api/creative/batchAddAndBind.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/creative/batchAddAndBind.json',
          method: 'POST',
          params: req,
          extra,
        }) as Promise<ResponseTypes['POST/api/creative/batchAddAndBind.json']>
      } else {
        const action = RequestAction['POST/api/creative/batchAddAndBind.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<ResponseTypes['POST/api/creative/batchAddAndBind.json']>
      }
    },

    /**
     * 接口名：批量解绑创意
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6662&itf=73851
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'PUT/api/creative/batchUnbind.json': (
      req?: Models['PUT/api/creative/batchUnbind.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/creative/batchUnbind.json',
          method: 'PUT',
          params: req,
          extra,
        }) as Promise<ResponseTypes['PUT/api/creative/batchUnbind.json']>
      } else {
        const action = RequestAction['PUT/api/creative/batchUnbind.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<ResponseTypes['PUT/api/creative/batchUnbind.json']>
      }
    },

    /**
     * 接口名：推荐创意
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6662&itf=83233
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/api/creative/recommend.json': (
      req?: Models['GET/api/creative/recommend.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/creative/recommend.json',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/api/creative/recommend.json']>
      } else {
        const action = RequestAction['GET/api/creative/recommend.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<ResponseTypes['GET/api/creative/recommend.json']>
      }
    },

    /**
     * 接口名：横向管理查看创意列表
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6662&itf=67199
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/api/creative/findPage.json': (
      req?: Models['GET/api/creative/findPage.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/creative/findPage.json',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/api/creative/findPage.json']>
      } else {
        const action = RequestAction['GET/api/creative/findPage.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<ResponseTypes['GET/api/creative/findPage.json']>
      }
    },

    /**
     * 接口名：查询创意违规记录
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6662&itf=67558
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/api/creative/findPunishRecordList.json': (
      req?: Models['GET/api/creative/findPunishRecordList.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/creative/findPunishRecordList.json',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/api/creative/findPunishRecordList.json']>
      } else {
        const action = RequestAction['GET/api/creative/findPunishRecordList.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<
          ResponseTypes['GET/api/creative/findPunishRecordList.json']
        >
      }
    },

    /**
     * 接口名：创意查询条件
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6662&itf=67560
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/api/creative/findQueryCondition.json': (
      req?: Models['GET/api/creative/findQueryCondition.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/creative/findQueryCondition.json',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/api/creative/findQueryCondition.json']>
      } else {
        const action = RequestAction['GET/api/creative/findQueryCondition.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<ResponseTypes['GET/api/creative/findQueryCondition.json']>
      }
    },

    /**
     * 接口名：跳转新建创意页面
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6662&itf=68950
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/api/creativeCenter/gotoCreation.json': (
      req?: Models['GET/api/creativeCenter/gotoCreation.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/creativeCenter/gotoCreation.json',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/api/creativeCenter/gotoCreation.json']>
      } else {
        const action = RequestAction['GET/api/creativeCenter/gotoCreation.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<ResponseTypes['GET/api/creativeCenter/gotoCreation.json']>
      }
    },

    /**
     * 接口名：查看创意模板
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6662&itf=70224
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/api/creative/template/findPackageList.json': (
      req?: Models['GET/api/creative/template/findPackageList.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/creative/template/findPackageList.json',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/api/creative/template/findPackageList.json']>
      } else {
        const action = RequestAction['GET/api/creative/template/findPackageList.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<
          ResponseTypes['GET/api/creative/template/findPackageList.json']
        >
      }
    },

    /**
     * 接口名：跳转模板制作页面
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6662&itf=70256
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/api/creativeCenter/gotoTemplateNew.json': (
      req?: Models['GET/api/creativeCenter/gotoTemplateNew.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/creativeCenter/gotoTemplateNew.json',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/api/creativeCenter/gotoTemplateNew.json']>
      } else {
        const action = RequestAction['GET/api/creativeCenter/gotoTemplateNew.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<
          ResponseTypes['GET/api/creativeCenter/gotoTemplateNew.json']
        >
      }
    },

    /**
     * 接口名：获取创意中心需要的物料
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6662&itf=70355
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/api/creativeCenter/getMaterial.json': (
      req?: Models['GET/api/creativeCenter/getMaterial.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/creativeCenter/getMaterial.json',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/api/creativeCenter/getMaterial.json']>
      } else {
        const action = RequestAction['GET/api/creativeCenter/getMaterial.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<ResponseTypes['GET/api/creativeCenter/getMaterial.json']>
      }
    },

    /**
     * 接口名：删除创意
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6662&itf=73923
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'DELETE/api/creative/delete.json': (
      req?: Models['DELETE/api/creative/delete.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/creative/delete.json',
          method: 'DELETE',
          params: req,
          extra,
        }) as Promise<ResponseTypes['DELETE/api/creative/delete.json']>
      } else {
        const action = RequestAction['DELETE/api/creative/delete.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<ResponseTypes['DELETE/api/creative/delete.json']>
      }
    },

    /**
     * 接口名：活动创意打标
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6662&itf=85285
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'PUT/api/creative/activity/batchAddTag.json': (
      req?: Models['PUT/api/creative/activity/batchAddTag.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/creative/activity/batchAddTag.json',
          method: 'PUT',
          params: req,
          extra,
        }) as Promise<ResponseTypes['PUT/api/creative/activity/batchAddTag.json']>
      } else {
        const action = RequestAction['PUT/api/creative/activity/batchAddTag.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<
          ResponseTypes['PUT/api/creative/activity/batchAddTag.json']
        >
      }
    },

    /**
     * 接口名：预览创意接口
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6662&itf=77911
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'POST/api/creative/preview.json': (
      req?: Models['POST/api/creative/preview.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/creative/preview.json',
          method: 'POST',
          params: req,
          extra,
        }) as Promise<ResponseTypes['POST/api/creative/preview.json']>
      } else {
        const action = RequestAction['POST/api/creative/preview.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<ResponseTypes['POST/api/creative/preview.json']>
      }
    },

    /**
     * 接口名：获取资源位列表
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6687&itf=67190
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/api/adzone/findList.json': (
      req?: Models['GET/api/adzone/findList.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/adzone/findList.json',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/api/adzone/findList.json']>
      } else {
        const action = RequestAction['GET/api/adzone/findList.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<ResponseTypes['GET/api/adzone/findList.json']>
      }
    },

    /**
     * 接口名：检查资源位匹配情况
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6687&itf=67243
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/api/adzone/checkList.json': (
      req?: Models['GET/api/adzone/checkList.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/adzone/checkList.json',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/api/adzone/checkList.json']>
      } else {
        const action = RequestAction['GET/api/adzone/checkList.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<ResponseTypes['GET/api/adzone/checkList.json']>
      }
    },

    /**
     * 接口名：【横向】移除绑定资源位
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6687&itf=67248
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'PUT/api/adzone/unbindList.json': (
      req?: Models['PUT/api/adzone/unbindList.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/adzone/unbindList.json',
          method: 'PUT',
          params: req,
          extra,
        }) as Promise<ResponseTypes['PUT/api/adzone/unbindList.json']>
      } else {
        const action = RequestAction['PUT/api/adzone/unbindList.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<ResponseTypes['PUT/api/adzone/unbindList.json']>
      }
    },

    /**
     * 接口名：【横向】更新广告位绑定情况
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6687&itf=67254
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'PUT/api/adzone/bindList.json': (
      req?: Models['PUT/api/adzone/bindList.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/adzone/bindList.json',
          method: 'PUT',
          params: req,
          extra,
        }) as Promise<ResponseTypes['PUT/api/adzone/bindList.json']>
      } else {
        const action = RequestAction['PUT/api/adzone/bindList.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<ResponseTypes['PUT/api/adzone/bindList.json']>
      }
    },

    /**
     * 接口名：【横向】分页获取资源位列表
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6687&itf=67267
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/api/adzone/findPage.json': (
      req?: Models['GET/api/adzone/findPage.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/adzone/findPage.json',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/api/adzone/findPage.json']>
      } else {
        const action = RequestAction['GET/api/adzone/findPage.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<ResponseTypes['GET/api/adzone/findPage.json']>
      }
    },

    /**
     * 接口名：【管理】批量修改溢价
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6687&itf=68949
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'PUT/api/adzone/batchModify.json': (
      req?: Models['PUT/api/adzone/batchModify.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/adzone/batchModify.json',
          method: 'PUT',
          params: req,
          extra,
        }) as Promise<ResponseTypes['PUT/api/adzone/batchModify.json']>
      } else {
        const action = RequestAction['PUT/api/adzone/batchModify.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<ResponseTypes['PUT/api/adzone/batchModify.json']>
      }
    },

    /**
     * 接口名：分页获取物料列表
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6688&itf=67403
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/api/material/findPage.json': (
      req?: Models['GET/api/material/findPage.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/material/findPage.json',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/api/material/findPage.json']>
      } else {
        const action = RequestAction['GET/api/material/findPage.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<ResponseTypes['GET/api/material/findPage.json']>
      }
    },

    /**
     * 接口名：获取推荐物料列表
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6688&itf=87196
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/api/material/recommend.json': (
      req?: Models['GET/api/material/recommend.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/material/recommend.json',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/api/material/recommend.json']>
      } else {
        const action = RequestAction['GET/api/material/recommend.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<ResponseTypes['GET/api/material/recommend.json']>
      }
    },

    /**
     * 接口名：获取物料查询条件
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6688&itf=67405
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/api/material/findQueryCondition.json': (
      req?: Models['GET/api/material/findQueryCondition.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/material/findQueryCondition.json',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/api/material/findQueryCondition.json']>
      } else {
        const action = RequestAction['GET/api/material/findQueryCondition.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<ResponseTypes['GET/api/material/findQueryCondition.json']>
      }
    },

    /**
     * 接口名：获取商品查询条件
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6688&itf=70820
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/api/material/item/findQueryCondition.json': (
      req?: Models['GET/api/material/item/findQueryCondition.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/material/item/findQueryCondition.json',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/api/material/item/findQueryCondition.json']>
      } else {
        const action = RequestAction['GET/api/material/item/findQueryCondition.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<
          ResponseTypes['GET/api/material/item/findQueryCondition.json']
        >
      }
    },

    /**
     * 接口名：获取权益查询条件
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6688&itf=78780
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/api/coupon/findQueryCondition.json': (
      req?: Models['GET/api/coupon/findQueryCondition.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/coupon/findQueryCondition.json',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/api/coupon/findQueryCondition.json']>
      } else {
        const action = RequestAction['GET/api/coupon/findQueryCondition.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<ResponseTypes['GET/api/coupon/findQueryCondition.json']>
      }
    },

    /**
     * 接口名：查询物料违规记录
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6688&itf=67559
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/api/material/findPunishRecordList.json': (
      req?: Models['GET/api/material/findPunishRecordList.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/material/findPunishRecordList.json',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/api/material/findPunishRecordList.json']>
      } else {
        const action = RequestAction['GET/api/material/findPunishRecordList.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<
          ResponseTypes['GET/api/material/findPunishRecordList.json']
        >
      }
    },

    /**
     * 接口名：校验推广
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6688&itf=67656
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/api/material/accessAllowed.json': (
      req?: Models['GET/api/material/accessAllowed.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/material/accessAllowed.json',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/api/material/accessAllowed.json']>
      } else {
        const action = RequestAction['GET/api/material/accessAllowed.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<ResponseTypes['GET/api/material/accessAllowed.json']>
      }
    },

    /**
     * 接口名：校验商品
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6688&itf=70819
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/api/material/item/accessAllowed.json': (
      req?: Models['GET/api/material/item/accessAllowed.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/material/item/accessAllowed.json',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/api/material/item/accessAllowed.json']>
      } else {
        const action = RequestAction['GET/api/material/item/accessAllowed.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<ResponseTypes['GET/api/material/item/accessAllowed.json']>
      }
    },

    /**
     * 接口名：优惠券接口
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6688&itf=70837
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/api/coupon/findList.json': (
      req?: Models['GET/api/coupon/findList.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/coupon/findList.json',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/api/coupon/findList.json']>
      } else {
        const action = RequestAction['GET/api/coupon/findList.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<ResponseTypes['GET/api/coupon/findList.json']>
      }
    },

    /**
     * 接口名：分页获取权益信息
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6688&itf=78647
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/api/coupon/findPage.json': (
      req?: Models['GET/api/coupon/findPage.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/coupon/findPage.json',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/api/coupon/findPage.json']>
      } else {
        const action = RequestAction['GET/api/coupon/findPage.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<ResponseTypes['GET/api/coupon/findPage.json']>
      }
    },

    /**
     * 接口名：获取推荐优惠券
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6688&itf=78925
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/api/coupon/recommend.json': (
      req?: Models['GET/api/coupon/recommend.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/coupon/recommend.json',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/api/coupon/recommend.json']>
      } else {
        const action = RequestAction['GET/api/coupon/recommend.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<ResponseTypes['GET/api/coupon/recommend.json']>
      }
    },

    /**
     * 接口名：批量校验接口
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6688&itf=75890
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/api/material/batchAccessAllowed.json': (
      req?: Models['GET/api/material/batchAccessAllowed.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/material/batchAccessAllowed.json',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/api/material/batchAccessAllowed.json']>
      } else {
        const action = RequestAction['GET/api/material/batchAccessAllowed.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<ResponseTypes['GET/api/material/batchAccessAllowed.json']>
      }
    },

    /**
     * 接口名：【管理】新增定向
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6840&itf=68388
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'PUT/api/crowd/modifyByType.json': (
      req?: Models['PUT/api/crowd/modifyByType.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/crowd/modifyByType.json',
          method: 'PUT',
          params: req,
          extra,
        }) as Promise<ResponseTypes['PUT/api/crowd/modifyByType.json']>
      } else {
        const action = RequestAction['PUT/api/crowd/modifyByType.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<ResponseTypes['PUT/api/crowd/modifyByType.json']>
      }
    },

    /**
     * 接口名：【管理】删除定向绑定
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6840&itf=68391
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'DELETE/api/crowd/delete.json': (
      req?: Models['DELETE/api/crowd/delete.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/crowd/delete.json',
          method: 'DELETE',
          params: req,
          extra,
        }) as Promise<ResponseTypes['DELETE/api/crowd/delete.json']>
      } else {
        const action = RequestAction['DELETE/api/crowd/delete.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<ResponseTypes['DELETE/api/crowd/delete.json']>
      }
    },

    /**
     * 接口名：【管理】查询定向列表不分页
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6840&itf=68395
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/api/crowd/findList.json': (
      req?: Models['GET/api/crowd/findList.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/crowd/findList.json',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/api/crowd/findList.json']>
      } else {
        const action = RequestAction['GET/api/crowd/findList.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<ResponseTypes['GET/api/crowd/findList.json']>
      }
    },

    /**
     * 接口名：【主流程】查询推荐定向
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6840&itf=68397
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/api/target/findSuggest.json': (
      req?: Models['GET/api/target/findSuggest.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/target/findSuggest.json',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/api/target/findSuggest.json']>
      } else {
        const action = RequestAction['GET/api/target/findSuggest.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<ResponseTypes['GET/api/target/findSuggest.json']>
      }
    },

    /**
     * 接口名：【工具】查询建议出价&市场平均价
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6840&itf=68400
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'POST/api/crowd/getSuggestPrice.json': (
      req?: Models['POST/api/crowd/getSuggestPrice.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/crowd/getSuggestPrice.json',
          method: 'POST',
          params: req,
          extra,
        }) as Promise<ResponseTypes['POST/api/crowd/getSuggestPrice.json']>
      } else {
        const action = RequestAction['POST/api/crowd/getSuggestPrice.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<ResponseTypes['POST/api/crowd/getSuggestPrice.json']>
      }
    },

    /**
     * 接口名：【工具】流量预估
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6840&itf=68418
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'POST/api/algotool/getPredictedPvUv.json': (
      req?: Models['POST/api/algotool/getPredictedPvUv.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/algotool/getPredictedPvUv.json',
          method: 'POST',
          params: req,
          extra,
        }) as Promise<ResponseTypes['POST/api/algotool/getPredictedPvUv.json']>
      } else {
        const action = RequestAction['POST/api/algotool/getPredictedPvUv.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<ResponseTypes['POST/api/algotool/getPredictedPvUv.json']>
      }
    },

    /**
     * 接口名：查询定向列表（没有category）
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6840&itf=68420
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/api/target/findList.json': (
      req?: Models['GET/api/target/findList.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/target/findList.json',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/api/target/findList.json']>
      } else {
        const action = RequestAction['GET/api/target/findList.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<ResponseTypes['GET/api/target/findList.json']>
      }
    },

    /**
     * 接口名：查询定向分组列表
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6840&itf=68421
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/api/target/findCategoryList.json': (
      req?: Models['GET/api/target/findCategoryList.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/target/findCategoryList.json',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/api/target/findCategoryList.json']>
      } else {
        const action = RequestAction['GET/api/target/findCategoryList.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<ResponseTypes['GET/api/target/findCategoryList.json']>
      }
    },

    /**
     * 接口名：查询定向标签分页
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6840&itf=68425
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/api/target/findLabelPage.json': (
      req?: Models['GET/api/target/findLabelPage.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/target/findLabelPage.json',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/api/target/findLabelPage.json']>
      } else {
        const action = RequestAction['GET/api/target/findLabelPage.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<ResponseTypes['GET/api/target/findLabelPage.json']>
      }
    },

    /**
     * 接口名：【管理】查询定向筛选框
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6840&itf=68426
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/api/target/findTargetTypeCondition.json': (
      req?: Models['GET/api/target/findTargetTypeCondition.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/target/findTargetTypeCondition.json',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/api/target/findTargetTypeCondition.json']>
      } else {
        const action = RequestAction['GET/api/target/findTargetTypeCondition.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<
          ResponseTypes['GET/api/target/findTargetTypeCondition.json']
        >
      }
    },

    /**
     * 接口名：查询店铺关键词
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6840&itf=68427
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/api/target/getKeywordShopUv.json': (
      req?: Models['GET/api/target/getKeywordShopUv.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/target/getKeywordShopUv.json',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/api/target/getKeywordShopUv.json']>
      } else {
        const action = RequestAction['GET/api/target/getKeywordShopUv.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<ResponseTypes['GET/api/target/getKeywordShopUv.json']>
      }
    },

    /**
     * 接口名：查询店铺定向筛选条件
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6840&itf=68429
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/api/target/findShopTargetQueryCondition.json': (
      req?: Models['GET/api/target/findShopTargetQueryCondition.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/target/findShopTargetQueryCondition.json',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/api/target/findShopTargetQueryCondition.json']>
      } else {
        const action = RequestAction['GET/api/target/findShopTargetQueryCondition.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<
          ResponseTypes['GET/api/target/findShopTargetQueryCondition.json']
        >
      }
    },

    /**
     * 接口名：【工具】单品托管手动出价建议价
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6840&itf=68552
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/api/algotool/findManualBidSuggestPrice.json': (
      req?: Models['GET/api/algotool/findManualBidSuggestPrice.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/algotool/findManualBidSuggestPrice.json',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/api/algotool/findManualBidSuggestPrice.json']>
      } else {
        const action = RequestAction['GET/api/algotool/findManualBidSuggestPrice.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<
          ResponseTypes['GET/api/algotool/findManualBidSuggestPrice.json']
        >
      }
    },

    /**
     * 接口名：【管理】批量出价
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6840&itf=68946
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'POST/api/crowd/batchModify.json': (
      req?: Models['POST/api/crowd/batchModify.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/crowd/batchModify.json',
          method: 'POST',
          params: req,
          extra,
        }) as Promise<ResponseTypes['POST/api/crowd/batchModify.json']>
      } else {
        const action = RequestAction['POST/api/crowd/batchModify.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<ResponseTypes['POST/api/crowd/batchModify.json']>
      }
    },

    /**
     * 接口名：【工具】出价模拟器
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6840&itf=69205
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/api/crowd/findSimulatorPointList.json': (
      req?: Models['GET/api/crowd/findSimulatorPointList.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/crowd/findSimulatorPointList.json',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/api/crowd/findSimulatorPointList.json']>
      } else {
        const action = RequestAction['GET/api/crowd/findSimulatorPointList.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<
          ResponseTypes['GET/api/crowd/findSimulatorPointList.json']
        >
      }
    },

    /**
     * 接口名：【工具】资源位建议溢价
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6840&itf=69646
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'POST/api/adzone/getSuggestDiscount.json': (
      req?: Models['POST/api/adzone/getSuggestDiscount.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/adzone/getSuggestDiscount.json',
          method: 'POST',
          params: req,
          extra,
        }) as Promise<ResponseTypes['POST/api/adzone/getSuggestDiscount.json']>
      } else {
        const action = RequestAction['POST/api/adzone/getSuggestDiscount.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<ResponseTypes['POST/api/adzone/getSuggestDiscount.json']>
      }
    },

    /**
     * 接口名：关键词包含优化
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6840&itf=77913
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'POST/api/target/findSonkeywordList.json': (
      req?: Models['POST/api/target/findSonkeywordList.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/target/findSonkeywordList.json',
          method: 'POST',
          params: req,
          extra,
        }) as Promise<ResponseTypes['POST/api/target/findSonkeywordList.json']>
      } else {
        const action = RequestAction['POST/api/target/findSonkeywordList.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<ResponseTypes['POST/api/target/findSonkeywordList.json']>
      }
    },

    /**
     * 接口名：【人群推荐】获取人群推荐
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6840&itf=83230
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/api/target/findRecommendList.json': (
      req?: Models['GET/api/target/findRecommendList.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/target/findRecommendList.json',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/api/target/findRecommendList.json']>
      } else {
        const action = RequestAction['GET/api/target/findRecommendList.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<ResponseTypes['GET/api/target/findRecommendList.json']>
      }
    },

    /**
     * 接口名：【人群推荐】分页获取指定推荐人群
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6840&itf=83235
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/api/target/findRecommendPage.json': (
      req?: Models['GET/api/target/findRecommendPage.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/target/findRecommendPage.json',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/api/target/findRecommendPage.json']>
      } else {
        const action = RequestAction['GET/api/target/findRecommendPage.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<ResponseTypes['GET/api/target/findRecommendPage.json']>
      }
    },

    /**
     * 接口名：【人群推荐】新增定向（非覆盖）
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6840&itf=83236
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'PUT/api/target/addTargetLabel.json': (
      req?: Models['PUT/api/target/addTargetLabel.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/target/addTargetLabel.json',
          method: 'PUT',
          params: req,
          extra,
        }) as Promise<ResponseTypes['PUT/api/target/addTargetLabel.json']>
      } else {
        const action = RequestAction['PUT/api/target/addTargetLabel.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<ResponseTypes['PUT/api/target/addTargetLabel.json']>
      }
    },

    /**
     * 接口名：更新报表展现指标
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6692&itf=67498
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'POST/api/member/updateConfig.json': (
      req?: Models['POST/api/member/updateConfig.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/member/updateConfig.json',
          method: 'POST',
          params: req,
          extra,
        }) as Promise<ResponseTypes['POST/api/member/updateConfig.json']>
      } else {
        const action = RequestAction['POST/api/member/updateConfig.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<ResponseTypes['POST/api/member/updateConfig.json']>
      }
    },

    /**
     * 接口名：用户登出
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6692&itf=67238
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/api/member/logout.action': (
      req?: Models['GET/api/member/logout.action']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/member/logout.action',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/api/member/logout.action']>
      } else {
        const action = RequestAction['GET/api/member/logout.action'](req)
        return dispatchAction(action, rapperFetch) as Promise<ResponseTypes['GET/api/member/logout.action']>
      }
    },

    /**
     * 接口名：【CRM】伪登陆
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6692&itf=67244
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/api/member/adminLogin.action': (
      req?: Models['GET/api/member/adminLogin.action']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/member/adminLogin.action',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/api/member/adminLogin.action']>
      } else {
        const action = RequestAction['GET/api/member/adminLogin.action'](req)
        return dispatchAction(action, rapperFetch) as Promise<ResponseTypes['GET/api/member/adminLogin.action']>
      }
    },

    /**
     * 接口名：用户协议签署
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6692&itf=67246
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'POST/api/member/signProtocol.json': (
      req?: Models['POST/api/member/signProtocol.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/member/signProtocol.json',
          method: 'POST',
          params: req,
          extra,
        }) as Promise<ResponseTypes['POST/api/member/signProtocol.json']>
      } else {
        const action = RequestAction['POST/api/member/signProtocol.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<ResponseTypes['POST/api/member/signProtocol.json']>
      }
    },

    /**
     * 接口名：获取用户信息
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6692&itf=67253
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/api/member/getInfo.json': (
      req?: Models['GET/api/member/getInfo.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/member/getInfo.json',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/api/member/getInfo.json']>
      } else {
        const action = RequestAction['GET/api/member/getInfo.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<ResponseTypes['GET/api/member/getInfo.json']>
      }
    },

    /**
     * 接口名：创建用户联系人
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6692&itf=67294
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'POST/api/member/addContacts.json': (
      req?: Models['POST/api/member/addContacts.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/member/addContacts.json',
          method: 'POST',
          params: req,
          extra,
        }) as Promise<ResponseTypes['POST/api/member/addContacts.json']>
      } else {
        const action = RequestAction['POST/api/member/addContacts.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<ResponseTypes['POST/api/member/addContacts.json']>
      }
    },

    /**
     * 接口名：用户品牌检测
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6692&itf=67350
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/api/member/getQualificationBrandAccess.json': (
      req?: Models['GET/api/member/getQualificationBrandAccess.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/member/getQualificationBrandAccess.json',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/api/member/getQualificationBrandAccess.json']>
      } else {
        const action = RequestAction['GET/api/member/getQualificationBrandAccess.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<
          ResponseTypes['GET/api/member/getQualificationBrandAccess.json']
        >
      }
    },

    /**
     * 接口名：校验用户联系人旺旺合法性
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6692&itf=67295
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/api/member/checkContactsName.json': (
      req?: Models['GET/api/member/checkContactsName.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/member/checkContactsName.json',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/api/member/checkContactsName.json']>
      } else {
        const action = RequestAction['GET/api/member/checkContactsName.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<ResponseTypes['GET/api/member/checkContactsName.json']>
      }
    },

    /**
     * 接口名：获取用户联系人列表
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6692&itf=67298
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/api/member/findContactsList.json': (
      req?: Models['GET/api/member/findContactsList.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/member/findContactsList.json',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/api/member/findContactsList.json']>
      } else {
        const action = RequestAction['GET/api/member/findContactsList.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<ResponseTypes['GET/api/member/findContactsList.json']>
      }
    },

    /**
     * 接口名：查询用户违规状态
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6692&itf=67473
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/api/member/getPunishStatus.json': (
      req?: Models['GET/api/member/getPunishStatus.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/member/getPunishStatus.json',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/api/member/getPunishStatus.json']>
      } else {
        const action = RequestAction['GET/api/member/getPunishStatus.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<ResponseTypes['GET/api/member/getPunishStatus.json']>
      }
    },

    /**
     * 接口名：查询用户违规记录
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6692&itf=67476
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/api/member/findPunishRecordList.json': (
      req?: Models['GET/api/member/findPunishRecordList.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/member/findPunishRecordList.json',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/api/member/findPunishRecordList.json']>
      } else {
        const action = RequestAction['GET/api/member/findPunishRecordList.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<ResponseTypes['GET/api/member/findPunishRecordList.json']>
      }
    },

    /**
     * 接口名：查询用户资质违规记录
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6692&itf=67482
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/api/member/findQualificationPunishRecordList.json': (
      req?: Models['GET/api/member/findQualificationPunishRecordList.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/member/findQualificationPunishRecordList.json',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/api/member/findQualificationPunishRecordList.json']>
      } else {
        const action = RequestAction['GET/api/member/findQualificationPunishRecordList.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<
          ResponseTypes['GET/api/member/findQualificationPunishRecordList.json']
        >
      }
    },

    /**
     * 接口名：判断用户是否签订协议
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6692&itf=67731
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/api/member/isProtocolSigned.json': (
      req?: Models['GET/api/member/isProtocolSigned.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/member/isProtocolSigned.json',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/api/member/isProtocolSigned.json']>
      } else {
        const action = RequestAction['GET/api/member/isProtocolSigned.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<ResponseTypes['GET/api/member/isProtocolSigned.json']>
      }
    },

    /**
     * 接口名：用户准入
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6692&itf=68649
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'POST/api/member/joinBusinessPlatform.json': (
      req?: Models['POST/api/member/joinBusinessPlatform.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: 'api/member/joinBusinessPlatform.json',
          method: 'POST',
          params: req,
          extra,
        }) as Promise<ResponseTypes['POST/api/member/joinBusinessPlatform.json']>
      } else {
        const action = RequestAction['POST/api/member/joinBusinessPlatform.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<
          ResponseTypes['POST/api/member/joinBusinessPlatform.json']
        >
      }
    },

    /**
     * 接口名：用户处罚
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6692&itf=68692
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/TODO': (req?: Models['GET/TODO']['Req'], extra?: {type?: 'normal' | 'redux'}) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: 'TODO',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/TODO']>
      } else {
        const action = RequestAction['GET/TODO'](req)
        return dispatchAction(action, rapperFetch) as Promise<ResponseTypes['GET/TODO']>
      }
    },

    /**
     * 接口名：获取用户维度故障信息
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6692&itf=69558
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/api/member/findDiagnoseList.json': (
      req?: Models['GET/api/member/findDiagnoseList.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/member/findDiagnoseList.json',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/api/member/findDiagnoseList.json']>
      } else {
        const action = RequestAction['GET/api/member/findDiagnoseList.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<ResponseTypes['GET/api/member/findDiagnoseList.json']>
      }
    },

    /**
     * 接口名：信息流运营编辑接口
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6692&itf=70153
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/https://mo.m.taobao.com/feeds/': (
      req?: Models['GET/https://mo.m.taobao.com/feeds/']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: 'https://mo.m.taobao.com/feeds/',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/https://mo.m.taobao.com/feeds/']>
      } else {
        const action = RequestAction['GET/https://mo.m.taobao.com/feeds/'](req)
        return dispatchAction(action, rapperFetch) as Promise<ResponseTypes['GET/https://mo.m.taobao.com/feeds/']>
      }
    },

    /**
     * 接口名：一站式运营编辑接口
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6692&itf=71471
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/https://mo.m.taobao.com/one-stop/': (
      req?: Models['GET/https://mo.m.taobao.com/one-stop/']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: 'https://mo.m.taobao.com/one-stop/',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/https://mo.m.taobao.com/one-stop/']>
      } else {
        const action = RequestAction['GET/https://mo.m.taobao.com/one-stop/'](req)
        return dispatchAction(action, rapperFetch) as Promise<ResponseTypes['GET/https://mo.m.taobao.com/one-stop/']>
      }
    },

    /**
     * 接口名：获取邀请链接
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6692&itf=73310
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/api/member/invitation/url.json': (
      req?: Models['GET/api/member/invitation/url.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/member/invitation/url.json',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/api/member/invitation/url.json']>
      } else {
        const action = RequestAction['GET/api/member/invitation/url.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<ResponseTypes['GET/api/member/invitation/url.json']>
      }
    },

    /**
     * 接口名：获取用户使用进度
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6692&itf=73741
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/api/member/stage.json': (
      req?: Models['GET/api/member/stage.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/member/stage.json',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/api/member/stage.json']>
      } else {
        const action = RequestAction['GET/api/member/stage.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<ResponseTypes['GET/api/member/stage.json']>
      }
    },

    /**
     * 接口名：用户活动的一些信息
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6692&itf=75881
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/api/member/activity.json': (
      req?: Models['GET/api/member/activity.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/member/activity.json',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/api/member/activity.json']>
      } else {
        const action = RequestAction['GET/api/member/activity.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<ResponseTypes['GET/api/member/activity.json']>
      }
    },

    /**
     * 接口名：用户活动的宝贝引导信息
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6692&itf=87195
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/api/member/activity/itemGuide.json': (
      req?: Models['GET/api/member/activity/itemGuide.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/member/activity/itemGuide.json',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/api/member/activity/itemGuide.json']>
      } else {
        const action = RequestAction['GET/api/member/activity/itemGuide.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<ResponseTypes['GET/api/member/activity/itemGuide.json']>
      }
    },

    /**
     * 接口名：转移计划信息
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6692&itf=77790
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/api/member/transfer.json': (
      req?: Models['GET/api/member/transfer.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/member/transfer.json',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/api/member/transfer.json']>
      } else {
        const action = RequestAction['GET/api/member/transfer.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<ResponseTypes['GET/api/member/transfer.json']>
      }
    },

    /**
     * 接口名：新客任务
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6692&itf=79580
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/api/member/newGuestTask.json': (
      req?: Models['GET/api/member/newGuestTask.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/member/newGuestTask.json',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/api/member/newGuestTask.json']>
      } else {
        const action = RequestAction['GET/api/member/newGuestTask.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<ResponseTypes['GET/api/member/newGuestTask.json']>
      }
    },

    /**
     * 接口名：获取账户及自动充值提醒
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6707&itf=67316
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/api/account/getAcctBalanceRemindSettingAutoRecharge.json': (
      req?: Models['GET/api/account/getAcctBalanceRemindSettingAutoRecharge.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/account/getAcctBalanceRemindSettingAutoRecharge.json',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/api/account/getAcctBalanceRemindSettingAutoRecharge.json']>
      } else {
        const action = RequestAction['GET/api/account/getAcctBalanceRemindSettingAutoRecharge.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<
          ResponseTypes['GET/api/account/getAcctBalanceRemindSettingAutoRecharge.json']
        >
      }
    },

    /**
     * 接口名：查询支付宝账号是否完成代扣协议签约
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6707&itf=67323
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/api/account/getSignInfo.json': (
      req?: Models['GET/api/account/getSignInfo.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/account/getSignInfo.json',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/api/account/getSignInfo.json']>
      } else {
        const action = RequestAction['GET/api/account/getSignInfo.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<ResponseTypes['GET/api/account/getSignInfo.json']>
      }
    },

    /**
     * 接口名：更新账户及自动充值设置
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6707&itf=67324
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'PUT/api/account/modifyAcctBalanceRemindSettingAutoRecharge.json': (
      req?: Models['PUT/api/account/modifyAcctBalanceRemindSettingAutoRecharge.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/account/modifyAcctBalanceRemindSettingAutoRecharge.json',
          method: 'PUT',
          params: req,
          extra,
        }) as Promise<ResponseTypes['PUT/api/account/modifyAcctBalanceRemindSettingAutoRecharge.json']>
      } else {
        const action = RequestAction['PUT/api/account/modifyAcctBalanceRemindSettingAutoRecharge.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<
          ResponseTypes['PUT/api/account/modifyAcctBalanceRemindSettingAutoRecharge.json']
        >
      }
    },

    /**
     * 接口名：账户解约自动充值
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6707&itf=67330
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'PUT/api/account/unsignAutoRecharge.json': (
      req?: Models['PUT/api/account/unsignAutoRecharge.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/account/unsignAutoRecharge.json',
          method: 'PUT',
          params: req,
          extra,
        }) as Promise<ResponseTypes['PUT/api/account/unsignAutoRecharge.json']>
      } else {
        const action = RequestAction['PUT/api/account/unsignAutoRecharge.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<ResponseTypes['PUT/api/account/unsignAutoRecharge.json']>
      }
    },

    /**
     * 接口名：查询账户流水
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6707&itf=67374
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/api/account/findItemList.json': (
      req?: Models['GET/api/account/findItemList.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/account/findItemList.json',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/api/account/findItemList.json']>
      } else {
        const action = RequestAction['GET/api/account/findItemList.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<ResponseTypes['GET/api/account/findItemList.json']>
      }
    },

    /**
     * 接口名：下载账户流水
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6707&itf=67375
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/api/account/exportItemList.action': (
      req?: Models['GET/api/account/exportItemList.action']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/account/exportItemList.action',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/api/account/exportItemList.action']>
      } else {
        const action = RequestAction['GET/api/account/exportItemList.action'](req)
        return dispatchAction(action, rapperFetch) as Promise<ResponseTypes['GET/api/account/exportItemList.action']>
      }
    },

    /**
     * 接口名：优惠券
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6707&itf=67407
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/和钻展保持一致': (req?: Models['GET/和钻展保持一致']['Req'], extra?: {type?: 'normal' | 'redux'}) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '和钻展保持一致',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/和钻展保持一致']>
      } else {
        const action = RequestAction['GET/和钻展保持一致'](req)
        return dispatchAction(action, rapperFetch) as Promise<ResponseTypes['GET/和钻展保持一致']>
      }
    },

    /**
     * 接口名：获取提醒设置（账户余额和计划预算）
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6707&itf=68995
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/api/account/findMessageRemindList.json': (
      req?: Models['GET/api/account/findMessageRemindList.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/account/findMessageRemindList.json',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/api/account/findMessageRemindList.json']>
      } else {
        const action = RequestAction['GET/api/account/findMessageRemindList.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<
          ResponseTypes['GET/api/account/findMessageRemindList.json']
        >
      }
    },

    /**
     * 接口名：覆盖更新提醒设置
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6707&itf=69000
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'POST/api/account/modifyAllMessageRemindList.json': (
      req?: Models['POST/api/account/modifyAllMessageRemindList.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/account/modifyAllMessageRemindList.json',
          method: 'POST',
          params: req,
          extra,
        }) as Promise<ResponseTypes['POST/api/account/modifyAllMessageRemindList.json']>
      } else {
        const action = RequestAction['POST/api/account/modifyAllMessageRemindList.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<
          ResponseTypes['POST/api/account/modifyAllMessageRemindList.json']
        >
      }
    },

    /**
     * 接口名：获取退款列表
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6707&itf=72837
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/api/account/getRefundList.json': (
      req?: Models['GET/api/account/getRefundList.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/account/getRefundList.json',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/api/account/getRefundList.json']>
      } else {
        const action = RequestAction['GET/api/account/getRefundList.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<ResponseTypes['GET/api/account/getRefundList.json']>
      }
    },

    /**
     * 接口名：创建退款
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6707&itf=72838
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'POST/api/account/createRefund.json': (
      req?: Models['POST/api/account/createRefund.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/account/createRefund.json',
          method: 'POST',
          params: req,
          extra,
        }) as Promise<ResponseTypes['POST/api/account/createRefund.json']>
      } else {
        const action = RequestAction['POST/api/account/createRefund.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<ResponseTypes['POST/api/account/createRefund.json']>
      }
    },

    /**
     * 接口名：退款校验
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6707&itf=72839
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/api/account/checkRefund.json': (
      req?: Models['GET/api/account/checkRefund.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/account/checkRefund.json',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/api/account/checkRefund.json']>
      } else {
        const action = RequestAction['GET/api/account/checkRefund.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<ResponseTypes['GET/api/account/checkRefund.json']>
      }
    },

    /**
     * 接口名：【国际版】是否签署cae代扣协议
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6707&itf=72855
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/api/account/isSignGlobalAlipay.json': (
      req?: Models['GET/api/account/isSignGlobalAlipay.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/account/isSignGlobalAlipay.json',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/api/account/isSignGlobalAlipay.json']>
      } else {
        const action = RequestAction['GET/api/account/isSignGlobalAlipay.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<ResponseTypes['GET/api/account/isSignGlobalAlipay.json']>
      }
    },

    /**
     * 接口名：【国际版】充值
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6707&itf=72857
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/api/account/charge.json': (
      req?: Models['GET/api/account/charge.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/account/charge.json',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/api/account/charge.json']>
      } else {
        const action = RequestAction['GET/api/account/charge.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<ResponseTypes['GET/api/account/charge.json']>
      }
    },

    /**
     * 接口名：获取操作日志信息
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6707&itf=74120
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/api/log/findOperationLog.json': (
      req?: Models['GET/api/log/findOperationLog.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/log/findOperationLog.json',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/api/log/findOperationLog.json']>
      } else {
        const action = RequestAction['GET/api/log/findOperationLog.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<ResponseTypes['GET/api/log/findOperationLog.json']>
      }
    },

    /**
     * 接口名：通过单元名称查询单元信息
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6707&itf=74341
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/api/log/findAdgroupByName.json': (
      req?: Models['GET/api/log/findAdgroupByName.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/log/findAdgroupByName.json',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/api/log/findAdgroupByName.json']>
      } else {
        const action = RequestAction['GET/api/log/findAdgroupByName.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<ResponseTypes['GET/api/log/findAdgroupByName.json']>
      }
    },

    /**
     * 接口名：通过计划名称查询计划信息
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6707&itf=74342
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/api/log/findCampaignByName.json': (
      req?: Models['GET/api/log/findCampaignByName.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/log/findCampaignByName.json',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/api/log/findCampaignByName.json']>
      } else {
        const action = RequestAction['GET/api/log/findCampaignByName.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<ResponseTypes['GET/api/log/findCampaignByName.json']>
      }
    },

    /**
     * 接口名：获取累计消耗
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6707&itf=76780
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/api/account/findAccumulateDeduct.json': (
      req?: Models['GET/api/account/findAccumulateDeduct.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/account/findAccumulateDeduct.json',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/api/account/findAccumulateDeduct.json']>
      } else {
        const action = RequestAction['GET/api/account/findAccumulateDeduct.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<
          ResponseTypes['GET/api/account/findAccumulateDeduct.json']
        >
      }
    },

    /**
     * 接口名：发送短信验证码
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6708&itf=67327
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/api/message/sendMobileCode.json': (
      req?: Models['GET/api/message/sendMobileCode.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/message/sendMobileCode.json',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/api/message/sendMobileCode.json']>
      } else {
        const action = RequestAction['GET/api/message/sendMobileCode.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<ResponseTypes['GET/api/message/sendMobileCode.json']>
      }
    },

    /**
     * 接口名：验证短信验证码
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6708&itf=67328
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'POST/api/message/verifyMobilePhoneCode.json': (
      req?: Models['POST/api/message/verifyMobilePhoneCode.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/message/verifyMobilePhoneCode.json',
          method: 'POST',
          params: req,
          extra,
        }) as Promise<ResponseTypes['POST/api/message/verifyMobilePhoneCode.json']>
      } else {
        const action = RequestAction['POST/api/message/verifyMobilePhoneCode.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<
          ResponseTypes['POST/api/message/verifyMobilePhoneCode.json']
        >
      }
    },

    /**
     * 接口名：系统码表获取
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6711&itf=67372
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/api/common/findCodeList.json': (
      req?: Models['GET/api/common/findCodeList.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/common/findCodeList.json',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/api/common/findCodeList.json']>
      } else {
        const action = RequestAction['GET/api/common/findCodeList.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<ResponseTypes['GET/api/common/findCodeList.json']>
      }
    },

    /**
     * 接口名：获取前端CDN版本
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6711&itf=67763
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/api/common/getVersion.json': (
      req?: Models['GET/api/common/getVersion.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/common/getVersion.json',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/api/common/getVersion.json']>
      } else {
        const action = RequestAction['GET/api/common/getVersion.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<ResponseTypes['GET/api/common/getVersion.json']>
      }
    },

    /**
     * 接口名：获取组件元数据列表
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6712&itf=67393
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/api/component/findComponentMetaList.json': (
      req?: Models['GET/api/component/findComponentMetaList.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/component/findComponentMetaList.json',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/api/component/findComponentMetaList.json']>
      } else {
        const action = RequestAction['GET/api/component/findComponentMetaList.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<
          ResponseTypes['GET/api/component/findComponentMetaList.json']
        >
      }
    },

    /**
     * 接口名：获取用户组建模板
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6712&itf=67395
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/api/component/findMemberTemplateList.json': (
      req?: Models['GET/api/component/findMemberTemplateList.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/component/findMemberTemplateList.json',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/api/component/findMemberTemplateList.json']>
      } else {
        const action = RequestAction['GET/api/component/findMemberTemplateList.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<
          ResponseTypes['GET/api/component/findMemberTemplateList.json']
        >
      }
    },

    /**
     * 接口名：新增用户组件模板
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6712&itf=67396
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'POST/api/component/addMemberTemplate.json': (
      req?: Models['POST/api/component/addMemberTemplate.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/component/addMemberTemplate.json',
          method: 'POST',
          params: req,
          extra,
        }) as Promise<ResponseTypes['POST/api/component/addMemberTemplate.json']>
      } else {
        const action = RequestAction['POST/api/component/addMemberTemplate.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<
          ResponseTypes['POST/api/component/addMemberTemplate.json']
        >
      }
    },

    /**
     * 接口名：修改用户组建模板
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6712&itf=67398
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'PUT/api/component/updateMemberTemplate.json': (
      req?: Models['PUT/api/component/updateMemberTemplate.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/component/updateMemberTemplate.json',
          method: 'PUT',
          params: req,
          extra,
        }) as Promise<ResponseTypes['PUT/api/component/updateMemberTemplate.json']>
      } else {
        const action = RequestAction['PUT/api/component/updateMemberTemplate.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<
          ResponseTypes['PUT/api/component/updateMemberTemplate.json']
        >
      }
    },

    /**
     * 接口名：删除用户组建模板
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6712&itf=67399
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'DELETE/api/component/deleteMemberTemplate.json': (
      req?: Models['DELETE/api/component/deleteMemberTemplate.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/component/deleteMemberTemplate.json',
          method: 'DELETE',
          params: req,
          extra,
        }) as Promise<ResponseTypes['DELETE/api/component/deleteMemberTemplate.json']>
      } else {
        const action = RequestAction['DELETE/api/component/deleteMemberTemplate.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<
          ResponseTypes['DELETE/api/component/deleteMemberTemplate.json']
        >
      }
    },

    /**
     * 接口名：✅【新】获取菜单列表
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6712&itf=80888
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/api/component/findMenuList.json': (
      req?: Models['GET/api/component/findMenuList.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/component/findMenuList.json',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/api/component/findMenuList.json']>
      } else {
        const action = RequestAction['GET/api/component/findMenuList.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<ResponseTypes['GET/api/component/findMenuList.json']>
      }
    },

    /**
     * 接口名：✅【新】获取组件列表
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6712&itf=80943
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/api/component/findComponentList.json': (
      req?: Models['GET/api/component/findComponentList.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/component/findComponentList.json',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/api/component/findComponentList.json']>
      } else {
        const action = RequestAction['GET/api/component/findComponentList.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<ResponseTypes['GET/api/component/findComponentList.json']>
      }
    },

    /**
     * 接口名：【报表】账户分时汇总
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6752&itf=67459
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/api/account/report/findHourSum.json': (
      req?: Models['GET/api/account/report/findHourSum.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/account/report/findHourSum.json',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/api/account/report/findHourSum.json']>
      } else {
        const action = RequestAction['GET/api/account/report/findHourSum.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<ResponseTypes['GET/api/account/report/findHourSum.json']>
      }
    },

    /**
     * 接口名：【报表】账户分时列表
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6752&itf=67344
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/api/account/report/findHourList.json': (
      req?: Models['GET/api/account/report/findHourList.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/account/report/findHourList.json',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/api/account/report/findHourList.json']>
      } else {
        const action = RequestAction['GET/api/account/report/findHourList.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<ResponseTypes['GET/api/account/report/findHourList.json']>
      }
    },

    /**
     * 接口名：【报表】账户整体分日汇总
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6752&itf=67472
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/api/account/report/findDaySum.json': (
      req?: Models['GET/api/account/report/findDaySum.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/account/report/findDaySum.json',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/api/account/report/findDaySum.json']>
      } else {
        const action = RequestAction['GET/api/account/report/findDaySum.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<ResponseTypes['GET/api/account/report/findDaySum.json']>
      }
    },

    /**
     * 接口名：【报表】账户整体分日列表
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6752&itf=67475
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/api/account/report/findDayList.json': (
      req?: Models['GET/api/account/report/findDayList.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/account/report/findDayList.json',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/api/account/report/findDayList.json']>
      } else {
        const action = RequestAction['GET/api/account/report/findDayList.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<ResponseTypes['GET/api/account/report/findDayList.json']>
      }
    },

    /**
     * 接口名：【 报表】计划分页列表
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6752&itf=67623
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/api/campaign/report/findPage.json': (
      req?: Models['GET/api/campaign/report/findPage.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/campaign/report/findPage.json',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/api/campaign/report/findPage.json']>
      } else {
        const action = RequestAction['GET/api/campaign/report/findPage.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<ResponseTypes['GET/api/campaign/report/findPage.json']>
      }
    },

    /**
     * 接口名：【报表】单个计划报表： 列表
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6752&itf=67480
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/api/campaign/report/findList.json': (
      req?: Models['GET/api/campaign/report/findList.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/campaign/report/findList.json',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/api/campaign/report/findList.json']>
      } else {
        const action = RequestAction['GET/api/campaign/report/findList.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<ResponseTypes['GET/api/campaign/report/findList.json']>
      }
    },

    /**
     * 接口名：【报表】单个计划报表：汇总
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6752&itf=67481
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/api/campaign/report/findSum.json': (
      req?: Models['GET/api/campaign/report/findSum.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/campaign/report/findSum.json',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/api/campaign/report/findSum.json']>
      } else {
        const action = RequestAction['GET/api/campaign/report/findSum.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<ResponseTypes['GET/api/campaign/report/findSum.json']>
      }
    },

    /**
     * 接口名：【报表】单元分页列表
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6752&itf=67621
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/api/adgroup/report/findPage.json': (
      req?: Models['GET/api/adgroup/report/findPage.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/adgroup/report/findPage.json',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/api/adgroup/report/findPage.json']>
      } else {
        const action = RequestAction['GET/api/adgroup/report/findPage.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<ResponseTypes['GET/api/adgroup/report/findPage.json']>
      }
    },

    /**
     * 接口名：【报表】单个单元报表： 列表
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6752&itf=67486
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/api/adgroup/report/findList.json': (
      req?: Models['GET/api/adgroup/report/findList.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/adgroup/report/findList.json',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/api/adgroup/report/findList.json']>
      } else {
        const action = RequestAction['GET/api/adgroup/report/findList.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<ResponseTypes['GET/api/adgroup/report/findList.json']>
      }
    },

    /**
     * 接口名：【报表】单个单元报表：汇总
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6752&itf=67487
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/api/adgroup/report/findSum.json': (
      req?: Models['GET/api/adgroup/report/findSum.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/adgroup/report/findSum.json',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/api/adgroup/report/findSum.json']>
      } else {
        const action = RequestAction['GET/api/adgroup/report/findSum.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<ResponseTypes['GET/api/adgroup/report/findSum.json']>
      }
    },

    /**
     * 接口名：【报表】创意分页列表
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6752&itf=67639
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/api/creative/report/findPage.json': (
      req?: Models['GET/api/creative/report/findPage.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/creative/report/findPage.json',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/api/creative/report/findPage.json']>
      } else {
        const action = RequestAction['GET/api/creative/report/findPage.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<ResponseTypes['GET/api/creative/report/findPage.json']>
      }
    },

    /**
     * 接口名：【报表】单个创意报表： 列表
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6752&itf=69359
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/api/creative/report/findList.json': (
      req?: Models['GET/api/creative/report/findList.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/creative/report/findList.json',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/api/creative/report/findList.json']>
      } else {
        const action = RequestAction['GET/api/creative/report/findList.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<ResponseTypes['GET/api/creative/report/findList.json']>
      }
    },

    /**
     * 接口名：【报表】单个创意报表： 汇总
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6752&itf=69360
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/api/creative/report/findSum.json': (
      req?: Models['GET/api/creative/report/findSum.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/creative/report/findSum.json',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/api/creative/report/findSum.json']>
      } else {
        const action = RequestAction['GET/api/creative/report/findSum.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<ResponseTypes['GET/api/creative/report/findSum.json']>
      }
    },

    /**
     * 接口名：【报表】定向分页列表
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6752&itf=67637
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/api/crowd/report/findPage.json': (
      req?: Models['GET/api/crowd/report/findPage.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/crowd/report/findPage.json',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/api/crowd/report/findPage.json']>
      } else {
        const action = RequestAction['GET/api/crowd/report/findPage.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<ResponseTypes['GET/api/crowd/report/findPage.json']>
      }
    },

    /**
     * 接口名：【报表】单个定向报表： 列表
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6752&itf=69469
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/api/crowd/report/findList.json': (
      req?: Models['GET/api/crowd/report/findList.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/crowd/report/findList.json',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/api/crowd/report/findList.json']>
      } else {
        const action = RequestAction['GET/api/crowd/report/findList.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<ResponseTypes['GET/api/crowd/report/findList.json']>
      }
    },

    /**
     * 接口名：【报表】单个定向报表： 汇总
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6752&itf=69470
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/api/crowd/report/findSum.json': (
      req?: Models['GET/api/crowd/report/findSum.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/crowd/report/findSum.json',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/api/crowd/report/findSum.json']>
      } else {
        const action = RequestAction['GET/api/crowd/report/findSum.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<ResponseTypes['GET/api/crowd/report/findSum.json']>
      }
    },

    /**
     * 接口名：【报表】资源位分页列表
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6752&itf=67622
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/api/adzone/report/findPage.json': (
      req?: Models['GET/api/adzone/report/findPage.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/adzone/report/findPage.json',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/api/adzone/report/findPage.json']>
      } else {
        const action = RequestAction['GET/api/adzone/report/findPage.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<ResponseTypes['GET/api/adzone/report/findPage.json']>
      }
    },

    /**
     * 接口名：【报表】单个资源位报表： 列表
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6752&itf=69472
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/api/adzone/report/findList.json': (
      req?: Models['GET/api/adzone/report/findList.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/adzone/report/findList.json',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/api/adzone/report/findList.json']>
      } else {
        const action = RequestAction['GET/api/adzone/report/findList.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<ResponseTypes['GET/api/adzone/report/findList.json']>
      }
    },

    /**
     * 接口名：【报表】单个资源位报表： 汇总
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6752&itf=69471
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/api/adzone/report/findSum.json': (
      req?: Models['GET/api/adzone/report/findSum.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/adzone/report/findSum.json',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/api/adzone/report/findSum.json']>
      } else {
        const action = RequestAction['GET/api/adzone/report/findSum.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<ResponseTypes['GET/api/adzone/report/findSum.json']>
      }
    },

    /**
     * 接口名：【报表】账户概览：人群整体分日汇总
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6752&itf=79815
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/api/account/report/findCrowdDaySum.json': (
      req?: Models['GET/api/account/report/findCrowdDaySum.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/account/report/findCrowdDaySum.json',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/api/account/report/findCrowdDaySum.json']>
      } else {
        const action = RequestAction['GET/api/account/report/findCrowdDaySum.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<
          ResponseTypes['GET/api/account/report/findCrowdDaySum.json']
        >
      }
    },

    /**
     * 接口名：【报表】账户概览：人群整体分日列表
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6752&itf=79816
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/api/account/report/findCrowdDayList.json': (
      req?: Models['GET/api/account/report/findCrowdDayList.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/account/report/findCrowdDayList.json',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/api/account/report/findCrowdDayList.json']>
      } else {
        const action = RequestAction['GET/api/account/report/findCrowdDayList.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<
          ResponseTypes['GET/api/account/report/findCrowdDayList.json']
        >
      }
    },

    /**
     * 接口名：【报表】账户概览：宝贝分页列表
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6752&itf=79817
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/api/material/report/findItemPage.json': (
      req?: Models['GET/api/material/report/findItemPage.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/material/report/findItemPage.json',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/api/material/report/findItemPage.json']>
      } else {
        const action = RequestAction['GET/api/material/report/findItemPage.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<
          ResponseTypes['GET/api/material/report/findItemPage.json']
        >
      }
    },

    /**
     * 接口名：【报表】双十一活动报表-消费者触达
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6752&itf=82974
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/api/activity/report/consumerReach.json': (
      req?: Models['GET/api/activity/report/consumerReach.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/activity/report/consumerReach.json',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/api/activity/report/consumerReach.json']>
      } else {
        const action = RequestAction['GET/api/activity/report/consumerReach.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<
          ResponseTypes['GET/api/activity/report/consumerReach.json']
        >
      }
    },

    /**
     * 接口名：【报表】账户分时列表
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7005&itf=69611
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/api/account/report/exportHourList.json': (
      req?: Models['GET/api/account/report/exportHourList.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/account/report/exportHourList.json',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/api/account/report/exportHourList.json']>
      } else {
        const action = RequestAction['GET/api/account/report/exportHourList.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<
          ResponseTypes['GET/api/account/report/exportHourList.json']
        >
      }
    },

    /**
     * 接口名：【报表】账户整体分日列表
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7005&itf=69612
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/api/account/report/exportDayList.json': (
      req?: Models['GET/api/account/report/exportDayList.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/account/report/exportDayList.json',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/api/account/report/exportDayList.json']>
      } else {
        const action = RequestAction['GET/api/account/report/exportDayList.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<
          ResponseTypes['GET/api/account/report/exportDayList.json']
        >
      }
    },

    /**
     * 接口名：【 报表】计划报表下载
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7005&itf=69614
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/api/campaign/report/exportCampaign.json': (
      req?: Models['GET/api/campaign/report/exportCampaign.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/campaign/report/exportCampaign.json',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/api/campaign/report/exportCampaign.json']>
      } else {
        const action = RequestAction['GET/api/campaign/report/exportCampaign.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<
          ResponseTypes['GET/api/campaign/report/exportCampaign.json']
        >
      }
    },

    /**
     * 接口名：【报表】单个计划报表： 列表
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7005&itf=69615
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/api/campaign/report/exportDayOrHourList.json': (
      req?: Models['GET/api/campaign/report/exportDayOrHourList.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/campaign/report/exportDayOrHourList.json',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/api/campaign/report/exportDayOrHourList.json']>
      } else {
        const action = RequestAction['GET/api/campaign/report/exportDayOrHourList.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<
          ResponseTypes['GET/api/campaign/report/exportDayOrHourList.json']
        >
      }
    },

    /**
     * 接口名：【报表】单个计划报表：汇总
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7005&itf=69616
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/api/campaign/report/exportDayOrHourSum.json': (
      req?: Models['GET/api/campaign/report/exportDayOrHourSum.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/campaign/report/exportDayOrHourSum.json',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/api/campaign/report/exportDayOrHourSum.json']>
      } else {
        const action = RequestAction['GET/api/campaign/report/exportDayOrHourSum.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<
          ResponseTypes['GET/api/campaign/report/exportDayOrHourSum.json']
        >
      }
    },

    /**
     * 接口名：【报表】单元报表下载
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7005&itf=69617
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/api/adgroup/report/exportAdgroup.json': (
      req?: Models['GET/api/adgroup/report/exportAdgroup.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/adgroup/report/exportAdgroup.json',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/api/adgroup/report/exportAdgroup.json']>
      } else {
        const action = RequestAction['GET/api/adgroup/report/exportAdgroup.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<
          ResponseTypes['GET/api/adgroup/report/exportAdgroup.json']
        >
      }
    },

    /**
     * 接口名：【报表】单个单元报表： 列表
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7005&itf=69618
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/api/adgroup/report/exportDayOrHourList.json': (
      req?: Models['GET/api/adgroup/report/exportDayOrHourList.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/adgroup/report/exportDayOrHourList.json',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/api/adgroup/report/exportDayOrHourList.json']>
      } else {
        const action = RequestAction['GET/api/adgroup/report/exportDayOrHourList.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<
          ResponseTypes['GET/api/adgroup/report/exportDayOrHourList.json']
        >
      }
    },

    /**
     * 接口名：【报表】单个单元报表：汇总
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7005&itf=69619
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/api/adgroup/report/exportDayOrHourSum.json': (
      req?: Models['GET/api/adgroup/report/exportDayOrHourSum.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/adgroup/report/exportDayOrHourSum.json',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/api/adgroup/report/exportDayOrHourSum.json']>
      } else {
        const action = RequestAction['GET/api/adgroup/report/exportDayOrHourSum.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<
          ResponseTypes['GET/api/adgroup/report/exportDayOrHourSum.json']
        >
      }
    },

    /**
     * 接口名：【报表】创意下载
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7005&itf=69620
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/api/creative/report/exportCreative.json': (
      req?: Models['GET/api/creative/report/exportCreative.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/creative/report/exportCreative.json',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/api/creative/report/exportCreative.json']>
      } else {
        const action = RequestAction['GET/api/creative/report/exportCreative.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<
          ResponseTypes['GET/api/creative/report/exportCreative.json']
        >
      }
    },

    /**
     * 接口名：【报表】单个创意报表： 列表
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7005&itf=69622
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/api/creative/report/exportDayOrHourList.json': (
      req?: Models['GET/api/creative/report/exportDayOrHourList.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/creative/report/exportDayOrHourList.json',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/api/creative/report/exportDayOrHourList.json']>
      } else {
        const action = RequestAction['GET/api/creative/report/exportDayOrHourList.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<
          ResponseTypes['GET/api/creative/report/exportDayOrHourList.json']
        >
      }
    },

    /**
     * 接口名：【报表】单个创意报表： 汇总
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7005&itf=69623
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/api/creative/report/exportDayOrHourSum.json': (
      req?: Models['GET/api/creative/report/exportDayOrHourSum.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/creative/report/exportDayOrHourSum.json',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/api/creative/report/exportDayOrHourSum.json']>
      } else {
        const action = RequestAction['GET/api/creative/report/exportDayOrHourSum.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<
          ResponseTypes['GET/api/creative/report/exportDayOrHourSum.json']
        >
      }
    },

    /**
     * 接口名：【报表】定向下载
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7005&itf=69624
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/api/crowd/report/exportCrowd.json': (
      req?: Models['GET/api/crowd/report/exportCrowd.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/crowd/report/exportCrowd.json',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/api/crowd/report/exportCrowd.json']>
      } else {
        const action = RequestAction['GET/api/crowd/report/exportCrowd.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<ResponseTypes['GET/api/crowd/report/exportCrowd.json']>
      }
    },

    /**
     * 接口名：【报表】单个定向报表： 列表
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7005&itf=69625
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/api/crowd/report/exportDayOrHourList.json': (
      req?: Models['GET/api/crowd/report/exportDayOrHourList.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/crowd/report/exportDayOrHourList.json',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/api/crowd/report/exportDayOrHourList.json']>
      } else {
        const action = RequestAction['GET/api/crowd/report/exportDayOrHourList.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<
          ResponseTypes['GET/api/crowd/report/exportDayOrHourList.json']
        >
      }
    },

    /**
     * 接口名：【报表】单个定向报表： 汇总
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7005&itf=69626
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/api/crowd/report/exportDayOrHourSum.json': (
      req?: Models['GET/api/crowd/report/exportDayOrHourSum.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/crowd/report/exportDayOrHourSum.json',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/api/crowd/report/exportDayOrHourSum.json']>
      } else {
        const action = RequestAction['GET/api/crowd/report/exportDayOrHourSum.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<
          ResponseTypes['GET/api/crowd/report/exportDayOrHourSum.json']
        >
      }
    },

    /**
     * 接口名：【报表】资源位下载
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7005&itf=69627
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/api/adzone/report/exportAdzone.json': (
      req?: Models['GET/api/adzone/report/exportAdzone.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/adzone/report/exportAdzone.json',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/api/adzone/report/exportAdzone.json']>
      } else {
        const action = RequestAction['GET/api/adzone/report/exportAdzone.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<ResponseTypes['GET/api/adzone/report/exportAdzone.json']>
      }
    },

    /**
     * 接口名：【报表】单个资源位报表： 列表
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7005&itf=69628
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/api/adzone/report/exportDayOrHourList.json': (
      req?: Models['GET/api/adzone/report/exportDayOrHourList.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/adzone/report/exportDayOrHourList.json',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/api/adzone/report/exportDayOrHourList.json']>
      } else {
        const action = RequestAction['GET/api/adzone/report/exportDayOrHourList.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<
          ResponseTypes['GET/api/adzone/report/exportDayOrHourList.json']
        >
      }
    },

    /**
     * 接口名：【报表】单个资源位报表： 汇总
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7005&itf=69629
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/api/adzone/report/exportDayOrHourSum.json': (
      req?: Models['GET/api/adzone/report/exportDayOrHourSum.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/adzone/report/exportDayOrHourSum.json',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/api/adzone/report/exportDayOrHourSum.json']>
      } else {
        const action = RequestAction['GET/api/adzone/report/exportDayOrHourSum.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<
          ResponseTypes['GET/api/adzone/report/exportDayOrHourSum.json']
        >
      }
    },

    /**
     * 接口名：【报表】账户概览：宝贝分页列表下载
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7005&itf=79824
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/api/material/report/exportItem.json': (
      req?: Models['GET/api/material/report/exportItem.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/material/report/exportItem.json',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/api/material/report/exportItem.json']>
      } else {
        const action = RequestAction['GET/api/material/report/exportItem.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<ResponseTypes['GET/api/material/report/exportItem.json']>
      }
    },

    /**
     * 接口名：【报表】账户概览：人群整体分日列表下载
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7005&itf=80230
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/api/account/report/exportCrowdDayList.json': (
      req?: Models['GET/api/account/report/exportCrowdDayList.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/account/report/exportCrowdDayList.json',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/api/account/report/exportCrowdDayList.json']>
      } else {
        const action = RequestAction['GET/api/account/report/exportCrowdDayList.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<
          ResponseTypes['GET/api/account/report/exportCrowdDayList.json']
        >
      }
    },

    /**
     * 接口名：查询站内信列表
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7037&itf=69919
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/api/message/findLetterList.json': (
      req?: Models['GET/api/message/findLetterList.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/message/findLetterList.json',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/api/message/findLetterList.json']>
      } else {
        const action = RequestAction['GET/api/message/findLetterList.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<ResponseTypes['GET/api/message/findLetterList.json']>
      }
    },

    /**
     * 接口名：查看站内信
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7037&itf=69920
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/api/message/getLetterDetail.json': (
      req?: Models['GET/api/message/getLetterDetail.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/message/getLetterDetail.json',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/api/message/getLetterDetail.json']>
      } else {
        const action = RequestAction['GET/api/message/getLetterDetail.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<ResponseTypes['GET/api/message/getLetterDetail.json']>
      }
    },

    /**
     * 接口名：批量已读站内信
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7037&itf=70115
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'POST/api/message/batchReadLetters.json': (
      req?: Models['POST/api/message/batchReadLetters.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/message/batchReadLetters.json',
          method: 'POST',
          params: req,
          extra,
        }) as Promise<ResponseTypes['POST/api/message/batchReadLetters.json']>
      } else {
        const action = RequestAction['POST/api/message/batchReadLetters.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<ResponseTypes['POST/api/message/batchReadLetters.json']>
      }
    },

    /**
     * 接口名：消费者汇总卡片
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7107&itf=70493
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/api/report/consumer/findSummary.json': (
      req?: Models['GET/api/report/consumer/findSummary.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/report/consumer/findSummary.json',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/api/report/consumer/findSummary.json']>
      } else {
        const action = RequestAction['GET/api/report/consumer/findSummary.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<ResponseTypes['GET/api/report/consumer/findSummary.json']>
      }
    },

    /**
     * 接口名：消费者流转
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7107&itf=70497
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/api/report/consumer/findConsumerCirculation.json': (
      req?: Models['GET/api/report/consumer/findConsumerCirculation.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/report/consumer/findConsumerCirculation.json',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/api/report/consumer/findConsumerCirculation.json']>
      } else {
        const action = RequestAction['GET/api/report/consumer/findConsumerCirculation.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<
          ResponseTypes['GET/api/report/consumer/findConsumerCirculation.json']
        >
      }
    },

    /**
     * 接口名：粉丝汇总卡片
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7167&itf=70935
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/api/report/fans/findSummary.json': (
      req?: Models['GET/api/report/fans/findSummary.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/report/fans/findSummary.json',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/api/report/fans/findSummary.json']>
      } else {
        const action = RequestAction['GET/api/report/fans/findSummary.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<ResponseTypes['GET/api/report/fans/findSummary.json']>
      }
    },

    /**
     * 接口名：粉丝流转
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7167&itf=70962
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/api/report/fans/findCirculation.json': (
      req?: Models['GET/api/report/fans/findCirculation.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/report/fans/findCirculation.json',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/api/report/fans/findCirculation.json']>
      } else {
        const action = RequestAction['GET/api/report/fans/findCirculation.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<ResponseTypes['GET/api/report/fans/findCirculation.json']>
      }
    },

    /**
     * 接口名：查询直钻迁移计划
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7473&itf=73258
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/api/campaign/findTransferPage.json': (
      req?: Models['GET/api/campaign/findTransferPage.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/campaign/findTransferPage.json',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/api/campaign/findTransferPage.json']>
      } else {
        const action = RequestAction['GET/api/campaign/findTransferPage.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<ResponseTypes['GET/api/campaign/findTransferPage.json']>
      }
    },

    /**
     * 接口名：迁移完成
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7473&itf=73370
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'POST/api/campaign/transfer.json': (
      req?: Models['POST/api/campaign/transfer.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/campaign/transfer.json',
          method: 'POST',
          params: req,
          extra,
        }) as Promise<ResponseTypes['POST/api/campaign/transfer.json']>
      } else {
        const action = RequestAction['POST/api/campaign/transfer.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<ResponseTypes['POST/api/campaign/transfer.json']>
      }
    },

    /**
     * 接口名：活动整体分日汇总
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7723&itf=75133
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/api/activity/report/findDaySum.json': (
      req?: Models['GET/api/activity/report/findDaySum.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/activity/report/findDaySum.json',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/api/activity/report/findDaySum.json']>
      } else {
        const action = RequestAction['GET/api/activity/report/findDaySum.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<ResponseTypes['GET/api/activity/report/findDaySum.json']>
      }
    },

    /**
     * 接口名：活动整体分日列表
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7723&itf=75150
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/api/activity/report/findDayList.json': (
      req?: Models['GET/api/activity/report/findDayList.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/activity/report/findDayList.json',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/api/activity/report/findDayList.json']>
      } else {
        const action = RequestAction['GET/api/activity/report/findDayList.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<ResponseTypes['GET/api/activity/report/findDayList.json']>
      }
    },

    /**
     * 接口名：活动人群整体分日汇总
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7723&itf=75151
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/api/activity/report/findCrowdDaySum.json': (
      req?: Models['GET/api/activity/report/findCrowdDaySum.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/activity/report/findCrowdDaySum.json',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/api/activity/report/findCrowdDaySum.json']>
      } else {
        const action = RequestAction['GET/api/activity/report/findCrowdDaySum.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<
          ResponseTypes['GET/api/activity/report/findCrowdDaySum.json']
        >
      }
    },

    /**
     * 接口名：活动人群整体分日报表
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7723&itf=75152
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/api/activity/report/findCrowdDayList.json': (
      req?: Models['GET/api/activity/report/findCrowdDayList.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/activity/report/findCrowdDayList.json',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/api/activity/report/findCrowdDayList.json']>
      } else {
        const action = RequestAction['GET/api/activity/report/findCrowdDayList.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<
          ResponseTypes['GET/api/activity/report/findCrowdDayList.json']
        >
      }
    },

    /**
     * 接口名：活动宝贝分页列表
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7723&itf=75153
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/api/activity/report/findItemPage.json': (
      req?: Models['GET/api/activity/report/findItemPage.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/activity/report/findItemPage.json',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/api/activity/report/findItemPage.json']>
      } else {
        const action = RequestAction['GET/api/activity/report/findItemPage.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<
          ResponseTypes['GET/api/activity/report/findItemPage.json']
        >
      }
    },

    /**
     * 接口名：活动整体分日列表下载
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7723&itf=75164
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/api/activity/report/exportDayList.json': (
      req?: Models['GET/api/activity/report/exportDayList.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/activity/report/exportDayList.json',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/api/activity/report/exportDayList.json']>
      } else {
        const action = RequestAction['GET/api/activity/report/exportDayList.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<
          ResponseTypes['GET/api/activity/report/exportDayList.json']
        >
      }
    },

    /**
     * 接口名：活动人群整体分日报表下载
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7723&itf=75165
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/api/activity/report/exportCrowdDayList.json': (
      req?: Models['GET/api/activity/report/exportCrowdDayList.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/activity/report/exportCrowdDayList.json',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/api/activity/report/exportCrowdDayList.json']>
      } else {
        const action = RequestAction['GET/api/activity/report/exportCrowdDayList.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<
          ResponseTypes['GET/api/activity/report/exportCrowdDayList.json']
        >
      }
    },

    /**
     * 接口名：活动宝贝列表下载
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7723&itf=75166
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/api/activity/report/exportItem.json': (
      req?: Models['GET/api/activity/report/exportItem.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/activity/report/exportItem.json',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/api/activity/report/exportItem.json']>
      } else {
        const action = RequestAction['GET/api/activity/report/exportItem.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<ResponseTypes['GET/api/activity/report/exportItem.json']>
      }
    },

    /**
     * 接口名：618活动接口迁移到日常接口的map
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7723&itf=79825
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/map': (req?: Models['GET/map']['Req'], extra?: {type?: 'normal' | 'redux'}) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/map',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/map']>
      } else {
        const action = RequestAction['GET/map'](req)
        return dispatchAction(action, rapperFetch) as Promise<ResponseTypes['GET/map']>
      }
    },

    /**
     * 接口名：结案-计划投放效果
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7789&itf=75586
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/api/report/case/findCampaignDaySum.json': (
      req?: Models['GET/api/report/case/findCampaignDaySum.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/report/case/findCampaignDaySum.json',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/api/report/case/findCampaignDaySum.json']>
      } else {
        const action = RequestAction['GET/api/report/case/findCampaignDaySum.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<
          ResponseTypes['GET/api/report/case/findCampaignDaySum.json']
        >
      }
    },

    /**
     * 接口名：结案-商品明细分析
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7789&itf=75587
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/api/report/case/findItemSumList.json': (
      req?: Models['GET/api/report/case/findItemSumList.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/report/case/findItemSumList.json',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/api/report/case/findItemSumList.json']>
      } else {
        const action = RequestAction['GET/api/report/case/findItemSumList.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<ResponseTypes['GET/api/report/case/findItemSumList.json']>
      }
    },

    /**
     * 接口名：结案-商品整体趋势
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7789&itf=75588
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/api/report/case/findItemTrendDayList.json': (
      req?: Models['GET/api/report/case/findItemTrendDayList.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/report/case/findItemTrendDayList.json',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/api/report/case/findItemTrendDayList.json']>
      } else {
        const action = RequestAction['GET/api/report/case/findItemTrendDayList.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<
          ResponseTypes['GET/api/report/case/findItemTrendDayList.json']
        >
      }
    },

    /**
     * 接口名：【已有接口】查询新品计划列表 /api/campaign/findList.json
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7789&itf=75590
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/findList.json': (req?: Models['GET/findList.json']['Req'], extra?: {type?: 'normal' | 'redux'}) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: 'findList.json',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/findList.json']>
      } else {
        const action = RequestAction['GET/findList.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<ResponseTypes['GET/findList.json']>
      }
    },

    /**
     * 接口名：结案-查询商品对比曲线
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7789&itf=77755
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/api/report/case/findFeedShopItemAllListComp.json': (
      req?: Models['GET/api/report/case/findFeedShopItemAllListComp.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/report/case/findFeedShopItemAllListComp.json',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/api/report/case/findFeedShopItemAllListComp.json']>
      } else {
        const action = RequestAction['GET/api/report/case/findFeedShopItemAllListComp.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<
          ResponseTypes['GET/api/report/case/findFeedShopItemAllListComp.json']
        >
      }
    },

    /**
     * 接口名：查询计划绑定的定向列表
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7935&itf=76654
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/api/campaign/crowd/findList.json': (
      req?: Models['GET/api/campaign/crowd/findList.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/campaign/crowd/findList.json',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/api/campaign/crowd/findList.json']>
      } else {
        const action = RequestAction['GET/api/campaign/crowd/findList.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<ResponseTypes['GET/api/campaign/crowd/findList.json']>
      }
    },

    /**
     * 接口名：修改计划绑定定向
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7935&itf=76656
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'PUT/api/campaign/crowd/modify.json': (
      req?: Models['PUT/api/campaign/crowd/modify.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/campaign/crowd/modify.json',
          method: 'PUT',
          params: req,
          extra,
        }) as Promise<ResponseTypes['PUT/api/campaign/crowd/modify.json']>
      } else {
        const action = RequestAction['PUT/api/campaign/crowd/modify.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<ResponseTypes['PUT/api/campaign/crowd/modify.json']>
      }
    },

    /**
     * 接口名：一键创建推广计划单环
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7956&itf=76782
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'POST/api/solution/add.json': (
      req?: Models['POST/api/solution/add.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/solution/add.json',
          method: 'POST',
          params: req,
          extra,
        }) as Promise<ResponseTypes['POST/api/solution/add.json']>
      } else {
        const action = RequestAction['POST/api/solution/add.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<ResponseTypes['POST/api/solution/add.json']>
      }
    },

    /**
     * 接口名：分页获取商品列表
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7956&itf=70821
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/api/material/item/findPage.json': (
      req?: Models['GET/api/material/item/findPage.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/material/item/findPage.json',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/api/material/item/findPage.json']>
      } else {
        const action = RequestAction['GET/api/material/item/findPage.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<ResponseTypes['GET/api/material/item/findPage.json']>
      }
    },

    /**
     * 接口名：是否可使用一键推广
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7956&itf=77116
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/api/solution/allowPromotion.json': (
      req?: Models['GET/api/solution/allowPromotion.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/solution/allowPromotion.json',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/api/solution/allowPromotion.json']>
      } else {
        const action = RequestAction['GET/api/solution/allowPromotion.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<ResponseTypes['GET/api/solution/allowPromotion.json']>
      }
    },

    /**
     * 接口名：批量一键创建
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7956&itf=77594
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'POST/api/solution/batchAdd.json': (
      req?: Models['POST/api/solution/batchAdd.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/solution/batchAdd.json',
          method: 'POST',
          params: req,
          extra,
        }) as Promise<ResponseTypes['POST/api/solution/batchAdd.json']>
      } else {
        const action = RequestAction['POST/api/solution/batchAdd.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<ResponseTypes['POST/api/solution/batchAdd.json']>
      }
    },

    /**
     * 接口名：查询定向标签不分页
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=8120&itf=68423
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/api/target/findLabelList.json': (
      req?: Models['GET/api/target/findLabelList.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/target/findLabelList.json',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/api/target/findLabelList.json']>
      } else {
        const action = RequestAction['GET/api/target/findLabelList.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<ResponseTypes['GET/api/target/findLabelList.json']>
      }
    },

    /**
     * 接口名：查询类目精选的类目列表
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=8120&itf=78707
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/api/target/findSelectionCategoryList.json': (
      req?: Models['GET/api/target/findSelectionCategoryList.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/target/findSelectionCategoryList.json',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/api/target/findSelectionCategoryList.json']>
      } else {
        const action = RequestAction['GET/api/target/findSelectionCategoryList.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<
          ResponseTypes['GET/api/target/findSelectionCategoryList.json']
        >
      }
    },

    /**
     * 接口名：账户充值
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=8524&itf=67373
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/api/account/recharge.action': (
      req?: Models['GET/api/account/recharge.action']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/account/recharge.action',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/api/account/recharge.action']>
      } else {
        const action = RequestAction['GET/api/account/recharge.action'](req)
        return dispatchAction(action, rapperFetch) as Promise<ResponseTypes['GET/api/account/recharge.action']>
      }
    },

    /**
     * 接口名：获取账户详情
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=8524&itf=67468
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/api/account/getInfo.json': (
      req?: Models['GET/api/account/getInfo.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/account/getInfo.json',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/api/account/getInfo.json']>
      } else {
        const action = RequestAction['GET/api/account/getInfo.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<ResponseTypes['GET/api/account/getInfo.json']>
      }
    },

    /**
     * 接口名：【接口优化】新建单元
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=8524&itf=78321
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'POST/api/adgroup/batchAdd.json': (
      req?: Models['POST/api/adgroup/batchAdd.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/adgroup/batchAdd.json',
          method: 'POST',
          params: req,
          extra,
        }) as Promise<ResponseTypes['POST/api/adgroup/batchAdd.json']>
      } else {
        const action = RequestAction['POST/api/adgroup/batchAdd.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<ResponseTypes['POST/api/adgroup/batchAdd.json']>
      }
    },

    /**
     * 接口名：盘量接口(待定)
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=8524&itf=80936
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'POST/api/campaign/estimateContractPv.json': (
      req?: Models['POST/api/campaign/estimateContractPv.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/campaign/estimateContractPv.json',
          method: 'POST',
          params: req,
          extra,
        }) as Promise<ResponseTypes['POST/api/campaign/estimateContractPv.json']>
      } else {
        const action = RequestAction['POST/api/campaign/estimateContractPv.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<
          ResponseTypes['POST/api/campaign/estimateContractPv.json']
        >
      }
    },

    /**
     * 接口名：锁量接口
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=8524&itf=84599
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'POST/api/algotool/lockQuantity.json': (
      req?: Models['POST/api/algotool/lockQuantity.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/algotool/lockQuantity.json',
          method: 'POST',
          params: req,
          extra,
        }) as Promise<ResponseTypes['POST/api/algotool/lockQuantity.json']>
      } else {
        const action = RequestAction['POST/api/algotool/lockQuantity.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<ResponseTypes['POST/api/algotool/lockQuantity.json']>
      }
    },

    /**
     * 接口名：【管理】查询定向列表
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=8828&itf=68386
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/api/crowd/findPage.json': (
      req?: Models['GET/api/crowd/findPage.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/crowd/findPage.json',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/api/crowd/findPage.json']>
      } else {
        const action = RequestAction['GET/api/crowd/findPage.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<ResponseTypes['GET/api/crowd/findPage.json']>
      }
    },

    /**
     * 接口名：查询预算模拟器
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=8828&itf=83281
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'POST/api/algotool/getBudgetSimulator.json': (
      req?: Models['POST/api/algotool/getBudgetSimulator.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/algotool/getBudgetSimulator.json',
          method: 'POST',
          params: req,
          extra,
        }) as Promise<ResponseTypes['POST/api/algotool/getBudgetSimulator.json']>
      } else {
        const action = RequestAction['POST/api/algotool/getBudgetSimulator.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<
          ResponseTypes['POST/api/algotool/getBudgetSimulator.json']
        >
      }
    },

    /**
     * 接口名：新建推广计划
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=8828&itf=67209
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'POST/api/campaign/add.json': (
      req?: Models['POST/api/campaign/add.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/campaign/add.json',
          method: 'POST',
          params: req,
          extra,
        }) as Promise<ResponseTypes['POST/api/campaign/add.json']>
      } else {
        const action = RequestAction['POST/api/campaign/add.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<ResponseTypes['POST/api/campaign/add.json']>
      }
    },

    /**
     * 接口名：分页获取单元列表
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=8828&itf=67275
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/api/adgroup/findPage.json': (
      req?: Models['GET/api/adgroup/findPage.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/adgroup/findPage.json',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/api/adgroup/findPage.json']>
      } else {
        const action = RequestAction['GET/api/adgroup/findPage.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<ResponseTypes['GET/api/adgroup/findPage.json']>
      }
    },

    /**
     * 接口名：全量修改计划信息
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=8828&itf=67338
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'PUT/api/campaign/modEntire.json': (
      req?: Models['PUT/api/campaign/modEntire.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/campaign/modEntire.json',
          method: 'PUT',
          params: req,
          extra,
        }) as Promise<ResponseTypes['PUT/api/campaign/modEntire.json']>
      } else {
        const action = RequestAction['PUT/api/campaign/modEntire.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<ResponseTypes['PUT/api/campaign/modEntire.json']>
      }
    },

    /**
     * 接口名：智能人群探索
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=8828&itf=83321
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/api/algotool/probeInterest.json': (
      req?: Models['GET/api/algotool/probeInterest.json']['Req'],
      extra?: {type?: 'normal' | 'redux'}
    ) => {
      if (extra && extra.type === 'normal') {
        return rapperFetch({
          url: '/api/algotool/probeInterest.json',
          method: 'GET',
          params: req,
          extra,
        }) as Promise<ResponseTypes['GET/api/algotool/probeInterest.json']>
      } else {
        const action = RequestAction['GET/api/algotool/probeInterest.json'](req)
        return dispatchAction(action, rapperFetch) as Promise<ResponseTypes['GET/api/algotool/probeInterest.json']>
      }
    },
  }
}
