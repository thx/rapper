/* md5: fc378178b36890c13d3e276f23a64a13 */
/* Rap仓库id: 3601 */
/* eslint-disable */
/* tslint:disable */

/**
 * 本文件由 Rapper 同步 Rap 平台接口，自动生成，请勿修改
 * Rap仓库 地址: https://rap2.alibaba-inc.com/repository/editor?id=3601
 */

import { RequesterOption, getRapperRequest, IExtra } from './lib';

export interface IModels {
  /**
   * 接口名：查询服务详情
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3601&mod=8492&itf=80675
   */
  'GET/service/getServiceDetail.json': {
    Req: {
      /**
       * 请求属性示例
       */
      serviceId?: number;
    };
    Res: {
      data: {
        result: {
          /**
           * 服务商id
           */
          tpid: number;
          /**
           * 服务类型
           * 1.  直通车托管服务商
           * 2.  直通车优化工具
           * 3.  钻展托管服务商
           * 4. 超级推荐托管服务商
           */
          type: string;
          /**
           * 服务名称
           */
          name: string;
          /**
           * 服务描述
           */
          remark: string;
          /**
           * 服务图标url
           */
          iconList: string[];
          /**
           * 项目列表
           */
          serviceSkuList: {
            /**
             * sku名称
             */
            name: string;
            /**
             * FACE:面议  CASH:现金支付  COIN栗子 MIX混合支付
             */
            payType: string;
            /**
             * 现金价格
             */
            cashPriceYuan: number;
            /**
             * 栗子价格
             */
            coinPriceYuan: number;
            /**
             * 周期 DAY天 MONTH月
             */
            cycleType: string;
            /**
             * 起订周期
             */
            minNum: number;
            /**
             * 服务商id
             */
            tpid: number;
            /**
             * 服务id
             */
            serviceId: number;
            /**
             * sku图片
             */
            skuPic: string;
          }[];
          /**
           * 服务内容
           */
          serviceContent: string;
          /**
           * 服务id
           */
          id: string;
          /**
           * 服务规范
           */
          criteria: string;
          /**
           * 服务目标
           */
          effect: string;
          /**
           * 服务详情
           */
          serviceDetail: string;
          /**
           * 其他约定
           */
          otherItems: string;
          /**
           * 收费标准
           */
          payRoll: string;
          /**
           * 父场景id列表
           */
          sceneIds: any[];
          /**
           * 子场景id列表
           */
          subSceneIds: number[];
        };
      };
      msg: string;
      success: boolean;
    };
  };

  /**
   * 接口名：服务列表分页查询
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3601&mod=8492&itf=81178
   */
  'GET/service/listServicesByQuery.json': {
    Req: {
      query?: {
        /**
         * 页码
         */
        toPage?: number;
        /**
         * 每页规模
         */
        perPageSize?: number;
        /**
         * 服务名称
         */
        name?: string;
        /**
         * 服务状态
         * ON_SALE上架
         * NOT_SALE下架
         */
        status?: string;
        /**
         * 审核状态
         * DRAFT 草稿
         * CHECKING审核中
         * PASSED 通过
         * REFUSE 拒绝
         */
        auditStatus?: string;
      };
    };
    Res: {
      data: {
        result: {
          /**
           * 服务id
           */
          id: number;
          /**
           * 服务名称
           */
          name: string;
          /**
           * 服务主图url
           */
          icon: string;
          /**
           * 服务类型
           * 1.  直通车托管服务商
           * 2.  直通车优化工具
           * 3.  钻展托管服务商
           * 4. 超级推荐托管服务商
           */
          type: string;
          /**
           * 服务状态
           * ON_SALE上架
           * NOT_SALE下架
           */
          status: number;
          /**
           * 审核状态
           * CHECKING审核中
           * PASSED 通过
           * REFUSE 拒绝
           */
          auditStatus: string;
          /**
           * 服务类型名称
           */
          productName: string;
          /**
           * 服务状态名称
           */
          statusName: string;
          /**
           * 审核状态名称
           */
          auditStatusName: string;
          /**
           * 审核拒绝的原因
           */
          auditRefuseReason: string;
        }[];
        pageInfo: {
          /**
           * 当前页码
           */
          toPage: number;
          /**
           * 每页大小
           */
          perPageSize: string;
          /**
           * 总的记录数
           */
          itemTotal: string;
        };
      };
      msg: string;
      success: boolean;
    };
  };

  /**
   * 接口名：新增或编辑服务（下一步）
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3601&mod=8492&itf=81180
   */
  'POST/service/addOrUpdateService.json': {
    Req: {
      query?: {
        /**
         * 服务商id
         */
        tpid?: number;
        /**
         * 服务类型
         * 1.  直通车托管服务商
         * 2.  直通车优化工具
         * 3.  钻展托管服务商
         * 4. 超级推荐托管服务商
         */
        type?: string;
        /**
         * 服务名称
         */
        name?: string;
        /**
         * 服务描述
         */
        remark?: string;
        /**
         * 服务主图url
         */
        iconList?: any[];
        /**
         * 项目列表
         */
        serviceSkuList?: {
          /**
           * sku名称
           */
          name: string;
          /**
           * FACE:面议  CASH:现金支付  COIN栗子 MIX混合支付
           */
          payType: string;
          /**
           * 现金售价
           */
          cashPriceYuan: number;
          /**
           * 栗子售价
           */
          coinPriceYuan: string;
          /**
           * 周期 DAY天 MONTH月
           */
          cycleType: string;
          /**
           * 起订周期
           */
          minNum: number;
          /**
           * 服务商id
           */
          tpid: number;
          /**
           * sku图片url
           */
          skuPic: string;
        }[];
        /**
         * 服务内容
         */
        serviceContent?: string;
        /**
         * 服务id
         */
        id?: string;
        /**
         * 服务规范
         */
        criteria?: string;
        /**
         * 服务目标
         */
        effect?: string;
        /**
         * 服务详情
         */
        serviceDetail?: string;
        /**
         * 其他约定
         */
        otherItems?: string;
        /**
         * 收费标准
         */
        payRoll?: string;
        /**
         * 父场景id列表
         */
        sceneIds?: any[];
        /**
         * 子场景id列表
         */
        subSceneIds?: any[];
      };
    };
    Res: {
      data: {
        result: {
          id: number;
        };
      };
      msg: string;
      success: boolean;
    };
  };

  /**
   * 接口名：服务状态修改
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3601&mod=8492&itf=81370
   */
  'POST/service/updateServiceStatus.json': {
    Req: {
      /**
       * 服务id
       */
      serviceId?: number;
      /**
       * NOT_SALE下架
       * DELETE 删除
       */
      status?: string;
    };
    Res: {
      data: {
        result: number;
      };
      msg: string;
      success: boolean;
    };
  };

  /**
   * 接口名：上传图片
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3601&mod=8492&itf=81372
   */
  'POST/service/uploadPic.json': {
    Req: {
      /**
       * 图片
       */
      pic?: {};
      /**
       * 1-服务主图
       * 2-项目主图
       */
      type?: string;
    };
    Res: {
      data: {
        /**
         * 图片url
         */
        result: {
          url: string;
        };
      };
      msg: string;
      success: boolean;
    };
  };

  /**
   * 接口名：批量上传图片
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3601&mod=8492&itf=86771
   */
  'POST/service/uploadPicBatch.json': {
    Req: {
      /**
       * 图片
       */
      pic?: any[];
      /**
       * 1-服务主图
       * 2-项目主图
       */
      type?: string;
    };
    Res: {
      data: {
        /**
         * 图片url
         */
        result: {
          url: string;
        };
      };
      msg: string;
      success: boolean;
    };
  };

  /**
   * 接口名：场景元数据
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3601&mod=8492&itf=81375
   */
  'GET/service/getSceneMetaInfo.json': {
    Req: {};
    Res: {
      data: {
        result: {
          /**
           * 场景id
           */
          id: string;
          /**
           * 父场景id
           */
          parentId: string;
          /**
           * 场景名称
           */
          name: string;
          /**
           * 子场景列表
           */
          children: {
            '': string;
          }[];
        }[];
      };
      msg: string;
      success: boolean;
    };
  };

  /**
   * 接口名：服务提交审核
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3601&mod=8492&itf=81771
   */
  'GET/service/submitServiceToCheck.json': {
    Req: {
      /**
       * 服务id
       */
      serviceId?: number;
    };
    Res: {
      data: {
        result: boolean;
      };
      msg: string;
      success: boolean;
    };
  };

  /**
   * 接口名：撤回服务审核
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3601&mod=8492&itf=81946
   */
  'POST/service/withdrawServiceCheck.json': {
    Req: {
      /**
       * 服务id
       */
      serviceId?: number;
    };
    Res: {
      data: {
        result: boolean;
      };
      msg: string;
      success: boolean;
    };
  };

  /**
   * 接口名：保存服务
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3601&mod=8492&itf=82682
   */
  'POST/service/saveService.json': {
    Req: {
      query?: {
        tpid?: number;
        type?: string;
        name?: string;
        remark?: string;
        iconList?: any[];
        serviceSkuList?: {
          name: string;
          payType: string;
          cashPriceYuan: number;
          coinPriceYuan: string;
          cycleType: string;
          minNum: number;
          tpid: number;
          skuPic: string;
        }[];
        serviceContent?: string;
        id?: string;
        criteria?: string;
        effect?: string;
        serviceDetail?: string;
        otherItems?: string;
        payRoll?: string;
        sceneIds?: any[];
        subSceneIds?: any[];
      };
    };
    Res: {
      data: {
        result: number;
      };
      msg: string;
      success: boolean;
    };
  };

  /**
   * 接口名：公司信息完整性校验
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3601&mod=8492&itf=85741
   */
  'GET/service/checkCompanyInfo.json': {
    Req: {};
    Res: {
      data: {
        result: boolean;
      };
      msg: string;
      success: boolean;
    };
  };

  /**
   * 接口名：查询订单列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3601&mod=8555&itf=81311
   */
  'GET/agreement/findAgreementList.json_todo': {
    Req: {
      query?: {
        toPage?: number;
        perPageSize?: number;
        status?: string;
        /**
         * 服务结束的开始时间
         */
        createtimeStart?: string;
        /**
         * 服务结束的结束时间
         */
        createtimeEnd?: string;
        /**
         * 客户妈妈id
         */
        memberId?: number;
        /**
         * 旺旺
         */
        custIm?: string;
        /**
         * 订单编号
         */
        id?: number;
        /**
         * 来源
         * ORDER-营销拍档
         * INPUT-线下报备
         */
        fromSource?: string;
        /**
         * 服务名称
         */
        serviceName?: string;
      };
    };
    Res: {
      data: {
        pageInfo: {
          itemTotal: number;
          perPageSize: number;
          toPage: number;
        };
        result: {
          createtime: string;
          custIm: string;
          id: number;
          memberId: null;
          /**
           * 开始时间
           */
          serviceEndtime: string;
          /**
           * 结束时间
           */
          serviceStartTime: null;
          status: string;
          totalFee: number;
          tpCompanyId: number;
          tpIm: null;
          /**
           * 服务商名称
           */
          tpname: string;
          statusName: string;
          serviceName: string;
          /**
           * 协议来源，HIS表示历史订单
           */
          fromSource: string;
        }[];
      };
      success: boolean;
    };
  };

  /**
   * 接口名：根据id获取订单详情
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3601&mod=8555&itf=81313
   */
  'GET/agreement/getAgreementById.json': {
    Req: {
      /**
       * 协议id
       */
      id?: number;
    };
    Res: {
      data: {
        result: {
          content: string;
          criteria: string;
          custIm: string;
          effect: string;
          id: number;
          memberId: null;
          otherItems: null;
          payRoll: string;
          serviceEndtime: string;
          serviceStartTime: string;
          totalFee: number;
          tpname: string;
          /**
           * 合同列表
           */
          contractUrlList: string;
        };
      };
      success: boolean;
    };
  };

  /**
   * 接口名：服务商新建订单
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3601&mod=8555&itf=81346
   */
  'POST/agreement/tpAddAgreement.json': {
    Req: {
      query?: {
        /**
         * 客户旺旺
         */
        custIm?: string;
        /**
         * 服务开始时间
         */
        serviceStartTimeStr?: string;
        /**
         * 服务结束时间
         */
        serviceEndTimeStr?: string;
        /**
         * 总费用
         */
        totalFee?: string;
        /**
         * 1直通车 3 钻展 4超级推荐
         */
        typeList?: string;
        /**
         * 描述
         */
        remarks?: string;
        /**
         * 合同的图片列表
         */
        contractUrlList?: any[];
        /**
         * 名称
         */
        serviceName?: string;
      };
    };
    Res: {};
  };

  /**
   * 接口名：发起签约
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3601&mod=8555&itf=81351
   */
  'POST/agreement/signAgreement.json': {
    Req: {
      query?: {
        /**
         * 订单id
         */
        id?: number;
        /**
         * 总价
         */
        totalFee?: string;
        /**
         * 内容
         */
        content?: string;
        /**
         * 规范
         */
        criteria?: string;
        /**
         * 目标
         */
        effect?: string;
        /**
         * 其他说明
         */
        otherItems?: string;
        /**
         * 标准
         */
        payRoll?: string;
      };
    };
    Res: {
      data: string;
      success: string;
      msg: string;
    };
  };

  /**
   * 接口名：开始服务
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3601&mod=8555&itf=82109
   */
  'GET/agreement/beginAgreement.json': {
    Req: {
      /**
       * 订单id
       */
      id?: number;
    };
    Res: {
      data: {};
      success: boolean;
      msg: string;
    };
  };

  /**
   * 接口名：恢复协议
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3601&mod=8555&itf=82110
   */
  'GET/agreement/recoverAgreement.json': {
    Req: {
      /**
       * 订单id
       */
      id?: number;
    };
    Res: {
      data: {};
      success: boolean;
      msg: string;
    };
  };

  /**
   * 接口名：终止协议
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3601&mod=8555&itf=82275
   */
  'GET/agreement/terminateAgreement.json': {
    Req: {
      /**
       * 订单id
       */
      id?: number;
    };
    Res: {
      data: {};
      success: boolean;
      msg: string;
    };
  };

  /**
   * 接口名：暂停协议
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3601&mod=8555&itf=83123
   */
  'GET/agreement/pauseAgreement.json': {
    Req: {
      /**
       * 订单id
       */
      id?: number;
    };
    Res: {
      data: {};
      success: boolean;
      msg: string;
    };
  };

  /**
   * 接口名：查询订单操作记录列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3601&mod=8555&itf=85471
   */
  'GET/agreement/listAgreementUpdateRecords.json': {
    Req: {
      query?: {
        /**
         * 订单id
         */
        agreementid?: number;
        /**
         * 页码
         */
        toPage?: number;
        /**
         * 每页大小
         */
        perPageSize?: number;
      };
    };
    Res: {
      data: {
        pageInfo: {
          itemTotal: number;
          perPageSize: number;
          toPage: number;
        };
        result: {
          /**
           * 更新时间
           */
          updateTime: {};
          /**
           * 操作者旺旺
           */
          actorIm: string;
          /**
           * 状态
           */
          agreementStatusEnum: string;
          /**
           * 原因类型
           */
          reasonName: string;
          /**
           * 原因说明
           */
          reasonDescription: string;
          /**
           * 状态
           */
          agreementStatusName: string;
        }[];
      };
      success: boolean;
    };
  };

  /**
   * 接口名：更新服务商基础信息
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3601&mod=8556&itf=81171
   */
  'GET/company/updateCompany.json': {
    Req: {
      /**
       * 请求属性示例
       */
      query?: {
        /**
         * 服务商id
         */
        id?: string;
        /**
         * 擅长，逗号分割的字符串
         */
        domain?: string;
        companyContactList?: {
          /**
           * 姓名
           */
          trueName: string;
          /**
           * 邮箱
           */
          email: string;
          /**
           * 手机号
           */
          phone: string;
          /**
           * 旺旺
           */
          wangWang: string;
          /**
           * 钉钉
           */
          ding: string;
          /**
           * 服务商id
           */
          companyCoreId: number;
          /**
           * 职位
           */
          job: string;
        }[];
        /**
         * 服务商主图，可以支持多个
         */
        mainPicList?: any[];
        /**
         * 公司简介
         */
        description?: string;
        /**
         * 所在地
         */
        area?: string;
        /**
         * 详细地址
         */
        location?: string;
      };
    };
    Res: {
      data: {};
      success: boolean;
      msg: string;
    };
  };

  /**
   * 接口名：新增操作员
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3601&mod=8556&itf=81225
   */
  'POST/operator/addOperator.json': {
    Req: {
      query?: {
        /**
         * 姓名
         */
        name?: string;
        /**
         * 旺旺
         */
        im?: string;
        /**
         * 手机号
         */
        phone?: string;
        /**
         * 邮箱
         */
        email?: string;
        /**
         * 角色列表
         */
        roleenumlist?: any[];
        /**
         * 代理商账户列表
         */
        delegateaccountidlist?: any[];
      };
    };
    Res: {
      data: {};
      msg: string;
      success: boolean;
    };
  };

  /**
   * 接口名：更新操作员
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3601&mod=8556&itf=81227
   */
  'POST/operator/updateOperator.json': {
    Req: {
      query?: {
        /**
         * 姓名
         */
        name?: string;
        /**
         * 旺旺
         */
        im?: string;
        /**
         * 手机号
         */
        phone?: string;
        /**
         * 邮箱
         */
        email?: string;
        /**
         * 角色列表
         */
        roleenumlist?: any[];
        /**
         * 代理商账户列表
         */
        delegateaccountidlist?: any[];
        /**
         * 操作员id
         */
        id?: number;
      };
    };
    Res: {
      data: {
        result: boolean;
      };
      msg: string;
      success: boolean;
    };
  };

  /**
   * 接口名：删除操作员
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3601&mod=8556&itf=81228
   */
  'GET/operator/deleteOperator.json': {
    Req: {
      /**
       * 操作员id
       */
      id: number;
    };
    Res: {
      data: {};
      msg: string;
      success: boolean;
    };
  };

  /**
   * 接口名：根据id获取操作员详情
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3601&mod=8556&itf=81229
   */
  'GET/operator/getOperatorById.json': {
    Req: {
      /**
       * 操作员id
       */
      id: number;
    };
    Res: {
      data: {
        result: {
          alldelegateaccountidlist: null;
          alldelegatelist: null;
          available: boolean;
          delegateaccountidlist: number[];
          delegatelist: {
            defaultOperator: null;
            defaultOperatorId: null;
            id: number;
            name: string;
          }[];
          email: string;
          id: number;
          im: string;
          name: string;
          phone: string;
          roleenumlist: string[];
          status: string;
          tpcompanyid: number;
          userid: number;
        };
      };
      success: boolean;
    };
  };

  /**
   * 接口名：分页查询操作员列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3601&mod=8556&itf=81230
   */
  'GET/operator/findOperatorList.json': {
    Req: {
      query?: {
        /**
         * 状态，VALID有效，INVALID无效
         */
        status?: string;
        /**
         * 姓名
         */
        name?: string;
        /**
         * 旺旺
         */
        im?: string;
        /**
         * 页码
         */
        toPage?: string;
        /**
         * 每页显示多少条
         */
        pageSize?: string;
      };
    };
    Res: {
      data: {
        pageInfo: {
          itemTotal: number;
          perPageSize: number;
          toPage: number;
        };
        result: {
          alldelegateaccountidlist: null;
          alldelegatelist: null;
          available: boolean;
          companyCreator: boolean;
          createtime: string;
          delegateaccountidlist: number[];
          delegatelist: {
            defaultOperator: null;
            defaultOperatorId: null;
            id: number;
            name: string;
            operDTOList: null;
            parentAccountId: number;
            tpid: null;
          }[];
          email: string;
          id: number;
          im: string;
          name: string;
          phone: string;
          product: null;
          productName: null;
          protoConfirm: number;
          roleenumlist: string[];
          status: string;
          tpcompanyid: number;
          userid: number;
        }[];
      };
      success: boolean;
    };
  };

  /**
   * 接口名：分页查询代理商子账户（客户分组）
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3601&mod=8556&itf=81241
   */
  'GET/delegate/findDelegateList.json': {
    Req: {
      query?: {
        /**
         * 页码
         */
        toPage?: number;
        /**
         * 每页多少条
         */
        perPageSize?: number;
        /**
         * 代理商账户名称
         */
        tpDelegateName?: string;
        /**
         * 默认操作员旺旺
         */
        defaultOperatorIm?: string;
      };
    };
    Res: {
      data: {
        pageInfo: {
          itemTotal: number;
          perPageSize: number;
          toPage: number;
        };
        result: {
          defaultOperator: {
            companyCreator: boolean;
            id: number;
            /**
             * 默认操作员旺旺
             */
            im: string;
            /**
             * 默认操作员姓名
             */
            name: string;
            tpcompanyid: number;
            /**
             * 默认操作员userid
             */
            userid: number;
          };
          /**
           * 代理商账户id
           */
          id: number;
          /**
           * 代理商账户名称
           */
          name: string;
          operDTOList: null;
          /**
           * 为空时表示主账户，否则表示一级子账户
           */
          parentAccountId: number;
          tpid: null;
          /**
           * 该账号代理的客户数
           */
          custNums: number;
        }[];
      };
      success: boolean;
    };
  };

  /**
   * 接口名：删除子账户
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3601&mod=8556&itf=81242
   */
  'GET/delegate/deleteDelegateById.json': {
    Req: {
      /**
       * 代理商子账户id
       */
      id?: number;
    };
    Res: {
      data: {
        result: string;
      };
      msg: string;
      success: boolean;
    };
  };

  /**
   * 接口名：新增代理商子账户
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3601&mod=8556&itf=81243
   */
  'GET/delegate/addDelegate.json': {
    Req: {
      query?: {
        /**
         * 代理商子账户名称
         */
        name?: string;
        /**
         * 父账户id
         */
        parentAccountId?: number;
        defaultOperatorId?: number;
      };
    };
    Res: {
      data: {};
      msg: string;
      success: boolean;
    };
  };

  /**
   * 接口名：新增岗位（角色）
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3601&mod=8556&itf=81344
   */
  'GET/role/addRole.json': {
    Req: {
      query?: {
        name?: string;
        featureIdList?: string;
        tpid?: string;
      };
    };
    Res: {};
  };

  /**
   * 接口名：查询岗位列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3601&mod=8556&itf=81345
   */
  'GET/role/findRoleList.json': {
    Req: {
      query?: {
        tpid?: string;
        toPage?: string;
        perPageSize?: string;
      };
    };
    Res: {
      data: {
        result: {
          name: null;
          id: number;
          description: string;
        }[];
        pageInfo: {
          toPage: number;
          perPageSize: string;
          itemTotal: string;
        };
      };
      msg: string;
      success: boolean;
    };
  };

  /**
   * 接口名：查询服务商基本信息
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3601&mod=8556&itf=81353
   */
  'GET/company/getCompanyById.json': {
    Req: {
      /**
       * 服务商id
       */
      userId?: number;
    };
    Res: {
      data: {
        result: {
          name: string;
          description: string;
          im: string;
          goodAtList: any[];
          location: number;
          area: string;
          alipayAccount: string;
          companyContactList: {
            trueName: string;
            email: string;
            phone: string;
            wangWang: string;
            remark: string;
            job: string;
          }[];
          mainPicList: string[];
          starLevel: number;
          /**
           * MP表示营销拍档 PP表示实力拍档 SP表示卓越拍档
           */
          identityList: any[];
        };
      };
      success: boolean;
    };
  };

  /**
   * 接口名：分页查询现有客户
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3601&mod=8558&itf=81173
   */
  'GET/customer/findCustomerList.json': {
    Req: {
      /**
       * 请求属性示例
       */
      query?: {
        status?: string;
        /**
         * 服务商id，切换不同产品线时要传递
         */
        tpId?: number;
        memberId?: number;
        im?: string;
        /**
         * 页码
         */
        toPage?: number;
        /**
         * 每页显示多少条
         */
        perPageSize?: number;
        /**
         * 客户分组id
         */
        delegateAccountId?: string;
      };
    };
    Res: {
      data: {
        pageInfo: {
          itemTotal: number;
          perPageSize: number;
          toPage: number;
        };
        result: {
          allowReadTime: null;
          allowread: null;
          /**
           * 地区
           */
          area: string;
          /**
           * 类目
           */
          category: string;
          /**
           * 联系人
           */
          contact: null;
          /**
           * 是否允许读写伪登录
           */
          custAllowDelegate: number;
          /**
           * 是否允许读写伪登录dmp
           */
          custAllowDmp: number;
          /**
           * 类目
           */
          custcat: string;
          /**
           * 客户id
           */
          custid: number;
          custstatusenum: null;
          /**
           * 代理商账户id
           */
          delegateid: number;
          /**
           * 代理商账户名称
           */
          delegatename: string;
          /**
           * userid
           */
          extNumId: number;
          /**
           * 客户信息主键id，获取客户详情需要根据该接口
           */
          id: number;
          /**
           * 妈妈id
           */
          memberId: null;
          /**
           * 操作员旺旺
           */
          operatorim: string;
          /**
           * 电话
           */
          phone: null;
          /**
           * 销售
           */
          salesim: null;
          /**
           * 店铺名称
           */
          shopname: string;
          /**
           * 状态
           */
          status: string;
          tpcompanyid: number;
          tpcompanyname: string;
          /**
           * 客户信息主键id，获取客户详情需要根据该接口
           */
          tpcustid: number;
          /**
           * 旺旺
           */
          wangwang: string;
        }[];
      };
      success: boolean;
      msg: string;
    };
  };

  /**
   * 接口名：分页查询公海客户
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3601&mod=8558&itf=81248
   */
  'GET/customer/findPotentialCustomerList.json': {
    Req: {
      /**
       * 请求属性示例
       */
      query?: {
        /**
         * 逗号分割
         */
        im?: string;
        /**
         * 页码
         */
        toPage?: number;
        /**
         * 每页显示多少条
         */
        perPageSize?: number;
      };
    };
    Res: {
      data: {
        pageInfo: {
          itemTotal: number;
          perPageSize: number;
          toPage: number;
        };
        result: {
          allowReadTime: null;
          allowread: null;
          /**
           * 地区
           */
          area: string;
          /**
           * 类目
           */
          category: string;
          /**
           * 联系人
           */
          contact: null;
          /**
           * 是否允许读写伪登录
           */
          custAllowDelegate: number;
          /**
           * 是否允许读写伪登录dmp
           */
          custAllowDmp: number;
          /**
           * 类目
           */
          custcat: string;
          /**
           * 客户id
           */
          custid: number;
          custstatusenum: null;
          /**
           * 代理商账户id
           */
          delegateid: number;
          /**
           * 代理商账户名称
           */
          delegatename: string;
          /**
           * userid
           */
          extNumId: number;
          /**
           * 客户信息主键id，获取客户详情需要根据该接口
           */
          id: number;
          /**
           * 妈妈id
           */
          memberId: null;
          /**
           * 操作员旺旺
           */
          operatorim: string;
          /**
           * 电话
           */
          phone: null;
          /**
           * 销售
           */
          salesim: null;
          /**
           * 店铺名称
           */
          shopname: string;
          /**
           * 状态
           */
          status: string;
          tpcompanyid: number;
          tpcompanyname: string;
          /**
           * 客户信息主键id，获取客户详情需要根据该接口
           */
          tpcustid: number;
          /**
           * 旺旺
           */
          wangwang: string;
        }[];
      };
      success: boolean;
    };
  };

  /**
   * 接口名：分页查询现有客户账户
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3601&mod=8558&itf=83420
   */
  'GET/customer/findCustomerAccountList.json': {
    Req: {
      /**
       * 请求属性示例
       */
      query?: {
        status?: string;
        /**
         * 服务商id，切换不同产品线时要传递
         */
        tpId?: number;
        memberId?: number;
        im?: string;
        /**
         * 页码
         */
        toPage?: number;
        /**
         * 每页显示多少条
         */
        perPageSize?: number;
      };
    };
    Res: {
      data: {
        pageInfo: {
          itemTotal: number;
          perPageSize: number;
          toPage: number;
        };
        result: {
          allowReadTime: null;
          allowread: null;
          /**
           * 地区
           */
          area: string;
          /**
           * 类目
           */
          category: string;
          /**
           * 联系人
           */
          contact: null;
          /**
           * 是否允许读写伪登录
           */
          custAllowDelegate: number;
          /**
           * 是否允许读写伪登录dmp
           */
          custAllowDmp: number;
          /**
           * 类目
           */
          custcat: string;
          /**
           * 客户id
           */
          custid: number;
          custstatusenum: null;
          /**
           * 代理商账户id
           */
          delegateid: number;
          /**
           * 代理商账户名称
           */
          delegatename: string;
          /**
           * userid
           */
          extNumId: number;
          /**
           * 客户信息主键id，获取客户详情需要根据该接口
           */
          id: number;
          /**
           * 妈妈id
           */
          memberId: null;
          /**
           * 操作员旺旺
           */
          operatorim: string;
          /**
           * 电话
           */
          phone: null;
          /**
           * 销售
           */
          salesim: null;
          /**
           * 店铺名称
           */
          shopname: string;
          /**
           * 状态
           */
          status: string;
          tpcompanyid: number;
          tpcompanyname: string;
          /**
           * 客户信息主键id，获取客户详情需要根据该接口
           */
          tpcustid: number;
          /**
           * 旺旺
           */
          wangwang: string;
        }[];
      };
      success: boolean;
      msg: string;
    };
  };

  /**
   * 接口名：根据id获取客户详情
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3601&mod=8558&itf=81244
   */
  'GET/customer/getCustomerById.json': {
    Req: {
      id?: number;
    };
    Res: {
      data: {
        result: {
          allowReadTime: null;
          allowread: null;
          area: string;
          category: string;
          contact: null;
          custAllowDelegate: number;
          custAllowDmp: number;
          custcat: string;
          custid: number;
          custstatusenum: null;
          delegateid: number;
          delegatename: string;
          extNumId: number;
          id: number;
          memberId: null;
          operatorim: string;
          phone: null;
          salesim: null;
          shopname: string;
          status: string;
          tpcompanyid: number;
          tpcompanyname: string;
          tpcustid: number;
          wangwang: string;
        };
      };
      success: boolean;
    };
  };

  /**
   * 接口名：分配客户
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3601&mod=8558&itf=81665
   */
  'POST/customer/updateDelegate.json': {
    Req: {
      query?: {
        /**
         * 子账户id
         */
        delegateAccountId?: string;
        /**
         * 所选择的客户的id列表（注意这个id是客户列表查询出来的主键id，不是userId和memberId这种类型）
         */
        tpCustIdList?: any[];
      };
    };
    Res: {
      data: {
        result: boolean;
      };
      msg: string;
      success: boolean;
    };
  };

  /**
   * 接口名：客户效果查看
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3601&mod=8558&itf=87910
   */
  'GET/customer/getEffectData.json': {
    Req: {
      /**
       * 1-最近7日
       * 2-最近15日
       * 3-最近30日
       * 4-最近60日
       * 5-最近90日
       */
      dataType?: number;
      /**
       * 客户的taobaouid
       */
      userId?: number;
      /**
       * 资质类型
       * 1直通车
       * 3钻展
       * 4信息流
       */
      type?: number;
    };
    Res: {
      data: {
        result: {
          effectData: {
            /**
             * [直、钻、超]
             * 展现量前后对比增幅
             */
            pvGrowth: number;
            /**
             * [直、钻、超]
             * 点击量前后对比增幅
             */
            clickGrowth: number;
            /**
             * [直、钻、超]
             * 消耗前后对比增幅
             */
            costGrowth: string;
            /**
             * [直通车]
             * 平均点击花费前后对比增幅
             */
            cpcGrowth: number;
            /**
             * [直、钻、超]
             * 收藏宝贝数前后对比增幅
             */
            itmcollCntGrowth: number;
            /**
             * [直、钻、超]
             * 收藏店铺数前后对比增幅
             */
            shopcollCntGrowth: number;
            /**
             * [直通车]
             * 总购物车数前后对比增幅
             */
            cartCntGrowth: number;
            /**
             * [直、钻、超]
             * 点击转化率前后对比增幅
             */
            clickCrGrowth: number;
            /**
             * [直、钻、超]
             * 投入产出比前后对比增幅
             */
            roiGrowth: number;
            /**
             * [钻、超]
             * 点击率前后对比增幅
             */
            ctrGrowth: number;
            /**
             * [钻、超]
             * 点击单价前后对比增幅
             */
            clickPriceGrowth: number;
            /**
             * [钻、超]
             * 千次展现成本前后对比增幅
             */
            cpmGrowth: number;
            /**
             * [钻展]
             * 访客前后对比增幅
             */
            visitorGrowth: number;
            /**
             * [钻、超]
             * 添加购物车量前后对比增幅
             */
            addCartGrowth: number;
            /**
             * [钻、超]
             * 拍下订单量前后对比增幅
             */
            orderCntGrowth: number;
            /**
             * [钻、超]
             * 拍下订单金额前后对比增幅
             */
            orderAmtGrowth: number;
            /**
             * [钻、超]
             * 成交订单量前后对比增幅
             */
            orderPayCntGrowth: number;
            /**
             * [钻、超]
             * 成交订单金额前后对比增幅
             */
            orderPayAmtGrowth: number;
            /**
             * [钻展]
             * 行动量前后对比增幅
             */
            actionGrowth: number;
            /**
             * [钻展]
             * 行动成本前后对比增幅
             */
            actionCostGrowth: number;
            /**
             * [超级推荐]
             * 引导进店量前后对比增幅
             */
            guideCntGrowth: number;
            /**
             * [超级推荐]
             * 引导进店潜客⼈数前后对比增幅
             */
            guidePotentialCntGrowth: number;
            /**
             * [超级推荐]
             * 关注店铺量前后对比增幅
             */
            shopFollowCntGrowth: number;
            /**
             * [超级推荐]
             * 新客获取量前后对比增幅
             */
            newcustCntGrowth: number;
            /**
             * [超级推荐]
             * 新客获取率前后对比增幅
             */
            newcustRateGrowth: number;
            /**
             * [超级推荐]
             * 拉新成本前后对比增幅
             */
            addnewUvCostGrowth: number;
            /**
             * [超级推荐]
             * 拉新消耗前后对比增幅
             */
            addnewCostGrowth: number;
            /**
             * [超级推荐]
             * 优惠券领取量前后对比增幅
             */
            couponCntGrowth: number;
            /**
             * [超级推荐]
             * 旺旺咨询量前后对比增幅
             */
            wangwangCntGrowth: number;
            /**
             * [超级推荐]
             * 展现转化率前后对比增幅
             */
            pvCvrGrowth: number;
          };
          serviceStartTime: string;
        };
      };
      msg: string;
      success: boolean;
    };
  };

  /**
   * 接口名：服务商id和资质查询
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3601&mod=8597&itf=81224
   */
  'GET/login/userinfoList.json': {
    Req: {};
    Res: {
      msg: string;
      success: boolean;
      errorCode: string;
      data: {
        result: {
          token: string;
          product: string;
          tpid: string;
          productName: string;
          /**
           * true表示有服务商权限，null或者false表示没有
           */
          tpFlag: boolean;
          /**
           * true表示有万堂权限，null或者false表示没有
           */
          lectorFlag: boolean;
        }[];
      };
    };
  };

  /**
   * 接口名：获取超级推荐伪登录url
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3601&mod=8597&itf=82580
   */
  'GET/login/getLoginUrl.json': {
    Req: {
      memberId?: number;
    };
    Res: {
      success: boolean;
      data: {
        result: string;
      };
    };
  };

  /**
   * 接口名：查询支付明细
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3601&mod=8613&itf=81663
   */
  'GET/account/findPayDetailList.json': {
    Req: {
      query?: {
        /**
         * 页码
         */
        toPage?: number;
        /**
         * 每页多少条
         */
        perPageSize?: number;
        /**
         * 0未结算，1已结算
         */
        settleStatus?: number;
        /**
         * 支付开始时间
         */
        paydatestart?: string;
        /**
         * 支付结束时间
         */
        paydateend?: string;
        /**
         * custim 表示客户旺旺
         * 表示agreementid 订单id
         *
         */
        searchtype?: string;
        /**
         * 付款说明
         */
        searchvalue?: string;
      };
    };
    Res: {
      data: {
        pageInfo: {
          itemTotal: number;
          perPageSize: number;
          toPage: number;
        };
        result: {
          /**
           * 交易流水id
           */
          id: number;
          /**
           * 支付金额
           */
          amount: string;
          /**
           * 支付栗子
           */
          coin: null;
          /**
           * 支付时间
           */
          paydate: string;
          /**
           * 客户id
           */
          memberId: number;
          /**
           * 订单id
           */
          agreementId: number;
          /**
           * 0未结算，1已结算
           */
          settleStatus: number;
          /**
           * 结算时间
           */
          settleTime: string;
          /**
           * 客户旺旺
           */
          wangwang: string;
          payDesc: string;
          /**
           * 付款金额，单位：元
           */
          amountYuan: number;
        }[];
      };
      success: boolean;
    };
  };

  /**
   * 接口名：下载支付明细
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3601&mod=8613&itf=85381
   */
  'GET/account/downloadAlipayDetail.json': {
    Req: {
      query?: {
        /**
         * custim 表示客户旺旺
         * 表示agreementid 订单id
         *
         */
        searchtype?: string;
        /**
         * 付款说明
         */
        searchvalue?: string;
        /**
         * 页码
         */
        toPage?: number;
        /**
         * 每页多少条
         */
        perPageSize?: number;
        /**
         * 0未结算，1已结算
         */
        settleStatus?: number;
        /**
         * 支付开始时间
         */
        paydatestart?: string;
        /**
         * 支付结束时间
         */
        paydateend?: string;
      };
    };
    Res: {};
  };

  /**
   * 接口名：伪登陆
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3601&mod=8729&itf=82585
   */
  'GET/sem_login.htm': {
    Req: {};
    Res: {
      code: string;
    };
  };

  /**
   * 接口名：昨日活跃客户数排行
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3601&mod=9535&itf=87735
   */
  'GET/homepage/getActiveCustRank.json': {
    Req: {};
    Res: {
      data: {
        result: {
          /**
           * 总排名值
           */
          totalRank: number;
          /**
           * 总排名变化数
           */
          totalRankChange: number;
          /**
           * 直通车排名  -1表示无资质
           */
          ztcRank: number;
          /**
           * 直通车排名变化数
           */
          ztcRankChange: number;
          /**
           * 钻展排名  -1表示无资质
           */
          zzRank: number;
          /**
           * 钻展排名变化数
           */
          zzRankChange: number;
          /**
           * 信息流排名 -1表示无资质
           */
          feedFlowRank: number;
          /**
           * 信息流排名变化数
           */
          feedFlowRankChange: number;
        };
      };
      success: boolean;
    };
  };

  /**
   * 接口名：我的订单
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3601&mod=9535&itf=87713
   */
  'GET/homepage/findAgreementList.json': {
    Req: {
      query?: {
        /**
         * 1 - n
         */
        toPage?: number;
        perPageSize?: number;
        /**
         * THIS_MONTH: 本月
         * INITIAL": 待受理
         * NEED_PAY:待付款
         * STOPPING: 请求提前终止
         */
        queryStatus?: string;
      };
    };
    Res: {
      data: {
        pageInfo: {
          itemTotal: number;
          perPageSize: number;
          toPage: number;
        };
        result: {
          id: number;
          /**
           * 服务名称
           */
          serviceName: string;
          /**
           * CLOSED  协议结束
           */
          status: string;
        }[];
      };
      success: boolean;
    };
  };

  /**
   * 接口名：消息通知
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3601&mod=9535&itf=87715
   */
  'GET/message/findMessageList.json': {
    Req: {
      query?: {
        toPage?: number;
        perPageSize?: number;
      };
    };
    Res: {
      data: {
        pageInfo: {
          itemTotal: number;
          perPageSize: number;
          toPage: number;
        };
        result: {
          /**
           * 1表示已读，0表示未读
           */
          readStatus: number;
          /**
           * 标题
           */
          subject: string;
          /**
           * 创建时间yyyy-MM-dd HH:mm:ss
           */
          createTime: string;
          /**
           * 消息id
           */
          id: number;
        }[];
      };
      success: boolean;
      msg: string;
    };
  };

  /**
   * 接口名：查询消息详情
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3601&mod=9535&itf=87736
   */
  'GET/message/getMessageById.json': {
    Req: {
      /**
       * 消息id
       */
      messageId?: number;
    };
    Res: {
      data: {
        result: {
          /**
           * 标题
           */
          subject: string;
          /**
           * 内容
           */
          content: string;
          /**
           * 发送时间 yyyy-MM-dd HH:mm:ss
           */
          createTime: string;
        };
      };
      success: boolean;
      msg: string;
    };
  };

  /**
   * 接口名：昨日消耗排行
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3601&mod=9535&itf=87717
   */
  'GET/homepage/getCostRank.json': {
    Req: {};
    Res: {
      data: {
        result: {
          /**
           * 总排名值
           */
          totalRank: number;
          /**
           * 总排名变化数
           */
          totalRankChange: number;
          /**
           * 直通车排名
           */
          ztcRank: number;
          /**
           * 直通车排名变化数
           */
          ztcRankChange: number;
          /**
           * 钻展排名
           */
          zzRank: number;
          /**
           * 钻展排名变化数
           */
          zzRankChange: number;
          /**
           * 信息流排名
           */
          feedFlowRank: number;
          /**
           * 信息流排名变化数
           */
          feedFlowRankChange: number;
        };
      };
      success: boolean;
    };
  };

  /**
   * 接口名：首页实时数据概览
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3601&mod=9535&itf=87722
   */
  'GET/homepage/getRealTimeData.json': {
    Req: {};
    Res: {
      data: {
        result: {
          yesterday: {
            pv: number;
            uv: number;
            /**
             * 订单数
             */
            orderNum: number;
            /**
             * 支付数
             */
            orderPayNum: number;
            /**
             * 支付金额 - 分
             */
            payAmount: number;
          };
          today: {
            pv: number;
            uv: number;
            /**
             * 订单数
             */
            orderNum: number;
            /**
             * 支付数
             */
            orderPayNum: number;
            /**
             * 支付金额(元)
             */
            payAmount: number;
          };
        };
      };
      success: boolean;
    };
  };

  /**
   * 接口名：未读消息数量
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3601&mod=9535&itf=87764
   */
  'GET/message/getUnreadLetterCount.json': {
    Req: {};
    Res: {
      data: {
        /**
         * 未读消息数
         */
        result: number;
      };
      msg: string;
      success: boolean;
    };
  };

  /**
   * 接口名：首页实时数据分时
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3601&mod=9535&itf=87780
   */
  'GET/homepage/getRealTimeDataHour.json': {
    Req: {};
    Res: {
      data: {
        result: {
          yesterday: {
            pv: number;
            hour: string;
          }[];
          today: {
            pv: number;
            hour: string;
          }[];
        };
      };
      success: boolean;
    };
  };

  /**
   * 接口名：服务商能力查询
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3601&mod=9535&itf=87870
   */
  'GET/homepage/getAbilityInfo.json': {
    Req: {};
    Res: {
      data: {
        result: {
          name: string;
          /**
           * 能力得分
           */
          abilityScore: number;
          /**
           * 同层级均值
           */
          abilityAverage: number;
          subList: {
            name: string;
            abilityScore: number;
            abilityAverage: number;
            /**
             * 浮层内容
             */
            tips: string;
          }[];
          /**
           * 浮层内容
           */
          tips: string;
        }[];
      };
      success: boolean;
    };
  };

  /**
   * 接口名：获取服务商星级
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3601&mod=9535&itf=87871
   */
  'GET/homepage/getStarLevel.json': {
    Req: {};
    Res: {
      data: {
        result: {
          /**
           * 星级
           */
          starLevel: number;
          /**
           * 更新时间
           */
          levelUpDate: string;
        };
      };
      success: boolean;
    };
  };

  /**
   * 接口名：获取星级权益(首页3个)
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3601&mod=9535&itf=87872
   */
  'GET/homepage/getStarLevel3Rights.json': {
    Req: {};
    Res: {
      data: {
        result: {
          starLevel: number;
          name: string;
          description: string;
          icon: string;
        }[];
      };
      success: boolean;
    };
  };

  /**
   * 接口名：获取星级权益
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3601&mod=9535&itf=87873
   */
  'GET/homepage/getStarLevelRights.json': {
    Req: {};
    Res: {
      data: {
        result: {
          starLevel: number;
          name: string;
          description: string;
          icon: string;
        }[];
      };
      success: boolean;
    };
  };

  /**
   * 接口名：服务商能力短板
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3601&mod=9535&itf=87879
   */
  'GET/homepage/getLowAbility.json': {
    Req: {};
    Res: {
      data: {
        result: {
          name: string;
          score: number;
          sameLevelScore: number;
          /**
           * 正数高于，负数低于
           */
          rate: string;
        }[];
      };
      success: boolean;
    };
  };

  /**
   * 接口名：我的订单数量
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3601&mod=9535&itf=87912
   */
  'GET/homepage/getAgreementCount.json': {
    Req: {};
    Res: {
      data: {
        result: {
          /**
           * 本月数量
           */
          THIS_MONTH: number;
          /**
           * 待受理数量
           */
          INITIAL: number;
          /**
           * 待付款数量
           */
          NEED_PAY: number;
          /**
           * 请求提前终止数量
           */
          STOPPING: number;
        };
      };
      success: boolean;
    };
  };

  /**
   * 接口名：示例接口
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3601&mod=9567&itf=87894
   */
  'GET/example/1575014439783': {
    Req: {
      /**
       * 请求属性示例
       */
      foo?: string;
    };
    Res: {
      /**
       * 字符串属性示例
       */
      string: string;
      /**
       * 数字属性示例
       */
      number: number;
      /**
       * 布尔属性示例
       */
      boolean: boolean;
      /**
       * 正则属性示例
       */
      regexp: string;
      /**
       * 函数属性示例
       */
      function: string;
      /**
       * 数组属性示例
       */
      array: {
        /**
         * 数组元素示例
         */
        foo: number;
        /**
         * 数组元素示例
         */
        bar: string;
      }[];
      /**
       * 自定义数组元素示例
       */
      items: any[];
      /**
       * 对象属性示例
       */
      object: {
        /**
         * 对象属性示例
         */
        foo: number;
        /**
         * 对象属性示例
         */
        bar: string;
      };
      /**
       * 占位符示例
       */
      placeholder: string;
    };
  };

  /**
   * 接口名：转化分析
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3601&mod=9567&itf=87895
   */
  'GET/datacenter/getConversionAnalysis.json': {
    Req: {
      /**
       * 时间
       * yyyyMMdd格式
       */
      date?: string;
    };
    Res: {
      data: {
        result: {
          /**
           * 选择日期的数据，为一个map
           * key为指标名称
           * value为指标值
           */
          theDayMap: {};
          /**
           * 选择日期的前一日数据，为一个map
           * key为指标名称
           * value为指标值
           */
          beforeTheDayMap: {};
        };
      };
      success: boolean;
    };
  };

  /**
   * 接口名：订单分析
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3601&mod=9567&itf=87897
   */
  'GET/datacenter/getAgreementAnalysis.json': {
    Req: {
      query?: {
        /**
         * 订单类型
         * 1:直通车
         * 3:钻展
         * 4:超级推荐
         * 888:汇总
         */
        type?: number;
        /**
         * 开始时间
         * yyyyMMdd格式
         */
        startDate?: string;
        /**
         * 结束时间
         * yyyyMMdd格式
         */
        endDate?: string;
        /**
         * 订单来源
         * INPUT：录单
         * ORDER：服务下单
         * MARKET ：服务市场
         * ALL：汇总
         */
        fromSource?: string;
      };
    };
    Res: {
      data: {
        result: {
          /**
           * 日期
           */
          date: string;
          /**
           * 下单笔数
           */
          orderCnt: number;
          /**
           * 支付订单数
           */
          orderPayCnt: number;
        }[];
      };
      msg: string;
      success: boolean;
    };
  };

  /**
   * 接口名：客户分析
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3601&mod=9567&itf=87899
   */
  'GET/datacenter/getCustAnalysis.json': {
    Req: {
      query?: {
        /**
         * 客户类型
         * 1：近一年已服务客户
         * 2：当前服务客户
         * 3：当前流失客户
         * 888：汇总
         */
        custType?: number;
        /**
         * 客户来源
         * INPUT：录单
         * ORDER：服务下单
         * MARKET ：服务市场
         * ALL：汇总
         */
        fromSource?: string;
        /**
         * 要查看的维度
         * bcSeller：客户BC店分布
         * costLevel：消耗层级分布
         * fromSource：客户来源分布
         */
        dimension?: string;
      };
    };
    Res: {
      data: {
        result: {
          /**
           * 为List<Map<String, Object>>结构，每个元素相当于表格的一行
           */
          dataList: boolean;
          /**
           * 维度名称
           */
          dimension: string;
        };
      };
      msg: string;
      success: boolean;
    };
  };

  /**
   * 接口名：分页查询课程栏目列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3632&mod=8571&itf=82207
   */
  'GET/wtsy/serise/findList.json': {
    Req: {
      query?: {
        /**
         * 主键id
         */
        id?: number;
        /**
         * 名称
         */
        name?: string;
        /**
         * 状态 DRAFT：草稿 WAIT_ACTIVE：待发布 ACTIVING：已发布
         */
        status?: string;
        toPage?: number;
        perPageSize?: number;
        /**
         * 审核状态
         * PASSING：审核中
         * PASSED：审核通过
         * REFUSE：审核拒绝
         */
        auditStatus?: string;
      };
    };
    Res: {
      msg: null;
      errorCode: null;
      data: {
        result: {
          /**
           * 审核信息列表
           */
          auditInfo: {
            /**
             * 审核拒绝原因
             */
            auditRefuseReason: null;
            /**
             * 审核状态
             * PASSING：审核中
             * PASSED：审核通过
             * REFUSE：审核拒绝
             */
            auditStatus: string;
            '': string;
          };
          /**
           * 描述
           */
          description: string;
          /**
           * 创建时间
           */
          gmtCreate: string;
          /**
           * 修改时间
           */
          gmtModified: string;
          /**
           * 系列id
           */
          id: number;
          /**
           * 系列主图
           */
          mainPictureUrl: string;
          /**
           * 系列名称
           */
          name: string;
          /**
           * 状态
           * DRAFT：草稿
           * WAIT_ACTIVE：待发布
           * ACTIVING：已发布
           */
          status: string;
          /**
           * 课程总期数
           */
          courseCount: number;
          /**
           * 送审说明
           */
          instruction: string;
        }[];
        /**
         * 分页信息
         */
        pageInfo: {
          /**
           * 总页数
           */
          itemTotal: number;
          perPageSize: number;
          toPage: number;
        };
      };
      success: boolean;
    };
  };

  /**
   * 接口名：根据id删除栏目
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3632&mod=8571&itf=82232
   */
  'POST/wtsy/serise/delete.json': {
    Req: {
      /**
       * id
       */
      id: number;
    };
    Res: {
      msg: null;
      errorCode: null;
      data: {
        result: boolean;
      };
      success: boolean;
    };
  };

  /**
   * 接口名：根据id获取栏目详情
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3632&mod=8571&itf=82240
   */
  'GET/wtsy/serise/get.json': {
    Req: {
      id?: number;
    };
    Res: {
      success: boolean;
      msg: null;
      errorCode: null;
      data: {
        result: {
          gmtModified: string;
          id: number;
          mainPictureUrl: string;
          name: string;
          status: string;
          auditInfo: {
            auditRefuseReason: null;
            auditStatus: string;
          };
          creatorMainName: string;
          creatorMainNum: number;
          creatorName: string;
          description: string;
          gmtCreate: string;
          /**
           * 送审说明
           */
          instruction: string;
        };
      };
    };
  };

  /**
   * 接口名：栏目发布
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3632&mod=8571&itf=82242
   */
  'POST/wtsy/serise/publish.json': {
    Req: {
      id?: number;
    };
    Res: {
      msg: null;
      errorCode: null;
      data: {
        result: boolean;
      };
      success: boolean;
    };
  };

  /**
   * 接口名：添加栏目
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3632&mod=8571&itf=82243
   */
  'POST/wtsy/serise/add.json': {
    Req: {
      query?: {
        /**
         * 名称
         */
        name?: string;
        /**
         * 描述
         */
        description?: string;
        /**
         * 主图url
         */
        mainPictureUrl?: string;
        /**
         * 送审说明
         */
        instruction?: string;
      };
    };
    Res: {
      msg: null;
      errorCode: null;
      data: {
        /**
         * 系列id
         */
        result: number;
      };
      success: boolean;
    };
  };

  /**
   * 接口名：修改栏目
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3632&mod=8571&itf=82244
   */
  'POST/wtsy/serise/update.json': {
    Req: {
      query?: {
        /**
         * 名称
         */
        name?: string;
        /**
         * 描述
         */
        description?: string;
        /**
         * 主图url
         */
        mainPictureUrl?: string;
        /**
         * 送审说明
         */
        instruction?: string;
        /**
         * 栏目id
         */
        id: string;
      };
    };
    Res: {
      msg: null;
      errorCode: null;
      data: {
        result: boolean;
      };
      success: boolean;
    };
  };

  /**
   * 接口名：分页查询课程教案列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3632&mod=8683&itf=82278
   */
  'GET/wtsy/plan/findList.json': {
    Req: {
      query?: {
        /**
         * 主键id
         */
        id?: number;
        /**
         * 教案名称
         */
        name?: string;
        /**
         * 状态
         * DRAFT：草稿
         * WAIT_ACTIVE：待发布
         * ACTIVING：已发布
         *
         *
         */
        status?: string;
        toPage?: number;
        perPageSize?: number;
        /**
         * 审核状态 PASSING：审核中 PASSED：审核通过 REFUSE：审核拒绝
         */
        auditStatus?: string;
      };
    };
    Res: {
      msg: null;
      errorCode: null;
      data: {
        result: {
          attachmentUrl: string;
          auditInfo: {
            auditRefuseReason: null;
            auditStatus: string;
          };
          categoryId: number;
          courseTags: string;
          crowdDesc: string;
          description: string;
          gmtCreate: string;
          gmtModified: string;
          id: number;
          name: string;
          outlineId: number;
          status: string;
          target: string;
          trade: string;
          /**
           * 课程数
           */
          courseCount: number;
          /**
           * 类目全名称
           */
          categoryFullName: string;
        }[];
        pageInfo: {
          itemTotal: number;
          perPageSize: number;
          toPage: number;
        };
      };
      success: boolean;
    };
  };

  /**
   * 接口名：添加课程教案
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3632&mod=8683&itf=82271
   */
  'POST/wtsy/plan/add.json': {
    Req: {
      query?: {
        /**
         * 教案名称
         */
        name?: string;
        /**
         * 教案描述
         */
        description?: string;
        /**
         * 内容目标
         */
        target?: string;
        /**
         * 类目id
         */
        categoryId?: number;
        /**
         * 适用人群
         */
        crowdDesc?: string;
        /**
         * 适用行业
         */
        trade?: string;
        /**
         * 课程大纲id
         */
        outlineId?: number;
        /**
         * 课程标签ids，多个id之间逗号分隔
         */
        courseTags?: string;
        /**
         * 附件地址，多个逗号分隔
         */
        attachmentUrl?: string;
      };
    };
    Res: {
      msg: null;
      errorCode: null;
      data: {
        /**
         * 课程id
         */
        result: number;
      };
      success: boolean;
    };
  };

  /**
   * 接口名：修改/翻新课程教案
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3632&mod=8683&itf=82282
   */
  'POST/wtsy/plan/update.json': {
    Req: {
      query?: {
        name?: string;
        description?: string;
        target?: string;
        categoryId?: number;
        crowdDesc?: string;
        trade?: string;
        outlineId?: number;
        courseTags?: string;
        attachmentUrl?: string;
        /**
         * RETREAD:翻新；UPDATE:修改
         */
        opType: string;
        /**
         * 主键
         */
        id: string;
      };
    };
    Res: {
      msg: null;
      errorCode: null;
      data: {
        result: boolean;
      };
      success: boolean;
    };
  };

  /**
   * 接口名：根据id删除教案
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3632&mod=8683&itf=82283
   */
  'POST/wtsy/plan/delete.json': {
    Req: {
      /**
       * id
       */
      id: number;
    };
    Res: {
      msg: null;
      errorCode: null;
      data: {
        result: boolean;
      };
      success: boolean;
    };
  };

  /**
   * 接口名：教案发布
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3632&mod=8683&itf=82284
   */
  'POST/wtsy/plan/publish.json': {
    Req: {
      id?: number;
    };
    Res: {
      msg: null;
      errorCode: null;
      data: {
        result: boolean;
      };
      success: boolean;
    };
  };

  /**
   * 接口名：根据id获取教案详情
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3632&mod=8683&itf=82273
   */
  'GET/wtsy/plan/get.json': {
    Req: {
      id: number;
    };
    Res: {
      msg: null;
      errorCode: null;
      data: {
        result: {
          attachmentUrl: string;
          /**
           * 审核信息列表
           */
          auditInfo: {
            /**
             * 审核拒绝
             */
            auditRefuseReason: null;
            /**
             * 审核状态 PASSING：审核中 PASSED：审核通过 REFUSE：审核拒绝
             */
            auditStatus: string;
          };
          /**
           * 类目id
           */
          categoryId: number;
          /**
           * 课程tagId str，多个逗号分隔
           */
          courseTags: string;
          /**
           * 适用人群
           */
          crowdDesc: string;
          /**
           * 描述
           */
          description: string;
          /**
           * 创建时间
           */
          gmtCreate: string;
          /**
           * 修改时间
           */
          gmtModified: string;
          /**
           * 主键
           */
          id: number;
          /**
           * 名称
           */
          name: string;
          /**
           * 课程大纲id
           */
          outlineId: number;
          /**
           * 状态
           * DRAFT：草稿
           * WAIT_ACTIVE：待发布
           * ACTIVING：已发布
           */
          status: string;
          /**
           * 内容目标
           */
          target: string;
          /**
           * 适用行业
           */
          trade: string;
          /**
           * 类目名称
           */
          categoryName: string;
          /**
           * 大纲名称
           */
          outlineName: string;
          /**
           * 课程数
           */
          courseCount: number;
        };
      };
      success: boolean;
    };
  };

  /**
   * 接口名：分页查询教案历史列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3632&mod=8683&itf=83478
   */
  'GET/wtsy/plan/findHistoryList.json': {
    Req: {
      query?: {
        /**
         * 教案id
         */
        coursePlanId?: number;
        toPage?: number;
        perPageSize?: number;
      };
    };
    Res: {
      msg: null;
      errorCode: null;
      data: {
        result: {
          /**
           * 教案id
           */
          coursePlanId: number;
          /**
           * 翻新时间
           */
          gmtCreate: string;
          /**
           * 附件url地址
           */
          attachmentUrl: string;
        }[];
        pageInfo: {
          itemTotal: number;
          perPageSize: number;
          toPage: number;
        };
      };
      success: boolean;
    };
  };

  /**
   * 接口名：编辑直播课程
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3632&mod=8686&itf=82434
   */
  'POST/wtsy/livecourse/update.json': {
    Req: {
      query?: {
        /**
         * 课程名称
         */
        name?: string;
        /**
         * 系列id
         */
        seriseId?: number;
        /**
         * 课程大纲id
         */
        outlineId?: number;
        /**
         * 课程描述
         */
        description?: string;
        /**
         * 主图url
         */
        mainPictureUrl?: string;
        /**
         * 课程教案id
         */
        planId?: number;
        /**
         * 助教人员，多个逗号分隔
         */
        workerNicks?: string;
        /**
         * 开始时间
         */
        startTime?: string;
        /**
         * 结束时间
         */
        endTime?: string;
        /**
         * 主键id
         */
        id: number;
      };
    };
    Res: {
      msg: null;
      errorCode: null;
      data: {
        result: boolean;
      };
      success: boolean;
      /**
       * 数组元素示例
       */
      bar: string;
    };
  };

  /**
   * 接口名：添加直播课程
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3632&mod=8686&itf=82441
   */
  'POST/wtsy/livecourse/add.json': {
    Req: {
      query?: {
        name?: string;
        seriseId?: number;
        outlineId?: number;
        description?: string;
        mainPictureUrl?: string;
        planId?: number;
        workerNicks?: string;
        startTime?: string;
        endTime?: string;
      };
    };
    Res: {
      msg: null;
      errorCode: null;
      data: {
        result: number;
      };
      success: boolean;
      /**
       * 数组元素示例
       */
      bar: string;
    };
  };

  /**
   * 接口名：根据id删除课程
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3632&mod=8686&itf=82440
   */
  'POST/wtsy/livecourse/delete.json': {
    Req: {
      /**
       * id
       */
      id: number;
    };
    Res: {
      msg: null;
      errorCode: null;
      data: {
        result: boolean;
      };
      success: boolean;
    };
  };

  /**
   * 接口名：发布直播课程
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3632&mod=8686&itf=82442
   */
  'POST/wtsy/livecourse/publish.json': {
    Req: {
      /**
       * id
       */
      id: number;
    };
    Res: {
      msg: null;
      errorCode: null;
      data: {
        result: boolean;
      };
      success: boolean;
    };
  };

  /**
   * 接口名：分页查询列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3632&mod=8686&itf=82437
   */
  'GET/wtsy/livecourse/findList.json': {
    Req: {
      query?: {
        id?: number;
        name?: string;
        /**
         * 状态
         * DRAFT:草稿;WAIT_ACTIVE:待发布;ACTIVING:已发布;LIVING:直播中;END:直播结束;OFFLINE_PLAN:教案下线
         *
         */
        status?: string;
        toPage?: number;
        perPageSize?: number;
        /**
         * 审核状态
         * PASSING：审核中
         * PASSED：审核通过
         * REFUSE：审核拒绝
         *
         */
        auditStatus?: string;
      };
    };
    Res: {
      msg: null;
      errorCode: null;
      data: {
        result: {
          /**
           * 课程审批信息
           */
          auditInfo: {
            auditStatus: string;
            auditRefuseReason: string;
          };
          /**
           * 课程描述
           */
          description: string;
          /**
           * 结束时间
           */
          endTime: string;
          /**
           * 课程创建时间
           */
          gmtCreate: string;
          /**
           * 课程修改时间
           */
          gmtModified: string;
          /**
           * 主键id
           */
          id: number;
          /**
           * 主图url
           */
          mainPictureUrl: string;
          /**
           * 课程名称
           */
          name: string;
          /**
           * 课程教案id
           */
          planId: number;
          /**
           * 课程教案id
           */
          planName: string;
          /**
           * 课程系列id
           */
          seriseId: number;
          /**
           * 课程系列名称
           */
          seriseName: string;
          /**
           * 开始时间
           */
          startTime: string;
          /**
           * 状态
           */
          status: string;
          /**
           * 工作人员旺旺
           */
          workerNicks: string;
          /**
           * 是否可以获取直播链接
           */
          canGetPushLiveUrl: boolean;
          /**
           * 课程链接
           */
          courseDetailUrl: string;
        }[];
        pageInfo: {
          itemTotal: number;
          perPageSize: number;
          toPage: number;
        };
      };
      success: boolean;
    };
  };

  /**
   * 接口名：根据id获取详情
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3632&mod=8686&itf=82439
   */
  'GET/wtsy/livecourse/get.json': {
    Req: {
      /**
       * 课程id
       */
      id: string;
    };
    Res: {
      msg: null;
      errorCode: null;
      data: {
        result: {
          auditInfo: {};
          description: string;
          endTime: string;
          gmtCreate: string;
          gmtModified: string;
          id: number;
          mainPictureUrl: string;
          name: string;
          planId: number;
          planName: string;
          seriseId: number;
          seriseName: string;
          startTime: string;
          status: string;
          workerNicks: string;
          courseExt: {
            liveSupplyMaterialList: {
              fileKey: string;
              fileName: string;
              fileUrl: string;
            }[];
          };
        };
      };
      success: boolean;
    };
  };

  /**
   * 接口名：获取开播链接
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3632&mod=8686&itf=82444
   */
  'GET/wtsy/livecourse/liveUrl.json': {
    Req: {
      /**
       * 课程id
       */
      id: number;
    };
    Res: {
      msg: null;
      errorCode: null;
      data: {
        result: string;
      };
      success: boolean;
    };
  };

  /**
   * 接口名：直播课程时间段查询
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3632&mod=8686&itf=83497
   */
  'GET/wtsy/livecourse/findTimeList.json': {
    Req: {
      /**
       * 直播日期
       */
      liveDate: string;
      /**
       * 课程id
       */
      id?: string;
    };
    Res: {
      msg: null;
      errorCode: null;
      data: {
        result: {
          /**
           * 已创建课程数
           */
          createdCount: number;
          /**
           * 结束时间
           */
          endTime: string;
          /**
           * 限制课程数
           */
          limitCount: number;
          /**
           * 开始时间
           */
          startTime: string;
        }[];
      };
      success: boolean;
    };
  };

  /**
   * 接口名：统计当前在线人数
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3632&mod=8686&itf=87638
   */
  'GET/wtsy/livecourse/countOnLine.json': {
    Req: {
      id?: number;
    };
    Res: {
      msg: null;
      errorCode: null;
      data: {
        /**
         * 当前在线人数
         */
        result: number;
      };
      success: boolean;
      securityUtil: {};
    };
  };

  /**
   * 接口名：添加材料
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3632&mod=8686&itf=87639
   */
  'POST/wtsy/livecourse/addMaterial.json': {
    Req: {
      /**
       * 文件
       */
      file?: {};
      /**
       * 课程id
       */
      courseId?: number;
    };
    Res: {
      msg: null;
      errorCode: null;
      data: {
        result: boolean;
      };
      success: boolean;
      securityUtil: {};
    };
  };

  /**
   * 接口名：材料删除
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3632&mod=8686&itf=87640
   */
  'GET/wtsy/livecourse/delMaterial.json': {
    Req: {
      courseId?: number;
      fileKey?: string;
    };
    Res: {
      msg: null;
      errorCode: null;
      data: {
        result: boolean;
      };
      success: boolean;
      securityUtil: {};
    };
  };

  /**
   * 接口名：讲师发送IM消息
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3632&mod=8686&itf=88516
   */
  'GET/wtsy/livecourse/sendInstantMessage.json': {
    Req: {
      /**
       * 课程ID
       */
      courseId: number;
      /**
       * 发言内容
       */
      messageContent: string;
    };
    Res: {
      data: {};
      success: boolean;
    };
  };

  /**
   * 接口名：获取聊天消息列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3632&mod=8686&itf=88517
   */
  'GET/wtsy/livecourse/listInstantMessage.json': {
    Req: {
      /**
       * 课程ID
       */
      courseId: number;
    };
    Res: {
      success: boolean;
      data: {
        result: {
          /**
           * 消息ID
           */
          messageId: number;
          /**
           * 发言人淘宝UID
           */
          userId: number;
          /**
           * 发言人昵称
           */
          userName: string;
          /**
           * 课程ID
           */
          courseId: number;
          /**
           * 消息类型
           * COMMON普通消息
           * ANCHOR讲师消息
           * ASSISTANT助教消息
           * SYSTEM系统消息
           */
          messageType: string;
          /**
           * 消息内容
           */
          messageContent: string;
          /**
           * 消息时间
           */
          messageTime: string;
        }[];
      };
    };
  };

  /**
   * 接口名：IM禁言或放开禁言
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3632&mod=8686&itf=88518
   */
  'GET/wtsy/livecourse/forbidMessage.json': {
    Req: {
      /**
       * 课程ID
       */
      courseId: number;
      /**
       * 0-禁言 1-放开禁言
       */
      forbid: number;
    };
    Res: {
      success: boolean;
      data: {};
    };
  };

  /**
   * 接口名：添加图文课程
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3632&mod=8687&itf=82291
   */
  'POST/wtsy/ptextcourse/add.json': {
    Req: {
      query?: {
        /**
         * 课程名称
         */
        name?: string;
        /**
         * 系列id
         */
        seriseId?: number;
        /**
         * 类目id
         */
        categoryId?: number;
        /**
         * 课程描述
         */
        description?: string;
        /**
         * 适用人群
         */
        crowdDesc?: string;
        /**
         * 适用行业
         */
        trade?: string;
        /**
         * 课程内容
         */
        content?: string;
        /**
         * PTEXT:图文
         * VIDEO:视频
         */
        courseType?: string;
        /**
         * 主图URL
         */
        mainPictureUrl?: string;
      };
    };
    Res: {
      msg: null;
      errorCode: null;
      data: {
        result: number;
      };
      success: boolean;
    };
  };

  /**
   * 接口名：编辑图文课程
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3632&mod=8687&itf=82429
   */
  'POST/wtsy/ptextcourse/update.json': {
    Req: {
      query?: {
        name?: string;
        seriseId?: number;
        categoryId?: number;
        description?: string;
        crowdDesc?: string;
        trade?: string;
        content?: string;
        courseType?: string;
        mainPictureUrl?: string;
        /**
         * 课程id
         */
        id: string;
      };
    };
    Res: {
      msg: null;
      errorCode: null;
      data: {
        result: boolean;
      };
      success: boolean;
      /**
       * 数组元素示例
       */
      bar: string;
    };
  };

  /**
   * 接口名：根据id删除课程
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3632&mod=8687&itf=82427
   */
  'POST/wtsy/ptextcourse/delete.json': {
    Req: {
      /**
       * id
       */
      id: number;
    };
    Res: {
      msg: null;
      errorCode: null;
      data: {
        result: boolean;
      };
      success: boolean;
    };
  };

  /**
   * 接口名：发布图文课程
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3632&mod=8687&itf=82430
   */
  'POST/wtsy/ptextcourse/publish.json': {
    Req: {
      /**
       * id
       */
      id: number;
    };
    Res: {
      msg: null;
      errorCode: null;
      data: {
        result: boolean;
      };
      success: boolean;
    };
  };

  /**
   * 接口名：分页查询列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3632&mod=8687&itf=82421
   */
  'GET/wtsy/ptextcourse/findList.json': {
    Req: {
      query?: {
        /**
         * 主键id
         */
        id?: number;
        /**
         * 名称
         */
        name?: string;
        /**
         * 状态
         * DRAFT：草稿
         * WAIT_ACTIVE：待发布
         * ACTIVING：已发布
         */
        status?: string;
        toPage?: number;
        perPageSize?: number;
        /**
         * 审核状态
         * PASSING：审核中
         * PASSED：审核通过
         * REFUSE：审核拒绝
         */
        auditStatus?: string;
      };
    };
    Res: {
      msg: null;
      errorCode: null;
      data: {
        result: {
          /**
           * 审核信息列表，参考课程系列结构
           */
          auditInfo: {
            /**
             * 审核状态
             */
            auditStatus: string;
          };
          /**
           * 类目id
           */
          categoryId: number;
          /**
           * 类目名称
           */
          categoryName: string;
          /**
           * 课程内容
           */
          content: string;
          /**
           * 课程标签ids，多个id之间逗号分隔
           */
          courseTags: null;
          /**
           * PTEXT:图文 VIDEO:视频
           *
           */
          courseType: string;
          /**
           * 适用人群
           */
          crowdDesc: string;
          /**
           * 课程描述
           */
          description: string;
          /**
           * 创建时间
           */
          gmtCreate: string;
          /**
           * 修改时间
           */
          gmtModified: string;
          /**
           * 主键id
           */
          id: number;
          /**
           * 主图url
           */
          mainPictureUrl: string;
          /**
           * 课程名称
           */
          name: string;
          /**
           * 系列id
           */
          seriseId: number;
          /**
           * 系列名称
           */
          seriseName: string;
          /**
           * 课程状态
           * DRAFT：草稿 WAIT_ACTIVE：待发布 ACTIVING：已发布
           */
          status: string;
          /**
           * 适用行业
           */
          trade: string;
          /**
           * 类目全名称
           */
          categoryFullName: string;
          /**
           * 课程链接
           */
          courseDetailUrl: string;
        }[];
        pageInfo: {
          itemTotal: number;
          perPageSize: number;
          toPage: number;
        };
      };
      success: boolean;
    };
  };

  /**
   * 接口名：根据id图文课程
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3632&mod=8687&itf=82422
   */
  'GET/wtsy/ptextcourse/get.json': {
    Req: {
      /**
       * 课程id
       */
      id: number;
    };
    Res: {
      msg: null;
      errorCode: null;
      data: {
        result: {
          auditInfo: {};
          categoryId: number;
          categoryName: string;
          content: string;
          courseTags: null;
          courseType: string;
          crowdDesc: string;
          description: string;
          gmtCreate: string;
          gmtModified: string;
          id: number;
          mainPictureUrl: string;
          name: string;
          seriseId: number;
          seriseName: string;
          status: string;
          trade: string;
        };
      };
      success: boolean;
    };
  };

  /**
   * 接口名：所有目录树
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3632&mod=8682&itf=83153
   */
  'GET/wtsy/category/treeAll.json': {
    Req: {};
    Res: {
      msg: null;
      errorCode: null;
      data: {
        result: {
          id: number;
          name: string;
          /**
           * 子节点
           */
          subCategoryList: any[];
        }[];
      };
      success: boolean;
    };
  };

  /**
   * 接口名：下级目录
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3632&mod=8682&itf=83154
   */
  'GET/wtsy/category/listSub.json': {
    Req: {
      /**
       * 父节点ID
       */
      parentId?: number;
    };
    Res: {
      msg: null;
      errorCode: null;
      data: {
        result: {
          id: number;
          name: string;
        }[];
      };
      success: boolean;
    };
  };

  /**
   * 接口名：所有类目打平
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3632&mod=8682&itf=83938
   */
  'GET/wtsy/category/listAll.json': {
    Req: {};
    Res: {
      msg: null;
      errorCode: null;
      data: {
        result: {
          id: number;
          name: string;
          /**
           * 父节点
           */
          parentId: number;
        }[];
      };
      success: boolean;
    };
  };

  /**
   * 接口名：海棠新建创意接口
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3632&mod=8682&itf=84198
   */
  'GET/haitang/wtsy/createUrl.json': {
    Req: {
      /**
       * 模板尺寸
       * 栏目：306x150
       * 课程：164x98
       */
      sizes?: string;
    };
    Res: {
      msg: null;
      errorCode: null;
      data: {
        result: {
          url: string;
        };
      };
      success: boolean;
    };
  };

  /**
   * 接口名：版权查询
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3632&mod=8825&itf=83268
   */
  'GET/wtsy/copyright/query.json': {
    Req: {};
    Res: {
      msg: null;
      errorCode: null;
      data: {
        result: {
          id: number;
          outlineId: number;
          mainUserId: number;
          roleType: string;
          name: string;
        }[];
      };
      success: boolean;
    };
  };

  /**
   * 接口名：标签查询
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3632&mod=8826&itf=83269
   */
  'GET/wtsy/tag/query': {
    Req: {
      /**
       * 名称
       */
      name?: string;
      /**
       * 类型
       * COURSE:课程
       * PERSON：人员
       */
      type?: string;
    };
    Res: {
      msg: null;
      errorCode: null;
      data: {
        result: {
          id: number;
          name: string;
          type: string;
        }[];
      };
      success: boolean;
    };
  };

  /**
   * 接口名：活动转链工具
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3632&mod=9513&itf=87522
   */
  'GET/wtsy/club/campaign.json': {
    Req: {
      /**
       * 活动链接
       * 要encodeUrlCompont()一下
       */
      campUrl: string;
    };
    Res: {
      msg: null;
      errorCode: null;
      data: {
        result: {
          /**
           * 二维码图片链接
           */
          qrCodeUrl: string;
          /**
           * 活动推广链接
           */
          campaignUrl: string;
        };
      };
      success: boolean;
    };
  };
}

type ResSelector<T> = T;

export interface IResponseTypes {
  'GET/service/getServiceDetail.json': ResSelector<
    IModels['GET/service/getServiceDetail.json']['Res']
  >;
  'GET/service/listServicesByQuery.json': ResSelector<
    IModels['GET/service/listServicesByQuery.json']['Res']
  >;
  'POST/service/addOrUpdateService.json': ResSelector<
    IModels['POST/service/addOrUpdateService.json']['Res']
  >;
  'POST/service/updateServiceStatus.json': ResSelector<
    IModels['POST/service/updateServiceStatus.json']['Res']
  >;
  'POST/service/uploadPic.json': ResSelector<IModels['POST/service/uploadPic.json']['Res']>;
  'POST/service/uploadPicBatch.json': ResSelector<
    IModels['POST/service/uploadPicBatch.json']['Res']
  >;
  'GET/service/getSceneMetaInfo.json': ResSelector<
    IModels['GET/service/getSceneMetaInfo.json']['Res']
  >;
  'GET/service/submitServiceToCheck.json': ResSelector<
    IModels['GET/service/submitServiceToCheck.json']['Res']
  >;
  'POST/service/withdrawServiceCheck.json': ResSelector<
    IModels['POST/service/withdrawServiceCheck.json']['Res']
  >;
  'POST/service/saveService.json': ResSelector<IModels['POST/service/saveService.json']['Res']>;
  'GET/service/checkCompanyInfo.json': ResSelector<
    IModels['GET/service/checkCompanyInfo.json']['Res']
  >;
  'GET/agreement/findAgreementList.json_todo': ResSelector<
    IModels['GET/agreement/findAgreementList.json_todo']['Res']
  >;
  'GET/agreement/getAgreementById.json': ResSelector<
    IModels['GET/agreement/getAgreementById.json']['Res']
  >;
  'POST/agreement/tpAddAgreement.json': ResSelector<
    IModels['POST/agreement/tpAddAgreement.json']['Res']
  >;
  'POST/agreement/signAgreement.json': ResSelector<
    IModels['POST/agreement/signAgreement.json']['Res']
  >;
  'GET/agreement/beginAgreement.json': ResSelector<
    IModels['GET/agreement/beginAgreement.json']['Res']
  >;
  'GET/agreement/recoverAgreement.json': ResSelector<
    IModels['GET/agreement/recoverAgreement.json']['Res']
  >;
  'GET/agreement/terminateAgreement.json': ResSelector<
    IModels['GET/agreement/terminateAgreement.json']['Res']
  >;
  'GET/agreement/pauseAgreement.json': ResSelector<
    IModels['GET/agreement/pauseAgreement.json']['Res']
  >;
  'GET/agreement/listAgreementUpdateRecords.json': ResSelector<
    IModels['GET/agreement/listAgreementUpdateRecords.json']['Res']
  >;
  'GET/company/updateCompany.json': ResSelector<IModels['GET/company/updateCompany.json']['Res']>;
  'POST/operator/addOperator.json': ResSelector<IModels['POST/operator/addOperator.json']['Res']>;
  'POST/operator/updateOperator.json': ResSelector<
    IModels['POST/operator/updateOperator.json']['Res']
  >;
  'GET/operator/deleteOperator.json': ResSelector<
    IModels['GET/operator/deleteOperator.json']['Res']
  >;
  'GET/operator/getOperatorById.json': ResSelector<
    IModels['GET/operator/getOperatorById.json']['Res']
  >;
  'GET/operator/findOperatorList.json': ResSelector<
    IModels['GET/operator/findOperatorList.json']['Res']
  >;
  'GET/delegate/findDelegateList.json': ResSelector<
    IModels['GET/delegate/findDelegateList.json']['Res']
  >;
  'GET/delegate/deleteDelegateById.json': ResSelector<
    IModels['GET/delegate/deleteDelegateById.json']['Res']
  >;
  'GET/delegate/addDelegate.json': ResSelector<IModels['GET/delegate/addDelegate.json']['Res']>;
  'GET/role/addRole.json': ResSelector<IModels['GET/role/addRole.json']['Res']>;
  'GET/role/findRoleList.json': ResSelector<IModels['GET/role/findRoleList.json']['Res']>;
  'GET/company/getCompanyById.json': ResSelector<IModels['GET/company/getCompanyById.json']['Res']>;
  'GET/customer/findCustomerList.json': ResSelector<
    IModels['GET/customer/findCustomerList.json']['Res']
  >;
  'GET/customer/findPotentialCustomerList.json': ResSelector<
    IModels['GET/customer/findPotentialCustomerList.json']['Res']
  >;
  'GET/customer/findCustomerAccountList.json': ResSelector<
    IModels['GET/customer/findCustomerAccountList.json']['Res']
  >;
  'GET/customer/getCustomerById.json': ResSelector<
    IModels['GET/customer/getCustomerById.json']['Res']
  >;
  'POST/customer/updateDelegate.json': ResSelector<
    IModels['POST/customer/updateDelegate.json']['Res']
  >;
  'GET/customer/getEffectData.json': ResSelector<IModels['GET/customer/getEffectData.json']['Res']>;
  'GET/login/userinfoList.json': ResSelector<IModels['GET/login/userinfoList.json']['Res']>;
  'GET/login/getLoginUrl.json': ResSelector<IModels['GET/login/getLoginUrl.json']['Res']>;
  'GET/account/findPayDetailList.json': ResSelector<
    IModels['GET/account/findPayDetailList.json']['Res']
  >;
  'GET/account/downloadAlipayDetail.json': ResSelector<
    IModels['GET/account/downloadAlipayDetail.json']['Res']
  >;
  'GET/sem_login.htm': ResSelector<IModels['GET/sem_login.htm']['Res']>;
  'GET/homepage/getActiveCustRank.json': ResSelector<
    IModels['GET/homepage/getActiveCustRank.json']['Res']
  >;
  'GET/homepage/findAgreementList.json': ResSelector<
    IModels['GET/homepage/findAgreementList.json']['Res']
  >;
  'GET/message/findMessageList.json': ResSelector<
    IModels['GET/message/findMessageList.json']['Res']
  >;
  'GET/message/getMessageById.json': ResSelector<IModels['GET/message/getMessageById.json']['Res']>;
  'GET/homepage/getCostRank.json': ResSelector<IModels['GET/homepage/getCostRank.json']['Res']>;
  'GET/homepage/getRealTimeData.json': ResSelector<
    IModels['GET/homepage/getRealTimeData.json']['Res']
  >;
  'GET/message/getUnreadLetterCount.json': ResSelector<
    IModels['GET/message/getUnreadLetterCount.json']['Res']
  >;
  'GET/homepage/getRealTimeDataHour.json': ResSelector<
    IModels['GET/homepage/getRealTimeDataHour.json']['Res']
  >;
  'GET/homepage/getAbilityInfo.json': ResSelector<
    IModels['GET/homepage/getAbilityInfo.json']['Res']
  >;
  'GET/homepage/getStarLevel.json': ResSelector<IModels['GET/homepage/getStarLevel.json']['Res']>;
  'GET/homepage/getStarLevel3Rights.json': ResSelector<
    IModels['GET/homepage/getStarLevel3Rights.json']['Res']
  >;
  'GET/homepage/getStarLevelRights.json': ResSelector<
    IModels['GET/homepage/getStarLevelRights.json']['Res']
  >;
  'GET/homepage/getLowAbility.json': ResSelector<IModels['GET/homepage/getLowAbility.json']['Res']>;
  'GET/homepage/getAgreementCount.json': ResSelector<
    IModels['GET/homepage/getAgreementCount.json']['Res']
  >;
  'GET/example/1575014439783': ResSelector<IModels['GET/example/1575014439783']['Res']>;
  'GET/datacenter/getConversionAnalysis.json': ResSelector<
    IModels['GET/datacenter/getConversionAnalysis.json']['Res']
  >;
  'GET/datacenter/getAgreementAnalysis.json': ResSelector<
    IModels['GET/datacenter/getAgreementAnalysis.json']['Res']
  >;
  'GET/datacenter/getCustAnalysis.json': ResSelector<
    IModels['GET/datacenter/getCustAnalysis.json']['Res']
  >;
  'GET/wtsy/serise/findList.json': ResSelector<IModels['GET/wtsy/serise/findList.json']['Res']>;
  'POST/wtsy/serise/delete.json': ResSelector<IModels['POST/wtsy/serise/delete.json']['Res']>;
  'GET/wtsy/serise/get.json': ResSelector<IModels['GET/wtsy/serise/get.json']['Res']>;
  'POST/wtsy/serise/publish.json': ResSelector<IModels['POST/wtsy/serise/publish.json']['Res']>;
  'POST/wtsy/serise/add.json': ResSelector<IModels['POST/wtsy/serise/add.json']['Res']>;
  'POST/wtsy/serise/update.json': ResSelector<IModels['POST/wtsy/serise/update.json']['Res']>;
  'GET/wtsy/plan/findList.json': ResSelector<IModels['GET/wtsy/plan/findList.json']['Res']>;
  'POST/wtsy/plan/add.json': ResSelector<IModels['POST/wtsy/plan/add.json']['Res']>;
  'POST/wtsy/plan/update.json': ResSelector<IModels['POST/wtsy/plan/update.json']['Res']>;
  'POST/wtsy/plan/delete.json': ResSelector<IModels['POST/wtsy/plan/delete.json']['Res']>;
  'POST/wtsy/plan/publish.json': ResSelector<IModels['POST/wtsy/plan/publish.json']['Res']>;
  'GET/wtsy/plan/get.json': ResSelector<IModels['GET/wtsy/plan/get.json']['Res']>;
  'GET/wtsy/plan/findHistoryList.json': ResSelector<
    IModels['GET/wtsy/plan/findHistoryList.json']['Res']
  >;
  'POST/wtsy/livecourse/update.json': ResSelector<
    IModels['POST/wtsy/livecourse/update.json']['Res']
  >;
  'POST/wtsy/livecourse/add.json': ResSelector<IModels['POST/wtsy/livecourse/add.json']['Res']>;
  'POST/wtsy/livecourse/delete.json': ResSelector<
    IModels['POST/wtsy/livecourse/delete.json']['Res']
  >;
  'POST/wtsy/livecourse/publish.json': ResSelector<
    IModels['POST/wtsy/livecourse/publish.json']['Res']
  >;
  'GET/wtsy/livecourse/findList.json': ResSelector<
    IModels['GET/wtsy/livecourse/findList.json']['Res']
  >;
  'GET/wtsy/livecourse/get.json': ResSelector<IModels['GET/wtsy/livecourse/get.json']['Res']>;
  'GET/wtsy/livecourse/liveUrl.json': ResSelector<
    IModels['GET/wtsy/livecourse/liveUrl.json']['Res']
  >;
  'GET/wtsy/livecourse/findTimeList.json': ResSelector<
    IModels['GET/wtsy/livecourse/findTimeList.json']['Res']
  >;
  'GET/wtsy/livecourse/countOnLine.json': ResSelector<
    IModels['GET/wtsy/livecourse/countOnLine.json']['Res']
  >;
  'POST/wtsy/livecourse/addMaterial.json': ResSelector<
    IModels['POST/wtsy/livecourse/addMaterial.json']['Res']
  >;
  'GET/wtsy/livecourse/delMaterial.json': ResSelector<
    IModels['GET/wtsy/livecourse/delMaterial.json']['Res']
  >;
  'GET/wtsy/livecourse/sendInstantMessage.json': ResSelector<
    IModels['GET/wtsy/livecourse/sendInstantMessage.json']['Res']
  >;
  'GET/wtsy/livecourse/listInstantMessage.json': ResSelector<
    IModels['GET/wtsy/livecourse/listInstantMessage.json']['Res']
  >;
  'GET/wtsy/livecourse/forbidMessage.json': ResSelector<
    IModels['GET/wtsy/livecourse/forbidMessage.json']['Res']
  >;
  'POST/wtsy/ptextcourse/add.json': ResSelector<IModels['POST/wtsy/ptextcourse/add.json']['Res']>;
  'POST/wtsy/ptextcourse/update.json': ResSelector<
    IModels['POST/wtsy/ptextcourse/update.json']['Res']
  >;
  'POST/wtsy/ptextcourse/delete.json': ResSelector<
    IModels['POST/wtsy/ptextcourse/delete.json']['Res']
  >;
  'POST/wtsy/ptextcourse/publish.json': ResSelector<
    IModels['POST/wtsy/ptextcourse/publish.json']['Res']
  >;
  'GET/wtsy/ptextcourse/findList.json': ResSelector<
    IModels['GET/wtsy/ptextcourse/findList.json']['Res']
  >;
  'GET/wtsy/ptextcourse/get.json': ResSelector<IModels['GET/wtsy/ptextcourse/get.json']['Res']>;
  'GET/wtsy/category/treeAll.json': ResSelector<IModels['GET/wtsy/category/treeAll.json']['Res']>;
  'GET/wtsy/category/listSub.json': ResSelector<IModels['GET/wtsy/category/listSub.json']['Res']>;
  'GET/wtsy/category/listAll.json': ResSelector<IModels['GET/wtsy/category/listAll.json']['Res']>;
  'GET/haitang/wtsy/createUrl.json': ResSelector<IModels['GET/haitang/wtsy/createUrl.json']['Res']>;
  'GET/wtsy/copyright/query.json': ResSelector<IModels['GET/wtsy/copyright/query.json']['Res']>;
  'GET/wtsy/tag/query': ResSelector<IModels['GET/wtsy/tag/query']['Res']>;
  'GET/wtsy/club/campaign.json': ResSelector<IModels['GET/wtsy/club/campaign.json']['Res']>;
}

export function createFetch(fetchConfig: RequesterOption) {
  const rapperFetch = getRapperRequest(fetchConfig);

  return {
    /**
     * 接口名：查询服务详情
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3601&mod=8492&itf=80675
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/service/getServiceDetail.json': (
      req?: IModels['GET/service/getServiceDetail.json']['Req'],
      extra?: IExtra,
    ) => {
      return rapperFetch({
        url: '/service/getServiceDetail.json',
        method: 'GET',
        params: req,
        extra,
      }) as Promise<IResponseTypes['GET/service/getServiceDetail.json']>;
    },

    /**
     * 接口名：服务列表分页查询
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3601&mod=8492&itf=81178
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/service/listServicesByQuery.json': (
      req?: IModels['GET/service/listServicesByQuery.json']['Req'],
      extra?: IExtra,
    ) => {
      return rapperFetch({
        url: '/service/listServicesByQuery.json',
        method: 'GET',
        params: req,
        extra,
      }) as Promise<IResponseTypes['GET/service/listServicesByQuery.json']>;
    },

    /**
     * 接口名：新增或编辑服务（下一步）
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3601&mod=8492&itf=81180
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'POST/service/addOrUpdateService.json': (
      req?: IModels['POST/service/addOrUpdateService.json']['Req'],
      extra?: IExtra,
    ) => {
      return rapperFetch({
        url: '/service/addOrUpdateService.json',
        method: 'POST',
        params: req,
        extra,
      }) as Promise<IResponseTypes['POST/service/addOrUpdateService.json']>;
    },

    /**
     * 接口名：服务状态修改
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3601&mod=8492&itf=81370
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'POST/service/updateServiceStatus.json': (
      req?: IModels['POST/service/updateServiceStatus.json']['Req'],
      extra?: IExtra,
    ) => {
      return rapperFetch({
        url: '/service/updateServiceStatus.json',
        method: 'POST',
        params: req,
        extra,
      }) as Promise<IResponseTypes['POST/service/updateServiceStatus.json']>;
    },

    /**
     * 接口名：上传图片
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3601&mod=8492&itf=81372
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'POST/service/uploadPic.json': (
      req?: IModels['POST/service/uploadPic.json']['Req'],
      extra?: IExtra,
    ) => {
      return rapperFetch({
        url: '/service/uploadPic.json',
        method: 'POST',
        params: req,
        extra,
      }) as Promise<IResponseTypes['POST/service/uploadPic.json']>;
    },

    /**
     * 接口名：批量上传图片
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3601&mod=8492&itf=86771
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'POST/service/uploadPicBatch.json': (
      req?: IModels['POST/service/uploadPicBatch.json']['Req'],
      extra?: IExtra,
    ) => {
      return rapperFetch({
        url: '/service/uploadPicBatch.json',
        method: 'POST',
        params: req,
        extra,
      }) as Promise<IResponseTypes['POST/service/uploadPicBatch.json']>;
    },

    /**
     * 接口名：场景元数据
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3601&mod=8492&itf=81375
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/service/getSceneMetaInfo.json': (
      req?: IModels['GET/service/getSceneMetaInfo.json']['Req'],
      extra?: IExtra,
    ) => {
      return rapperFetch({
        url: '/service/getSceneMetaInfo.json',
        method: 'GET',
        params: req,
        extra,
      }) as Promise<IResponseTypes['GET/service/getSceneMetaInfo.json']>;
    },

    /**
     * 接口名：服务提交审核
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3601&mod=8492&itf=81771
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/service/submitServiceToCheck.json': (
      req?: IModels['GET/service/submitServiceToCheck.json']['Req'],
      extra?: IExtra,
    ) => {
      return rapperFetch({
        url: '/service/submitServiceToCheck.json',
        method: 'GET',
        params: req,
        extra,
      }) as Promise<IResponseTypes['GET/service/submitServiceToCheck.json']>;
    },

    /**
     * 接口名：撤回服务审核
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3601&mod=8492&itf=81946
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'POST/service/withdrawServiceCheck.json': (
      req?: IModels['POST/service/withdrawServiceCheck.json']['Req'],
      extra?: IExtra,
    ) => {
      return rapperFetch({
        url: '/service/withdrawServiceCheck.json',
        method: 'POST',
        params: req,
        extra,
      }) as Promise<IResponseTypes['POST/service/withdrawServiceCheck.json']>;
    },

    /**
     * 接口名：保存服务
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3601&mod=8492&itf=82682
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'POST/service/saveService.json': (
      req?: IModels['POST/service/saveService.json']['Req'],
      extra?: IExtra,
    ) => {
      return rapperFetch({
        url: '/service/saveService.json',
        method: 'POST',
        params: req,
        extra,
      }) as Promise<IResponseTypes['POST/service/saveService.json']>;
    },

    /**
     * 接口名：公司信息完整性校验
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3601&mod=8492&itf=85741
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/service/checkCompanyInfo.json': (
      req?: IModels['GET/service/checkCompanyInfo.json']['Req'],
      extra?: IExtra,
    ) => {
      return rapperFetch({
        url: '/service/checkCompanyInfo.json',
        method: 'GET',
        params: req,
        extra,
      }) as Promise<IResponseTypes['GET/service/checkCompanyInfo.json']>;
    },

    /**
     * 接口名：查询订单列表
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3601&mod=8555&itf=81311
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/agreement/findAgreementList.json_todo': (
      req?: IModels['GET/agreement/findAgreementList.json_todo']['Req'],
      extra?: IExtra,
    ) => {
      return rapperFetch({
        url: '/agreement/findAgreementList.json_todo',
        method: 'GET',
        params: req,
        extra,
      }) as Promise<IResponseTypes['GET/agreement/findAgreementList.json_todo']>;
    },

    /**
     * 接口名：根据id获取订单详情
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3601&mod=8555&itf=81313
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/agreement/getAgreementById.json': (
      req?: IModels['GET/agreement/getAgreementById.json']['Req'],
      extra?: IExtra,
    ) => {
      return rapperFetch({
        url: '/agreement/getAgreementById.json',
        method: 'GET',
        params: req,
        extra,
      }) as Promise<IResponseTypes['GET/agreement/getAgreementById.json']>;
    },

    /**
     * 接口名：服务商新建订单
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3601&mod=8555&itf=81346
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'POST/agreement/tpAddAgreement.json': (
      req?: IModels['POST/agreement/tpAddAgreement.json']['Req'],
      extra?: IExtra,
    ) => {
      return rapperFetch({
        url: '/agreement/tpAddAgreement.json',
        method: 'POST',
        params: req,
        extra,
      }) as Promise<IResponseTypes['POST/agreement/tpAddAgreement.json']>;
    },

    /**
     * 接口名：发起签约
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3601&mod=8555&itf=81351
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'POST/agreement/signAgreement.json': (
      req?: IModels['POST/agreement/signAgreement.json']['Req'],
      extra?: IExtra,
    ) => {
      return rapperFetch({
        url: '/agreement/signAgreement.json',
        method: 'POST',
        params: req,
        extra,
      }) as Promise<IResponseTypes['POST/agreement/signAgreement.json']>;
    },

    /**
     * 接口名：开始服务
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3601&mod=8555&itf=82109
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/agreement/beginAgreement.json': (
      req?: IModels['GET/agreement/beginAgreement.json']['Req'],
      extra?: IExtra,
    ) => {
      return rapperFetch({
        url: '/agreement/beginAgreement.json',
        method: 'GET',
        params: req,
        extra,
      }) as Promise<IResponseTypes['GET/agreement/beginAgreement.json']>;
    },

    /**
     * 接口名：恢复协议
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3601&mod=8555&itf=82110
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/agreement/recoverAgreement.json': (
      req?: IModels['GET/agreement/recoverAgreement.json']['Req'],
      extra?: IExtra,
    ) => {
      return rapperFetch({
        url: '/agreement/recoverAgreement.json',
        method: 'GET',
        params: req,
        extra,
      }) as Promise<IResponseTypes['GET/agreement/recoverAgreement.json']>;
    },

    /**
     * 接口名：终止协议
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3601&mod=8555&itf=82275
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/agreement/terminateAgreement.json': (
      req?: IModels['GET/agreement/terminateAgreement.json']['Req'],
      extra?: IExtra,
    ) => {
      return rapperFetch({
        url: '/agreement/terminateAgreement.json',
        method: 'GET',
        params: req,
        extra,
      }) as Promise<IResponseTypes['GET/agreement/terminateAgreement.json']>;
    },

    /**
     * 接口名：暂停协议
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3601&mod=8555&itf=83123
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/agreement/pauseAgreement.json': (
      req?: IModels['GET/agreement/pauseAgreement.json']['Req'],
      extra?: IExtra,
    ) => {
      return rapperFetch({
        url: '/agreement/pauseAgreement.json',
        method: 'GET',
        params: req,
        extra,
      }) as Promise<IResponseTypes['GET/agreement/pauseAgreement.json']>;
    },

    /**
     * 接口名：查询订单操作记录列表
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3601&mod=8555&itf=85471
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/agreement/listAgreementUpdateRecords.json': (
      req?: IModels['GET/agreement/listAgreementUpdateRecords.json']['Req'],
      extra?: IExtra,
    ) => {
      return rapperFetch({
        url: '/agreement/listAgreementUpdateRecords.json',
        method: 'GET',
        params: req,
        extra,
      }) as Promise<IResponseTypes['GET/agreement/listAgreementUpdateRecords.json']>;
    },

    /**
     * 接口名：更新服务商基础信息
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3601&mod=8556&itf=81171
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/company/updateCompany.json': (
      req?: IModels['GET/company/updateCompany.json']['Req'],
      extra?: IExtra,
    ) => {
      return rapperFetch({
        url: '/company/updateCompany.json',
        method: 'GET',
        params: req,
        extra,
      }) as Promise<IResponseTypes['GET/company/updateCompany.json']>;
    },

    /**
     * 接口名：新增操作员
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3601&mod=8556&itf=81225
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'POST/operator/addOperator.json': (
      req?: IModels['POST/operator/addOperator.json']['Req'],
      extra?: IExtra,
    ) => {
      return rapperFetch({
        url: '/operator/addOperator.json',
        method: 'POST',
        params: req,
        extra,
      }) as Promise<IResponseTypes['POST/operator/addOperator.json']>;
    },

    /**
     * 接口名：更新操作员
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3601&mod=8556&itf=81227
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'POST/operator/updateOperator.json': (
      req?: IModels['POST/operator/updateOperator.json']['Req'],
      extra?: IExtra,
    ) => {
      return rapperFetch({
        url: '/operator/updateOperator.json',
        method: 'POST',
        params: req,
        extra,
      }) as Promise<IResponseTypes['POST/operator/updateOperator.json']>;
    },

    /**
     * 接口名：删除操作员
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3601&mod=8556&itf=81228
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/operator/deleteOperator.json': (
      req?: IModels['GET/operator/deleteOperator.json']['Req'],
      extra?: IExtra,
    ) => {
      return rapperFetch({
        url: '/operator/deleteOperator.json',
        method: 'GET',
        params: req,
        extra,
      }) as Promise<IResponseTypes['GET/operator/deleteOperator.json']>;
    },

    /**
     * 接口名：根据id获取操作员详情
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3601&mod=8556&itf=81229
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/operator/getOperatorById.json': (
      req?: IModels['GET/operator/getOperatorById.json']['Req'],
      extra?: IExtra,
    ) => {
      return rapperFetch({
        url: '/operator/getOperatorById.json',
        method: 'GET',
        params: req,
        extra,
      }) as Promise<IResponseTypes['GET/operator/getOperatorById.json']>;
    },

    /**
     * 接口名：分页查询操作员列表
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3601&mod=8556&itf=81230
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/operator/findOperatorList.json': (
      req?: IModels['GET/operator/findOperatorList.json']['Req'],
      extra?: IExtra,
    ) => {
      return rapperFetch({
        url: '/operator/findOperatorList.json',
        method: 'GET',
        params: req,
        extra,
      }) as Promise<IResponseTypes['GET/operator/findOperatorList.json']>;
    },

    /**
     * 接口名：分页查询代理商子账户（客户分组）
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3601&mod=8556&itf=81241
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/delegate/findDelegateList.json': (
      req?: IModels['GET/delegate/findDelegateList.json']['Req'],
      extra?: IExtra,
    ) => {
      return rapperFetch({
        url: '/delegate/findDelegateList.json',
        method: 'GET',
        params: req,
        extra,
      }) as Promise<IResponseTypes['GET/delegate/findDelegateList.json']>;
    },

    /**
     * 接口名：删除子账户
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3601&mod=8556&itf=81242
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/delegate/deleteDelegateById.json': (
      req?: IModels['GET/delegate/deleteDelegateById.json']['Req'],
      extra?: IExtra,
    ) => {
      return rapperFetch({
        url: '/delegate/deleteDelegateById.json',
        method: 'GET',
        params: req,
        extra,
      }) as Promise<IResponseTypes['GET/delegate/deleteDelegateById.json']>;
    },

    /**
     * 接口名：新增代理商子账户
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3601&mod=8556&itf=81243
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/delegate/addDelegate.json': (
      req?: IModels['GET/delegate/addDelegate.json']['Req'],
      extra?: IExtra,
    ) => {
      return rapperFetch({
        url: '/delegate/addDelegate.json',
        method: 'GET',
        params: req,
        extra,
      }) as Promise<IResponseTypes['GET/delegate/addDelegate.json']>;
    },

    /**
     * 接口名：新增岗位（角色）
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3601&mod=8556&itf=81344
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/role/addRole.json': (req?: IModels['GET/role/addRole.json']['Req'], extra?: IExtra) => {
      return rapperFetch({
        url: '/role/addRole.json',
        method: 'GET',
        params: req,
        extra,
      }) as Promise<IResponseTypes['GET/role/addRole.json']>;
    },

    /**
     * 接口名：查询岗位列表
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3601&mod=8556&itf=81345
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/role/findRoleList.json': (
      req?: IModels['GET/role/findRoleList.json']['Req'],
      extra?: IExtra,
    ) => {
      return rapperFetch({
        url: '/role/findRoleList.json',
        method: 'GET',
        params: req,
        extra,
      }) as Promise<IResponseTypes['GET/role/findRoleList.json']>;
    },

    /**
     * 接口名：查询服务商基本信息
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3601&mod=8556&itf=81353
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/company/getCompanyById.json': (
      req?: IModels['GET/company/getCompanyById.json']['Req'],
      extra?: IExtra,
    ) => {
      return rapperFetch({
        url: '/company/getCompanyById.json',
        method: 'GET',
        params: req,
        extra,
      }) as Promise<IResponseTypes['GET/company/getCompanyById.json']>;
    },

    /**
     * 接口名：分页查询现有客户
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3601&mod=8558&itf=81173
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/customer/findCustomerList.json': (
      req?: IModels['GET/customer/findCustomerList.json']['Req'],
      extra?: IExtra,
    ) => {
      return rapperFetch({
        url: '/customer/findCustomerList.json',
        method: 'GET',
        params: req,
        extra,
      }) as Promise<IResponseTypes['GET/customer/findCustomerList.json']>;
    },

    /**
     * 接口名：分页查询公海客户
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3601&mod=8558&itf=81248
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/customer/findPotentialCustomerList.json': (
      req?: IModels['GET/customer/findPotentialCustomerList.json']['Req'],
      extra?: IExtra,
    ) => {
      return rapperFetch({
        url: '/customer/findPotentialCustomerList.json',
        method: 'GET',
        params: req,
        extra,
      }) as Promise<IResponseTypes['GET/customer/findPotentialCustomerList.json']>;
    },

    /**
     * 接口名：分页查询现有客户账户
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3601&mod=8558&itf=83420
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/customer/findCustomerAccountList.json': (
      req?: IModels['GET/customer/findCustomerAccountList.json']['Req'],
      extra?: IExtra,
    ) => {
      return rapperFetch({
        url: '/customer/findCustomerAccountList.json',
        method: 'GET',
        params: req,
        extra,
      }) as Promise<IResponseTypes['GET/customer/findCustomerAccountList.json']>;
    },

    /**
     * 接口名：根据id获取客户详情
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3601&mod=8558&itf=81244
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/customer/getCustomerById.json': (
      req?: IModels['GET/customer/getCustomerById.json']['Req'],
      extra?: IExtra,
    ) => {
      return rapperFetch({
        url: '/customer/getCustomerById.json',
        method: 'GET',
        params: req,
        extra,
      }) as Promise<IResponseTypes['GET/customer/getCustomerById.json']>;
    },

    /**
     * 接口名：分配客户
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3601&mod=8558&itf=81665
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'POST/customer/updateDelegate.json': (
      req?: IModels['POST/customer/updateDelegate.json']['Req'],
      extra?: IExtra,
    ) => {
      return rapperFetch({
        url: '/customer/updateDelegate.json',
        method: 'POST',
        params: req,
        extra,
      }) as Promise<IResponseTypes['POST/customer/updateDelegate.json']>;
    },

    /**
     * 接口名：客户效果查看
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3601&mod=8558&itf=87910
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/customer/getEffectData.json': (
      req?: IModels['GET/customer/getEffectData.json']['Req'],
      extra?: IExtra,
    ) => {
      return rapperFetch({
        url: '/customer/getEffectData.json',
        method: 'GET',
        params: req,
        extra,
      }) as Promise<IResponseTypes['GET/customer/getEffectData.json']>;
    },

    /**
     * 接口名：服务商id和资质查询
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3601&mod=8597&itf=81224
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/login/userinfoList.json': (
      req?: IModels['GET/login/userinfoList.json']['Req'],
      extra?: IExtra,
    ) => {
      return rapperFetch({
        url: '/login/userinfoList.json',
        method: 'GET',
        params: req,
        extra,
      }) as Promise<IResponseTypes['GET/login/userinfoList.json']>;
    },

    /**
     * 接口名：获取超级推荐伪登录url
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3601&mod=8597&itf=82580
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/login/getLoginUrl.json': (
      req?: IModels['GET/login/getLoginUrl.json']['Req'],
      extra?: IExtra,
    ) => {
      return rapperFetch({
        url: '/login/getLoginUrl.json',
        method: 'GET',
        params: req,
        extra,
      }) as Promise<IResponseTypes['GET/login/getLoginUrl.json']>;
    },

    /**
     * 接口名：查询支付明细
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3601&mod=8613&itf=81663
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/account/findPayDetailList.json': (
      req?: IModels['GET/account/findPayDetailList.json']['Req'],
      extra?: IExtra,
    ) => {
      return rapperFetch({
        url: '/account/findPayDetailList.json',
        method: 'GET',
        params: req,
        extra,
      }) as Promise<IResponseTypes['GET/account/findPayDetailList.json']>;
    },

    /**
     * 接口名：下载支付明细
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3601&mod=8613&itf=85381
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/account/downloadAlipayDetail.json': (
      req?: IModels['GET/account/downloadAlipayDetail.json']['Req'],
      extra?: IExtra,
    ) => {
      return rapperFetch({
        url: '/account/downloadAlipayDetail.json',
        method: 'GET',
        params: req,
        extra,
      }) as Promise<IResponseTypes['GET/account/downloadAlipayDetail.json']>;
    },

    /**
     * 接口名：伪登陆
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3601&mod=8729&itf=82585
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/sem_login.htm': (req?: IModels['GET/sem_login.htm']['Req'], extra?: IExtra) => {
      return rapperFetch({
        url: '/sem_login.htm',
        method: 'GET',
        params: req,
        extra,
      }) as Promise<IResponseTypes['GET/sem_login.htm']>;
    },

    /**
     * 接口名：昨日活跃客户数排行
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3601&mod=9535&itf=87735
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/homepage/getActiveCustRank.json': (
      req?: IModels['GET/homepage/getActiveCustRank.json']['Req'],
      extra?: IExtra,
    ) => {
      return rapperFetch({
        url: '/homepage/getActiveCustRank.json',
        method: 'GET',
        params: req,
        extra,
      }) as Promise<IResponseTypes['GET/homepage/getActiveCustRank.json']>;
    },

    /**
     * 接口名：我的订单
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3601&mod=9535&itf=87713
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/homepage/findAgreementList.json': (
      req?: IModels['GET/homepage/findAgreementList.json']['Req'],
      extra?: IExtra,
    ) => {
      return rapperFetch({
        url: '/homepage/findAgreementList.json',
        method: 'GET',
        params: req,
        extra,
      }) as Promise<IResponseTypes['GET/homepage/findAgreementList.json']>;
    },

    /**
     * 接口名：消息通知
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3601&mod=9535&itf=87715
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/message/findMessageList.json': (
      req?: IModels['GET/message/findMessageList.json']['Req'],
      extra?: IExtra,
    ) => {
      return rapperFetch({
        url: '/message/findMessageList.json',
        method: 'GET',
        params: req,
        extra,
      }) as Promise<IResponseTypes['GET/message/findMessageList.json']>;
    },

    /**
     * 接口名：查询消息详情
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3601&mod=9535&itf=87736
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/message/getMessageById.json': (
      req?: IModels['GET/message/getMessageById.json']['Req'],
      extra?: IExtra,
    ) => {
      return rapperFetch({
        url: '/message/getMessageById.json',
        method: 'GET',
        params: req,
        extra,
      }) as Promise<IResponseTypes['GET/message/getMessageById.json']>;
    },

    /**
     * 接口名：昨日消耗排行
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3601&mod=9535&itf=87717
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/homepage/getCostRank.json': (
      req?: IModels['GET/homepage/getCostRank.json']['Req'],
      extra?: IExtra,
    ) => {
      return rapperFetch({
        url: '/homepage/getCostRank.json',
        method: 'GET',
        params: req,
        extra,
      }) as Promise<IResponseTypes['GET/homepage/getCostRank.json']>;
    },

    /**
     * 接口名：首页实时数据概览
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3601&mod=9535&itf=87722
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/homepage/getRealTimeData.json': (
      req?: IModels['GET/homepage/getRealTimeData.json']['Req'],
      extra?: IExtra,
    ) => {
      return rapperFetch({
        url: '/homepage/getRealTimeData.json',
        method: 'GET',
        params: req,
        extra,
      }) as Promise<IResponseTypes['GET/homepage/getRealTimeData.json']>;
    },

    /**
     * 接口名：未读消息数量
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3601&mod=9535&itf=87764
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/message/getUnreadLetterCount.json': (
      req?: IModels['GET/message/getUnreadLetterCount.json']['Req'],
      extra?: IExtra,
    ) => {
      return rapperFetch({
        url: '/message/getUnreadLetterCount.json',
        method: 'GET',
        params: req,
        extra,
      }) as Promise<IResponseTypes['GET/message/getUnreadLetterCount.json']>;
    },

    /**
     * 接口名：首页实时数据分时
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3601&mod=9535&itf=87780
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/homepage/getRealTimeDataHour.json': (
      req?: IModels['GET/homepage/getRealTimeDataHour.json']['Req'],
      extra?: IExtra,
    ) => {
      return rapperFetch({
        url: '/homepage/getRealTimeDataHour.json',
        method: 'GET',
        params: req,
        extra,
      }) as Promise<IResponseTypes['GET/homepage/getRealTimeDataHour.json']>;
    },

    /**
     * 接口名：服务商能力查询
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3601&mod=9535&itf=87870
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/homepage/getAbilityInfo.json': (
      req?: IModels['GET/homepage/getAbilityInfo.json']['Req'],
      extra?: IExtra,
    ) => {
      return rapperFetch({
        url: '/homepage/getAbilityInfo.json',
        method: 'GET',
        params: req,
        extra,
      }) as Promise<IResponseTypes['GET/homepage/getAbilityInfo.json']>;
    },

    /**
     * 接口名：获取服务商星级
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3601&mod=9535&itf=87871
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/homepage/getStarLevel.json': (
      req?: IModels['GET/homepage/getStarLevel.json']['Req'],
      extra?: IExtra,
    ) => {
      return rapperFetch({
        url: '/homepage/getStarLevel.json',
        method: 'GET',
        params: req,
        extra,
      }) as Promise<IResponseTypes['GET/homepage/getStarLevel.json']>;
    },

    /**
     * 接口名：获取星级权益(首页3个)
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3601&mod=9535&itf=87872
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/homepage/getStarLevel3Rights.json': (
      req?: IModels['GET/homepage/getStarLevel3Rights.json']['Req'],
      extra?: IExtra,
    ) => {
      return rapperFetch({
        url: '/homepage/getStarLevel3Rights.json',
        method: 'GET',
        params: req,
        extra,
      }) as Promise<IResponseTypes['GET/homepage/getStarLevel3Rights.json']>;
    },

    /**
     * 接口名：获取星级权益
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3601&mod=9535&itf=87873
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/homepage/getStarLevelRights.json': (
      req?: IModels['GET/homepage/getStarLevelRights.json']['Req'],
      extra?: IExtra,
    ) => {
      return rapperFetch({
        url: '/homepage/getStarLevelRights.json',
        method: 'GET',
        params: req,
        extra,
      }) as Promise<IResponseTypes['GET/homepage/getStarLevelRights.json']>;
    },

    /**
     * 接口名：服务商能力短板
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3601&mod=9535&itf=87879
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/homepage/getLowAbility.json': (
      req?: IModels['GET/homepage/getLowAbility.json']['Req'],
      extra?: IExtra,
    ) => {
      return rapperFetch({
        url: '/homepage/getLowAbility.json',
        method: 'GET',
        params: req,
        extra,
      }) as Promise<IResponseTypes['GET/homepage/getLowAbility.json']>;
    },

    /**
     * 接口名：我的订单数量
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3601&mod=9535&itf=87912
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/homepage/getAgreementCount.json': (
      req?: IModels['GET/homepage/getAgreementCount.json']['Req'],
      extra?: IExtra,
    ) => {
      return rapperFetch({
        url: '/homepage/getAgreementCount.json',
        method: 'GET',
        params: req,
        extra,
      }) as Promise<IResponseTypes['GET/homepage/getAgreementCount.json']>;
    },

    /**
     * 接口名：示例接口
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3601&mod=9567&itf=87894
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/example/1575014439783': (
      req?: IModels['GET/example/1575014439783']['Req'],
      extra?: IExtra,
    ) => {
      return rapperFetch({
        url: '/example/1575014439783',
        method: 'GET',
        params: req,
        extra,
      }) as Promise<IResponseTypes['GET/example/1575014439783']>;
    },

    /**
     * 接口名：转化分析
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3601&mod=9567&itf=87895
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/datacenter/getConversionAnalysis.json': (
      req?: IModels['GET/datacenter/getConversionAnalysis.json']['Req'],
      extra?: IExtra,
    ) => {
      return rapperFetch({
        url: '/datacenter/getConversionAnalysis.json',
        method: 'GET',
        params: req,
        extra,
      }) as Promise<IResponseTypes['GET/datacenter/getConversionAnalysis.json']>;
    },

    /**
     * 接口名：订单分析
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3601&mod=9567&itf=87897
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/datacenter/getAgreementAnalysis.json': (
      req?: IModels['GET/datacenter/getAgreementAnalysis.json']['Req'],
      extra?: IExtra,
    ) => {
      return rapperFetch({
        url: '/datacenter/getAgreementAnalysis.json',
        method: 'GET',
        params: req,
        extra,
      }) as Promise<IResponseTypes['GET/datacenter/getAgreementAnalysis.json']>;
    },

    /**
     * 接口名：客户分析
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3601&mod=9567&itf=87899
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/datacenter/getCustAnalysis.json': (
      req?: IModels['GET/datacenter/getCustAnalysis.json']['Req'],
      extra?: IExtra,
    ) => {
      return rapperFetch({
        url: '/datacenter/getCustAnalysis.json',
        method: 'GET',
        params: req,
        extra,
      }) as Promise<IResponseTypes['GET/datacenter/getCustAnalysis.json']>;
    },

    /**
     * 接口名：分页查询课程栏目列表
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3632&mod=8571&itf=82207
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/wtsy/serise/findList.json': (
      req?: IModels['GET/wtsy/serise/findList.json']['Req'],
      extra?: IExtra,
    ) => {
      return rapperFetch({
        url: '/wtsy/serise/findList.json',
        method: 'GET',
        params: req,
        extra,
      }) as Promise<IResponseTypes['GET/wtsy/serise/findList.json']>;
    },

    /**
     * 接口名：根据id删除栏目
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3632&mod=8571&itf=82232
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'POST/wtsy/serise/delete.json': (
      req?: IModels['POST/wtsy/serise/delete.json']['Req'],
      extra?: IExtra,
    ) => {
      return rapperFetch({
        url: '/wtsy/serise/delete.json',
        method: 'POST',
        params: req,
        extra,
      }) as Promise<IResponseTypes['POST/wtsy/serise/delete.json']>;
    },

    /**
     * 接口名：根据id获取栏目详情
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3632&mod=8571&itf=82240
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/wtsy/serise/get.json': (
      req?: IModels['GET/wtsy/serise/get.json']['Req'],
      extra?: IExtra,
    ) => {
      return rapperFetch({
        url: '/wtsy/serise/get.json',
        method: 'GET',
        params: req,
        extra,
      }) as Promise<IResponseTypes['GET/wtsy/serise/get.json']>;
    },

    /**
     * 接口名：栏目发布
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3632&mod=8571&itf=82242
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'POST/wtsy/serise/publish.json': (
      req?: IModels['POST/wtsy/serise/publish.json']['Req'],
      extra?: IExtra,
    ) => {
      return rapperFetch({
        url: '/wtsy/serise/publish.json',
        method: 'POST',
        params: req,
        extra,
      }) as Promise<IResponseTypes['POST/wtsy/serise/publish.json']>;
    },

    /**
     * 接口名：添加栏目
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3632&mod=8571&itf=82243
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'POST/wtsy/serise/add.json': (
      req?: IModels['POST/wtsy/serise/add.json']['Req'],
      extra?: IExtra,
    ) => {
      return rapperFetch({
        url: '/wtsy/serise/add.json',
        method: 'POST',
        params: req,
        extra,
      }) as Promise<IResponseTypes['POST/wtsy/serise/add.json']>;
    },

    /**
     * 接口名：修改栏目
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3632&mod=8571&itf=82244
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'POST/wtsy/serise/update.json': (
      req?: IModels['POST/wtsy/serise/update.json']['Req'],
      extra?: IExtra,
    ) => {
      return rapperFetch({
        url: '/wtsy/serise/update.json',
        method: 'POST',
        params: req,
        extra,
      }) as Promise<IResponseTypes['POST/wtsy/serise/update.json']>;
    },

    /**
     * 接口名：分页查询课程教案列表
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3632&mod=8683&itf=82278
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/wtsy/plan/findList.json': (
      req?: IModels['GET/wtsy/plan/findList.json']['Req'],
      extra?: IExtra,
    ) => {
      return rapperFetch({
        url: '/wtsy/plan/findList.json',
        method: 'GET',
        params: req,
        extra,
      }) as Promise<IResponseTypes['GET/wtsy/plan/findList.json']>;
    },

    /**
     * 接口名：添加课程教案
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3632&mod=8683&itf=82271
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'POST/wtsy/plan/add.json': (
      req?: IModels['POST/wtsy/plan/add.json']['Req'],
      extra?: IExtra,
    ) => {
      return rapperFetch({
        url: '/wtsy/plan/add.json',
        method: 'POST',
        params: req,
        extra,
      }) as Promise<IResponseTypes['POST/wtsy/plan/add.json']>;
    },

    /**
     * 接口名：修改/翻新课程教案
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3632&mod=8683&itf=82282
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'POST/wtsy/plan/update.json': (
      req?: IModels['POST/wtsy/plan/update.json']['Req'],
      extra?: IExtra,
    ) => {
      return rapperFetch({
        url: '/wtsy/plan/update.json',
        method: 'POST',
        params: req,
        extra,
      }) as Promise<IResponseTypes['POST/wtsy/plan/update.json']>;
    },

    /**
     * 接口名：根据id删除教案
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3632&mod=8683&itf=82283
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'POST/wtsy/plan/delete.json': (
      req?: IModels['POST/wtsy/plan/delete.json']['Req'],
      extra?: IExtra,
    ) => {
      return rapperFetch({
        url: '/wtsy/plan/delete.json',
        method: 'POST',
        params: req,
        extra,
      }) as Promise<IResponseTypes['POST/wtsy/plan/delete.json']>;
    },

    /**
     * 接口名：教案发布
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3632&mod=8683&itf=82284
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'POST/wtsy/plan/publish.json': (
      req?: IModels['POST/wtsy/plan/publish.json']['Req'],
      extra?: IExtra,
    ) => {
      return rapperFetch({
        url: '/wtsy/plan/publish.json',
        method: 'POST',
        params: req,
        extra,
      }) as Promise<IResponseTypes['POST/wtsy/plan/publish.json']>;
    },

    /**
     * 接口名：根据id获取教案详情
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3632&mod=8683&itf=82273
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/wtsy/plan/get.json': (req?: IModels['GET/wtsy/plan/get.json']['Req'], extra?: IExtra) => {
      return rapperFetch({
        url: '/wtsy/plan/get.json',
        method: 'GET',
        params: req,
        extra,
      }) as Promise<IResponseTypes['GET/wtsy/plan/get.json']>;
    },

    /**
     * 接口名：分页查询教案历史列表
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3632&mod=8683&itf=83478
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/wtsy/plan/findHistoryList.json': (
      req?: IModels['GET/wtsy/plan/findHistoryList.json']['Req'],
      extra?: IExtra,
    ) => {
      return rapperFetch({
        url: '/wtsy/plan/findHistoryList.json',
        method: 'GET',
        params: req,
        extra,
      }) as Promise<IResponseTypes['GET/wtsy/plan/findHistoryList.json']>;
    },

    /**
     * 接口名：编辑直播课程
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3632&mod=8686&itf=82434
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'POST/wtsy/livecourse/update.json': (
      req?: IModels['POST/wtsy/livecourse/update.json']['Req'],
      extra?: IExtra,
    ) => {
      return rapperFetch({
        url: '/wtsy/livecourse/update.json',
        method: 'POST',
        params: req,
        extra,
      }) as Promise<IResponseTypes['POST/wtsy/livecourse/update.json']>;
    },

    /**
     * 接口名：添加直播课程
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3632&mod=8686&itf=82441
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'POST/wtsy/livecourse/add.json': (
      req?: IModels['POST/wtsy/livecourse/add.json']['Req'],
      extra?: IExtra,
    ) => {
      return rapperFetch({
        url: '/wtsy/livecourse/add.json',
        method: 'POST',
        params: req,
        extra,
      }) as Promise<IResponseTypes['POST/wtsy/livecourse/add.json']>;
    },

    /**
     * 接口名：根据id删除课程
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3632&mod=8686&itf=82440
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'POST/wtsy/livecourse/delete.json': (
      req?: IModels['POST/wtsy/livecourse/delete.json']['Req'],
      extra?: IExtra,
    ) => {
      return rapperFetch({
        url: '/wtsy/livecourse/delete.json',
        method: 'POST',
        params: req,
        extra,
      }) as Promise<IResponseTypes['POST/wtsy/livecourse/delete.json']>;
    },

    /**
     * 接口名：发布直播课程
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3632&mod=8686&itf=82442
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'POST/wtsy/livecourse/publish.json': (
      req?: IModels['POST/wtsy/livecourse/publish.json']['Req'],
      extra?: IExtra,
    ) => {
      return rapperFetch({
        url: '/wtsy/livecourse/publish.json',
        method: 'POST',
        params: req,
        extra,
      }) as Promise<IResponseTypes['POST/wtsy/livecourse/publish.json']>;
    },

    /**
     * 接口名：分页查询列表
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3632&mod=8686&itf=82437
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/wtsy/livecourse/findList.json': (
      req?: IModels['GET/wtsy/livecourse/findList.json']['Req'],
      extra?: IExtra,
    ) => {
      return rapperFetch({
        url: '/wtsy/livecourse/findList.json',
        method: 'GET',
        params: req,
        extra,
      }) as Promise<IResponseTypes['GET/wtsy/livecourse/findList.json']>;
    },

    /**
     * 接口名：根据id获取详情
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3632&mod=8686&itf=82439
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/wtsy/livecourse/get.json': (
      req?: IModels['GET/wtsy/livecourse/get.json']['Req'],
      extra?: IExtra,
    ) => {
      return rapperFetch({
        url: '/wtsy/livecourse/get.json',
        method: 'GET',
        params: req,
        extra,
      }) as Promise<IResponseTypes['GET/wtsy/livecourse/get.json']>;
    },

    /**
     * 接口名：获取开播链接
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3632&mod=8686&itf=82444
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/wtsy/livecourse/liveUrl.json': (
      req?: IModels['GET/wtsy/livecourse/liveUrl.json']['Req'],
      extra?: IExtra,
    ) => {
      return rapperFetch({
        url: '/wtsy/livecourse/liveUrl.json',
        method: 'GET',
        params: req,
        extra,
      }) as Promise<IResponseTypes['GET/wtsy/livecourse/liveUrl.json']>;
    },

    /**
     * 接口名：直播课程时间段查询
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3632&mod=8686&itf=83497
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/wtsy/livecourse/findTimeList.json': (
      req?: IModels['GET/wtsy/livecourse/findTimeList.json']['Req'],
      extra?: IExtra,
    ) => {
      return rapperFetch({
        url: '/wtsy/livecourse/findTimeList.json',
        method: 'GET',
        params: req,
        extra,
      }) as Promise<IResponseTypes['GET/wtsy/livecourse/findTimeList.json']>;
    },

    /**
     * 接口名：统计当前在线人数
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3632&mod=8686&itf=87638
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/wtsy/livecourse/countOnLine.json': (
      req?: IModels['GET/wtsy/livecourse/countOnLine.json']['Req'],
      extra?: IExtra,
    ) => {
      return rapperFetch({
        url: '/wtsy/livecourse/countOnLine.json',
        method: 'GET',
        params: req,
        extra,
      }) as Promise<IResponseTypes['GET/wtsy/livecourse/countOnLine.json']>;
    },

    /**
     * 接口名：添加材料
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3632&mod=8686&itf=87639
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'POST/wtsy/livecourse/addMaterial.json': (
      req?: IModels['POST/wtsy/livecourse/addMaterial.json']['Req'],
      extra?: IExtra,
    ) => {
      return rapperFetch({
        url: '/wtsy/livecourse/addMaterial.json',
        method: 'POST',
        params: req,
        extra,
      }) as Promise<IResponseTypes['POST/wtsy/livecourse/addMaterial.json']>;
    },

    /**
     * 接口名：材料删除
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3632&mod=8686&itf=87640
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/wtsy/livecourse/delMaterial.json': (
      req?: IModels['GET/wtsy/livecourse/delMaterial.json']['Req'],
      extra?: IExtra,
    ) => {
      return rapperFetch({
        url: '/wtsy/livecourse/delMaterial.json',
        method: 'GET',
        params: req,
        extra,
      }) as Promise<IResponseTypes['GET/wtsy/livecourse/delMaterial.json']>;
    },

    /**
     * 接口名：讲师发送IM消息
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3632&mod=8686&itf=88516
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/wtsy/livecourse/sendInstantMessage.json': (
      req?: IModels['GET/wtsy/livecourse/sendInstantMessage.json']['Req'],
      extra?: IExtra,
    ) => {
      return rapperFetch({
        url: '/wtsy/livecourse/sendInstantMessage.json',
        method: 'GET',
        params: req,
        extra,
      }) as Promise<IResponseTypes['GET/wtsy/livecourse/sendInstantMessage.json']>;
    },

    /**
     * 接口名：获取聊天消息列表
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3632&mod=8686&itf=88517
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/wtsy/livecourse/listInstantMessage.json': (
      req?: IModels['GET/wtsy/livecourse/listInstantMessage.json']['Req'],
      extra?: IExtra,
    ) => {
      return rapperFetch({
        url: '/wtsy/livecourse/listInstantMessage.json',
        method: 'GET',
        params: req,
        extra,
      }) as Promise<IResponseTypes['GET/wtsy/livecourse/listInstantMessage.json']>;
    },

    /**
     * 接口名：IM禁言或放开禁言
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3632&mod=8686&itf=88518
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/wtsy/livecourse/forbidMessage.json': (
      req?: IModels['GET/wtsy/livecourse/forbidMessage.json']['Req'],
      extra?: IExtra,
    ) => {
      return rapperFetch({
        url: '/wtsy/livecourse/forbidMessage.json',
        method: 'GET',
        params: req,
        extra,
      }) as Promise<IResponseTypes['GET/wtsy/livecourse/forbidMessage.json']>;
    },

    /**
     * 接口名：添加图文课程
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3632&mod=8687&itf=82291
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'POST/wtsy/ptextcourse/add.json': (
      req?: IModels['POST/wtsy/ptextcourse/add.json']['Req'],
      extra?: IExtra,
    ) => {
      return rapperFetch({
        url: '/wtsy/ptextcourse/add.json',
        method: 'POST',
        params: req,
        extra,
      }) as Promise<IResponseTypes['POST/wtsy/ptextcourse/add.json']>;
    },

    /**
     * 接口名：编辑图文课程
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3632&mod=8687&itf=82429
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'POST/wtsy/ptextcourse/update.json': (
      req?: IModels['POST/wtsy/ptextcourse/update.json']['Req'],
      extra?: IExtra,
    ) => {
      return rapperFetch({
        url: '/wtsy/ptextcourse/update.json',
        method: 'POST',
        params: req,
        extra,
      }) as Promise<IResponseTypes['POST/wtsy/ptextcourse/update.json']>;
    },

    /**
     * 接口名：根据id删除课程
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3632&mod=8687&itf=82427
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'POST/wtsy/ptextcourse/delete.json': (
      req?: IModels['POST/wtsy/ptextcourse/delete.json']['Req'],
      extra?: IExtra,
    ) => {
      return rapperFetch({
        url: '/wtsy/ptextcourse/delete.json',
        method: 'POST',
        params: req,
        extra,
      }) as Promise<IResponseTypes['POST/wtsy/ptextcourse/delete.json']>;
    },

    /**
     * 接口名：发布图文课程
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3632&mod=8687&itf=82430
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'POST/wtsy/ptextcourse/publish.json': (
      req?: IModels['POST/wtsy/ptextcourse/publish.json']['Req'],
      extra?: IExtra,
    ) => {
      return rapperFetch({
        url: '/wtsy/ptextcourse/publish.json',
        method: 'POST',
        params: req,
        extra,
      }) as Promise<IResponseTypes['POST/wtsy/ptextcourse/publish.json']>;
    },

    /**
     * 接口名：分页查询列表
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3632&mod=8687&itf=82421
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/wtsy/ptextcourse/findList.json': (
      req?: IModels['GET/wtsy/ptextcourse/findList.json']['Req'],
      extra?: IExtra,
    ) => {
      return rapperFetch({
        url: '/wtsy/ptextcourse/findList.json',
        method: 'GET',
        params: req,
        extra,
      }) as Promise<IResponseTypes['GET/wtsy/ptextcourse/findList.json']>;
    },

    /**
     * 接口名：根据id图文课程
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3632&mod=8687&itf=82422
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/wtsy/ptextcourse/get.json': (
      req?: IModels['GET/wtsy/ptextcourse/get.json']['Req'],
      extra?: IExtra,
    ) => {
      return rapperFetch({
        url: '/wtsy/ptextcourse/get.json',
        method: 'GET',
        params: req,
        extra,
      }) as Promise<IResponseTypes['GET/wtsy/ptextcourse/get.json']>;
    },

    /**
     * 接口名：所有目录树
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3632&mod=8682&itf=83153
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/wtsy/category/treeAll.json': (
      req?: IModels['GET/wtsy/category/treeAll.json']['Req'],
      extra?: IExtra,
    ) => {
      return rapperFetch({
        url: '/wtsy/category/treeAll.json',
        method: 'GET',
        params: req,
        extra,
      }) as Promise<IResponseTypes['GET/wtsy/category/treeAll.json']>;
    },

    /**
     * 接口名：下级目录
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3632&mod=8682&itf=83154
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/wtsy/category/listSub.json': (
      req?: IModels['GET/wtsy/category/listSub.json']['Req'],
      extra?: IExtra,
    ) => {
      return rapperFetch({
        url: '/wtsy/category/listSub.json',
        method: 'GET',
        params: req,
        extra,
      }) as Promise<IResponseTypes['GET/wtsy/category/listSub.json']>;
    },

    /**
     * 接口名：所有类目打平
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3632&mod=8682&itf=83938
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/wtsy/category/listAll.json': (
      req?: IModels['GET/wtsy/category/listAll.json']['Req'],
      extra?: IExtra,
    ) => {
      return rapperFetch({
        url: '/wtsy/category/listAll.json',
        method: 'GET',
        params: req,
        extra,
      }) as Promise<IResponseTypes['GET/wtsy/category/listAll.json']>;
    },

    /**
     * 接口名：海棠新建创意接口
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3632&mod=8682&itf=84198
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/haitang/wtsy/createUrl.json': (
      req?: IModels['GET/haitang/wtsy/createUrl.json']['Req'],
      extra?: IExtra,
    ) => {
      return rapperFetch({
        url: '/haitang/wtsy/createUrl.json',
        method: 'GET',
        params: req,
        extra,
      }) as Promise<IResponseTypes['GET/haitang/wtsy/createUrl.json']>;
    },

    /**
     * 接口名：版权查询
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3632&mod=8825&itf=83268
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/wtsy/copyright/query.json': (
      req?: IModels['GET/wtsy/copyright/query.json']['Req'],
      extra?: IExtra,
    ) => {
      return rapperFetch({
        url: '/wtsy/copyright/query.json',
        method: 'GET',
        params: req,
        extra,
      }) as Promise<IResponseTypes['GET/wtsy/copyright/query.json']>;
    },

    /**
     * 接口名：标签查询
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3632&mod=8826&itf=83269
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/wtsy/tag/query': (req?: IModels['GET/wtsy/tag/query']['Req'], extra?: IExtra) => {
      return rapperFetch({
        url: '/wtsy/tag/query',
        method: 'GET',
        params: req,
        extra,
      }) as Promise<IResponseTypes['GET/wtsy/tag/query']>;
    },

    /**
     * 接口名：活动转链工具
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3632&mod=9513&itf=87522
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/wtsy/club/campaign.json': (
      req?: IModels['GET/wtsy/club/campaign.json']['Req'],
      extra?: IExtra,
    ) => {
      return rapperFetch({
        url: '/wtsy/club/campaign.json',
        method: 'GET',
        params: req,
        extra,
      }) as Promise<IResponseTypes['GET/wtsy/club/campaign.json']>;
    },
  };
}
