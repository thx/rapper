
/**
 * @chongzhi @mozhi
 * 来自rap的项目所有接口集合，该文件由 mm models 命令自动生成，请勿手动更改！
 * 新增接口请在rap上添加，然后执行 mm models 会自动更新本文件
 */

module.exports = [

    // 获取当前业务场景元数据 - 2741#59641
    {
      "name": "api_solutionComponent_list_get",
      "method": "GET",
      "url": "/api/solutionComponent/list.json"
    },
    // 获取用户组件模板 - 2741#59986
    {
      "name": "api_solutionComponent_userTemplate_list_get",
      "method": "GET",
      "url": "/api/solutionComponent/userTemplate/list.json"
    },
    // 获取组件元数据列表 - 2741#59996
    {
      "name": "api_solutionComponent_meta_page_get",
      "method": "GET",
      "url": "/api/solutionComponent/meta/page.json"
    },
    // 获取推广单元默认设置 - 2741#60017
    {
      "name": "api_adgroup_default_get",
      "method": "GET",
      "url": "/api/adgroup/default.json"
    },
    // 获取推广计划默认设置 - 2741#60048
    {
      "name": "api_campaign_default_get",
      "method": "GET",
      "url": "/api/campaign/default.json"
    },
    // 新建推广计划 - 2741#60070
    {
      "name": "api_campaign_add_post",
      "method": "POST",
      "url": "/api/campaign/add.json"
    },
    // 新建推广单元 - 2741#60072
    {
      "name": "api_adgroup_add_post",
      "method": "POST",
      "url": "/api/adgroup/add.json"
    },
    // 获取草稿计划 - 2741#60083
    {
      "name": "api_campaign_draft_list_get",
      "method": "GET",
      "url": "/api/campaign/draft/list.json"
    },
    // 获取有效计划数 - 2741#60135
    {
      "name": "api_campaign_valid_count_get",
      "method": "GET",
      "url": "/api/campaign/valid/count.json"
    },
    // 获取计划详情 - 2741#60136
    {
      "name": "api_campaign_query_get",
      "method": "GET",
      "url": "/api/campaign/query.json"
    },
    // 全量修改计划信息 - 2741#60137
    {
      "name": "api_campaign_modEntire_put",
      "method": "PUT",
      "url": "/api/campaign/modEntire.json"
    },
    // 获取单元详情 - 2741#60140
    {
      "name": "api_adgroup_query_get",
      "method": "GET",
      "url": "/api/adgroup/query.json"
    },
    // 全量修改单元信息 - 2741#60141
    {
      "name": "api_adgroup_modEntire_put",
      "method": "PUT",
      "url": "/api/adgroup/modEntire.json"
    },
    // 删除草稿计划 - 2741#60306
    {
      "name": "api_campaign_draft_delete_delete",
      "method": "DELETE",
      "url": "/api/campaign/draft/delete.json"
    },
    // 用户信息（权限等） - 2741#60308
    {
      "name": "loginUser_info_get",
      "method": "GET",
      "url": "/loginUser/info.json"
    },
    // 用户常量码表 - 2741#60309
    {
      "name": "code_all_get",
      "method": "GET",
      "url": "/code/all.json"
    },
    // 导航全部信息数 - 2741#60318
    {
      "name": "message_getAllMessageCount_get",
      "method": "GET",
      "url": "/message/getAllMessageCount.json"
    },
    // 【会场引流】新增创意绑定，creativeId与单元绑定 - 2741#60379
    {
      "name": "api_creative_bind_post",
      "method": "POST",
      "url": "/api/creative/bind.json"
    },
    // 获取计划列表 - 2741#60408
    {
      "name": "api_campaign_list_get",
      "method": "GET",
      "url": "/api/campaign/list.json"
    },
    // 分页获取计划信息 - 2741#60416
    {
      "name": "api_campaign_page_get",
      "method": "GET",
      "url": "/api/campaign/page.json"
    },
    // 工具-服务商 - 2741#60451
    {
      "name": "api_sem_info_get",
      "method": "GET",
      "url": "/api/sem/info.json"
    },
    // alp配置接口 - 2741#60452
    {
      "name": "zuanshi__get",
      "method": "GET",
      "url": "https://mo.m.taobao.com/zuanshi/"
    },
    // 批量修改计划信息 - 2741#60545
    {
      "name": "api_campaign_batchMod_put",
      "method": "PUT",
      "url": "/api/campaign/batchMod.json"
    },
    // 置顶/取消置顶 - 2741#60547
    {
      "name": "api_campaign_setTop_put",
      "method": "PUT",
      "url": "/api/campaign/setTop.json"
    },
    // 删除计划 - 2741#60548
    {
      "name": "api_campaign_delete_delete",
      "method": "DELETE",
      "url": "/api/campaign/delete.json"
    },
    // 获取单元列表 - 2741#60558
    {
      "name": "api_adgroup_list_get",
      "method": "GET",
      "url": "/api/adgroup/list.json"
    },
    // 计划克隆 - 2741#60559
    {
      "name": "api_campaign_clone_post",
      "method": "POST",
      "url": "/api/campaign/clone.json"
    },
    // 获取计划克隆阶段 - 2741#60560
    {
      "name": "api_campaign_getCloneProcessStatus_get",
      "method": "GET",
      "url": "/api/campaign/getCloneProcessStatus.json"
    },
    // 分页获取单元列表 - 2741#60561
    {
      "name": "api_adgroup_page_get",
      "method": "GET",
      "url": "/api/adgroup/page.json"
    },
    // 互动平台-获取活动列表 - 2741#60608
    {
      "name": "user_activity_findList_get",
      "method": "GET",
      "url": "/user/activity/findList.json"
    },
    // 互动平台-活动报名 - 2741#60609
    {
      "name": "user_activity_signUp_get",
      "method": "GET",
      "url": "/user/activity/signUp.json"
    },
    // 批量修改单元信息 - 2741#60631
    {
      "name": "api_adgroup_batchMod_put",
      "method": "PUT",
      "url": "/api/adgroup/batchMod.json"
    },
    // 单元克隆 - 2741#60632
    {
      "name": "api_adgroup_clone_post",
      "method": "POST",
      "url": "/api/adgroup/clone.json"
    },
    // 批量删除单元 - 2741#60636
    {
      "name": "api_adgroup_batchDelete_delete",
      "method": "DELETE",
      "url": "/api/adgroup/batchDelete.json"
    },
    // 【定向】分页查看设置的定向列表 - 2741#60676
    {
      "name": "api_horizontal_crowd_page_get",
      "method": "GET",
      "url": "/api/horizontal/crowd/page.json"
    },
    // 横向管理修改出价 - 2741#60714
    {
      "name": "api_horizontal_price_batchMod_put",
      "method": "PUT",
      "url": "/api/horizontal/price/batchMod.json"
    },
    // 【广告位】分页查看设置的广告位接口 - 2741#60716
    {
      "name": "api_horizontal_adzone_page_get",
      "method": "GET",
      "url": "/api/horizontal/adzone/page.json"
    },
    // 【广告位】查看广告位的条件 - 2741#60717
    {
      "name": "api_horizontal_adzone_condition_get",
      "method": "GET",
      "url": "/api/horizontal/adzone/condition.json"
    },
    // 【广告位】横向管理整体替换广告位 - 2741#60718
    {
      "name": "api_horizontal_adzone_modAll_put",
      "method": "PUT",
      "url": "/api/horizontal/adzone/modAll.json"
    },
    // 【广告位】横向管理查看广告位维度聚合 - 2741#60719
    {
      "name": "api_horizontal_price_adzone_list_post",
      "method": "POST",
      "url": "/api/horizontal/price/adzone/list.json"
    },
    // 【广告位】横向管理解绑广告位 - 2741#60720
    {
      "name": "api_horizontal_adzone_delete_delete",
      "method": "DELETE",
      "url": "/api/horizontal/adzone/delete.json"
    },
    // 【定向】横向管理修改部分人群 - 2741#60722
    {
      "name": "api_horizontal_crowd_modPart_put",
      "method": "PUT",
      "url": "/api/horizontal/crowd/modPart.json"
    },
    // 【定向】横向管理移除定向 - 2741#60723
    {
      "name": "api_horizontal_crowd_delete_delete",
      "method": "DELETE",
      "url": "/api/horizontal/crowd/delete.json"
    },
    // 新增用户组件模板 - 2741#60725
    {
      "name": "api_solutionComponent_userTemplate_add_post",
      "method": "POST",
      "url": "/api/solutionComponent/userTemplate/add.json"
    },
    // 用户 - 获取用户账户金额信息 - 2741#61288
    {
      "name": "index_account_get",
      "method": "GET",
      "url": "/index/account.json"
    },
    // 定向 - 获取定向组 - 2741#61390
    {
      "name": "target_label_findTargetCategory_get",
      "method": "GET",
      "url": "/target/label/findTargetCategory.json"
    },
    // 定向 - 获取有权限的定向列表 - 2741#61391
    {
      "name": "target_label_findTargetListWithoutCategory_get",
      "method": "GET",
      "url": "/target/label/findTargetListWithoutCategory.json"
    },
    // 定向 - 获取定向推荐标签 - 2741#61438
    {
      "name": "api_target_findSuggest_get",
      "method": "GET",
      "url": "/api/target/findSuggest.json"
    },
    // 资源位 - 获取资源位筛选条件 - 2741#61440
    {
      "name": "api_adzone_condition_get",
      "method": "GET",
      "url": "/api/adzone/condition.json"
    },
    // 资源位 - 获取计划下可选资源位 - 2741#61441
    {
      "name": "api_adzone_findRecommend_get",
      "method": "GET",
      "url": "/api/adzone/findRecommend.json"
    },
    // 首页 - 获取各个产品下的日预算 - 2741#61442
    {
      "name": "mooncampaign_findCampaignDayBudgetSum_get",
      "method": "GET",
      "url": "/mooncampaign/findCampaignDayBudgetSum.json"
    },
    // 横向管理 - 获取bizcode维度的日预算 - 2741#61461
    {
      "name": "api_campaign_dayBudgetSum_get",
      "method": "GET",
      "url": "/api/campaign/dayBudgetSum.json"
    },
    // 定向 - 获取定向labelOption（不分页） - 2741#61480
    {
      "name": "target_label_findTargetLabelList_get",
      "method": "GET",
      "url": "/target/label/findTargetLabelList.json"
    },
    // 完成计划 - 2741#61494
    {
      "name": "api_campaign_complete_put",
      "method": "PUT",
      "url": "/api/campaign/complete.json"
    },
    // 定西 - 获取定向labelOpiton（分页） - 2741#61644
    {
      "name": "target_label_findTargetLabelPage_get",
      "method": "GET",
      "url": "/target/label/findTargetLabelPage.json"
    },
    // 【新增接口】横向管理-查询绑定的创意列表- 20181010更新 - 2741#61698
    {
      "name": "api_horizontal_creative_page_get",
      "method": "GET",
      "url": "/api/horizontal/creative/page.json"
    },
    // 【已有接口】批量新增创意 - 2741#61700
    {
      "name": "board_createAdboardList_post",
      "method": "POST",
      "url": "/board/createAdboardList.json"
    },
    // 【已有接口】新建创意包 - 2741#61701
    {
      "name": "aboard_package_create_post",
      "method": "POST",
      "url": "/aboard_package/create.json"
    },
    // 【已有接口】快捷制作创意回调函数 - 2741#61702
    {
      "name": "boardTool_ccBackDataForAutoCreate_post",
      "method": "POST",
      "url": "/boardTool/ccBackDataForAutoCreate.json"
    },
    // 删除用户组件模板 - 2741#61704
    {
      "name": "api_solutionComponent_userTemplate_delete_delete",
      "method": "DELETE",
      "url": "/api/solutionComponent/userTemplate/delete.json"
    },
    // 修改用户组件模板 - 2741#61707
    {
      "name": "api_solutionComponent_userTemplate_mod_put",
      "method": "PUT",
      "url": "/api/solutionComponent/userTemplate/mod.json"
    },
    // 【已有接口】新增多尺寸创意包-跳转创意中心接口 - 2741#61709
    {
      "name": "aboard_template_package_tool_gotoCreativeCenter_get",
      "method": "GET",
      "url": "/aboard_template_package_tool/gotoCreativeCenter.json"
    },
    // 【已有接口】查询商品列表 - 2741#61712
    {
      "name": "item_list_get",
      "method": "GET",
      "url": "/item/list.json"
    },
    // 资源位 - 根据ID列表获取广告位基本信息 - 2741#61714
    {
      "name": "api_adzone_findByIdList_get",
      "method": "GET",
      "url": "/api/adzone/findByIdList.json"
    },
    // 主流程最后一步检查没有绑定的创意广告位信息 - 2741#61715
    {
      "name": "api_creative_checkUnBind_get",
      "method": "GET",
      "url": "/api/creative/checkUnBind.json"
    },
    // 【定向】横向管理单元下覆盖更新定向 - 2741#61716
    {
      "name": "api_horizontal_crowd_modByType_put",
      "method": "PUT",
      "url": "/api/horizontal/crowd/modByType.json"
    },
    // 【算法】获取pv，uv预估 - 2741#61718
    {
      "name": "api_algo_getPredictedPvUv_put",
      "method": "PUT",
      "url": "/api/algo/getPredictedPvUv.json"
    },
    // 【算法】获取建议出价 - 2741#61719
    {
      "name": "api_algo_main_getSuggestBidPrice_put",
      "method": "PUT",
      "url": "/api/algo/main/getSuggestBidPrice.json"
    },
    // 查看尺寸类型等级别聚合后的流量数据 - 2741#61720
    {
      "name": "api_adzone_findEstimatePVList_get",
      "method": "GET",
      "url": "/api/adzone/findEstimatePVList.json"
    },
    // 【新接口】分页查询模板包列表 - 2741#61724
    {
      "name": "api_template_pageQueryTemplatePackages_get",
      "method": "GET",
      "url": "/api/template/pageQueryTemplatePackages.json"
    },
    // 【已有接口】新增模板创意-跳转到创意中心接口 - 2741#61725
    {
      "name": "boardTool_gotoCreativeCenter_get",
      "method": "GET",
      "url": "/boardTool/gotoCreativeCenter.json"
    },
    // opcm信息透出 - 2741#61726
    {
      "name": "ocpm_getOcpmRevealData_get",
      "method": "GET",
      "url": "/ocpm/getOcpmRevealData.json"
    },
    // 托管计划-cpa建议价格 - 2741#61731
    {
      "name": "api_algo_getBannerSuggestBidPrice_get",
      "method": "GET",
      "url": "/api/algo/getBannerSuggestBidPrice.json"
    },
    // 管理跨计划今日分时汇总 - 2741#61735
    {
      "name": "common_query_zszw_1_advertiserHourSumList_get",
      "method": "GET",
      "url": "/common/query/zszw/1/advertiserHourSumList.json"
    },
    // 管理跨计划今日分时列表 - 2741#61737
    {
      "name": "common_query_zszw_1_advertiserHourList_get",
      "method": "GET",
      "url": "/common/query/zszw/1/advertiserHourList.json"
    },
    // 管理跨计划历史分时汇总 - 2741#61738
    {
      "name": "common_query_zszw_1_rptAdvertiserHistHourSumList_get",
      "method": "GET",
      "url": "/common/query/zszw/1/rptAdvertiserHistHourSumList.json"
    },
    // 管理跨计划历史分时列表 - 2741#61740
    {
      "name": "common_query_zszw_1_rptAdvertiserHistHourList_get",
      "method": "GET",
      "url": "/common/query/zszw/1/rptAdvertiserHistHourList.json"
    },
    // 管理跨计划分日汇总 - 2741#61741
    {
      "name": "common_query_zszw_1_rptAdvertiser_get",
      "method": "GET",
      "url": "/common/query/zszw/1/rptAdvertiser.json"
    },
    // 管理跨计划历史分时列表 - 2741#61742
    {
      "name": "common_query_zszw_1_rptAdvertiserDayList_get",
      "method": "GET",
      "url": "/common/query/zszw/1/rptAdvertiserDayList.json"
    },
    // 管理具体计划分时汇总 - 2741#61743
    {
      "name": "common_query_zszw_1_campaignHourSumList_get",
      "method": "GET",
      "url": "/common/query/zszw/1/campaignHourSumList.json"
    },
    // 管理具体计划分时列表 - 2741#61744
    {
      "name": "common_query_zszw_1_campaignHourList_get",
      "method": "GET",
      "url": "/common/query/zszw/1/campaignHourList.json"
    },
    // 管理具体计划分日汇总 - 2741#61745
    {
      "name": "common_query_zszw_1_rptCampaignList_get",
      "method": "GET",
      "url": "/common/query/zszw/1/rptCampaignList.json"
    },
    // 管理具体计划分日列表 - 2741#61746
    {
      "name": "common_query_zszw_1_rptCampaignDayList_get",
      "method": "GET",
      "url": "/common/query/zszw/1/rptCampaignDayList.json"
    },
    // 管理具体单元分时汇总 - 2741#61747
    {
      "name": "common_query_zszw_1_adgroupHourSumList_get",
      "method": "GET",
      "url": "/common/query/zszw/1/adgroupHourSumList.json"
    },
    // 管理具体单元分时列表 - 2741#61748
    {
      "name": "common_query_zszw_1_adgroupHourList_get",
      "method": "GET",
      "url": "/common/query/zszw/1/adgroupHourList.json"
    },
    // 管理具体单元分日汇总 - 2741#61749
    {
      "name": "common_query_zszw_1_rptAdgroupList_get",
      "method": "GET",
      "url": "/common/query/zszw/1/rptAdgroupList.json"
    },
    // 管理具体单元分日列表 - 2741#61750
    {
      "name": "common_query_zszw_1_rptAdgroupDayList_get",
      "method": "GET",
      "url": "/common/query/zszw/1/rptAdgroupDayList.json"
    },
    // 管理单元列表获取单个单元分时报表信息 - 2741#61757
    {
      "name": "common_query_zszw_1_adgroupHourSumListBatch_get",
      "method": "GET",
      "url": "/common/query/zszw/1/adgroupHourSumListBatch.json"
    },
    // 管理单元列表获取单个单元分日报表信息 - 2741#61758
    {
      "name": "common_query_zszw_1_rptAdgroupBlendList_get",
      "method": "GET",
      "url": "/common/query/zszw/1/rptAdgroupBlendList.json"
    },
    // 管理定向列表获取单个定向分时报表信息 - 2741#61759
    {
      "name": "spec_query_zszw_targetHourSumListBatch_get",
      "method": "GET",
      "url": "/spec/query/zszw/targetHourSumListBatch.json"
    },
    // 管理定向列表获取单个定向分日报表信息 - 2741#61760
    {
      "name": "common_query_zszw_1_rptGrayTargetBlendList_get",
      "method": "GET",
      "url": "/common/query/zszw/1/rptGrayTargetBlendList.json"
    },
    // 管理资源位列表获取单个资源位分时报表信息 - 2741#61761
    {
      "name": "common_query_zszw_1_adzoneHourSumListBatch_get",
      "method": "GET",
      "url": "/common/query/zszw/1/adzoneHourSumListBatch.json"
    },
    // 管理资源位列表获取单个资源位分日报表信息 - 2741#61762
    {
      "name": "common_query_zszw_1_rptAdzoneBlendList_get",
      "method": "GET",
      "url": "/common/query/zszw/1/rptAdzoneBlendList.json"
    },
    // 【新增接口】绑定商品列表- 20181007更新 - 2741#61763
    {
      "name": "api_horizontal_creative_bindItem_post",
      "method": "POST",
      "url": "api/horizontal/creative/bindItem.json"
    },
    // 【新增接口】查询本地上传的全部尺寸-20181010更新 - 2741#61764
    {
      "name": "api_creative_allAllowSizes_get",
      "method": "GET",
      "url": "api/creative/allAllowSizes.json"
    },
    // 查看带上单元列表的计划列表 - 2741#61765
    {
      "name": "api_adgroup_findCampaignAndAdgroupList_get",
      "method": "GET",
      "url": "/api/adgroup/findCampaignAndAdgroupList.json"
    },
    // 【新增接口】获取创意筛选条件- 20181007更新 - 2741#61768
    {
      "name": "api_horizontal_creative_findCreativeQueryCondition_get",
      "method": "GET",
      "url": "api/horizontal/creative/findCreativeQueryCondition.json"
    },
    // 管理创意列表获取单个创意分时报表信息 - 2741#61769
    {
      "name": "common_query_zszw_1_creativeHourSumListBatch_get",
      "method": "GET",
      "url": "/common/query/zszw/1/creativeHourSumListBatch.json"
    },
    // 管理创意列表获取单个创意分日报表信息 - 2741#61770
    {
      "name": "common_query_zszw_1_rptCreativeBlendList_get",
      "method": "GET",
      "url": "/common/query/zszw/1/rptCreativeBlendList.json"
    },
    // 【新增接口】解绑创意 - 2741#61772
    {
      "name": "api_creative_unbind_post",
      "method": "POST",
      "url": "api/creative/unbind.json"
    },
    // 【新增接口】删除绑定的商品- 20181007更新 - 2741#61774
    {
      "name": "api_horizontal_creative_unbindItem_post",
      "method": "POST",
      "url": "api/horizontal/creative/unbindItem.json"
    },
    // 【定向已有接口】查看已创建过得定向类型，作为筛选条件 - 2741#61777
    {
      "name": "target_label_findTargetTypeCondition_get",
      "method": "GET",
      "url": "/target/label/findTargetTypeCondition.json"
    },
    // 【已有接口】查询商品类目列表 - 2741#61801
    {
      "name": "item_catList_get",
      "method": "GET",
      "url": "/item/catList.json"
    },
    // 【新增接口】查询模板的查询条件- 20181008更新 - 2741#61852
    {
      "name": "api_template_findTemplateQueryCondition_get",
      "method": "GET",
      "url": "/api/template/findTemplateQueryCondition.json"
    },
    // 【新接口】模板包收藏/取消收藏接口- 20181008更新 - 2741#61853
    {
      "name": "api_template_templatePackageCollect_post",
      "method": "POST",
      "url": "api/template/templatePackageCollect.json"
    },
    // 【定向】查询已经绑定的定向列表,不分页 - 2741#61871
    {
      "name": "api_horizontal_crowd_list_get",
      "method": "GET",
      "url": "/api/horizontal/crowd/list.json"
    },
    // 【新接口】模板编辑器跳转到创意中心接口- 20181009更新 - 2741#61880
    {
      "name": "api_creativeCenter_gotoCC_get",
      "method": "GET",
      "url": "api/creativeCenter/gotoCC.json"
    },
    // 【新接口】快捷制作跳转到创意中心 - 2741#61901
    {
      "name": "api_creativeCenter_gotoCCForCAutoCreate_get",
      "method": "GET",
      "url": "api/creativeCenter/gotoCCForCAutoCreate.json"
    },
    // 【已有接口】根据id查询宝贝详情 - 2741#62056
    {
      "name": "item_findItemPageList_get",
      "method": "GET",
      "url": "/item/findItemPageList.json"
    },
    // 推荐素材[对应快捷导入] - 2741#62195
    {
      "name": "api_material_recommend_get",
      "method": "GET",
      "url": "/api/material/recommend.json"
    },
    // 分页查询素材列表[对应从素材库选择] - 2741#62201
    {
      "name": "api_material_page_get",
      "method": "GET",
      "url": "/api/material/page.json"
    },
    // 【已有接口】单品本地上传 - 2741#62202
    {
      "name": "board_item_transImages_post",
      "method": "POST",
      "url": "/board/item/transImages.action"
    },
    // 新建素材[对应本地上传之后的操作] - 2741#62203
    {
      "name": "api_material_add_post",
      "method": "POST",
      "url": "/api/material/add.json"
    },
    // 新增创意与素材绑定[绑定接口] - 2741#62206
    {
      "name": "api_material_addBindItem_put",
      "method": "PUT",
      "url": "/api/material/addBindItem.json"
    },
    // 【已有接口】店铺上传图片 - 2741#62261
    {
      "name": "board_transFiles_get",
      "method": "GET",
      "url": "/board/transFiles.action"
    },
    // 查询创意优选数据 - 2741#62279
    {
      "name": "api_adgroup_getCreativeFilterInfo_get",
      "method": "GET",
      "url": "api/adgroup/getCreativeFilterInfo.json"
    },
    // 【已有接口】获取素材的尺寸和审核状态 - 2741#62283
    {
      "name": "trans_getConditionMapByAdzoneIdList_get",
      "method": "GET",
      "url": "trans/getConditionMapByAdzoneIdList.json"
    },
    // 新增橱窗创意并绑定单元 - 2741#62332
    {
      "name": "api_windowShowCreative_addCreativeAndBind_post",
      "method": "POST",
      "url": "/api/windowShowCreative/addCreativeAndBind.json"
    },
    // 定向-获取拉新-店铺-相似店铺筛选条件 - 2741#62448
    {
      "name": "target_label_findShopTargetQueryCondition_get",
      "method": "GET",
      "url": "/target/label/findShopTargetQueryCondition.json"
    },
    // 【计划】老计划获取有效计划总数 - 2741#63102
    {
      "name": "mooncampaign_getValidCampaignCount_get",
      "method": "GET",
      "url": "/mooncampaign/getValidCampaignCount.json"
    },
    // 【协议】是否签订过某个协议 - 2741#63126
    {
      "name": "agreement_isSigned_get",
      "method": "GET",
      "url": "/agreement/isSigned.json"
    },
    // 【协议】获取协议地址 - 2741#63127
    {
      "name": "agreement_getUrl_get",
      "method": "GET",
      "url": "/agreement/getUrl.json"
    },
    // 【协议】签订协议 - 2741#63128
    {
      "name": "agreement_sign_get",
      "method": "GET",
      "url": "/agreement/sign.json"
    },
    // 【计划】老计划获取草稿计划列表 - 2741#63182
    {
      "name": "mooncampaign_findUnfinishedCampaignList_get",
      "method": "GET",
      "url": "/mooncampaign/findUnfinishedCampaignList.json"
    },
    // 【计划】删除老计划草稿 - 2741#63183
    {
      "name": "mooncampaign_deleteUnfinishedCampaign_post",
      "method": "POST",
      "url": "/mooncampaign/deleteUnfinishedCampaign.json"
    },
    // 【定向】关键词定向判断 - 2741#63202
    {
      "name": "target_label_getKeywordShopUv_get",
      "method": "GET",
      "url": "/target/label/getKeywordShopUv.json"
    },
    // 获取素材条件 - 2741#63759
    {
      "name": "api_material_condition_get",
      "method": "GET",
      "url": "/api/material/condition.json"
    },
    // 查询单元绑定素材 - 2741#63920
    {
      "name": "api_material_findBind_get",
      "method": "GET",
      "url": "/api/material/findBind.json"
    },
    // 管理定向*资源位单个分时 - 2741#64040
    {
      "name": "spec_query_zszw_targetAdzoneHourSumList_get",
      "method": "GET",
      "url": "/spec/query/zszw/targetAdzoneHourSumList.json"
    },
    // 管理定向*资源位单个分日 - 2741#64041
    {
      "name": "common_query_zszw_1_rptTargetAdzoneBlendList_get",
      "method": "GET",
      "url": "/common/query/zszw/1/rptTargetAdzoneBlendList.json"
    },
    // 账户-违规记录-获取账户整体状态 - 2741#66096
    {
      "name": "punishRecord_getUserPunishStatus_get",
      "method": "GET",
      "url": "/punishRecord/getUserPunishStatus.json"
    },
    // 账户-违规记录-创意违规 - 2741#66191
    {
      "name": "punishRecord_findCreativePunishRecord_get",
      "method": "GET",
      "url": "/punishRecord/findCreativePunishRecord.json"
    },
    // 账户-违规记录-账户违规 - 2741#66192
    {
      "name": "punishRecord_findUserPunishRecord_get",
      "method": "GET",
      "url": "/punishRecord/findUserPunishRecord.json"
    },
    // 账户-违规记录-资质违规 - 2741#66193
    {
      "name": "punishRecord_findQualificationPunishRecord_get",
      "method": "GET",
      "url": "/punishRecord/findQualificationPunishRecord.json"
    },
    // 账户-违规记录-宝贝违规 - 2741#66194
    {
      "name": "punishRecord_findItemPunishRecord_get",
      "method": "GET",
      "url": "/punishRecord/findItemPunishRecord.json"
    },
    // 抖音广告主汇总数据 - 2741#69710
    {
      "name": "common_query_zszw_1_rptDYAdvertiser_get",
      "method": "GET",
      "url": "/common/query/zszw/1/rptDYAdvertiser.json"
    },
    // 抖音广告主分日数据 - 2741#69711
    {
      "name": "common_query_zszw_1_rptDYAdvertiserList_get",
      "method": "GET",
      "url": "/common/query/zszw/1/rptDYAdvertiserList.json"
    },
    // 抖音广告主分日数据下载 - 2741#69712
    {
      "name": "spec_download_zszw_exportDYAdvertiserList_get",
      "method": "GET",
      "url": "/spec/download/zszw/exportDYAdvertiserList.json"
    },
    // 抖音资源位汇总数据 - 2741#69713
    {
      "name": "common_query_zszw_1_rptDYAdzone_get",
      "method": "GET",
      "url": "/common/query/zszw/1/rptDYAdzone.json"
    },
    // 抖音资源位分日数据 - 2741#69714
    {
      "name": "common_query_zszw_1_rptDYAdzoneList_get",
      "method": "GET",
      "url": "/common/query/zszw/1/rptDYAdzoneList.json"
    },
    // 抖音资源位汇总数据下载 - 2741#69715
    {
      "name": "spec_download_zszw_exportDYAdzone_get",
      "method": "GET",
      "url": "/spec/download/zszw/exportDYAdzone.json"
    },
    // 抖音创意汇总数据 - 2741#69716
    {
      "name": "common_query_zszw_1_rptDYCreative_get",
      "method": "GET",
      "url": "/common/query/zszw/1/rptDYCreative.json"
    },
    // 抖音创意分日数据 - 2741#69717
    {
      "name": "common_query_zszw_1_rptDYCreativeList_get",
      "method": "GET",
      "url": "/common/query/zszw/1/rptDYCreativeList.json"
    },
    // 抖音创意汇总数据下载 - 2741#69718
    {
      "name": "spec_download_zszw_exportDYCreative_get",
      "method": "GET",
      "url": "/spec/download/zszw/exportDYCreative.json"
    },
    // 定制报表展示数据 - 2741#69719
    {
      "name": "rptn_config_updateRptConfig_get",
      "method": "GET",
      "url": "/rptn/config/updateRptConfig.json"
    },
    // bp根据id获取创意信息 - 2741#69720
    {
      "name": "rptn_creative_findList_get",
      "method": "GET",
      "url": "/rptn/creative/findList.json"
    },
    // bp根据id获取资源位详情 - 2741#69721
    {
      "name": "rptn_adzone_findList_get",
      "method": "GET",
      "url": "/rptn/adzone/findList.json"
    },
    // 抖音资源位汇总数据总数 - 2741#69767
    {
      "name": "common_query_zszw_1_rptDYAdzoneCount_get",
      "method": "GET",
      "url": "/common/query/zszw/1/rptDYAdzoneCount.json"
    },
    // 抖音创意汇总数据总数 - 2741#69768
    {
      "name": "common_query_zszw_1_rptDYCreativeCount_get",
      "method": "GET",
      "url": "/common/query/zszw/1/rptDYCreativeCount.json"
    },
    // 创建单元 - 2741#70105
    {
      "name": "adgroup_createAdgroup_post",
      "method": "POST",
      "url": "/adgroup/createAdgroup.json"
    },
    // 获取到的代理商绑定关系申请 - 2741#70434
    {
      "name": "agreement_findAgencyCustList_get",
      "method": "GET",
      "url": "/agreement/findAgencyCustList.json"
    },
    // 更新代理商绑定关系 - 2741#70436
    {
      "name": "agreement_updateAgencyStatus_get",
      "method": "GET",
      "url": "/agreement/updateAgencyStatus.json"
    }
  ]
  