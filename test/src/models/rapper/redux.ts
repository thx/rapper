/* eslint-disable */

/**
 * 本文件由 Rapper 同步 Rap 平台接口，自动生成，请勿修改
 * Rap仓库 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900
 */

import {useSelector} from 'react-redux'
import {Models, ResponseTypes} from './request'
import {dispatchAction, useResponseData, connectGetResponse, State} from './lib'

/** 请求types interface  */
interface RequestTypes {
  'GET/readme/campaign': ['GET/readme/campaign_REQUEST', 'GET/readme/campaign_SUCCESS', 'GET/readme/campaign_FAILURE']

  'GET/api/campaign/default.json': [
    'GET/api/campaign/default.json_REQUEST',
    'GET/api/campaign/default.json_SUCCESS',
    'GET/api/campaign/default.json_FAILURE'
  ]

  'GET/api/campaign/get.json': [
    'GET/api/campaign/get.json_REQUEST',
    'GET/api/campaign/get.json_SUCCESS',
    'GET/api/campaign/get.json_FAILURE'
  ]

  'GET/api/campaign/getSettleInfo.json': [
    'GET/api/campaign/getSettleInfo.json_REQUEST',
    'GET/api/campaign/getSettleInfo.json_SUCCESS',
    'GET/api/campaign/getSettleInfo.json_FAILURE'
  ]

  'GET/api/campaign/findList.json': [
    'GET/api/campaign/findList.json_REQUEST',
    'GET/api/campaign/findList.json_SUCCESS',
    'GET/api/campaign/findList.json_FAILURE'
  ]

  'GET/api/campaign/findPage.json': [
    'GET/api/campaign/findPage.json_REQUEST',
    'GET/api/campaign/findPage.json_SUCCESS',
    'GET/api/campaign/findPage.json_FAILURE'
  ]

  'GET/api/campaign/findDraftList.json': [
    'GET/api/campaign/findDraftList.json_REQUEST',
    'GET/api/campaign/findDraftList.json_SUCCESS',
    'GET/api/campaign/findDraftList.json_FAILURE'
  ]

  'DELETE/api/campaign/delete.json': [
    'DELETE/api/campaign/delete.json_REQUEST',
    'DELETE/api/campaign/delete.json_SUCCESS',
    'DELETE/api/campaign/delete.json_FAILURE'
  ]

  'POST/api/campaign/clone.json': [
    'POST/api/campaign/clone.json_REQUEST',
    'POST/api/campaign/clone.json_SUCCESS',
    'POST/api/campaign/clone.json_FAILURE'
  ]

  'PUT/api/campaign/updateCampaignBudgetRemindSetting.json': [
    'PUT/api/campaign/updateCampaignBudgetRemindSetting.json_REQUEST',
    'PUT/api/campaign/updateCampaignBudgetRemindSetting.json_SUCCESS',
    'PUT/api/campaign/updateCampaignBudgetRemindSetting.json_FAILURE'
  ]

  'GET/api/campaign/getCampaignBudgetRemindSetting.json': [
    'GET/api/campaign/getCampaignBudgetRemindSetting.json_REQUEST',
    'GET/api/campaign/getCampaignBudgetRemindSetting.json_SUCCESS',
    'GET/api/campaign/getCampaignBudgetRemindSetting.json_FAILURE'
  ]

  'PUT/api/campaign/batchModify.json': [
    'PUT/api/campaign/batchModify.json_REQUEST',
    'PUT/api/campaign/batchModify.json_SUCCESS',
    'PUT/api/campaign/batchModify.json_FAILURE'
  ]

  'PUT/api/campaign/complete.json': [
    'PUT/api/campaign/complete.json_REQUEST',
    'PUT/api/campaign/complete.json_SUCCESS',
    'PUT/api/campaign/complete.json_FAILURE'
  ]

  'PUT/api/campaign/setTop.json': [
    'PUT/api/campaign/setTop.json_REQUEST',
    'PUT/api/campaign/setTop.json_SUCCESS',
    'PUT/api/campaign/setTop.json_FAILURE'
  ]

  'GET/api/campaign/validCount.json': [
    'GET/api/campaign/validCount.json_REQUEST',
    'GET/api/campaign/validCount.json_SUCCESS',
    'GET/api/campaign/validCount.json_FAILURE'
  ]

  'GET/api/campaign/findDayBudgetSum.json': [
    'GET/api/campaign/findDayBudgetSum.json_REQUEST',
    'GET/api/campaign/findDayBudgetSum.json_SUCCESS',
    'GET/api/campaign/findDayBudgetSum.json_FAILURE'
  ]

  'GET/api/campaign/displayConfig.json': [
    'GET/api/campaign/displayConfig.json_REQUEST',
    'GET/api/campaign/displayConfig.json_SUCCESS',
    'GET/api/campaign/displayConfig.json_FAILURE'
  ]

  'GET/api/campaign/modifyConfig.json': [
    'GET/api/campaign/modifyConfig.json_REQUEST',
    'GET/api/campaign/modifyConfig.json_SUCCESS',
    'GET/api/campaign/modifyConfig.json_FAILURE'
  ]

  'PUT/api/campaign/activity/transfer.json': [
    'PUT/api/campaign/activity/transfer.json_REQUEST',
    'PUT/api/campaign/activity/transfer.json_SUCCESS',
    'PUT/api/campaign/activity/transfer.json_FAILURE'
  ]

  'PUT/api/campaign/transferScene.json': [
    'PUT/api/campaign/transferScene.json_REQUEST',
    'PUT/api/campaign/transferScene.json_SUCCESS',
    'PUT/api/campaign/transferScene.json_FAILURE'
  ]

  'PUT/api/campaign/activity/transferPhase.json': [
    'PUT/api/campaign/activity/transferPhase.json_REQUEST',
    'PUT/api/campaign/activity/transferPhase.json_SUCCESS',
    'PUT/api/campaign/activity/transferPhase.json_FAILURE'
  ]

  'GET/api/target/getRemarketingCoverage.json': [
    'GET/api/target/getRemarketingCoverage.json_REQUEST',
    'GET/api/target/getRemarketingCoverage.json_SUCCESS',
    'GET/api/target/getRemarketingCoverage.json_FAILURE'
  ]

  'POST/api/adgroup/add.json': [
    'POST/api/adgroup/add.json_REQUEST',
    'POST/api/adgroup/add.json_SUCCESS',
    'POST/api/adgroup/add.json_FAILURE'
  ]

  'GET/api/adgroup/default.json': [
    'GET/api/adgroup/default.json_REQUEST',
    'GET/api/adgroup/default.json_SUCCESS',
    'GET/api/adgroup/default.json_FAILURE'
  ]

  'GET/api/adgroup/get.json': [
    'GET/api/adgroup/get.json_REQUEST',
    'GET/api/adgroup/get.json_SUCCESS',
    'GET/api/adgroup/get.json_FAILURE'
  ]

  'GET/api/adgroup/findList.json': [
    'GET/api/adgroup/findList.json_REQUEST',
    'GET/api/adgroup/findList.json_SUCCESS',
    'GET/api/adgroup/findList.json_FAILURE'
  ]

  'DELETE/api/adgroup/batchDelete.json': [
    'DELETE/api/adgroup/batchDelete.json_REQUEST',
    'DELETE/api/adgroup/batchDelete.json_SUCCESS',
    'DELETE/api/adgroup/batchDelete.json_FAILURE'
  ]

  'POST/api/adgroup/clone.json': [
    'POST/api/adgroup/clone.json_REQUEST',
    'POST/api/adgroup/clone.json_SUCCESS',
    'POST/api/adgroup/clone.json_FAILURE'
  ]

  'PUT/api/adgroup/batchModEntire.json': [
    'PUT/api/adgroup/batchModEntire.json_REQUEST',
    'PUT/api/adgroup/batchModEntire.json_SUCCESS',
    'PUT/api/adgroup/batchModEntire.json_FAILURE'
  ]

  'PUT/api/adgroup/batchModifyPart.json': [
    'PUT/api/adgroup/batchModifyPart.json_REQUEST',
    'PUT/api/adgroup/batchModifyPart.json_SUCCESS',
    'PUT/api/adgroup/batchModifyPart.json_FAILURE'
  ]

  'GET/api/adgroup/qualityScore/findList.json': [
    'GET/api/adgroup/qualityScore/findList.json_REQUEST',
    'GET/api/adgroup/qualityScore/findList.json_SUCCESS',
    'GET/api/adgroup/qualityScore/findList.json_FAILURE'
  ]

  'GET/api/adgroup/qualityScore/findHisList.json': [
    'GET/api/adgroup/qualityScore/findHisList.json_REQUEST',
    'GET/api/adgroup/qualityScore/findHisList.json_SUCCESS',
    'GET/api/adgroup/qualityScore/findHisList.json_FAILURE'
  ]

  'PUT/api/adgroup/batchModify.json': [
    'PUT/api/adgroup/batchModify.json_REQUEST',
    'PUT/api/adgroup/batchModify.json_SUCCESS',
    'PUT/api/adgroup/batchModify.json_FAILURE'
  ]

  'GET/api/adgroup/qualityScore/findQueryCondition.json': [
    'GET/api/adgroup/qualityScore/findQueryCondition.json_REQUEST',
    'GET/api/adgroup/qualityScore/findQueryCondition.json_SUCCESS',
    'GET/api/adgroup/qualityScore/findQueryCondition.json_FAILURE'
  ]

  'GET/api/adgroup/findCampaignAndAdgroupList.json': [
    'GET/api/adgroup/findCampaignAndAdgroupList.json_REQUEST',
    'GET/api/adgroup/findCampaignAndAdgroupList.json_SUCCESS',
    'GET/api/adgroup/findCampaignAndAdgroupList.json_FAILURE'
  ]

  'PUT/api/adgroup/useSystemCreative.json': [
    'PUT/api/adgroup/useSystemCreative.json_REQUEST',
    'PUT/api/adgroup/useSystemCreative.json_SUCCESS',
    'PUT/api/adgroup/useSystemCreative.json_FAILURE'
  ]

  'PUT/api/adgroup/batchModifyEntire.json': [
    'PUT/api/adgroup/batchModifyEntire.json_REQUEST',
    'PUT/api/adgroup/batchModifyEntire.json_SUCCESS',
    'PUT/api/adgroup/batchModifyEntire.json_FAILURE'
  ]

  'PUT/api/adgroup/batchModifyPrice.json': [
    'PUT/api/adgroup/batchModifyPrice.json_REQUEST',
    'PUT/api/adgroup/batchModifyPrice.json_SUCCESS',
    'PUT/api/adgroup/batchModifyPrice.json_FAILURE'
  ]

  'POST/api/creative/batchAddAndBind.json': [
    'POST/api/creative/batchAddAndBind.json_REQUEST',
    'POST/api/creative/batchAddAndBind.json_SUCCESS',
    'POST/api/creative/batchAddAndBind.json_FAILURE'
  ]

  'PUT/api/creative/batchUnbind.json': [
    'PUT/api/creative/batchUnbind.json_REQUEST',
    'PUT/api/creative/batchUnbind.json_SUCCESS',
    'PUT/api/creative/batchUnbind.json_FAILURE'
  ]

  'GET/api/creative/recommend.json': [
    'GET/api/creative/recommend.json_REQUEST',
    'GET/api/creative/recommend.json_SUCCESS',
    'GET/api/creative/recommend.json_FAILURE'
  ]

  'GET/api/creative/findPage.json': [
    'GET/api/creative/findPage.json_REQUEST',
    'GET/api/creative/findPage.json_SUCCESS',
    'GET/api/creative/findPage.json_FAILURE'
  ]

  'GET/api/creative/findPunishRecordList.json': [
    'GET/api/creative/findPunishRecordList.json_REQUEST',
    'GET/api/creative/findPunishRecordList.json_SUCCESS',
    'GET/api/creative/findPunishRecordList.json_FAILURE'
  ]

  'GET/api/creative/findQueryCondition.json': [
    'GET/api/creative/findQueryCondition.json_REQUEST',
    'GET/api/creative/findQueryCondition.json_SUCCESS',
    'GET/api/creative/findQueryCondition.json_FAILURE'
  ]

  'GET/api/creativeCenter/gotoCreation.json': [
    'GET/api/creativeCenter/gotoCreation.json_REQUEST',
    'GET/api/creativeCenter/gotoCreation.json_SUCCESS',
    'GET/api/creativeCenter/gotoCreation.json_FAILURE'
  ]

  'GET/api/creative/template/findPackageList.json': [
    'GET/api/creative/template/findPackageList.json_REQUEST',
    'GET/api/creative/template/findPackageList.json_SUCCESS',
    'GET/api/creative/template/findPackageList.json_FAILURE'
  ]

  'GET/api/creativeCenter/gotoTemplateNew.json': [
    'GET/api/creativeCenter/gotoTemplateNew.json_REQUEST',
    'GET/api/creativeCenter/gotoTemplateNew.json_SUCCESS',
    'GET/api/creativeCenter/gotoTemplateNew.json_FAILURE'
  ]

  'GET/api/creativeCenter/getMaterial.json': [
    'GET/api/creativeCenter/getMaterial.json_REQUEST',
    'GET/api/creativeCenter/getMaterial.json_SUCCESS',
    'GET/api/creativeCenter/getMaterial.json_FAILURE'
  ]

  'DELETE/api/creative/delete.json': [
    'DELETE/api/creative/delete.json_REQUEST',
    'DELETE/api/creative/delete.json_SUCCESS',
    'DELETE/api/creative/delete.json_FAILURE'
  ]

  'PUT/api/creative/activity/batchAddTag.json': [
    'PUT/api/creative/activity/batchAddTag.json_REQUEST',
    'PUT/api/creative/activity/batchAddTag.json_SUCCESS',
    'PUT/api/creative/activity/batchAddTag.json_FAILURE'
  ]

  'POST/api/creative/preview.json': [
    'POST/api/creative/preview.json_REQUEST',
    'POST/api/creative/preview.json_SUCCESS',
    'POST/api/creative/preview.json_FAILURE'
  ]

  'GET/api/adzone/findList.json': [
    'GET/api/adzone/findList.json_REQUEST',
    'GET/api/adzone/findList.json_SUCCESS',
    'GET/api/adzone/findList.json_FAILURE'
  ]

  'GET/api/adzone/checkList.json': [
    'GET/api/adzone/checkList.json_REQUEST',
    'GET/api/adzone/checkList.json_SUCCESS',
    'GET/api/adzone/checkList.json_FAILURE'
  ]

  'PUT/api/adzone/unbindList.json': [
    'PUT/api/adzone/unbindList.json_REQUEST',
    'PUT/api/adzone/unbindList.json_SUCCESS',
    'PUT/api/adzone/unbindList.json_FAILURE'
  ]

  'PUT/api/adzone/bindList.json': [
    'PUT/api/adzone/bindList.json_REQUEST',
    'PUT/api/adzone/bindList.json_SUCCESS',
    'PUT/api/adzone/bindList.json_FAILURE'
  ]

  'GET/api/adzone/findPage.json': [
    'GET/api/adzone/findPage.json_REQUEST',
    'GET/api/adzone/findPage.json_SUCCESS',
    'GET/api/adzone/findPage.json_FAILURE'
  ]

  'PUT/api/adzone/batchModify.json': [
    'PUT/api/adzone/batchModify.json_REQUEST',
    'PUT/api/adzone/batchModify.json_SUCCESS',
    'PUT/api/adzone/batchModify.json_FAILURE'
  ]

  'GET/api/material/findPage.json': [
    'GET/api/material/findPage.json_REQUEST',
    'GET/api/material/findPage.json_SUCCESS',
    'GET/api/material/findPage.json_FAILURE'
  ]

  'GET/api/material/recommend.json': [
    'GET/api/material/recommend.json_REQUEST',
    'GET/api/material/recommend.json_SUCCESS',
    'GET/api/material/recommend.json_FAILURE'
  ]

  'GET/api/material/findQueryCondition.json': [
    'GET/api/material/findQueryCondition.json_REQUEST',
    'GET/api/material/findQueryCondition.json_SUCCESS',
    'GET/api/material/findQueryCondition.json_FAILURE'
  ]

  'GET/api/material/item/findQueryCondition.json': [
    'GET/api/material/item/findQueryCondition.json_REQUEST',
    'GET/api/material/item/findQueryCondition.json_SUCCESS',
    'GET/api/material/item/findQueryCondition.json_FAILURE'
  ]

  'GET/api/coupon/findQueryCondition.json': [
    'GET/api/coupon/findQueryCondition.json_REQUEST',
    'GET/api/coupon/findQueryCondition.json_SUCCESS',
    'GET/api/coupon/findQueryCondition.json_FAILURE'
  ]

  'GET/api/material/findPunishRecordList.json': [
    'GET/api/material/findPunishRecordList.json_REQUEST',
    'GET/api/material/findPunishRecordList.json_SUCCESS',
    'GET/api/material/findPunishRecordList.json_FAILURE'
  ]

  'GET/api/material/accessAllowed.json': [
    'GET/api/material/accessAllowed.json_REQUEST',
    'GET/api/material/accessAllowed.json_SUCCESS',
    'GET/api/material/accessAllowed.json_FAILURE'
  ]

  'GET/api/material/item/accessAllowed.json': [
    'GET/api/material/item/accessAllowed.json_REQUEST',
    'GET/api/material/item/accessAllowed.json_SUCCESS',
    'GET/api/material/item/accessAllowed.json_FAILURE'
  ]

  'GET/api/coupon/findList.json': [
    'GET/api/coupon/findList.json_REQUEST',
    'GET/api/coupon/findList.json_SUCCESS',
    'GET/api/coupon/findList.json_FAILURE'
  ]

  'GET/api/coupon/findPage.json': [
    'GET/api/coupon/findPage.json_REQUEST',
    'GET/api/coupon/findPage.json_SUCCESS',
    'GET/api/coupon/findPage.json_FAILURE'
  ]

  'GET/api/coupon/recommend.json': [
    'GET/api/coupon/recommend.json_REQUEST',
    'GET/api/coupon/recommend.json_SUCCESS',
    'GET/api/coupon/recommend.json_FAILURE'
  ]

  'GET/api/material/batchAccessAllowed.json': [
    'GET/api/material/batchAccessAllowed.json_REQUEST',
    'GET/api/material/batchAccessAllowed.json_SUCCESS',
    'GET/api/material/batchAccessAllowed.json_FAILURE'
  ]

  'PUT/api/crowd/modifyByType.json': [
    'PUT/api/crowd/modifyByType.json_REQUEST',
    'PUT/api/crowd/modifyByType.json_SUCCESS',
    'PUT/api/crowd/modifyByType.json_FAILURE'
  ]

  'DELETE/api/crowd/delete.json': [
    'DELETE/api/crowd/delete.json_REQUEST',
    'DELETE/api/crowd/delete.json_SUCCESS',
    'DELETE/api/crowd/delete.json_FAILURE'
  ]

  'GET/api/crowd/findList.json': [
    'GET/api/crowd/findList.json_REQUEST',
    'GET/api/crowd/findList.json_SUCCESS',
    'GET/api/crowd/findList.json_FAILURE'
  ]

  'GET/api/target/findSuggest.json': [
    'GET/api/target/findSuggest.json_REQUEST',
    'GET/api/target/findSuggest.json_SUCCESS',
    'GET/api/target/findSuggest.json_FAILURE'
  ]

  'POST/api/crowd/getSuggestPrice.json': [
    'POST/api/crowd/getSuggestPrice.json_REQUEST',
    'POST/api/crowd/getSuggestPrice.json_SUCCESS',
    'POST/api/crowd/getSuggestPrice.json_FAILURE'
  ]

  'POST/api/algotool/getPredictedPvUv.json': [
    'POST/api/algotool/getPredictedPvUv.json_REQUEST',
    'POST/api/algotool/getPredictedPvUv.json_SUCCESS',
    'POST/api/algotool/getPredictedPvUv.json_FAILURE'
  ]

  'GET/api/target/findList.json': [
    'GET/api/target/findList.json_REQUEST',
    'GET/api/target/findList.json_SUCCESS',
    'GET/api/target/findList.json_FAILURE'
  ]

  'GET/api/target/findCategoryList.json': [
    'GET/api/target/findCategoryList.json_REQUEST',
    'GET/api/target/findCategoryList.json_SUCCESS',
    'GET/api/target/findCategoryList.json_FAILURE'
  ]

  'GET/api/target/findLabelPage.json': [
    'GET/api/target/findLabelPage.json_REQUEST',
    'GET/api/target/findLabelPage.json_SUCCESS',
    'GET/api/target/findLabelPage.json_FAILURE'
  ]

  'GET/api/target/findTargetTypeCondition.json': [
    'GET/api/target/findTargetTypeCondition.json_REQUEST',
    'GET/api/target/findTargetTypeCondition.json_SUCCESS',
    'GET/api/target/findTargetTypeCondition.json_FAILURE'
  ]

  'GET/api/target/getKeywordShopUv.json': [
    'GET/api/target/getKeywordShopUv.json_REQUEST',
    'GET/api/target/getKeywordShopUv.json_SUCCESS',
    'GET/api/target/getKeywordShopUv.json_FAILURE'
  ]

  'GET/api/target/findShopTargetQueryCondition.json': [
    'GET/api/target/findShopTargetQueryCondition.json_REQUEST',
    'GET/api/target/findShopTargetQueryCondition.json_SUCCESS',
    'GET/api/target/findShopTargetQueryCondition.json_FAILURE'
  ]

  'GET/api/algotool/findManualBidSuggestPrice.json': [
    'GET/api/algotool/findManualBidSuggestPrice.json_REQUEST',
    'GET/api/algotool/findManualBidSuggestPrice.json_SUCCESS',
    'GET/api/algotool/findManualBidSuggestPrice.json_FAILURE'
  ]

  'POST/api/crowd/batchModify.json': [
    'POST/api/crowd/batchModify.json_REQUEST',
    'POST/api/crowd/batchModify.json_SUCCESS',
    'POST/api/crowd/batchModify.json_FAILURE'
  ]

  'GET/api/crowd/findSimulatorPointList.json': [
    'GET/api/crowd/findSimulatorPointList.json_REQUEST',
    'GET/api/crowd/findSimulatorPointList.json_SUCCESS',
    'GET/api/crowd/findSimulatorPointList.json_FAILURE'
  ]

  'POST/api/adzone/getSuggestDiscount.json': [
    'POST/api/adzone/getSuggestDiscount.json_REQUEST',
    'POST/api/adzone/getSuggestDiscount.json_SUCCESS',
    'POST/api/adzone/getSuggestDiscount.json_FAILURE'
  ]

  'POST/api/target/findSonkeywordList.json': [
    'POST/api/target/findSonkeywordList.json_REQUEST',
    'POST/api/target/findSonkeywordList.json_SUCCESS',
    'POST/api/target/findSonkeywordList.json_FAILURE'
  ]

  'GET/api/target/findRecommendList.json': [
    'GET/api/target/findRecommendList.json_REQUEST',
    'GET/api/target/findRecommendList.json_SUCCESS',
    'GET/api/target/findRecommendList.json_FAILURE'
  ]

  'GET/api/target/findRecommendPage.json': [
    'GET/api/target/findRecommendPage.json_REQUEST',
    'GET/api/target/findRecommendPage.json_SUCCESS',
    'GET/api/target/findRecommendPage.json_FAILURE'
  ]

  'PUT/api/target/addTargetLabel.json': [
    'PUT/api/target/addTargetLabel.json_REQUEST',
    'PUT/api/target/addTargetLabel.json_SUCCESS',
    'PUT/api/target/addTargetLabel.json_FAILURE'
  ]

  'POST/api/member/updateConfig.json': [
    'POST/api/member/updateConfig.json_REQUEST',
    'POST/api/member/updateConfig.json_SUCCESS',
    'POST/api/member/updateConfig.json_FAILURE'
  ]

  'GET/api/member/logout.action': [
    'GET/api/member/logout.action_REQUEST',
    'GET/api/member/logout.action_SUCCESS',
    'GET/api/member/logout.action_FAILURE'
  ]

  'GET/api/member/adminLogin.action': [
    'GET/api/member/adminLogin.action_REQUEST',
    'GET/api/member/adminLogin.action_SUCCESS',
    'GET/api/member/adminLogin.action_FAILURE'
  ]

  'POST/api/member/signProtocol.json': [
    'POST/api/member/signProtocol.json_REQUEST',
    'POST/api/member/signProtocol.json_SUCCESS',
    'POST/api/member/signProtocol.json_FAILURE'
  ]

  'GET/api/member/getInfo.json': [
    'GET/api/member/getInfo.json_REQUEST',
    'GET/api/member/getInfo.json_SUCCESS',
    'GET/api/member/getInfo.json_FAILURE'
  ]

  'POST/api/member/addContacts.json': [
    'POST/api/member/addContacts.json_REQUEST',
    'POST/api/member/addContacts.json_SUCCESS',
    'POST/api/member/addContacts.json_FAILURE'
  ]

  'GET/api/member/getQualificationBrandAccess.json': [
    'GET/api/member/getQualificationBrandAccess.json_REQUEST',
    'GET/api/member/getQualificationBrandAccess.json_SUCCESS',
    'GET/api/member/getQualificationBrandAccess.json_FAILURE'
  ]

  'GET/api/member/checkContactsName.json': [
    'GET/api/member/checkContactsName.json_REQUEST',
    'GET/api/member/checkContactsName.json_SUCCESS',
    'GET/api/member/checkContactsName.json_FAILURE'
  ]

  'GET/api/member/findContactsList.json': [
    'GET/api/member/findContactsList.json_REQUEST',
    'GET/api/member/findContactsList.json_SUCCESS',
    'GET/api/member/findContactsList.json_FAILURE'
  ]

  'GET/api/member/getPunishStatus.json': [
    'GET/api/member/getPunishStatus.json_REQUEST',
    'GET/api/member/getPunishStatus.json_SUCCESS',
    'GET/api/member/getPunishStatus.json_FAILURE'
  ]

  'GET/api/member/findPunishRecordList.json': [
    'GET/api/member/findPunishRecordList.json_REQUEST',
    'GET/api/member/findPunishRecordList.json_SUCCESS',
    'GET/api/member/findPunishRecordList.json_FAILURE'
  ]

  'GET/api/member/findQualificationPunishRecordList.json': [
    'GET/api/member/findQualificationPunishRecordList.json_REQUEST',
    'GET/api/member/findQualificationPunishRecordList.json_SUCCESS',
    'GET/api/member/findQualificationPunishRecordList.json_FAILURE'
  ]

  'GET/api/member/isProtocolSigned.json': [
    'GET/api/member/isProtocolSigned.json_REQUEST',
    'GET/api/member/isProtocolSigned.json_SUCCESS',
    'GET/api/member/isProtocolSigned.json_FAILURE'
  ]

  'POST/api/member/joinBusinessPlatform.json': [
    'POST/api/member/joinBusinessPlatform.json_REQUEST',
    'POST/api/member/joinBusinessPlatform.json_SUCCESS',
    'POST/api/member/joinBusinessPlatform.json_FAILURE'
  ]

  'GET/TODO': ['GET/TODO_REQUEST', 'GET/TODO_SUCCESS', 'GET/TODO_FAILURE']

  'GET/api/member/findDiagnoseList.json': [
    'GET/api/member/findDiagnoseList.json_REQUEST',
    'GET/api/member/findDiagnoseList.json_SUCCESS',
    'GET/api/member/findDiagnoseList.json_FAILURE'
  ]

  'GET/https://mo.m.taobao.com/feeds/': [
    'GET/https://mo.m.taobao.com/feeds/_REQUEST',
    'GET/https://mo.m.taobao.com/feeds/_SUCCESS',
    'GET/https://mo.m.taobao.com/feeds/_FAILURE'
  ]

  'GET/https://mo.m.taobao.com/one-stop/': [
    'GET/https://mo.m.taobao.com/one-stop/_REQUEST',
    'GET/https://mo.m.taobao.com/one-stop/_SUCCESS',
    'GET/https://mo.m.taobao.com/one-stop/_FAILURE'
  ]

  'GET/api/member/invitation/url.json': [
    'GET/api/member/invitation/url.json_REQUEST',
    'GET/api/member/invitation/url.json_SUCCESS',
    'GET/api/member/invitation/url.json_FAILURE'
  ]

  'GET/api/member/stage.json': [
    'GET/api/member/stage.json_REQUEST',
    'GET/api/member/stage.json_SUCCESS',
    'GET/api/member/stage.json_FAILURE'
  ]

  'GET/api/member/activity.json': [
    'GET/api/member/activity.json_REQUEST',
    'GET/api/member/activity.json_SUCCESS',
    'GET/api/member/activity.json_FAILURE'
  ]

  'GET/api/member/activity/itemGuide.json': [
    'GET/api/member/activity/itemGuide.json_REQUEST',
    'GET/api/member/activity/itemGuide.json_SUCCESS',
    'GET/api/member/activity/itemGuide.json_FAILURE'
  ]

  'GET/api/member/transfer.json': [
    'GET/api/member/transfer.json_REQUEST',
    'GET/api/member/transfer.json_SUCCESS',
    'GET/api/member/transfer.json_FAILURE'
  ]

  'GET/api/member/newGuestTask.json': [
    'GET/api/member/newGuestTask.json_REQUEST',
    'GET/api/member/newGuestTask.json_SUCCESS',
    'GET/api/member/newGuestTask.json_FAILURE'
  ]

  'GET/api/account/getAcctBalanceRemindSettingAutoRecharge.json': [
    'GET/api/account/getAcctBalanceRemindSettingAutoRecharge.json_REQUEST',
    'GET/api/account/getAcctBalanceRemindSettingAutoRecharge.json_SUCCESS',
    'GET/api/account/getAcctBalanceRemindSettingAutoRecharge.json_FAILURE'
  ]

  'GET/api/account/getSignInfo.json': [
    'GET/api/account/getSignInfo.json_REQUEST',
    'GET/api/account/getSignInfo.json_SUCCESS',
    'GET/api/account/getSignInfo.json_FAILURE'
  ]

  'PUT/api/account/modifyAcctBalanceRemindSettingAutoRecharge.json': [
    'PUT/api/account/modifyAcctBalanceRemindSettingAutoRecharge.json_REQUEST',
    'PUT/api/account/modifyAcctBalanceRemindSettingAutoRecharge.json_SUCCESS',
    'PUT/api/account/modifyAcctBalanceRemindSettingAutoRecharge.json_FAILURE'
  ]

  'PUT/api/account/unsignAutoRecharge.json': [
    'PUT/api/account/unsignAutoRecharge.json_REQUEST',
    'PUT/api/account/unsignAutoRecharge.json_SUCCESS',
    'PUT/api/account/unsignAutoRecharge.json_FAILURE'
  ]

  'GET/api/account/findItemList.json': [
    'GET/api/account/findItemList.json_REQUEST',
    'GET/api/account/findItemList.json_SUCCESS',
    'GET/api/account/findItemList.json_FAILURE'
  ]

  'GET/api/account/exportItemList.action': [
    'GET/api/account/exportItemList.action_REQUEST',
    'GET/api/account/exportItemList.action_SUCCESS',
    'GET/api/account/exportItemList.action_FAILURE'
  ]

  'GET/和钻展保持一致': ['GET/和钻展保持一致_REQUEST', 'GET/和钻展保持一致_SUCCESS', 'GET/和钻展保持一致_FAILURE']

  'GET/api/account/findMessageRemindList.json': [
    'GET/api/account/findMessageRemindList.json_REQUEST',
    'GET/api/account/findMessageRemindList.json_SUCCESS',
    'GET/api/account/findMessageRemindList.json_FAILURE'
  ]

  'POST/api/account/modifyAllMessageRemindList.json': [
    'POST/api/account/modifyAllMessageRemindList.json_REQUEST',
    'POST/api/account/modifyAllMessageRemindList.json_SUCCESS',
    'POST/api/account/modifyAllMessageRemindList.json_FAILURE'
  ]

  'GET/api/account/getRefundList.json': [
    'GET/api/account/getRefundList.json_REQUEST',
    'GET/api/account/getRefundList.json_SUCCESS',
    'GET/api/account/getRefundList.json_FAILURE'
  ]

  'POST/api/account/createRefund.json': [
    'POST/api/account/createRefund.json_REQUEST',
    'POST/api/account/createRefund.json_SUCCESS',
    'POST/api/account/createRefund.json_FAILURE'
  ]

  'GET/api/account/checkRefund.json': [
    'GET/api/account/checkRefund.json_REQUEST',
    'GET/api/account/checkRefund.json_SUCCESS',
    'GET/api/account/checkRefund.json_FAILURE'
  ]

  'GET/api/account/isSignGlobalAlipay.json': [
    'GET/api/account/isSignGlobalAlipay.json_REQUEST',
    'GET/api/account/isSignGlobalAlipay.json_SUCCESS',
    'GET/api/account/isSignGlobalAlipay.json_FAILURE'
  ]

  'GET/api/account/charge.json': [
    'GET/api/account/charge.json_REQUEST',
    'GET/api/account/charge.json_SUCCESS',
    'GET/api/account/charge.json_FAILURE'
  ]

  'GET/api/log/findOperationLog.json': [
    'GET/api/log/findOperationLog.json_REQUEST',
    'GET/api/log/findOperationLog.json_SUCCESS',
    'GET/api/log/findOperationLog.json_FAILURE'
  ]

  'GET/api/log/findAdgroupByName.json': [
    'GET/api/log/findAdgroupByName.json_REQUEST',
    'GET/api/log/findAdgroupByName.json_SUCCESS',
    'GET/api/log/findAdgroupByName.json_FAILURE'
  ]

  'GET/api/log/findCampaignByName.json': [
    'GET/api/log/findCampaignByName.json_REQUEST',
    'GET/api/log/findCampaignByName.json_SUCCESS',
    'GET/api/log/findCampaignByName.json_FAILURE'
  ]

  'GET/api/account/findAccumulateDeduct.json': [
    'GET/api/account/findAccumulateDeduct.json_REQUEST',
    'GET/api/account/findAccumulateDeduct.json_SUCCESS',
    'GET/api/account/findAccumulateDeduct.json_FAILURE'
  ]

  'GET/api/message/sendMobileCode.json': [
    'GET/api/message/sendMobileCode.json_REQUEST',
    'GET/api/message/sendMobileCode.json_SUCCESS',
    'GET/api/message/sendMobileCode.json_FAILURE'
  ]

  'POST/api/message/verifyMobilePhoneCode.json': [
    'POST/api/message/verifyMobilePhoneCode.json_REQUEST',
    'POST/api/message/verifyMobilePhoneCode.json_SUCCESS',
    'POST/api/message/verifyMobilePhoneCode.json_FAILURE'
  ]

  'GET/api/common/findCodeList.json': [
    'GET/api/common/findCodeList.json_REQUEST',
    'GET/api/common/findCodeList.json_SUCCESS',
    'GET/api/common/findCodeList.json_FAILURE'
  ]

  'GET/api/common/getVersion.json': [
    'GET/api/common/getVersion.json_REQUEST',
    'GET/api/common/getVersion.json_SUCCESS',
    'GET/api/common/getVersion.json_FAILURE'
  ]

  'GET/api/component/findComponentMetaList.json': [
    'GET/api/component/findComponentMetaList.json_REQUEST',
    'GET/api/component/findComponentMetaList.json_SUCCESS',
    'GET/api/component/findComponentMetaList.json_FAILURE'
  ]

  'GET/api/component/findMemberTemplateList.json': [
    'GET/api/component/findMemberTemplateList.json_REQUEST',
    'GET/api/component/findMemberTemplateList.json_SUCCESS',
    'GET/api/component/findMemberTemplateList.json_FAILURE'
  ]

  'POST/api/component/addMemberTemplate.json': [
    'POST/api/component/addMemberTemplate.json_REQUEST',
    'POST/api/component/addMemberTemplate.json_SUCCESS',
    'POST/api/component/addMemberTemplate.json_FAILURE'
  ]

  'PUT/api/component/updateMemberTemplate.json': [
    'PUT/api/component/updateMemberTemplate.json_REQUEST',
    'PUT/api/component/updateMemberTemplate.json_SUCCESS',
    'PUT/api/component/updateMemberTemplate.json_FAILURE'
  ]

  'DELETE/api/component/deleteMemberTemplate.json': [
    'DELETE/api/component/deleteMemberTemplate.json_REQUEST',
    'DELETE/api/component/deleteMemberTemplate.json_SUCCESS',
    'DELETE/api/component/deleteMemberTemplate.json_FAILURE'
  ]

  'GET/api/component/findMenuList.json': [
    'GET/api/component/findMenuList.json_REQUEST',
    'GET/api/component/findMenuList.json_SUCCESS',
    'GET/api/component/findMenuList.json_FAILURE'
  ]

  'GET/api/component/findComponentList.json': [
    'GET/api/component/findComponentList.json_REQUEST',
    'GET/api/component/findComponentList.json_SUCCESS',
    'GET/api/component/findComponentList.json_FAILURE'
  ]

  'GET/api/account/report/findHourSum.json': [
    'GET/api/account/report/findHourSum.json_REQUEST',
    'GET/api/account/report/findHourSum.json_SUCCESS',
    'GET/api/account/report/findHourSum.json_FAILURE'
  ]

  'GET/api/account/report/findHourList.json': [
    'GET/api/account/report/findHourList.json_REQUEST',
    'GET/api/account/report/findHourList.json_SUCCESS',
    'GET/api/account/report/findHourList.json_FAILURE'
  ]

  'GET/api/account/report/findDaySum.json': [
    'GET/api/account/report/findDaySum.json_REQUEST',
    'GET/api/account/report/findDaySum.json_SUCCESS',
    'GET/api/account/report/findDaySum.json_FAILURE'
  ]

  'GET/api/account/report/findDayList.json': [
    'GET/api/account/report/findDayList.json_REQUEST',
    'GET/api/account/report/findDayList.json_SUCCESS',
    'GET/api/account/report/findDayList.json_FAILURE'
  ]

  'GET/api/campaign/report/findPage.json': [
    'GET/api/campaign/report/findPage.json_REQUEST',
    'GET/api/campaign/report/findPage.json_SUCCESS',
    'GET/api/campaign/report/findPage.json_FAILURE'
  ]

  'GET/api/campaign/report/findList.json': [
    'GET/api/campaign/report/findList.json_REQUEST',
    'GET/api/campaign/report/findList.json_SUCCESS',
    'GET/api/campaign/report/findList.json_FAILURE'
  ]

  'GET/api/campaign/report/findSum.json': [
    'GET/api/campaign/report/findSum.json_REQUEST',
    'GET/api/campaign/report/findSum.json_SUCCESS',
    'GET/api/campaign/report/findSum.json_FAILURE'
  ]

  'GET/api/adgroup/report/findPage.json': [
    'GET/api/adgroup/report/findPage.json_REQUEST',
    'GET/api/adgroup/report/findPage.json_SUCCESS',
    'GET/api/adgroup/report/findPage.json_FAILURE'
  ]

  'GET/api/adgroup/report/findList.json': [
    'GET/api/adgroup/report/findList.json_REQUEST',
    'GET/api/adgroup/report/findList.json_SUCCESS',
    'GET/api/adgroup/report/findList.json_FAILURE'
  ]

  'GET/api/adgroup/report/findSum.json': [
    'GET/api/adgroup/report/findSum.json_REQUEST',
    'GET/api/adgroup/report/findSum.json_SUCCESS',
    'GET/api/adgroup/report/findSum.json_FAILURE'
  ]

  'GET/api/creative/report/findPage.json': [
    'GET/api/creative/report/findPage.json_REQUEST',
    'GET/api/creative/report/findPage.json_SUCCESS',
    'GET/api/creative/report/findPage.json_FAILURE'
  ]

  'GET/api/creative/report/findList.json': [
    'GET/api/creative/report/findList.json_REQUEST',
    'GET/api/creative/report/findList.json_SUCCESS',
    'GET/api/creative/report/findList.json_FAILURE'
  ]

  'GET/api/creative/report/findSum.json': [
    'GET/api/creative/report/findSum.json_REQUEST',
    'GET/api/creative/report/findSum.json_SUCCESS',
    'GET/api/creative/report/findSum.json_FAILURE'
  ]

  'GET/api/crowd/report/findPage.json': [
    'GET/api/crowd/report/findPage.json_REQUEST',
    'GET/api/crowd/report/findPage.json_SUCCESS',
    'GET/api/crowd/report/findPage.json_FAILURE'
  ]

  'GET/api/crowd/report/findList.json': [
    'GET/api/crowd/report/findList.json_REQUEST',
    'GET/api/crowd/report/findList.json_SUCCESS',
    'GET/api/crowd/report/findList.json_FAILURE'
  ]

  'GET/api/crowd/report/findSum.json': [
    'GET/api/crowd/report/findSum.json_REQUEST',
    'GET/api/crowd/report/findSum.json_SUCCESS',
    'GET/api/crowd/report/findSum.json_FAILURE'
  ]

  'GET/api/adzone/report/findPage.json': [
    'GET/api/adzone/report/findPage.json_REQUEST',
    'GET/api/adzone/report/findPage.json_SUCCESS',
    'GET/api/adzone/report/findPage.json_FAILURE'
  ]

  'GET/api/adzone/report/findList.json': [
    'GET/api/adzone/report/findList.json_REQUEST',
    'GET/api/adzone/report/findList.json_SUCCESS',
    'GET/api/adzone/report/findList.json_FAILURE'
  ]

  'GET/api/adzone/report/findSum.json': [
    'GET/api/adzone/report/findSum.json_REQUEST',
    'GET/api/adzone/report/findSum.json_SUCCESS',
    'GET/api/adzone/report/findSum.json_FAILURE'
  ]

  'GET/api/account/report/findCrowdDaySum.json': [
    'GET/api/account/report/findCrowdDaySum.json_REQUEST',
    'GET/api/account/report/findCrowdDaySum.json_SUCCESS',
    'GET/api/account/report/findCrowdDaySum.json_FAILURE'
  ]

  'GET/api/account/report/findCrowdDayList.json': [
    'GET/api/account/report/findCrowdDayList.json_REQUEST',
    'GET/api/account/report/findCrowdDayList.json_SUCCESS',
    'GET/api/account/report/findCrowdDayList.json_FAILURE'
  ]

  'GET/api/material/report/findItemPage.json': [
    'GET/api/material/report/findItemPage.json_REQUEST',
    'GET/api/material/report/findItemPage.json_SUCCESS',
    'GET/api/material/report/findItemPage.json_FAILURE'
  ]

  'GET/api/activity/report/consumerReach.json': [
    'GET/api/activity/report/consumerReach.json_REQUEST',
    'GET/api/activity/report/consumerReach.json_SUCCESS',
    'GET/api/activity/report/consumerReach.json_FAILURE'
  ]

  'GET/api/account/report/exportHourList.json': [
    'GET/api/account/report/exportHourList.json_REQUEST',
    'GET/api/account/report/exportHourList.json_SUCCESS',
    'GET/api/account/report/exportHourList.json_FAILURE'
  ]

  'GET/api/account/report/exportDayList.json': [
    'GET/api/account/report/exportDayList.json_REQUEST',
    'GET/api/account/report/exportDayList.json_SUCCESS',
    'GET/api/account/report/exportDayList.json_FAILURE'
  ]

  'GET/api/campaign/report/exportCampaign.json': [
    'GET/api/campaign/report/exportCampaign.json_REQUEST',
    'GET/api/campaign/report/exportCampaign.json_SUCCESS',
    'GET/api/campaign/report/exportCampaign.json_FAILURE'
  ]

  'GET/api/campaign/report/exportDayOrHourList.json': [
    'GET/api/campaign/report/exportDayOrHourList.json_REQUEST',
    'GET/api/campaign/report/exportDayOrHourList.json_SUCCESS',
    'GET/api/campaign/report/exportDayOrHourList.json_FAILURE'
  ]

  'GET/api/campaign/report/exportDayOrHourSum.json': [
    'GET/api/campaign/report/exportDayOrHourSum.json_REQUEST',
    'GET/api/campaign/report/exportDayOrHourSum.json_SUCCESS',
    'GET/api/campaign/report/exportDayOrHourSum.json_FAILURE'
  ]

  'GET/api/adgroup/report/exportAdgroup.json': [
    'GET/api/adgroup/report/exportAdgroup.json_REQUEST',
    'GET/api/adgroup/report/exportAdgroup.json_SUCCESS',
    'GET/api/adgroup/report/exportAdgroup.json_FAILURE'
  ]

  'GET/api/adgroup/report/exportDayOrHourList.json': [
    'GET/api/adgroup/report/exportDayOrHourList.json_REQUEST',
    'GET/api/adgroup/report/exportDayOrHourList.json_SUCCESS',
    'GET/api/adgroup/report/exportDayOrHourList.json_FAILURE'
  ]

  'GET/api/adgroup/report/exportDayOrHourSum.json': [
    'GET/api/adgroup/report/exportDayOrHourSum.json_REQUEST',
    'GET/api/adgroup/report/exportDayOrHourSum.json_SUCCESS',
    'GET/api/adgroup/report/exportDayOrHourSum.json_FAILURE'
  ]

  'GET/api/creative/report/exportCreative.json': [
    'GET/api/creative/report/exportCreative.json_REQUEST',
    'GET/api/creative/report/exportCreative.json_SUCCESS',
    'GET/api/creative/report/exportCreative.json_FAILURE'
  ]

  'GET/api/creative/report/exportDayOrHourList.json': [
    'GET/api/creative/report/exportDayOrHourList.json_REQUEST',
    'GET/api/creative/report/exportDayOrHourList.json_SUCCESS',
    'GET/api/creative/report/exportDayOrHourList.json_FAILURE'
  ]

  'GET/api/creative/report/exportDayOrHourSum.json': [
    'GET/api/creative/report/exportDayOrHourSum.json_REQUEST',
    'GET/api/creative/report/exportDayOrHourSum.json_SUCCESS',
    'GET/api/creative/report/exportDayOrHourSum.json_FAILURE'
  ]

  'GET/api/crowd/report/exportCrowd.json': [
    'GET/api/crowd/report/exportCrowd.json_REQUEST',
    'GET/api/crowd/report/exportCrowd.json_SUCCESS',
    'GET/api/crowd/report/exportCrowd.json_FAILURE'
  ]

  'GET/api/crowd/report/exportDayOrHourList.json': [
    'GET/api/crowd/report/exportDayOrHourList.json_REQUEST',
    'GET/api/crowd/report/exportDayOrHourList.json_SUCCESS',
    'GET/api/crowd/report/exportDayOrHourList.json_FAILURE'
  ]

  'GET/api/crowd/report/exportDayOrHourSum.json': [
    'GET/api/crowd/report/exportDayOrHourSum.json_REQUEST',
    'GET/api/crowd/report/exportDayOrHourSum.json_SUCCESS',
    'GET/api/crowd/report/exportDayOrHourSum.json_FAILURE'
  ]

  'GET/api/adzone/report/exportAdzone.json': [
    'GET/api/adzone/report/exportAdzone.json_REQUEST',
    'GET/api/adzone/report/exportAdzone.json_SUCCESS',
    'GET/api/adzone/report/exportAdzone.json_FAILURE'
  ]

  'GET/api/adzone/report/exportDayOrHourList.json': [
    'GET/api/adzone/report/exportDayOrHourList.json_REQUEST',
    'GET/api/adzone/report/exportDayOrHourList.json_SUCCESS',
    'GET/api/adzone/report/exportDayOrHourList.json_FAILURE'
  ]

  'GET/api/adzone/report/exportDayOrHourSum.json': [
    'GET/api/adzone/report/exportDayOrHourSum.json_REQUEST',
    'GET/api/adzone/report/exportDayOrHourSum.json_SUCCESS',
    'GET/api/adzone/report/exportDayOrHourSum.json_FAILURE'
  ]

  'GET/api/material/report/exportItem.json': [
    'GET/api/material/report/exportItem.json_REQUEST',
    'GET/api/material/report/exportItem.json_SUCCESS',
    'GET/api/material/report/exportItem.json_FAILURE'
  ]

  'GET/api/account/report/exportCrowdDayList.json': [
    'GET/api/account/report/exportCrowdDayList.json_REQUEST',
    'GET/api/account/report/exportCrowdDayList.json_SUCCESS',
    'GET/api/account/report/exportCrowdDayList.json_FAILURE'
  ]

  'GET/api/message/findLetterList.json': [
    'GET/api/message/findLetterList.json_REQUEST',
    'GET/api/message/findLetterList.json_SUCCESS',
    'GET/api/message/findLetterList.json_FAILURE'
  ]

  'GET/api/message/getLetterDetail.json': [
    'GET/api/message/getLetterDetail.json_REQUEST',
    'GET/api/message/getLetterDetail.json_SUCCESS',
    'GET/api/message/getLetterDetail.json_FAILURE'
  ]

  'POST/api/message/batchReadLetters.json': [
    'POST/api/message/batchReadLetters.json_REQUEST',
    'POST/api/message/batchReadLetters.json_SUCCESS',
    'POST/api/message/batchReadLetters.json_FAILURE'
  ]

  'GET/api/report/consumer/findSummary.json': [
    'GET/api/report/consumer/findSummary.json_REQUEST',
    'GET/api/report/consumer/findSummary.json_SUCCESS',
    'GET/api/report/consumer/findSummary.json_FAILURE'
  ]

  'GET/api/report/consumer/findConsumerCirculation.json': [
    'GET/api/report/consumer/findConsumerCirculation.json_REQUEST',
    'GET/api/report/consumer/findConsumerCirculation.json_SUCCESS',
    'GET/api/report/consumer/findConsumerCirculation.json_FAILURE'
  ]

  'GET/api/report/fans/findSummary.json': [
    'GET/api/report/fans/findSummary.json_REQUEST',
    'GET/api/report/fans/findSummary.json_SUCCESS',
    'GET/api/report/fans/findSummary.json_FAILURE'
  ]

  'GET/api/report/fans/findCirculation.json': [
    'GET/api/report/fans/findCirculation.json_REQUEST',
    'GET/api/report/fans/findCirculation.json_SUCCESS',
    'GET/api/report/fans/findCirculation.json_FAILURE'
  ]

  'GET/api/campaign/findTransferPage.json': [
    'GET/api/campaign/findTransferPage.json_REQUEST',
    'GET/api/campaign/findTransferPage.json_SUCCESS',
    'GET/api/campaign/findTransferPage.json_FAILURE'
  ]

  'POST/api/campaign/transfer.json': [
    'POST/api/campaign/transfer.json_REQUEST',
    'POST/api/campaign/transfer.json_SUCCESS',
    'POST/api/campaign/transfer.json_FAILURE'
  ]

  'GET/api/activity/report/findDaySum.json': [
    'GET/api/activity/report/findDaySum.json_REQUEST',
    'GET/api/activity/report/findDaySum.json_SUCCESS',
    'GET/api/activity/report/findDaySum.json_FAILURE'
  ]

  'GET/api/activity/report/findDayList.json': [
    'GET/api/activity/report/findDayList.json_REQUEST',
    'GET/api/activity/report/findDayList.json_SUCCESS',
    'GET/api/activity/report/findDayList.json_FAILURE'
  ]

  'GET/api/activity/report/findCrowdDaySum.json': [
    'GET/api/activity/report/findCrowdDaySum.json_REQUEST',
    'GET/api/activity/report/findCrowdDaySum.json_SUCCESS',
    'GET/api/activity/report/findCrowdDaySum.json_FAILURE'
  ]

  'GET/api/activity/report/findCrowdDayList.json': [
    'GET/api/activity/report/findCrowdDayList.json_REQUEST',
    'GET/api/activity/report/findCrowdDayList.json_SUCCESS',
    'GET/api/activity/report/findCrowdDayList.json_FAILURE'
  ]

  'GET/api/activity/report/findItemPage.json': [
    'GET/api/activity/report/findItemPage.json_REQUEST',
    'GET/api/activity/report/findItemPage.json_SUCCESS',
    'GET/api/activity/report/findItemPage.json_FAILURE'
  ]

  'GET/api/activity/report/exportDayList.json': [
    'GET/api/activity/report/exportDayList.json_REQUEST',
    'GET/api/activity/report/exportDayList.json_SUCCESS',
    'GET/api/activity/report/exportDayList.json_FAILURE'
  ]

  'GET/api/activity/report/exportCrowdDayList.json': [
    'GET/api/activity/report/exportCrowdDayList.json_REQUEST',
    'GET/api/activity/report/exportCrowdDayList.json_SUCCESS',
    'GET/api/activity/report/exportCrowdDayList.json_FAILURE'
  ]

  'GET/api/activity/report/exportItem.json': [
    'GET/api/activity/report/exportItem.json_REQUEST',
    'GET/api/activity/report/exportItem.json_SUCCESS',
    'GET/api/activity/report/exportItem.json_FAILURE'
  ]

  'GET/map': ['GET/map_REQUEST', 'GET/map_SUCCESS', 'GET/map_FAILURE']

  'GET/api/report/case/findCampaignDaySum.json': [
    'GET/api/report/case/findCampaignDaySum.json_REQUEST',
    'GET/api/report/case/findCampaignDaySum.json_SUCCESS',
    'GET/api/report/case/findCampaignDaySum.json_FAILURE'
  ]

  'GET/api/report/case/findItemSumList.json': [
    'GET/api/report/case/findItemSumList.json_REQUEST',
    'GET/api/report/case/findItemSumList.json_SUCCESS',
    'GET/api/report/case/findItemSumList.json_FAILURE'
  ]

  'GET/api/report/case/findItemTrendDayList.json': [
    'GET/api/report/case/findItemTrendDayList.json_REQUEST',
    'GET/api/report/case/findItemTrendDayList.json_SUCCESS',
    'GET/api/report/case/findItemTrendDayList.json_FAILURE'
  ]

  'GET/findList.json': ['GET/findList.json_REQUEST', 'GET/findList.json_SUCCESS', 'GET/findList.json_FAILURE']

  'GET/api/report/case/findFeedShopItemAllListComp.json': [
    'GET/api/report/case/findFeedShopItemAllListComp.json_REQUEST',
    'GET/api/report/case/findFeedShopItemAllListComp.json_SUCCESS',
    'GET/api/report/case/findFeedShopItemAllListComp.json_FAILURE'
  ]

  'GET/api/campaign/crowd/findList.json': [
    'GET/api/campaign/crowd/findList.json_REQUEST',
    'GET/api/campaign/crowd/findList.json_SUCCESS',
    'GET/api/campaign/crowd/findList.json_FAILURE'
  ]

  'PUT/api/campaign/crowd/modify.json': [
    'PUT/api/campaign/crowd/modify.json_REQUEST',
    'PUT/api/campaign/crowd/modify.json_SUCCESS',
    'PUT/api/campaign/crowd/modify.json_FAILURE'
  ]

  'POST/api/solution/add.json': [
    'POST/api/solution/add.json_REQUEST',
    'POST/api/solution/add.json_SUCCESS',
    'POST/api/solution/add.json_FAILURE'
  ]

  'GET/api/material/item/findPage.json': [
    'GET/api/material/item/findPage.json_REQUEST',
    'GET/api/material/item/findPage.json_SUCCESS',
    'GET/api/material/item/findPage.json_FAILURE'
  ]

  'GET/api/solution/allowPromotion.json': [
    'GET/api/solution/allowPromotion.json_REQUEST',
    'GET/api/solution/allowPromotion.json_SUCCESS',
    'GET/api/solution/allowPromotion.json_FAILURE'
  ]

  'POST/api/solution/batchAdd.json': [
    'POST/api/solution/batchAdd.json_REQUEST',
    'POST/api/solution/batchAdd.json_SUCCESS',
    'POST/api/solution/batchAdd.json_FAILURE'
  ]

  'GET/api/target/findLabelList.json': [
    'GET/api/target/findLabelList.json_REQUEST',
    'GET/api/target/findLabelList.json_SUCCESS',
    'GET/api/target/findLabelList.json_FAILURE'
  ]

  'GET/api/target/findSelectionCategoryList.json': [
    'GET/api/target/findSelectionCategoryList.json_REQUEST',
    'GET/api/target/findSelectionCategoryList.json_SUCCESS',
    'GET/api/target/findSelectionCategoryList.json_FAILURE'
  ]

  'GET/api/account/recharge.action': [
    'GET/api/account/recharge.action_REQUEST',
    'GET/api/account/recharge.action_SUCCESS',
    'GET/api/account/recharge.action_FAILURE'
  ]

  'GET/api/account/getInfo.json': [
    'GET/api/account/getInfo.json_REQUEST',
    'GET/api/account/getInfo.json_SUCCESS',
    'GET/api/account/getInfo.json_FAILURE'
  ]

  'POST/api/adgroup/batchAdd.json': [
    'POST/api/adgroup/batchAdd.json_REQUEST',
    'POST/api/adgroup/batchAdd.json_SUCCESS',
    'POST/api/adgroup/batchAdd.json_FAILURE'
  ]

  'POST/api/campaign/estimateContractPv.json': [
    'POST/api/campaign/estimateContractPv.json_REQUEST',
    'POST/api/campaign/estimateContractPv.json_SUCCESS',
    'POST/api/campaign/estimateContractPv.json_FAILURE'
  ]

  'POST/api/algotool/lockQuantity.json': [
    'POST/api/algotool/lockQuantity.json_REQUEST',
    'POST/api/algotool/lockQuantity.json_SUCCESS',
    'POST/api/algotool/lockQuantity.json_FAILURE'
  ]

  'GET/api/crowd/findPage.json': [
    'GET/api/crowd/findPage.json_REQUEST',
    'GET/api/crowd/findPage.json_SUCCESS',
    'GET/api/crowd/findPage.json_FAILURE'
  ]

  'POST/api/algotool/getBudgetSimulator.json': [
    'POST/api/algotool/getBudgetSimulator.json_REQUEST',
    'POST/api/algotool/getBudgetSimulator.json_SUCCESS',
    'POST/api/algotool/getBudgetSimulator.json_FAILURE'
  ]

  'POST/api/campaign/add.json': [
    'POST/api/campaign/add.json_REQUEST',
    'POST/api/campaign/add.json_SUCCESS',
    'POST/api/campaign/add.json_FAILURE'
  ]

  'GET/api/adgroup/findPage.json': [
    'GET/api/adgroup/findPage.json_REQUEST',
    'GET/api/adgroup/findPage.json_SUCCESS',
    'GET/api/adgroup/findPage.json_FAILURE'
  ]

  'PUT/api/campaign/modEntire.json': [
    'PUT/api/campaign/modEntire.json_REQUEST',
    'PUT/api/campaign/modEntire.json_SUCCESS',
    'PUT/api/campaign/modEntire.json_FAILURE'
  ]

  'GET/api/algotool/probeInterest.json': [
    'GET/api/algotool/probeInterest.json_REQUEST',
    'GET/api/algotool/probeInterest.json_SUCCESS',
    'GET/api/algotool/probeInterest.json_FAILURE'
  ]
}

/** 请求action interface  */
interface RequestAction {
  'GET/readme/campaign': (
    params?: Models['GET/readme/campaign']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/readme/campaign'
      url: '/readme/campaign'
      method: 'GET'
      params?: Models['GET/readme/campaign']['Req']
      types: ['GET/readme/campaign_REQUEST', 'GET/readme/campaign_SUCCESS', 'GET/readme/campaign_FAILURE']
    }
  }

  'GET/api/campaign/default.json': (
    params?: Models['GET/api/campaign/default.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/api/campaign/default.json'
      url: '/api/campaign/default.json'
      method: 'GET'
      params?: Models['GET/api/campaign/default.json']['Req']
      types: [
        'GET/api/campaign/default.json_REQUEST',
        'GET/api/campaign/default.json_SUCCESS',
        'GET/api/campaign/default.json_FAILURE'
      ]
    }
  }

  'GET/api/campaign/get.json': (
    params?: Models['GET/api/campaign/get.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/api/campaign/get.json'
      url: '/api/campaign/get.json'
      method: 'GET'
      params?: Models['GET/api/campaign/get.json']['Req']
      types: [
        'GET/api/campaign/get.json_REQUEST',
        'GET/api/campaign/get.json_SUCCESS',
        'GET/api/campaign/get.json_FAILURE'
      ]
    }
  }

  'GET/api/campaign/getSettleInfo.json': (
    params?: Models['GET/api/campaign/getSettleInfo.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/api/campaign/getSettleInfo.json'
      url: '/api/campaign/getSettleInfo.json'
      method: 'GET'
      params?: Models['GET/api/campaign/getSettleInfo.json']['Req']
      types: [
        'GET/api/campaign/getSettleInfo.json_REQUEST',
        'GET/api/campaign/getSettleInfo.json_SUCCESS',
        'GET/api/campaign/getSettleInfo.json_FAILURE'
      ]
    }
  }

  'GET/api/campaign/findList.json': (
    params?: Models['GET/api/campaign/findList.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/api/campaign/findList.json'
      url: '/api/campaign/findList.json'
      method: 'GET'
      params?: Models['GET/api/campaign/findList.json']['Req']
      types: [
        'GET/api/campaign/findList.json_REQUEST',
        'GET/api/campaign/findList.json_SUCCESS',
        'GET/api/campaign/findList.json_FAILURE'
      ]
    }
  }

  'GET/api/campaign/findPage.json': (
    params?: Models['GET/api/campaign/findPage.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/api/campaign/findPage.json'
      url: '/api/campaign/findPage.json'
      method: 'GET'
      params?: Models['GET/api/campaign/findPage.json']['Req']
      types: [
        'GET/api/campaign/findPage.json_REQUEST',
        'GET/api/campaign/findPage.json_SUCCESS',
        'GET/api/campaign/findPage.json_FAILURE'
      ]
    }
  }

  'GET/api/campaign/findDraftList.json': (
    params?: Models['GET/api/campaign/findDraftList.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/api/campaign/findDraftList.json'
      url: '/api/campaign/findDraftList.json'
      method: 'GET'
      params?: Models['GET/api/campaign/findDraftList.json']['Req']
      types: [
        'GET/api/campaign/findDraftList.json_REQUEST',
        'GET/api/campaign/findDraftList.json_SUCCESS',
        'GET/api/campaign/findDraftList.json_FAILURE'
      ]
    }
  }

  'DELETE/api/campaign/delete.json': (
    params?: Models['DELETE/api/campaign/delete.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'DELETE/api/campaign/delete.json'
      url: '/api/campaign/delete.json'
      method: 'DELETE'
      params?: Models['DELETE/api/campaign/delete.json']['Req']
      types: [
        'DELETE/api/campaign/delete.json_REQUEST',
        'DELETE/api/campaign/delete.json_SUCCESS',
        'DELETE/api/campaign/delete.json_FAILURE'
      ]
    }
  }

  'POST/api/campaign/clone.json': (
    params?: Models['POST/api/campaign/clone.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'POST/api/campaign/clone.json'
      url: '/api/campaign/clone.json'
      method: 'POST'
      params?: Models['POST/api/campaign/clone.json']['Req']
      types: [
        'POST/api/campaign/clone.json_REQUEST',
        'POST/api/campaign/clone.json_SUCCESS',
        'POST/api/campaign/clone.json_FAILURE'
      ]
    }
  }

  'PUT/api/campaign/updateCampaignBudgetRemindSetting.json': (
    params?: Models['PUT/api/campaign/updateCampaignBudgetRemindSetting.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'PUT/api/campaign/updateCampaignBudgetRemindSetting.json'
      url: 'api/campaign/updateCampaignBudgetRemindSetting.json'
      method: 'PUT'
      params?: Models['PUT/api/campaign/updateCampaignBudgetRemindSetting.json']['Req']
      types: [
        'PUT/api/campaign/updateCampaignBudgetRemindSetting.json_REQUEST',
        'PUT/api/campaign/updateCampaignBudgetRemindSetting.json_SUCCESS',
        'PUT/api/campaign/updateCampaignBudgetRemindSetting.json_FAILURE'
      ]
    }
  }

  'GET/api/campaign/getCampaignBudgetRemindSetting.json': (
    params?: Models['GET/api/campaign/getCampaignBudgetRemindSetting.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/api/campaign/getCampaignBudgetRemindSetting.json'
      url: 'api/campaign/getCampaignBudgetRemindSetting.json'
      method: 'GET'
      params?: Models['GET/api/campaign/getCampaignBudgetRemindSetting.json']['Req']
      types: [
        'GET/api/campaign/getCampaignBudgetRemindSetting.json_REQUEST',
        'GET/api/campaign/getCampaignBudgetRemindSetting.json_SUCCESS',
        'GET/api/campaign/getCampaignBudgetRemindSetting.json_FAILURE'
      ]
    }
  }

  'PUT/api/campaign/batchModify.json': (
    params?: Models['PUT/api/campaign/batchModify.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'PUT/api/campaign/batchModify.json'
      url: '/api/campaign/batchModify.json'
      method: 'PUT'
      params?: Models['PUT/api/campaign/batchModify.json']['Req']
      types: [
        'PUT/api/campaign/batchModify.json_REQUEST',
        'PUT/api/campaign/batchModify.json_SUCCESS',
        'PUT/api/campaign/batchModify.json_FAILURE'
      ]
    }
  }

  'PUT/api/campaign/complete.json': (
    params?: Models['PUT/api/campaign/complete.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'PUT/api/campaign/complete.json'
      url: '/api/campaign/complete.json'
      method: 'PUT'
      params?: Models['PUT/api/campaign/complete.json']['Req']
      types: [
        'PUT/api/campaign/complete.json_REQUEST',
        'PUT/api/campaign/complete.json_SUCCESS',
        'PUT/api/campaign/complete.json_FAILURE'
      ]
    }
  }

  'PUT/api/campaign/setTop.json': (
    params?: Models['PUT/api/campaign/setTop.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'PUT/api/campaign/setTop.json'
      url: '/api/campaign/setTop.json'
      method: 'PUT'
      params?: Models['PUT/api/campaign/setTop.json']['Req']
      types: [
        'PUT/api/campaign/setTop.json_REQUEST',
        'PUT/api/campaign/setTop.json_SUCCESS',
        'PUT/api/campaign/setTop.json_FAILURE'
      ]
    }
  }

  'GET/api/campaign/validCount.json': (
    params?: Models['GET/api/campaign/validCount.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/api/campaign/validCount.json'
      url: '/api/campaign/validCount.json'
      method: 'GET'
      params?: Models['GET/api/campaign/validCount.json']['Req']
      types: [
        'GET/api/campaign/validCount.json_REQUEST',
        'GET/api/campaign/validCount.json_SUCCESS',
        'GET/api/campaign/validCount.json_FAILURE'
      ]
    }
  }

  'GET/api/campaign/findDayBudgetSum.json': (
    params?: Models['GET/api/campaign/findDayBudgetSum.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/api/campaign/findDayBudgetSum.json'
      url: '/api/campaign/findDayBudgetSum.json'
      method: 'GET'
      params?: Models['GET/api/campaign/findDayBudgetSum.json']['Req']
      types: [
        'GET/api/campaign/findDayBudgetSum.json_REQUEST',
        'GET/api/campaign/findDayBudgetSum.json_SUCCESS',
        'GET/api/campaign/findDayBudgetSum.json_FAILURE'
      ]
    }
  }

  'GET/api/campaign/displayConfig.json': (
    params?: Models['GET/api/campaign/displayConfig.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/api/campaign/displayConfig.json'
      url: '/api/campaign/displayConfig.json'
      method: 'GET'
      params?: Models['GET/api/campaign/displayConfig.json']['Req']
      types: [
        'GET/api/campaign/displayConfig.json_REQUEST',
        'GET/api/campaign/displayConfig.json_SUCCESS',
        'GET/api/campaign/displayConfig.json_FAILURE'
      ]
    }
  }

  'GET/api/campaign/modifyConfig.json': (
    params?: Models['GET/api/campaign/modifyConfig.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/api/campaign/modifyConfig.json'
      url: '/api/campaign/modifyConfig.json'
      method: 'GET'
      params?: Models['GET/api/campaign/modifyConfig.json']['Req']
      types: [
        'GET/api/campaign/modifyConfig.json_REQUEST',
        'GET/api/campaign/modifyConfig.json_SUCCESS',
        'GET/api/campaign/modifyConfig.json_FAILURE'
      ]
    }
  }

  'PUT/api/campaign/activity/transfer.json': (
    params?: Models['PUT/api/campaign/activity/transfer.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'PUT/api/campaign/activity/transfer.json'
      url: '/api/campaign/activity/transfer.json'
      method: 'PUT'
      params?: Models['PUT/api/campaign/activity/transfer.json']['Req']
      types: [
        'PUT/api/campaign/activity/transfer.json_REQUEST',
        'PUT/api/campaign/activity/transfer.json_SUCCESS',
        'PUT/api/campaign/activity/transfer.json_FAILURE'
      ]
    }
  }

  'PUT/api/campaign/transferScene.json': (
    params?: Models['PUT/api/campaign/transferScene.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'PUT/api/campaign/transferScene.json'
      url: '/api/campaign/transferScene.json'
      method: 'PUT'
      params?: Models['PUT/api/campaign/transferScene.json']['Req']
      types: [
        'PUT/api/campaign/transferScene.json_REQUEST',
        'PUT/api/campaign/transferScene.json_SUCCESS',
        'PUT/api/campaign/transferScene.json_FAILURE'
      ]
    }
  }

  'PUT/api/campaign/activity/transferPhase.json': (
    params?: Models['PUT/api/campaign/activity/transferPhase.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'PUT/api/campaign/activity/transferPhase.json'
      url: '/api/campaign/activity/transferPhase.json'
      method: 'PUT'
      params?: Models['PUT/api/campaign/activity/transferPhase.json']['Req']
      types: [
        'PUT/api/campaign/activity/transferPhase.json_REQUEST',
        'PUT/api/campaign/activity/transferPhase.json_SUCCESS',
        'PUT/api/campaign/activity/transferPhase.json_FAILURE'
      ]
    }
  }

  'GET/api/target/getRemarketingCoverage.json': (
    params?: Models['GET/api/target/getRemarketingCoverage.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/api/target/getRemarketingCoverage.json'
      url: '/api/target/getRemarketingCoverage.json'
      method: 'GET'
      params?: Models['GET/api/target/getRemarketingCoverage.json']['Req']
      types: [
        'GET/api/target/getRemarketingCoverage.json_REQUEST',
        'GET/api/target/getRemarketingCoverage.json_SUCCESS',
        'GET/api/target/getRemarketingCoverage.json_FAILURE'
      ]
    }
  }

  'POST/api/adgroup/add.json': (
    params?: Models['POST/api/adgroup/add.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'POST/api/adgroup/add.json'
      url: '/api/adgroup/add.json'
      method: 'POST'
      params?: Models['POST/api/adgroup/add.json']['Req']
      types: [
        'POST/api/adgroup/add.json_REQUEST',
        'POST/api/adgroup/add.json_SUCCESS',
        'POST/api/adgroup/add.json_FAILURE'
      ]
    }
  }

  'GET/api/adgroup/default.json': (
    params?: Models['GET/api/adgroup/default.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/api/adgroup/default.json'
      url: '/api/adgroup/default.json'
      method: 'GET'
      params?: Models['GET/api/adgroup/default.json']['Req']
      types: [
        'GET/api/adgroup/default.json_REQUEST',
        'GET/api/adgroup/default.json_SUCCESS',
        'GET/api/adgroup/default.json_FAILURE'
      ]
    }
  }

  'GET/api/adgroup/get.json': (
    params?: Models['GET/api/adgroup/get.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/api/adgroup/get.json'
      url: '/api/adgroup/get.json'
      method: 'GET'
      params?: Models['GET/api/adgroup/get.json']['Req']
      types: [
        'GET/api/adgroup/get.json_REQUEST',
        'GET/api/adgroup/get.json_SUCCESS',
        'GET/api/adgroup/get.json_FAILURE'
      ]
    }
  }

  'GET/api/adgroup/findList.json': (
    params?: Models['GET/api/adgroup/findList.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/api/adgroup/findList.json'
      url: '/api/adgroup/findList.json'
      method: 'GET'
      params?: Models['GET/api/adgroup/findList.json']['Req']
      types: [
        'GET/api/adgroup/findList.json_REQUEST',
        'GET/api/adgroup/findList.json_SUCCESS',
        'GET/api/adgroup/findList.json_FAILURE'
      ]
    }
  }

  'DELETE/api/adgroup/batchDelete.json': (
    params?: Models['DELETE/api/adgroup/batchDelete.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'DELETE/api/adgroup/batchDelete.json'
      url: '/api/adgroup/batchDelete.json'
      method: 'DELETE'
      params?: Models['DELETE/api/adgroup/batchDelete.json']['Req']
      types: [
        'DELETE/api/adgroup/batchDelete.json_REQUEST',
        'DELETE/api/adgroup/batchDelete.json_SUCCESS',
        'DELETE/api/adgroup/batchDelete.json_FAILURE'
      ]
    }
  }

  'POST/api/adgroup/clone.json': (
    params?: Models['POST/api/adgroup/clone.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'POST/api/adgroup/clone.json'
      url: '/api/adgroup/clone.json'
      method: 'POST'
      params?: Models['POST/api/adgroup/clone.json']['Req']
      types: [
        'POST/api/adgroup/clone.json_REQUEST',
        'POST/api/adgroup/clone.json_SUCCESS',
        'POST/api/adgroup/clone.json_FAILURE'
      ]
    }
  }

  'PUT/api/adgroup/batchModEntire.json': (
    params?: Models['PUT/api/adgroup/batchModEntire.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'PUT/api/adgroup/batchModEntire.json'
      url: '/api/adgroup/batchModEntire.json'
      method: 'PUT'
      params?: Models['PUT/api/adgroup/batchModEntire.json']['Req']
      types: [
        'PUT/api/adgroup/batchModEntire.json_REQUEST',
        'PUT/api/adgroup/batchModEntire.json_SUCCESS',
        'PUT/api/adgroup/batchModEntire.json_FAILURE'
      ]
    }
  }

  'PUT/api/adgroup/batchModifyPart.json': (
    params?: Models['PUT/api/adgroup/batchModifyPart.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'PUT/api/adgroup/batchModifyPart.json'
      url: '/api/adgroup/batchModifyPart.json'
      method: 'PUT'
      params?: Models['PUT/api/adgroup/batchModifyPart.json']['Req']
      types: [
        'PUT/api/adgroup/batchModifyPart.json_REQUEST',
        'PUT/api/adgroup/batchModifyPart.json_SUCCESS',
        'PUT/api/adgroup/batchModifyPart.json_FAILURE'
      ]
    }
  }

  'GET/api/adgroup/qualityScore/findList.json': (
    params?: Models['GET/api/adgroup/qualityScore/findList.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/api/adgroup/qualityScore/findList.json'
      url: '/api/adgroup/qualityScore/findList.json'
      method: 'GET'
      params?: Models['GET/api/adgroup/qualityScore/findList.json']['Req']
      types: [
        'GET/api/adgroup/qualityScore/findList.json_REQUEST',
        'GET/api/adgroup/qualityScore/findList.json_SUCCESS',
        'GET/api/adgroup/qualityScore/findList.json_FAILURE'
      ]
    }
  }

  'GET/api/adgroup/qualityScore/findHisList.json': (
    params?: Models['GET/api/adgroup/qualityScore/findHisList.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/api/adgroup/qualityScore/findHisList.json'
      url: '/api/adgroup/qualityScore/findHisList.json'
      method: 'GET'
      params?: Models['GET/api/adgroup/qualityScore/findHisList.json']['Req']
      types: [
        'GET/api/adgroup/qualityScore/findHisList.json_REQUEST',
        'GET/api/adgroup/qualityScore/findHisList.json_SUCCESS',
        'GET/api/adgroup/qualityScore/findHisList.json_FAILURE'
      ]
    }
  }

  'PUT/api/adgroup/batchModify.json': (
    params?: Models['PUT/api/adgroup/batchModify.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'PUT/api/adgroup/batchModify.json'
      url: '/api/adgroup/batchModify.json'
      method: 'PUT'
      params?: Models['PUT/api/adgroup/batchModify.json']['Req']
      types: [
        'PUT/api/adgroup/batchModify.json_REQUEST',
        'PUT/api/adgroup/batchModify.json_SUCCESS',
        'PUT/api/adgroup/batchModify.json_FAILURE'
      ]
    }
  }

  'GET/api/adgroup/qualityScore/findQueryCondition.json': (
    params?: Models['GET/api/adgroup/qualityScore/findQueryCondition.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/api/adgroup/qualityScore/findQueryCondition.json'
      url: '/api/adgroup/qualityScore/findQueryCondition.json'
      method: 'GET'
      params?: Models['GET/api/adgroup/qualityScore/findQueryCondition.json']['Req']
      types: [
        'GET/api/adgroup/qualityScore/findQueryCondition.json_REQUEST',
        'GET/api/adgroup/qualityScore/findQueryCondition.json_SUCCESS',
        'GET/api/adgroup/qualityScore/findQueryCondition.json_FAILURE'
      ]
    }
  }

  'GET/api/adgroup/findCampaignAndAdgroupList.json': (
    params?: Models['GET/api/adgroup/findCampaignAndAdgroupList.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/api/adgroup/findCampaignAndAdgroupList.json'
      url: '/api/adgroup/findCampaignAndAdgroupList.json'
      method: 'GET'
      params?: Models['GET/api/adgroup/findCampaignAndAdgroupList.json']['Req']
      types: [
        'GET/api/adgroup/findCampaignAndAdgroupList.json_REQUEST',
        'GET/api/adgroup/findCampaignAndAdgroupList.json_SUCCESS',
        'GET/api/adgroup/findCampaignAndAdgroupList.json_FAILURE'
      ]
    }
  }

  'PUT/api/adgroup/useSystemCreative.json': (
    params?: Models['PUT/api/adgroup/useSystemCreative.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'PUT/api/adgroup/useSystemCreative.json'
      url: '/api/adgroup/useSystemCreative.json'
      method: 'PUT'
      params?: Models['PUT/api/adgroup/useSystemCreative.json']['Req']
      types: [
        'PUT/api/adgroup/useSystemCreative.json_REQUEST',
        'PUT/api/adgroup/useSystemCreative.json_SUCCESS',
        'PUT/api/adgroup/useSystemCreative.json_FAILURE'
      ]
    }
  }

  'PUT/api/adgroup/batchModifyEntire.json': (
    params?: Models['PUT/api/adgroup/batchModifyEntire.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'PUT/api/adgroup/batchModifyEntire.json'
      url: '/api/adgroup/batchModifyEntire.json'
      method: 'PUT'
      params?: Models['PUT/api/adgroup/batchModifyEntire.json']['Req']
      types: [
        'PUT/api/adgroup/batchModifyEntire.json_REQUEST',
        'PUT/api/adgroup/batchModifyEntire.json_SUCCESS',
        'PUT/api/adgroup/batchModifyEntire.json_FAILURE'
      ]
    }
  }

  'PUT/api/adgroup/batchModifyPrice.json': (
    params?: Models['PUT/api/adgroup/batchModifyPrice.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'PUT/api/adgroup/batchModifyPrice.json'
      url: '/api/adgroup/batchModifyPrice.json'
      method: 'PUT'
      params?: Models['PUT/api/adgroup/batchModifyPrice.json']['Req']
      types: [
        'PUT/api/adgroup/batchModifyPrice.json_REQUEST',
        'PUT/api/adgroup/batchModifyPrice.json_SUCCESS',
        'PUT/api/adgroup/batchModifyPrice.json_FAILURE'
      ]
    }
  }

  'POST/api/creative/batchAddAndBind.json': (
    params?: Models['POST/api/creative/batchAddAndBind.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'POST/api/creative/batchAddAndBind.json'
      url: '/api/creative/batchAddAndBind.json'
      method: 'POST'
      params?: Models['POST/api/creative/batchAddAndBind.json']['Req']
      types: [
        'POST/api/creative/batchAddAndBind.json_REQUEST',
        'POST/api/creative/batchAddAndBind.json_SUCCESS',
        'POST/api/creative/batchAddAndBind.json_FAILURE'
      ]
    }
  }

  'PUT/api/creative/batchUnbind.json': (
    params?: Models['PUT/api/creative/batchUnbind.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'PUT/api/creative/batchUnbind.json'
      url: '/api/creative/batchUnbind.json'
      method: 'PUT'
      params?: Models['PUT/api/creative/batchUnbind.json']['Req']
      types: [
        'PUT/api/creative/batchUnbind.json_REQUEST',
        'PUT/api/creative/batchUnbind.json_SUCCESS',
        'PUT/api/creative/batchUnbind.json_FAILURE'
      ]
    }
  }

  'GET/api/creative/recommend.json': (
    params?: Models['GET/api/creative/recommend.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/api/creative/recommend.json'
      url: '/api/creative/recommend.json'
      method: 'GET'
      params?: Models['GET/api/creative/recommend.json']['Req']
      types: [
        'GET/api/creative/recommend.json_REQUEST',
        'GET/api/creative/recommend.json_SUCCESS',
        'GET/api/creative/recommend.json_FAILURE'
      ]
    }
  }

  'GET/api/creative/findPage.json': (
    params?: Models['GET/api/creative/findPage.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/api/creative/findPage.json'
      url: '/api/creative/findPage.json'
      method: 'GET'
      params?: Models['GET/api/creative/findPage.json']['Req']
      types: [
        'GET/api/creative/findPage.json_REQUEST',
        'GET/api/creative/findPage.json_SUCCESS',
        'GET/api/creative/findPage.json_FAILURE'
      ]
    }
  }

  'GET/api/creative/findPunishRecordList.json': (
    params?: Models['GET/api/creative/findPunishRecordList.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/api/creative/findPunishRecordList.json'
      url: '/api/creative/findPunishRecordList.json'
      method: 'GET'
      params?: Models['GET/api/creative/findPunishRecordList.json']['Req']
      types: [
        'GET/api/creative/findPunishRecordList.json_REQUEST',
        'GET/api/creative/findPunishRecordList.json_SUCCESS',
        'GET/api/creative/findPunishRecordList.json_FAILURE'
      ]
    }
  }

  'GET/api/creative/findQueryCondition.json': (
    params?: Models['GET/api/creative/findQueryCondition.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/api/creative/findQueryCondition.json'
      url: '/api/creative/findQueryCondition.json'
      method: 'GET'
      params?: Models['GET/api/creative/findQueryCondition.json']['Req']
      types: [
        'GET/api/creative/findQueryCondition.json_REQUEST',
        'GET/api/creative/findQueryCondition.json_SUCCESS',
        'GET/api/creative/findQueryCondition.json_FAILURE'
      ]
    }
  }

  'GET/api/creativeCenter/gotoCreation.json': (
    params?: Models['GET/api/creativeCenter/gotoCreation.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/api/creativeCenter/gotoCreation.json'
      url: '/api/creativeCenter/gotoCreation.json'
      method: 'GET'
      params?: Models['GET/api/creativeCenter/gotoCreation.json']['Req']
      types: [
        'GET/api/creativeCenter/gotoCreation.json_REQUEST',
        'GET/api/creativeCenter/gotoCreation.json_SUCCESS',
        'GET/api/creativeCenter/gotoCreation.json_FAILURE'
      ]
    }
  }

  'GET/api/creative/template/findPackageList.json': (
    params?: Models['GET/api/creative/template/findPackageList.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/api/creative/template/findPackageList.json'
      url: '/api/creative/template/findPackageList.json'
      method: 'GET'
      params?: Models['GET/api/creative/template/findPackageList.json']['Req']
      types: [
        'GET/api/creative/template/findPackageList.json_REQUEST',
        'GET/api/creative/template/findPackageList.json_SUCCESS',
        'GET/api/creative/template/findPackageList.json_FAILURE'
      ]
    }
  }

  'GET/api/creativeCenter/gotoTemplateNew.json': (
    params?: Models['GET/api/creativeCenter/gotoTemplateNew.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/api/creativeCenter/gotoTemplateNew.json'
      url: '/api/creativeCenter/gotoTemplateNew.json'
      method: 'GET'
      params?: Models['GET/api/creativeCenter/gotoTemplateNew.json']['Req']
      types: [
        'GET/api/creativeCenter/gotoTemplateNew.json_REQUEST',
        'GET/api/creativeCenter/gotoTemplateNew.json_SUCCESS',
        'GET/api/creativeCenter/gotoTemplateNew.json_FAILURE'
      ]
    }
  }

  'GET/api/creativeCenter/getMaterial.json': (
    params?: Models['GET/api/creativeCenter/getMaterial.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/api/creativeCenter/getMaterial.json'
      url: '/api/creativeCenter/getMaterial.json'
      method: 'GET'
      params?: Models['GET/api/creativeCenter/getMaterial.json']['Req']
      types: [
        'GET/api/creativeCenter/getMaterial.json_REQUEST',
        'GET/api/creativeCenter/getMaterial.json_SUCCESS',
        'GET/api/creativeCenter/getMaterial.json_FAILURE'
      ]
    }
  }

  'DELETE/api/creative/delete.json': (
    params?: Models['DELETE/api/creative/delete.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'DELETE/api/creative/delete.json'
      url: '/api/creative/delete.json'
      method: 'DELETE'
      params?: Models['DELETE/api/creative/delete.json']['Req']
      types: [
        'DELETE/api/creative/delete.json_REQUEST',
        'DELETE/api/creative/delete.json_SUCCESS',
        'DELETE/api/creative/delete.json_FAILURE'
      ]
    }
  }

  'PUT/api/creative/activity/batchAddTag.json': (
    params?: Models['PUT/api/creative/activity/batchAddTag.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'PUT/api/creative/activity/batchAddTag.json'
      url: '/api/creative/activity/batchAddTag.json'
      method: 'PUT'
      params?: Models['PUT/api/creative/activity/batchAddTag.json']['Req']
      types: [
        'PUT/api/creative/activity/batchAddTag.json_REQUEST',
        'PUT/api/creative/activity/batchAddTag.json_SUCCESS',
        'PUT/api/creative/activity/batchAddTag.json_FAILURE'
      ]
    }
  }

  'POST/api/creative/preview.json': (
    params?: Models['POST/api/creative/preview.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'POST/api/creative/preview.json'
      url: '/api/creative/preview.json'
      method: 'POST'
      params?: Models['POST/api/creative/preview.json']['Req']
      types: [
        'POST/api/creative/preview.json_REQUEST',
        'POST/api/creative/preview.json_SUCCESS',
        'POST/api/creative/preview.json_FAILURE'
      ]
    }
  }

  'GET/api/adzone/findList.json': (
    params?: Models['GET/api/adzone/findList.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/api/adzone/findList.json'
      url: '/api/adzone/findList.json'
      method: 'GET'
      params?: Models['GET/api/adzone/findList.json']['Req']
      types: [
        'GET/api/adzone/findList.json_REQUEST',
        'GET/api/adzone/findList.json_SUCCESS',
        'GET/api/adzone/findList.json_FAILURE'
      ]
    }
  }

  'GET/api/adzone/checkList.json': (
    params?: Models['GET/api/adzone/checkList.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/api/adzone/checkList.json'
      url: '/api/adzone/checkList.json'
      method: 'GET'
      params?: Models['GET/api/adzone/checkList.json']['Req']
      types: [
        'GET/api/adzone/checkList.json_REQUEST',
        'GET/api/adzone/checkList.json_SUCCESS',
        'GET/api/adzone/checkList.json_FAILURE'
      ]
    }
  }

  'PUT/api/adzone/unbindList.json': (
    params?: Models['PUT/api/adzone/unbindList.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'PUT/api/adzone/unbindList.json'
      url: '/api/adzone/unbindList.json'
      method: 'PUT'
      params?: Models['PUT/api/adzone/unbindList.json']['Req']
      types: [
        'PUT/api/adzone/unbindList.json_REQUEST',
        'PUT/api/adzone/unbindList.json_SUCCESS',
        'PUT/api/adzone/unbindList.json_FAILURE'
      ]
    }
  }

  'PUT/api/adzone/bindList.json': (
    params?: Models['PUT/api/adzone/bindList.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'PUT/api/adzone/bindList.json'
      url: '/api/adzone/bindList.json'
      method: 'PUT'
      params?: Models['PUT/api/adzone/bindList.json']['Req']
      types: [
        'PUT/api/adzone/bindList.json_REQUEST',
        'PUT/api/adzone/bindList.json_SUCCESS',
        'PUT/api/adzone/bindList.json_FAILURE'
      ]
    }
  }

  'GET/api/adzone/findPage.json': (
    params?: Models['GET/api/adzone/findPage.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/api/adzone/findPage.json'
      url: '/api/adzone/findPage.json'
      method: 'GET'
      params?: Models['GET/api/adzone/findPage.json']['Req']
      types: [
        'GET/api/adzone/findPage.json_REQUEST',
        'GET/api/adzone/findPage.json_SUCCESS',
        'GET/api/adzone/findPage.json_FAILURE'
      ]
    }
  }

  'PUT/api/adzone/batchModify.json': (
    params?: Models['PUT/api/adzone/batchModify.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'PUT/api/adzone/batchModify.json'
      url: '/api/adzone/batchModify.json'
      method: 'PUT'
      params?: Models['PUT/api/adzone/batchModify.json']['Req']
      types: [
        'PUT/api/adzone/batchModify.json_REQUEST',
        'PUT/api/adzone/batchModify.json_SUCCESS',
        'PUT/api/adzone/batchModify.json_FAILURE'
      ]
    }
  }

  'GET/api/material/findPage.json': (
    params?: Models['GET/api/material/findPage.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/api/material/findPage.json'
      url: '/api/material/findPage.json'
      method: 'GET'
      params?: Models['GET/api/material/findPage.json']['Req']
      types: [
        'GET/api/material/findPage.json_REQUEST',
        'GET/api/material/findPage.json_SUCCESS',
        'GET/api/material/findPage.json_FAILURE'
      ]
    }
  }

  'GET/api/material/recommend.json': (
    params?: Models['GET/api/material/recommend.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/api/material/recommend.json'
      url: '/api/material/recommend.json'
      method: 'GET'
      params?: Models['GET/api/material/recommend.json']['Req']
      types: [
        'GET/api/material/recommend.json_REQUEST',
        'GET/api/material/recommend.json_SUCCESS',
        'GET/api/material/recommend.json_FAILURE'
      ]
    }
  }

  'GET/api/material/findQueryCondition.json': (
    params?: Models['GET/api/material/findQueryCondition.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/api/material/findQueryCondition.json'
      url: '/api/material/findQueryCondition.json'
      method: 'GET'
      params?: Models['GET/api/material/findQueryCondition.json']['Req']
      types: [
        'GET/api/material/findQueryCondition.json_REQUEST',
        'GET/api/material/findQueryCondition.json_SUCCESS',
        'GET/api/material/findQueryCondition.json_FAILURE'
      ]
    }
  }

  'GET/api/material/item/findQueryCondition.json': (
    params?: Models['GET/api/material/item/findQueryCondition.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/api/material/item/findQueryCondition.json'
      url: '/api/material/item/findQueryCondition.json'
      method: 'GET'
      params?: Models['GET/api/material/item/findQueryCondition.json']['Req']
      types: [
        'GET/api/material/item/findQueryCondition.json_REQUEST',
        'GET/api/material/item/findQueryCondition.json_SUCCESS',
        'GET/api/material/item/findQueryCondition.json_FAILURE'
      ]
    }
  }

  'GET/api/coupon/findQueryCondition.json': (
    params?: Models['GET/api/coupon/findQueryCondition.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/api/coupon/findQueryCondition.json'
      url: '/api/coupon/findQueryCondition.json'
      method: 'GET'
      params?: Models['GET/api/coupon/findQueryCondition.json']['Req']
      types: [
        'GET/api/coupon/findQueryCondition.json_REQUEST',
        'GET/api/coupon/findQueryCondition.json_SUCCESS',
        'GET/api/coupon/findQueryCondition.json_FAILURE'
      ]
    }
  }

  'GET/api/material/findPunishRecordList.json': (
    params?: Models['GET/api/material/findPunishRecordList.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/api/material/findPunishRecordList.json'
      url: '/api/material/findPunishRecordList.json'
      method: 'GET'
      params?: Models['GET/api/material/findPunishRecordList.json']['Req']
      types: [
        'GET/api/material/findPunishRecordList.json_REQUEST',
        'GET/api/material/findPunishRecordList.json_SUCCESS',
        'GET/api/material/findPunishRecordList.json_FAILURE'
      ]
    }
  }

  'GET/api/material/accessAllowed.json': (
    params?: Models['GET/api/material/accessAllowed.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/api/material/accessAllowed.json'
      url: '/api/material/accessAllowed.json'
      method: 'GET'
      params?: Models['GET/api/material/accessAllowed.json']['Req']
      types: [
        'GET/api/material/accessAllowed.json_REQUEST',
        'GET/api/material/accessAllowed.json_SUCCESS',
        'GET/api/material/accessAllowed.json_FAILURE'
      ]
    }
  }

  'GET/api/material/item/accessAllowed.json': (
    params?: Models['GET/api/material/item/accessAllowed.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/api/material/item/accessAllowed.json'
      url: '/api/material/item/accessAllowed.json'
      method: 'GET'
      params?: Models['GET/api/material/item/accessAllowed.json']['Req']
      types: [
        'GET/api/material/item/accessAllowed.json_REQUEST',
        'GET/api/material/item/accessAllowed.json_SUCCESS',
        'GET/api/material/item/accessAllowed.json_FAILURE'
      ]
    }
  }

  'GET/api/coupon/findList.json': (
    params?: Models['GET/api/coupon/findList.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/api/coupon/findList.json'
      url: '/api/coupon/findList.json'
      method: 'GET'
      params?: Models['GET/api/coupon/findList.json']['Req']
      types: [
        'GET/api/coupon/findList.json_REQUEST',
        'GET/api/coupon/findList.json_SUCCESS',
        'GET/api/coupon/findList.json_FAILURE'
      ]
    }
  }

  'GET/api/coupon/findPage.json': (
    params?: Models['GET/api/coupon/findPage.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/api/coupon/findPage.json'
      url: '/api/coupon/findPage.json'
      method: 'GET'
      params?: Models['GET/api/coupon/findPage.json']['Req']
      types: [
        'GET/api/coupon/findPage.json_REQUEST',
        'GET/api/coupon/findPage.json_SUCCESS',
        'GET/api/coupon/findPage.json_FAILURE'
      ]
    }
  }

  'GET/api/coupon/recommend.json': (
    params?: Models['GET/api/coupon/recommend.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/api/coupon/recommend.json'
      url: '/api/coupon/recommend.json'
      method: 'GET'
      params?: Models['GET/api/coupon/recommend.json']['Req']
      types: [
        'GET/api/coupon/recommend.json_REQUEST',
        'GET/api/coupon/recommend.json_SUCCESS',
        'GET/api/coupon/recommend.json_FAILURE'
      ]
    }
  }

  'GET/api/material/batchAccessAllowed.json': (
    params?: Models['GET/api/material/batchAccessAllowed.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/api/material/batchAccessAllowed.json'
      url: '/api/material/batchAccessAllowed.json'
      method: 'GET'
      params?: Models['GET/api/material/batchAccessAllowed.json']['Req']
      types: [
        'GET/api/material/batchAccessAllowed.json_REQUEST',
        'GET/api/material/batchAccessAllowed.json_SUCCESS',
        'GET/api/material/batchAccessAllowed.json_FAILURE'
      ]
    }
  }

  'PUT/api/crowd/modifyByType.json': (
    params?: Models['PUT/api/crowd/modifyByType.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'PUT/api/crowd/modifyByType.json'
      url: '/api/crowd/modifyByType.json'
      method: 'PUT'
      params?: Models['PUT/api/crowd/modifyByType.json']['Req']
      types: [
        'PUT/api/crowd/modifyByType.json_REQUEST',
        'PUT/api/crowd/modifyByType.json_SUCCESS',
        'PUT/api/crowd/modifyByType.json_FAILURE'
      ]
    }
  }

  'DELETE/api/crowd/delete.json': (
    params?: Models['DELETE/api/crowd/delete.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'DELETE/api/crowd/delete.json'
      url: '/api/crowd/delete.json'
      method: 'DELETE'
      params?: Models['DELETE/api/crowd/delete.json']['Req']
      types: [
        'DELETE/api/crowd/delete.json_REQUEST',
        'DELETE/api/crowd/delete.json_SUCCESS',
        'DELETE/api/crowd/delete.json_FAILURE'
      ]
    }
  }

  'GET/api/crowd/findList.json': (
    params?: Models['GET/api/crowd/findList.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/api/crowd/findList.json'
      url: '/api/crowd/findList.json'
      method: 'GET'
      params?: Models['GET/api/crowd/findList.json']['Req']
      types: [
        'GET/api/crowd/findList.json_REQUEST',
        'GET/api/crowd/findList.json_SUCCESS',
        'GET/api/crowd/findList.json_FAILURE'
      ]
    }
  }

  'GET/api/target/findSuggest.json': (
    params?: Models['GET/api/target/findSuggest.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/api/target/findSuggest.json'
      url: '/api/target/findSuggest.json'
      method: 'GET'
      params?: Models['GET/api/target/findSuggest.json']['Req']
      types: [
        'GET/api/target/findSuggest.json_REQUEST',
        'GET/api/target/findSuggest.json_SUCCESS',
        'GET/api/target/findSuggest.json_FAILURE'
      ]
    }
  }

  'POST/api/crowd/getSuggestPrice.json': (
    params?: Models['POST/api/crowd/getSuggestPrice.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'POST/api/crowd/getSuggestPrice.json'
      url: '/api/crowd/getSuggestPrice.json'
      method: 'POST'
      params?: Models['POST/api/crowd/getSuggestPrice.json']['Req']
      types: [
        'POST/api/crowd/getSuggestPrice.json_REQUEST',
        'POST/api/crowd/getSuggestPrice.json_SUCCESS',
        'POST/api/crowd/getSuggestPrice.json_FAILURE'
      ]
    }
  }

  'POST/api/algotool/getPredictedPvUv.json': (
    params?: Models['POST/api/algotool/getPredictedPvUv.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'POST/api/algotool/getPredictedPvUv.json'
      url: '/api/algotool/getPredictedPvUv.json'
      method: 'POST'
      params?: Models['POST/api/algotool/getPredictedPvUv.json']['Req']
      types: [
        'POST/api/algotool/getPredictedPvUv.json_REQUEST',
        'POST/api/algotool/getPredictedPvUv.json_SUCCESS',
        'POST/api/algotool/getPredictedPvUv.json_FAILURE'
      ]
    }
  }

  'GET/api/target/findList.json': (
    params?: Models['GET/api/target/findList.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/api/target/findList.json'
      url: '/api/target/findList.json'
      method: 'GET'
      params?: Models['GET/api/target/findList.json']['Req']
      types: [
        'GET/api/target/findList.json_REQUEST',
        'GET/api/target/findList.json_SUCCESS',
        'GET/api/target/findList.json_FAILURE'
      ]
    }
  }

  'GET/api/target/findCategoryList.json': (
    params?: Models['GET/api/target/findCategoryList.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/api/target/findCategoryList.json'
      url: '/api/target/findCategoryList.json'
      method: 'GET'
      params?: Models['GET/api/target/findCategoryList.json']['Req']
      types: [
        'GET/api/target/findCategoryList.json_REQUEST',
        'GET/api/target/findCategoryList.json_SUCCESS',
        'GET/api/target/findCategoryList.json_FAILURE'
      ]
    }
  }

  'GET/api/target/findLabelPage.json': (
    params?: Models['GET/api/target/findLabelPage.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/api/target/findLabelPage.json'
      url: '/api/target/findLabelPage.json'
      method: 'GET'
      params?: Models['GET/api/target/findLabelPage.json']['Req']
      types: [
        'GET/api/target/findLabelPage.json_REQUEST',
        'GET/api/target/findLabelPage.json_SUCCESS',
        'GET/api/target/findLabelPage.json_FAILURE'
      ]
    }
  }

  'GET/api/target/findTargetTypeCondition.json': (
    params?: Models['GET/api/target/findTargetTypeCondition.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/api/target/findTargetTypeCondition.json'
      url: '/api/target/findTargetTypeCondition.json'
      method: 'GET'
      params?: Models['GET/api/target/findTargetTypeCondition.json']['Req']
      types: [
        'GET/api/target/findTargetTypeCondition.json_REQUEST',
        'GET/api/target/findTargetTypeCondition.json_SUCCESS',
        'GET/api/target/findTargetTypeCondition.json_FAILURE'
      ]
    }
  }

  'GET/api/target/getKeywordShopUv.json': (
    params?: Models['GET/api/target/getKeywordShopUv.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/api/target/getKeywordShopUv.json'
      url: '/api/target/getKeywordShopUv.json'
      method: 'GET'
      params?: Models['GET/api/target/getKeywordShopUv.json']['Req']
      types: [
        'GET/api/target/getKeywordShopUv.json_REQUEST',
        'GET/api/target/getKeywordShopUv.json_SUCCESS',
        'GET/api/target/getKeywordShopUv.json_FAILURE'
      ]
    }
  }

  'GET/api/target/findShopTargetQueryCondition.json': (
    params?: Models['GET/api/target/findShopTargetQueryCondition.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/api/target/findShopTargetQueryCondition.json'
      url: '/api/target/findShopTargetQueryCondition.json'
      method: 'GET'
      params?: Models['GET/api/target/findShopTargetQueryCondition.json']['Req']
      types: [
        'GET/api/target/findShopTargetQueryCondition.json_REQUEST',
        'GET/api/target/findShopTargetQueryCondition.json_SUCCESS',
        'GET/api/target/findShopTargetQueryCondition.json_FAILURE'
      ]
    }
  }

  'GET/api/algotool/findManualBidSuggestPrice.json': (
    params?: Models['GET/api/algotool/findManualBidSuggestPrice.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/api/algotool/findManualBidSuggestPrice.json'
      url: '/api/algotool/findManualBidSuggestPrice.json'
      method: 'GET'
      params?: Models['GET/api/algotool/findManualBidSuggestPrice.json']['Req']
      types: [
        'GET/api/algotool/findManualBidSuggestPrice.json_REQUEST',
        'GET/api/algotool/findManualBidSuggestPrice.json_SUCCESS',
        'GET/api/algotool/findManualBidSuggestPrice.json_FAILURE'
      ]
    }
  }

  'POST/api/crowd/batchModify.json': (
    params?: Models['POST/api/crowd/batchModify.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'POST/api/crowd/batchModify.json'
      url: '/api/crowd/batchModify.json'
      method: 'POST'
      params?: Models['POST/api/crowd/batchModify.json']['Req']
      types: [
        'POST/api/crowd/batchModify.json_REQUEST',
        'POST/api/crowd/batchModify.json_SUCCESS',
        'POST/api/crowd/batchModify.json_FAILURE'
      ]
    }
  }

  'GET/api/crowd/findSimulatorPointList.json': (
    params?: Models['GET/api/crowd/findSimulatorPointList.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/api/crowd/findSimulatorPointList.json'
      url: '/api/crowd/findSimulatorPointList.json'
      method: 'GET'
      params?: Models['GET/api/crowd/findSimulatorPointList.json']['Req']
      types: [
        'GET/api/crowd/findSimulatorPointList.json_REQUEST',
        'GET/api/crowd/findSimulatorPointList.json_SUCCESS',
        'GET/api/crowd/findSimulatorPointList.json_FAILURE'
      ]
    }
  }

  'POST/api/adzone/getSuggestDiscount.json': (
    params?: Models['POST/api/adzone/getSuggestDiscount.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'POST/api/adzone/getSuggestDiscount.json'
      url: '/api/adzone/getSuggestDiscount.json'
      method: 'POST'
      params?: Models['POST/api/adzone/getSuggestDiscount.json']['Req']
      types: [
        'POST/api/adzone/getSuggestDiscount.json_REQUEST',
        'POST/api/adzone/getSuggestDiscount.json_SUCCESS',
        'POST/api/adzone/getSuggestDiscount.json_FAILURE'
      ]
    }
  }

  'POST/api/target/findSonkeywordList.json': (
    params?: Models['POST/api/target/findSonkeywordList.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'POST/api/target/findSonkeywordList.json'
      url: '/api/target/findSonkeywordList.json'
      method: 'POST'
      params?: Models['POST/api/target/findSonkeywordList.json']['Req']
      types: [
        'POST/api/target/findSonkeywordList.json_REQUEST',
        'POST/api/target/findSonkeywordList.json_SUCCESS',
        'POST/api/target/findSonkeywordList.json_FAILURE'
      ]
    }
  }

  'GET/api/target/findRecommendList.json': (
    params?: Models['GET/api/target/findRecommendList.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/api/target/findRecommendList.json'
      url: '/api/target/findRecommendList.json'
      method: 'GET'
      params?: Models['GET/api/target/findRecommendList.json']['Req']
      types: [
        'GET/api/target/findRecommendList.json_REQUEST',
        'GET/api/target/findRecommendList.json_SUCCESS',
        'GET/api/target/findRecommendList.json_FAILURE'
      ]
    }
  }

  'GET/api/target/findRecommendPage.json': (
    params?: Models['GET/api/target/findRecommendPage.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/api/target/findRecommendPage.json'
      url: '/api/target/findRecommendPage.json'
      method: 'GET'
      params?: Models['GET/api/target/findRecommendPage.json']['Req']
      types: [
        'GET/api/target/findRecommendPage.json_REQUEST',
        'GET/api/target/findRecommendPage.json_SUCCESS',
        'GET/api/target/findRecommendPage.json_FAILURE'
      ]
    }
  }

  'PUT/api/target/addTargetLabel.json': (
    params?: Models['PUT/api/target/addTargetLabel.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'PUT/api/target/addTargetLabel.json'
      url: '/api/target/addTargetLabel.json'
      method: 'PUT'
      params?: Models['PUT/api/target/addTargetLabel.json']['Req']
      types: [
        'PUT/api/target/addTargetLabel.json_REQUEST',
        'PUT/api/target/addTargetLabel.json_SUCCESS',
        'PUT/api/target/addTargetLabel.json_FAILURE'
      ]
    }
  }

  'POST/api/member/updateConfig.json': (
    params?: Models['POST/api/member/updateConfig.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'POST/api/member/updateConfig.json'
      url: '/api/member/updateConfig.json'
      method: 'POST'
      params?: Models['POST/api/member/updateConfig.json']['Req']
      types: [
        'POST/api/member/updateConfig.json_REQUEST',
        'POST/api/member/updateConfig.json_SUCCESS',
        'POST/api/member/updateConfig.json_FAILURE'
      ]
    }
  }

  'GET/api/member/logout.action': (
    params?: Models['GET/api/member/logout.action']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/api/member/logout.action'
      url: '/api/member/logout.action'
      method: 'GET'
      params?: Models['GET/api/member/logout.action']['Req']
      types: [
        'GET/api/member/logout.action_REQUEST',
        'GET/api/member/logout.action_SUCCESS',
        'GET/api/member/logout.action_FAILURE'
      ]
    }
  }

  'GET/api/member/adminLogin.action': (
    params?: Models['GET/api/member/adminLogin.action']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/api/member/adminLogin.action'
      url: '/api/member/adminLogin.action'
      method: 'GET'
      params?: Models['GET/api/member/adminLogin.action']['Req']
      types: [
        'GET/api/member/adminLogin.action_REQUEST',
        'GET/api/member/adminLogin.action_SUCCESS',
        'GET/api/member/adminLogin.action_FAILURE'
      ]
    }
  }

  'POST/api/member/signProtocol.json': (
    params?: Models['POST/api/member/signProtocol.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'POST/api/member/signProtocol.json'
      url: '/api/member/signProtocol.json'
      method: 'POST'
      params?: Models['POST/api/member/signProtocol.json']['Req']
      types: [
        'POST/api/member/signProtocol.json_REQUEST',
        'POST/api/member/signProtocol.json_SUCCESS',
        'POST/api/member/signProtocol.json_FAILURE'
      ]
    }
  }

  'GET/api/member/getInfo.json': (
    params?: Models['GET/api/member/getInfo.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/api/member/getInfo.json'
      url: '/api/member/getInfo.json'
      method: 'GET'
      params?: Models['GET/api/member/getInfo.json']['Req']
      types: [
        'GET/api/member/getInfo.json_REQUEST',
        'GET/api/member/getInfo.json_SUCCESS',
        'GET/api/member/getInfo.json_FAILURE'
      ]
    }
  }

  'POST/api/member/addContacts.json': (
    params?: Models['POST/api/member/addContacts.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'POST/api/member/addContacts.json'
      url: '/api/member/addContacts.json'
      method: 'POST'
      params?: Models['POST/api/member/addContacts.json']['Req']
      types: [
        'POST/api/member/addContacts.json_REQUEST',
        'POST/api/member/addContacts.json_SUCCESS',
        'POST/api/member/addContacts.json_FAILURE'
      ]
    }
  }

  'GET/api/member/getQualificationBrandAccess.json': (
    params?: Models['GET/api/member/getQualificationBrandAccess.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/api/member/getQualificationBrandAccess.json'
      url: '/api/member/getQualificationBrandAccess.json'
      method: 'GET'
      params?: Models['GET/api/member/getQualificationBrandAccess.json']['Req']
      types: [
        'GET/api/member/getQualificationBrandAccess.json_REQUEST',
        'GET/api/member/getQualificationBrandAccess.json_SUCCESS',
        'GET/api/member/getQualificationBrandAccess.json_FAILURE'
      ]
    }
  }

  'GET/api/member/checkContactsName.json': (
    params?: Models['GET/api/member/checkContactsName.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/api/member/checkContactsName.json'
      url: '/api/member/checkContactsName.json'
      method: 'GET'
      params?: Models['GET/api/member/checkContactsName.json']['Req']
      types: [
        'GET/api/member/checkContactsName.json_REQUEST',
        'GET/api/member/checkContactsName.json_SUCCESS',
        'GET/api/member/checkContactsName.json_FAILURE'
      ]
    }
  }

  'GET/api/member/findContactsList.json': (
    params?: Models['GET/api/member/findContactsList.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/api/member/findContactsList.json'
      url: '/api/member/findContactsList.json'
      method: 'GET'
      params?: Models['GET/api/member/findContactsList.json']['Req']
      types: [
        'GET/api/member/findContactsList.json_REQUEST',
        'GET/api/member/findContactsList.json_SUCCESS',
        'GET/api/member/findContactsList.json_FAILURE'
      ]
    }
  }

  'GET/api/member/getPunishStatus.json': (
    params?: Models['GET/api/member/getPunishStatus.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/api/member/getPunishStatus.json'
      url: '/api/member/getPunishStatus.json'
      method: 'GET'
      params?: Models['GET/api/member/getPunishStatus.json']['Req']
      types: [
        'GET/api/member/getPunishStatus.json_REQUEST',
        'GET/api/member/getPunishStatus.json_SUCCESS',
        'GET/api/member/getPunishStatus.json_FAILURE'
      ]
    }
  }

  'GET/api/member/findPunishRecordList.json': (
    params?: Models['GET/api/member/findPunishRecordList.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/api/member/findPunishRecordList.json'
      url: '/api/member/findPunishRecordList.json'
      method: 'GET'
      params?: Models['GET/api/member/findPunishRecordList.json']['Req']
      types: [
        'GET/api/member/findPunishRecordList.json_REQUEST',
        'GET/api/member/findPunishRecordList.json_SUCCESS',
        'GET/api/member/findPunishRecordList.json_FAILURE'
      ]
    }
  }

  'GET/api/member/findQualificationPunishRecordList.json': (
    params?: Models['GET/api/member/findQualificationPunishRecordList.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/api/member/findQualificationPunishRecordList.json'
      url: '/api/member/findQualificationPunishRecordList.json'
      method: 'GET'
      params?: Models['GET/api/member/findQualificationPunishRecordList.json']['Req']
      types: [
        'GET/api/member/findQualificationPunishRecordList.json_REQUEST',
        'GET/api/member/findQualificationPunishRecordList.json_SUCCESS',
        'GET/api/member/findQualificationPunishRecordList.json_FAILURE'
      ]
    }
  }

  'GET/api/member/isProtocolSigned.json': (
    params?: Models['GET/api/member/isProtocolSigned.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/api/member/isProtocolSigned.json'
      url: '/api/member/isProtocolSigned.json'
      method: 'GET'
      params?: Models['GET/api/member/isProtocolSigned.json']['Req']
      types: [
        'GET/api/member/isProtocolSigned.json_REQUEST',
        'GET/api/member/isProtocolSigned.json_SUCCESS',
        'GET/api/member/isProtocolSigned.json_FAILURE'
      ]
    }
  }

  'POST/api/member/joinBusinessPlatform.json': (
    params?: Models['POST/api/member/joinBusinessPlatform.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'POST/api/member/joinBusinessPlatform.json'
      url: 'api/member/joinBusinessPlatform.json'
      method: 'POST'
      params?: Models['POST/api/member/joinBusinessPlatform.json']['Req']
      types: [
        'POST/api/member/joinBusinessPlatform.json_REQUEST',
        'POST/api/member/joinBusinessPlatform.json_SUCCESS',
        'POST/api/member/joinBusinessPlatform.json_FAILURE'
      ]
    }
  }

  'GET/TODO': (
    params?: Models['GET/TODO']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/TODO'
      url: 'TODO'
      method: 'GET'
      params?: Models['GET/TODO']['Req']
      types: ['GET/TODO_REQUEST', 'GET/TODO_SUCCESS', 'GET/TODO_FAILURE']
    }
  }

  'GET/api/member/findDiagnoseList.json': (
    params?: Models['GET/api/member/findDiagnoseList.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/api/member/findDiagnoseList.json'
      url: '/api/member/findDiagnoseList.json'
      method: 'GET'
      params?: Models['GET/api/member/findDiagnoseList.json']['Req']
      types: [
        'GET/api/member/findDiagnoseList.json_REQUEST',
        'GET/api/member/findDiagnoseList.json_SUCCESS',
        'GET/api/member/findDiagnoseList.json_FAILURE'
      ]
    }
  }

  'GET/https://mo.m.taobao.com/feeds/': (
    params?: Models['GET/https://mo.m.taobao.com/feeds/']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/https://mo.m.taobao.com/feeds/'
      url: 'https://mo.m.taobao.com/feeds/'
      method: 'GET'
      params?: Models['GET/https://mo.m.taobao.com/feeds/']['Req']
      types: [
        'GET/https://mo.m.taobao.com/feeds/_REQUEST',
        'GET/https://mo.m.taobao.com/feeds/_SUCCESS',
        'GET/https://mo.m.taobao.com/feeds/_FAILURE'
      ]
    }
  }

  'GET/https://mo.m.taobao.com/one-stop/': (
    params?: Models['GET/https://mo.m.taobao.com/one-stop/']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/https://mo.m.taobao.com/one-stop/'
      url: 'https://mo.m.taobao.com/one-stop/'
      method: 'GET'
      params?: Models['GET/https://mo.m.taobao.com/one-stop/']['Req']
      types: [
        'GET/https://mo.m.taobao.com/one-stop/_REQUEST',
        'GET/https://mo.m.taobao.com/one-stop/_SUCCESS',
        'GET/https://mo.m.taobao.com/one-stop/_FAILURE'
      ]
    }
  }

  'GET/api/member/invitation/url.json': (
    params?: Models['GET/api/member/invitation/url.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/api/member/invitation/url.json'
      url: '/api/member/invitation/url.json'
      method: 'GET'
      params?: Models['GET/api/member/invitation/url.json']['Req']
      types: [
        'GET/api/member/invitation/url.json_REQUEST',
        'GET/api/member/invitation/url.json_SUCCESS',
        'GET/api/member/invitation/url.json_FAILURE'
      ]
    }
  }

  'GET/api/member/stage.json': (
    params?: Models['GET/api/member/stage.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/api/member/stage.json'
      url: '/api/member/stage.json'
      method: 'GET'
      params?: Models['GET/api/member/stage.json']['Req']
      types: [
        'GET/api/member/stage.json_REQUEST',
        'GET/api/member/stage.json_SUCCESS',
        'GET/api/member/stage.json_FAILURE'
      ]
    }
  }

  'GET/api/member/activity.json': (
    params?: Models['GET/api/member/activity.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/api/member/activity.json'
      url: '/api/member/activity.json'
      method: 'GET'
      params?: Models['GET/api/member/activity.json']['Req']
      types: [
        'GET/api/member/activity.json_REQUEST',
        'GET/api/member/activity.json_SUCCESS',
        'GET/api/member/activity.json_FAILURE'
      ]
    }
  }

  'GET/api/member/activity/itemGuide.json': (
    params?: Models['GET/api/member/activity/itemGuide.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/api/member/activity/itemGuide.json'
      url: '/api/member/activity/itemGuide.json'
      method: 'GET'
      params?: Models['GET/api/member/activity/itemGuide.json']['Req']
      types: [
        'GET/api/member/activity/itemGuide.json_REQUEST',
        'GET/api/member/activity/itemGuide.json_SUCCESS',
        'GET/api/member/activity/itemGuide.json_FAILURE'
      ]
    }
  }

  'GET/api/member/transfer.json': (
    params?: Models['GET/api/member/transfer.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/api/member/transfer.json'
      url: '/api/member/transfer.json'
      method: 'GET'
      params?: Models['GET/api/member/transfer.json']['Req']
      types: [
        'GET/api/member/transfer.json_REQUEST',
        'GET/api/member/transfer.json_SUCCESS',
        'GET/api/member/transfer.json_FAILURE'
      ]
    }
  }

  'GET/api/member/newGuestTask.json': (
    params?: Models['GET/api/member/newGuestTask.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/api/member/newGuestTask.json'
      url: '/api/member/newGuestTask.json'
      method: 'GET'
      params?: Models['GET/api/member/newGuestTask.json']['Req']
      types: [
        'GET/api/member/newGuestTask.json_REQUEST',
        'GET/api/member/newGuestTask.json_SUCCESS',
        'GET/api/member/newGuestTask.json_FAILURE'
      ]
    }
  }

  'GET/api/account/getAcctBalanceRemindSettingAutoRecharge.json': (
    params?: Models['GET/api/account/getAcctBalanceRemindSettingAutoRecharge.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/api/account/getAcctBalanceRemindSettingAutoRecharge.json'
      url: '/api/account/getAcctBalanceRemindSettingAutoRecharge.json'
      method: 'GET'
      params?: Models['GET/api/account/getAcctBalanceRemindSettingAutoRecharge.json']['Req']
      types: [
        'GET/api/account/getAcctBalanceRemindSettingAutoRecharge.json_REQUEST',
        'GET/api/account/getAcctBalanceRemindSettingAutoRecharge.json_SUCCESS',
        'GET/api/account/getAcctBalanceRemindSettingAutoRecharge.json_FAILURE'
      ]
    }
  }

  'GET/api/account/getSignInfo.json': (
    params?: Models['GET/api/account/getSignInfo.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/api/account/getSignInfo.json'
      url: '/api/account/getSignInfo.json'
      method: 'GET'
      params?: Models['GET/api/account/getSignInfo.json']['Req']
      types: [
        'GET/api/account/getSignInfo.json_REQUEST',
        'GET/api/account/getSignInfo.json_SUCCESS',
        'GET/api/account/getSignInfo.json_FAILURE'
      ]
    }
  }

  'PUT/api/account/modifyAcctBalanceRemindSettingAutoRecharge.json': (
    params?: Models['PUT/api/account/modifyAcctBalanceRemindSettingAutoRecharge.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'PUT/api/account/modifyAcctBalanceRemindSettingAutoRecharge.json'
      url: '/api/account/modifyAcctBalanceRemindSettingAutoRecharge.json'
      method: 'PUT'
      params?: Models['PUT/api/account/modifyAcctBalanceRemindSettingAutoRecharge.json']['Req']
      types: [
        'PUT/api/account/modifyAcctBalanceRemindSettingAutoRecharge.json_REQUEST',
        'PUT/api/account/modifyAcctBalanceRemindSettingAutoRecharge.json_SUCCESS',
        'PUT/api/account/modifyAcctBalanceRemindSettingAutoRecharge.json_FAILURE'
      ]
    }
  }

  'PUT/api/account/unsignAutoRecharge.json': (
    params?: Models['PUT/api/account/unsignAutoRecharge.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'PUT/api/account/unsignAutoRecharge.json'
      url: '/api/account/unsignAutoRecharge.json'
      method: 'PUT'
      params?: Models['PUT/api/account/unsignAutoRecharge.json']['Req']
      types: [
        'PUT/api/account/unsignAutoRecharge.json_REQUEST',
        'PUT/api/account/unsignAutoRecharge.json_SUCCESS',
        'PUT/api/account/unsignAutoRecharge.json_FAILURE'
      ]
    }
  }

  'GET/api/account/findItemList.json': (
    params?: Models['GET/api/account/findItemList.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/api/account/findItemList.json'
      url: '/api/account/findItemList.json'
      method: 'GET'
      params?: Models['GET/api/account/findItemList.json']['Req']
      types: [
        'GET/api/account/findItemList.json_REQUEST',
        'GET/api/account/findItemList.json_SUCCESS',
        'GET/api/account/findItemList.json_FAILURE'
      ]
    }
  }

  'GET/api/account/exportItemList.action': (
    params?: Models['GET/api/account/exportItemList.action']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/api/account/exportItemList.action'
      url: '/api/account/exportItemList.action'
      method: 'GET'
      params?: Models['GET/api/account/exportItemList.action']['Req']
      types: [
        'GET/api/account/exportItemList.action_REQUEST',
        'GET/api/account/exportItemList.action_SUCCESS',
        'GET/api/account/exportItemList.action_FAILURE'
      ]
    }
  }

  'GET/和钻展保持一致': (
    params?: Models['GET/和钻展保持一致']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/和钻展保持一致'
      url: '和钻展保持一致'
      method: 'GET'
      params?: Models['GET/和钻展保持一致']['Req']
      types: ['GET/和钻展保持一致_REQUEST', 'GET/和钻展保持一致_SUCCESS', 'GET/和钻展保持一致_FAILURE']
    }
  }

  'GET/api/account/findMessageRemindList.json': (
    params?: Models['GET/api/account/findMessageRemindList.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/api/account/findMessageRemindList.json'
      url: '/api/account/findMessageRemindList.json'
      method: 'GET'
      params?: Models['GET/api/account/findMessageRemindList.json']['Req']
      types: [
        'GET/api/account/findMessageRemindList.json_REQUEST',
        'GET/api/account/findMessageRemindList.json_SUCCESS',
        'GET/api/account/findMessageRemindList.json_FAILURE'
      ]
    }
  }

  'POST/api/account/modifyAllMessageRemindList.json': (
    params?: Models['POST/api/account/modifyAllMessageRemindList.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'POST/api/account/modifyAllMessageRemindList.json'
      url: '/api/account/modifyAllMessageRemindList.json'
      method: 'POST'
      params?: Models['POST/api/account/modifyAllMessageRemindList.json']['Req']
      types: [
        'POST/api/account/modifyAllMessageRemindList.json_REQUEST',
        'POST/api/account/modifyAllMessageRemindList.json_SUCCESS',
        'POST/api/account/modifyAllMessageRemindList.json_FAILURE'
      ]
    }
  }

  'GET/api/account/getRefundList.json': (
    params?: Models['GET/api/account/getRefundList.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/api/account/getRefundList.json'
      url: '/api/account/getRefundList.json'
      method: 'GET'
      params?: Models['GET/api/account/getRefundList.json']['Req']
      types: [
        'GET/api/account/getRefundList.json_REQUEST',
        'GET/api/account/getRefundList.json_SUCCESS',
        'GET/api/account/getRefundList.json_FAILURE'
      ]
    }
  }

  'POST/api/account/createRefund.json': (
    params?: Models['POST/api/account/createRefund.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'POST/api/account/createRefund.json'
      url: '/api/account/createRefund.json'
      method: 'POST'
      params?: Models['POST/api/account/createRefund.json']['Req']
      types: [
        'POST/api/account/createRefund.json_REQUEST',
        'POST/api/account/createRefund.json_SUCCESS',
        'POST/api/account/createRefund.json_FAILURE'
      ]
    }
  }

  'GET/api/account/checkRefund.json': (
    params?: Models['GET/api/account/checkRefund.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/api/account/checkRefund.json'
      url: '/api/account/checkRefund.json'
      method: 'GET'
      params?: Models['GET/api/account/checkRefund.json']['Req']
      types: [
        'GET/api/account/checkRefund.json_REQUEST',
        'GET/api/account/checkRefund.json_SUCCESS',
        'GET/api/account/checkRefund.json_FAILURE'
      ]
    }
  }

  'GET/api/account/isSignGlobalAlipay.json': (
    params?: Models['GET/api/account/isSignGlobalAlipay.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/api/account/isSignGlobalAlipay.json'
      url: '/api/account/isSignGlobalAlipay.json'
      method: 'GET'
      params?: Models['GET/api/account/isSignGlobalAlipay.json']['Req']
      types: [
        'GET/api/account/isSignGlobalAlipay.json_REQUEST',
        'GET/api/account/isSignGlobalAlipay.json_SUCCESS',
        'GET/api/account/isSignGlobalAlipay.json_FAILURE'
      ]
    }
  }

  'GET/api/account/charge.json': (
    params?: Models['GET/api/account/charge.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/api/account/charge.json'
      url: '/api/account/charge.json'
      method: 'GET'
      params?: Models['GET/api/account/charge.json']['Req']
      types: [
        'GET/api/account/charge.json_REQUEST',
        'GET/api/account/charge.json_SUCCESS',
        'GET/api/account/charge.json_FAILURE'
      ]
    }
  }

  'GET/api/log/findOperationLog.json': (
    params?: Models['GET/api/log/findOperationLog.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/api/log/findOperationLog.json'
      url: '/api/log/findOperationLog.json'
      method: 'GET'
      params?: Models['GET/api/log/findOperationLog.json']['Req']
      types: [
        'GET/api/log/findOperationLog.json_REQUEST',
        'GET/api/log/findOperationLog.json_SUCCESS',
        'GET/api/log/findOperationLog.json_FAILURE'
      ]
    }
  }

  'GET/api/log/findAdgroupByName.json': (
    params?: Models['GET/api/log/findAdgroupByName.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/api/log/findAdgroupByName.json'
      url: '/api/log/findAdgroupByName.json'
      method: 'GET'
      params?: Models['GET/api/log/findAdgroupByName.json']['Req']
      types: [
        'GET/api/log/findAdgroupByName.json_REQUEST',
        'GET/api/log/findAdgroupByName.json_SUCCESS',
        'GET/api/log/findAdgroupByName.json_FAILURE'
      ]
    }
  }

  'GET/api/log/findCampaignByName.json': (
    params?: Models['GET/api/log/findCampaignByName.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/api/log/findCampaignByName.json'
      url: '/api/log/findCampaignByName.json'
      method: 'GET'
      params?: Models['GET/api/log/findCampaignByName.json']['Req']
      types: [
        'GET/api/log/findCampaignByName.json_REQUEST',
        'GET/api/log/findCampaignByName.json_SUCCESS',
        'GET/api/log/findCampaignByName.json_FAILURE'
      ]
    }
  }

  'GET/api/account/findAccumulateDeduct.json': (
    params?: Models['GET/api/account/findAccumulateDeduct.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/api/account/findAccumulateDeduct.json'
      url: '/api/account/findAccumulateDeduct.json'
      method: 'GET'
      params?: Models['GET/api/account/findAccumulateDeduct.json']['Req']
      types: [
        'GET/api/account/findAccumulateDeduct.json_REQUEST',
        'GET/api/account/findAccumulateDeduct.json_SUCCESS',
        'GET/api/account/findAccumulateDeduct.json_FAILURE'
      ]
    }
  }

  'GET/api/message/sendMobileCode.json': (
    params?: Models['GET/api/message/sendMobileCode.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/api/message/sendMobileCode.json'
      url: '/api/message/sendMobileCode.json'
      method: 'GET'
      params?: Models['GET/api/message/sendMobileCode.json']['Req']
      types: [
        'GET/api/message/sendMobileCode.json_REQUEST',
        'GET/api/message/sendMobileCode.json_SUCCESS',
        'GET/api/message/sendMobileCode.json_FAILURE'
      ]
    }
  }

  'POST/api/message/verifyMobilePhoneCode.json': (
    params?: Models['POST/api/message/verifyMobilePhoneCode.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'POST/api/message/verifyMobilePhoneCode.json'
      url: '/api/message/verifyMobilePhoneCode.json'
      method: 'POST'
      params?: Models['POST/api/message/verifyMobilePhoneCode.json']['Req']
      types: [
        'POST/api/message/verifyMobilePhoneCode.json_REQUEST',
        'POST/api/message/verifyMobilePhoneCode.json_SUCCESS',
        'POST/api/message/verifyMobilePhoneCode.json_FAILURE'
      ]
    }
  }

  'GET/api/common/findCodeList.json': (
    params?: Models['GET/api/common/findCodeList.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/api/common/findCodeList.json'
      url: '/api/common/findCodeList.json'
      method: 'GET'
      params?: Models['GET/api/common/findCodeList.json']['Req']
      types: [
        'GET/api/common/findCodeList.json_REQUEST',
        'GET/api/common/findCodeList.json_SUCCESS',
        'GET/api/common/findCodeList.json_FAILURE'
      ]
    }
  }

  'GET/api/common/getVersion.json': (
    params?: Models['GET/api/common/getVersion.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/api/common/getVersion.json'
      url: '/api/common/getVersion.json'
      method: 'GET'
      params?: Models['GET/api/common/getVersion.json']['Req']
      types: [
        'GET/api/common/getVersion.json_REQUEST',
        'GET/api/common/getVersion.json_SUCCESS',
        'GET/api/common/getVersion.json_FAILURE'
      ]
    }
  }

  'GET/api/component/findComponentMetaList.json': (
    params?: Models['GET/api/component/findComponentMetaList.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/api/component/findComponentMetaList.json'
      url: '/api/component/findComponentMetaList.json'
      method: 'GET'
      params?: Models['GET/api/component/findComponentMetaList.json']['Req']
      types: [
        'GET/api/component/findComponentMetaList.json_REQUEST',
        'GET/api/component/findComponentMetaList.json_SUCCESS',
        'GET/api/component/findComponentMetaList.json_FAILURE'
      ]
    }
  }

  'GET/api/component/findMemberTemplateList.json': (
    params?: Models['GET/api/component/findMemberTemplateList.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/api/component/findMemberTemplateList.json'
      url: '/api/component/findMemberTemplateList.json'
      method: 'GET'
      params?: Models['GET/api/component/findMemberTemplateList.json']['Req']
      types: [
        'GET/api/component/findMemberTemplateList.json_REQUEST',
        'GET/api/component/findMemberTemplateList.json_SUCCESS',
        'GET/api/component/findMemberTemplateList.json_FAILURE'
      ]
    }
  }

  'POST/api/component/addMemberTemplate.json': (
    params?: Models['POST/api/component/addMemberTemplate.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'POST/api/component/addMemberTemplate.json'
      url: '/api/component/addMemberTemplate.json'
      method: 'POST'
      params?: Models['POST/api/component/addMemberTemplate.json']['Req']
      types: [
        'POST/api/component/addMemberTemplate.json_REQUEST',
        'POST/api/component/addMemberTemplate.json_SUCCESS',
        'POST/api/component/addMemberTemplate.json_FAILURE'
      ]
    }
  }

  'PUT/api/component/updateMemberTemplate.json': (
    params?: Models['PUT/api/component/updateMemberTemplate.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'PUT/api/component/updateMemberTemplate.json'
      url: '/api/component/updateMemberTemplate.json'
      method: 'PUT'
      params?: Models['PUT/api/component/updateMemberTemplate.json']['Req']
      types: [
        'PUT/api/component/updateMemberTemplate.json_REQUEST',
        'PUT/api/component/updateMemberTemplate.json_SUCCESS',
        'PUT/api/component/updateMemberTemplate.json_FAILURE'
      ]
    }
  }

  'DELETE/api/component/deleteMemberTemplate.json': (
    params?: Models['DELETE/api/component/deleteMemberTemplate.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'DELETE/api/component/deleteMemberTemplate.json'
      url: '/api/component/deleteMemberTemplate.json'
      method: 'DELETE'
      params?: Models['DELETE/api/component/deleteMemberTemplate.json']['Req']
      types: [
        'DELETE/api/component/deleteMemberTemplate.json_REQUEST',
        'DELETE/api/component/deleteMemberTemplate.json_SUCCESS',
        'DELETE/api/component/deleteMemberTemplate.json_FAILURE'
      ]
    }
  }

  'GET/api/component/findMenuList.json': (
    params?: Models['GET/api/component/findMenuList.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/api/component/findMenuList.json'
      url: '/api/component/findMenuList.json'
      method: 'GET'
      params?: Models['GET/api/component/findMenuList.json']['Req']
      types: [
        'GET/api/component/findMenuList.json_REQUEST',
        'GET/api/component/findMenuList.json_SUCCESS',
        'GET/api/component/findMenuList.json_FAILURE'
      ]
    }
  }

  'GET/api/component/findComponentList.json': (
    params?: Models['GET/api/component/findComponentList.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/api/component/findComponentList.json'
      url: '/api/component/findComponentList.json'
      method: 'GET'
      params?: Models['GET/api/component/findComponentList.json']['Req']
      types: [
        'GET/api/component/findComponentList.json_REQUEST',
        'GET/api/component/findComponentList.json_SUCCESS',
        'GET/api/component/findComponentList.json_FAILURE'
      ]
    }
  }

  'GET/api/account/report/findHourSum.json': (
    params?: Models['GET/api/account/report/findHourSum.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/api/account/report/findHourSum.json'
      url: '/api/account/report/findHourSum.json'
      method: 'GET'
      params?: Models['GET/api/account/report/findHourSum.json']['Req']
      types: [
        'GET/api/account/report/findHourSum.json_REQUEST',
        'GET/api/account/report/findHourSum.json_SUCCESS',
        'GET/api/account/report/findHourSum.json_FAILURE'
      ]
    }
  }

  'GET/api/account/report/findHourList.json': (
    params?: Models['GET/api/account/report/findHourList.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/api/account/report/findHourList.json'
      url: '/api/account/report/findHourList.json'
      method: 'GET'
      params?: Models['GET/api/account/report/findHourList.json']['Req']
      types: [
        'GET/api/account/report/findHourList.json_REQUEST',
        'GET/api/account/report/findHourList.json_SUCCESS',
        'GET/api/account/report/findHourList.json_FAILURE'
      ]
    }
  }

  'GET/api/account/report/findDaySum.json': (
    params?: Models['GET/api/account/report/findDaySum.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/api/account/report/findDaySum.json'
      url: '/api/account/report/findDaySum.json'
      method: 'GET'
      params?: Models['GET/api/account/report/findDaySum.json']['Req']
      types: [
        'GET/api/account/report/findDaySum.json_REQUEST',
        'GET/api/account/report/findDaySum.json_SUCCESS',
        'GET/api/account/report/findDaySum.json_FAILURE'
      ]
    }
  }

  'GET/api/account/report/findDayList.json': (
    params?: Models['GET/api/account/report/findDayList.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/api/account/report/findDayList.json'
      url: '/api/account/report/findDayList.json'
      method: 'GET'
      params?: Models['GET/api/account/report/findDayList.json']['Req']
      types: [
        'GET/api/account/report/findDayList.json_REQUEST',
        'GET/api/account/report/findDayList.json_SUCCESS',
        'GET/api/account/report/findDayList.json_FAILURE'
      ]
    }
  }

  'GET/api/campaign/report/findPage.json': (
    params?: Models['GET/api/campaign/report/findPage.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/api/campaign/report/findPage.json'
      url: '/api/campaign/report/findPage.json'
      method: 'GET'
      params?: Models['GET/api/campaign/report/findPage.json']['Req']
      types: [
        'GET/api/campaign/report/findPage.json_REQUEST',
        'GET/api/campaign/report/findPage.json_SUCCESS',
        'GET/api/campaign/report/findPage.json_FAILURE'
      ]
    }
  }

  'GET/api/campaign/report/findList.json': (
    params?: Models['GET/api/campaign/report/findList.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/api/campaign/report/findList.json'
      url: '/api/campaign/report/findList.json'
      method: 'GET'
      params?: Models['GET/api/campaign/report/findList.json']['Req']
      types: [
        'GET/api/campaign/report/findList.json_REQUEST',
        'GET/api/campaign/report/findList.json_SUCCESS',
        'GET/api/campaign/report/findList.json_FAILURE'
      ]
    }
  }

  'GET/api/campaign/report/findSum.json': (
    params?: Models['GET/api/campaign/report/findSum.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/api/campaign/report/findSum.json'
      url: '/api/campaign/report/findSum.json'
      method: 'GET'
      params?: Models['GET/api/campaign/report/findSum.json']['Req']
      types: [
        'GET/api/campaign/report/findSum.json_REQUEST',
        'GET/api/campaign/report/findSum.json_SUCCESS',
        'GET/api/campaign/report/findSum.json_FAILURE'
      ]
    }
  }

  'GET/api/adgroup/report/findPage.json': (
    params?: Models['GET/api/adgroup/report/findPage.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/api/adgroup/report/findPage.json'
      url: '/api/adgroup/report/findPage.json'
      method: 'GET'
      params?: Models['GET/api/adgroup/report/findPage.json']['Req']
      types: [
        'GET/api/adgroup/report/findPage.json_REQUEST',
        'GET/api/adgroup/report/findPage.json_SUCCESS',
        'GET/api/adgroup/report/findPage.json_FAILURE'
      ]
    }
  }

  'GET/api/adgroup/report/findList.json': (
    params?: Models['GET/api/adgroup/report/findList.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/api/adgroup/report/findList.json'
      url: '/api/adgroup/report/findList.json'
      method: 'GET'
      params?: Models['GET/api/adgroup/report/findList.json']['Req']
      types: [
        'GET/api/adgroup/report/findList.json_REQUEST',
        'GET/api/adgroup/report/findList.json_SUCCESS',
        'GET/api/adgroup/report/findList.json_FAILURE'
      ]
    }
  }

  'GET/api/adgroup/report/findSum.json': (
    params?: Models['GET/api/adgroup/report/findSum.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/api/adgroup/report/findSum.json'
      url: '/api/adgroup/report/findSum.json'
      method: 'GET'
      params?: Models['GET/api/adgroup/report/findSum.json']['Req']
      types: [
        'GET/api/adgroup/report/findSum.json_REQUEST',
        'GET/api/adgroup/report/findSum.json_SUCCESS',
        'GET/api/adgroup/report/findSum.json_FAILURE'
      ]
    }
  }

  'GET/api/creative/report/findPage.json': (
    params?: Models['GET/api/creative/report/findPage.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/api/creative/report/findPage.json'
      url: '/api/creative/report/findPage.json'
      method: 'GET'
      params?: Models['GET/api/creative/report/findPage.json']['Req']
      types: [
        'GET/api/creative/report/findPage.json_REQUEST',
        'GET/api/creative/report/findPage.json_SUCCESS',
        'GET/api/creative/report/findPage.json_FAILURE'
      ]
    }
  }

  'GET/api/creative/report/findList.json': (
    params?: Models['GET/api/creative/report/findList.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/api/creative/report/findList.json'
      url: '/api/creative/report/findList.json'
      method: 'GET'
      params?: Models['GET/api/creative/report/findList.json']['Req']
      types: [
        'GET/api/creative/report/findList.json_REQUEST',
        'GET/api/creative/report/findList.json_SUCCESS',
        'GET/api/creative/report/findList.json_FAILURE'
      ]
    }
  }

  'GET/api/creative/report/findSum.json': (
    params?: Models['GET/api/creative/report/findSum.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/api/creative/report/findSum.json'
      url: '/api/creative/report/findSum.json'
      method: 'GET'
      params?: Models['GET/api/creative/report/findSum.json']['Req']
      types: [
        'GET/api/creative/report/findSum.json_REQUEST',
        'GET/api/creative/report/findSum.json_SUCCESS',
        'GET/api/creative/report/findSum.json_FAILURE'
      ]
    }
  }

  'GET/api/crowd/report/findPage.json': (
    params?: Models['GET/api/crowd/report/findPage.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/api/crowd/report/findPage.json'
      url: '/api/crowd/report/findPage.json'
      method: 'GET'
      params?: Models['GET/api/crowd/report/findPage.json']['Req']
      types: [
        'GET/api/crowd/report/findPage.json_REQUEST',
        'GET/api/crowd/report/findPage.json_SUCCESS',
        'GET/api/crowd/report/findPage.json_FAILURE'
      ]
    }
  }

  'GET/api/crowd/report/findList.json': (
    params?: Models['GET/api/crowd/report/findList.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/api/crowd/report/findList.json'
      url: '/api/crowd/report/findList.json'
      method: 'GET'
      params?: Models['GET/api/crowd/report/findList.json']['Req']
      types: [
        'GET/api/crowd/report/findList.json_REQUEST',
        'GET/api/crowd/report/findList.json_SUCCESS',
        'GET/api/crowd/report/findList.json_FAILURE'
      ]
    }
  }

  'GET/api/crowd/report/findSum.json': (
    params?: Models['GET/api/crowd/report/findSum.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/api/crowd/report/findSum.json'
      url: '/api/crowd/report/findSum.json'
      method: 'GET'
      params?: Models['GET/api/crowd/report/findSum.json']['Req']
      types: [
        'GET/api/crowd/report/findSum.json_REQUEST',
        'GET/api/crowd/report/findSum.json_SUCCESS',
        'GET/api/crowd/report/findSum.json_FAILURE'
      ]
    }
  }

  'GET/api/adzone/report/findPage.json': (
    params?: Models['GET/api/adzone/report/findPage.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/api/adzone/report/findPage.json'
      url: '/api/adzone/report/findPage.json'
      method: 'GET'
      params?: Models['GET/api/adzone/report/findPage.json']['Req']
      types: [
        'GET/api/adzone/report/findPage.json_REQUEST',
        'GET/api/adzone/report/findPage.json_SUCCESS',
        'GET/api/adzone/report/findPage.json_FAILURE'
      ]
    }
  }

  'GET/api/adzone/report/findList.json': (
    params?: Models['GET/api/adzone/report/findList.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/api/adzone/report/findList.json'
      url: '/api/adzone/report/findList.json'
      method: 'GET'
      params?: Models['GET/api/adzone/report/findList.json']['Req']
      types: [
        'GET/api/adzone/report/findList.json_REQUEST',
        'GET/api/adzone/report/findList.json_SUCCESS',
        'GET/api/adzone/report/findList.json_FAILURE'
      ]
    }
  }

  'GET/api/adzone/report/findSum.json': (
    params?: Models['GET/api/adzone/report/findSum.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/api/adzone/report/findSum.json'
      url: '/api/adzone/report/findSum.json'
      method: 'GET'
      params?: Models['GET/api/adzone/report/findSum.json']['Req']
      types: [
        'GET/api/adzone/report/findSum.json_REQUEST',
        'GET/api/adzone/report/findSum.json_SUCCESS',
        'GET/api/adzone/report/findSum.json_FAILURE'
      ]
    }
  }

  'GET/api/account/report/findCrowdDaySum.json': (
    params?: Models['GET/api/account/report/findCrowdDaySum.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/api/account/report/findCrowdDaySum.json'
      url: '/api/account/report/findCrowdDaySum.json'
      method: 'GET'
      params?: Models['GET/api/account/report/findCrowdDaySum.json']['Req']
      types: [
        'GET/api/account/report/findCrowdDaySum.json_REQUEST',
        'GET/api/account/report/findCrowdDaySum.json_SUCCESS',
        'GET/api/account/report/findCrowdDaySum.json_FAILURE'
      ]
    }
  }

  'GET/api/account/report/findCrowdDayList.json': (
    params?: Models['GET/api/account/report/findCrowdDayList.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/api/account/report/findCrowdDayList.json'
      url: '/api/account/report/findCrowdDayList.json'
      method: 'GET'
      params?: Models['GET/api/account/report/findCrowdDayList.json']['Req']
      types: [
        'GET/api/account/report/findCrowdDayList.json_REQUEST',
        'GET/api/account/report/findCrowdDayList.json_SUCCESS',
        'GET/api/account/report/findCrowdDayList.json_FAILURE'
      ]
    }
  }

  'GET/api/material/report/findItemPage.json': (
    params?: Models['GET/api/material/report/findItemPage.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/api/material/report/findItemPage.json'
      url: '/api/material/report/findItemPage.json'
      method: 'GET'
      params?: Models['GET/api/material/report/findItemPage.json']['Req']
      types: [
        'GET/api/material/report/findItemPage.json_REQUEST',
        'GET/api/material/report/findItemPage.json_SUCCESS',
        'GET/api/material/report/findItemPage.json_FAILURE'
      ]
    }
  }

  'GET/api/activity/report/consumerReach.json': (
    params?: Models['GET/api/activity/report/consumerReach.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/api/activity/report/consumerReach.json'
      url: '/api/activity/report/consumerReach.json'
      method: 'GET'
      params?: Models['GET/api/activity/report/consumerReach.json']['Req']
      types: [
        'GET/api/activity/report/consumerReach.json_REQUEST',
        'GET/api/activity/report/consumerReach.json_SUCCESS',
        'GET/api/activity/report/consumerReach.json_FAILURE'
      ]
    }
  }

  'GET/api/account/report/exportHourList.json': (
    params?: Models['GET/api/account/report/exportHourList.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/api/account/report/exportHourList.json'
      url: '/api/account/report/exportHourList.json'
      method: 'GET'
      params?: Models['GET/api/account/report/exportHourList.json']['Req']
      types: [
        'GET/api/account/report/exportHourList.json_REQUEST',
        'GET/api/account/report/exportHourList.json_SUCCESS',
        'GET/api/account/report/exportHourList.json_FAILURE'
      ]
    }
  }

  'GET/api/account/report/exportDayList.json': (
    params?: Models['GET/api/account/report/exportDayList.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/api/account/report/exportDayList.json'
      url: '/api/account/report/exportDayList.json'
      method: 'GET'
      params?: Models['GET/api/account/report/exportDayList.json']['Req']
      types: [
        'GET/api/account/report/exportDayList.json_REQUEST',
        'GET/api/account/report/exportDayList.json_SUCCESS',
        'GET/api/account/report/exportDayList.json_FAILURE'
      ]
    }
  }

  'GET/api/campaign/report/exportCampaign.json': (
    params?: Models['GET/api/campaign/report/exportCampaign.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/api/campaign/report/exportCampaign.json'
      url: '/api/campaign/report/exportCampaign.json'
      method: 'GET'
      params?: Models['GET/api/campaign/report/exportCampaign.json']['Req']
      types: [
        'GET/api/campaign/report/exportCampaign.json_REQUEST',
        'GET/api/campaign/report/exportCampaign.json_SUCCESS',
        'GET/api/campaign/report/exportCampaign.json_FAILURE'
      ]
    }
  }

  'GET/api/campaign/report/exportDayOrHourList.json': (
    params?: Models['GET/api/campaign/report/exportDayOrHourList.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/api/campaign/report/exportDayOrHourList.json'
      url: '/api/campaign/report/exportDayOrHourList.json'
      method: 'GET'
      params?: Models['GET/api/campaign/report/exportDayOrHourList.json']['Req']
      types: [
        'GET/api/campaign/report/exportDayOrHourList.json_REQUEST',
        'GET/api/campaign/report/exportDayOrHourList.json_SUCCESS',
        'GET/api/campaign/report/exportDayOrHourList.json_FAILURE'
      ]
    }
  }

  'GET/api/campaign/report/exportDayOrHourSum.json': (
    params?: Models['GET/api/campaign/report/exportDayOrHourSum.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/api/campaign/report/exportDayOrHourSum.json'
      url: '/api/campaign/report/exportDayOrHourSum.json'
      method: 'GET'
      params?: Models['GET/api/campaign/report/exportDayOrHourSum.json']['Req']
      types: [
        'GET/api/campaign/report/exportDayOrHourSum.json_REQUEST',
        'GET/api/campaign/report/exportDayOrHourSum.json_SUCCESS',
        'GET/api/campaign/report/exportDayOrHourSum.json_FAILURE'
      ]
    }
  }

  'GET/api/adgroup/report/exportAdgroup.json': (
    params?: Models['GET/api/adgroup/report/exportAdgroup.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/api/adgroup/report/exportAdgroup.json'
      url: '/api/adgroup/report/exportAdgroup.json'
      method: 'GET'
      params?: Models['GET/api/adgroup/report/exportAdgroup.json']['Req']
      types: [
        'GET/api/adgroup/report/exportAdgroup.json_REQUEST',
        'GET/api/adgroup/report/exportAdgroup.json_SUCCESS',
        'GET/api/adgroup/report/exportAdgroup.json_FAILURE'
      ]
    }
  }

  'GET/api/adgroup/report/exportDayOrHourList.json': (
    params?: Models['GET/api/adgroup/report/exportDayOrHourList.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/api/adgroup/report/exportDayOrHourList.json'
      url: '/api/adgroup/report/exportDayOrHourList.json'
      method: 'GET'
      params?: Models['GET/api/adgroup/report/exportDayOrHourList.json']['Req']
      types: [
        'GET/api/adgroup/report/exportDayOrHourList.json_REQUEST',
        'GET/api/adgroup/report/exportDayOrHourList.json_SUCCESS',
        'GET/api/adgroup/report/exportDayOrHourList.json_FAILURE'
      ]
    }
  }

  'GET/api/adgroup/report/exportDayOrHourSum.json': (
    params?: Models['GET/api/adgroup/report/exportDayOrHourSum.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/api/adgroup/report/exportDayOrHourSum.json'
      url: '/api/adgroup/report/exportDayOrHourSum.json'
      method: 'GET'
      params?: Models['GET/api/adgroup/report/exportDayOrHourSum.json']['Req']
      types: [
        'GET/api/adgroup/report/exportDayOrHourSum.json_REQUEST',
        'GET/api/adgroup/report/exportDayOrHourSum.json_SUCCESS',
        'GET/api/adgroup/report/exportDayOrHourSum.json_FAILURE'
      ]
    }
  }

  'GET/api/creative/report/exportCreative.json': (
    params?: Models['GET/api/creative/report/exportCreative.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/api/creative/report/exportCreative.json'
      url: '/api/creative/report/exportCreative.json'
      method: 'GET'
      params?: Models['GET/api/creative/report/exportCreative.json']['Req']
      types: [
        'GET/api/creative/report/exportCreative.json_REQUEST',
        'GET/api/creative/report/exportCreative.json_SUCCESS',
        'GET/api/creative/report/exportCreative.json_FAILURE'
      ]
    }
  }

  'GET/api/creative/report/exportDayOrHourList.json': (
    params?: Models['GET/api/creative/report/exportDayOrHourList.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/api/creative/report/exportDayOrHourList.json'
      url: '/api/creative/report/exportDayOrHourList.json'
      method: 'GET'
      params?: Models['GET/api/creative/report/exportDayOrHourList.json']['Req']
      types: [
        'GET/api/creative/report/exportDayOrHourList.json_REQUEST',
        'GET/api/creative/report/exportDayOrHourList.json_SUCCESS',
        'GET/api/creative/report/exportDayOrHourList.json_FAILURE'
      ]
    }
  }

  'GET/api/creative/report/exportDayOrHourSum.json': (
    params?: Models['GET/api/creative/report/exportDayOrHourSum.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/api/creative/report/exportDayOrHourSum.json'
      url: '/api/creative/report/exportDayOrHourSum.json'
      method: 'GET'
      params?: Models['GET/api/creative/report/exportDayOrHourSum.json']['Req']
      types: [
        'GET/api/creative/report/exportDayOrHourSum.json_REQUEST',
        'GET/api/creative/report/exportDayOrHourSum.json_SUCCESS',
        'GET/api/creative/report/exportDayOrHourSum.json_FAILURE'
      ]
    }
  }

  'GET/api/crowd/report/exportCrowd.json': (
    params?: Models['GET/api/crowd/report/exportCrowd.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/api/crowd/report/exportCrowd.json'
      url: '/api/crowd/report/exportCrowd.json'
      method: 'GET'
      params?: Models['GET/api/crowd/report/exportCrowd.json']['Req']
      types: [
        'GET/api/crowd/report/exportCrowd.json_REQUEST',
        'GET/api/crowd/report/exportCrowd.json_SUCCESS',
        'GET/api/crowd/report/exportCrowd.json_FAILURE'
      ]
    }
  }

  'GET/api/crowd/report/exportDayOrHourList.json': (
    params?: Models['GET/api/crowd/report/exportDayOrHourList.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/api/crowd/report/exportDayOrHourList.json'
      url: '/api/crowd/report/exportDayOrHourList.json'
      method: 'GET'
      params?: Models['GET/api/crowd/report/exportDayOrHourList.json']['Req']
      types: [
        'GET/api/crowd/report/exportDayOrHourList.json_REQUEST',
        'GET/api/crowd/report/exportDayOrHourList.json_SUCCESS',
        'GET/api/crowd/report/exportDayOrHourList.json_FAILURE'
      ]
    }
  }

  'GET/api/crowd/report/exportDayOrHourSum.json': (
    params?: Models['GET/api/crowd/report/exportDayOrHourSum.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/api/crowd/report/exportDayOrHourSum.json'
      url: '/api/crowd/report/exportDayOrHourSum.json'
      method: 'GET'
      params?: Models['GET/api/crowd/report/exportDayOrHourSum.json']['Req']
      types: [
        'GET/api/crowd/report/exportDayOrHourSum.json_REQUEST',
        'GET/api/crowd/report/exportDayOrHourSum.json_SUCCESS',
        'GET/api/crowd/report/exportDayOrHourSum.json_FAILURE'
      ]
    }
  }

  'GET/api/adzone/report/exportAdzone.json': (
    params?: Models['GET/api/adzone/report/exportAdzone.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/api/adzone/report/exportAdzone.json'
      url: '/api/adzone/report/exportAdzone.json'
      method: 'GET'
      params?: Models['GET/api/adzone/report/exportAdzone.json']['Req']
      types: [
        'GET/api/adzone/report/exportAdzone.json_REQUEST',
        'GET/api/adzone/report/exportAdzone.json_SUCCESS',
        'GET/api/adzone/report/exportAdzone.json_FAILURE'
      ]
    }
  }

  'GET/api/adzone/report/exportDayOrHourList.json': (
    params?: Models['GET/api/adzone/report/exportDayOrHourList.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/api/adzone/report/exportDayOrHourList.json'
      url: '/api/adzone/report/exportDayOrHourList.json'
      method: 'GET'
      params?: Models['GET/api/adzone/report/exportDayOrHourList.json']['Req']
      types: [
        'GET/api/adzone/report/exportDayOrHourList.json_REQUEST',
        'GET/api/adzone/report/exportDayOrHourList.json_SUCCESS',
        'GET/api/adzone/report/exportDayOrHourList.json_FAILURE'
      ]
    }
  }

  'GET/api/adzone/report/exportDayOrHourSum.json': (
    params?: Models['GET/api/adzone/report/exportDayOrHourSum.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/api/adzone/report/exportDayOrHourSum.json'
      url: '/api/adzone/report/exportDayOrHourSum.json'
      method: 'GET'
      params?: Models['GET/api/adzone/report/exportDayOrHourSum.json']['Req']
      types: [
        'GET/api/adzone/report/exportDayOrHourSum.json_REQUEST',
        'GET/api/adzone/report/exportDayOrHourSum.json_SUCCESS',
        'GET/api/adzone/report/exportDayOrHourSum.json_FAILURE'
      ]
    }
  }

  'GET/api/material/report/exportItem.json': (
    params?: Models['GET/api/material/report/exportItem.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/api/material/report/exportItem.json'
      url: '/api/material/report/exportItem.json'
      method: 'GET'
      params?: Models['GET/api/material/report/exportItem.json']['Req']
      types: [
        'GET/api/material/report/exportItem.json_REQUEST',
        'GET/api/material/report/exportItem.json_SUCCESS',
        'GET/api/material/report/exportItem.json_FAILURE'
      ]
    }
  }

  'GET/api/account/report/exportCrowdDayList.json': (
    params?: Models['GET/api/account/report/exportCrowdDayList.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/api/account/report/exportCrowdDayList.json'
      url: '/api/account/report/exportCrowdDayList.json'
      method: 'GET'
      params?: Models['GET/api/account/report/exportCrowdDayList.json']['Req']
      types: [
        'GET/api/account/report/exportCrowdDayList.json_REQUEST',
        'GET/api/account/report/exportCrowdDayList.json_SUCCESS',
        'GET/api/account/report/exportCrowdDayList.json_FAILURE'
      ]
    }
  }

  'GET/api/message/findLetterList.json': (
    params?: Models['GET/api/message/findLetterList.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/api/message/findLetterList.json'
      url: '/api/message/findLetterList.json'
      method: 'GET'
      params?: Models['GET/api/message/findLetterList.json']['Req']
      types: [
        'GET/api/message/findLetterList.json_REQUEST',
        'GET/api/message/findLetterList.json_SUCCESS',
        'GET/api/message/findLetterList.json_FAILURE'
      ]
    }
  }

  'GET/api/message/getLetterDetail.json': (
    params?: Models['GET/api/message/getLetterDetail.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/api/message/getLetterDetail.json'
      url: '/api/message/getLetterDetail.json'
      method: 'GET'
      params?: Models['GET/api/message/getLetterDetail.json']['Req']
      types: [
        'GET/api/message/getLetterDetail.json_REQUEST',
        'GET/api/message/getLetterDetail.json_SUCCESS',
        'GET/api/message/getLetterDetail.json_FAILURE'
      ]
    }
  }

  'POST/api/message/batchReadLetters.json': (
    params?: Models['POST/api/message/batchReadLetters.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'POST/api/message/batchReadLetters.json'
      url: '/api/message/batchReadLetters.json'
      method: 'POST'
      params?: Models['POST/api/message/batchReadLetters.json']['Req']
      types: [
        'POST/api/message/batchReadLetters.json_REQUEST',
        'POST/api/message/batchReadLetters.json_SUCCESS',
        'POST/api/message/batchReadLetters.json_FAILURE'
      ]
    }
  }

  'GET/api/report/consumer/findSummary.json': (
    params?: Models['GET/api/report/consumer/findSummary.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/api/report/consumer/findSummary.json'
      url: '/api/report/consumer/findSummary.json'
      method: 'GET'
      params?: Models['GET/api/report/consumer/findSummary.json']['Req']
      types: [
        'GET/api/report/consumer/findSummary.json_REQUEST',
        'GET/api/report/consumer/findSummary.json_SUCCESS',
        'GET/api/report/consumer/findSummary.json_FAILURE'
      ]
    }
  }

  'GET/api/report/consumer/findConsumerCirculation.json': (
    params?: Models['GET/api/report/consumer/findConsumerCirculation.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/api/report/consumer/findConsumerCirculation.json'
      url: '/api/report/consumer/findConsumerCirculation.json'
      method: 'GET'
      params?: Models['GET/api/report/consumer/findConsumerCirculation.json']['Req']
      types: [
        'GET/api/report/consumer/findConsumerCirculation.json_REQUEST',
        'GET/api/report/consumer/findConsumerCirculation.json_SUCCESS',
        'GET/api/report/consumer/findConsumerCirculation.json_FAILURE'
      ]
    }
  }

  'GET/api/report/fans/findSummary.json': (
    params?: Models['GET/api/report/fans/findSummary.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/api/report/fans/findSummary.json'
      url: '/api/report/fans/findSummary.json'
      method: 'GET'
      params?: Models['GET/api/report/fans/findSummary.json']['Req']
      types: [
        'GET/api/report/fans/findSummary.json_REQUEST',
        'GET/api/report/fans/findSummary.json_SUCCESS',
        'GET/api/report/fans/findSummary.json_FAILURE'
      ]
    }
  }

  'GET/api/report/fans/findCirculation.json': (
    params?: Models['GET/api/report/fans/findCirculation.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/api/report/fans/findCirculation.json'
      url: '/api/report/fans/findCirculation.json'
      method: 'GET'
      params?: Models['GET/api/report/fans/findCirculation.json']['Req']
      types: [
        'GET/api/report/fans/findCirculation.json_REQUEST',
        'GET/api/report/fans/findCirculation.json_SUCCESS',
        'GET/api/report/fans/findCirculation.json_FAILURE'
      ]
    }
  }

  'GET/api/campaign/findTransferPage.json': (
    params?: Models['GET/api/campaign/findTransferPage.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/api/campaign/findTransferPage.json'
      url: '/api/campaign/findTransferPage.json'
      method: 'GET'
      params?: Models['GET/api/campaign/findTransferPage.json']['Req']
      types: [
        'GET/api/campaign/findTransferPage.json_REQUEST',
        'GET/api/campaign/findTransferPage.json_SUCCESS',
        'GET/api/campaign/findTransferPage.json_FAILURE'
      ]
    }
  }

  'POST/api/campaign/transfer.json': (
    params?: Models['POST/api/campaign/transfer.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'POST/api/campaign/transfer.json'
      url: '/api/campaign/transfer.json'
      method: 'POST'
      params?: Models['POST/api/campaign/transfer.json']['Req']
      types: [
        'POST/api/campaign/transfer.json_REQUEST',
        'POST/api/campaign/transfer.json_SUCCESS',
        'POST/api/campaign/transfer.json_FAILURE'
      ]
    }
  }

  'GET/api/activity/report/findDaySum.json': (
    params?: Models['GET/api/activity/report/findDaySum.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/api/activity/report/findDaySum.json'
      url: '/api/activity/report/findDaySum.json'
      method: 'GET'
      params?: Models['GET/api/activity/report/findDaySum.json']['Req']
      types: [
        'GET/api/activity/report/findDaySum.json_REQUEST',
        'GET/api/activity/report/findDaySum.json_SUCCESS',
        'GET/api/activity/report/findDaySum.json_FAILURE'
      ]
    }
  }

  'GET/api/activity/report/findDayList.json': (
    params?: Models['GET/api/activity/report/findDayList.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/api/activity/report/findDayList.json'
      url: '/api/activity/report/findDayList.json'
      method: 'GET'
      params?: Models['GET/api/activity/report/findDayList.json']['Req']
      types: [
        'GET/api/activity/report/findDayList.json_REQUEST',
        'GET/api/activity/report/findDayList.json_SUCCESS',
        'GET/api/activity/report/findDayList.json_FAILURE'
      ]
    }
  }

  'GET/api/activity/report/findCrowdDaySum.json': (
    params?: Models['GET/api/activity/report/findCrowdDaySum.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/api/activity/report/findCrowdDaySum.json'
      url: '/api/activity/report/findCrowdDaySum.json'
      method: 'GET'
      params?: Models['GET/api/activity/report/findCrowdDaySum.json']['Req']
      types: [
        'GET/api/activity/report/findCrowdDaySum.json_REQUEST',
        'GET/api/activity/report/findCrowdDaySum.json_SUCCESS',
        'GET/api/activity/report/findCrowdDaySum.json_FAILURE'
      ]
    }
  }

  'GET/api/activity/report/findCrowdDayList.json': (
    params?: Models['GET/api/activity/report/findCrowdDayList.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/api/activity/report/findCrowdDayList.json'
      url: '/api/activity/report/findCrowdDayList.json'
      method: 'GET'
      params?: Models['GET/api/activity/report/findCrowdDayList.json']['Req']
      types: [
        'GET/api/activity/report/findCrowdDayList.json_REQUEST',
        'GET/api/activity/report/findCrowdDayList.json_SUCCESS',
        'GET/api/activity/report/findCrowdDayList.json_FAILURE'
      ]
    }
  }

  'GET/api/activity/report/findItemPage.json': (
    params?: Models['GET/api/activity/report/findItemPage.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/api/activity/report/findItemPage.json'
      url: '/api/activity/report/findItemPage.json'
      method: 'GET'
      params?: Models['GET/api/activity/report/findItemPage.json']['Req']
      types: [
        'GET/api/activity/report/findItemPage.json_REQUEST',
        'GET/api/activity/report/findItemPage.json_SUCCESS',
        'GET/api/activity/report/findItemPage.json_FAILURE'
      ]
    }
  }

  'GET/api/activity/report/exportDayList.json': (
    params?: Models['GET/api/activity/report/exportDayList.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/api/activity/report/exportDayList.json'
      url: '/api/activity/report/exportDayList.json'
      method: 'GET'
      params?: Models['GET/api/activity/report/exportDayList.json']['Req']
      types: [
        'GET/api/activity/report/exportDayList.json_REQUEST',
        'GET/api/activity/report/exportDayList.json_SUCCESS',
        'GET/api/activity/report/exportDayList.json_FAILURE'
      ]
    }
  }

  'GET/api/activity/report/exportCrowdDayList.json': (
    params?: Models['GET/api/activity/report/exportCrowdDayList.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/api/activity/report/exportCrowdDayList.json'
      url: '/api/activity/report/exportCrowdDayList.json'
      method: 'GET'
      params?: Models['GET/api/activity/report/exportCrowdDayList.json']['Req']
      types: [
        'GET/api/activity/report/exportCrowdDayList.json_REQUEST',
        'GET/api/activity/report/exportCrowdDayList.json_SUCCESS',
        'GET/api/activity/report/exportCrowdDayList.json_FAILURE'
      ]
    }
  }

  'GET/api/activity/report/exportItem.json': (
    params?: Models['GET/api/activity/report/exportItem.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/api/activity/report/exportItem.json'
      url: '/api/activity/report/exportItem.json'
      method: 'GET'
      params?: Models['GET/api/activity/report/exportItem.json']['Req']
      types: [
        'GET/api/activity/report/exportItem.json_REQUEST',
        'GET/api/activity/report/exportItem.json_SUCCESS',
        'GET/api/activity/report/exportItem.json_FAILURE'
      ]
    }
  }

  'GET/map': (
    params?: Models['GET/map']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/map'
      url: '/map'
      method: 'GET'
      params?: Models['GET/map']['Req']
      types: ['GET/map_REQUEST', 'GET/map_SUCCESS', 'GET/map_FAILURE']
    }
  }

  'GET/api/report/case/findCampaignDaySum.json': (
    params?: Models['GET/api/report/case/findCampaignDaySum.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/api/report/case/findCampaignDaySum.json'
      url: '/api/report/case/findCampaignDaySum.json'
      method: 'GET'
      params?: Models['GET/api/report/case/findCampaignDaySum.json']['Req']
      types: [
        'GET/api/report/case/findCampaignDaySum.json_REQUEST',
        'GET/api/report/case/findCampaignDaySum.json_SUCCESS',
        'GET/api/report/case/findCampaignDaySum.json_FAILURE'
      ]
    }
  }

  'GET/api/report/case/findItemSumList.json': (
    params?: Models['GET/api/report/case/findItemSumList.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/api/report/case/findItemSumList.json'
      url: '/api/report/case/findItemSumList.json'
      method: 'GET'
      params?: Models['GET/api/report/case/findItemSumList.json']['Req']
      types: [
        'GET/api/report/case/findItemSumList.json_REQUEST',
        'GET/api/report/case/findItemSumList.json_SUCCESS',
        'GET/api/report/case/findItemSumList.json_FAILURE'
      ]
    }
  }

  'GET/api/report/case/findItemTrendDayList.json': (
    params?: Models['GET/api/report/case/findItemTrendDayList.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/api/report/case/findItemTrendDayList.json'
      url: '/api/report/case/findItemTrendDayList.json'
      method: 'GET'
      params?: Models['GET/api/report/case/findItemTrendDayList.json']['Req']
      types: [
        'GET/api/report/case/findItemTrendDayList.json_REQUEST',
        'GET/api/report/case/findItemTrendDayList.json_SUCCESS',
        'GET/api/report/case/findItemTrendDayList.json_FAILURE'
      ]
    }
  }

  'GET/findList.json': (
    params?: Models['GET/findList.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/findList.json'
      url: 'findList.json'
      method: 'GET'
      params?: Models['GET/findList.json']['Req']
      types: ['GET/findList.json_REQUEST', 'GET/findList.json_SUCCESS', 'GET/findList.json_FAILURE']
    }
  }

  'GET/api/report/case/findFeedShopItemAllListComp.json': (
    params?: Models['GET/api/report/case/findFeedShopItemAllListComp.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/api/report/case/findFeedShopItemAllListComp.json'
      url: '/api/report/case/findFeedShopItemAllListComp.json'
      method: 'GET'
      params?: Models['GET/api/report/case/findFeedShopItemAllListComp.json']['Req']
      types: [
        'GET/api/report/case/findFeedShopItemAllListComp.json_REQUEST',
        'GET/api/report/case/findFeedShopItemAllListComp.json_SUCCESS',
        'GET/api/report/case/findFeedShopItemAllListComp.json_FAILURE'
      ]
    }
  }

  'GET/api/campaign/crowd/findList.json': (
    params?: Models['GET/api/campaign/crowd/findList.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/api/campaign/crowd/findList.json'
      url: '/api/campaign/crowd/findList.json'
      method: 'GET'
      params?: Models['GET/api/campaign/crowd/findList.json']['Req']
      types: [
        'GET/api/campaign/crowd/findList.json_REQUEST',
        'GET/api/campaign/crowd/findList.json_SUCCESS',
        'GET/api/campaign/crowd/findList.json_FAILURE'
      ]
    }
  }

  'PUT/api/campaign/crowd/modify.json': (
    params?: Models['PUT/api/campaign/crowd/modify.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'PUT/api/campaign/crowd/modify.json'
      url: '/api/campaign/crowd/modify.json'
      method: 'PUT'
      params?: Models['PUT/api/campaign/crowd/modify.json']['Req']
      types: [
        'PUT/api/campaign/crowd/modify.json_REQUEST',
        'PUT/api/campaign/crowd/modify.json_SUCCESS',
        'PUT/api/campaign/crowd/modify.json_FAILURE'
      ]
    }
  }

  'POST/api/solution/add.json': (
    params?: Models['POST/api/solution/add.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'POST/api/solution/add.json'
      url: '/api/solution/add.json'
      method: 'POST'
      params?: Models['POST/api/solution/add.json']['Req']
      types: [
        'POST/api/solution/add.json_REQUEST',
        'POST/api/solution/add.json_SUCCESS',
        'POST/api/solution/add.json_FAILURE'
      ]
    }
  }

  'GET/api/material/item/findPage.json': (
    params?: Models['GET/api/material/item/findPage.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/api/material/item/findPage.json'
      url: '/api/material/item/findPage.json'
      method: 'GET'
      params?: Models['GET/api/material/item/findPage.json']['Req']
      types: [
        'GET/api/material/item/findPage.json_REQUEST',
        'GET/api/material/item/findPage.json_SUCCESS',
        'GET/api/material/item/findPage.json_FAILURE'
      ]
    }
  }

  'GET/api/solution/allowPromotion.json': (
    params?: Models['GET/api/solution/allowPromotion.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/api/solution/allowPromotion.json'
      url: '/api/solution/allowPromotion.json'
      method: 'GET'
      params?: Models['GET/api/solution/allowPromotion.json']['Req']
      types: [
        'GET/api/solution/allowPromotion.json_REQUEST',
        'GET/api/solution/allowPromotion.json_SUCCESS',
        'GET/api/solution/allowPromotion.json_FAILURE'
      ]
    }
  }

  'POST/api/solution/batchAdd.json': (
    params?: Models['POST/api/solution/batchAdd.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'POST/api/solution/batchAdd.json'
      url: '/api/solution/batchAdd.json'
      method: 'POST'
      params?: Models['POST/api/solution/batchAdd.json']['Req']
      types: [
        'POST/api/solution/batchAdd.json_REQUEST',
        'POST/api/solution/batchAdd.json_SUCCESS',
        'POST/api/solution/batchAdd.json_FAILURE'
      ]
    }
  }

  'GET/api/target/findLabelList.json': (
    params?: Models['GET/api/target/findLabelList.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/api/target/findLabelList.json'
      url: '/api/target/findLabelList.json'
      method: 'GET'
      params?: Models['GET/api/target/findLabelList.json']['Req']
      types: [
        'GET/api/target/findLabelList.json_REQUEST',
        'GET/api/target/findLabelList.json_SUCCESS',
        'GET/api/target/findLabelList.json_FAILURE'
      ]
    }
  }

  'GET/api/target/findSelectionCategoryList.json': (
    params?: Models['GET/api/target/findSelectionCategoryList.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/api/target/findSelectionCategoryList.json'
      url: '/api/target/findSelectionCategoryList.json'
      method: 'GET'
      params?: Models['GET/api/target/findSelectionCategoryList.json']['Req']
      types: [
        'GET/api/target/findSelectionCategoryList.json_REQUEST',
        'GET/api/target/findSelectionCategoryList.json_SUCCESS',
        'GET/api/target/findSelectionCategoryList.json_FAILURE'
      ]
    }
  }

  'GET/api/account/recharge.action': (
    params?: Models['GET/api/account/recharge.action']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/api/account/recharge.action'
      url: '/api/account/recharge.action'
      method: 'GET'
      params?: Models['GET/api/account/recharge.action']['Req']
      types: [
        'GET/api/account/recharge.action_REQUEST',
        'GET/api/account/recharge.action_SUCCESS',
        'GET/api/account/recharge.action_FAILURE'
      ]
    }
  }

  'GET/api/account/getInfo.json': (
    params?: Models['GET/api/account/getInfo.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/api/account/getInfo.json'
      url: '/api/account/getInfo.json'
      method: 'GET'
      params?: Models['GET/api/account/getInfo.json']['Req']
      types: [
        'GET/api/account/getInfo.json_REQUEST',
        'GET/api/account/getInfo.json_SUCCESS',
        'GET/api/account/getInfo.json_FAILURE'
      ]
    }
  }

  'POST/api/adgroup/batchAdd.json': (
    params?: Models['POST/api/adgroup/batchAdd.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'POST/api/adgroup/batchAdd.json'
      url: '/api/adgroup/batchAdd.json'
      method: 'POST'
      params?: Models['POST/api/adgroup/batchAdd.json']['Req']
      types: [
        'POST/api/adgroup/batchAdd.json_REQUEST',
        'POST/api/adgroup/batchAdd.json_SUCCESS',
        'POST/api/adgroup/batchAdd.json_FAILURE'
      ]
    }
  }

  'POST/api/campaign/estimateContractPv.json': (
    params?: Models['POST/api/campaign/estimateContractPv.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'POST/api/campaign/estimateContractPv.json'
      url: '/api/campaign/estimateContractPv.json'
      method: 'POST'
      params?: Models['POST/api/campaign/estimateContractPv.json']['Req']
      types: [
        'POST/api/campaign/estimateContractPv.json_REQUEST',
        'POST/api/campaign/estimateContractPv.json_SUCCESS',
        'POST/api/campaign/estimateContractPv.json_FAILURE'
      ]
    }
  }

  'POST/api/algotool/lockQuantity.json': (
    params?: Models['POST/api/algotool/lockQuantity.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'POST/api/algotool/lockQuantity.json'
      url: '/api/algotool/lockQuantity.json'
      method: 'POST'
      params?: Models['POST/api/algotool/lockQuantity.json']['Req']
      types: [
        'POST/api/algotool/lockQuantity.json_REQUEST',
        'POST/api/algotool/lockQuantity.json_SUCCESS',
        'POST/api/algotool/lockQuantity.json_FAILURE'
      ]
    }
  }

  'GET/api/crowd/findPage.json': (
    params?: Models['GET/api/crowd/findPage.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/api/crowd/findPage.json'
      url: '/api/crowd/findPage.json'
      method: 'GET'
      params?: Models['GET/api/crowd/findPage.json']['Req']
      types: [
        'GET/api/crowd/findPage.json_REQUEST',
        'GET/api/crowd/findPage.json_SUCCESS',
        'GET/api/crowd/findPage.json_FAILURE'
      ]
    }
  }

  'POST/api/algotool/getBudgetSimulator.json': (
    params?: Models['POST/api/algotool/getBudgetSimulator.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'POST/api/algotool/getBudgetSimulator.json'
      url: '/api/algotool/getBudgetSimulator.json'
      method: 'POST'
      params?: Models['POST/api/algotool/getBudgetSimulator.json']['Req']
      types: [
        'POST/api/algotool/getBudgetSimulator.json_REQUEST',
        'POST/api/algotool/getBudgetSimulator.json_SUCCESS',
        'POST/api/algotool/getBudgetSimulator.json_FAILURE'
      ]
    }
  }

  'POST/api/campaign/add.json': (
    params?: Models['POST/api/campaign/add.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'POST/api/campaign/add.json'
      url: '/api/campaign/add.json'
      method: 'POST'
      params?: Models['POST/api/campaign/add.json']['Req']
      types: [
        'POST/api/campaign/add.json_REQUEST',
        'POST/api/campaign/add.json_SUCCESS',
        'POST/api/campaign/add.json_FAILURE'
      ]
    }
  }

  'GET/api/adgroup/findPage.json': (
    params?: Models['GET/api/adgroup/findPage.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/api/adgroup/findPage.json'
      url: '/api/adgroup/findPage.json'
      method: 'GET'
      params?: Models['GET/api/adgroup/findPage.json']['Req']
      types: [
        'GET/api/adgroup/findPage.json_REQUEST',
        'GET/api/adgroup/findPage.json_SUCCESS',
        'GET/api/adgroup/findPage.json_FAILURE'
      ]
    }
  }

  'PUT/api/campaign/modEntire.json': (
    params?: Models['PUT/api/campaign/modEntire.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'PUT/api/campaign/modEntire.json'
      url: '/api/campaign/modEntire.json'
      method: 'PUT'
      params?: Models['PUT/api/campaign/modEntire.json']['Req']
      types: [
        'PUT/api/campaign/modEntire.json_REQUEST',
        'PUT/api/campaign/modEntire.json_SUCCESS',
        'PUT/api/campaign/modEntire.json_FAILURE'
      ]
    }
  }

  'GET/api/algotool/probeInterest.json': (
    params?: Models['GET/api/algotool/probeInterest.json']['Req']
  ) => {
    type: '$$RAPPER_REQUEST'
    payload: {
      modelName: 'GET/api/algotool/probeInterest.json'
      url: '/api/algotool/probeInterest.json'
      method: 'GET'
      params?: Models['GET/api/algotool/probeInterest.json']['Req']
      types: [
        'GET/api/algotool/probeInterest.json_REQUEST',
        'GET/api/algotool/probeInterest.json_SUCCESS',
        'GET/api/algotool/probeInterest.json_FAILURE'
      ]
    }
  }
}

/** 请求types */
const RequestTypes: RequestTypes = {
  'GET/readme/campaign': ['GET/readme/campaign_REQUEST', 'GET/readme/campaign_SUCCESS', 'GET/readme/campaign_FAILURE'],

  'GET/api/campaign/default.json': [
    'GET/api/campaign/default.json_REQUEST',
    'GET/api/campaign/default.json_SUCCESS',
    'GET/api/campaign/default.json_FAILURE',
  ],

  'GET/api/campaign/get.json': [
    'GET/api/campaign/get.json_REQUEST',
    'GET/api/campaign/get.json_SUCCESS',
    'GET/api/campaign/get.json_FAILURE',
  ],

  'GET/api/campaign/getSettleInfo.json': [
    'GET/api/campaign/getSettleInfo.json_REQUEST',
    'GET/api/campaign/getSettleInfo.json_SUCCESS',
    'GET/api/campaign/getSettleInfo.json_FAILURE',
  ],

  'GET/api/campaign/findList.json': [
    'GET/api/campaign/findList.json_REQUEST',
    'GET/api/campaign/findList.json_SUCCESS',
    'GET/api/campaign/findList.json_FAILURE',
  ],

  'GET/api/campaign/findPage.json': [
    'GET/api/campaign/findPage.json_REQUEST',
    'GET/api/campaign/findPage.json_SUCCESS',
    'GET/api/campaign/findPage.json_FAILURE',
  ],

  'GET/api/campaign/findDraftList.json': [
    'GET/api/campaign/findDraftList.json_REQUEST',
    'GET/api/campaign/findDraftList.json_SUCCESS',
    'GET/api/campaign/findDraftList.json_FAILURE',
  ],

  'DELETE/api/campaign/delete.json': [
    'DELETE/api/campaign/delete.json_REQUEST',
    'DELETE/api/campaign/delete.json_SUCCESS',
    'DELETE/api/campaign/delete.json_FAILURE',
  ],

  'POST/api/campaign/clone.json': [
    'POST/api/campaign/clone.json_REQUEST',
    'POST/api/campaign/clone.json_SUCCESS',
    'POST/api/campaign/clone.json_FAILURE',
  ],

  'PUT/api/campaign/updateCampaignBudgetRemindSetting.json': [
    'PUT/api/campaign/updateCampaignBudgetRemindSetting.json_REQUEST',
    'PUT/api/campaign/updateCampaignBudgetRemindSetting.json_SUCCESS',
    'PUT/api/campaign/updateCampaignBudgetRemindSetting.json_FAILURE',
  ],

  'GET/api/campaign/getCampaignBudgetRemindSetting.json': [
    'GET/api/campaign/getCampaignBudgetRemindSetting.json_REQUEST',
    'GET/api/campaign/getCampaignBudgetRemindSetting.json_SUCCESS',
    'GET/api/campaign/getCampaignBudgetRemindSetting.json_FAILURE',
  ],

  'PUT/api/campaign/batchModify.json': [
    'PUT/api/campaign/batchModify.json_REQUEST',
    'PUT/api/campaign/batchModify.json_SUCCESS',
    'PUT/api/campaign/batchModify.json_FAILURE',
  ],

  'PUT/api/campaign/complete.json': [
    'PUT/api/campaign/complete.json_REQUEST',
    'PUT/api/campaign/complete.json_SUCCESS',
    'PUT/api/campaign/complete.json_FAILURE',
  ],

  'PUT/api/campaign/setTop.json': [
    'PUT/api/campaign/setTop.json_REQUEST',
    'PUT/api/campaign/setTop.json_SUCCESS',
    'PUT/api/campaign/setTop.json_FAILURE',
  ],

  'GET/api/campaign/validCount.json': [
    'GET/api/campaign/validCount.json_REQUEST',
    'GET/api/campaign/validCount.json_SUCCESS',
    'GET/api/campaign/validCount.json_FAILURE',
  ],

  'GET/api/campaign/findDayBudgetSum.json': [
    'GET/api/campaign/findDayBudgetSum.json_REQUEST',
    'GET/api/campaign/findDayBudgetSum.json_SUCCESS',
    'GET/api/campaign/findDayBudgetSum.json_FAILURE',
  ],

  'GET/api/campaign/displayConfig.json': [
    'GET/api/campaign/displayConfig.json_REQUEST',
    'GET/api/campaign/displayConfig.json_SUCCESS',
    'GET/api/campaign/displayConfig.json_FAILURE',
  ],

  'GET/api/campaign/modifyConfig.json': [
    'GET/api/campaign/modifyConfig.json_REQUEST',
    'GET/api/campaign/modifyConfig.json_SUCCESS',
    'GET/api/campaign/modifyConfig.json_FAILURE',
  ],

  'PUT/api/campaign/activity/transfer.json': [
    'PUT/api/campaign/activity/transfer.json_REQUEST',
    'PUT/api/campaign/activity/transfer.json_SUCCESS',
    'PUT/api/campaign/activity/transfer.json_FAILURE',
  ],

  'PUT/api/campaign/transferScene.json': [
    'PUT/api/campaign/transferScene.json_REQUEST',
    'PUT/api/campaign/transferScene.json_SUCCESS',
    'PUT/api/campaign/transferScene.json_FAILURE',
  ],

  'PUT/api/campaign/activity/transferPhase.json': [
    'PUT/api/campaign/activity/transferPhase.json_REQUEST',
    'PUT/api/campaign/activity/transferPhase.json_SUCCESS',
    'PUT/api/campaign/activity/transferPhase.json_FAILURE',
  ],

  'GET/api/target/getRemarketingCoverage.json': [
    'GET/api/target/getRemarketingCoverage.json_REQUEST',
    'GET/api/target/getRemarketingCoverage.json_SUCCESS',
    'GET/api/target/getRemarketingCoverage.json_FAILURE',
  ],

  'POST/api/adgroup/add.json': [
    'POST/api/adgroup/add.json_REQUEST',
    'POST/api/adgroup/add.json_SUCCESS',
    'POST/api/adgroup/add.json_FAILURE',
  ],

  'GET/api/adgroup/default.json': [
    'GET/api/adgroup/default.json_REQUEST',
    'GET/api/adgroup/default.json_SUCCESS',
    'GET/api/adgroup/default.json_FAILURE',
  ],

  'GET/api/adgroup/get.json': [
    'GET/api/adgroup/get.json_REQUEST',
    'GET/api/adgroup/get.json_SUCCESS',
    'GET/api/adgroup/get.json_FAILURE',
  ],

  'GET/api/adgroup/findList.json': [
    'GET/api/adgroup/findList.json_REQUEST',
    'GET/api/adgroup/findList.json_SUCCESS',
    'GET/api/adgroup/findList.json_FAILURE',
  ],

  'DELETE/api/adgroup/batchDelete.json': [
    'DELETE/api/adgroup/batchDelete.json_REQUEST',
    'DELETE/api/adgroup/batchDelete.json_SUCCESS',
    'DELETE/api/adgroup/batchDelete.json_FAILURE',
  ],

  'POST/api/adgroup/clone.json': [
    'POST/api/adgroup/clone.json_REQUEST',
    'POST/api/adgroup/clone.json_SUCCESS',
    'POST/api/adgroup/clone.json_FAILURE',
  ],

  'PUT/api/adgroup/batchModEntire.json': [
    'PUT/api/adgroup/batchModEntire.json_REQUEST',
    'PUT/api/adgroup/batchModEntire.json_SUCCESS',
    'PUT/api/adgroup/batchModEntire.json_FAILURE',
  ],

  'PUT/api/adgroup/batchModifyPart.json': [
    'PUT/api/adgroup/batchModifyPart.json_REQUEST',
    'PUT/api/adgroup/batchModifyPart.json_SUCCESS',
    'PUT/api/adgroup/batchModifyPart.json_FAILURE',
  ],

  'GET/api/adgroup/qualityScore/findList.json': [
    'GET/api/adgroup/qualityScore/findList.json_REQUEST',
    'GET/api/adgroup/qualityScore/findList.json_SUCCESS',
    'GET/api/adgroup/qualityScore/findList.json_FAILURE',
  ],

  'GET/api/adgroup/qualityScore/findHisList.json': [
    'GET/api/adgroup/qualityScore/findHisList.json_REQUEST',
    'GET/api/adgroup/qualityScore/findHisList.json_SUCCESS',
    'GET/api/adgroup/qualityScore/findHisList.json_FAILURE',
  ],

  'PUT/api/adgroup/batchModify.json': [
    'PUT/api/adgroup/batchModify.json_REQUEST',
    'PUT/api/adgroup/batchModify.json_SUCCESS',
    'PUT/api/adgroup/batchModify.json_FAILURE',
  ],

  'GET/api/adgroup/qualityScore/findQueryCondition.json': [
    'GET/api/adgroup/qualityScore/findQueryCondition.json_REQUEST',
    'GET/api/adgroup/qualityScore/findQueryCondition.json_SUCCESS',
    'GET/api/adgroup/qualityScore/findQueryCondition.json_FAILURE',
  ],

  'GET/api/adgroup/findCampaignAndAdgroupList.json': [
    'GET/api/adgroup/findCampaignAndAdgroupList.json_REQUEST',
    'GET/api/adgroup/findCampaignAndAdgroupList.json_SUCCESS',
    'GET/api/adgroup/findCampaignAndAdgroupList.json_FAILURE',
  ],

  'PUT/api/adgroup/useSystemCreative.json': [
    'PUT/api/adgroup/useSystemCreative.json_REQUEST',
    'PUT/api/adgroup/useSystemCreative.json_SUCCESS',
    'PUT/api/adgroup/useSystemCreative.json_FAILURE',
  ],

  'PUT/api/adgroup/batchModifyEntire.json': [
    'PUT/api/adgroup/batchModifyEntire.json_REQUEST',
    'PUT/api/adgroup/batchModifyEntire.json_SUCCESS',
    'PUT/api/adgroup/batchModifyEntire.json_FAILURE',
  ],

  'PUT/api/adgroup/batchModifyPrice.json': [
    'PUT/api/adgroup/batchModifyPrice.json_REQUEST',
    'PUT/api/adgroup/batchModifyPrice.json_SUCCESS',
    'PUT/api/adgroup/batchModifyPrice.json_FAILURE',
  ],

  'POST/api/creative/batchAddAndBind.json': [
    'POST/api/creative/batchAddAndBind.json_REQUEST',
    'POST/api/creative/batchAddAndBind.json_SUCCESS',
    'POST/api/creative/batchAddAndBind.json_FAILURE',
  ],

  'PUT/api/creative/batchUnbind.json': [
    'PUT/api/creative/batchUnbind.json_REQUEST',
    'PUT/api/creative/batchUnbind.json_SUCCESS',
    'PUT/api/creative/batchUnbind.json_FAILURE',
  ],

  'GET/api/creative/recommend.json': [
    'GET/api/creative/recommend.json_REQUEST',
    'GET/api/creative/recommend.json_SUCCESS',
    'GET/api/creative/recommend.json_FAILURE',
  ],

  'GET/api/creative/findPage.json': [
    'GET/api/creative/findPage.json_REQUEST',
    'GET/api/creative/findPage.json_SUCCESS',
    'GET/api/creative/findPage.json_FAILURE',
  ],

  'GET/api/creative/findPunishRecordList.json': [
    'GET/api/creative/findPunishRecordList.json_REQUEST',
    'GET/api/creative/findPunishRecordList.json_SUCCESS',
    'GET/api/creative/findPunishRecordList.json_FAILURE',
  ],

  'GET/api/creative/findQueryCondition.json': [
    'GET/api/creative/findQueryCondition.json_REQUEST',
    'GET/api/creative/findQueryCondition.json_SUCCESS',
    'GET/api/creative/findQueryCondition.json_FAILURE',
  ],

  'GET/api/creativeCenter/gotoCreation.json': [
    'GET/api/creativeCenter/gotoCreation.json_REQUEST',
    'GET/api/creativeCenter/gotoCreation.json_SUCCESS',
    'GET/api/creativeCenter/gotoCreation.json_FAILURE',
  ],

  'GET/api/creative/template/findPackageList.json': [
    'GET/api/creative/template/findPackageList.json_REQUEST',
    'GET/api/creative/template/findPackageList.json_SUCCESS',
    'GET/api/creative/template/findPackageList.json_FAILURE',
  ],

  'GET/api/creativeCenter/gotoTemplateNew.json': [
    'GET/api/creativeCenter/gotoTemplateNew.json_REQUEST',
    'GET/api/creativeCenter/gotoTemplateNew.json_SUCCESS',
    'GET/api/creativeCenter/gotoTemplateNew.json_FAILURE',
  ],

  'GET/api/creativeCenter/getMaterial.json': [
    'GET/api/creativeCenter/getMaterial.json_REQUEST',
    'GET/api/creativeCenter/getMaterial.json_SUCCESS',
    'GET/api/creativeCenter/getMaterial.json_FAILURE',
  ],

  'DELETE/api/creative/delete.json': [
    'DELETE/api/creative/delete.json_REQUEST',
    'DELETE/api/creative/delete.json_SUCCESS',
    'DELETE/api/creative/delete.json_FAILURE',
  ],

  'PUT/api/creative/activity/batchAddTag.json': [
    'PUT/api/creative/activity/batchAddTag.json_REQUEST',
    'PUT/api/creative/activity/batchAddTag.json_SUCCESS',
    'PUT/api/creative/activity/batchAddTag.json_FAILURE',
  ],

  'POST/api/creative/preview.json': [
    'POST/api/creative/preview.json_REQUEST',
    'POST/api/creative/preview.json_SUCCESS',
    'POST/api/creative/preview.json_FAILURE',
  ],

  'GET/api/adzone/findList.json': [
    'GET/api/adzone/findList.json_REQUEST',
    'GET/api/adzone/findList.json_SUCCESS',
    'GET/api/adzone/findList.json_FAILURE',
  ],

  'GET/api/adzone/checkList.json': [
    'GET/api/adzone/checkList.json_REQUEST',
    'GET/api/adzone/checkList.json_SUCCESS',
    'GET/api/adzone/checkList.json_FAILURE',
  ],

  'PUT/api/adzone/unbindList.json': [
    'PUT/api/adzone/unbindList.json_REQUEST',
    'PUT/api/adzone/unbindList.json_SUCCESS',
    'PUT/api/adzone/unbindList.json_FAILURE',
  ],

  'PUT/api/adzone/bindList.json': [
    'PUT/api/adzone/bindList.json_REQUEST',
    'PUT/api/adzone/bindList.json_SUCCESS',
    'PUT/api/adzone/bindList.json_FAILURE',
  ],

  'GET/api/adzone/findPage.json': [
    'GET/api/adzone/findPage.json_REQUEST',
    'GET/api/adzone/findPage.json_SUCCESS',
    'GET/api/adzone/findPage.json_FAILURE',
  ],

  'PUT/api/adzone/batchModify.json': [
    'PUT/api/adzone/batchModify.json_REQUEST',
    'PUT/api/adzone/batchModify.json_SUCCESS',
    'PUT/api/adzone/batchModify.json_FAILURE',
  ],

  'GET/api/material/findPage.json': [
    'GET/api/material/findPage.json_REQUEST',
    'GET/api/material/findPage.json_SUCCESS',
    'GET/api/material/findPage.json_FAILURE',
  ],

  'GET/api/material/recommend.json': [
    'GET/api/material/recommend.json_REQUEST',
    'GET/api/material/recommend.json_SUCCESS',
    'GET/api/material/recommend.json_FAILURE',
  ],

  'GET/api/material/findQueryCondition.json': [
    'GET/api/material/findQueryCondition.json_REQUEST',
    'GET/api/material/findQueryCondition.json_SUCCESS',
    'GET/api/material/findQueryCondition.json_FAILURE',
  ],

  'GET/api/material/item/findQueryCondition.json': [
    'GET/api/material/item/findQueryCondition.json_REQUEST',
    'GET/api/material/item/findQueryCondition.json_SUCCESS',
    'GET/api/material/item/findQueryCondition.json_FAILURE',
  ],

  'GET/api/coupon/findQueryCondition.json': [
    'GET/api/coupon/findQueryCondition.json_REQUEST',
    'GET/api/coupon/findQueryCondition.json_SUCCESS',
    'GET/api/coupon/findQueryCondition.json_FAILURE',
  ],

  'GET/api/material/findPunishRecordList.json': [
    'GET/api/material/findPunishRecordList.json_REQUEST',
    'GET/api/material/findPunishRecordList.json_SUCCESS',
    'GET/api/material/findPunishRecordList.json_FAILURE',
  ],

  'GET/api/material/accessAllowed.json': [
    'GET/api/material/accessAllowed.json_REQUEST',
    'GET/api/material/accessAllowed.json_SUCCESS',
    'GET/api/material/accessAllowed.json_FAILURE',
  ],

  'GET/api/material/item/accessAllowed.json': [
    'GET/api/material/item/accessAllowed.json_REQUEST',
    'GET/api/material/item/accessAllowed.json_SUCCESS',
    'GET/api/material/item/accessAllowed.json_FAILURE',
  ],

  'GET/api/coupon/findList.json': [
    'GET/api/coupon/findList.json_REQUEST',
    'GET/api/coupon/findList.json_SUCCESS',
    'GET/api/coupon/findList.json_FAILURE',
  ],

  'GET/api/coupon/findPage.json': [
    'GET/api/coupon/findPage.json_REQUEST',
    'GET/api/coupon/findPage.json_SUCCESS',
    'GET/api/coupon/findPage.json_FAILURE',
  ],

  'GET/api/coupon/recommend.json': [
    'GET/api/coupon/recommend.json_REQUEST',
    'GET/api/coupon/recommend.json_SUCCESS',
    'GET/api/coupon/recommend.json_FAILURE',
  ],

  'GET/api/material/batchAccessAllowed.json': [
    'GET/api/material/batchAccessAllowed.json_REQUEST',
    'GET/api/material/batchAccessAllowed.json_SUCCESS',
    'GET/api/material/batchAccessAllowed.json_FAILURE',
  ],

  'PUT/api/crowd/modifyByType.json': [
    'PUT/api/crowd/modifyByType.json_REQUEST',
    'PUT/api/crowd/modifyByType.json_SUCCESS',
    'PUT/api/crowd/modifyByType.json_FAILURE',
  ],

  'DELETE/api/crowd/delete.json': [
    'DELETE/api/crowd/delete.json_REQUEST',
    'DELETE/api/crowd/delete.json_SUCCESS',
    'DELETE/api/crowd/delete.json_FAILURE',
  ],

  'GET/api/crowd/findList.json': [
    'GET/api/crowd/findList.json_REQUEST',
    'GET/api/crowd/findList.json_SUCCESS',
    'GET/api/crowd/findList.json_FAILURE',
  ],

  'GET/api/target/findSuggest.json': [
    'GET/api/target/findSuggest.json_REQUEST',
    'GET/api/target/findSuggest.json_SUCCESS',
    'GET/api/target/findSuggest.json_FAILURE',
  ],

  'POST/api/crowd/getSuggestPrice.json': [
    'POST/api/crowd/getSuggestPrice.json_REQUEST',
    'POST/api/crowd/getSuggestPrice.json_SUCCESS',
    'POST/api/crowd/getSuggestPrice.json_FAILURE',
  ],

  'POST/api/algotool/getPredictedPvUv.json': [
    'POST/api/algotool/getPredictedPvUv.json_REQUEST',
    'POST/api/algotool/getPredictedPvUv.json_SUCCESS',
    'POST/api/algotool/getPredictedPvUv.json_FAILURE',
  ],

  'GET/api/target/findList.json': [
    'GET/api/target/findList.json_REQUEST',
    'GET/api/target/findList.json_SUCCESS',
    'GET/api/target/findList.json_FAILURE',
  ],

  'GET/api/target/findCategoryList.json': [
    'GET/api/target/findCategoryList.json_REQUEST',
    'GET/api/target/findCategoryList.json_SUCCESS',
    'GET/api/target/findCategoryList.json_FAILURE',
  ],

  'GET/api/target/findLabelPage.json': [
    'GET/api/target/findLabelPage.json_REQUEST',
    'GET/api/target/findLabelPage.json_SUCCESS',
    'GET/api/target/findLabelPage.json_FAILURE',
  ],

  'GET/api/target/findTargetTypeCondition.json': [
    'GET/api/target/findTargetTypeCondition.json_REQUEST',
    'GET/api/target/findTargetTypeCondition.json_SUCCESS',
    'GET/api/target/findTargetTypeCondition.json_FAILURE',
  ],

  'GET/api/target/getKeywordShopUv.json': [
    'GET/api/target/getKeywordShopUv.json_REQUEST',
    'GET/api/target/getKeywordShopUv.json_SUCCESS',
    'GET/api/target/getKeywordShopUv.json_FAILURE',
  ],

  'GET/api/target/findShopTargetQueryCondition.json': [
    'GET/api/target/findShopTargetQueryCondition.json_REQUEST',
    'GET/api/target/findShopTargetQueryCondition.json_SUCCESS',
    'GET/api/target/findShopTargetQueryCondition.json_FAILURE',
  ],

  'GET/api/algotool/findManualBidSuggestPrice.json': [
    'GET/api/algotool/findManualBidSuggestPrice.json_REQUEST',
    'GET/api/algotool/findManualBidSuggestPrice.json_SUCCESS',
    'GET/api/algotool/findManualBidSuggestPrice.json_FAILURE',
  ],

  'POST/api/crowd/batchModify.json': [
    'POST/api/crowd/batchModify.json_REQUEST',
    'POST/api/crowd/batchModify.json_SUCCESS',
    'POST/api/crowd/batchModify.json_FAILURE',
  ],

  'GET/api/crowd/findSimulatorPointList.json': [
    'GET/api/crowd/findSimulatorPointList.json_REQUEST',
    'GET/api/crowd/findSimulatorPointList.json_SUCCESS',
    'GET/api/crowd/findSimulatorPointList.json_FAILURE',
  ],

  'POST/api/adzone/getSuggestDiscount.json': [
    'POST/api/adzone/getSuggestDiscount.json_REQUEST',
    'POST/api/adzone/getSuggestDiscount.json_SUCCESS',
    'POST/api/adzone/getSuggestDiscount.json_FAILURE',
  ],

  'POST/api/target/findSonkeywordList.json': [
    'POST/api/target/findSonkeywordList.json_REQUEST',
    'POST/api/target/findSonkeywordList.json_SUCCESS',
    'POST/api/target/findSonkeywordList.json_FAILURE',
  ],

  'GET/api/target/findRecommendList.json': [
    'GET/api/target/findRecommendList.json_REQUEST',
    'GET/api/target/findRecommendList.json_SUCCESS',
    'GET/api/target/findRecommendList.json_FAILURE',
  ],

  'GET/api/target/findRecommendPage.json': [
    'GET/api/target/findRecommendPage.json_REQUEST',
    'GET/api/target/findRecommendPage.json_SUCCESS',
    'GET/api/target/findRecommendPage.json_FAILURE',
  ],

  'PUT/api/target/addTargetLabel.json': [
    'PUT/api/target/addTargetLabel.json_REQUEST',
    'PUT/api/target/addTargetLabel.json_SUCCESS',
    'PUT/api/target/addTargetLabel.json_FAILURE',
  ],

  'POST/api/member/updateConfig.json': [
    'POST/api/member/updateConfig.json_REQUEST',
    'POST/api/member/updateConfig.json_SUCCESS',
    'POST/api/member/updateConfig.json_FAILURE',
  ],

  'GET/api/member/logout.action': [
    'GET/api/member/logout.action_REQUEST',
    'GET/api/member/logout.action_SUCCESS',
    'GET/api/member/logout.action_FAILURE',
  ],

  'GET/api/member/adminLogin.action': [
    'GET/api/member/adminLogin.action_REQUEST',
    'GET/api/member/adminLogin.action_SUCCESS',
    'GET/api/member/adminLogin.action_FAILURE',
  ],

  'POST/api/member/signProtocol.json': [
    'POST/api/member/signProtocol.json_REQUEST',
    'POST/api/member/signProtocol.json_SUCCESS',
    'POST/api/member/signProtocol.json_FAILURE',
  ],

  'GET/api/member/getInfo.json': [
    'GET/api/member/getInfo.json_REQUEST',
    'GET/api/member/getInfo.json_SUCCESS',
    'GET/api/member/getInfo.json_FAILURE',
  ],

  'POST/api/member/addContacts.json': [
    'POST/api/member/addContacts.json_REQUEST',
    'POST/api/member/addContacts.json_SUCCESS',
    'POST/api/member/addContacts.json_FAILURE',
  ],

  'GET/api/member/getQualificationBrandAccess.json': [
    'GET/api/member/getQualificationBrandAccess.json_REQUEST',
    'GET/api/member/getQualificationBrandAccess.json_SUCCESS',
    'GET/api/member/getQualificationBrandAccess.json_FAILURE',
  ],

  'GET/api/member/checkContactsName.json': [
    'GET/api/member/checkContactsName.json_REQUEST',
    'GET/api/member/checkContactsName.json_SUCCESS',
    'GET/api/member/checkContactsName.json_FAILURE',
  ],

  'GET/api/member/findContactsList.json': [
    'GET/api/member/findContactsList.json_REQUEST',
    'GET/api/member/findContactsList.json_SUCCESS',
    'GET/api/member/findContactsList.json_FAILURE',
  ],

  'GET/api/member/getPunishStatus.json': [
    'GET/api/member/getPunishStatus.json_REQUEST',
    'GET/api/member/getPunishStatus.json_SUCCESS',
    'GET/api/member/getPunishStatus.json_FAILURE',
  ],

  'GET/api/member/findPunishRecordList.json': [
    'GET/api/member/findPunishRecordList.json_REQUEST',
    'GET/api/member/findPunishRecordList.json_SUCCESS',
    'GET/api/member/findPunishRecordList.json_FAILURE',
  ],

  'GET/api/member/findQualificationPunishRecordList.json': [
    'GET/api/member/findQualificationPunishRecordList.json_REQUEST',
    'GET/api/member/findQualificationPunishRecordList.json_SUCCESS',
    'GET/api/member/findQualificationPunishRecordList.json_FAILURE',
  ],

  'GET/api/member/isProtocolSigned.json': [
    'GET/api/member/isProtocolSigned.json_REQUEST',
    'GET/api/member/isProtocolSigned.json_SUCCESS',
    'GET/api/member/isProtocolSigned.json_FAILURE',
  ],

  'POST/api/member/joinBusinessPlatform.json': [
    'POST/api/member/joinBusinessPlatform.json_REQUEST',
    'POST/api/member/joinBusinessPlatform.json_SUCCESS',
    'POST/api/member/joinBusinessPlatform.json_FAILURE',
  ],

  'GET/TODO': ['GET/TODO_REQUEST', 'GET/TODO_SUCCESS', 'GET/TODO_FAILURE'],

  'GET/api/member/findDiagnoseList.json': [
    'GET/api/member/findDiagnoseList.json_REQUEST',
    'GET/api/member/findDiagnoseList.json_SUCCESS',
    'GET/api/member/findDiagnoseList.json_FAILURE',
  ],

  'GET/https://mo.m.taobao.com/feeds/': [
    'GET/https://mo.m.taobao.com/feeds/_REQUEST',
    'GET/https://mo.m.taobao.com/feeds/_SUCCESS',
    'GET/https://mo.m.taobao.com/feeds/_FAILURE',
  ],

  'GET/https://mo.m.taobao.com/one-stop/': [
    'GET/https://mo.m.taobao.com/one-stop/_REQUEST',
    'GET/https://mo.m.taobao.com/one-stop/_SUCCESS',
    'GET/https://mo.m.taobao.com/one-stop/_FAILURE',
  ],

  'GET/api/member/invitation/url.json': [
    'GET/api/member/invitation/url.json_REQUEST',
    'GET/api/member/invitation/url.json_SUCCESS',
    'GET/api/member/invitation/url.json_FAILURE',
  ],

  'GET/api/member/stage.json': [
    'GET/api/member/stage.json_REQUEST',
    'GET/api/member/stage.json_SUCCESS',
    'GET/api/member/stage.json_FAILURE',
  ],

  'GET/api/member/activity.json': [
    'GET/api/member/activity.json_REQUEST',
    'GET/api/member/activity.json_SUCCESS',
    'GET/api/member/activity.json_FAILURE',
  ],

  'GET/api/member/activity/itemGuide.json': [
    'GET/api/member/activity/itemGuide.json_REQUEST',
    'GET/api/member/activity/itemGuide.json_SUCCESS',
    'GET/api/member/activity/itemGuide.json_FAILURE',
  ],

  'GET/api/member/transfer.json': [
    'GET/api/member/transfer.json_REQUEST',
    'GET/api/member/transfer.json_SUCCESS',
    'GET/api/member/transfer.json_FAILURE',
  ],

  'GET/api/member/newGuestTask.json': [
    'GET/api/member/newGuestTask.json_REQUEST',
    'GET/api/member/newGuestTask.json_SUCCESS',
    'GET/api/member/newGuestTask.json_FAILURE',
  ],

  'GET/api/account/getAcctBalanceRemindSettingAutoRecharge.json': [
    'GET/api/account/getAcctBalanceRemindSettingAutoRecharge.json_REQUEST',
    'GET/api/account/getAcctBalanceRemindSettingAutoRecharge.json_SUCCESS',
    'GET/api/account/getAcctBalanceRemindSettingAutoRecharge.json_FAILURE',
  ],

  'GET/api/account/getSignInfo.json': [
    'GET/api/account/getSignInfo.json_REQUEST',
    'GET/api/account/getSignInfo.json_SUCCESS',
    'GET/api/account/getSignInfo.json_FAILURE',
  ],

  'PUT/api/account/modifyAcctBalanceRemindSettingAutoRecharge.json': [
    'PUT/api/account/modifyAcctBalanceRemindSettingAutoRecharge.json_REQUEST',
    'PUT/api/account/modifyAcctBalanceRemindSettingAutoRecharge.json_SUCCESS',
    'PUT/api/account/modifyAcctBalanceRemindSettingAutoRecharge.json_FAILURE',
  ],

  'PUT/api/account/unsignAutoRecharge.json': [
    'PUT/api/account/unsignAutoRecharge.json_REQUEST',
    'PUT/api/account/unsignAutoRecharge.json_SUCCESS',
    'PUT/api/account/unsignAutoRecharge.json_FAILURE',
  ],

  'GET/api/account/findItemList.json': [
    'GET/api/account/findItemList.json_REQUEST',
    'GET/api/account/findItemList.json_SUCCESS',
    'GET/api/account/findItemList.json_FAILURE',
  ],

  'GET/api/account/exportItemList.action': [
    'GET/api/account/exportItemList.action_REQUEST',
    'GET/api/account/exportItemList.action_SUCCESS',
    'GET/api/account/exportItemList.action_FAILURE',
  ],

  'GET/和钻展保持一致': ['GET/和钻展保持一致_REQUEST', 'GET/和钻展保持一致_SUCCESS', 'GET/和钻展保持一致_FAILURE'],

  'GET/api/account/findMessageRemindList.json': [
    'GET/api/account/findMessageRemindList.json_REQUEST',
    'GET/api/account/findMessageRemindList.json_SUCCESS',
    'GET/api/account/findMessageRemindList.json_FAILURE',
  ],

  'POST/api/account/modifyAllMessageRemindList.json': [
    'POST/api/account/modifyAllMessageRemindList.json_REQUEST',
    'POST/api/account/modifyAllMessageRemindList.json_SUCCESS',
    'POST/api/account/modifyAllMessageRemindList.json_FAILURE',
  ],

  'GET/api/account/getRefundList.json': [
    'GET/api/account/getRefundList.json_REQUEST',
    'GET/api/account/getRefundList.json_SUCCESS',
    'GET/api/account/getRefundList.json_FAILURE',
  ],

  'POST/api/account/createRefund.json': [
    'POST/api/account/createRefund.json_REQUEST',
    'POST/api/account/createRefund.json_SUCCESS',
    'POST/api/account/createRefund.json_FAILURE',
  ],

  'GET/api/account/checkRefund.json': [
    'GET/api/account/checkRefund.json_REQUEST',
    'GET/api/account/checkRefund.json_SUCCESS',
    'GET/api/account/checkRefund.json_FAILURE',
  ],

  'GET/api/account/isSignGlobalAlipay.json': [
    'GET/api/account/isSignGlobalAlipay.json_REQUEST',
    'GET/api/account/isSignGlobalAlipay.json_SUCCESS',
    'GET/api/account/isSignGlobalAlipay.json_FAILURE',
  ],

  'GET/api/account/charge.json': [
    'GET/api/account/charge.json_REQUEST',
    'GET/api/account/charge.json_SUCCESS',
    'GET/api/account/charge.json_FAILURE',
  ],

  'GET/api/log/findOperationLog.json': [
    'GET/api/log/findOperationLog.json_REQUEST',
    'GET/api/log/findOperationLog.json_SUCCESS',
    'GET/api/log/findOperationLog.json_FAILURE',
  ],

  'GET/api/log/findAdgroupByName.json': [
    'GET/api/log/findAdgroupByName.json_REQUEST',
    'GET/api/log/findAdgroupByName.json_SUCCESS',
    'GET/api/log/findAdgroupByName.json_FAILURE',
  ],

  'GET/api/log/findCampaignByName.json': [
    'GET/api/log/findCampaignByName.json_REQUEST',
    'GET/api/log/findCampaignByName.json_SUCCESS',
    'GET/api/log/findCampaignByName.json_FAILURE',
  ],

  'GET/api/account/findAccumulateDeduct.json': [
    'GET/api/account/findAccumulateDeduct.json_REQUEST',
    'GET/api/account/findAccumulateDeduct.json_SUCCESS',
    'GET/api/account/findAccumulateDeduct.json_FAILURE',
  ],

  'GET/api/message/sendMobileCode.json': [
    'GET/api/message/sendMobileCode.json_REQUEST',
    'GET/api/message/sendMobileCode.json_SUCCESS',
    'GET/api/message/sendMobileCode.json_FAILURE',
  ],

  'POST/api/message/verifyMobilePhoneCode.json': [
    'POST/api/message/verifyMobilePhoneCode.json_REQUEST',
    'POST/api/message/verifyMobilePhoneCode.json_SUCCESS',
    'POST/api/message/verifyMobilePhoneCode.json_FAILURE',
  ],

  'GET/api/common/findCodeList.json': [
    'GET/api/common/findCodeList.json_REQUEST',
    'GET/api/common/findCodeList.json_SUCCESS',
    'GET/api/common/findCodeList.json_FAILURE',
  ],

  'GET/api/common/getVersion.json': [
    'GET/api/common/getVersion.json_REQUEST',
    'GET/api/common/getVersion.json_SUCCESS',
    'GET/api/common/getVersion.json_FAILURE',
  ],

  'GET/api/component/findComponentMetaList.json': [
    'GET/api/component/findComponentMetaList.json_REQUEST',
    'GET/api/component/findComponentMetaList.json_SUCCESS',
    'GET/api/component/findComponentMetaList.json_FAILURE',
  ],

  'GET/api/component/findMemberTemplateList.json': [
    'GET/api/component/findMemberTemplateList.json_REQUEST',
    'GET/api/component/findMemberTemplateList.json_SUCCESS',
    'GET/api/component/findMemberTemplateList.json_FAILURE',
  ],

  'POST/api/component/addMemberTemplate.json': [
    'POST/api/component/addMemberTemplate.json_REQUEST',
    'POST/api/component/addMemberTemplate.json_SUCCESS',
    'POST/api/component/addMemberTemplate.json_FAILURE',
  ],

  'PUT/api/component/updateMemberTemplate.json': [
    'PUT/api/component/updateMemberTemplate.json_REQUEST',
    'PUT/api/component/updateMemberTemplate.json_SUCCESS',
    'PUT/api/component/updateMemberTemplate.json_FAILURE',
  ],

  'DELETE/api/component/deleteMemberTemplate.json': [
    'DELETE/api/component/deleteMemberTemplate.json_REQUEST',
    'DELETE/api/component/deleteMemberTemplate.json_SUCCESS',
    'DELETE/api/component/deleteMemberTemplate.json_FAILURE',
  ],

  'GET/api/component/findMenuList.json': [
    'GET/api/component/findMenuList.json_REQUEST',
    'GET/api/component/findMenuList.json_SUCCESS',
    'GET/api/component/findMenuList.json_FAILURE',
  ],

  'GET/api/component/findComponentList.json': [
    'GET/api/component/findComponentList.json_REQUEST',
    'GET/api/component/findComponentList.json_SUCCESS',
    'GET/api/component/findComponentList.json_FAILURE',
  ],

  'GET/api/account/report/findHourSum.json': [
    'GET/api/account/report/findHourSum.json_REQUEST',
    'GET/api/account/report/findHourSum.json_SUCCESS',
    'GET/api/account/report/findHourSum.json_FAILURE',
  ],

  'GET/api/account/report/findHourList.json': [
    'GET/api/account/report/findHourList.json_REQUEST',
    'GET/api/account/report/findHourList.json_SUCCESS',
    'GET/api/account/report/findHourList.json_FAILURE',
  ],

  'GET/api/account/report/findDaySum.json': [
    'GET/api/account/report/findDaySum.json_REQUEST',
    'GET/api/account/report/findDaySum.json_SUCCESS',
    'GET/api/account/report/findDaySum.json_FAILURE',
  ],

  'GET/api/account/report/findDayList.json': [
    'GET/api/account/report/findDayList.json_REQUEST',
    'GET/api/account/report/findDayList.json_SUCCESS',
    'GET/api/account/report/findDayList.json_FAILURE',
  ],

  'GET/api/campaign/report/findPage.json': [
    'GET/api/campaign/report/findPage.json_REQUEST',
    'GET/api/campaign/report/findPage.json_SUCCESS',
    'GET/api/campaign/report/findPage.json_FAILURE',
  ],

  'GET/api/campaign/report/findList.json': [
    'GET/api/campaign/report/findList.json_REQUEST',
    'GET/api/campaign/report/findList.json_SUCCESS',
    'GET/api/campaign/report/findList.json_FAILURE',
  ],

  'GET/api/campaign/report/findSum.json': [
    'GET/api/campaign/report/findSum.json_REQUEST',
    'GET/api/campaign/report/findSum.json_SUCCESS',
    'GET/api/campaign/report/findSum.json_FAILURE',
  ],

  'GET/api/adgroup/report/findPage.json': [
    'GET/api/adgroup/report/findPage.json_REQUEST',
    'GET/api/adgroup/report/findPage.json_SUCCESS',
    'GET/api/adgroup/report/findPage.json_FAILURE',
  ],

  'GET/api/adgroup/report/findList.json': [
    'GET/api/adgroup/report/findList.json_REQUEST',
    'GET/api/adgroup/report/findList.json_SUCCESS',
    'GET/api/adgroup/report/findList.json_FAILURE',
  ],

  'GET/api/adgroup/report/findSum.json': [
    'GET/api/adgroup/report/findSum.json_REQUEST',
    'GET/api/adgroup/report/findSum.json_SUCCESS',
    'GET/api/adgroup/report/findSum.json_FAILURE',
  ],

  'GET/api/creative/report/findPage.json': [
    'GET/api/creative/report/findPage.json_REQUEST',
    'GET/api/creative/report/findPage.json_SUCCESS',
    'GET/api/creative/report/findPage.json_FAILURE',
  ],

  'GET/api/creative/report/findList.json': [
    'GET/api/creative/report/findList.json_REQUEST',
    'GET/api/creative/report/findList.json_SUCCESS',
    'GET/api/creative/report/findList.json_FAILURE',
  ],

  'GET/api/creative/report/findSum.json': [
    'GET/api/creative/report/findSum.json_REQUEST',
    'GET/api/creative/report/findSum.json_SUCCESS',
    'GET/api/creative/report/findSum.json_FAILURE',
  ],

  'GET/api/crowd/report/findPage.json': [
    'GET/api/crowd/report/findPage.json_REQUEST',
    'GET/api/crowd/report/findPage.json_SUCCESS',
    'GET/api/crowd/report/findPage.json_FAILURE',
  ],

  'GET/api/crowd/report/findList.json': [
    'GET/api/crowd/report/findList.json_REQUEST',
    'GET/api/crowd/report/findList.json_SUCCESS',
    'GET/api/crowd/report/findList.json_FAILURE',
  ],

  'GET/api/crowd/report/findSum.json': [
    'GET/api/crowd/report/findSum.json_REQUEST',
    'GET/api/crowd/report/findSum.json_SUCCESS',
    'GET/api/crowd/report/findSum.json_FAILURE',
  ],

  'GET/api/adzone/report/findPage.json': [
    'GET/api/adzone/report/findPage.json_REQUEST',
    'GET/api/adzone/report/findPage.json_SUCCESS',
    'GET/api/adzone/report/findPage.json_FAILURE',
  ],

  'GET/api/adzone/report/findList.json': [
    'GET/api/adzone/report/findList.json_REQUEST',
    'GET/api/adzone/report/findList.json_SUCCESS',
    'GET/api/adzone/report/findList.json_FAILURE',
  ],

  'GET/api/adzone/report/findSum.json': [
    'GET/api/adzone/report/findSum.json_REQUEST',
    'GET/api/adzone/report/findSum.json_SUCCESS',
    'GET/api/adzone/report/findSum.json_FAILURE',
  ],

  'GET/api/account/report/findCrowdDaySum.json': [
    'GET/api/account/report/findCrowdDaySum.json_REQUEST',
    'GET/api/account/report/findCrowdDaySum.json_SUCCESS',
    'GET/api/account/report/findCrowdDaySum.json_FAILURE',
  ],

  'GET/api/account/report/findCrowdDayList.json': [
    'GET/api/account/report/findCrowdDayList.json_REQUEST',
    'GET/api/account/report/findCrowdDayList.json_SUCCESS',
    'GET/api/account/report/findCrowdDayList.json_FAILURE',
  ],

  'GET/api/material/report/findItemPage.json': [
    'GET/api/material/report/findItemPage.json_REQUEST',
    'GET/api/material/report/findItemPage.json_SUCCESS',
    'GET/api/material/report/findItemPage.json_FAILURE',
  ],

  'GET/api/activity/report/consumerReach.json': [
    'GET/api/activity/report/consumerReach.json_REQUEST',
    'GET/api/activity/report/consumerReach.json_SUCCESS',
    'GET/api/activity/report/consumerReach.json_FAILURE',
  ],

  'GET/api/account/report/exportHourList.json': [
    'GET/api/account/report/exportHourList.json_REQUEST',
    'GET/api/account/report/exportHourList.json_SUCCESS',
    'GET/api/account/report/exportHourList.json_FAILURE',
  ],

  'GET/api/account/report/exportDayList.json': [
    'GET/api/account/report/exportDayList.json_REQUEST',
    'GET/api/account/report/exportDayList.json_SUCCESS',
    'GET/api/account/report/exportDayList.json_FAILURE',
  ],

  'GET/api/campaign/report/exportCampaign.json': [
    'GET/api/campaign/report/exportCampaign.json_REQUEST',
    'GET/api/campaign/report/exportCampaign.json_SUCCESS',
    'GET/api/campaign/report/exportCampaign.json_FAILURE',
  ],

  'GET/api/campaign/report/exportDayOrHourList.json': [
    'GET/api/campaign/report/exportDayOrHourList.json_REQUEST',
    'GET/api/campaign/report/exportDayOrHourList.json_SUCCESS',
    'GET/api/campaign/report/exportDayOrHourList.json_FAILURE',
  ],

  'GET/api/campaign/report/exportDayOrHourSum.json': [
    'GET/api/campaign/report/exportDayOrHourSum.json_REQUEST',
    'GET/api/campaign/report/exportDayOrHourSum.json_SUCCESS',
    'GET/api/campaign/report/exportDayOrHourSum.json_FAILURE',
  ],

  'GET/api/adgroup/report/exportAdgroup.json': [
    'GET/api/adgroup/report/exportAdgroup.json_REQUEST',
    'GET/api/adgroup/report/exportAdgroup.json_SUCCESS',
    'GET/api/adgroup/report/exportAdgroup.json_FAILURE',
  ],

  'GET/api/adgroup/report/exportDayOrHourList.json': [
    'GET/api/adgroup/report/exportDayOrHourList.json_REQUEST',
    'GET/api/adgroup/report/exportDayOrHourList.json_SUCCESS',
    'GET/api/adgroup/report/exportDayOrHourList.json_FAILURE',
  ],

  'GET/api/adgroup/report/exportDayOrHourSum.json': [
    'GET/api/adgroup/report/exportDayOrHourSum.json_REQUEST',
    'GET/api/adgroup/report/exportDayOrHourSum.json_SUCCESS',
    'GET/api/adgroup/report/exportDayOrHourSum.json_FAILURE',
  ],

  'GET/api/creative/report/exportCreative.json': [
    'GET/api/creative/report/exportCreative.json_REQUEST',
    'GET/api/creative/report/exportCreative.json_SUCCESS',
    'GET/api/creative/report/exportCreative.json_FAILURE',
  ],

  'GET/api/creative/report/exportDayOrHourList.json': [
    'GET/api/creative/report/exportDayOrHourList.json_REQUEST',
    'GET/api/creative/report/exportDayOrHourList.json_SUCCESS',
    'GET/api/creative/report/exportDayOrHourList.json_FAILURE',
  ],

  'GET/api/creative/report/exportDayOrHourSum.json': [
    'GET/api/creative/report/exportDayOrHourSum.json_REQUEST',
    'GET/api/creative/report/exportDayOrHourSum.json_SUCCESS',
    'GET/api/creative/report/exportDayOrHourSum.json_FAILURE',
  ],

  'GET/api/crowd/report/exportCrowd.json': [
    'GET/api/crowd/report/exportCrowd.json_REQUEST',
    'GET/api/crowd/report/exportCrowd.json_SUCCESS',
    'GET/api/crowd/report/exportCrowd.json_FAILURE',
  ],

  'GET/api/crowd/report/exportDayOrHourList.json': [
    'GET/api/crowd/report/exportDayOrHourList.json_REQUEST',
    'GET/api/crowd/report/exportDayOrHourList.json_SUCCESS',
    'GET/api/crowd/report/exportDayOrHourList.json_FAILURE',
  ],

  'GET/api/crowd/report/exportDayOrHourSum.json': [
    'GET/api/crowd/report/exportDayOrHourSum.json_REQUEST',
    'GET/api/crowd/report/exportDayOrHourSum.json_SUCCESS',
    'GET/api/crowd/report/exportDayOrHourSum.json_FAILURE',
  ],

  'GET/api/adzone/report/exportAdzone.json': [
    'GET/api/adzone/report/exportAdzone.json_REQUEST',
    'GET/api/adzone/report/exportAdzone.json_SUCCESS',
    'GET/api/adzone/report/exportAdzone.json_FAILURE',
  ],

  'GET/api/adzone/report/exportDayOrHourList.json': [
    'GET/api/adzone/report/exportDayOrHourList.json_REQUEST',
    'GET/api/adzone/report/exportDayOrHourList.json_SUCCESS',
    'GET/api/adzone/report/exportDayOrHourList.json_FAILURE',
  ],

  'GET/api/adzone/report/exportDayOrHourSum.json': [
    'GET/api/adzone/report/exportDayOrHourSum.json_REQUEST',
    'GET/api/adzone/report/exportDayOrHourSum.json_SUCCESS',
    'GET/api/adzone/report/exportDayOrHourSum.json_FAILURE',
  ],

  'GET/api/material/report/exportItem.json': [
    'GET/api/material/report/exportItem.json_REQUEST',
    'GET/api/material/report/exportItem.json_SUCCESS',
    'GET/api/material/report/exportItem.json_FAILURE',
  ],

  'GET/api/account/report/exportCrowdDayList.json': [
    'GET/api/account/report/exportCrowdDayList.json_REQUEST',
    'GET/api/account/report/exportCrowdDayList.json_SUCCESS',
    'GET/api/account/report/exportCrowdDayList.json_FAILURE',
  ],

  'GET/api/message/findLetterList.json': [
    'GET/api/message/findLetterList.json_REQUEST',
    'GET/api/message/findLetterList.json_SUCCESS',
    'GET/api/message/findLetterList.json_FAILURE',
  ],

  'GET/api/message/getLetterDetail.json': [
    'GET/api/message/getLetterDetail.json_REQUEST',
    'GET/api/message/getLetterDetail.json_SUCCESS',
    'GET/api/message/getLetterDetail.json_FAILURE',
  ],

  'POST/api/message/batchReadLetters.json': [
    'POST/api/message/batchReadLetters.json_REQUEST',
    'POST/api/message/batchReadLetters.json_SUCCESS',
    'POST/api/message/batchReadLetters.json_FAILURE',
  ],

  'GET/api/report/consumer/findSummary.json': [
    'GET/api/report/consumer/findSummary.json_REQUEST',
    'GET/api/report/consumer/findSummary.json_SUCCESS',
    'GET/api/report/consumer/findSummary.json_FAILURE',
  ],

  'GET/api/report/consumer/findConsumerCirculation.json': [
    'GET/api/report/consumer/findConsumerCirculation.json_REQUEST',
    'GET/api/report/consumer/findConsumerCirculation.json_SUCCESS',
    'GET/api/report/consumer/findConsumerCirculation.json_FAILURE',
  ],

  'GET/api/report/fans/findSummary.json': [
    'GET/api/report/fans/findSummary.json_REQUEST',
    'GET/api/report/fans/findSummary.json_SUCCESS',
    'GET/api/report/fans/findSummary.json_FAILURE',
  ],

  'GET/api/report/fans/findCirculation.json': [
    'GET/api/report/fans/findCirculation.json_REQUEST',
    'GET/api/report/fans/findCirculation.json_SUCCESS',
    'GET/api/report/fans/findCirculation.json_FAILURE',
  ],

  'GET/api/campaign/findTransferPage.json': [
    'GET/api/campaign/findTransferPage.json_REQUEST',
    'GET/api/campaign/findTransferPage.json_SUCCESS',
    'GET/api/campaign/findTransferPage.json_FAILURE',
  ],

  'POST/api/campaign/transfer.json': [
    'POST/api/campaign/transfer.json_REQUEST',
    'POST/api/campaign/transfer.json_SUCCESS',
    'POST/api/campaign/transfer.json_FAILURE',
  ],

  'GET/api/activity/report/findDaySum.json': [
    'GET/api/activity/report/findDaySum.json_REQUEST',
    'GET/api/activity/report/findDaySum.json_SUCCESS',
    'GET/api/activity/report/findDaySum.json_FAILURE',
  ],

  'GET/api/activity/report/findDayList.json': [
    'GET/api/activity/report/findDayList.json_REQUEST',
    'GET/api/activity/report/findDayList.json_SUCCESS',
    'GET/api/activity/report/findDayList.json_FAILURE',
  ],

  'GET/api/activity/report/findCrowdDaySum.json': [
    'GET/api/activity/report/findCrowdDaySum.json_REQUEST',
    'GET/api/activity/report/findCrowdDaySum.json_SUCCESS',
    'GET/api/activity/report/findCrowdDaySum.json_FAILURE',
  ],

  'GET/api/activity/report/findCrowdDayList.json': [
    'GET/api/activity/report/findCrowdDayList.json_REQUEST',
    'GET/api/activity/report/findCrowdDayList.json_SUCCESS',
    'GET/api/activity/report/findCrowdDayList.json_FAILURE',
  ],

  'GET/api/activity/report/findItemPage.json': [
    'GET/api/activity/report/findItemPage.json_REQUEST',
    'GET/api/activity/report/findItemPage.json_SUCCESS',
    'GET/api/activity/report/findItemPage.json_FAILURE',
  ],

  'GET/api/activity/report/exportDayList.json': [
    'GET/api/activity/report/exportDayList.json_REQUEST',
    'GET/api/activity/report/exportDayList.json_SUCCESS',
    'GET/api/activity/report/exportDayList.json_FAILURE',
  ],

  'GET/api/activity/report/exportCrowdDayList.json': [
    'GET/api/activity/report/exportCrowdDayList.json_REQUEST',
    'GET/api/activity/report/exportCrowdDayList.json_SUCCESS',
    'GET/api/activity/report/exportCrowdDayList.json_FAILURE',
  ],

  'GET/api/activity/report/exportItem.json': [
    'GET/api/activity/report/exportItem.json_REQUEST',
    'GET/api/activity/report/exportItem.json_SUCCESS',
    'GET/api/activity/report/exportItem.json_FAILURE',
  ],

  'GET/map': ['GET/map_REQUEST', 'GET/map_SUCCESS', 'GET/map_FAILURE'],

  'GET/api/report/case/findCampaignDaySum.json': [
    'GET/api/report/case/findCampaignDaySum.json_REQUEST',
    'GET/api/report/case/findCampaignDaySum.json_SUCCESS',
    'GET/api/report/case/findCampaignDaySum.json_FAILURE',
  ],

  'GET/api/report/case/findItemSumList.json': [
    'GET/api/report/case/findItemSumList.json_REQUEST',
    'GET/api/report/case/findItemSumList.json_SUCCESS',
    'GET/api/report/case/findItemSumList.json_FAILURE',
  ],

  'GET/api/report/case/findItemTrendDayList.json': [
    'GET/api/report/case/findItemTrendDayList.json_REQUEST',
    'GET/api/report/case/findItemTrendDayList.json_SUCCESS',
    'GET/api/report/case/findItemTrendDayList.json_FAILURE',
  ],

  'GET/findList.json': ['GET/findList.json_REQUEST', 'GET/findList.json_SUCCESS', 'GET/findList.json_FAILURE'],

  'GET/api/report/case/findFeedShopItemAllListComp.json': [
    'GET/api/report/case/findFeedShopItemAllListComp.json_REQUEST',
    'GET/api/report/case/findFeedShopItemAllListComp.json_SUCCESS',
    'GET/api/report/case/findFeedShopItemAllListComp.json_FAILURE',
  ],

  'GET/api/campaign/crowd/findList.json': [
    'GET/api/campaign/crowd/findList.json_REQUEST',
    'GET/api/campaign/crowd/findList.json_SUCCESS',
    'GET/api/campaign/crowd/findList.json_FAILURE',
  ],

  'PUT/api/campaign/crowd/modify.json': [
    'PUT/api/campaign/crowd/modify.json_REQUEST',
    'PUT/api/campaign/crowd/modify.json_SUCCESS',
    'PUT/api/campaign/crowd/modify.json_FAILURE',
  ],

  'POST/api/solution/add.json': [
    'POST/api/solution/add.json_REQUEST',
    'POST/api/solution/add.json_SUCCESS',
    'POST/api/solution/add.json_FAILURE',
  ],

  'GET/api/material/item/findPage.json': [
    'GET/api/material/item/findPage.json_REQUEST',
    'GET/api/material/item/findPage.json_SUCCESS',
    'GET/api/material/item/findPage.json_FAILURE',
  ],

  'GET/api/solution/allowPromotion.json': [
    'GET/api/solution/allowPromotion.json_REQUEST',
    'GET/api/solution/allowPromotion.json_SUCCESS',
    'GET/api/solution/allowPromotion.json_FAILURE',
  ],

  'POST/api/solution/batchAdd.json': [
    'POST/api/solution/batchAdd.json_REQUEST',
    'POST/api/solution/batchAdd.json_SUCCESS',
    'POST/api/solution/batchAdd.json_FAILURE',
  ],

  'GET/api/target/findLabelList.json': [
    'GET/api/target/findLabelList.json_REQUEST',
    'GET/api/target/findLabelList.json_SUCCESS',
    'GET/api/target/findLabelList.json_FAILURE',
  ],

  'GET/api/target/findSelectionCategoryList.json': [
    'GET/api/target/findSelectionCategoryList.json_REQUEST',
    'GET/api/target/findSelectionCategoryList.json_SUCCESS',
    'GET/api/target/findSelectionCategoryList.json_FAILURE',
  ],

  'GET/api/account/recharge.action': [
    'GET/api/account/recharge.action_REQUEST',
    'GET/api/account/recharge.action_SUCCESS',
    'GET/api/account/recharge.action_FAILURE',
  ],

  'GET/api/account/getInfo.json': [
    'GET/api/account/getInfo.json_REQUEST',
    'GET/api/account/getInfo.json_SUCCESS',
    'GET/api/account/getInfo.json_FAILURE',
  ],

  'POST/api/adgroup/batchAdd.json': [
    'POST/api/adgroup/batchAdd.json_REQUEST',
    'POST/api/adgroup/batchAdd.json_SUCCESS',
    'POST/api/adgroup/batchAdd.json_FAILURE',
  ],

  'POST/api/campaign/estimateContractPv.json': [
    'POST/api/campaign/estimateContractPv.json_REQUEST',
    'POST/api/campaign/estimateContractPv.json_SUCCESS',
    'POST/api/campaign/estimateContractPv.json_FAILURE',
  ],

  'POST/api/algotool/lockQuantity.json': [
    'POST/api/algotool/lockQuantity.json_REQUEST',
    'POST/api/algotool/lockQuantity.json_SUCCESS',
    'POST/api/algotool/lockQuantity.json_FAILURE',
  ],

  'GET/api/crowd/findPage.json': [
    'GET/api/crowd/findPage.json_REQUEST',
    'GET/api/crowd/findPage.json_SUCCESS',
    'GET/api/crowd/findPage.json_FAILURE',
  ],

  'POST/api/algotool/getBudgetSimulator.json': [
    'POST/api/algotool/getBudgetSimulator.json_REQUEST',
    'POST/api/algotool/getBudgetSimulator.json_SUCCESS',
    'POST/api/algotool/getBudgetSimulator.json_FAILURE',
  ],

  'POST/api/campaign/add.json': [
    'POST/api/campaign/add.json_REQUEST',
    'POST/api/campaign/add.json_SUCCESS',
    'POST/api/campaign/add.json_FAILURE',
  ],

  'GET/api/adgroup/findPage.json': [
    'GET/api/adgroup/findPage.json_REQUEST',
    'GET/api/adgroup/findPage.json_SUCCESS',
    'GET/api/adgroup/findPage.json_FAILURE',
  ],

  'PUT/api/campaign/modEntire.json': [
    'PUT/api/campaign/modEntire.json_REQUEST',
    'PUT/api/campaign/modEntire.json_SUCCESS',
    'PUT/api/campaign/modEntire.json_FAILURE',
  ],

  'GET/api/algotool/probeInterest.json': [
    'GET/api/algotool/probeInterest.json_REQUEST',
    'GET/api/algotool/probeInterest.json_SUCCESS',
    'GET/api/algotool/probeInterest.json_FAILURE',
  ],
}

/** 请求action */
export const RequestAction: RequestAction = {
  /**
   * 接口名：计划相关字段参考[新建]
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6615&itf=67832
   */
  'GET/readme/campaign': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/readme/campaign',
      url: '/readme/campaign',
      method: 'GET',
      params,
      types: RequestTypes['GET/readme/campaign'],
    },
  }),

  /**
   * 接口名：获取计划默认设置
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6615&itf=67189
   */
  'GET/api/campaign/default.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/api/campaign/default.json',
      url: '/api/campaign/default.json',
      method: 'GET',
      params,
      types: RequestTypes['GET/api/campaign/default.json'],
    },
  }),

  /**
   * 接口名：获取计划详情
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6615&itf=67240
   */
  'GET/api/campaign/get.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/api/campaign/get.json',
      url: '/api/campaign/get.json',
      method: 'GET',
      params,
      types: RequestTypes['GET/api/campaign/get.json'],
    },
  }),

  /**
   * 接口名：获取计划结算信息
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6615&itf=73647
   */
  'GET/api/campaign/getSettleInfo.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/api/campaign/getSettleInfo.json',
      url: '/api/campaign/getSettleInfo.json',
      method: 'GET',
      params,
      types: RequestTypes['GET/api/campaign/getSettleInfo.json'],
    },
  }),

  /**
   * 接口名：获取计划列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6615&itf=67241
   */
  'GET/api/campaign/findList.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/api/campaign/findList.json',
      url: '/api/campaign/findList.json',
      method: 'GET',
      params,
      types: RequestTypes['GET/api/campaign/findList.json'],
    },
  }),

  /**
   * 接口名：分页获取计划列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6615&itf=67264
   */
  'GET/api/campaign/findPage.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/api/campaign/findPage.json',
      url: '/api/campaign/findPage.json',
      method: 'GET',
      params,
      types: RequestTypes['GET/api/campaign/findPage.json'],
    },
  }),

  /**
   * 接口名：获取草稿计划列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6615&itf=67236
   */
  'GET/api/campaign/findDraftList.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/api/campaign/findDraftList.json',
      url: '/api/campaign/findDraftList.json',
      method: 'GET',
      params,
      types: RequestTypes['GET/api/campaign/findDraftList.json'],
    },
  }),

  /**
   * 接口名：删除计划
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6615&itf=67242
   */
  'DELETE/api/campaign/delete.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'DELETE/api/campaign/delete.json',
      url: '/api/campaign/delete.json',
      method: 'DELETE',
      params,
      types: RequestTypes['DELETE/api/campaign/delete.json'],
    },
  }),

  /**
   * 接口名：克隆计划
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6615&itf=67277
   */
  'POST/api/campaign/clone.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'POST/api/campaign/clone.json',
      url: '/api/campaign/clone.json',
      method: 'POST',
      params,
      types: RequestTypes['POST/api/campaign/clone.json'],
    },
  }),

  /**
   * 接口名：【提醒】修改计划预算提醒
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6615&itf=67321
   */
  'PUT/api/campaign/updateCampaignBudgetRemindSetting.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'PUT/api/campaign/updateCampaignBudgetRemindSetting.json',
      url: 'api/campaign/updateCampaignBudgetRemindSetting.json',
      method: 'PUT',
      params,
      types: RequestTypes['PUT/api/campaign/updateCampaignBudgetRemindSetting.json'],
    },
  }),

  /**
   * 接口名：【提醒】获取计划预算提醒
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6615&itf=67369
   */
  'GET/api/campaign/getCampaignBudgetRemindSetting.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/api/campaign/getCampaignBudgetRemindSetting.json',
      url: 'api/campaign/getCampaignBudgetRemindSetting.json',
      method: 'GET',
      params,
      types: RequestTypes['GET/api/campaign/getCampaignBudgetRemindSetting.json'],
    },
  }),

  /**
   * 接口名：批量修改计划信息
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6615&itf=67654
   */
  'PUT/api/campaign/batchModify.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'PUT/api/campaign/batchModify.json',
      url: '/api/campaign/batchModify.json',
      method: 'PUT',
      params,
      types: RequestTypes['PUT/api/campaign/batchModify.json'],
    },
  }),

  /**
   * 接口名：计划完成
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6615&itf=67672
   */
  'PUT/api/campaign/complete.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'PUT/api/campaign/complete.json',
      url: '/api/campaign/complete.json',
      method: 'PUT',
      params,
      types: RequestTypes['PUT/api/campaign/complete.json'],
    },
  }),

  /**
   * 接口名：修改置顶状态
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6615&itf=67674
   */
  'PUT/api/campaign/setTop.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'PUT/api/campaign/setTop.json',
      url: '/api/campaign/setTop.json',
      method: 'PUT',
      params,
      types: RequestTypes['PUT/api/campaign/setTop.json'],
    },
  }),

  /**
   * 接口名：获取有效计划数
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6615&itf=67975
   */
  'GET/api/campaign/validCount.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/api/campaign/validCount.json',
      url: '/api/campaign/validCount.json',
      method: 'GET',
      params,
      types: RequestTypes['GET/api/campaign/validCount.json'],
    },
  }),

  /**
   * 接口名：获取总预算
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6615&itf=69603
   */
  'GET/api/campaign/findDayBudgetSum.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/api/campaign/findDayBudgetSum.json',
      url: '/api/campaign/findDayBudgetSum.json',
      method: 'GET',
      params,
      types: RequestTypes['GET/api/campaign/findDayBudgetSum.json'],
    },
  }),

  /**
   * 接口名：获取计划流程信息
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6615&itf=73883
   */
  'GET/api/campaign/displayConfig.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/api/campaign/displayConfig.json',
      url: '/api/campaign/displayConfig.json',
      method: 'GET',
      params,
      types: RequestTypes['GET/api/campaign/displayConfig.json'],
    },
  }),

  /**
   * 接口名：获取计划可以修改的配置
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6615&itf=76004
   */
  'GET/api/campaign/modifyConfig.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/api/campaign/modifyConfig.json',
      url: '/api/campaign/modifyConfig.json',
      method: 'GET',
      params,
      types: RequestTypes['GET/api/campaign/modifyConfig.json'],
    },
  }),

  /**
   * 接口名：批量转换计划到活动计划
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6615&itf=75064
   */
  'PUT/api/campaign/activity/transfer.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'PUT/api/campaign/activity/transfer.json',
      url: '/api/campaign/activity/transfer.json',
      method: 'PUT',
      params,
      types: RequestTypes['PUT/api/campaign/activity/transfer.json'],
    },
  }),

  /**
   * 接口名：批量转换活动scene
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6615&itf=75562
   */
  'PUT/api/campaign/transferScene.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'PUT/api/campaign/transferScene.json',
      url: '/api/campaign/transferScene.json',
      method: 'PUT',
      params,
      types: RequestTypes['PUT/api/campaign/transferScene.json'],
    },
  }),

  /**
   * 接口名：转换活动阶段
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6615&itf=83231
   */
  'PUT/api/campaign/activity/transferPhase.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'PUT/api/campaign/activity/transferPhase.json',
      url: '/api/campaign/activity/transferPhase.json',
      method: 'PUT',
      params,
      types: RequestTypes['PUT/api/campaign/activity/transferPhase.json'],
    },
  }),

  /**
   * 接口名：获取再营销-标签信息
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6615&itf=80101
   */
  'GET/api/target/getRemarketingCoverage.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/api/target/getRemarketingCoverage.json',
      url: '/api/target/getRemarketingCoverage.json',
      method: 'GET',
      params,
      types: RequestTypes['GET/api/target/getRemarketingCoverage.json'],
    },
  }),

  /**
   * 接口名：新建单元
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6699&itf=67272
   */
  'POST/api/adgroup/add.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'POST/api/adgroup/add.json',
      url: '/api/adgroup/add.json',
      method: 'POST',
      params,
      types: RequestTypes['POST/api/adgroup/add.json'],
    },
  }),

  /**
   * 接口名：获取单元默认设置
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6699&itf=67271
   */
  'GET/api/adgroup/default.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/api/adgroup/default.json',
      url: '/api/adgroup/default.json',
      method: 'GET',
      params,
      types: RequestTypes['GET/api/adgroup/default.json'],
    },
  }),

  /**
   * 接口名：获取单元详情
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6699&itf=67273
   */
  'GET/api/adgroup/get.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/api/adgroup/get.json',
      url: '/api/adgroup/get.json',
      method: 'GET',
      params,
      types: RequestTypes['GET/api/adgroup/get.json'],
    },
  }),

  /**
   * 接口名：获取单元列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6699&itf=67274
   */
  'GET/api/adgroup/findList.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/api/adgroup/findList.json',
      url: '/api/adgroup/findList.json',
      method: 'GET',
      params,
      types: RequestTypes['GET/api/adgroup/findList.json'],
    },
  }),

  /**
   * 接口名：批量删除单元
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6699&itf=67276
   */
  'DELETE/api/adgroup/batchDelete.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'DELETE/api/adgroup/batchDelete.json',
      url: '/api/adgroup/batchDelete.json',
      method: 'DELETE',
      params,
      types: RequestTypes['DELETE/api/adgroup/batchDelete.json'],
    },
  }),

  /**
   * 接口名：克隆单元
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6699&itf=67278
   */
  'POST/api/adgroup/clone.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'POST/api/adgroup/clone.json',
      url: '/api/adgroup/clone.json',
      method: 'POST',
      params,
      types: RequestTypes['POST/api/adgroup/clone.json'],
    },
  }),

  /**
   * 接口名：批量全量修改单元信息
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6699&itf=67342
   */
  'PUT/api/adgroup/batchModEntire.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'PUT/api/adgroup/batchModEntire.json',
      url: '/api/adgroup/batchModEntire.json',
      method: 'PUT',
      params,
      types: RequestTypes['PUT/api/adgroup/batchModEntire.json'],
    },
  }),

  /**
   * 接口名：批量部分修改单元信息
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6699&itf=79050
   */
  'PUT/api/adgroup/batchModifyPart.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'PUT/api/adgroup/batchModifyPart.json',
      url: '/api/adgroup/batchModifyPart.json',
      method: 'PUT',
      params,
      types: RequestTypes['PUT/api/adgroup/batchModifyPart.json'],
    },
  }),

  /**
   * 接口名：质量分接口
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6699&itf=67557
   */
  'GET/api/adgroup/qualityScore/findList.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/api/adgroup/qualityScore/findList.json',
      url: '/api/adgroup/qualityScore/findList.json',
      method: 'GET',
      params,
      types: RequestTypes['GET/api/adgroup/qualityScore/findList.json'],
    },
  }),

  /**
   * 接口名：质量分折线图
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6699&itf=69823
   */
  'GET/api/adgroup/qualityScore/findHisList.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/api/adgroup/qualityScore/findHisList.json',
      url: '/api/adgroup/qualityScore/findHisList.json',
      method: 'GET',
      params,
      types: RequestTypes['GET/api/adgroup/qualityScore/findHisList.json'],
    },
  }),

  /**
   * 接口名：批量修改单元
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6699&itf=67703
   */
  'PUT/api/adgroup/batchModify.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'PUT/api/adgroup/batchModify.json',
      url: '/api/adgroup/batchModify.json',
      method: 'PUT',
      params,
      types: RequestTypes['PUT/api/adgroup/batchModify.json'],
    },
  }),

  /**
   * 接口名：质量分查询条件
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6699&itf=68838
   */
  'GET/api/adgroup/qualityScore/findQueryCondition.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/api/adgroup/qualityScore/findQueryCondition.json',
      url: '/api/adgroup/qualityScore/findQueryCondition.json',
      method: 'GET',
      params,
      types: RequestTypes['GET/api/adgroup/qualityScore/findQueryCondition.json'],
    },
  }),

  /**
   * 接口名：查看计划带着单元的组合接口
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6699&itf=69419
   */
  'GET/api/adgroup/findCampaignAndAdgroupList.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/api/adgroup/findCampaignAndAdgroupList.json',
      url: '/api/adgroup/findCampaignAndAdgroupList.json',
      method: 'GET',
      params,
      types: RequestTypes['GET/api/adgroup/findCampaignAndAdgroupList.json'],
    },
  }),

  /**
   * 接口名：修改单元上的系统创意设置
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6699&itf=75561
   */
  'PUT/api/adgroup/useSystemCreative.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'PUT/api/adgroup/useSystemCreative.json',
      url: '/api/adgroup/useSystemCreative.json',
      method: 'PUT',
      params,
      types: RequestTypes['PUT/api/adgroup/useSystemCreative.json'],
    },
  }),

  /**
   * 接口名：【接口优化】修改单元
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6699&itf=78328
   */
  'PUT/api/adgroup/batchModifyEntire.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'PUT/api/adgroup/batchModifyEntire.json',
      url: '/api/adgroup/batchModifyEntire.json',
      method: 'PUT',
      params,
      types: RequestTypes['PUT/api/adgroup/batchModifyEntire.json'],
    },
  }),

  /**
   * 接口名：批量修改单元出价
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6699&itf=87108
   */
  'PUT/api/adgroup/batchModifyPrice.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'PUT/api/adgroup/batchModifyPrice.json',
      url: '/api/adgroup/batchModifyPrice.json',
      method: 'PUT',
      params,
      types: RequestTypes['PUT/api/adgroup/batchModifyPrice.json'],
    },
  }),

  /**
   * 接口名：批量新建创意
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6662&itf=67197
   */
  'POST/api/creative/batchAddAndBind.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'POST/api/creative/batchAddAndBind.json',
      url: '/api/creative/batchAddAndBind.json',
      method: 'POST',
      params,
      types: RequestTypes['POST/api/creative/batchAddAndBind.json'],
    },
  }),

  /**
   * 接口名：批量解绑创意
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6662&itf=73851
   */
  'PUT/api/creative/batchUnbind.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'PUT/api/creative/batchUnbind.json',
      url: '/api/creative/batchUnbind.json',
      method: 'PUT',
      params,
      types: RequestTypes['PUT/api/creative/batchUnbind.json'],
    },
  }),

  /**
   * 接口名：推荐创意
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6662&itf=83233
   */
  'GET/api/creative/recommend.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/api/creative/recommend.json',
      url: '/api/creative/recommend.json',
      method: 'GET',
      params,
      types: RequestTypes['GET/api/creative/recommend.json'],
    },
  }),

  /**
   * 接口名：横向管理查看创意列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6662&itf=67199
   */
  'GET/api/creative/findPage.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/api/creative/findPage.json',
      url: '/api/creative/findPage.json',
      method: 'GET',
      params,
      types: RequestTypes['GET/api/creative/findPage.json'],
    },
  }),

  /**
   * 接口名：查询创意违规记录
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6662&itf=67558
   */
  'GET/api/creative/findPunishRecordList.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/api/creative/findPunishRecordList.json',
      url: '/api/creative/findPunishRecordList.json',
      method: 'GET',
      params,
      types: RequestTypes['GET/api/creative/findPunishRecordList.json'],
    },
  }),

  /**
   * 接口名：创意查询条件
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6662&itf=67560
   */
  'GET/api/creative/findQueryCondition.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/api/creative/findQueryCondition.json',
      url: '/api/creative/findQueryCondition.json',
      method: 'GET',
      params,
      types: RequestTypes['GET/api/creative/findQueryCondition.json'],
    },
  }),

  /**
   * 接口名：跳转新建创意页面
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6662&itf=68950
   */
  'GET/api/creativeCenter/gotoCreation.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/api/creativeCenter/gotoCreation.json',
      url: '/api/creativeCenter/gotoCreation.json',
      method: 'GET',
      params,
      types: RequestTypes['GET/api/creativeCenter/gotoCreation.json'],
    },
  }),

  /**
   * 接口名：查看创意模板
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6662&itf=70224
   */
  'GET/api/creative/template/findPackageList.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/api/creative/template/findPackageList.json',
      url: '/api/creative/template/findPackageList.json',
      method: 'GET',
      params,
      types: RequestTypes['GET/api/creative/template/findPackageList.json'],
    },
  }),

  /**
   * 接口名：跳转模板制作页面
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6662&itf=70256
   */
  'GET/api/creativeCenter/gotoTemplateNew.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/api/creativeCenter/gotoTemplateNew.json',
      url: '/api/creativeCenter/gotoTemplateNew.json',
      method: 'GET',
      params,
      types: RequestTypes['GET/api/creativeCenter/gotoTemplateNew.json'],
    },
  }),

  /**
   * 接口名：获取创意中心需要的物料
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6662&itf=70355
   */
  'GET/api/creativeCenter/getMaterial.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/api/creativeCenter/getMaterial.json',
      url: '/api/creativeCenter/getMaterial.json',
      method: 'GET',
      params,
      types: RequestTypes['GET/api/creativeCenter/getMaterial.json'],
    },
  }),

  /**
   * 接口名：删除创意
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6662&itf=73923
   */
  'DELETE/api/creative/delete.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'DELETE/api/creative/delete.json',
      url: '/api/creative/delete.json',
      method: 'DELETE',
      params,
      types: RequestTypes['DELETE/api/creative/delete.json'],
    },
  }),

  /**
   * 接口名：活动创意打标
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6662&itf=85285
   */
  'PUT/api/creative/activity/batchAddTag.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'PUT/api/creative/activity/batchAddTag.json',
      url: '/api/creative/activity/batchAddTag.json',
      method: 'PUT',
      params,
      types: RequestTypes['PUT/api/creative/activity/batchAddTag.json'],
    },
  }),

  /**
   * 接口名：预览创意接口
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6662&itf=77911
   */
  'POST/api/creative/preview.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'POST/api/creative/preview.json',
      url: '/api/creative/preview.json',
      method: 'POST',
      params,
      types: RequestTypes['POST/api/creative/preview.json'],
    },
  }),

  /**
   * 接口名：获取资源位列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6687&itf=67190
   */
  'GET/api/adzone/findList.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/api/adzone/findList.json',
      url: '/api/adzone/findList.json',
      method: 'GET',
      params,
      types: RequestTypes['GET/api/adzone/findList.json'],
    },
  }),

  /**
   * 接口名：检查资源位匹配情况
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6687&itf=67243
   */
  'GET/api/adzone/checkList.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/api/adzone/checkList.json',
      url: '/api/adzone/checkList.json',
      method: 'GET',
      params,
      types: RequestTypes['GET/api/adzone/checkList.json'],
    },
  }),

  /**
   * 接口名：【横向】移除绑定资源位
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6687&itf=67248
   */
  'PUT/api/adzone/unbindList.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'PUT/api/adzone/unbindList.json',
      url: '/api/adzone/unbindList.json',
      method: 'PUT',
      params,
      types: RequestTypes['PUT/api/adzone/unbindList.json'],
    },
  }),

  /**
   * 接口名：【横向】更新广告位绑定情况
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6687&itf=67254
   */
  'PUT/api/adzone/bindList.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'PUT/api/adzone/bindList.json',
      url: '/api/adzone/bindList.json',
      method: 'PUT',
      params,
      types: RequestTypes['PUT/api/adzone/bindList.json'],
    },
  }),

  /**
   * 接口名：【横向】分页获取资源位列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6687&itf=67267
   */
  'GET/api/adzone/findPage.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/api/adzone/findPage.json',
      url: '/api/adzone/findPage.json',
      method: 'GET',
      params,
      types: RequestTypes['GET/api/adzone/findPage.json'],
    },
  }),

  /**
   * 接口名：【管理】批量修改溢价
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6687&itf=68949
   */
  'PUT/api/adzone/batchModify.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'PUT/api/adzone/batchModify.json',
      url: '/api/adzone/batchModify.json',
      method: 'PUT',
      params,
      types: RequestTypes['PUT/api/adzone/batchModify.json'],
    },
  }),

  /**
   * 接口名：分页获取物料列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6688&itf=67403
   */
  'GET/api/material/findPage.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/api/material/findPage.json',
      url: '/api/material/findPage.json',
      method: 'GET',
      params,
      types: RequestTypes['GET/api/material/findPage.json'],
    },
  }),

  /**
   * 接口名：获取推荐物料列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6688&itf=87196
   */
  'GET/api/material/recommend.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/api/material/recommend.json',
      url: '/api/material/recommend.json',
      method: 'GET',
      params,
      types: RequestTypes['GET/api/material/recommend.json'],
    },
  }),

  /**
   * 接口名：获取物料查询条件
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6688&itf=67405
   */
  'GET/api/material/findQueryCondition.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/api/material/findQueryCondition.json',
      url: '/api/material/findQueryCondition.json',
      method: 'GET',
      params,
      types: RequestTypes['GET/api/material/findQueryCondition.json'],
    },
  }),

  /**
   * 接口名：获取商品查询条件
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6688&itf=70820
   */
  'GET/api/material/item/findQueryCondition.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/api/material/item/findQueryCondition.json',
      url: '/api/material/item/findQueryCondition.json',
      method: 'GET',
      params,
      types: RequestTypes['GET/api/material/item/findQueryCondition.json'],
    },
  }),

  /**
   * 接口名：获取权益查询条件
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6688&itf=78780
   */
  'GET/api/coupon/findQueryCondition.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/api/coupon/findQueryCondition.json',
      url: '/api/coupon/findQueryCondition.json',
      method: 'GET',
      params,
      types: RequestTypes['GET/api/coupon/findQueryCondition.json'],
    },
  }),

  /**
   * 接口名：查询物料违规记录
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6688&itf=67559
   */
  'GET/api/material/findPunishRecordList.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/api/material/findPunishRecordList.json',
      url: '/api/material/findPunishRecordList.json',
      method: 'GET',
      params,
      types: RequestTypes['GET/api/material/findPunishRecordList.json'],
    },
  }),

  /**
   * 接口名：校验推广
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6688&itf=67656
   */
  'GET/api/material/accessAllowed.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/api/material/accessAllowed.json',
      url: '/api/material/accessAllowed.json',
      method: 'GET',
      params,
      types: RequestTypes['GET/api/material/accessAllowed.json'],
    },
  }),

  /**
   * 接口名：校验商品
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6688&itf=70819
   */
  'GET/api/material/item/accessAllowed.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/api/material/item/accessAllowed.json',
      url: '/api/material/item/accessAllowed.json',
      method: 'GET',
      params,
      types: RequestTypes['GET/api/material/item/accessAllowed.json'],
    },
  }),

  /**
   * 接口名：优惠券接口
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6688&itf=70837
   */
  'GET/api/coupon/findList.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/api/coupon/findList.json',
      url: '/api/coupon/findList.json',
      method: 'GET',
      params,
      types: RequestTypes['GET/api/coupon/findList.json'],
    },
  }),

  /**
   * 接口名：分页获取权益信息
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6688&itf=78647
   */
  'GET/api/coupon/findPage.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/api/coupon/findPage.json',
      url: '/api/coupon/findPage.json',
      method: 'GET',
      params,
      types: RequestTypes['GET/api/coupon/findPage.json'],
    },
  }),

  /**
   * 接口名：获取推荐优惠券
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6688&itf=78925
   */
  'GET/api/coupon/recommend.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/api/coupon/recommend.json',
      url: '/api/coupon/recommend.json',
      method: 'GET',
      params,
      types: RequestTypes['GET/api/coupon/recommend.json'],
    },
  }),

  /**
   * 接口名：批量校验接口
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6688&itf=75890
   */
  'GET/api/material/batchAccessAllowed.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/api/material/batchAccessAllowed.json',
      url: '/api/material/batchAccessAllowed.json',
      method: 'GET',
      params,
      types: RequestTypes['GET/api/material/batchAccessAllowed.json'],
    },
  }),

  /**
   * 接口名：【管理】新增定向
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6840&itf=68388
   */
  'PUT/api/crowd/modifyByType.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'PUT/api/crowd/modifyByType.json',
      url: '/api/crowd/modifyByType.json',
      method: 'PUT',
      params,
      types: RequestTypes['PUT/api/crowd/modifyByType.json'],
    },
  }),

  /**
   * 接口名：【管理】删除定向绑定
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6840&itf=68391
   */
  'DELETE/api/crowd/delete.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'DELETE/api/crowd/delete.json',
      url: '/api/crowd/delete.json',
      method: 'DELETE',
      params,
      types: RequestTypes['DELETE/api/crowd/delete.json'],
    },
  }),

  /**
   * 接口名：【管理】查询定向列表不分页
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6840&itf=68395
   */
  'GET/api/crowd/findList.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/api/crowd/findList.json',
      url: '/api/crowd/findList.json',
      method: 'GET',
      params,
      types: RequestTypes['GET/api/crowd/findList.json'],
    },
  }),

  /**
   * 接口名：【主流程】查询推荐定向
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6840&itf=68397
   */
  'GET/api/target/findSuggest.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/api/target/findSuggest.json',
      url: '/api/target/findSuggest.json',
      method: 'GET',
      params,
      types: RequestTypes['GET/api/target/findSuggest.json'],
    },
  }),

  /**
   * 接口名：【工具】查询建议出价&市场平均价
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6840&itf=68400
   */
  'POST/api/crowd/getSuggestPrice.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'POST/api/crowd/getSuggestPrice.json',
      url: '/api/crowd/getSuggestPrice.json',
      method: 'POST',
      params,
      types: RequestTypes['POST/api/crowd/getSuggestPrice.json'],
    },
  }),

  /**
   * 接口名：【工具】流量预估
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6840&itf=68418
   */
  'POST/api/algotool/getPredictedPvUv.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'POST/api/algotool/getPredictedPvUv.json',
      url: '/api/algotool/getPredictedPvUv.json',
      method: 'POST',
      params,
      types: RequestTypes['POST/api/algotool/getPredictedPvUv.json'],
    },
  }),

  /**
   * 接口名：查询定向列表（没有category）
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6840&itf=68420
   */
  'GET/api/target/findList.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/api/target/findList.json',
      url: '/api/target/findList.json',
      method: 'GET',
      params,
      types: RequestTypes['GET/api/target/findList.json'],
    },
  }),

  /**
   * 接口名：查询定向分组列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6840&itf=68421
   */
  'GET/api/target/findCategoryList.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/api/target/findCategoryList.json',
      url: '/api/target/findCategoryList.json',
      method: 'GET',
      params,
      types: RequestTypes['GET/api/target/findCategoryList.json'],
    },
  }),

  /**
   * 接口名：查询定向标签分页
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6840&itf=68425
   */
  'GET/api/target/findLabelPage.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/api/target/findLabelPage.json',
      url: '/api/target/findLabelPage.json',
      method: 'GET',
      params,
      types: RequestTypes['GET/api/target/findLabelPage.json'],
    },
  }),

  /**
   * 接口名：【管理】查询定向筛选框
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6840&itf=68426
   */
  'GET/api/target/findTargetTypeCondition.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/api/target/findTargetTypeCondition.json',
      url: '/api/target/findTargetTypeCondition.json',
      method: 'GET',
      params,
      types: RequestTypes['GET/api/target/findTargetTypeCondition.json'],
    },
  }),

  /**
   * 接口名：查询店铺关键词
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6840&itf=68427
   */
  'GET/api/target/getKeywordShopUv.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/api/target/getKeywordShopUv.json',
      url: '/api/target/getKeywordShopUv.json',
      method: 'GET',
      params,
      types: RequestTypes['GET/api/target/getKeywordShopUv.json'],
    },
  }),

  /**
   * 接口名：查询店铺定向筛选条件
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6840&itf=68429
   */
  'GET/api/target/findShopTargetQueryCondition.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/api/target/findShopTargetQueryCondition.json',
      url: '/api/target/findShopTargetQueryCondition.json',
      method: 'GET',
      params,
      types: RequestTypes['GET/api/target/findShopTargetQueryCondition.json'],
    },
  }),

  /**
   * 接口名：【工具】单品托管手动出价建议价
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6840&itf=68552
   */
  'GET/api/algotool/findManualBidSuggestPrice.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/api/algotool/findManualBidSuggestPrice.json',
      url: '/api/algotool/findManualBidSuggestPrice.json',
      method: 'GET',
      params,
      types: RequestTypes['GET/api/algotool/findManualBidSuggestPrice.json'],
    },
  }),

  /**
   * 接口名：【管理】批量出价
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6840&itf=68946
   */
  'POST/api/crowd/batchModify.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'POST/api/crowd/batchModify.json',
      url: '/api/crowd/batchModify.json',
      method: 'POST',
      params,
      types: RequestTypes['POST/api/crowd/batchModify.json'],
    },
  }),

  /**
   * 接口名：【工具】出价模拟器
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6840&itf=69205
   */
  'GET/api/crowd/findSimulatorPointList.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/api/crowd/findSimulatorPointList.json',
      url: '/api/crowd/findSimulatorPointList.json',
      method: 'GET',
      params,
      types: RequestTypes['GET/api/crowd/findSimulatorPointList.json'],
    },
  }),

  /**
   * 接口名：【工具】资源位建议溢价
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6840&itf=69646
   */
  'POST/api/adzone/getSuggestDiscount.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'POST/api/adzone/getSuggestDiscount.json',
      url: '/api/adzone/getSuggestDiscount.json',
      method: 'POST',
      params,
      types: RequestTypes['POST/api/adzone/getSuggestDiscount.json'],
    },
  }),

  /**
   * 接口名：关键词包含优化
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6840&itf=77913
   */
  'POST/api/target/findSonkeywordList.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'POST/api/target/findSonkeywordList.json',
      url: '/api/target/findSonkeywordList.json',
      method: 'POST',
      params,
      types: RequestTypes['POST/api/target/findSonkeywordList.json'],
    },
  }),

  /**
   * 接口名：【人群推荐】获取人群推荐
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6840&itf=83230
   */
  'GET/api/target/findRecommendList.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/api/target/findRecommendList.json',
      url: '/api/target/findRecommendList.json',
      method: 'GET',
      params,
      types: RequestTypes['GET/api/target/findRecommendList.json'],
    },
  }),

  /**
   * 接口名：【人群推荐】分页获取指定推荐人群
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6840&itf=83235
   */
  'GET/api/target/findRecommendPage.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/api/target/findRecommendPage.json',
      url: '/api/target/findRecommendPage.json',
      method: 'GET',
      params,
      types: RequestTypes['GET/api/target/findRecommendPage.json'],
    },
  }),

  /**
   * 接口名：【人群推荐】新增定向（非覆盖）
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6840&itf=83236
   */
  'PUT/api/target/addTargetLabel.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'PUT/api/target/addTargetLabel.json',
      url: '/api/target/addTargetLabel.json',
      method: 'PUT',
      params,
      types: RequestTypes['PUT/api/target/addTargetLabel.json'],
    },
  }),

  /**
   * 接口名：更新报表展现指标
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6692&itf=67498
   */
  'POST/api/member/updateConfig.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'POST/api/member/updateConfig.json',
      url: '/api/member/updateConfig.json',
      method: 'POST',
      params,
      types: RequestTypes['POST/api/member/updateConfig.json'],
    },
  }),

  /**
   * 接口名：用户登出
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6692&itf=67238
   */
  'GET/api/member/logout.action': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/api/member/logout.action',
      url: '/api/member/logout.action',
      method: 'GET',
      params,
      types: RequestTypes['GET/api/member/logout.action'],
    },
  }),

  /**
   * 接口名：【CRM】伪登陆
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6692&itf=67244
   */
  'GET/api/member/adminLogin.action': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/api/member/adminLogin.action',
      url: '/api/member/adminLogin.action',
      method: 'GET',
      params,
      types: RequestTypes['GET/api/member/adminLogin.action'],
    },
  }),

  /**
   * 接口名：用户协议签署
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6692&itf=67246
   */
  'POST/api/member/signProtocol.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'POST/api/member/signProtocol.json',
      url: '/api/member/signProtocol.json',
      method: 'POST',
      params,
      types: RequestTypes['POST/api/member/signProtocol.json'],
    },
  }),

  /**
   * 接口名：获取用户信息
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6692&itf=67253
   */
  'GET/api/member/getInfo.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/api/member/getInfo.json',
      url: '/api/member/getInfo.json',
      method: 'GET',
      params,
      types: RequestTypes['GET/api/member/getInfo.json'],
    },
  }),

  /**
   * 接口名：创建用户联系人
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6692&itf=67294
   */
  'POST/api/member/addContacts.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'POST/api/member/addContacts.json',
      url: '/api/member/addContacts.json',
      method: 'POST',
      params,
      types: RequestTypes['POST/api/member/addContacts.json'],
    },
  }),

  /**
   * 接口名：用户品牌检测
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6692&itf=67350
   */
  'GET/api/member/getQualificationBrandAccess.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/api/member/getQualificationBrandAccess.json',
      url: '/api/member/getQualificationBrandAccess.json',
      method: 'GET',
      params,
      types: RequestTypes['GET/api/member/getQualificationBrandAccess.json'],
    },
  }),

  /**
   * 接口名：校验用户联系人旺旺合法性
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6692&itf=67295
   */
  'GET/api/member/checkContactsName.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/api/member/checkContactsName.json',
      url: '/api/member/checkContactsName.json',
      method: 'GET',
      params,
      types: RequestTypes['GET/api/member/checkContactsName.json'],
    },
  }),

  /**
   * 接口名：获取用户联系人列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6692&itf=67298
   */
  'GET/api/member/findContactsList.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/api/member/findContactsList.json',
      url: '/api/member/findContactsList.json',
      method: 'GET',
      params,
      types: RequestTypes['GET/api/member/findContactsList.json'],
    },
  }),

  /**
   * 接口名：查询用户违规状态
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6692&itf=67473
   */
  'GET/api/member/getPunishStatus.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/api/member/getPunishStatus.json',
      url: '/api/member/getPunishStatus.json',
      method: 'GET',
      params,
      types: RequestTypes['GET/api/member/getPunishStatus.json'],
    },
  }),

  /**
   * 接口名：查询用户违规记录
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6692&itf=67476
   */
  'GET/api/member/findPunishRecordList.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/api/member/findPunishRecordList.json',
      url: '/api/member/findPunishRecordList.json',
      method: 'GET',
      params,
      types: RequestTypes['GET/api/member/findPunishRecordList.json'],
    },
  }),

  /**
   * 接口名：查询用户资质违规记录
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6692&itf=67482
   */
  'GET/api/member/findQualificationPunishRecordList.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/api/member/findQualificationPunishRecordList.json',
      url: '/api/member/findQualificationPunishRecordList.json',
      method: 'GET',
      params,
      types: RequestTypes['GET/api/member/findQualificationPunishRecordList.json'],
    },
  }),

  /**
   * 接口名：判断用户是否签订协议
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6692&itf=67731
   */
  'GET/api/member/isProtocolSigned.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/api/member/isProtocolSigned.json',
      url: '/api/member/isProtocolSigned.json',
      method: 'GET',
      params,
      types: RequestTypes['GET/api/member/isProtocolSigned.json'],
    },
  }),

  /**
   * 接口名：用户准入
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6692&itf=68649
   */
  'POST/api/member/joinBusinessPlatform.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'POST/api/member/joinBusinessPlatform.json',
      url: 'api/member/joinBusinessPlatform.json',
      method: 'POST',
      params,
      types: RequestTypes['POST/api/member/joinBusinessPlatform.json'],
    },
  }),

  /**
   * 接口名：用户处罚
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6692&itf=68692
   */
  'GET/TODO': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/TODO',
      url: 'TODO',
      method: 'GET',
      params,
      types: RequestTypes['GET/TODO'],
    },
  }),

  /**
   * 接口名：获取用户维度故障信息
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6692&itf=69558
   */
  'GET/api/member/findDiagnoseList.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/api/member/findDiagnoseList.json',
      url: '/api/member/findDiagnoseList.json',
      method: 'GET',
      params,
      types: RequestTypes['GET/api/member/findDiagnoseList.json'],
    },
  }),

  /**
   * 接口名：信息流运营编辑接口
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6692&itf=70153
   */
  'GET/https://mo.m.taobao.com/feeds/': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/https://mo.m.taobao.com/feeds/',
      url: 'https://mo.m.taobao.com/feeds/',
      method: 'GET',
      params,
      types: RequestTypes['GET/https://mo.m.taobao.com/feeds/'],
    },
  }),

  /**
   * 接口名：一站式运营编辑接口
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6692&itf=71471
   */
  'GET/https://mo.m.taobao.com/one-stop/': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/https://mo.m.taobao.com/one-stop/',
      url: 'https://mo.m.taobao.com/one-stop/',
      method: 'GET',
      params,
      types: RequestTypes['GET/https://mo.m.taobao.com/one-stop/'],
    },
  }),

  /**
   * 接口名：获取邀请链接
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6692&itf=73310
   */
  'GET/api/member/invitation/url.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/api/member/invitation/url.json',
      url: '/api/member/invitation/url.json',
      method: 'GET',
      params,
      types: RequestTypes['GET/api/member/invitation/url.json'],
    },
  }),

  /**
   * 接口名：获取用户使用进度
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6692&itf=73741
   */
  'GET/api/member/stage.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/api/member/stage.json',
      url: '/api/member/stage.json',
      method: 'GET',
      params,
      types: RequestTypes['GET/api/member/stage.json'],
    },
  }),

  /**
   * 接口名：用户活动的一些信息
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6692&itf=75881
   */
  'GET/api/member/activity.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/api/member/activity.json',
      url: '/api/member/activity.json',
      method: 'GET',
      params,
      types: RequestTypes['GET/api/member/activity.json'],
    },
  }),

  /**
   * 接口名：用户活动的宝贝引导信息
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6692&itf=87195
   */
  'GET/api/member/activity/itemGuide.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/api/member/activity/itemGuide.json',
      url: '/api/member/activity/itemGuide.json',
      method: 'GET',
      params,
      types: RequestTypes['GET/api/member/activity/itemGuide.json'],
    },
  }),

  /**
   * 接口名：转移计划信息
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6692&itf=77790
   */
  'GET/api/member/transfer.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/api/member/transfer.json',
      url: '/api/member/transfer.json',
      method: 'GET',
      params,
      types: RequestTypes['GET/api/member/transfer.json'],
    },
  }),

  /**
   * 接口名：新客任务
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6692&itf=79580
   */
  'GET/api/member/newGuestTask.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/api/member/newGuestTask.json',
      url: '/api/member/newGuestTask.json',
      method: 'GET',
      params,
      types: RequestTypes['GET/api/member/newGuestTask.json'],
    },
  }),

  /**
   * 接口名：获取账户及自动充值提醒
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6707&itf=67316
   */
  'GET/api/account/getAcctBalanceRemindSettingAutoRecharge.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/api/account/getAcctBalanceRemindSettingAutoRecharge.json',
      url: '/api/account/getAcctBalanceRemindSettingAutoRecharge.json',
      method: 'GET',
      params,
      types: RequestTypes['GET/api/account/getAcctBalanceRemindSettingAutoRecharge.json'],
    },
  }),

  /**
   * 接口名：查询支付宝账号是否完成代扣协议签约
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6707&itf=67323
   */
  'GET/api/account/getSignInfo.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/api/account/getSignInfo.json',
      url: '/api/account/getSignInfo.json',
      method: 'GET',
      params,
      types: RequestTypes['GET/api/account/getSignInfo.json'],
    },
  }),

  /**
   * 接口名：更新账户及自动充值设置
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6707&itf=67324
   */
  'PUT/api/account/modifyAcctBalanceRemindSettingAutoRecharge.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'PUT/api/account/modifyAcctBalanceRemindSettingAutoRecharge.json',
      url: '/api/account/modifyAcctBalanceRemindSettingAutoRecharge.json',
      method: 'PUT',
      params,
      types: RequestTypes['PUT/api/account/modifyAcctBalanceRemindSettingAutoRecharge.json'],
    },
  }),

  /**
   * 接口名：账户解约自动充值
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6707&itf=67330
   */
  'PUT/api/account/unsignAutoRecharge.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'PUT/api/account/unsignAutoRecharge.json',
      url: '/api/account/unsignAutoRecharge.json',
      method: 'PUT',
      params,
      types: RequestTypes['PUT/api/account/unsignAutoRecharge.json'],
    },
  }),

  /**
   * 接口名：查询账户流水
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6707&itf=67374
   */
  'GET/api/account/findItemList.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/api/account/findItemList.json',
      url: '/api/account/findItemList.json',
      method: 'GET',
      params,
      types: RequestTypes['GET/api/account/findItemList.json'],
    },
  }),

  /**
   * 接口名：下载账户流水
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6707&itf=67375
   */
  'GET/api/account/exportItemList.action': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/api/account/exportItemList.action',
      url: '/api/account/exportItemList.action',
      method: 'GET',
      params,
      types: RequestTypes['GET/api/account/exportItemList.action'],
    },
  }),

  /**
   * 接口名：优惠券
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6707&itf=67407
   */
  'GET/和钻展保持一致': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/和钻展保持一致',
      url: '和钻展保持一致',
      method: 'GET',
      params,
      types: RequestTypes['GET/和钻展保持一致'],
    },
  }),

  /**
   * 接口名：获取提醒设置（账户余额和计划预算）
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6707&itf=68995
   */
  'GET/api/account/findMessageRemindList.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/api/account/findMessageRemindList.json',
      url: '/api/account/findMessageRemindList.json',
      method: 'GET',
      params,
      types: RequestTypes['GET/api/account/findMessageRemindList.json'],
    },
  }),

  /**
   * 接口名：覆盖更新提醒设置
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6707&itf=69000
   */
  'POST/api/account/modifyAllMessageRemindList.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'POST/api/account/modifyAllMessageRemindList.json',
      url: '/api/account/modifyAllMessageRemindList.json',
      method: 'POST',
      params,
      types: RequestTypes['POST/api/account/modifyAllMessageRemindList.json'],
    },
  }),

  /**
   * 接口名：获取退款列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6707&itf=72837
   */
  'GET/api/account/getRefundList.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/api/account/getRefundList.json',
      url: '/api/account/getRefundList.json',
      method: 'GET',
      params,
      types: RequestTypes['GET/api/account/getRefundList.json'],
    },
  }),

  /**
   * 接口名：创建退款
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6707&itf=72838
   */
  'POST/api/account/createRefund.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'POST/api/account/createRefund.json',
      url: '/api/account/createRefund.json',
      method: 'POST',
      params,
      types: RequestTypes['POST/api/account/createRefund.json'],
    },
  }),

  /**
   * 接口名：退款校验
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6707&itf=72839
   */
  'GET/api/account/checkRefund.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/api/account/checkRefund.json',
      url: '/api/account/checkRefund.json',
      method: 'GET',
      params,
      types: RequestTypes['GET/api/account/checkRefund.json'],
    },
  }),

  /**
   * 接口名：【国际版】是否签署cae代扣协议
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6707&itf=72855
   */
  'GET/api/account/isSignGlobalAlipay.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/api/account/isSignGlobalAlipay.json',
      url: '/api/account/isSignGlobalAlipay.json',
      method: 'GET',
      params,
      types: RequestTypes['GET/api/account/isSignGlobalAlipay.json'],
    },
  }),

  /**
   * 接口名：【国际版】充值
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6707&itf=72857
   */
  'GET/api/account/charge.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/api/account/charge.json',
      url: '/api/account/charge.json',
      method: 'GET',
      params,
      types: RequestTypes['GET/api/account/charge.json'],
    },
  }),

  /**
   * 接口名：获取操作日志信息
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6707&itf=74120
   */
  'GET/api/log/findOperationLog.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/api/log/findOperationLog.json',
      url: '/api/log/findOperationLog.json',
      method: 'GET',
      params,
      types: RequestTypes['GET/api/log/findOperationLog.json'],
    },
  }),

  /**
   * 接口名：通过单元名称查询单元信息
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6707&itf=74341
   */
  'GET/api/log/findAdgroupByName.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/api/log/findAdgroupByName.json',
      url: '/api/log/findAdgroupByName.json',
      method: 'GET',
      params,
      types: RequestTypes['GET/api/log/findAdgroupByName.json'],
    },
  }),

  /**
   * 接口名：通过计划名称查询计划信息
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6707&itf=74342
   */
  'GET/api/log/findCampaignByName.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/api/log/findCampaignByName.json',
      url: '/api/log/findCampaignByName.json',
      method: 'GET',
      params,
      types: RequestTypes['GET/api/log/findCampaignByName.json'],
    },
  }),

  /**
   * 接口名：获取累计消耗
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6707&itf=76780
   */
  'GET/api/account/findAccumulateDeduct.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/api/account/findAccumulateDeduct.json',
      url: '/api/account/findAccumulateDeduct.json',
      method: 'GET',
      params,
      types: RequestTypes['GET/api/account/findAccumulateDeduct.json'],
    },
  }),

  /**
   * 接口名：发送短信验证码
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6708&itf=67327
   */
  'GET/api/message/sendMobileCode.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/api/message/sendMobileCode.json',
      url: '/api/message/sendMobileCode.json',
      method: 'GET',
      params,
      types: RequestTypes['GET/api/message/sendMobileCode.json'],
    },
  }),

  /**
   * 接口名：验证短信验证码
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6708&itf=67328
   */
  'POST/api/message/verifyMobilePhoneCode.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'POST/api/message/verifyMobilePhoneCode.json',
      url: '/api/message/verifyMobilePhoneCode.json',
      method: 'POST',
      params,
      types: RequestTypes['POST/api/message/verifyMobilePhoneCode.json'],
    },
  }),

  /**
   * 接口名：系统码表获取
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6711&itf=67372
   */
  'GET/api/common/findCodeList.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/api/common/findCodeList.json',
      url: '/api/common/findCodeList.json',
      method: 'GET',
      params,
      types: RequestTypes['GET/api/common/findCodeList.json'],
    },
  }),

  /**
   * 接口名：获取前端CDN版本
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6711&itf=67763
   */
  'GET/api/common/getVersion.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/api/common/getVersion.json',
      url: '/api/common/getVersion.json',
      method: 'GET',
      params,
      types: RequestTypes['GET/api/common/getVersion.json'],
    },
  }),

  /**
   * 接口名：获取组件元数据列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6712&itf=67393
   */
  'GET/api/component/findComponentMetaList.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/api/component/findComponentMetaList.json',
      url: '/api/component/findComponentMetaList.json',
      method: 'GET',
      params,
      types: RequestTypes['GET/api/component/findComponentMetaList.json'],
    },
  }),

  /**
   * 接口名：获取用户组建模板
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6712&itf=67395
   */
  'GET/api/component/findMemberTemplateList.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/api/component/findMemberTemplateList.json',
      url: '/api/component/findMemberTemplateList.json',
      method: 'GET',
      params,
      types: RequestTypes['GET/api/component/findMemberTemplateList.json'],
    },
  }),

  /**
   * 接口名：新增用户组件模板
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6712&itf=67396
   */
  'POST/api/component/addMemberTemplate.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'POST/api/component/addMemberTemplate.json',
      url: '/api/component/addMemberTemplate.json',
      method: 'POST',
      params,
      types: RequestTypes['POST/api/component/addMemberTemplate.json'],
    },
  }),

  /**
   * 接口名：修改用户组建模板
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6712&itf=67398
   */
  'PUT/api/component/updateMemberTemplate.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'PUT/api/component/updateMemberTemplate.json',
      url: '/api/component/updateMemberTemplate.json',
      method: 'PUT',
      params,
      types: RequestTypes['PUT/api/component/updateMemberTemplate.json'],
    },
  }),

  /**
   * 接口名：删除用户组建模板
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6712&itf=67399
   */
  'DELETE/api/component/deleteMemberTemplate.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'DELETE/api/component/deleteMemberTemplate.json',
      url: '/api/component/deleteMemberTemplate.json',
      method: 'DELETE',
      params,
      types: RequestTypes['DELETE/api/component/deleteMemberTemplate.json'],
    },
  }),

  /**
   * 接口名：✅【新】获取菜单列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6712&itf=80888
   */
  'GET/api/component/findMenuList.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/api/component/findMenuList.json',
      url: '/api/component/findMenuList.json',
      method: 'GET',
      params,
      types: RequestTypes['GET/api/component/findMenuList.json'],
    },
  }),

  /**
   * 接口名：✅【新】获取组件列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6712&itf=80943
   */
  'GET/api/component/findComponentList.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/api/component/findComponentList.json',
      url: '/api/component/findComponentList.json',
      method: 'GET',
      params,
      types: RequestTypes['GET/api/component/findComponentList.json'],
    },
  }),

  /**
   * 接口名：【报表】账户分时汇总
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6752&itf=67459
   */
  'GET/api/account/report/findHourSum.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/api/account/report/findHourSum.json',
      url: '/api/account/report/findHourSum.json',
      method: 'GET',
      params,
      types: RequestTypes['GET/api/account/report/findHourSum.json'],
    },
  }),

  /**
   * 接口名：【报表】账户分时列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6752&itf=67344
   */
  'GET/api/account/report/findHourList.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/api/account/report/findHourList.json',
      url: '/api/account/report/findHourList.json',
      method: 'GET',
      params,
      types: RequestTypes['GET/api/account/report/findHourList.json'],
    },
  }),

  /**
   * 接口名：【报表】账户整体分日汇总
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6752&itf=67472
   */
  'GET/api/account/report/findDaySum.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/api/account/report/findDaySum.json',
      url: '/api/account/report/findDaySum.json',
      method: 'GET',
      params,
      types: RequestTypes['GET/api/account/report/findDaySum.json'],
    },
  }),

  /**
   * 接口名：【报表】账户整体分日列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6752&itf=67475
   */
  'GET/api/account/report/findDayList.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/api/account/report/findDayList.json',
      url: '/api/account/report/findDayList.json',
      method: 'GET',
      params,
      types: RequestTypes['GET/api/account/report/findDayList.json'],
    },
  }),

  /**
   * 接口名：【 报表】计划分页列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6752&itf=67623
   */
  'GET/api/campaign/report/findPage.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/api/campaign/report/findPage.json',
      url: '/api/campaign/report/findPage.json',
      method: 'GET',
      params,
      types: RequestTypes['GET/api/campaign/report/findPage.json'],
    },
  }),

  /**
   * 接口名：【报表】单个计划报表： 列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6752&itf=67480
   */
  'GET/api/campaign/report/findList.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/api/campaign/report/findList.json',
      url: '/api/campaign/report/findList.json',
      method: 'GET',
      params,
      types: RequestTypes['GET/api/campaign/report/findList.json'],
    },
  }),

  /**
   * 接口名：【报表】单个计划报表：汇总
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6752&itf=67481
   */
  'GET/api/campaign/report/findSum.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/api/campaign/report/findSum.json',
      url: '/api/campaign/report/findSum.json',
      method: 'GET',
      params,
      types: RequestTypes['GET/api/campaign/report/findSum.json'],
    },
  }),

  /**
   * 接口名：【报表】单元分页列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6752&itf=67621
   */
  'GET/api/adgroup/report/findPage.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/api/adgroup/report/findPage.json',
      url: '/api/adgroup/report/findPage.json',
      method: 'GET',
      params,
      types: RequestTypes['GET/api/adgroup/report/findPage.json'],
    },
  }),

  /**
   * 接口名：【报表】单个单元报表： 列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6752&itf=67486
   */
  'GET/api/adgroup/report/findList.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/api/adgroup/report/findList.json',
      url: '/api/adgroup/report/findList.json',
      method: 'GET',
      params,
      types: RequestTypes['GET/api/adgroup/report/findList.json'],
    },
  }),

  /**
   * 接口名：【报表】单个单元报表：汇总
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6752&itf=67487
   */
  'GET/api/adgroup/report/findSum.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/api/adgroup/report/findSum.json',
      url: '/api/adgroup/report/findSum.json',
      method: 'GET',
      params,
      types: RequestTypes['GET/api/adgroup/report/findSum.json'],
    },
  }),

  /**
   * 接口名：【报表】创意分页列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6752&itf=67639
   */
  'GET/api/creative/report/findPage.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/api/creative/report/findPage.json',
      url: '/api/creative/report/findPage.json',
      method: 'GET',
      params,
      types: RequestTypes['GET/api/creative/report/findPage.json'],
    },
  }),

  /**
   * 接口名：【报表】单个创意报表： 列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6752&itf=69359
   */
  'GET/api/creative/report/findList.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/api/creative/report/findList.json',
      url: '/api/creative/report/findList.json',
      method: 'GET',
      params,
      types: RequestTypes['GET/api/creative/report/findList.json'],
    },
  }),

  /**
   * 接口名：【报表】单个创意报表： 汇总
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6752&itf=69360
   */
  'GET/api/creative/report/findSum.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/api/creative/report/findSum.json',
      url: '/api/creative/report/findSum.json',
      method: 'GET',
      params,
      types: RequestTypes['GET/api/creative/report/findSum.json'],
    },
  }),

  /**
   * 接口名：【报表】定向分页列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6752&itf=67637
   */
  'GET/api/crowd/report/findPage.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/api/crowd/report/findPage.json',
      url: '/api/crowd/report/findPage.json',
      method: 'GET',
      params,
      types: RequestTypes['GET/api/crowd/report/findPage.json'],
    },
  }),

  /**
   * 接口名：【报表】单个定向报表： 列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6752&itf=69469
   */
  'GET/api/crowd/report/findList.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/api/crowd/report/findList.json',
      url: '/api/crowd/report/findList.json',
      method: 'GET',
      params,
      types: RequestTypes['GET/api/crowd/report/findList.json'],
    },
  }),

  /**
   * 接口名：【报表】单个定向报表： 汇总
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6752&itf=69470
   */
  'GET/api/crowd/report/findSum.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/api/crowd/report/findSum.json',
      url: '/api/crowd/report/findSum.json',
      method: 'GET',
      params,
      types: RequestTypes['GET/api/crowd/report/findSum.json'],
    },
  }),

  /**
   * 接口名：【报表】资源位分页列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6752&itf=67622
   */
  'GET/api/adzone/report/findPage.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/api/adzone/report/findPage.json',
      url: '/api/adzone/report/findPage.json',
      method: 'GET',
      params,
      types: RequestTypes['GET/api/adzone/report/findPage.json'],
    },
  }),

  /**
   * 接口名：【报表】单个资源位报表： 列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6752&itf=69472
   */
  'GET/api/adzone/report/findList.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/api/adzone/report/findList.json',
      url: '/api/adzone/report/findList.json',
      method: 'GET',
      params,
      types: RequestTypes['GET/api/adzone/report/findList.json'],
    },
  }),

  /**
   * 接口名：【报表】单个资源位报表： 汇总
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6752&itf=69471
   */
  'GET/api/adzone/report/findSum.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/api/adzone/report/findSum.json',
      url: '/api/adzone/report/findSum.json',
      method: 'GET',
      params,
      types: RequestTypes['GET/api/adzone/report/findSum.json'],
    },
  }),

  /**
   * 接口名：【报表】账户概览：人群整体分日汇总
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6752&itf=79815
   */
  'GET/api/account/report/findCrowdDaySum.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/api/account/report/findCrowdDaySum.json',
      url: '/api/account/report/findCrowdDaySum.json',
      method: 'GET',
      params,
      types: RequestTypes['GET/api/account/report/findCrowdDaySum.json'],
    },
  }),

  /**
   * 接口名：【报表】账户概览：人群整体分日列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6752&itf=79816
   */
  'GET/api/account/report/findCrowdDayList.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/api/account/report/findCrowdDayList.json',
      url: '/api/account/report/findCrowdDayList.json',
      method: 'GET',
      params,
      types: RequestTypes['GET/api/account/report/findCrowdDayList.json'],
    },
  }),

  /**
   * 接口名：【报表】账户概览：宝贝分页列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6752&itf=79817
   */
  'GET/api/material/report/findItemPage.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/api/material/report/findItemPage.json',
      url: '/api/material/report/findItemPage.json',
      method: 'GET',
      params,
      types: RequestTypes['GET/api/material/report/findItemPage.json'],
    },
  }),

  /**
   * 接口名：【报表】双十一活动报表-消费者触达
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6752&itf=82974
   */
  'GET/api/activity/report/consumerReach.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/api/activity/report/consumerReach.json',
      url: '/api/activity/report/consumerReach.json',
      method: 'GET',
      params,
      types: RequestTypes['GET/api/activity/report/consumerReach.json'],
    },
  }),

  /**
   * 接口名：【报表】账户分时列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7005&itf=69611
   */
  'GET/api/account/report/exportHourList.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/api/account/report/exportHourList.json',
      url: '/api/account/report/exportHourList.json',
      method: 'GET',
      params,
      types: RequestTypes['GET/api/account/report/exportHourList.json'],
    },
  }),

  /**
   * 接口名：【报表】账户整体分日列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7005&itf=69612
   */
  'GET/api/account/report/exportDayList.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/api/account/report/exportDayList.json',
      url: '/api/account/report/exportDayList.json',
      method: 'GET',
      params,
      types: RequestTypes['GET/api/account/report/exportDayList.json'],
    },
  }),

  /**
   * 接口名：【 报表】计划报表下载
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7005&itf=69614
   */
  'GET/api/campaign/report/exportCampaign.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/api/campaign/report/exportCampaign.json',
      url: '/api/campaign/report/exportCampaign.json',
      method: 'GET',
      params,
      types: RequestTypes['GET/api/campaign/report/exportCampaign.json'],
    },
  }),

  /**
   * 接口名：【报表】单个计划报表： 列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7005&itf=69615
   */
  'GET/api/campaign/report/exportDayOrHourList.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/api/campaign/report/exportDayOrHourList.json',
      url: '/api/campaign/report/exportDayOrHourList.json',
      method: 'GET',
      params,
      types: RequestTypes['GET/api/campaign/report/exportDayOrHourList.json'],
    },
  }),

  /**
   * 接口名：【报表】单个计划报表：汇总
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7005&itf=69616
   */
  'GET/api/campaign/report/exportDayOrHourSum.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/api/campaign/report/exportDayOrHourSum.json',
      url: '/api/campaign/report/exportDayOrHourSum.json',
      method: 'GET',
      params,
      types: RequestTypes['GET/api/campaign/report/exportDayOrHourSum.json'],
    },
  }),

  /**
   * 接口名：【报表】单元报表下载
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7005&itf=69617
   */
  'GET/api/adgroup/report/exportAdgroup.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/api/adgroup/report/exportAdgroup.json',
      url: '/api/adgroup/report/exportAdgroup.json',
      method: 'GET',
      params,
      types: RequestTypes['GET/api/adgroup/report/exportAdgroup.json'],
    },
  }),

  /**
   * 接口名：【报表】单个单元报表： 列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7005&itf=69618
   */
  'GET/api/adgroup/report/exportDayOrHourList.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/api/adgroup/report/exportDayOrHourList.json',
      url: '/api/adgroup/report/exportDayOrHourList.json',
      method: 'GET',
      params,
      types: RequestTypes['GET/api/adgroup/report/exportDayOrHourList.json'],
    },
  }),

  /**
   * 接口名：【报表】单个单元报表：汇总
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7005&itf=69619
   */
  'GET/api/adgroup/report/exportDayOrHourSum.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/api/adgroup/report/exportDayOrHourSum.json',
      url: '/api/adgroup/report/exportDayOrHourSum.json',
      method: 'GET',
      params,
      types: RequestTypes['GET/api/adgroup/report/exportDayOrHourSum.json'],
    },
  }),

  /**
   * 接口名：【报表】创意下载
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7005&itf=69620
   */
  'GET/api/creative/report/exportCreative.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/api/creative/report/exportCreative.json',
      url: '/api/creative/report/exportCreative.json',
      method: 'GET',
      params,
      types: RequestTypes['GET/api/creative/report/exportCreative.json'],
    },
  }),

  /**
   * 接口名：【报表】单个创意报表： 列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7005&itf=69622
   */
  'GET/api/creative/report/exportDayOrHourList.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/api/creative/report/exportDayOrHourList.json',
      url: '/api/creative/report/exportDayOrHourList.json',
      method: 'GET',
      params,
      types: RequestTypes['GET/api/creative/report/exportDayOrHourList.json'],
    },
  }),

  /**
   * 接口名：【报表】单个创意报表： 汇总
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7005&itf=69623
   */
  'GET/api/creative/report/exportDayOrHourSum.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/api/creative/report/exportDayOrHourSum.json',
      url: '/api/creative/report/exportDayOrHourSum.json',
      method: 'GET',
      params,
      types: RequestTypes['GET/api/creative/report/exportDayOrHourSum.json'],
    },
  }),

  /**
   * 接口名：【报表】定向下载
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7005&itf=69624
   */
  'GET/api/crowd/report/exportCrowd.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/api/crowd/report/exportCrowd.json',
      url: '/api/crowd/report/exportCrowd.json',
      method: 'GET',
      params,
      types: RequestTypes['GET/api/crowd/report/exportCrowd.json'],
    },
  }),

  /**
   * 接口名：【报表】单个定向报表： 列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7005&itf=69625
   */
  'GET/api/crowd/report/exportDayOrHourList.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/api/crowd/report/exportDayOrHourList.json',
      url: '/api/crowd/report/exportDayOrHourList.json',
      method: 'GET',
      params,
      types: RequestTypes['GET/api/crowd/report/exportDayOrHourList.json'],
    },
  }),

  /**
   * 接口名：【报表】单个定向报表： 汇总
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7005&itf=69626
   */
  'GET/api/crowd/report/exportDayOrHourSum.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/api/crowd/report/exportDayOrHourSum.json',
      url: '/api/crowd/report/exportDayOrHourSum.json',
      method: 'GET',
      params,
      types: RequestTypes['GET/api/crowd/report/exportDayOrHourSum.json'],
    },
  }),

  /**
   * 接口名：【报表】资源位下载
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7005&itf=69627
   */
  'GET/api/adzone/report/exportAdzone.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/api/adzone/report/exportAdzone.json',
      url: '/api/adzone/report/exportAdzone.json',
      method: 'GET',
      params,
      types: RequestTypes['GET/api/adzone/report/exportAdzone.json'],
    },
  }),

  /**
   * 接口名：【报表】单个资源位报表： 列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7005&itf=69628
   */
  'GET/api/adzone/report/exportDayOrHourList.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/api/adzone/report/exportDayOrHourList.json',
      url: '/api/adzone/report/exportDayOrHourList.json',
      method: 'GET',
      params,
      types: RequestTypes['GET/api/adzone/report/exportDayOrHourList.json'],
    },
  }),

  /**
   * 接口名：【报表】单个资源位报表： 汇总
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7005&itf=69629
   */
  'GET/api/adzone/report/exportDayOrHourSum.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/api/adzone/report/exportDayOrHourSum.json',
      url: '/api/adzone/report/exportDayOrHourSum.json',
      method: 'GET',
      params,
      types: RequestTypes['GET/api/adzone/report/exportDayOrHourSum.json'],
    },
  }),

  /**
   * 接口名：【报表】账户概览：宝贝分页列表下载
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7005&itf=79824
   */
  'GET/api/material/report/exportItem.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/api/material/report/exportItem.json',
      url: '/api/material/report/exportItem.json',
      method: 'GET',
      params,
      types: RequestTypes['GET/api/material/report/exportItem.json'],
    },
  }),

  /**
   * 接口名：【报表】账户概览：人群整体分日列表下载
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7005&itf=80230
   */
  'GET/api/account/report/exportCrowdDayList.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/api/account/report/exportCrowdDayList.json',
      url: '/api/account/report/exportCrowdDayList.json',
      method: 'GET',
      params,
      types: RequestTypes['GET/api/account/report/exportCrowdDayList.json'],
    },
  }),

  /**
   * 接口名：查询站内信列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7037&itf=69919
   */
  'GET/api/message/findLetterList.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/api/message/findLetterList.json',
      url: '/api/message/findLetterList.json',
      method: 'GET',
      params,
      types: RequestTypes['GET/api/message/findLetterList.json'],
    },
  }),

  /**
   * 接口名：查看站内信
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7037&itf=69920
   */
  'GET/api/message/getLetterDetail.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/api/message/getLetterDetail.json',
      url: '/api/message/getLetterDetail.json',
      method: 'GET',
      params,
      types: RequestTypes['GET/api/message/getLetterDetail.json'],
    },
  }),

  /**
   * 接口名：批量已读站内信
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7037&itf=70115
   */
  'POST/api/message/batchReadLetters.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'POST/api/message/batchReadLetters.json',
      url: '/api/message/batchReadLetters.json',
      method: 'POST',
      params,
      types: RequestTypes['POST/api/message/batchReadLetters.json'],
    },
  }),

  /**
   * 接口名：消费者汇总卡片
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7107&itf=70493
   */
  'GET/api/report/consumer/findSummary.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/api/report/consumer/findSummary.json',
      url: '/api/report/consumer/findSummary.json',
      method: 'GET',
      params,
      types: RequestTypes['GET/api/report/consumer/findSummary.json'],
    },
  }),

  /**
   * 接口名：消费者流转
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7107&itf=70497
   */
  'GET/api/report/consumer/findConsumerCirculation.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/api/report/consumer/findConsumerCirculation.json',
      url: '/api/report/consumer/findConsumerCirculation.json',
      method: 'GET',
      params,
      types: RequestTypes['GET/api/report/consumer/findConsumerCirculation.json'],
    },
  }),

  /**
   * 接口名：粉丝汇总卡片
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7167&itf=70935
   */
  'GET/api/report/fans/findSummary.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/api/report/fans/findSummary.json',
      url: '/api/report/fans/findSummary.json',
      method: 'GET',
      params,
      types: RequestTypes['GET/api/report/fans/findSummary.json'],
    },
  }),

  /**
   * 接口名：粉丝流转
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7167&itf=70962
   */
  'GET/api/report/fans/findCirculation.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/api/report/fans/findCirculation.json',
      url: '/api/report/fans/findCirculation.json',
      method: 'GET',
      params,
      types: RequestTypes['GET/api/report/fans/findCirculation.json'],
    },
  }),

  /**
   * 接口名：查询直钻迁移计划
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7473&itf=73258
   */
  'GET/api/campaign/findTransferPage.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/api/campaign/findTransferPage.json',
      url: '/api/campaign/findTransferPage.json',
      method: 'GET',
      params,
      types: RequestTypes['GET/api/campaign/findTransferPage.json'],
    },
  }),

  /**
   * 接口名：迁移完成
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7473&itf=73370
   */
  'POST/api/campaign/transfer.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'POST/api/campaign/transfer.json',
      url: '/api/campaign/transfer.json',
      method: 'POST',
      params,
      types: RequestTypes['POST/api/campaign/transfer.json'],
    },
  }),

  /**
   * 接口名：活动整体分日汇总
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7723&itf=75133
   */
  'GET/api/activity/report/findDaySum.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/api/activity/report/findDaySum.json',
      url: '/api/activity/report/findDaySum.json',
      method: 'GET',
      params,
      types: RequestTypes['GET/api/activity/report/findDaySum.json'],
    },
  }),

  /**
   * 接口名：活动整体分日列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7723&itf=75150
   */
  'GET/api/activity/report/findDayList.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/api/activity/report/findDayList.json',
      url: '/api/activity/report/findDayList.json',
      method: 'GET',
      params,
      types: RequestTypes['GET/api/activity/report/findDayList.json'],
    },
  }),

  /**
   * 接口名：活动人群整体分日汇总
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7723&itf=75151
   */
  'GET/api/activity/report/findCrowdDaySum.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/api/activity/report/findCrowdDaySum.json',
      url: '/api/activity/report/findCrowdDaySum.json',
      method: 'GET',
      params,
      types: RequestTypes['GET/api/activity/report/findCrowdDaySum.json'],
    },
  }),

  /**
   * 接口名：活动人群整体分日报表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7723&itf=75152
   */
  'GET/api/activity/report/findCrowdDayList.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/api/activity/report/findCrowdDayList.json',
      url: '/api/activity/report/findCrowdDayList.json',
      method: 'GET',
      params,
      types: RequestTypes['GET/api/activity/report/findCrowdDayList.json'],
    },
  }),

  /**
   * 接口名：活动宝贝分页列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7723&itf=75153
   */
  'GET/api/activity/report/findItemPage.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/api/activity/report/findItemPage.json',
      url: '/api/activity/report/findItemPage.json',
      method: 'GET',
      params,
      types: RequestTypes['GET/api/activity/report/findItemPage.json'],
    },
  }),

  /**
   * 接口名：活动整体分日列表下载
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7723&itf=75164
   */
  'GET/api/activity/report/exportDayList.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/api/activity/report/exportDayList.json',
      url: '/api/activity/report/exportDayList.json',
      method: 'GET',
      params,
      types: RequestTypes['GET/api/activity/report/exportDayList.json'],
    },
  }),

  /**
   * 接口名：活动人群整体分日报表下载
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7723&itf=75165
   */
  'GET/api/activity/report/exportCrowdDayList.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/api/activity/report/exportCrowdDayList.json',
      url: '/api/activity/report/exportCrowdDayList.json',
      method: 'GET',
      params,
      types: RequestTypes['GET/api/activity/report/exportCrowdDayList.json'],
    },
  }),

  /**
   * 接口名：活动宝贝列表下载
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7723&itf=75166
   */
  'GET/api/activity/report/exportItem.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/api/activity/report/exportItem.json',
      url: '/api/activity/report/exportItem.json',
      method: 'GET',
      params,
      types: RequestTypes['GET/api/activity/report/exportItem.json'],
    },
  }),

  /**
   * 接口名：618活动接口迁移到日常接口的map
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7723&itf=79825
   */
  'GET/map': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/map',
      url: '/map',
      method: 'GET',
      params,
      types: RequestTypes['GET/map'],
    },
  }),

  /**
   * 接口名：结案-计划投放效果
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7789&itf=75586
   */
  'GET/api/report/case/findCampaignDaySum.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/api/report/case/findCampaignDaySum.json',
      url: '/api/report/case/findCampaignDaySum.json',
      method: 'GET',
      params,
      types: RequestTypes['GET/api/report/case/findCampaignDaySum.json'],
    },
  }),

  /**
   * 接口名：结案-商品明细分析
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7789&itf=75587
   */
  'GET/api/report/case/findItemSumList.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/api/report/case/findItemSumList.json',
      url: '/api/report/case/findItemSumList.json',
      method: 'GET',
      params,
      types: RequestTypes['GET/api/report/case/findItemSumList.json'],
    },
  }),

  /**
   * 接口名：结案-商品整体趋势
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7789&itf=75588
   */
  'GET/api/report/case/findItemTrendDayList.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/api/report/case/findItemTrendDayList.json',
      url: '/api/report/case/findItemTrendDayList.json',
      method: 'GET',
      params,
      types: RequestTypes['GET/api/report/case/findItemTrendDayList.json'],
    },
  }),

  /**
   * 接口名：【已有接口】查询新品计划列表 /api/campaign/findList.json
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7789&itf=75590
   */
  'GET/findList.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/findList.json',
      url: 'findList.json',
      method: 'GET',
      params,
      types: RequestTypes['GET/findList.json'],
    },
  }),

  /**
   * 接口名：结案-查询商品对比曲线
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7789&itf=77755
   */
  'GET/api/report/case/findFeedShopItemAllListComp.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/api/report/case/findFeedShopItemAllListComp.json',
      url: '/api/report/case/findFeedShopItemAllListComp.json',
      method: 'GET',
      params,
      types: RequestTypes['GET/api/report/case/findFeedShopItemAllListComp.json'],
    },
  }),

  /**
   * 接口名：查询计划绑定的定向列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7935&itf=76654
   */
  'GET/api/campaign/crowd/findList.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/api/campaign/crowd/findList.json',
      url: '/api/campaign/crowd/findList.json',
      method: 'GET',
      params,
      types: RequestTypes['GET/api/campaign/crowd/findList.json'],
    },
  }),

  /**
   * 接口名：修改计划绑定定向
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7935&itf=76656
   */
  'PUT/api/campaign/crowd/modify.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'PUT/api/campaign/crowd/modify.json',
      url: '/api/campaign/crowd/modify.json',
      method: 'PUT',
      params,
      types: RequestTypes['PUT/api/campaign/crowd/modify.json'],
    },
  }),

  /**
   * 接口名：一键创建推广计划单环
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7956&itf=76782
   */
  'POST/api/solution/add.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'POST/api/solution/add.json',
      url: '/api/solution/add.json',
      method: 'POST',
      params,
      types: RequestTypes['POST/api/solution/add.json'],
    },
  }),

  /**
   * 接口名：分页获取商品列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7956&itf=70821
   */
  'GET/api/material/item/findPage.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/api/material/item/findPage.json',
      url: '/api/material/item/findPage.json',
      method: 'GET',
      params,
      types: RequestTypes['GET/api/material/item/findPage.json'],
    },
  }),

  /**
   * 接口名：是否可使用一键推广
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7956&itf=77116
   */
  'GET/api/solution/allowPromotion.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/api/solution/allowPromotion.json',
      url: '/api/solution/allowPromotion.json',
      method: 'GET',
      params,
      types: RequestTypes['GET/api/solution/allowPromotion.json'],
    },
  }),

  /**
   * 接口名：批量一键创建
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7956&itf=77594
   */
  'POST/api/solution/batchAdd.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'POST/api/solution/batchAdd.json',
      url: '/api/solution/batchAdd.json',
      method: 'POST',
      params,
      types: RequestTypes['POST/api/solution/batchAdd.json'],
    },
  }),

  /**
   * 接口名：查询定向标签不分页
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=8120&itf=68423
   */
  'GET/api/target/findLabelList.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/api/target/findLabelList.json',
      url: '/api/target/findLabelList.json',
      method: 'GET',
      params,
      types: RequestTypes['GET/api/target/findLabelList.json'],
    },
  }),

  /**
   * 接口名：查询类目精选的类目列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=8120&itf=78707
   */
  'GET/api/target/findSelectionCategoryList.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/api/target/findSelectionCategoryList.json',
      url: '/api/target/findSelectionCategoryList.json',
      method: 'GET',
      params,
      types: RequestTypes['GET/api/target/findSelectionCategoryList.json'],
    },
  }),

  /**
   * 接口名：账户充值
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=8524&itf=67373
   */
  'GET/api/account/recharge.action': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/api/account/recharge.action',
      url: '/api/account/recharge.action',
      method: 'GET',
      params,
      types: RequestTypes['GET/api/account/recharge.action'],
    },
  }),

  /**
   * 接口名：获取账户详情
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=8524&itf=67468
   */
  'GET/api/account/getInfo.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/api/account/getInfo.json',
      url: '/api/account/getInfo.json',
      method: 'GET',
      params,
      types: RequestTypes['GET/api/account/getInfo.json'],
    },
  }),

  /**
   * 接口名：【接口优化】新建单元
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=8524&itf=78321
   */
  'POST/api/adgroup/batchAdd.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'POST/api/adgroup/batchAdd.json',
      url: '/api/adgroup/batchAdd.json',
      method: 'POST',
      params,
      types: RequestTypes['POST/api/adgroup/batchAdd.json'],
    },
  }),

  /**
   * 接口名：盘量接口(待定)
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=8524&itf=80936
   */
  'POST/api/campaign/estimateContractPv.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'POST/api/campaign/estimateContractPv.json',
      url: '/api/campaign/estimateContractPv.json',
      method: 'POST',
      params,
      types: RequestTypes['POST/api/campaign/estimateContractPv.json'],
    },
  }),

  /**
   * 接口名：锁量接口
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=8524&itf=84599
   */
  'POST/api/algotool/lockQuantity.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'POST/api/algotool/lockQuantity.json',
      url: '/api/algotool/lockQuantity.json',
      method: 'POST',
      params,
      types: RequestTypes['POST/api/algotool/lockQuantity.json'],
    },
  }),

  /**
   * 接口名：【管理】查询定向列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=8828&itf=68386
   */
  'GET/api/crowd/findPage.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/api/crowd/findPage.json',
      url: '/api/crowd/findPage.json',
      method: 'GET',
      params,
      types: RequestTypes['GET/api/crowd/findPage.json'],
    },
  }),

  /**
   * 接口名：查询预算模拟器
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=8828&itf=83281
   */
  'POST/api/algotool/getBudgetSimulator.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'POST/api/algotool/getBudgetSimulator.json',
      url: '/api/algotool/getBudgetSimulator.json',
      method: 'POST',
      params,
      types: RequestTypes['POST/api/algotool/getBudgetSimulator.json'],
    },
  }),

  /**
   * 接口名：新建推广计划
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=8828&itf=67209
   */
  'POST/api/campaign/add.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'POST/api/campaign/add.json',
      url: '/api/campaign/add.json',
      method: 'POST',
      params,
      types: RequestTypes['POST/api/campaign/add.json'],
    },
  }),

  /**
   * 接口名：分页获取单元列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=8828&itf=67275
   */
  'GET/api/adgroup/findPage.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/api/adgroup/findPage.json',
      url: '/api/adgroup/findPage.json',
      method: 'GET',
      params,
      types: RequestTypes['GET/api/adgroup/findPage.json'],
    },
  }),

  /**
   * 接口名：全量修改计划信息
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=8828&itf=67338
   */
  'PUT/api/campaign/modEntire.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'PUT/api/campaign/modEntire.json',
      url: '/api/campaign/modEntire.json',
      method: 'PUT',
      params,
      types: RequestTypes['PUT/api/campaign/modEntire.json'],
    },
  }),

  /**
   * 接口名：智能人群探索
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=8828&itf=83321
   */
  'GET/api/algotool/probeInterest.json': params => ({
    type: '$$RAPPER_REQUEST',
    payload: {
      modelName: 'GET/api/algotool/probeInterest.json',
      url: '/api/algotool/probeInterest.json',
      method: 'GET',
      params,
      types: RequestTypes['GET/api/algotool/probeInterest.json'],
    },
  }),
}

/** store中存储的数据结构 */
interface RapperStore {
  $$rapperResponseData: {
    'GET/readme/campaign': Array<{
      request: Models['GET/readme/campaign']['Req']
      response: Models['GET/readme/campaign']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/api/campaign/default.json': Array<{
      request: Models['GET/api/campaign/default.json']['Req']
      response: Models['GET/api/campaign/default.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/api/campaign/get.json': Array<{
      request: Models['GET/api/campaign/get.json']['Req']
      response: Models['GET/api/campaign/get.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/api/campaign/getSettleInfo.json': Array<{
      request: Models['GET/api/campaign/getSettleInfo.json']['Req']
      response: Models['GET/api/campaign/getSettleInfo.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/api/campaign/findList.json': Array<{
      request: Models['GET/api/campaign/findList.json']['Req']
      response: Models['GET/api/campaign/findList.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/api/campaign/findPage.json': Array<{
      request: Models['GET/api/campaign/findPage.json']['Req']
      response: Models['GET/api/campaign/findPage.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/api/campaign/findDraftList.json': Array<{
      request: Models['GET/api/campaign/findDraftList.json']['Req']
      response: Models['GET/api/campaign/findDraftList.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'DELETE/api/campaign/delete.json': Array<{
      request: Models['DELETE/api/campaign/delete.json']['Req']
      response: Models['DELETE/api/campaign/delete.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'POST/api/campaign/clone.json': Array<{
      request: Models['POST/api/campaign/clone.json']['Req']
      response: Models['POST/api/campaign/clone.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'PUT/api/campaign/updateCampaignBudgetRemindSetting.json': Array<{
      request: Models['PUT/api/campaign/updateCampaignBudgetRemindSetting.json']['Req']
      response: Models['PUT/api/campaign/updateCampaignBudgetRemindSetting.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/api/campaign/getCampaignBudgetRemindSetting.json': Array<{
      request: Models['GET/api/campaign/getCampaignBudgetRemindSetting.json']['Req']
      response: Models['GET/api/campaign/getCampaignBudgetRemindSetting.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'PUT/api/campaign/batchModify.json': Array<{
      request: Models['PUT/api/campaign/batchModify.json']['Req']
      response: Models['PUT/api/campaign/batchModify.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'PUT/api/campaign/complete.json': Array<{
      request: Models['PUT/api/campaign/complete.json']['Req']
      response: Models['PUT/api/campaign/complete.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'PUT/api/campaign/setTop.json': Array<{
      request: Models['PUT/api/campaign/setTop.json']['Req']
      response: Models['PUT/api/campaign/setTop.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/api/campaign/validCount.json': Array<{
      request: Models['GET/api/campaign/validCount.json']['Req']
      response: Models['GET/api/campaign/validCount.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/api/campaign/findDayBudgetSum.json': Array<{
      request: Models['GET/api/campaign/findDayBudgetSum.json']['Req']
      response: Models['GET/api/campaign/findDayBudgetSum.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/api/campaign/displayConfig.json': Array<{
      request: Models['GET/api/campaign/displayConfig.json']['Req']
      response: Models['GET/api/campaign/displayConfig.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/api/campaign/modifyConfig.json': Array<{
      request: Models['GET/api/campaign/modifyConfig.json']['Req']
      response: Models['GET/api/campaign/modifyConfig.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'PUT/api/campaign/activity/transfer.json': Array<{
      request: Models['PUT/api/campaign/activity/transfer.json']['Req']
      response: Models['PUT/api/campaign/activity/transfer.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'PUT/api/campaign/transferScene.json': Array<{
      request: Models['PUT/api/campaign/transferScene.json']['Req']
      response: Models['PUT/api/campaign/transferScene.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'PUT/api/campaign/activity/transferPhase.json': Array<{
      request: Models['PUT/api/campaign/activity/transferPhase.json']['Req']
      response: Models['PUT/api/campaign/activity/transferPhase.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/api/target/getRemarketingCoverage.json': Array<{
      request: Models['GET/api/target/getRemarketingCoverage.json']['Req']
      response: Models['GET/api/target/getRemarketingCoverage.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'POST/api/adgroup/add.json': Array<{
      request: Models['POST/api/adgroup/add.json']['Req']
      response: Models['POST/api/adgroup/add.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/api/adgroup/default.json': Array<{
      request: Models['GET/api/adgroup/default.json']['Req']
      response: Models['GET/api/adgroup/default.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/api/adgroup/get.json': Array<{
      request: Models['GET/api/adgroup/get.json']['Req']
      response: Models['GET/api/adgroup/get.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/api/adgroup/findList.json': Array<{
      request: Models['GET/api/adgroup/findList.json']['Req']
      response: Models['GET/api/adgroup/findList.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'DELETE/api/adgroup/batchDelete.json': Array<{
      request: Models['DELETE/api/adgroup/batchDelete.json']['Req']
      response: Models['DELETE/api/adgroup/batchDelete.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'POST/api/adgroup/clone.json': Array<{
      request: Models['POST/api/adgroup/clone.json']['Req']
      response: Models['POST/api/adgroup/clone.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'PUT/api/adgroup/batchModEntire.json': Array<{
      request: Models['PUT/api/adgroup/batchModEntire.json']['Req']
      response: Models['PUT/api/adgroup/batchModEntire.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'PUT/api/adgroup/batchModifyPart.json': Array<{
      request: Models['PUT/api/adgroup/batchModifyPart.json']['Req']
      response: Models['PUT/api/adgroup/batchModifyPart.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/api/adgroup/qualityScore/findList.json': Array<{
      request: Models['GET/api/adgroup/qualityScore/findList.json']['Req']
      response: Models['GET/api/adgroup/qualityScore/findList.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/api/adgroup/qualityScore/findHisList.json': Array<{
      request: Models['GET/api/adgroup/qualityScore/findHisList.json']['Req']
      response: Models['GET/api/adgroup/qualityScore/findHisList.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'PUT/api/adgroup/batchModify.json': Array<{
      request: Models['PUT/api/adgroup/batchModify.json']['Req']
      response: Models['PUT/api/adgroup/batchModify.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/api/adgroup/qualityScore/findQueryCondition.json': Array<{
      request: Models['GET/api/adgroup/qualityScore/findQueryCondition.json']['Req']
      response: Models['GET/api/adgroup/qualityScore/findQueryCondition.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/api/adgroup/findCampaignAndAdgroupList.json': Array<{
      request: Models['GET/api/adgroup/findCampaignAndAdgroupList.json']['Req']
      response: Models['GET/api/adgroup/findCampaignAndAdgroupList.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'PUT/api/adgroup/useSystemCreative.json': Array<{
      request: Models['PUT/api/adgroup/useSystemCreative.json']['Req']
      response: Models['PUT/api/adgroup/useSystemCreative.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'PUT/api/adgroup/batchModifyEntire.json': Array<{
      request: Models['PUT/api/adgroup/batchModifyEntire.json']['Req']
      response: Models['PUT/api/adgroup/batchModifyEntire.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'PUT/api/adgroup/batchModifyPrice.json': Array<{
      request: Models['PUT/api/adgroup/batchModifyPrice.json']['Req']
      response: Models['PUT/api/adgroup/batchModifyPrice.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'POST/api/creative/batchAddAndBind.json': Array<{
      request: Models['POST/api/creative/batchAddAndBind.json']['Req']
      response: Models['POST/api/creative/batchAddAndBind.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'PUT/api/creative/batchUnbind.json': Array<{
      request: Models['PUT/api/creative/batchUnbind.json']['Req']
      response: Models['PUT/api/creative/batchUnbind.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/api/creative/recommend.json': Array<{
      request: Models['GET/api/creative/recommend.json']['Req']
      response: Models['GET/api/creative/recommend.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/api/creative/findPage.json': Array<{
      request: Models['GET/api/creative/findPage.json']['Req']
      response: Models['GET/api/creative/findPage.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/api/creative/findPunishRecordList.json': Array<{
      request: Models['GET/api/creative/findPunishRecordList.json']['Req']
      response: Models['GET/api/creative/findPunishRecordList.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/api/creative/findQueryCondition.json': Array<{
      request: Models['GET/api/creative/findQueryCondition.json']['Req']
      response: Models['GET/api/creative/findQueryCondition.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/api/creativeCenter/gotoCreation.json': Array<{
      request: Models['GET/api/creativeCenter/gotoCreation.json']['Req']
      response: Models['GET/api/creativeCenter/gotoCreation.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/api/creative/template/findPackageList.json': Array<{
      request: Models['GET/api/creative/template/findPackageList.json']['Req']
      response: Models['GET/api/creative/template/findPackageList.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/api/creativeCenter/gotoTemplateNew.json': Array<{
      request: Models['GET/api/creativeCenter/gotoTemplateNew.json']['Req']
      response: Models['GET/api/creativeCenter/gotoTemplateNew.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/api/creativeCenter/getMaterial.json': Array<{
      request: Models['GET/api/creativeCenter/getMaterial.json']['Req']
      response: Models['GET/api/creativeCenter/getMaterial.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'DELETE/api/creative/delete.json': Array<{
      request: Models['DELETE/api/creative/delete.json']['Req']
      response: Models['DELETE/api/creative/delete.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'PUT/api/creative/activity/batchAddTag.json': Array<{
      request: Models['PUT/api/creative/activity/batchAddTag.json']['Req']
      response: Models['PUT/api/creative/activity/batchAddTag.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'POST/api/creative/preview.json': Array<{
      request: Models['POST/api/creative/preview.json']['Req']
      response: Models['POST/api/creative/preview.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/api/adzone/findList.json': Array<{
      request: Models['GET/api/adzone/findList.json']['Req']
      response: Models['GET/api/adzone/findList.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/api/adzone/checkList.json': Array<{
      request: Models['GET/api/adzone/checkList.json']['Req']
      response: Models['GET/api/adzone/checkList.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'PUT/api/adzone/unbindList.json': Array<{
      request: Models['PUT/api/adzone/unbindList.json']['Req']
      response: Models['PUT/api/adzone/unbindList.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'PUT/api/adzone/bindList.json': Array<{
      request: Models['PUT/api/adzone/bindList.json']['Req']
      response: Models['PUT/api/adzone/bindList.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/api/adzone/findPage.json': Array<{
      request: Models['GET/api/adzone/findPage.json']['Req']
      response: Models['GET/api/adzone/findPage.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'PUT/api/adzone/batchModify.json': Array<{
      request: Models['PUT/api/adzone/batchModify.json']['Req']
      response: Models['PUT/api/adzone/batchModify.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/api/material/findPage.json': Array<{
      request: Models['GET/api/material/findPage.json']['Req']
      response: Models['GET/api/material/findPage.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/api/material/recommend.json': Array<{
      request: Models['GET/api/material/recommend.json']['Req']
      response: Models['GET/api/material/recommend.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/api/material/findQueryCondition.json': Array<{
      request: Models['GET/api/material/findQueryCondition.json']['Req']
      response: Models['GET/api/material/findQueryCondition.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/api/material/item/findQueryCondition.json': Array<{
      request: Models['GET/api/material/item/findQueryCondition.json']['Req']
      response: Models['GET/api/material/item/findQueryCondition.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/api/coupon/findQueryCondition.json': Array<{
      request: Models['GET/api/coupon/findQueryCondition.json']['Req']
      response: Models['GET/api/coupon/findQueryCondition.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/api/material/findPunishRecordList.json': Array<{
      request: Models['GET/api/material/findPunishRecordList.json']['Req']
      response: Models['GET/api/material/findPunishRecordList.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/api/material/accessAllowed.json': Array<{
      request: Models['GET/api/material/accessAllowed.json']['Req']
      response: Models['GET/api/material/accessAllowed.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/api/material/item/accessAllowed.json': Array<{
      request: Models['GET/api/material/item/accessAllowed.json']['Req']
      response: Models['GET/api/material/item/accessAllowed.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/api/coupon/findList.json': Array<{
      request: Models['GET/api/coupon/findList.json']['Req']
      response: Models['GET/api/coupon/findList.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/api/coupon/findPage.json': Array<{
      request: Models['GET/api/coupon/findPage.json']['Req']
      response: Models['GET/api/coupon/findPage.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/api/coupon/recommend.json': Array<{
      request: Models['GET/api/coupon/recommend.json']['Req']
      response: Models['GET/api/coupon/recommend.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/api/material/batchAccessAllowed.json': Array<{
      request: Models['GET/api/material/batchAccessAllowed.json']['Req']
      response: Models['GET/api/material/batchAccessAllowed.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'PUT/api/crowd/modifyByType.json': Array<{
      request: Models['PUT/api/crowd/modifyByType.json']['Req']
      response: Models['PUT/api/crowd/modifyByType.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'DELETE/api/crowd/delete.json': Array<{
      request: Models['DELETE/api/crowd/delete.json']['Req']
      response: Models['DELETE/api/crowd/delete.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/api/crowd/findList.json': Array<{
      request: Models['GET/api/crowd/findList.json']['Req']
      response: Models['GET/api/crowd/findList.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/api/target/findSuggest.json': Array<{
      request: Models['GET/api/target/findSuggest.json']['Req']
      response: Models['GET/api/target/findSuggest.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'POST/api/crowd/getSuggestPrice.json': Array<{
      request: Models['POST/api/crowd/getSuggestPrice.json']['Req']
      response: Models['POST/api/crowd/getSuggestPrice.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'POST/api/algotool/getPredictedPvUv.json': Array<{
      request: Models['POST/api/algotool/getPredictedPvUv.json']['Req']
      response: Models['POST/api/algotool/getPredictedPvUv.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/api/target/findList.json': Array<{
      request: Models['GET/api/target/findList.json']['Req']
      response: Models['GET/api/target/findList.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/api/target/findCategoryList.json': Array<{
      request: Models['GET/api/target/findCategoryList.json']['Req']
      response: Models['GET/api/target/findCategoryList.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/api/target/findLabelPage.json': Array<{
      request: Models['GET/api/target/findLabelPage.json']['Req']
      response: Models['GET/api/target/findLabelPage.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/api/target/findTargetTypeCondition.json': Array<{
      request: Models['GET/api/target/findTargetTypeCondition.json']['Req']
      response: Models['GET/api/target/findTargetTypeCondition.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/api/target/getKeywordShopUv.json': Array<{
      request: Models['GET/api/target/getKeywordShopUv.json']['Req']
      response: Models['GET/api/target/getKeywordShopUv.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/api/target/findShopTargetQueryCondition.json': Array<{
      request: Models['GET/api/target/findShopTargetQueryCondition.json']['Req']
      response: Models['GET/api/target/findShopTargetQueryCondition.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/api/algotool/findManualBidSuggestPrice.json': Array<{
      request: Models['GET/api/algotool/findManualBidSuggestPrice.json']['Req']
      response: Models['GET/api/algotool/findManualBidSuggestPrice.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'POST/api/crowd/batchModify.json': Array<{
      request: Models['POST/api/crowd/batchModify.json']['Req']
      response: Models['POST/api/crowd/batchModify.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/api/crowd/findSimulatorPointList.json': Array<{
      request: Models['GET/api/crowd/findSimulatorPointList.json']['Req']
      response: Models['GET/api/crowd/findSimulatorPointList.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'POST/api/adzone/getSuggestDiscount.json': Array<{
      request: Models['POST/api/adzone/getSuggestDiscount.json']['Req']
      response: Models['POST/api/adzone/getSuggestDiscount.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'POST/api/target/findSonkeywordList.json': Array<{
      request: Models['POST/api/target/findSonkeywordList.json']['Req']
      response: Models['POST/api/target/findSonkeywordList.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/api/target/findRecommendList.json': Array<{
      request: Models['GET/api/target/findRecommendList.json']['Req']
      response: Models['GET/api/target/findRecommendList.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/api/target/findRecommendPage.json': Array<{
      request: Models['GET/api/target/findRecommendPage.json']['Req']
      response: Models['GET/api/target/findRecommendPage.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'PUT/api/target/addTargetLabel.json': Array<{
      request: Models['PUT/api/target/addTargetLabel.json']['Req']
      response: Models['PUT/api/target/addTargetLabel.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'POST/api/member/updateConfig.json': Array<{
      request: Models['POST/api/member/updateConfig.json']['Req']
      response: Models['POST/api/member/updateConfig.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/api/member/logout.action': Array<{
      request: Models['GET/api/member/logout.action']['Req']
      response: Models['GET/api/member/logout.action']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/api/member/adminLogin.action': Array<{
      request: Models['GET/api/member/adminLogin.action']['Req']
      response: Models['GET/api/member/adminLogin.action']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'POST/api/member/signProtocol.json': Array<{
      request: Models['POST/api/member/signProtocol.json']['Req']
      response: Models['POST/api/member/signProtocol.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/api/member/getInfo.json': Array<{
      request: Models['GET/api/member/getInfo.json']['Req']
      response: Models['GET/api/member/getInfo.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'POST/api/member/addContacts.json': Array<{
      request: Models['POST/api/member/addContacts.json']['Req']
      response: Models['POST/api/member/addContacts.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/api/member/getQualificationBrandAccess.json': Array<{
      request: Models['GET/api/member/getQualificationBrandAccess.json']['Req']
      response: Models['GET/api/member/getQualificationBrandAccess.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/api/member/checkContactsName.json': Array<{
      request: Models['GET/api/member/checkContactsName.json']['Req']
      response: Models['GET/api/member/checkContactsName.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/api/member/findContactsList.json': Array<{
      request: Models['GET/api/member/findContactsList.json']['Req']
      response: Models['GET/api/member/findContactsList.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/api/member/getPunishStatus.json': Array<{
      request: Models['GET/api/member/getPunishStatus.json']['Req']
      response: Models['GET/api/member/getPunishStatus.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/api/member/findPunishRecordList.json': Array<{
      request: Models['GET/api/member/findPunishRecordList.json']['Req']
      response: Models['GET/api/member/findPunishRecordList.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/api/member/findQualificationPunishRecordList.json': Array<{
      request: Models['GET/api/member/findQualificationPunishRecordList.json']['Req']
      response: Models['GET/api/member/findQualificationPunishRecordList.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/api/member/isProtocolSigned.json': Array<{
      request: Models['GET/api/member/isProtocolSigned.json']['Req']
      response: Models['GET/api/member/isProtocolSigned.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'POST/api/member/joinBusinessPlatform.json': Array<{
      request: Models['POST/api/member/joinBusinessPlatform.json']['Req']
      response: Models['POST/api/member/joinBusinessPlatform.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/TODO': Array<{
      request: Models['GET/TODO']['Req']
      response: Models['GET/TODO']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/api/member/findDiagnoseList.json': Array<{
      request: Models['GET/api/member/findDiagnoseList.json']['Req']
      response: Models['GET/api/member/findDiagnoseList.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/https://mo.m.taobao.com/feeds/': Array<{
      request: Models['GET/https://mo.m.taobao.com/feeds/']['Req']
      response: Models['GET/https://mo.m.taobao.com/feeds/']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/https://mo.m.taobao.com/one-stop/': Array<{
      request: Models['GET/https://mo.m.taobao.com/one-stop/']['Req']
      response: Models['GET/https://mo.m.taobao.com/one-stop/']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/api/member/invitation/url.json': Array<{
      request: Models['GET/api/member/invitation/url.json']['Req']
      response: Models['GET/api/member/invitation/url.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/api/member/stage.json': Array<{
      request: Models['GET/api/member/stage.json']['Req']
      response: Models['GET/api/member/stage.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/api/member/activity.json': Array<{
      request: Models['GET/api/member/activity.json']['Req']
      response: Models['GET/api/member/activity.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/api/member/activity/itemGuide.json': Array<{
      request: Models['GET/api/member/activity/itemGuide.json']['Req']
      response: Models['GET/api/member/activity/itemGuide.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/api/member/transfer.json': Array<{
      request: Models['GET/api/member/transfer.json']['Req']
      response: Models['GET/api/member/transfer.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/api/member/newGuestTask.json': Array<{
      request: Models['GET/api/member/newGuestTask.json']['Req']
      response: Models['GET/api/member/newGuestTask.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/api/account/getAcctBalanceRemindSettingAutoRecharge.json': Array<{
      request: Models['GET/api/account/getAcctBalanceRemindSettingAutoRecharge.json']['Req']
      response: Models['GET/api/account/getAcctBalanceRemindSettingAutoRecharge.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/api/account/getSignInfo.json': Array<{
      request: Models['GET/api/account/getSignInfo.json']['Req']
      response: Models['GET/api/account/getSignInfo.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'PUT/api/account/modifyAcctBalanceRemindSettingAutoRecharge.json': Array<{
      request: Models['PUT/api/account/modifyAcctBalanceRemindSettingAutoRecharge.json']['Req']
      response: Models['PUT/api/account/modifyAcctBalanceRemindSettingAutoRecharge.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'PUT/api/account/unsignAutoRecharge.json': Array<{
      request: Models['PUT/api/account/unsignAutoRecharge.json']['Req']
      response: Models['PUT/api/account/unsignAutoRecharge.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/api/account/findItemList.json': Array<{
      request: Models['GET/api/account/findItemList.json']['Req']
      response: Models['GET/api/account/findItemList.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/api/account/exportItemList.action': Array<{
      request: Models['GET/api/account/exportItemList.action']['Req']
      response: Models['GET/api/account/exportItemList.action']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/和钻展保持一致': Array<{
      request: Models['GET/和钻展保持一致']['Req']
      response: Models['GET/和钻展保持一致']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/api/account/findMessageRemindList.json': Array<{
      request: Models['GET/api/account/findMessageRemindList.json']['Req']
      response: Models['GET/api/account/findMessageRemindList.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'POST/api/account/modifyAllMessageRemindList.json': Array<{
      request: Models['POST/api/account/modifyAllMessageRemindList.json']['Req']
      response: Models['POST/api/account/modifyAllMessageRemindList.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/api/account/getRefundList.json': Array<{
      request: Models['GET/api/account/getRefundList.json']['Req']
      response: Models['GET/api/account/getRefundList.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'POST/api/account/createRefund.json': Array<{
      request: Models['POST/api/account/createRefund.json']['Req']
      response: Models['POST/api/account/createRefund.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/api/account/checkRefund.json': Array<{
      request: Models['GET/api/account/checkRefund.json']['Req']
      response: Models['GET/api/account/checkRefund.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/api/account/isSignGlobalAlipay.json': Array<{
      request: Models['GET/api/account/isSignGlobalAlipay.json']['Req']
      response: Models['GET/api/account/isSignGlobalAlipay.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/api/account/charge.json': Array<{
      request: Models['GET/api/account/charge.json']['Req']
      response: Models['GET/api/account/charge.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/api/log/findOperationLog.json': Array<{
      request: Models['GET/api/log/findOperationLog.json']['Req']
      response: Models['GET/api/log/findOperationLog.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/api/log/findAdgroupByName.json': Array<{
      request: Models['GET/api/log/findAdgroupByName.json']['Req']
      response: Models['GET/api/log/findAdgroupByName.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/api/log/findCampaignByName.json': Array<{
      request: Models['GET/api/log/findCampaignByName.json']['Req']
      response: Models['GET/api/log/findCampaignByName.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/api/account/findAccumulateDeduct.json': Array<{
      request: Models['GET/api/account/findAccumulateDeduct.json']['Req']
      response: Models['GET/api/account/findAccumulateDeduct.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/api/message/sendMobileCode.json': Array<{
      request: Models['GET/api/message/sendMobileCode.json']['Req']
      response: Models['GET/api/message/sendMobileCode.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'POST/api/message/verifyMobilePhoneCode.json': Array<{
      request: Models['POST/api/message/verifyMobilePhoneCode.json']['Req']
      response: Models['POST/api/message/verifyMobilePhoneCode.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/api/common/findCodeList.json': Array<{
      request: Models['GET/api/common/findCodeList.json']['Req']
      response: Models['GET/api/common/findCodeList.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/api/common/getVersion.json': Array<{
      request: Models['GET/api/common/getVersion.json']['Req']
      response: Models['GET/api/common/getVersion.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/api/component/findComponentMetaList.json': Array<{
      request: Models['GET/api/component/findComponentMetaList.json']['Req']
      response: Models['GET/api/component/findComponentMetaList.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/api/component/findMemberTemplateList.json': Array<{
      request: Models['GET/api/component/findMemberTemplateList.json']['Req']
      response: Models['GET/api/component/findMemberTemplateList.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'POST/api/component/addMemberTemplate.json': Array<{
      request: Models['POST/api/component/addMemberTemplate.json']['Req']
      response: Models['POST/api/component/addMemberTemplate.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'PUT/api/component/updateMemberTemplate.json': Array<{
      request: Models['PUT/api/component/updateMemberTemplate.json']['Req']
      response: Models['PUT/api/component/updateMemberTemplate.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'DELETE/api/component/deleteMemberTemplate.json': Array<{
      request: Models['DELETE/api/component/deleteMemberTemplate.json']['Req']
      response: Models['DELETE/api/component/deleteMemberTemplate.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/api/component/findMenuList.json': Array<{
      request: Models['GET/api/component/findMenuList.json']['Req']
      response: Models['GET/api/component/findMenuList.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/api/component/findComponentList.json': Array<{
      request: Models['GET/api/component/findComponentList.json']['Req']
      response: Models['GET/api/component/findComponentList.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/api/account/report/findHourSum.json': Array<{
      request: Models['GET/api/account/report/findHourSum.json']['Req']
      response: Models['GET/api/account/report/findHourSum.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/api/account/report/findHourList.json': Array<{
      request: Models['GET/api/account/report/findHourList.json']['Req']
      response: Models['GET/api/account/report/findHourList.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/api/account/report/findDaySum.json': Array<{
      request: Models['GET/api/account/report/findDaySum.json']['Req']
      response: Models['GET/api/account/report/findDaySum.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/api/account/report/findDayList.json': Array<{
      request: Models['GET/api/account/report/findDayList.json']['Req']
      response: Models['GET/api/account/report/findDayList.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/api/campaign/report/findPage.json': Array<{
      request: Models['GET/api/campaign/report/findPage.json']['Req']
      response: Models['GET/api/campaign/report/findPage.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/api/campaign/report/findList.json': Array<{
      request: Models['GET/api/campaign/report/findList.json']['Req']
      response: Models['GET/api/campaign/report/findList.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/api/campaign/report/findSum.json': Array<{
      request: Models['GET/api/campaign/report/findSum.json']['Req']
      response: Models['GET/api/campaign/report/findSum.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/api/adgroup/report/findPage.json': Array<{
      request: Models['GET/api/adgroup/report/findPage.json']['Req']
      response: Models['GET/api/adgroup/report/findPage.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/api/adgroup/report/findList.json': Array<{
      request: Models['GET/api/adgroup/report/findList.json']['Req']
      response: Models['GET/api/adgroup/report/findList.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/api/adgroup/report/findSum.json': Array<{
      request: Models['GET/api/adgroup/report/findSum.json']['Req']
      response: Models['GET/api/adgroup/report/findSum.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/api/creative/report/findPage.json': Array<{
      request: Models['GET/api/creative/report/findPage.json']['Req']
      response: Models['GET/api/creative/report/findPage.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/api/creative/report/findList.json': Array<{
      request: Models['GET/api/creative/report/findList.json']['Req']
      response: Models['GET/api/creative/report/findList.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/api/creative/report/findSum.json': Array<{
      request: Models['GET/api/creative/report/findSum.json']['Req']
      response: Models['GET/api/creative/report/findSum.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/api/crowd/report/findPage.json': Array<{
      request: Models['GET/api/crowd/report/findPage.json']['Req']
      response: Models['GET/api/crowd/report/findPage.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/api/crowd/report/findList.json': Array<{
      request: Models['GET/api/crowd/report/findList.json']['Req']
      response: Models['GET/api/crowd/report/findList.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/api/crowd/report/findSum.json': Array<{
      request: Models['GET/api/crowd/report/findSum.json']['Req']
      response: Models['GET/api/crowd/report/findSum.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/api/adzone/report/findPage.json': Array<{
      request: Models['GET/api/adzone/report/findPage.json']['Req']
      response: Models['GET/api/adzone/report/findPage.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/api/adzone/report/findList.json': Array<{
      request: Models['GET/api/adzone/report/findList.json']['Req']
      response: Models['GET/api/adzone/report/findList.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/api/adzone/report/findSum.json': Array<{
      request: Models['GET/api/adzone/report/findSum.json']['Req']
      response: Models['GET/api/adzone/report/findSum.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/api/account/report/findCrowdDaySum.json': Array<{
      request: Models['GET/api/account/report/findCrowdDaySum.json']['Req']
      response: Models['GET/api/account/report/findCrowdDaySum.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/api/account/report/findCrowdDayList.json': Array<{
      request: Models['GET/api/account/report/findCrowdDayList.json']['Req']
      response: Models['GET/api/account/report/findCrowdDayList.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/api/material/report/findItemPage.json': Array<{
      request: Models['GET/api/material/report/findItemPage.json']['Req']
      response: Models['GET/api/material/report/findItemPage.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/api/activity/report/consumerReach.json': Array<{
      request: Models['GET/api/activity/report/consumerReach.json']['Req']
      response: Models['GET/api/activity/report/consumerReach.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/api/account/report/exportHourList.json': Array<{
      request: Models['GET/api/account/report/exportHourList.json']['Req']
      response: Models['GET/api/account/report/exportHourList.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/api/account/report/exportDayList.json': Array<{
      request: Models['GET/api/account/report/exportDayList.json']['Req']
      response: Models['GET/api/account/report/exportDayList.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/api/campaign/report/exportCampaign.json': Array<{
      request: Models['GET/api/campaign/report/exportCampaign.json']['Req']
      response: Models['GET/api/campaign/report/exportCampaign.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/api/campaign/report/exportDayOrHourList.json': Array<{
      request: Models['GET/api/campaign/report/exportDayOrHourList.json']['Req']
      response: Models['GET/api/campaign/report/exportDayOrHourList.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/api/campaign/report/exportDayOrHourSum.json': Array<{
      request: Models['GET/api/campaign/report/exportDayOrHourSum.json']['Req']
      response: Models['GET/api/campaign/report/exportDayOrHourSum.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/api/adgroup/report/exportAdgroup.json': Array<{
      request: Models['GET/api/adgroup/report/exportAdgroup.json']['Req']
      response: Models['GET/api/adgroup/report/exportAdgroup.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/api/adgroup/report/exportDayOrHourList.json': Array<{
      request: Models['GET/api/adgroup/report/exportDayOrHourList.json']['Req']
      response: Models['GET/api/adgroup/report/exportDayOrHourList.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/api/adgroup/report/exportDayOrHourSum.json': Array<{
      request: Models['GET/api/adgroup/report/exportDayOrHourSum.json']['Req']
      response: Models['GET/api/adgroup/report/exportDayOrHourSum.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/api/creative/report/exportCreative.json': Array<{
      request: Models['GET/api/creative/report/exportCreative.json']['Req']
      response: Models['GET/api/creative/report/exportCreative.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/api/creative/report/exportDayOrHourList.json': Array<{
      request: Models['GET/api/creative/report/exportDayOrHourList.json']['Req']
      response: Models['GET/api/creative/report/exportDayOrHourList.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/api/creative/report/exportDayOrHourSum.json': Array<{
      request: Models['GET/api/creative/report/exportDayOrHourSum.json']['Req']
      response: Models['GET/api/creative/report/exportDayOrHourSum.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/api/crowd/report/exportCrowd.json': Array<{
      request: Models['GET/api/crowd/report/exportCrowd.json']['Req']
      response: Models['GET/api/crowd/report/exportCrowd.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/api/crowd/report/exportDayOrHourList.json': Array<{
      request: Models['GET/api/crowd/report/exportDayOrHourList.json']['Req']
      response: Models['GET/api/crowd/report/exportDayOrHourList.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/api/crowd/report/exportDayOrHourSum.json': Array<{
      request: Models['GET/api/crowd/report/exportDayOrHourSum.json']['Req']
      response: Models['GET/api/crowd/report/exportDayOrHourSum.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/api/adzone/report/exportAdzone.json': Array<{
      request: Models['GET/api/adzone/report/exportAdzone.json']['Req']
      response: Models['GET/api/adzone/report/exportAdzone.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/api/adzone/report/exportDayOrHourList.json': Array<{
      request: Models['GET/api/adzone/report/exportDayOrHourList.json']['Req']
      response: Models['GET/api/adzone/report/exportDayOrHourList.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/api/adzone/report/exportDayOrHourSum.json': Array<{
      request: Models['GET/api/adzone/report/exportDayOrHourSum.json']['Req']
      response: Models['GET/api/adzone/report/exportDayOrHourSum.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/api/material/report/exportItem.json': Array<{
      request: Models['GET/api/material/report/exportItem.json']['Req']
      response: Models['GET/api/material/report/exportItem.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/api/account/report/exportCrowdDayList.json': Array<{
      request: Models['GET/api/account/report/exportCrowdDayList.json']['Req']
      response: Models['GET/api/account/report/exportCrowdDayList.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/api/message/findLetterList.json': Array<{
      request: Models['GET/api/message/findLetterList.json']['Req']
      response: Models['GET/api/message/findLetterList.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/api/message/getLetterDetail.json': Array<{
      request: Models['GET/api/message/getLetterDetail.json']['Req']
      response: Models['GET/api/message/getLetterDetail.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'POST/api/message/batchReadLetters.json': Array<{
      request: Models['POST/api/message/batchReadLetters.json']['Req']
      response: Models['POST/api/message/batchReadLetters.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/api/report/consumer/findSummary.json': Array<{
      request: Models['GET/api/report/consumer/findSummary.json']['Req']
      response: Models['GET/api/report/consumer/findSummary.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/api/report/consumer/findConsumerCirculation.json': Array<{
      request: Models['GET/api/report/consumer/findConsumerCirculation.json']['Req']
      response: Models['GET/api/report/consumer/findConsumerCirculation.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/api/report/fans/findSummary.json': Array<{
      request: Models['GET/api/report/fans/findSummary.json']['Req']
      response: Models['GET/api/report/fans/findSummary.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/api/report/fans/findCirculation.json': Array<{
      request: Models['GET/api/report/fans/findCirculation.json']['Req']
      response: Models['GET/api/report/fans/findCirculation.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/api/campaign/findTransferPage.json': Array<{
      request: Models['GET/api/campaign/findTransferPage.json']['Req']
      response: Models['GET/api/campaign/findTransferPage.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'POST/api/campaign/transfer.json': Array<{
      request: Models['POST/api/campaign/transfer.json']['Req']
      response: Models['POST/api/campaign/transfer.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/api/activity/report/findDaySum.json': Array<{
      request: Models['GET/api/activity/report/findDaySum.json']['Req']
      response: Models['GET/api/activity/report/findDaySum.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/api/activity/report/findDayList.json': Array<{
      request: Models['GET/api/activity/report/findDayList.json']['Req']
      response: Models['GET/api/activity/report/findDayList.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/api/activity/report/findCrowdDaySum.json': Array<{
      request: Models['GET/api/activity/report/findCrowdDaySum.json']['Req']
      response: Models['GET/api/activity/report/findCrowdDaySum.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/api/activity/report/findCrowdDayList.json': Array<{
      request: Models['GET/api/activity/report/findCrowdDayList.json']['Req']
      response: Models['GET/api/activity/report/findCrowdDayList.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/api/activity/report/findItemPage.json': Array<{
      request: Models['GET/api/activity/report/findItemPage.json']['Req']
      response: Models['GET/api/activity/report/findItemPage.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/api/activity/report/exportDayList.json': Array<{
      request: Models['GET/api/activity/report/exportDayList.json']['Req']
      response: Models['GET/api/activity/report/exportDayList.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/api/activity/report/exportCrowdDayList.json': Array<{
      request: Models['GET/api/activity/report/exportCrowdDayList.json']['Req']
      response: Models['GET/api/activity/report/exportCrowdDayList.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/api/activity/report/exportItem.json': Array<{
      request: Models['GET/api/activity/report/exportItem.json']['Req']
      response: Models['GET/api/activity/report/exportItem.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/map': Array<{
      request: Models['GET/map']['Req']
      response: Models['GET/map']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/api/report/case/findCampaignDaySum.json': Array<{
      request: Models['GET/api/report/case/findCampaignDaySum.json']['Req']
      response: Models['GET/api/report/case/findCampaignDaySum.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/api/report/case/findItemSumList.json': Array<{
      request: Models['GET/api/report/case/findItemSumList.json']['Req']
      response: Models['GET/api/report/case/findItemSumList.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/api/report/case/findItemTrendDayList.json': Array<{
      request: Models['GET/api/report/case/findItemTrendDayList.json']['Req']
      response: Models['GET/api/report/case/findItemTrendDayList.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/findList.json': Array<{
      request: Models['GET/findList.json']['Req']
      response: Models['GET/findList.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/api/report/case/findFeedShopItemAllListComp.json': Array<{
      request: Models['GET/api/report/case/findFeedShopItemAllListComp.json']['Req']
      response: Models['GET/api/report/case/findFeedShopItemAllListComp.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/api/campaign/crowd/findList.json': Array<{
      request: Models['GET/api/campaign/crowd/findList.json']['Req']
      response: Models['GET/api/campaign/crowd/findList.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'PUT/api/campaign/crowd/modify.json': Array<{
      request: Models['PUT/api/campaign/crowd/modify.json']['Req']
      response: Models['PUT/api/campaign/crowd/modify.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'POST/api/solution/add.json': Array<{
      request: Models['POST/api/solution/add.json']['Req']
      response: Models['POST/api/solution/add.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/api/material/item/findPage.json': Array<{
      request: Models['GET/api/material/item/findPage.json']['Req']
      response: Models['GET/api/material/item/findPage.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/api/solution/allowPromotion.json': Array<{
      request: Models['GET/api/solution/allowPromotion.json']['Req']
      response: Models['GET/api/solution/allowPromotion.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'POST/api/solution/batchAdd.json': Array<{
      request: Models['POST/api/solution/batchAdd.json']['Req']
      response: Models['POST/api/solution/batchAdd.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/api/target/findLabelList.json': Array<{
      request: Models['GET/api/target/findLabelList.json']['Req']
      response: Models['GET/api/target/findLabelList.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/api/target/findSelectionCategoryList.json': Array<{
      request: Models['GET/api/target/findSelectionCategoryList.json']['Req']
      response: Models['GET/api/target/findSelectionCategoryList.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/api/account/recharge.action': Array<{
      request: Models['GET/api/account/recharge.action']['Req']
      response: Models['GET/api/account/recharge.action']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/api/account/getInfo.json': Array<{
      request: Models['GET/api/account/getInfo.json']['Req']
      response: Models['GET/api/account/getInfo.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'POST/api/adgroup/batchAdd.json': Array<{
      request: Models['POST/api/adgroup/batchAdd.json']['Req']
      response: Models['POST/api/adgroup/batchAdd.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'POST/api/campaign/estimateContractPv.json': Array<{
      request: Models['POST/api/campaign/estimateContractPv.json']['Req']
      response: Models['POST/api/campaign/estimateContractPv.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'POST/api/algotool/lockQuantity.json': Array<{
      request: Models['POST/api/algotool/lockQuantity.json']['Req']
      response: Models['POST/api/algotool/lockQuantity.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/api/crowd/findPage.json': Array<{
      request: Models['GET/api/crowd/findPage.json']['Req']
      response: Models['GET/api/crowd/findPage.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'POST/api/algotool/getBudgetSimulator.json': Array<{
      request: Models['POST/api/algotool/getBudgetSimulator.json']['Req']
      response: Models['POST/api/algotool/getBudgetSimulator.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'POST/api/campaign/add.json': Array<{
      request: Models['POST/api/campaign/add.json']['Req']
      response: Models['POST/api/campaign/add.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/api/adgroup/findPage.json': Array<{
      request: Models['GET/api/adgroup/findPage.json']['Req']
      response: Models['GET/api/adgroup/findPage.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'PUT/api/campaign/modEntire.json': Array<{
      request: Models['PUT/api/campaign/modEntire.json']['Req']
      response: Models['PUT/api/campaign/modEntire.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>

    'GET/api/algotool/probeInterest.json': Array<{
      request: Models['GET/api/algotool/probeInterest.json']['Req']
      response: Models['GET/api/algotool/probeInterest.json']['Res']
      id: number
      requestTime: number
      responseTime: number
      isPending: boolean
    }>
  }
}

export const useResponse = {
  /**
   * 接口名：计划相关字段参考[新建]
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6615&itf=67832
   */
  /* tslint:disable */
  'GET/readme/campaign': function useData(
    filter?:
      | {request?: Models['GET/readme/campaign']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['GET/readme/campaign'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/readme/campaign']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/readme/campaign'][0]
    type Res = ResponseTypes['GET/readme/campaign']
    return useResponseData<RapperStore, M, Req, Item>('GET/readme/campaign', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：获取计划默认设置
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6615&itf=67189
   */
  /* tslint:disable */
  'GET/api/campaign/default.json': function useData(
    filter?:
      | {request?: Models['GET/api/campaign/default.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['GET/api/campaign/default.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/api/campaign/default.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/api/campaign/default.json'][0]
    type Res = ResponseTypes['GET/api/campaign/default.json']
    return useResponseData<RapperStore, M, Req, Item>('GET/api/campaign/default.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：获取计划详情
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6615&itf=67240
   */
  /* tslint:disable */
  'GET/api/campaign/get.json': function useData(
    filter?:
      | {request?: Models['GET/api/campaign/get.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['GET/api/campaign/get.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/api/campaign/get.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/api/campaign/get.json'][0]
    type Res = ResponseTypes['GET/api/campaign/get.json']
    return useResponseData<RapperStore, M, Req, Item>('GET/api/campaign/get.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：获取计划结算信息
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6615&itf=73647
   */
  /* tslint:disable */
  'GET/api/campaign/getSettleInfo.json': function useData(
    filter?:
      | {request?: Models['GET/api/campaign/getSettleInfo.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['GET/api/campaign/getSettleInfo.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/api/campaign/getSettleInfo.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/api/campaign/getSettleInfo.json'][0]
    type Res = ResponseTypes['GET/api/campaign/getSettleInfo.json']
    return useResponseData<RapperStore, M, Req, Item>('GET/api/campaign/getSettleInfo.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：获取计划列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6615&itf=67241
   */
  /* tslint:disable */
  'GET/api/campaign/findList.json': function useData(
    filter?:
      | {request?: Models['GET/api/campaign/findList.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['GET/api/campaign/findList.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/api/campaign/findList.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/api/campaign/findList.json'][0]
    type Res = ResponseTypes['GET/api/campaign/findList.json']
    return useResponseData<RapperStore, M, Req, Item>('GET/api/campaign/findList.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：分页获取计划列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6615&itf=67264
   */
  /* tslint:disable */
  'GET/api/campaign/findPage.json': function useData(
    filter?:
      | {request?: Models['GET/api/campaign/findPage.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['GET/api/campaign/findPage.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/api/campaign/findPage.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/api/campaign/findPage.json'][0]
    type Res = ResponseTypes['GET/api/campaign/findPage.json']
    return useResponseData<RapperStore, M, Req, Item>('GET/api/campaign/findPage.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：获取草稿计划列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6615&itf=67236
   */
  /* tslint:disable */
  'GET/api/campaign/findDraftList.json': function useData(
    filter?:
      | {request?: Models['GET/api/campaign/findDraftList.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['GET/api/campaign/findDraftList.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/api/campaign/findDraftList.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/api/campaign/findDraftList.json'][0]
    type Res = ResponseTypes['GET/api/campaign/findDraftList.json']
    return useResponseData<RapperStore, M, Req, Item>('GET/api/campaign/findDraftList.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：删除计划
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6615&itf=67242
   */
  /* tslint:disable */
  'DELETE/api/campaign/delete.json': function useData(
    filter?:
      | {request?: Models['DELETE/api/campaign/delete.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['DELETE/api/campaign/delete.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['DELETE/api/campaign/delete.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['DELETE/api/campaign/delete.json'][0]
    type Res = ResponseTypes['DELETE/api/campaign/delete.json']
    return useResponseData<RapperStore, M, Req, Item>('DELETE/api/campaign/delete.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：克隆计划
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6615&itf=67277
   */
  /* tslint:disable */
  'POST/api/campaign/clone.json': function useData(
    filter?:
      | {request?: Models['POST/api/campaign/clone.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['POST/api/campaign/clone.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['POST/api/campaign/clone.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['POST/api/campaign/clone.json'][0]
    type Res = ResponseTypes['POST/api/campaign/clone.json']
    return useResponseData<RapperStore, M, Req, Item>('POST/api/campaign/clone.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：【提醒】修改计划预算提醒
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6615&itf=67321
   */
  /* tslint:disable */
  'PUT/api/campaign/updateCampaignBudgetRemindSetting.json': function useData(
    filter?:
      | {request?: Models['PUT/api/campaign/updateCampaignBudgetRemindSetting.json']['Req']}
      | {
          (
            storeData: RapperStore['$$rapperResponseData']['PUT/api/campaign/updateCampaignBudgetRemindSetting.json'][0]
          ): boolean
        }
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['PUT/api/campaign/updateCampaignBudgetRemindSetting.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['PUT/api/campaign/updateCampaignBudgetRemindSetting.json'][0]
    type Res = ResponseTypes['PUT/api/campaign/updateCampaignBudgetRemindSetting.json']
    return useResponseData<RapperStore, M, Req, Item>(
      'PUT/api/campaign/updateCampaignBudgetRemindSetting.json',
      filter
    ) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：【提醒】获取计划预算提醒
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6615&itf=67369
   */
  /* tslint:disable */
  'GET/api/campaign/getCampaignBudgetRemindSetting.json': function useData(
    filter?:
      | {request?: Models['GET/api/campaign/getCampaignBudgetRemindSetting.json']['Req']}
      | {
          (
            storeData: RapperStore['$$rapperResponseData']['GET/api/campaign/getCampaignBudgetRemindSetting.json'][0]
          ): boolean
        }
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/api/campaign/getCampaignBudgetRemindSetting.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/api/campaign/getCampaignBudgetRemindSetting.json'][0]
    type Res = ResponseTypes['GET/api/campaign/getCampaignBudgetRemindSetting.json']
    return useResponseData<RapperStore, M, Req, Item>(
      'GET/api/campaign/getCampaignBudgetRemindSetting.json',
      filter
    ) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：批量修改计划信息
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6615&itf=67654
   */
  /* tslint:disable */
  'PUT/api/campaign/batchModify.json': function useData(
    filter?:
      | {request?: Models['PUT/api/campaign/batchModify.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['PUT/api/campaign/batchModify.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['PUT/api/campaign/batchModify.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['PUT/api/campaign/batchModify.json'][0]
    type Res = ResponseTypes['PUT/api/campaign/batchModify.json']
    return useResponseData<RapperStore, M, Req, Item>('PUT/api/campaign/batchModify.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：计划完成
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6615&itf=67672
   */
  /* tslint:disable */
  'PUT/api/campaign/complete.json': function useData(
    filter?:
      | {request?: Models['PUT/api/campaign/complete.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['PUT/api/campaign/complete.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['PUT/api/campaign/complete.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['PUT/api/campaign/complete.json'][0]
    type Res = ResponseTypes['PUT/api/campaign/complete.json']
    return useResponseData<RapperStore, M, Req, Item>('PUT/api/campaign/complete.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：修改置顶状态
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6615&itf=67674
   */
  /* tslint:disable */
  'PUT/api/campaign/setTop.json': function useData(
    filter?:
      | {request?: Models['PUT/api/campaign/setTop.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['PUT/api/campaign/setTop.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['PUT/api/campaign/setTop.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['PUT/api/campaign/setTop.json'][0]
    type Res = ResponseTypes['PUT/api/campaign/setTop.json']
    return useResponseData<RapperStore, M, Req, Item>('PUT/api/campaign/setTop.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：获取有效计划数
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6615&itf=67975
   */
  /* tslint:disable */
  'GET/api/campaign/validCount.json': function useData(
    filter?:
      | {request?: Models['GET/api/campaign/validCount.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['GET/api/campaign/validCount.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/api/campaign/validCount.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/api/campaign/validCount.json'][0]
    type Res = ResponseTypes['GET/api/campaign/validCount.json']
    return useResponseData<RapperStore, M, Req, Item>('GET/api/campaign/validCount.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：获取总预算
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6615&itf=69603
   */
  /* tslint:disable */
  'GET/api/campaign/findDayBudgetSum.json': function useData(
    filter?:
      | {request?: Models['GET/api/campaign/findDayBudgetSum.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['GET/api/campaign/findDayBudgetSum.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/api/campaign/findDayBudgetSum.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/api/campaign/findDayBudgetSum.json'][0]
    type Res = ResponseTypes['GET/api/campaign/findDayBudgetSum.json']
    return useResponseData<RapperStore, M, Req, Item>('GET/api/campaign/findDayBudgetSum.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：获取计划流程信息
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6615&itf=73883
   */
  /* tslint:disable */
  'GET/api/campaign/displayConfig.json': function useData(
    filter?:
      | {request?: Models['GET/api/campaign/displayConfig.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['GET/api/campaign/displayConfig.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/api/campaign/displayConfig.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/api/campaign/displayConfig.json'][0]
    type Res = ResponseTypes['GET/api/campaign/displayConfig.json']
    return useResponseData<RapperStore, M, Req, Item>('GET/api/campaign/displayConfig.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：获取计划可以修改的配置
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6615&itf=76004
   */
  /* tslint:disable */
  'GET/api/campaign/modifyConfig.json': function useData(
    filter?:
      | {request?: Models['GET/api/campaign/modifyConfig.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['GET/api/campaign/modifyConfig.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/api/campaign/modifyConfig.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/api/campaign/modifyConfig.json'][0]
    type Res = ResponseTypes['GET/api/campaign/modifyConfig.json']
    return useResponseData<RapperStore, M, Req, Item>('GET/api/campaign/modifyConfig.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：批量转换计划到活动计划
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6615&itf=75064
   */
  /* tslint:disable */
  'PUT/api/campaign/activity/transfer.json': function useData(
    filter?:
      | {request?: Models['PUT/api/campaign/activity/transfer.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['PUT/api/campaign/activity/transfer.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['PUT/api/campaign/activity/transfer.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['PUT/api/campaign/activity/transfer.json'][0]
    type Res = ResponseTypes['PUT/api/campaign/activity/transfer.json']
    return useResponseData<RapperStore, M, Req, Item>('PUT/api/campaign/activity/transfer.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：批量转换活动scene
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6615&itf=75562
   */
  /* tslint:disable */
  'PUT/api/campaign/transferScene.json': function useData(
    filter?:
      | {request?: Models['PUT/api/campaign/transferScene.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['PUT/api/campaign/transferScene.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['PUT/api/campaign/transferScene.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['PUT/api/campaign/transferScene.json'][0]
    type Res = ResponseTypes['PUT/api/campaign/transferScene.json']
    return useResponseData<RapperStore, M, Req, Item>('PUT/api/campaign/transferScene.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：转换活动阶段
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6615&itf=83231
   */
  /* tslint:disable */
  'PUT/api/campaign/activity/transferPhase.json': function useData(
    filter?:
      | {request?: Models['PUT/api/campaign/activity/transferPhase.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['PUT/api/campaign/activity/transferPhase.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['PUT/api/campaign/activity/transferPhase.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['PUT/api/campaign/activity/transferPhase.json'][0]
    type Res = ResponseTypes['PUT/api/campaign/activity/transferPhase.json']
    return useResponseData<RapperStore, M, Req, Item>('PUT/api/campaign/activity/transferPhase.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：获取再营销-标签信息
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6615&itf=80101
   */
  /* tslint:disable */
  'GET/api/target/getRemarketingCoverage.json': function useData(
    filter?:
      | {request?: Models['GET/api/target/getRemarketingCoverage.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['GET/api/target/getRemarketingCoverage.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/api/target/getRemarketingCoverage.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/api/target/getRemarketingCoverage.json'][0]
    type Res = ResponseTypes['GET/api/target/getRemarketingCoverage.json']
    return useResponseData<RapperStore, M, Req, Item>('GET/api/target/getRemarketingCoverage.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：新建单元
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6699&itf=67272
   */
  /* tslint:disable */
  'POST/api/adgroup/add.json': function useData(
    filter?:
      | {request?: Models['POST/api/adgroup/add.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['POST/api/adgroup/add.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['POST/api/adgroup/add.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['POST/api/adgroup/add.json'][0]
    type Res = ResponseTypes['POST/api/adgroup/add.json']
    return useResponseData<RapperStore, M, Req, Item>('POST/api/adgroup/add.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：获取单元默认设置
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6699&itf=67271
   */
  /* tslint:disable */
  'GET/api/adgroup/default.json': function useData(
    filter?:
      | {request?: Models['GET/api/adgroup/default.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['GET/api/adgroup/default.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/api/adgroup/default.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/api/adgroup/default.json'][0]
    type Res = ResponseTypes['GET/api/adgroup/default.json']
    return useResponseData<RapperStore, M, Req, Item>('GET/api/adgroup/default.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：获取单元详情
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6699&itf=67273
   */
  /* tslint:disable */
  'GET/api/adgroup/get.json': function useData(
    filter?:
      | {request?: Models['GET/api/adgroup/get.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['GET/api/adgroup/get.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/api/adgroup/get.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/api/adgroup/get.json'][0]
    type Res = ResponseTypes['GET/api/adgroup/get.json']
    return useResponseData<RapperStore, M, Req, Item>('GET/api/adgroup/get.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：获取单元列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6699&itf=67274
   */
  /* tslint:disable */
  'GET/api/adgroup/findList.json': function useData(
    filter?:
      | {request?: Models['GET/api/adgroup/findList.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['GET/api/adgroup/findList.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/api/adgroup/findList.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/api/adgroup/findList.json'][0]
    type Res = ResponseTypes['GET/api/adgroup/findList.json']
    return useResponseData<RapperStore, M, Req, Item>('GET/api/adgroup/findList.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：批量删除单元
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6699&itf=67276
   */
  /* tslint:disable */
  'DELETE/api/adgroup/batchDelete.json': function useData(
    filter?:
      | {request?: Models['DELETE/api/adgroup/batchDelete.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['DELETE/api/adgroup/batchDelete.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['DELETE/api/adgroup/batchDelete.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['DELETE/api/adgroup/batchDelete.json'][0]
    type Res = ResponseTypes['DELETE/api/adgroup/batchDelete.json']
    return useResponseData<RapperStore, M, Req, Item>('DELETE/api/adgroup/batchDelete.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：克隆单元
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6699&itf=67278
   */
  /* tslint:disable */
  'POST/api/adgroup/clone.json': function useData(
    filter?:
      | {request?: Models['POST/api/adgroup/clone.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['POST/api/adgroup/clone.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['POST/api/adgroup/clone.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['POST/api/adgroup/clone.json'][0]
    type Res = ResponseTypes['POST/api/adgroup/clone.json']
    return useResponseData<RapperStore, M, Req, Item>('POST/api/adgroup/clone.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：批量全量修改单元信息
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6699&itf=67342
   */
  /* tslint:disable */
  'PUT/api/adgroup/batchModEntire.json': function useData(
    filter?:
      | {request?: Models['PUT/api/adgroup/batchModEntire.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['PUT/api/adgroup/batchModEntire.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['PUT/api/adgroup/batchModEntire.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['PUT/api/adgroup/batchModEntire.json'][0]
    type Res = ResponseTypes['PUT/api/adgroup/batchModEntire.json']
    return useResponseData<RapperStore, M, Req, Item>('PUT/api/adgroup/batchModEntire.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：批量部分修改单元信息
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6699&itf=79050
   */
  /* tslint:disable */
  'PUT/api/adgroup/batchModifyPart.json': function useData(
    filter?:
      | {request?: Models['PUT/api/adgroup/batchModifyPart.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['PUT/api/adgroup/batchModifyPart.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['PUT/api/adgroup/batchModifyPart.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['PUT/api/adgroup/batchModifyPart.json'][0]
    type Res = ResponseTypes['PUT/api/adgroup/batchModifyPart.json']
    return useResponseData<RapperStore, M, Req, Item>('PUT/api/adgroup/batchModifyPart.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：质量分接口
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6699&itf=67557
   */
  /* tslint:disable */
  'GET/api/adgroup/qualityScore/findList.json': function useData(
    filter?:
      | {request?: Models['GET/api/adgroup/qualityScore/findList.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['GET/api/adgroup/qualityScore/findList.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/api/adgroup/qualityScore/findList.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/api/adgroup/qualityScore/findList.json'][0]
    type Res = ResponseTypes['GET/api/adgroup/qualityScore/findList.json']
    return useResponseData<RapperStore, M, Req, Item>('GET/api/adgroup/qualityScore/findList.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：质量分折线图
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6699&itf=69823
   */
  /* tslint:disable */
  'GET/api/adgroup/qualityScore/findHisList.json': function useData(
    filter?:
      | {request?: Models['GET/api/adgroup/qualityScore/findHisList.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['GET/api/adgroup/qualityScore/findHisList.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/api/adgroup/qualityScore/findHisList.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/api/adgroup/qualityScore/findHisList.json'][0]
    type Res = ResponseTypes['GET/api/adgroup/qualityScore/findHisList.json']
    return useResponseData<RapperStore, M, Req, Item>('GET/api/adgroup/qualityScore/findHisList.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：批量修改单元
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6699&itf=67703
   */
  /* tslint:disable */
  'PUT/api/adgroup/batchModify.json': function useData(
    filter?:
      | {request?: Models['PUT/api/adgroup/batchModify.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['PUT/api/adgroup/batchModify.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['PUT/api/adgroup/batchModify.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['PUT/api/adgroup/batchModify.json'][0]
    type Res = ResponseTypes['PUT/api/adgroup/batchModify.json']
    return useResponseData<RapperStore, M, Req, Item>('PUT/api/adgroup/batchModify.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：质量分查询条件
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6699&itf=68838
   */
  /* tslint:disable */
  'GET/api/adgroup/qualityScore/findQueryCondition.json': function useData(
    filter?:
      | {request?: Models['GET/api/adgroup/qualityScore/findQueryCondition.json']['Req']}
      | {
          (
            storeData: RapperStore['$$rapperResponseData']['GET/api/adgroup/qualityScore/findQueryCondition.json'][0]
          ): boolean
        }
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/api/adgroup/qualityScore/findQueryCondition.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/api/adgroup/qualityScore/findQueryCondition.json'][0]
    type Res = ResponseTypes['GET/api/adgroup/qualityScore/findQueryCondition.json']
    return useResponseData<RapperStore, M, Req, Item>(
      'GET/api/adgroup/qualityScore/findQueryCondition.json',
      filter
    ) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：查看计划带着单元的组合接口
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6699&itf=69419
   */
  /* tslint:disable */
  'GET/api/adgroup/findCampaignAndAdgroupList.json': function useData(
    filter?:
      | {request?: Models['GET/api/adgroup/findCampaignAndAdgroupList.json']['Req']}
      | {
          (
            storeData: RapperStore['$$rapperResponseData']['GET/api/adgroup/findCampaignAndAdgroupList.json'][0]
          ): boolean
        }
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/api/adgroup/findCampaignAndAdgroupList.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/api/adgroup/findCampaignAndAdgroupList.json'][0]
    type Res = ResponseTypes['GET/api/adgroup/findCampaignAndAdgroupList.json']
    return useResponseData<RapperStore, M, Req, Item>('GET/api/adgroup/findCampaignAndAdgroupList.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：修改单元上的系统创意设置
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6699&itf=75561
   */
  /* tslint:disable */
  'PUT/api/adgroup/useSystemCreative.json': function useData(
    filter?:
      | {request?: Models['PUT/api/adgroup/useSystemCreative.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['PUT/api/adgroup/useSystemCreative.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['PUT/api/adgroup/useSystemCreative.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['PUT/api/adgroup/useSystemCreative.json'][0]
    type Res = ResponseTypes['PUT/api/adgroup/useSystemCreative.json']
    return useResponseData<RapperStore, M, Req, Item>('PUT/api/adgroup/useSystemCreative.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：【接口优化】修改单元
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6699&itf=78328
   */
  /* tslint:disable */
  'PUT/api/adgroup/batchModifyEntire.json': function useData(
    filter?:
      | {request?: Models['PUT/api/adgroup/batchModifyEntire.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['PUT/api/adgroup/batchModifyEntire.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['PUT/api/adgroup/batchModifyEntire.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['PUT/api/adgroup/batchModifyEntire.json'][0]
    type Res = ResponseTypes['PUT/api/adgroup/batchModifyEntire.json']
    return useResponseData<RapperStore, M, Req, Item>('PUT/api/adgroup/batchModifyEntire.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：批量修改单元出价
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6699&itf=87108
   */
  /* tslint:disable */
  'PUT/api/adgroup/batchModifyPrice.json': function useData(
    filter?:
      | {request?: Models['PUT/api/adgroup/batchModifyPrice.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['PUT/api/adgroup/batchModifyPrice.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['PUT/api/adgroup/batchModifyPrice.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['PUT/api/adgroup/batchModifyPrice.json'][0]
    type Res = ResponseTypes['PUT/api/adgroup/batchModifyPrice.json']
    return useResponseData<RapperStore, M, Req, Item>('PUT/api/adgroup/batchModifyPrice.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：批量新建创意
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6662&itf=67197
   */
  /* tslint:disable */
  'POST/api/creative/batchAddAndBind.json': function useData(
    filter?:
      | {request?: Models['POST/api/creative/batchAddAndBind.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['POST/api/creative/batchAddAndBind.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['POST/api/creative/batchAddAndBind.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['POST/api/creative/batchAddAndBind.json'][0]
    type Res = ResponseTypes['POST/api/creative/batchAddAndBind.json']
    return useResponseData<RapperStore, M, Req, Item>('POST/api/creative/batchAddAndBind.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：批量解绑创意
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6662&itf=73851
   */
  /* tslint:disable */
  'PUT/api/creative/batchUnbind.json': function useData(
    filter?:
      | {request?: Models['PUT/api/creative/batchUnbind.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['PUT/api/creative/batchUnbind.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['PUT/api/creative/batchUnbind.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['PUT/api/creative/batchUnbind.json'][0]
    type Res = ResponseTypes['PUT/api/creative/batchUnbind.json']
    return useResponseData<RapperStore, M, Req, Item>('PUT/api/creative/batchUnbind.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：推荐创意
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6662&itf=83233
   */
  /* tslint:disable */
  'GET/api/creative/recommend.json': function useData(
    filter?:
      | {request?: Models['GET/api/creative/recommend.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['GET/api/creative/recommend.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/api/creative/recommend.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/api/creative/recommend.json'][0]
    type Res = ResponseTypes['GET/api/creative/recommend.json']
    return useResponseData<RapperStore, M, Req, Item>('GET/api/creative/recommend.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：横向管理查看创意列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6662&itf=67199
   */
  /* tslint:disable */
  'GET/api/creative/findPage.json': function useData(
    filter?:
      | {request?: Models['GET/api/creative/findPage.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['GET/api/creative/findPage.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/api/creative/findPage.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/api/creative/findPage.json'][0]
    type Res = ResponseTypes['GET/api/creative/findPage.json']
    return useResponseData<RapperStore, M, Req, Item>('GET/api/creative/findPage.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：查询创意违规记录
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6662&itf=67558
   */
  /* tslint:disable */
  'GET/api/creative/findPunishRecordList.json': function useData(
    filter?:
      | {request?: Models['GET/api/creative/findPunishRecordList.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['GET/api/creative/findPunishRecordList.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/api/creative/findPunishRecordList.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/api/creative/findPunishRecordList.json'][0]
    type Res = ResponseTypes['GET/api/creative/findPunishRecordList.json']
    return useResponseData<RapperStore, M, Req, Item>('GET/api/creative/findPunishRecordList.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：创意查询条件
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6662&itf=67560
   */
  /* tslint:disable */
  'GET/api/creative/findQueryCondition.json': function useData(
    filter?:
      | {request?: Models['GET/api/creative/findQueryCondition.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['GET/api/creative/findQueryCondition.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/api/creative/findQueryCondition.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/api/creative/findQueryCondition.json'][0]
    type Res = ResponseTypes['GET/api/creative/findQueryCondition.json']
    return useResponseData<RapperStore, M, Req, Item>('GET/api/creative/findQueryCondition.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：跳转新建创意页面
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6662&itf=68950
   */
  /* tslint:disable */
  'GET/api/creativeCenter/gotoCreation.json': function useData(
    filter?:
      | {request?: Models['GET/api/creativeCenter/gotoCreation.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['GET/api/creativeCenter/gotoCreation.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/api/creativeCenter/gotoCreation.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/api/creativeCenter/gotoCreation.json'][0]
    type Res = ResponseTypes['GET/api/creativeCenter/gotoCreation.json']
    return useResponseData<RapperStore, M, Req, Item>('GET/api/creativeCenter/gotoCreation.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：查看创意模板
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6662&itf=70224
   */
  /* tslint:disable */
  'GET/api/creative/template/findPackageList.json': function useData(
    filter?:
      | {request?: Models['GET/api/creative/template/findPackageList.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['GET/api/creative/template/findPackageList.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/api/creative/template/findPackageList.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/api/creative/template/findPackageList.json'][0]
    type Res = ResponseTypes['GET/api/creative/template/findPackageList.json']
    return useResponseData<RapperStore, M, Req, Item>('GET/api/creative/template/findPackageList.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：跳转模板制作页面
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6662&itf=70256
   */
  /* tslint:disable */
  'GET/api/creativeCenter/gotoTemplateNew.json': function useData(
    filter?:
      | {request?: Models['GET/api/creativeCenter/gotoTemplateNew.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['GET/api/creativeCenter/gotoTemplateNew.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/api/creativeCenter/gotoTemplateNew.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/api/creativeCenter/gotoTemplateNew.json'][0]
    type Res = ResponseTypes['GET/api/creativeCenter/gotoTemplateNew.json']
    return useResponseData<RapperStore, M, Req, Item>('GET/api/creativeCenter/gotoTemplateNew.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：获取创意中心需要的物料
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6662&itf=70355
   */
  /* tslint:disable */
  'GET/api/creativeCenter/getMaterial.json': function useData(
    filter?:
      | {request?: Models['GET/api/creativeCenter/getMaterial.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['GET/api/creativeCenter/getMaterial.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/api/creativeCenter/getMaterial.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/api/creativeCenter/getMaterial.json'][0]
    type Res = ResponseTypes['GET/api/creativeCenter/getMaterial.json']
    return useResponseData<RapperStore, M, Req, Item>('GET/api/creativeCenter/getMaterial.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：删除创意
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6662&itf=73923
   */
  /* tslint:disable */
  'DELETE/api/creative/delete.json': function useData(
    filter?:
      | {request?: Models['DELETE/api/creative/delete.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['DELETE/api/creative/delete.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['DELETE/api/creative/delete.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['DELETE/api/creative/delete.json'][0]
    type Res = ResponseTypes['DELETE/api/creative/delete.json']
    return useResponseData<RapperStore, M, Req, Item>('DELETE/api/creative/delete.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：活动创意打标
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6662&itf=85285
   */
  /* tslint:disable */
  'PUT/api/creative/activity/batchAddTag.json': function useData(
    filter?:
      | {request?: Models['PUT/api/creative/activity/batchAddTag.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['PUT/api/creative/activity/batchAddTag.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['PUT/api/creative/activity/batchAddTag.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['PUT/api/creative/activity/batchAddTag.json'][0]
    type Res = ResponseTypes['PUT/api/creative/activity/batchAddTag.json']
    return useResponseData<RapperStore, M, Req, Item>('PUT/api/creative/activity/batchAddTag.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：预览创意接口
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6662&itf=77911
   */
  /* tslint:disable */
  'POST/api/creative/preview.json': function useData(
    filter?:
      | {request?: Models['POST/api/creative/preview.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['POST/api/creative/preview.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['POST/api/creative/preview.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['POST/api/creative/preview.json'][0]
    type Res = ResponseTypes['POST/api/creative/preview.json']
    return useResponseData<RapperStore, M, Req, Item>('POST/api/creative/preview.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：获取资源位列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6687&itf=67190
   */
  /* tslint:disable */
  'GET/api/adzone/findList.json': function useData(
    filter?:
      | {request?: Models['GET/api/adzone/findList.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['GET/api/adzone/findList.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/api/adzone/findList.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/api/adzone/findList.json'][0]
    type Res = ResponseTypes['GET/api/adzone/findList.json']
    return useResponseData<RapperStore, M, Req, Item>('GET/api/adzone/findList.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：检查资源位匹配情况
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6687&itf=67243
   */
  /* tslint:disable */
  'GET/api/adzone/checkList.json': function useData(
    filter?:
      | {request?: Models['GET/api/adzone/checkList.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['GET/api/adzone/checkList.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/api/adzone/checkList.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/api/adzone/checkList.json'][0]
    type Res = ResponseTypes['GET/api/adzone/checkList.json']
    return useResponseData<RapperStore, M, Req, Item>('GET/api/adzone/checkList.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：【横向】移除绑定资源位
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6687&itf=67248
   */
  /* tslint:disable */
  'PUT/api/adzone/unbindList.json': function useData(
    filter?:
      | {request?: Models['PUT/api/adzone/unbindList.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['PUT/api/adzone/unbindList.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['PUT/api/adzone/unbindList.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['PUT/api/adzone/unbindList.json'][0]
    type Res = ResponseTypes['PUT/api/adzone/unbindList.json']
    return useResponseData<RapperStore, M, Req, Item>('PUT/api/adzone/unbindList.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：【横向】更新广告位绑定情况
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6687&itf=67254
   */
  /* tslint:disable */
  'PUT/api/adzone/bindList.json': function useData(
    filter?:
      | {request?: Models['PUT/api/adzone/bindList.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['PUT/api/adzone/bindList.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['PUT/api/adzone/bindList.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['PUT/api/adzone/bindList.json'][0]
    type Res = ResponseTypes['PUT/api/adzone/bindList.json']
    return useResponseData<RapperStore, M, Req, Item>('PUT/api/adzone/bindList.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：【横向】分页获取资源位列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6687&itf=67267
   */
  /* tslint:disable */
  'GET/api/adzone/findPage.json': function useData(
    filter?:
      | {request?: Models['GET/api/adzone/findPage.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['GET/api/adzone/findPage.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/api/adzone/findPage.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/api/adzone/findPage.json'][0]
    type Res = ResponseTypes['GET/api/adzone/findPage.json']
    return useResponseData<RapperStore, M, Req, Item>('GET/api/adzone/findPage.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：【管理】批量修改溢价
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6687&itf=68949
   */
  /* tslint:disable */
  'PUT/api/adzone/batchModify.json': function useData(
    filter?:
      | {request?: Models['PUT/api/adzone/batchModify.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['PUT/api/adzone/batchModify.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['PUT/api/adzone/batchModify.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['PUT/api/adzone/batchModify.json'][0]
    type Res = ResponseTypes['PUT/api/adzone/batchModify.json']
    return useResponseData<RapperStore, M, Req, Item>('PUT/api/adzone/batchModify.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：分页获取物料列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6688&itf=67403
   */
  /* tslint:disable */
  'GET/api/material/findPage.json': function useData(
    filter?:
      | {request?: Models['GET/api/material/findPage.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['GET/api/material/findPage.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/api/material/findPage.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/api/material/findPage.json'][0]
    type Res = ResponseTypes['GET/api/material/findPage.json']
    return useResponseData<RapperStore, M, Req, Item>('GET/api/material/findPage.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：获取推荐物料列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6688&itf=87196
   */
  /* tslint:disable */
  'GET/api/material/recommend.json': function useData(
    filter?:
      | {request?: Models['GET/api/material/recommend.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['GET/api/material/recommend.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/api/material/recommend.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/api/material/recommend.json'][0]
    type Res = ResponseTypes['GET/api/material/recommend.json']
    return useResponseData<RapperStore, M, Req, Item>('GET/api/material/recommend.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：获取物料查询条件
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6688&itf=67405
   */
  /* tslint:disable */
  'GET/api/material/findQueryCondition.json': function useData(
    filter?:
      | {request?: Models['GET/api/material/findQueryCondition.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['GET/api/material/findQueryCondition.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/api/material/findQueryCondition.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/api/material/findQueryCondition.json'][0]
    type Res = ResponseTypes['GET/api/material/findQueryCondition.json']
    return useResponseData<RapperStore, M, Req, Item>('GET/api/material/findQueryCondition.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：获取商品查询条件
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6688&itf=70820
   */
  /* tslint:disable */
  'GET/api/material/item/findQueryCondition.json': function useData(
    filter?:
      | {request?: Models['GET/api/material/item/findQueryCondition.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['GET/api/material/item/findQueryCondition.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/api/material/item/findQueryCondition.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/api/material/item/findQueryCondition.json'][0]
    type Res = ResponseTypes['GET/api/material/item/findQueryCondition.json']
    return useResponseData<RapperStore, M, Req, Item>('GET/api/material/item/findQueryCondition.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：获取权益查询条件
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6688&itf=78780
   */
  /* tslint:disable */
  'GET/api/coupon/findQueryCondition.json': function useData(
    filter?:
      | {request?: Models['GET/api/coupon/findQueryCondition.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['GET/api/coupon/findQueryCondition.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/api/coupon/findQueryCondition.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/api/coupon/findQueryCondition.json'][0]
    type Res = ResponseTypes['GET/api/coupon/findQueryCondition.json']
    return useResponseData<RapperStore, M, Req, Item>('GET/api/coupon/findQueryCondition.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：查询物料违规记录
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6688&itf=67559
   */
  /* tslint:disable */
  'GET/api/material/findPunishRecordList.json': function useData(
    filter?:
      | {request?: Models['GET/api/material/findPunishRecordList.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['GET/api/material/findPunishRecordList.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/api/material/findPunishRecordList.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/api/material/findPunishRecordList.json'][0]
    type Res = ResponseTypes['GET/api/material/findPunishRecordList.json']
    return useResponseData<RapperStore, M, Req, Item>('GET/api/material/findPunishRecordList.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：校验推广
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6688&itf=67656
   */
  /* tslint:disable */
  'GET/api/material/accessAllowed.json': function useData(
    filter?:
      | {request?: Models['GET/api/material/accessAllowed.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['GET/api/material/accessAllowed.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/api/material/accessAllowed.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/api/material/accessAllowed.json'][0]
    type Res = ResponseTypes['GET/api/material/accessAllowed.json']
    return useResponseData<RapperStore, M, Req, Item>('GET/api/material/accessAllowed.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：校验商品
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6688&itf=70819
   */
  /* tslint:disable */
  'GET/api/material/item/accessAllowed.json': function useData(
    filter?:
      | {request?: Models['GET/api/material/item/accessAllowed.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['GET/api/material/item/accessAllowed.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/api/material/item/accessAllowed.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/api/material/item/accessAllowed.json'][0]
    type Res = ResponseTypes['GET/api/material/item/accessAllowed.json']
    return useResponseData<RapperStore, M, Req, Item>('GET/api/material/item/accessAllowed.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：优惠券接口
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6688&itf=70837
   */
  /* tslint:disable */
  'GET/api/coupon/findList.json': function useData(
    filter?:
      | {request?: Models['GET/api/coupon/findList.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['GET/api/coupon/findList.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/api/coupon/findList.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/api/coupon/findList.json'][0]
    type Res = ResponseTypes['GET/api/coupon/findList.json']
    return useResponseData<RapperStore, M, Req, Item>('GET/api/coupon/findList.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：分页获取权益信息
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6688&itf=78647
   */
  /* tslint:disable */
  'GET/api/coupon/findPage.json': function useData(
    filter?:
      | {request?: Models['GET/api/coupon/findPage.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['GET/api/coupon/findPage.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/api/coupon/findPage.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/api/coupon/findPage.json'][0]
    type Res = ResponseTypes['GET/api/coupon/findPage.json']
    return useResponseData<RapperStore, M, Req, Item>('GET/api/coupon/findPage.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：获取推荐优惠券
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6688&itf=78925
   */
  /* tslint:disable */
  'GET/api/coupon/recommend.json': function useData(
    filter?:
      | {request?: Models['GET/api/coupon/recommend.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['GET/api/coupon/recommend.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/api/coupon/recommend.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/api/coupon/recommend.json'][0]
    type Res = ResponseTypes['GET/api/coupon/recommend.json']
    return useResponseData<RapperStore, M, Req, Item>('GET/api/coupon/recommend.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：批量校验接口
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6688&itf=75890
   */
  /* tslint:disable */
  'GET/api/material/batchAccessAllowed.json': function useData(
    filter?:
      | {request?: Models['GET/api/material/batchAccessAllowed.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['GET/api/material/batchAccessAllowed.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/api/material/batchAccessAllowed.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/api/material/batchAccessAllowed.json'][0]
    type Res = ResponseTypes['GET/api/material/batchAccessAllowed.json']
    return useResponseData<RapperStore, M, Req, Item>('GET/api/material/batchAccessAllowed.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：【管理】新增定向
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6840&itf=68388
   */
  /* tslint:disable */
  'PUT/api/crowd/modifyByType.json': function useData(
    filter?:
      | {request?: Models['PUT/api/crowd/modifyByType.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['PUT/api/crowd/modifyByType.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['PUT/api/crowd/modifyByType.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['PUT/api/crowd/modifyByType.json'][0]
    type Res = ResponseTypes['PUT/api/crowd/modifyByType.json']
    return useResponseData<RapperStore, M, Req, Item>('PUT/api/crowd/modifyByType.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：【管理】删除定向绑定
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6840&itf=68391
   */
  /* tslint:disable */
  'DELETE/api/crowd/delete.json': function useData(
    filter?:
      | {request?: Models['DELETE/api/crowd/delete.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['DELETE/api/crowd/delete.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['DELETE/api/crowd/delete.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['DELETE/api/crowd/delete.json'][0]
    type Res = ResponseTypes['DELETE/api/crowd/delete.json']
    return useResponseData<RapperStore, M, Req, Item>('DELETE/api/crowd/delete.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：【管理】查询定向列表不分页
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6840&itf=68395
   */
  /* tslint:disable */
  'GET/api/crowd/findList.json': function useData(
    filter?:
      | {request?: Models['GET/api/crowd/findList.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['GET/api/crowd/findList.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/api/crowd/findList.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/api/crowd/findList.json'][0]
    type Res = ResponseTypes['GET/api/crowd/findList.json']
    return useResponseData<RapperStore, M, Req, Item>('GET/api/crowd/findList.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：【主流程】查询推荐定向
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6840&itf=68397
   */
  /* tslint:disable */
  'GET/api/target/findSuggest.json': function useData(
    filter?:
      | {request?: Models['GET/api/target/findSuggest.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['GET/api/target/findSuggest.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/api/target/findSuggest.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/api/target/findSuggest.json'][0]
    type Res = ResponseTypes['GET/api/target/findSuggest.json']
    return useResponseData<RapperStore, M, Req, Item>('GET/api/target/findSuggest.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：【工具】查询建议出价&市场平均价
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6840&itf=68400
   */
  /* tslint:disable */
  'POST/api/crowd/getSuggestPrice.json': function useData(
    filter?:
      | {request?: Models['POST/api/crowd/getSuggestPrice.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['POST/api/crowd/getSuggestPrice.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['POST/api/crowd/getSuggestPrice.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['POST/api/crowd/getSuggestPrice.json'][0]
    type Res = ResponseTypes['POST/api/crowd/getSuggestPrice.json']
    return useResponseData<RapperStore, M, Req, Item>('POST/api/crowd/getSuggestPrice.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：【工具】流量预估
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6840&itf=68418
   */
  /* tslint:disable */
  'POST/api/algotool/getPredictedPvUv.json': function useData(
    filter?:
      | {request?: Models['POST/api/algotool/getPredictedPvUv.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['POST/api/algotool/getPredictedPvUv.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['POST/api/algotool/getPredictedPvUv.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['POST/api/algotool/getPredictedPvUv.json'][0]
    type Res = ResponseTypes['POST/api/algotool/getPredictedPvUv.json']
    return useResponseData<RapperStore, M, Req, Item>('POST/api/algotool/getPredictedPvUv.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：查询定向列表（没有category）
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6840&itf=68420
   */
  /* tslint:disable */
  'GET/api/target/findList.json': function useData(
    filter?:
      | {request?: Models['GET/api/target/findList.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['GET/api/target/findList.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/api/target/findList.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/api/target/findList.json'][0]
    type Res = ResponseTypes['GET/api/target/findList.json']
    return useResponseData<RapperStore, M, Req, Item>('GET/api/target/findList.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：查询定向分组列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6840&itf=68421
   */
  /* tslint:disable */
  'GET/api/target/findCategoryList.json': function useData(
    filter?:
      | {request?: Models['GET/api/target/findCategoryList.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['GET/api/target/findCategoryList.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/api/target/findCategoryList.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/api/target/findCategoryList.json'][0]
    type Res = ResponseTypes['GET/api/target/findCategoryList.json']
    return useResponseData<RapperStore, M, Req, Item>('GET/api/target/findCategoryList.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：查询定向标签分页
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6840&itf=68425
   */
  /* tslint:disable */
  'GET/api/target/findLabelPage.json': function useData(
    filter?:
      | {request?: Models['GET/api/target/findLabelPage.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['GET/api/target/findLabelPage.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/api/target/findLabelPage.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/api/target/findLabelPage.json'][0]
    type Res = ResponseTypes['GET/api/target/findLabelPage.json']
    return useResponseData<RapperStore, M, Req, Item>('GET/api/target/findLabelPage.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：【管理】查询定向筛选框
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6840&itf=68426
   */
  /* tslint:disable */
  'GET/api/target/findTargetTypeCondition.json': function useData(
    filter?:
      | {request?: Models['GET/api/target/findTargetTypeCondition.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['GET/api/target/findTargetTypeCondition.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/api/target/findTargetTypeCondition.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/api/target/findTargetTypeCondition.json'][0]
    type Res = ResponseTypes['GET/api/target/findTargetTypeCondition.json']
    return useResponseData<RapperStore, M, Req, Item>('GET/api/target/findTargetTypeCondition.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：查询店铺关键词
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6840&itf=68427
   */
  /* tslint:disable */
  'GET/api/target/getKeywordShopUv.json': function useData(
    filter?:
      | {request?: Models['GET/api/target/getKeywordShopUv.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['GET/api/target/getKeywordShopUv.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/api/target/getKeywordShopUv.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/api/target/getKeywordShopUv.json'][0]
    type Res = ResponseTypes['GET/api/target/getKeywordShopUv.json']
    return useResponseData<RapperStore, M, Req, Item>('GET/api/target/getKeywordShopUv.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：查询店铺定向筛选条件
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6840&itf=68429
   */
  /* tslint:disable */
  'GET/api/target/findShopTargetQueryCondition.json': function useData(
    filter?:
      | {request?: Models['GET/api/target/findShopTargetQueryCondition.json']['Req']}
      | {
          (
            storeData: RapperStore['$$rapperResponseData']['GET/api/target/findShopTargetQueryCondition.json'][0]
          ): boolean
        }
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/api/target/findShopTargetQueryCondition.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/api/target/findShopTargetQueryCondition.json'][0]
    type Res = ResponseTypes['GET/api/target/findShopTargetQueryCondition.json']
    return useResponseData<RapperStore, M, Req, Item>('GET/api/target/findShopTargetQueryCondition.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：【工具】单品托管手动出价建议价
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6840&itf=68552
   */
  /* tslint:disable */
  'GET/api/algotool/findManualBidSuggestPrice.json': function useData(
    filter?:
      | {request?: Models['GET/api/algotool/findManualBidSuggestPrice.json']['Req']}
      | {
          (
            storeData: RapperStore['$$rapperResponseData']['GET/api/algotool/findManualBidSuggestPrice.json'][0]
          ): boolean
        }
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/api/algotool/findManualBidSuggestPrice.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/api/algotool/findManualBidSuggestPrice.json'][0]
    type Res = ResponseTypes['GET/api/algotool/findManualBidSuggestPrice.json']
    return useResponseData<RapperStore, M, Req, Item>('GET/api/algotool/findManualBidSuggestPrice.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：【管理】批量出价
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6840&itf=68946
   */
  /* tslint:disable */
  'POST/api/crowd/batchModify.json': function useData(
    filter?:
      | {request?: Models['POST/api/crowd/batchModify.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['POST/api/crowd/batchModify.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['POST/api/crowd/batchModify.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['POST/api/crowd/batchModify.json'][0]
    type Res = ResponseTypes['POST/api/crowd/batchModify.json']
    return useResponseData<RapperStore, M, Req, Item>('POST/api/crowd/batchModify.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：【工具】出价模拟器
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6840&itf=69205
   */
  /* tslint:disable */
  'GET/api/crowd/findSimulatorPointList.json': function useData(
    filter?:
      | {request?: Models['GET/api/crowd/findSimulatorPointList.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['GET/api/crowd/findSimulatorPointList.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/api/crowd/findSimulatorPointList.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/api/crowd/findSimulatorPointList.json'][0]
    type Res = ResponseTypes['GET/api/crowd/findSimulatorPointList.json']
    return useResponseData<RapperStore, M, Req, Item>('GET/api/crowd/findSimulatorPointList.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：【工具】资源位建议溢价
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6840&itf=69646
   */
  /* tslint:disable */
  'POST/api/adzone/getSuggestDiscount.json': function useData(
    filter?:
      | {request?: Models['POST/api/adzone/getSuggestDiscount.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['POST/api/adzone/getSuggestDiscount.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['POST/api/adzone/getSuggestDiscount.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['POST/api/adzone/getSuggestDiscount.json'][0]
    type Res = ResponseTypes['POST/api/adzone/getSuggestDiscount.json']
    return useResponseData<RapperStore, M, Req, Item>('POST/api/adzone/getSuggestDiscount.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：关键词包含优化
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6840&itf=77913
   */
  /* tslint:disable */
  'POST/api/target/findSonkeywordList.json': function useData(
    filter?:
      | {request?: Models['POST/api/target/findSonkeywordList.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['POST/api/target/findSonkeywordList.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['POST/api/target/findSonkeywordList.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['POST/api/target/findSonkeywordList.json'][0]
    type Res = ResponseTypes['POST/api/target/findSonkeywordList.json']
    return useResponseData<RapperStore, M, Req, Item>('POST/api/target/findSonkeywordList.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：【人群推荐】获取人群推荐
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6840&itf=83230
   */
  /* tslint:disable */
  'GET/api/target/findRecommendList.json': function useData(
    filter?:
      | {request?: Models['GET/api/target/findRecommendList.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['GET/api/target/findRecommendList.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/api/target/findRecommendList.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/api/target/findRecommendList.json'][0]
    type Res = ResponseTypes['GET/api/target/findRecommendList.json']
    return useResponseData<RapperStore, M, Req, Item>('GET/api/target/findRecommendList.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：【人群推荐】分页获取指定推荐人群
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6840&itf=83235
   */
  /* tslint:disable */
  'GET/api/target/findRecommendPage.json': function useData(
    filter?:
      | {request?: Models['GET/api/target/findRecommendPage.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['GET/api/target/findRecommendPage.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/api/target/findRecommendPage.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/api/target/findRecommendPage.json'][0]
    type Res = ResponseTypes['GET/api/target/findRecommendPage.json']
    return useResponseData<RapperStore, M, Req, Item>('GET/api/target/findRecommendPage.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：【人群推荐】新增定向（非覆盖）
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6840&itf=83236
   */
  /* tslint:disable */
  'PUT/api/target/addTargetLabel.json': function useData(
    filter?:
      | {request?: Models['PUT/api/target/addTargetLabel.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['PUT/api/target/addTargetLabel.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['PUT/api/target/addTargetLabel.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['PUT/api/target/addTargetLabel.json'][0]
    type Res = ResponseTypes['PUT/api/target/addTargetLabel.json']
    return useResponseData<RapperStore, M, Req, Item>('PUT/api/target/addTargetLabel.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：更新报表展现指标
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6692&itf=67498
   */
  /* tslint:disable */
  'POST/api/member/updateConfig.json': function useData(
    filter?:
      | {request?: Models['POST/api/member/updateConfig.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['POST/api/member/updateConfig.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['POST/api/member/updateConfig.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['POST/api/member/updateConfig.json'][0]
    type Res = ResponseTypes['POST/api/member/updateConfig.json']
    return useResponseData<RapperStore, M, Req, Item>('POST/api/member/updateConfig.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：用户登出
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6692&itf=67238
   */
  /* tslint:disable */
  'GET/api/member/logout.action': function useData(
    filter?:
      | {request?: Models['GET/api/member/logout.action']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['GET/api/member/logout.action'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/api/member/logout.action']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/api/member/logout.action'][0]
    type Res = ResponseTypes['GET/api/member/logout.action']
    return useResponseData<RapperStore, M, Req, Item>('GET/api/member/logout.action', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：【CRM】伪登陆
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6692&itf=67244
   */
  /* tslint:disable */
  'GET/api/member/adminLogin.action': function useData(
    filter?:
      | {request?: Models['GET/api/member/adminLogin.action']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['GET/api/member/adminLogin.action'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/api/member/adminLogin.action']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/api/member/adminLogin.action'][0]
    type Res = ResponseTypes['GET/api/member/adminLogin.action']
    return useResponseData<RapperStore, M, Req, Item>('GET/api/member/adminLogin.action', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：用户协议签署
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6692&itf=67246
   */
  /* tslint:disable */
  'POST/api/member/signProtocol.json': function useData(
    filter?:
      | {request?: Models['POST/api/member/signProtocol.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['POST/api/member/signProtocol.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['POST/api/member/signProtocol.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['POST/api/member/signProtocol.json'][0]
    type Res = ResponseTypes['POST/api/member/signProtocol.json']
    return useResponseData<RapperStore, M, Req, Item>('POST/api/member/signProtocol.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：获取用户信息
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6692&itf=67253
   */
  /* tslint:disable */
  'GET/api/member/getInfo.json': function useData(
    filter?:
      | {request?: Models['GET/api/member/getInfo.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['GET/api/member/getInfo.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/api/member/getInfo.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/api/member/getInfo.json'][0]
    type Res = ResponseTypes['GET/api/member/getInfo.json']
    return useResponseData<RapperStore, M, Req, Item>('GET/api/member/getInfo.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：创建用户联系人
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6692&itf=67294
   */
  /* tslint:disable */
  'POST/api/member/addContacts.json': function useData(
    filter?:
      | {request?: Models['POST/api/member/addContacts.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['POST/api/member/addContacts.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['POST/api/member/addContacts.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['POST/api/member/addContacts.json'][0]
    type Res = ResponseTypes['POST/api/member/addContacts.json']
    return useResponseData<RapperStore, M, Req, Item>('POST/api/member/addContacts.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：用户品牌检测
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6692&itf=67350
   */
  /* tslint:disable */
  'GET/api/member/getQualificationBrandAccess.json': function useData(
    filter?:
      | {request?: Models['GET/api/member/getQualificationBrandAccess.json']['Req']}
      | {
          (
            storeData: RapperStore['$$rapperResponseData']['GET/api/member/getQualificationBrandAccess.json'][0]
          ): boolean
        }
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/api/member/getQualificationBrandAccess.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/api/member/getQualificationBrandAccess.json'][0]
    type Res = ResponseTypes['GET/api/member/getQualificationBrandAccess.json']
    return useResponseData<RapperStore, M, Req, Item>('GET/api/member/getQualificationBrandAccess.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：校验用户联系人旺旺合法性
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6692&itf=67295
   */
  /* tslint:disable */
  'GET/api/member/checkContactsName.json': function useData(
    filter?:
      | {request?: Models['GET/api/member/checkContactsName.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['GET/api/member/checkContactsName.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/api/member/checkContactsName.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/api/member/checkContactsName.json'][0]
    type Res = ResponseTypes['GET/api/member/checkContactsName.json']
    return useResponseData<RapperStore, M, Req, Item>('GET/api/member/checkContactsName.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：获取用户联系人列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6692&itf=67298
   */
  /* tslint:disable */
  'GET/api/member/findContactsList.json': function useData(
    filter?:
      | {request?: Models['GET/api/member/findContactsList.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['GET/api/member/findContactsList.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/api/member/findContactsList.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/api/member/findContactsList.json'][0]
    type Res = ResponseTypes['GET/api/member/findContactsList.json']
    return useResponseData<RapperStore, M, Req, Item>('GET/api/member/findContactsList.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：查询用户违规状态
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6692&itf=67473
   */
  /* tslint:disable */
  'GET/api/member/getPunishStatus.json': function useData(
    filter?:
      | {request?: Models['GET/api/member/getPunishStatus.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['GET/api/member/getPunishStatus.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/api/member/getPunishStatus.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/api/member/getPunishStatus.json'][0]
    type Res = ResponseTypes['GET/api/member/getPunishStatus.json']
    return useResponseData<RapperStore, M, Req, Item>('GET/api/member/getPunishStatus.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：查询用户违规记录
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6692&itf=67476
   */
  /* tslint:disable */
  'GET/api/member/findPunishRecordList.json': function useData(
    filter?:
      | {request?: Models['GET/api/member/findPunishRecordList.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['GET/api/member/findPunishRecordList.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/api/member/findPunishRecordList.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/api/member/findPunishRecordList.json'][0]
    type Res = ResponseTypes['GET/api/member/findPunishRecordList.json']
    return useResponseData<RapperStore, M, Req, Item>('GET/api/member/findPunishRecordList.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：查询用户资质违规记录
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6692&itf=67482
   */
  /* tslint:disable */
  'GET/api/member/findQualificationPunishRecordList.json': function useData(
    filter?:
      | {request?: Models['GET/api/member/findQualificationPunishRecordList.json']['Req']}
      | {
          (
            storeData: RapperStore['$$rapperResponseData']['GET/api/member/findQualificationPunishRecordList.json'][0]
          ): boolean
        }
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/api/member/findQualificationPunishRecordList.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/api/member/findQualificationPunishRecordList.json'][0]
    type Res = ResponseTypes['GET/api/member/findQualificationPunishRecordList.json']
    return useResponseData<RapperStore, M, Req, Item>(
      'GET/api/member/findQualificationPunishRecordList.json',
      filter
    ) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：判断用户是否签订协议
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6692&itf=67731
   */
  /* tslint:disable */
  'GET/api/member/isProtocolSigned.json': function useData(
    filter?:
      | {request?: Models['GET/api/member/isProtocolSigned.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['GET/api/member/isProtocolSigned.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/api/member/isProtocolSigned.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/api/member/isProtocolSigned.json'][0]
    type Res = ResponseTypes['GET/api/member/isProtocolSigned.json']
    return useResponseData<RapperStore, M, Req, Item>('GET/api/member/isProtocolSigned.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：用户准入
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6692&itf=68649
   */
  /* tslint:disable */
  'POST/api/member/joinBusinessPlatform.json': function useData(
    filter?:
      | {request?: Models['POST/api/member/joinBusinessPlatform.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['POST/api/member/joinBusinessPlatform.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['POST/api/member/joinBusinessPlatform.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['POST/api/member/joinBusinessPlatform.json'][0]
    type Res = ResponseTypes['POST/api/member/joinBusinessPlatform.json']
    return useResponseData<RapperStore, M, Req, Item>('POST/api/member/joinBusinessPlatform.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：用户处罚
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6692&itf=68692
   */
  /* tslint:disable */
  'GET/TODO': function useData(
    filter?:
      | {request?: Models['GET/TODO']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['GET/TODO'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/TODO']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/TODO'][0]
    type Res = ResponseTypes['GET/TODO']
    return useResponseData<RapperStore, M, Req, Item>('GET/TODO', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：获取用户维度故障信息
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6692&itf=69558
   */
  /* tslint:disable */
  'GET/api/member/findDiagnoseList.json': function useData(
    filter?:
      | {request?: Models['GET/api/member/findDiagnoseList.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['GET/api/member/findDiagnoseList.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/api/member/findDiagnoseList.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/api/member/findDiagnoseList.json'][0]
    type Res = ResponseTypes['GET/api/member/findDiagnoseList.json']
    return useResponseData<RapperStore, M, Req, Item>('GET/api/member/findDiagnoseList.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：信息流运营编辑接口
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6692&itf=70153
   */
  /* tslint:disable */
  'GET/https://mo.m.taobao.com/feeds/': function useData(
    filter?:
      | {request?: Models['GET/https://mo.m.taobao.com/feeds/']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['GET/https://mo.m.taobao.com/feeds/'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/https://mo.m.taobao.com/feeds/']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/https://mo.m.taobao.com/feeds/'][0]
    type Res = ResponseTypes['GET/https://mo.m.taobao.com/feeds/']
    return useResponseData<RapperStore, M, Req, Item>('GET/https://mo.m.taobao.com/feeds/', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：一站式运营编辑接口
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6692&itf=71471
   */
  /* tslint:disable */
  'GET/https://mo.m.taobao.com/one-stop/': function useData(
    filter?:
      | {request?: Models['GET/https://mo.m.taobao.com/one-stop/']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['GET/https://mo.m.taobao.com/one-stop/'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/https://mo.m.taobao.com/one-stop/']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/https://mo.m.taobao.com/one-stop/'][0]
    type Res = ResponseTypes['GET/https://mo.m.taobao.com/one-stop/']
    return useResponseData<RapperStore, M, Req, Item>('GET/https://mo.m.taobao.com/one-stop/', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：获取邀请链接
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6692&itf=73310
   */
  /* tslint:disable */
  'GET/api/member/invitation/url.json': function useData(
    filter?:
      | {request?: Models['GET/api/member/invitation/url.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['GET/api/member/invitation/url.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/api/member/invitation/url.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/api/member/invitation/url.json'][0]
    type Res = ResponseTypes['GET/api/member/invitation/url.json']
    return useResponseData<RapperStore, M, Req, Item>('GET/api/member/invitation/url.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：获取用户使用进度
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6692&itf=73741
   */
  /* tslint:disable */
  'GET/api/member/stage.json': function useData(
    filter?:
      | {request?: Models['GET/api/member/stage.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['GET/api/member/stage.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/api/member/stage.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/api/member/stage.json'][0]
    type Res = ResponseTypes['GET/api/member/stage.json']
    return useResponseData<RapperStore, M, Req, Item>('GET/api/member/stage.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：用户活动的一些信息
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6692&itf=75881
   */
  /* tslint:disable */
  'GET/api/member/activity.json': function useData(
    filter?:
      | {request?: Models['GET/api/member/activity.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['GET/api/member/activity.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/api/member/activity.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/api/member/activity.json'][0]
    type Res = ResponseTypes['GET/api/member/activity.json']
    return useResponseData<RapperStore, M, Req, Item>('GET/api/member/activity.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：用户活动的宝贝引导信息
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6692&itf=87195
   */
  /* tslint:disable */
  'GET/api/member/activity/itemGuide.json': function useData(
    filter?:
      | {request?: Models['GET/api/member/activity/itemGuide.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['GET/api/member/activity/itemGuide.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/api/member/activity/itemGuide.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/api/member/activity/itemGuide.json'][0]
    type Res = ResponseTypes['GET/api/member/activity/itemGuide.json']
    return useResponseData<RapperStore, M, Req, Item>('GET/api/member/activity/itemGuide.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：转移计划信息
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6692&itf=77790
   */
  /* tslint:disable */
  'GET/api/member/transfer.json': function useData(
    filter?:
      | {request?: Models['GET/api/member/transfer.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['GET/api/member/transfer.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/api/member/transfer.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/api/member/transfer.json'][0]
    type Res = ResponseTypes['GET/api/member/transfer.json']
    return useResponseData<RapperStore, M, Req, Item>('GET/api/member/transfer.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：新客任务
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6692&itf=79580
   */
  /* tslint:disable */
  'GET/api/member/newGuestTask.json': function useData(
    filter?:
      | {request?: Models['GET/api/member/newGuestTask.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['GET/api/member/newGuestTask.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/api/member/newGuestTask.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/api/member/newGuestTask.json'][0]
    type Res = ResponseTypes['GET/api/member/newGuestTask.json']
    return useResponseData<RapperStore, M, Req, Item>('GET/api/member/newGuestTask.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：获取账户及自动充值提醒
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6707&itf=67316
   */
  /* tslint:disable */
  'GET/api/account/getAcctBalanceRemindSettingAutoRecharge.json': function useData(
    filter?:
      | {request?: Models['GET/api/account/getAcctBalanceRemindSettingAutoRecharge.json']['Req']}
      | {
          (
            storeData: RapperStore['$$rapperResponseData']['GET/api/account/getAcctBalanceRemindSettingAutoRecharge.json'][0]
          ): boolean
        }
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/api/account/getAcctBalanceRemindSettingAutoRecharge.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/api/account/getAcctBalanceRemindSettingAutoRecharge.json'][0]
    type Res = ResponseTypes['GET/api/account/getAcctBalanceRemindSettingAutoRecharge.json']
    return useResponseData<RapperStore, M, Req, Item>(
      'GET/api/account/getAcctBalanceRemindSettingAutoRecharge.json',
      filter
    ) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：查询支付宝账号是否完成代扣协议签约
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6707&itf=67323
   */
  /* tslint:disable */
  'GET/api/account/getSignInfo.json': function useData(
    filter?:
      | {request?: Models['GET/api/account/getSignInfo.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['GET/api/account/getSignInfo.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/api/account/getSignInfo.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/api/account/getSignInfo.json'][0]
    type Res = ResponseTypes['GET/api/account/getSignInfo.json']
    return useResponseData<RapperStore, M, Req, Item>('GET/api/account/getSignInfo.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：更新账户及自动充值设置
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6707&itf=67324
   */
  /* tslint:disable */
  'PUT/api/account/modifyAcctBalanceRemindSettingAutoRecharge.json': function useData(
    filter?:
      | {request?: Models['PUT/api/account/modifyAcctBalanceRemindSettingAutoRecharge.json']['Req']}
      | {
          (
            storeData: RapperStore['$$rapperResponseData']['PUT/api/account/modifyAcctBalanceRemindSettingAutoRecharge.json'][0]
          ): boolean
        }
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['PUT/api/account/modifyAcctBalanceRemindSettingAutoRecharge.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['PUT/api/account/modifyAcctBalanceRemindSettingAutoRecharge.json'][0]
    type Res = ResponseTypes['PUT/api/account/modifyAcctBalanceRemindSettingAutoRecharge.json']
    return useResponseData<RapperStore, M, Req, Item>(
      'PUT/api/account/modifyAcctBalanceRemindSettingAutoRecharge.json',
      filter
    ) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：账户解约自动充值
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6707&itf=67330
   */
  /* tslint:disable */
  'PUT/api/account/unsignAutoRecharge.json': function useData(
    filter?:
      | {request?: Models['PUT/api/account/unsignAutoRecharge.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['PUT/api/account/unsignAutoRecharge.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['PUT/api/account/unsignAutoRecharge.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['PUT/api/account/unsignAutoRecharge.json'][0]
    type Res = ResponseTypes['PUT/api/account/unsignAutoRecharge.json']
    return useResponseData<RapperStore, M, Req, Item>('PUT/api/account/unsignAutoRecharge.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：查询账户流水
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6707&itf=67374
   */
  /* tslint:disable */
  'GET/api/account/findItemList.json': function useData(
    filter?:
      | {request?: Models['GET/api/account/findItemList.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['GET/api/account/findItemList.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/api/account/findItemList.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/api/account/findItemList.json'][0]
    type Res = ResponseTypes['GET/api/account/findItemList.json']
    return useResponseData<RapperStore, M, Req, Item>('GET/api/account/findItemList.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：下载账户流水
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6707&itf=67375
   */
  /* tslint:disable */
  'GET/api/account/exportItemList.action': function useData(
    filter?:
      | {request?: Models['GET/api/account/exportItemList.action']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['GET/api/account/exportItemList.action'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/api/account/exportItemList.action']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/api/account/exportItemList.action'][0]
    type Res = ResponseTypes['GET/api/account/exportItemList.action']
    return useResponseData<RapperStore, M, Req, Item>('GET/api/account/exportItemList.action', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：优惠券
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6707&itf=67407
   */
  /* tslint:disable */
  'GET/和钻展保持一致': function useData(
    filter?:
      | {request?: Models['GET/和钻展保持一致']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['GET/和钻展保持一致'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/和钻展保持一致']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/和钻展保持一致'][0]
    type Res = ResponseTypes['GET/和钻展保持一致']
    return useResponseData<RapperStore, M, Req, Item>('GET/和钻展保持一致', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：获取提醒设置（账户余额和计划预算）
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6707&itf=68995
   */
  /* tslint:disable */
  'GET/api/account/findMessageRemindList.json': function useData(
    filter?:
      | {request?: Models['GET/api/account/findMessageRemindList.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['GET/api/account/findMessageRemindList.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/api/account/findMessageRemindList.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/api/account/findMessageRemindList.json'][0]
    type Res = ResponseTypes['GET/api/account/findMessageRemindList.json']
    return useResponseData<RapperStore, M, Req, Item>('GET/api/account/findMessageRemindList.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：覆盖更新提醒设置
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6707&itf=69000
   */
  /* tslint:disable */
  'POST/api/account/modifyAllMessageRemindList.json': function useData(
    filter?:
      | {request?: Models['POST/api/account/modifyAllMessageRemindList.json']['Req']}
      | {
          (
            storeData: RapperStore['$$rapperResponseData']['POST/api/account/modifyAllMessageRemindList.json'][0]
          ): boolean
        }
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['POST/api/account/modifyAllMessageRemindList.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['POST/api/account/modifyAllMessageRemindList.json'][0]
    type Res = ResponseTypes['POST/api/account/modifyAllMessageRemindList.json']
    return useResponseData<RapperStore, M, Req, Item>('POST/api/account/modifyAllMessageRemindList.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：获取退款列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6707&itf=72837
   */
  /* tslint:disable */
  'GET/api/account/getRefundList.json': function useData(
    filter?:
      | {request?: Models['GET/api/account/getRefundList.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['GET/api/account/getRefundList.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/api/account/getRefundList.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/api/account/getRefundList.json'][0]
    type Res = ResponseTypes['GET/api/account/getRefundList.json']
    return useResponseData<RapperStore, M, Req, Item>('GET/api/account/getRefundList.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：创建退款
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6707&itf=72838
   */
  /* tslint:disable */
  'POST/api/account/createRefund.json': function useData(
    filter?:
      | {request?: Models['POST/api/account/createRefund.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['POST/api/account/createRefund.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['POST/api/account/createRefund.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['POST/api/account/createRefund.json'][0]
    type Res = ResponseTypes['POST/api/account/createRefund.json']
    return useResponseData<RapperStore, M, Req, Item>('POST/api/account/createRefund.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：退款校验
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6707&itf=72839
   */
  /* tslint:disable */
  'GET/api/account/checkRefund.json': function useData(
    filter?:
      | {request?: Models['GET/api/account/checkRefund.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['GET/api/account/checkRefund.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/api/account/checkRefund.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/api/account/checkRefund.json'][0]
    type Res = ResponseTypes['GET/api/account/checkRefund.json']
    return useResponseData<RapperStore, M, Req, Item>('GET/api/account/checkRefund.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：【国际版】是否签署cae代扣协议
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6707&itf=72855
   */
  /* tslint:disable */
  'GET/api/account/isSignGlobalAlipay.json': function useData(
    filter?:
      | {request?: Models['GET/api/account/isSignGlobalAlipay.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['GET/api/account/isSignGlobalAlipay.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/api/account/isSignGlobalAlipay.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/api/account/isSignGlobalAlipay.json'][0]
    type Res = ResponseTypes['GET/api/account/isSignGlobalAlipay.json']
    return useResponseData<RapperStore, M, Req, Item>('GET/api/account/isSignGlobalAlipay.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：【国际版】充值
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6707&itf=72857
   */
  /* tslint:disable */
  'GET/api/account/charge.json': function useData(
    filter?:
      | {request?: Models['GET/api/account/charge.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['GET/api/account/charge.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/api/account/charge.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/api/account/charge.json'][0]
    type Res = ResponseTypes['GET/api/account/charge.json']
    return useResponseData<RapperStore, M, Req, Item>('GET/api/account/charge.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：获取操作日志信息
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6707&itf=74120
   */
  /* tslint:disable */
  'GET/api/log/findOperationLog.json': function useData(
    filter?:
      | {request?: Models['GET/api/log/findOperationLog.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['GET/api/log/findOperationLog.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/api/log/findOperationLog.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/api/log/findOperationLog.json'][0]
    type Res = ResponseTypes['GET/api/log/findOperationLog.json']
    return useResponseData<RapperStore, M, Req, Item>('GET/api/log/findOperationLog.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：通过单元名称查询单元信息
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6707&itf=74341
   */
  /* tslint:disable */
  'GET/api/log/findAdgroupByName.json': function useData(
    filter?:
      | {request?: Models['GET/api/log/findAdgroupByName.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['GET/api/log/findAdgroupByName.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/api/log/findAdgroupByName.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/api/log/findAdgroupByName.json'][0]
    type Res = ResponseTypes['GET/api/log/findAdgroupByName.json']
    return useResponseData<RapperStore, M, Req, Item>('GET/api/log/findAdgroupByName.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：通过计划名称查询计划信息
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6707&itf=74342
   */
  /* tslint:disable */
  'GET/api/log/findCampaignByName.json': function useData(
    filter?:
      | {request?: Models['GET/api/log/findCampaignByName.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['GET/api/log/findCampaignByName.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/api/log/findCampaignByName.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/api/log/findCampaignByName.json'][0]
    type Res = ResponseTypes['GET/api/log/findCampaignByName.json']
    return useResponseData<RapperStore, M, Req, Item>('GET/api/log/findCampaignByName.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：获取累计消耗
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6707&itf=76780
   */
  /* tslint:disable */
  'GET/api/account/findAccumulateDeduct.json': function useData(
    filter?:
      | {request?: Models['GET/api/account/findAccumulateDeduct.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['GET/api/account/findAccumulateDeduct.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/api/account/findAccumulateDeduct.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/api/account/findAccumulateDeduct.json'][0]
    type Res = ResponseTypes['GET/api/account/findAccumulateDeduct.json']
    return useResponseData<RapperStore, M, Req, Item>('GET/api/account/findAccumulateDeduct.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：发送短信验证码
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6708&itf=67327
   */
  /* tslint:disable */
  'GET/api/message/sendMobileCode.json': function useData(
    filter?:
      | {request?: Models['GET/api/message/sendMobileCode.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['GET/api/message/sendMobileCode.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/api/message/sendMobileCode.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/api/message/sendMobileCode.json'][0]
    type Res = ResponseTypes['GET/api/message/sendMobileCode.json']
    return useResponseData<RapperStore, M, Req, Item>('GET/api/message/sendMobileCode.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：验证短信验证码
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6708&itf=67328
   */
  /* tslint:disable */
  'POST/api/message/verifyMobilePhoneCode.json': function useData(
    filter?:
      | {request?: Models['POST/api/message/verifyMobilePhoneCode.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['POST/api/message/verifyMobilePhoneCode.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['POST/api/message/verifyMobilePhoneCode.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['POST/api/message/verifyMobilePhoneCode.json'][0]
    type Res = ResponseTypes['POST/api/message/verifyMobilePhoneCode.json']
    return useResponseData<RapperStore, M, Req, Item>('POST/api/message/verifyMobilePhoneCode.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：系统码表获取
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6711&itf=67372
   */
  /* tslint:disable */
  'GET/api/common/findCodeList.json': function useData(
    filter?:
      | {request?: Models['GET/api/common/findCodeList.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['GET/api/common/findCodeList.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/api/common/findCodeList.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/api/common/findCodeList.json'][0]
    type Res = ResponseTypes['GET/api/common/findCodeList.json']
    return useResponseData<RapperStore, M, Req, Item>('GET/api/common/findCodeList.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：获取前端CDN版本
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6711&itf=67763
   */
  /* tslint:disable */
  'GET/api/common/getVersion.json': function useData(
    filter?:
      | {request?: Models['GET/api/common/getVersion.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['GET/api/common/getVersion.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/api/common/getVersion.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/api/common/getVersion.json'][0]
    type Res = ResponseTypes['GET/api/common/getVersion.json']
    return useResponseData<RapperStore, M, Req, Item>('GET/api/common/getVersion.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：获取组件元数据列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6712&itf=67393
   */
  /* tslint:disable */
  'GET/api/component/findComponentMetaList.json': function useData(
    filter?:
      | {request?: Models['GET/api/component/findComponentMetaList.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['GET/api/component/findComponentMetaList.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/api/component/findComponentMetaList.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/api/component/findComponentMetaList.json'][0]
    type Res = ResponseTypes['GET/api/component/findComponentMetaList.json']
    return useResponseData<RapperStore, M, Req, Item>('GET/api/component/findComponentMetaList.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：获取用户组建模板
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6712&itf=67395
   */
  /* tslint:disable */
  'GET/api/component/findMemberTemplateList.json': function useData(
    filter?:
      | {request?: Models['GET/api/component/findMemberTemplateList.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['GET/api/component/findMemberTemplateList.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/api/component/findMemberTemplateList.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/api/component/findMemberTemplateList.json'][0]
    type Res = ResponseTypes['GET/api/component/findMemberTemplateList.json']
    return useResponseData<RapperStore, M, Req, Item>('GET/api/component/findMemberTemplateList.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：新增用户组件模板
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6712&itf=67396
   */
  /* tslint:disable */
  'POST/api/component/addMemberTemplate.json': function useData(
    filter?:
      | {request?: Models['POST/api/component/addMemberTemplate.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['POST/api/component/addMemberTemplate.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['POST/api/component/addMemberTemplate.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['POST/api/component/addMemberTemplate.json'][0]
    type Res = ResponseTypes['POST/api/component/addMemberTemplate.json']
    return useResponseData<RapperStore, M, Req, Item>('POST/api/component/addMemberTemplate.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：修改用户组建模板
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6712&itf=67398
   */
  /* tslint:disable */
  'PUT/api/component/updateMemberTemplate.json': function useData(
    filter?:
      | {request?: Models['PUT/api/component/updateMemberTemplate.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['PUT/api/component/updateMemberTemplate.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['PUT/api/component/updateMemberTemplate.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['PUT/api/component/updateMemberTemplate.json'][0]
    type Res = ResponseTypes['PUT/api/component/updateMemberTemplate.json']
    return useResponseData<RapperStore, M, Req, Item>('PUT/api/component/updateMemberTemplate.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：删除用户组建模板
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6712&itf=67399
   */
  /* tslint:disable */
  'DELETE/api/component/deleteMemberTemplate.json': function useData(
    filter?:
      | {request?: Models['DELETE/api/component/deleteMemberTemplate.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['DELETE/api/component/deleteMemberTemplate.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['DELETE/api/component/deleteMemberTemplate.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['DELETE/api/component/deleteMemberTemplate.json'][0]
    type Res = ResponseTypes['DELETE/api/component/deleteMemberTemplate.json']
    return useResponseData<RapperStore, M, Req, Item>('DELETE/api/component/deleteMemberTemplate.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：✅【新】获取菜单列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6712&itf=80888
   */
  /* tslint:disable */
  'GET/api/component/findMenuList.json': function useData(
    filter?:
      | {request?: Models['GET/api/component/findMenuList.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['GET/api/component/findMenuList.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/api/component/findMenuList.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/api/component/findMenuList.json'][0]
    type Res = ResponseTypes['GET/api/component/findMenuList.json']
    return useResponseData<RapperStore, M, Req, Item>('GET/api/component/findMenuList.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：✅【新】获取组件列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6712&itf=80943
   */
  /* tslint:disable */
  'GET/api/component/findComponentList.json': function useData(
    filter?:
      | {request?: Models['GET/api/component/findComponentList.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['GET/api/component/findComponentList.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/api/component/findComponentList.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/api/component/findComponentList.json'][0]
    type Res = ResponseTypes['GET/api/component/findComponentList.json']
    return useResponseData<RapperStore, M, Req, Item>('GET/api/component/findComponentList.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：【报表】账户分时汇总
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6752&itf=67459
   */
  /* tslint:disable */
  'GET/api/account/report/findHourSum.json': function useData(
    filter?:
      | {request?: Models['GET/api/account/report/findHourSum.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['GET/api/account/report/findHourSum.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/api/account/report/findHourSum.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/api/account/report/findHourSum.json'][0]
    type Res = ResponseTypes['GET/api/account/report/findHourSum.json']
    return useResponseData<RapperStore, M, Req, Item>('GET/api/account/report/findHourSum.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：【报表】账户分时列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6752&itf=67344
   */
  /* tslint:disable */
  'GET/api/account/report/findHourList.json': function useData(
    filter?:
      | {request?: Models['GET/api/account/report/findHourList.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['GET/api/account/report/findHourList.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/api/account/report/findHourList.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/api/account/report/findHourList.json'][0]
    type Res = ResponseTypes['GET/api/account/report/findHourList.json']
    return useResponseData<RapperStore, M, Req, Item>('GET/api/account/report/findHourList.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：【报表】账户整体分日汇总
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6752&itf=67472
   */
  /* tslint:disable */
  'GET/api/account/report/findDaySum.json': function useData(
    filter?:
      | {request?: Models['GET/api/account/report/findDaySum.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['GET/api/account/report/findDaySum.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/api/account/report/findDaySum.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/api/account/report/findDaySum.json'][0]
    type Res = ResponseTypes['GET/api/account/report/findDaySum.json']
    return useResponseData<RapperStore, M, Req, Item>('GET/api/account/report/findDaySum.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：【报表】账户整体分日列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6752&itf=67475
   */
  /* tslint:disable */
  'GET/api/account/report/findDayList.json': function useData(
    filter?:
      | {request?: Models['GET/api/account/report/findDayList.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['GET/api/account/report/findDayList.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/api/account/report/findDayList.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/api/account/report/findDayList.json'][0]
    type Res = ResponseTypes['GET/api/account/report/findDayList.json']
    return useResponseData<RapperStore, M, Req, Item>('GET/api/account/report/findDayList.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：【 报表】计划分页列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6752&itf=67623
   */
  /* tslint:disable */
  'GET/api/campaign/report/findPage.json': function useData(
    filter?:
      | {request?: Models['GET/api/campaign/report/findPage.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['GET/api/campaign/report/findPage.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/api/campaign/report/findPage.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/api/campaign/report/findPage.json'][0]
    type Res = ResponseTypes['GET/api/campaign/report/findPage.json']
    return useResponseData<RapperStore, M, Req, Item>('GET/api/campaign/report/findPage.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：【报表】单个计划报表： 列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6752&itf=67480
   */
  /* tslint:disable */
  'GET/api/campaign/report/findList.json': function useData(
    filter?:
      | {request?: Models['GET/api/campaign/report/findList.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['GET/api/campaign/report/findList.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/api/campaign/report/findList.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/api/campaign/report/findList.json'][0]
    type Res = ResponseTypes['GET/api/campaign/report/findList.json']
    return useResponseData<RapperStore, M, Req, Item>('GET/api/campaign/report/findList.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：【报表】单个计划报表：汇总
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6752&itf=67481
   */
  /* tslint:disable */
  'GET/api/campaign/report/findSum.json': function useData(
    filter?:
      | {request?: Models['GET/api/campaign/report/findSum.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['GET/api/campaign/report/findSum.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/api/campaign/report/findSum.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/api/campaign/report/findSum.json'][0]
    type Res = ResponseTypes['GET/api/campaign/report/findSum.json']
    return useResponseData<RapperStore, M, Req, Item>('GET/api/campaign/report/findSum.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：【报表】单元分页列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6752&itf=67621
   */
  /* tslint:disable */
  'GET/api/adgroup/report/findPage.json': function useData(
    filter?:
      | {request?: Models['GET/api/adgroup/report/findPage.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['GET/api/adgroup/report/findPage.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/api/adgroup/report/findPage.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/api/adgroup/report/findPage.json'][0]
    type Res = ResponseTypes['GET/api/adgroup/report/findPage.json']
    return useResponseData<RapperStore, M, Req, Item>('GET/api/adgroup/report/findPage.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：【报表】单个单元报表： 列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6752&itf=67486
   */
  /* tslint:disable */
  'GET/api/adgroup/report/findList.json': function useData(
    filter?:
      | {request?: Models['GET/api/adgroup/report/findList.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['GET/api/adgroup/report/findList.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/api/adgroup/report/findList.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/api/adgroup/report/findList.json'][0]
    type Res = ResponseTypes['GET/api/adgroup/report/findList.json']
    return useResponseData<RapperStore, M, Req, Item>('GET/api/adgroup/report/findList.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：【报表】单个单元报表：汇总
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6752&itf=67487
   */
  /* tslint:disable */
  'GET/api/adgroup/report/findSum.json': function useData(
    filter?:
      | {request?: Models['GET/api/adgroup/report/findSum.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['GET/api/adgroup/report/findSum.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/api/adgroup/report/findSum.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/api/adgroup/report/findSum.json'][0]
    type Res = ResponseTypes['GET/api/adgroup/report/findSum.json']
    return useResponseData<RapperStore, M, Req, Item>('GET/api/adgroup/report/findSum.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：【报表】创意分页列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6752&itf=67639
   */
  /* tslint:disable */
  'GET/api/creative/report/findPage.json': function useData(
    filter?:
      | {request?: Models['GET/api/creative/report/findPage.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['GET/api/creative/report/findPage.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/api/creative/report/findPage.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/api/creative/report/findPage.json'][0]
    type Res = ResponseTypes['GET/api/creative/report/findPage.json']
    return useResponseData<RapperStore, M, Req, Item>('GET/api/creative/report/findPage.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：【报表】单个创意报表： 列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6752&itf=69359
   */
  /* tslint:disable */
  'GET/api/creative/report/findList.json': function useData(
    filter?:
      | {request?: Models['GET/api/creative/report/findList.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['GET/api/creative/report/findList.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/api/creative/report/findList.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/api/creative/report/findList.json'][0]
    type Res = ResponseTypes['GET/api/creative/report/findList.json']
    return useResponseData<RapperStore, M, Req, Item>('GET/api/creative/report/findList.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：【报表】单个创意报表： 汇总
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6752&itf=69360
   */
  /* tslint:disable */
  'GET/api/creative/report/findSum.json': function useData(
    filter?:
      | {request?: Models['GET/api/creative/report/findSum.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['GET/api/creative/report/findSum.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/api/creative/report/findSum.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/api/creative/report/findSum.json'][0]
    type Res = ResponseTypes['GET/api/creative/report/findSum.json']
    return useResponseData<RapperStore, M, Req, Item>('GET/api/creative/report/findSum.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：【报表】定向分页列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6752&itf=67637
   */
  /* tslint:disable */
  'GET/api/crowd/report/findPage.json': function useData(
    filter?:
      | {request?: Models['GET/api/crowd/report/findPage.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['GET/api/crowd/report/findPage.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/api/crowd/report/findPage.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/api/crowd/report/findPage.json'][0]
    type Res = ResponseTypes['GET/api/crowd/report/findPage.json']
    return useResponseData<RapperStore, M, Req, Item>('GET/api/crowd/report/findPage.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：【报表】单个定向报表： 列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6752&itf=69469
   */
  /* tslint:disable */
  'GET/api/crowd/report/findList.json': function useData(
    filter?:
      | {request?: Models['GET/api/crowd/report/findList.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['GET/api/crowd/report/findList.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/api/crowd/report/findList.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/api/crowd/report/findList.json'][0]
    type Res = ResponseTypes['GET/api/crowd/report/findList.json']
    return useResponseData<RapperStore, M, Req, Item>('GET/api/crowd/report/findList.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：【报表】单个定向报表： 汇总
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6752&itf=69470
   */
  /* tslint:disable */
  'GET/api/crowd/report/findSum.json': function useData(
    filter?:
      | {request?: Models['GET/api/crowd/report/findSum.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['GET/api/crowd/report/findSum.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/api/crowd/report/findSum.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/api/crowd/report/findSum.json'][0]
    type Res = ResponseTypes['GET/api/crowd/report/findSum.json']
    return useResponseData<RapperStore, M, Req, Item>('GET/api/crowd/report/findSum.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：【报表】资源位分页列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6752&itf=67622
   */
  /* tslint:disable */
  'GET/api/adzone/report/findPage.json': function useData(
    filter?:
      | {request?: Models['GET/api/adzone/report/findPage.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['GET/api/adzone/report/findPage.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/api/adzone/report/findPage.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/api/adzone/report/findPage.json'][0]
    type Res = ResponseTypes['GET/api/adzone/report/findPage.json']
    return useResponseData<RapperStore, M, Req, Item>('GET/api/adzone/report/findPage.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：【报表】单个资源位报表： 列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6752&itf=69472
   */
  /* tslint:disable */
  'GET/api/adzone/report/findList.json': function useData(
    filter?:
      | {request?: Models['GET/api/adzone/report/findList.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['GET/api/adzone/report/findList.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/api/adzone/report/findList.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/api/adzone/report/findList.json'][0]
    type Res = ResponseTypes['GET/api/adzone/report/findList.json']
    return useResponseData<RapperStore, M, Req, Item>('GET/api/adzone/report/findList.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：【报表】单个资源位报表： 汇总
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6752&itf=69471
   */
  /* tslint:disable */
  'GET/api/adzone/report/findSum.json': function useData(
    filter?:
      | {request?: Models['GET/api/adzone/report/findSum.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['GET/api/adzone/report/findSum.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/api/adzone/report/findSum.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/api/adzone/report/findSum.json'][0]
    type Res = ResponseTypes['GET/api/adzone/report/findSum.json']
    return useResponseData<RapperStore, M, Req, Item>('GET/api/adzone/report/findSum.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：【报表】账户概览：人群整体分日汇总
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6752&itf=79815
   */
  /* tslint:disable */
  'GET/api/account/report/findCrowdDaySum.json': function useData(
    filter?:
      | {request?: Models['GET/api/account/report/findCrowdDaySum.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['GET/api/account/report/findCrowdDaySum.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/api/account/report/findCrowdDaySum.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/api/account/report/findCrowdDaySum.json'][0]
    type Res = ResponseTypes['GET/api/account/report/findCrowdDaySum.json']
    return useResponseData<RapperStore, M, Req, Item>('GET/api/account/report/findCrowdDaySum.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：【报表】账户概览：人群整体分日列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6752&itf=79816
   */
  /* tslint:disable */
  'GET/api/account/report/findCrowdDayList.json': function useData(
    filter?:
      | {request?: Models['GET/api/account/report/findCrowdDayList.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['GET/api/account/report/findCrowdDayList.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/api/account/report/findCrowdDayList.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/api/account/report/findCrowdDayList.json'][0]
    type Res = ResponseTypes['GET/api/account/report/findCrowdDayList.json']
    return useResponseData<RapperStore, M, Req, Item>('GET/api/account/report/findCrowdDayList.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：【报表】账户概览：宝贝分页列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6752&itf=79817
   */
  /* tslint:disable */
  'GET/api/material/report/findItemPage.json': function useData(
    filter?:
      | {request?: Models['GET/api/material/report/findItemPage.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['GET/api/material/report/findItemPage.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/api/material/report/findItemPage.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/api/material/report/findItemPage.json'][0]
    type Res = ResponseTypes['GET/api/material/report/findItemPage.json']
    return useResponseData<RapperStore, M, Req, Item>('GET/api/material/report/findItemPage.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：【报表】双十一活动报表-消费者触达
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6752&itf=82974
   */
  /* tslint:disable */
  'GET/api/activity/report/consumerReach.json': function useData(
    filter?:
      | {request?: Models['GET/api/activity/report/consumerReach.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['GET/api/activity/report/consumerReach.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/api/activity/report/consumerReach.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/api/activity/report/consumerReach.json'][0]
    type Res = ResponseTypes['GET/api/activity/report/consumerReach.json']
    return useResponseData<RapperStore, M, Req, Item>('GET/api/activity/report/consumerReach.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：【报表】账户分时列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7005&itf=69611
   */
  /* tslint:disable */
  'GET/api/account/report/exportHourList.json': function useData(
    filter?:
      | {request?: Models['GET/api/account/report/exportHourList.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['GET/api/account/report/exportHourList.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/api/account/report/exportHourList.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/api/account/report/exportHourList.json'][0]
    type Res = ResponseTypes['GET/api/account/report/exportHourList.json']
    return useResponseData<RapperStore, M, Req, Item>('GET/api/account/report/exportHourList.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：【报表】账户整体分日列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7005&itf=69612
   */
  /* tslint:disable */
  'GET/api/account/report/exportDayList.json': function useData(
    filter?:
      | {request?: Models['GET/api/account/report/exportDayList.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['GET/api/account/report/exportDayList.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/api/account/report/exportDayList.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/api/account/report/exportDayList.json'][0]
    type Res = ResponseTypes['GET/api/account/report/exportDayList.json']
    return useResponseData<RapperStore, M, Req, Item>('GET/api/account/report/exportDayList.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：【 报表】计划报表下载
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7005&itf=69614
   */
  /* tslint:disable */
  'GET/api/campaign/report/exportCampaign.json': function useData(
    filter?:
      | {request?: Models['GET/api/campaign/report/exportCampaign.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['GET/api/campaign/report/exportCampaign.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/api/campaign/report/exportCampaign.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/api/campaign/report/exportCampaign.json'][0]
    type Res = ResponseTypes['GET/api/campaign/report/exportCampaign.json']
    return useResponseData<RapperStore, M, Req, Item>('GET/api/campaign/report/exportCampaign.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：【报表】单个计划报表： 列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7005&itf=69615
   */
  /* tslint:disable */
  'GET/api/campaign/report/exportDayOrHourList.json': function useData(
    filter?:
      | {request?: Models['GET/api/campaign/report/exportDayOrHourList.json']['Req']}
      | {
          (
            storeData: RapperStore['$$rapperResponseData']['GET/api/campaign/report/exportDayOrHourList.json'][0]
          ): boolean
        }
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/api/campaign/report/exportDayOrHourList.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/api/campaign/report/exportDayOrHourList.json'][0]
    type Res = ResponseTypes['GET/api/campaign/report/exportDayOrHourList.json']
    return useResponseData<RapperStore, M, Req, Item>('GET/api/campaign/report/exportDayOrHourList.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：【报表】单个计划报表：汇总
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7005&itf=69616
   */
  /* tslint:disable */
  'GET/api/campaign/report/exportDayOrHourSum.json': function useData(
    filter?:
      | {request?: Models['GET/api/campaign/report/exportDayOrHourSum.json']['Req']}
      | {
          (
            storeData: RapperStore['$$rapperResponseData']['GET/api/campaign/report/exportDayOrHourSum.json'][0]
          ): boolean
        }
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/api/campaign/report/exportDayOrHourSum.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/api/campaign/report/exportDayOrHourSum.json'][0]
    type Res = ResponseTypes['GET/api/campaign/report/exportDayOrHourSum.json']
    return useResponseData<RapperStore, M, Req, Item>('GET/api/campaign/report/exportDayOrHourSum.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：【报表】单元报表下载
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7005&itf=69617
   */
  /* tslint:disable */
  'GET/api/adgroup/report/exportAdgroup.json': function useData(
    filter?:
      | {request?: Models['GET/api/adgroup/report/exportAdgroup.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['GET/api/adgroup/report/exportAdgroup.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/api/adgroup/report/exportAdgroup.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/api/adgroup/report/exportAdgroup.json'][0]
    type Res = ResponseTypes['GET/api/adgroup/report/exportAdgroup.json']
    return useResponseData<RapperStore, M, Req, Item>('GET/api/adgroup/report/exportAdgroup.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：【报表】单个单元报表： 列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7005&itf=69618
   */
  /* tslint:disable */
  'GET/api/adgroup/report/exportDayOrHourList.json': function useData(
    filter?:
      | {request?: Models['GET/api/adgroup/report/exportDayOrHourList.json']['Req']}
      | {
          (
            storeData: RapperStore['$$rapperResponseData']['GET/api/adgroup/report/exportDayOrHourList.json'][0]
          ): boolean
        }
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/api/adgroup/report/exportDayOrHourList.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/api/adgroup/report/exportDayOrHourList.json'][0]
    type Res = ResponseTypes['GET/api/adgroup/report/exportDayOrHourList.json']
    return useResponseData<RapperStore, M, Req, Item>('GET/api/adgroup/report/exportDayOrHourList.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：【报表】单个单元报表：汇总
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7005&itf=69619
   */
  /* tslint:disable */
  'GET/api/adgroup/report/exportDayOrHourSum.json': function useData(
    filter?:
      | {request?: Models['GET/api/adgroup/report/exportDayOrHourSum.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['GET/api/adgroup/report/exportDayOrHourSum.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/api/adgroup/report/exportDayOrHourSum.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/api/adgroup/report/exportDayOrHourSum.json'][0]
    type Res = ResponseTypes['GET/api/adgroup/report/exportDayOrHourSum.json']
    return useResponseData<RapperStore, M, Req, Item>('GET/api/adgroup/report/exportDayOrHourSum.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：【报表】创意下载
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7005&itf=69620
   */
  /* tslint:disable */
  'GET/api/creative/report/exportCreative.json': function useData(
    filter?:
      | {request?: Models['GET/api/creative/report/exportCreative.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['GET/api/creative/report/exportCreative.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/api/creative/report/exportCreative.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/api/creative/report/exportCreative.json'][0]
    type Res = ResponseTypes['GET/api/creative/report/exportCreative.json']
    return useResponseData<RapperStore, M, Req, Item>('GET/api/creative/report/exportCreative.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：【报表】单个创意报表： 列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7005&itf=69622
   */
  /* tslint:disable */
  'GET/api/creative/report/exportDayOrHourList.json': function useData(
    filter?:
      | {request?: Models['GET/api/creative/report/exportDayOrHourList.json']['Req']}
      | {
          (
            storeData: RapperStore['$$rapperResponseData']['GET/api/creative/report/exportDayOrHourList.json'][0]
          ): boolean
        }
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/api/creative/report/exportDayOrHourList.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/api/creative/report/exportDayOrHourList.json'][0]
    type Res = ResponseTypes['GET/api/creative/report/exportDayOrHourList.json']
    return useResponseData<RapperStore, M, Req, Item>('GET/api/creative/report/exportDayOrHourList.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：【报表】单个创意报表： 汇总
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7005&itf=69623
   */
  /* tslint:disable */
  'GET/api/creative/report/exportDayOrHourSum.json': function useData(
    filter?:
      | {request?: Models['GET/api/creative/report/exportDayOrHourSum.json']['Req']}
      | {
          (
            storeData: RapperStore['$$rapperResponseData']['GET/api/creative/report/exportDayOrHourSum.json'][0]
          ): boolean
        }
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/api/creative/report/exportDayOrHourSum.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/api/creative/report/exportDayOrHourSum.json'][0]
    type Res = ResponseTypes['GET/api/creative/report/exportDayOrHourSum.json']
    return useResponseData<RapperStore, M, Req, Item>('GET/api/creative/report/exportDayOrHourSum.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：【报表】定向下载
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7005&itf=69624
   */
  /* tslint:disable */
  'GET/api/crowd/report/exportCrowd.json': function useData(
    filter?:
      | {request?: Models['GET/api/crowd/report/exportCrowd.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['GET/api/crowd/report/exportCrowd.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/api/crowd/report/exportCrowd.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/api/crowd/report/exportCrowd.json'][0]
    type Res = ResponseTypes['GET/api/crowd/report/exportCrowd.json']
    return useResponseData<RapperStore, M, Req, Item>('GET/api/crowd/report/exportCrowd.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：【报表】单个定向报表： 列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7005&itf=69625
   */
  /* tslint:disable */
  'GET/api/crowd/report/exportDayOrHourList.json': function useData(
    filter?:
      | {request?: Models['GET/api/crowd/report/exportDayOrHourList.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['GET/api/crowd/report/exportDayOrHourList.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/api/crowd/report/exportDayOrHourList.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/api/crowd/report/exportDayOrHourList.json'][0]
    type Res = ResponseTypes['GET/api/crowd/report/exportDayOrHourList.json']
    return useResponseData<RapperStore, M, Req, Item>('GET/api/crowd/report/exportDayOrHourList.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：【报表】单个定向报表： 汇总
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7005&itf=69626
   */
  /* tslint:disable */
  'GET/api/crowd/report/exportDayOrHourSum.json': function useData(
    filter?:
      | {request?: Models['GET/api/crowd/report/exportDayOrHourSum.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['GET/api/crowd/report/exportDayOrHourSum.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/api/crowd/report/exportDayOrHourSum.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/api/crowd/report/exportDayOrHourSum.json'][0]
    type Res = ResponseTypes['GET/api/crowd/report/exportDayOrHourSum.json']
    return useResponseData<RapperStore, M, Req, Item>('GET/api/crowd/report/exportDayOrHourSum.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：【报表】资源位下载
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7005&itf=69627
   */
  /* tslint:disable */
  'GET/api/adzone/report/exportAdzone.json': function useData(
    filter?:
      | {request?: Models['GET/api/adzone/report/exportAdzone.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['GET/api/adzone/report/exportAdzone.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/api/adzone/report/exportAdzone.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/api/adzone/report/exportAdzone.json'][0]
    type Res = ResponseTypes['GET/api/adzone/report/exportAdzone.json']
    return useResponseData<RapperStore, M, Req, Item>('GET/api/adzone/report/exportAdzone.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：【报表】单个资源位报表： 列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7005&itf=69628
   */
  /* tslint:disable */
  'GET/api/adzone/report/exportDayOrHourList.json': function useData(
    filter?:
      | {request?: Models['GET/api/adzone/report/exportDayOrHourList.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['GET/api/adzone/report/exportDayOrHourList.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/api/adzone/report/exportDayOrHourList.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/api/adzone/report/exportDayOrHourList.json'][0]
    type Res = ResponseTypes['GET/api/adzone/report/exportDayOrHourList.json']
    return useResponseData<RapperStore, M, Req, Item>('GET/api/adzone/report/exportDayOrHourList.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：【报表】单个资源位报表： 汇总
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7005&itf=69629
   */
  /* tslint:disable */
  'GET/api/adzone/report/exportDayOrHourSum.json': function useData(
    filter?:
      | {request?: Models['GET/api/adzone/report/exportDayOrHourSum.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['GET/api/adzone/report/exportDayOrHourSum.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/api/adzone/report/exportDayOrHourSum.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/api/adzone/report/exportDayOrHourSum.json'][0]
    type Res = ResponseTypes['GET/api/adzone/report/exportDayOrHourSum.json']
    return useResponseData<RapperStore, M, Req, Item>('GET/api/adzone/report/exportDayOrHourSum.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：【报表】账户概览：宝贝分页列表下载
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7005&itf=79824
   */
  /* tslint:disable */
  'GET/api/material/report/exportItem.json': function useData(
    filter?:
      | {request?: Models['GET/api/material/report/exportItem.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['GET/api/material/report/exportItem.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/api/material/report/exportItem.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/api/material/report/exportItem.json'][0]
    type Res = ResponseTypes['GET/api/material/report/exportItem.json']
    return useResponseData<RapperStore, M, Req, Item>('GET/api/material/report/exportItem.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：【报表】账户概览：人群整体分日列表下载
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7005&itf=80230
   */
  /* tslint:disable */
  'GET/api/account/report/exportCrowdDayList.json': function useData(
    filter?:
      | {request?: Models['GET/api/account/report/exportCrowdDayList.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['GET/api/account/report/exportCrowdDayList.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/api/account/report/exportCrowdDayList.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/api/account/report/exportCrowdDayList.json'][0]
    type Res = ResponseTypes['GET/api/account/report/exportCrowdDayList.json']
    return useResponseData<RapperStore, M, Req, Item>('GET/api/account/report/exportCrowdDayList.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：查询站内信列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7037&itf=69919
   */
  /* tslint:disable */
  'GET/api/message/findLetterList.json': function useData(
    filter?:
      | {request?: Models['GET/api/message/findLetterList.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['GET/api/message/findLetterList.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/api/message/findLetterList.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/api/message/findLetterList.json'][0]
    type Res = ResponseTypes['GET/api/message/findLetterList.json']
    return useResponseData<RapperStore, M, Req, Item>('GET/api/message/findLetterList.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：查看站内信
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7037&itf=69920
   */
  /* tslint:disable */
  'GET/api/message/getLetterDetail.json': function useData(
    filter?:
      | {request?: Models['GET/api/message/getLetterDetail.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['GET/api/message/getLetterDetail.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/api/message/getLetterDetail.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/api/message/getLetterDetail.json'][0]
    type Res = ResponseTypes['GET/api/message/getLetterDetail.json']
    return useResponseData<RapperStore, M, Req, Item>('GET/api/message/getLetterDetail.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：批量已读站内信
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7037&itf=70115
   */
  /* tslint:disable */
  'POST/api/message/batchReadLetters.json': function useData(
    filter?:
      | {request?: Models['POST/api/message/batchReadLetters.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['POST/api/message/batchReadLetters.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['POST/api/message/batchReadLetters.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['POST/api/message/batchReadLetters.json'][0]
    type Res = ResponseTypes['POST/api/message/batchReadLetters.json']
    return useResponseData<RapperStore, M, Req, Item>('POST/api/message/batchReadLetters.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：消费者汇总卡片
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7107&itf=70493
   */
  /* tslint:disable */
  'GET/api/report/consumer/findSummary.json': function useData(
    filter?:
      | {request?: Models['GET/api/report/consumer/findSummary.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['GET/api/report/consumer/findSummary.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/api/report/consumer/findSummary.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/api/report/consumer/findSummary.json'][0]
    type Res = ResponseTypes['GET/api/report/consumer/findSummary.json']
    return useResponseData<RapperStore, M, Req, Item>('GET/api/report/consumer/findSummary.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：消费者流转
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7107&itf=70497
   */
  /* tslint:disable */
  'GET/api/report/consumer/findConsumerCirculation.json': function useData(
    filter?:
      | {request?: Models['GET/api/report/consumer/findConsumerCirculation.json']['Req']}
      | {
          (
            storeData: RapperStore['$$rapperResponseData']['GET/api/report/consumer/findConsumerCirculation.json'][0]
          ): boolean
        }
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/api/report/consumer/findConsumerCirculation.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/api/report/consumer/findConsumerCirculation.json'][0]
    type Res = ResponseTypes['GET/api/report/consumer/findConsumerCirculation.json']
    return useResponseData<RapperStore, M, Req, Item>(
      'GET/api/report/consumer/findConsumerCirculation.json',
      filter
    ) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：粉丝汇总卡片
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7167&itf=70935
   */
  /* tslint:disable */
  'GET/api/report/fans/findSummary.json': function useData(
    filter?:
      | {request?: Models['GET/api/report/fans/findSummary.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['GET/api/report/fans/findSummary.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/api/report/fans/findSummary.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/api/report/fans/findSummary.json'][0]
    type Res = ResponseTypes['GET/api/report/fans/findSummary.json']
    return useResponseData<RapperStore, M, Req, Item>('GET/api/report/fans/findSummary.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：粉丝流转
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7167&itf=70962
   */
  /* tslint:disable */
  'GET/api/report/fans/findCirculation.json': function useData(
    filter?:
      | {request?: Models['GET/api/report/fans/findCirculation.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['GET/api/report/fans/findCirculation.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/api/report/fans/findCirculation.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/api/report/fans/findCirculation.json'][0]
    type Res = ResponseTypes['GET/api/report/fans/findCirculation.json']
    return useResponseData<RapperStore, M, Req, Item>('GET/api/report/fans/findCirculation.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：查询直钻迁移计划
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7473&itf=73258
   */
  /* tslint:disable */
  'GET/api/campaign/findTransferPage.json': function useData(
    filter?:
      | {request?: Models['GET/api/campaign/findTransferPage.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['GET/api/campaign/findTransferPage.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/api/campaign/findTransferPage.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/api/campaign/findTransferPage.json'][0]
    type Res = ResponseTypes['GET/api/campaign/findTransferPage.json']
    return useResponseData<RapperStore, M, Req, Item>('GET/api/campaign/findTransferPage.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：迁移完成
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7473&itf=73370
   */
  /* tslint:disable */
  'POST/api/campaign/transfer.json': function useData(
    filter?:
      | {request?: Models['POST/api/campaign/transfer.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['POST/api/campaign/transfer.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['POST/api/campaign/transfer.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['POST/api/campaign/transfer.json'][0]
    type Res = ResponseTypes['POST/api/campaign/transfer.json']
    return useResponseData<RapperStore, M, Req, Item>('POST/api/campaign/transfer.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：活动整体分日汇总
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7723&itf=75133
   */
  /* tslint:disable */
  'GET/api/activity/report/findDaySum.json': function useData(
    filter?:
      | {request?: Models['GET/api/activity/report/findDaySum.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['GET/api/activity/report/findDaySum.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/api/activity/report/findDaySum.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/api/activity/report/findDaySum.json'][0]
    type Res = ResponseTypes['GET/api/activity/report/findDaySum.json']
    return useResponseData<RapperStore, M, Req, Item>('GET/api/activity/report/findDaySum.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：活动整体分日列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7723&itf=75150
   */
  /* tslint:disable */
  'GET/api/activity/report/findDayList.json': function useData(
    filter?:
      | {request?: Models['GET/api/activity/report/findDayList.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['GET/api/activity/report/findDayList.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/api/activity/report/findDayList.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/api/activity/report/findDayList.json'][0]
    type Res = ResponseTypes['GET/api/activity/report/findDayList.json']
    return useResponseData<RapperStore, M, Req, Item>('GET/api/activity/report/findDayList.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：活动人群整体分日汇总
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7723&itf=75151
   */
  /* tslint:disable */
  'GET/api/activity/report/findCrowdDaySum.json': function useData(
    filter?:
      | {request?: Models['GET/api/activity/report/findCrowdDaySum.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['GET/api/activity/report/findCrowdDaySum.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/api/activity/report/findCrowdDaySum.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/api/activity/report/findCrowdDaySum.json'][0]
    type Res = ResponseTypes['GET/api/activity/report/findCrowdDaySum.json']
    return useResponseData<RapperStore, M, Req, Item>('GET/api/activity/report/findCrowdDaySum.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：活动人群整体分日报表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7723&itf=75152
   */
  /* tslint:disable */
  'GET/api/activity/report/findCrowdDayList.json': function useData(
    filter?:
      | {request?: Models['GET/api/activity/report/findCrowdDayList.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['GET/api/activity/report/findCrowdDayList.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/api/activity/report/findCrowdDayList.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/api/activity/report/findCrowdDayList.json'][0]
    type Res = ResponseTypes['GET/api/activity/report/findCrowdDayList.json']
    return useResponseData<RapperStore, M, Req, Item>('GET/api/activity/report/findCrowdDayList.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：活动宝贝分页列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7723&itf=75153
   */
  /* tslint:disable */
  'GET/api/activity/report/findItemPage.json': function useData(
    filter?:
      | {request?: Models['GET/api/activity/report/findItemPage.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['GET/api/activity/report/findItemPage.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/api/activity/report/findItemPage.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/api/activity/report/findItemPage.json'][0]
    type Res = ResponseTypes['GET/api/activity/report/findItemPage.json']
    return useResponseData<RapperStore, M, Req, Item>('GET/api/activity/report/findItemPage.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：活动整体分日列表下载
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7723&itf=75164
   */
  /* tslint:disable */
  'GET/api/activity/report/exportDayList.json': function useData(
    filter?:
      | {request?: Models['GET/api/activity/report/exportDayList.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['GET/api/activity/report/exportDayList.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/api/activity/report/exportDayList.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/api/activity/report/exportDayList.json'][0]
    type Res = ResponseTypes['GET/api/activity/report/exportDayList.json']
    return useResponseData<RapperStore, M, Req, Item>('GET/api/activity/report/exportDayList.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：活动人群整体分日报表下载
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7723&itf=75165
   */
  /* tslint:disable */
  'GET/api/activity/report/exportCrowdDayList.json': function useData(
    filter?:
      | {request?: Models['GET/api/activity/report/exportCrowdDayList.json']['Req']}
      | {
          (
            storeData: RapperStore['$$rapperResponseData']['GET/api/activity/report/exportCrowdDayList.json'][0]
          ): boolean
        }
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/api/activity/report/exportCrowdDayList.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/api/activity/report/exportCrowdDayList.json'][0]
    type Res = ResponseTypes['GET/api/activity/report/exportCrowdDayList.json']
    return useResponseData<RapperStore, M, Req, Item>('GET/api/activity/report/exportCrowdDayList.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：活动宝贝列表下载
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7723&itf=75166
   */
  /* tslint:disable */
  'GET/api/activity/report/exportItem.json': function useData(
    filter?:
      | {request?: Models['GET/api/activity/report/exportItem.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['GET/api/activity/report/exportItem.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/api/activity/report/exportItem.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/api/activity/report/exportItem.json'][0]
    type Res = ResponseTypes['GET/api/activity/report/exportItem.json']
    return useResponseData<RapperStore, M, Req, Item>('GET/api/activity/report/exportItem.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：618活动接口迁移到日常接口的map
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7723&itf=79825
   */
  /* tslint:disable */
  'GET/map': function useData(
    filter?:
      | {request?: Models['GET/map']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['GET/map'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/map']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/map'][0]
    type Res = ResponseTypes['GET/map']
    return useResponseData<RapperStore, M, Req, Item>('GET/map', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：结案-计划投放效果
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7789&itf=75586
   */
  /* tslint:disable */
  'GET/api/report/case/findCampaignDaySum.json': function useData(
    filter?:
      | {request?: Models['GET/api/report/case/findCampaignDaySum.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['GET/api/report/case/findCampaignDaySum.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/api/report/case/findCampaignDaySum.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/api/report/case/findCampaignDaySum.json'][0]
    type Res = ResponseTypes['GET/api/report/case/findCampaignDaySum.json']
    return useResponseData<RapperStore, M, Req, Item>('GET/api/report/case/findCampaignDaySum.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：结案-商品明细分析
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7789&itf=75587
   */
  /* tslint:disable */
  'GET/api/report/case/findItemSumList.json': function useData(
    filter?:
      | {request?: Models['GET/api/report/case/findItemSumList.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['GET/api/report/case/findItemSumList.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/api/report/case/findItemSumList.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/api/report/case/findItemSumList.json'][0]
    type Res = ResponseTypes['GET/api/report/case/findItemSumList.json']
    return useResponseData<RapperStore, M, Req, Item>('GET/api/report/case/findItemSumList.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：结案-商品整体趋势
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7789&itf=75588
   */
  /* tslint:disable */
  'GET/api/report/case/findItemTrendDayList.json': function useData(
    filter?:
      | {request?: Models['GET/api/report/case/findItemTrendDayList.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['GET/api/report/case/findItemTrendDayList.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/api/report/case/findItemTrendDayList.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/api/report/case/findItemTrendDayList.json'][0]
    type Res = ResponseTypes['GET/api/report/case/findItemTrendDayList.json']
    return useResponseData<RapperStore, M, Req, Item>('GET/api/report/case/findItemTrendDayList.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：【已有接口】查询新品计划列表 /api/campaign/findList.json
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7789&itf=75590
   */
  /* tslint:disable */
  'GET/findList.json': function useData(
    filter?:
      | {request?: Models['GET/findList.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['GET/findList.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/findList.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/findList.json'][0]
    type Res = ResponseTypes['GET/findList.json']
    return useResponseData<RapperStore, M, Req, Item>('GET/findList.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：结案-查询商品对比曲线
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7789&itf=77755
   */
  /* tslint:disable */
  'GET/api/report/case/findFeedShopItemAllListComp.json': function useData(
    filter?:
      | {request?: Models['GET/api/report/case/findFeedShopItemAllListComp.json']['Req']}
      | {
          (
            storeData: RapperStore['$$rapperResponseData']['GET/api/report/case/findFeedShopItemAllListComp.json'][0]
          ): boolean
        }
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/api/report/case/findFeedShopItemAllListComp.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/api/report/case/findFeedShopItemAllListComp.json'][0]
    type Res = ResponseTypes['GET/api/report/case/findFeedShopItemAllListComp.json']
    return useResponseData<RapperStore, M, Req, Item>(
      'GET/api/report/case/findFeedShopItemAllListComp.json',
      filter
    ) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：查询计划绑定的定向列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7935&itf=76654
   */
  /* tslint:disable */
  'GET/api/campaign/crowd/findList.json': function useData(
    filter?:
      | {request?: Models['GET/api/campaign/crowd/findList.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['GET/api/campaign/crowd/findList.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/api/campaign/crowd/findList.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/api/campaign/crowd/findList.json'][0]
    type Res = ResponseTypes['GET/api/campaign/crowd/findList.json']
    return useResponseData<RapperStore, M, Req, Item>('GET/api/campaign/crowd/findList.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：修改计划绑定定向
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7935&itf=76656
   */
  /* tslint:disable */
  'PUT/api/campaign/crowd/modify.json': function useData(
    filter?:
      | {request?: Models['PUT/api/campaign/crowd/modify.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['PUT/api/campaign/crowd/modify.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['PUT/api/campaign/crowd/modify.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['PUT/api/campaign/crowd/modify.json'][0]
    type Res = ResponseTypes['PUT/api/campaign/crowd/modify.json']
    return useResponseData<RapperStore, M, Req, Item>('PUT/api/campaign/crowd/modify.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：一键创建推广计划单环
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7956&itf=76782
   */
  /* tslint:disable */
  'POST/api/solution/add.json': function useData(
    filter?:
      | {request?: Models['POST/api/solution/add.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['POST/api/solution/add.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['POST/api/solution/add.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['POST/api/solution/add.json'][0]
    type Res = ResponseTypes['POST/api/solution/add.json']
    return useResponseData<RapperStore, M, Req, Item>('POST/api/solution/add.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：分页获取商品列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7956&itf=70821
   */
  /* tslint:disable */
  'GET/api/material/item/findPage.json': function useData(
    filter?:
      | {request?: Models['GET/api/material/item/findPage.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['GET/api/material/item/findPage.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/api/material/item/findPage.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/api/material/item/findPage.json'][0]
    type Res = ResponseTypes['GET/api/material/item/findPage.json']
    return useResponseData<RapperStore, M, Req, Item>('GET/api/material/item/findPage.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：是否可使用一键推广
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7956&itf=77116
   */
  /* tslint:disable */
  'GET/api/solution/allowPromotion.json': function useData(
    filter?:
      | {request?: Models['GET/api/solution/allowPromotion.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['GET/api/solution/allowPromotion.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/api/solution/allowPromotion.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/api/solution/allowPromotion.json'][0]
    type Res = ResponseTypes['GET/api/solution/allowPromotion.json']
    return useResponseData<RapperStore, M, Req, Item>('GET/api/solution/allowPromotion.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：批量一键创建
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7956&itf=77594
   */
  /* tslint:disable */
  'POST/api/solution/batchAdd.json': function useData(
    filter?:
      | {request?: Models['POST/api/solution/batchAdd.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['POST/api/solution/batchAdd.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['POST/api/solution/batchAdd.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['POST/api/solution/batchAdd.json'][0]
    type Res = ResponseTypes['POST/api/solution/batchAdd.json']
    return useResponseData<RapperStore, M, Req, Item>('POST/api/solution/batchAdd.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：查询定向标签不分页
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=8120&itf=68423
   */
  /* tslint:disable */
  'GET/api/target/findLabelList.json': function useData(
    filter?:
      | {request?: Models['GET/api/target/findLabelList.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['GET/api/target/findLabelList.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/api/target/findLabelList.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/api/target/findLabelList.json'][0]
    type Res = ResponseTypes['GET/api/target/findLabelList.json']
    return useResponseData<RapperStore, M, Req, Item>('GET/api/target/findLabelList.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：查询类目精选的类目列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=8120&itf=78707
   */
  /* tslint:disable */
  'GET/api/target/findSelectionCategoryList.json': function useData(
    filter?:
      | {request?: Models['GET/api/target/findSelectionCategoryList.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['GET/api/target/findSelectionCategoryList.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/api/target/findSelectionCategoryList.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/api/target/findSelectionCategoryList.json'][0]
    type Res = ResponseTypes['GET/api/target/findSelectionCategoryList.json']
    return useResponseData<RapperStore, M, Req, Item>('GET/api/target/findSelectionCategoryList.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：账户充值
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=8524&itf=67373
   */
  /* tslint:disable */
  'GET/api/account/recharge.action': function useData(
    filter?:
      | {request?: Models['GET/api/account/recharge.action']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['GET/api/account/recharge.action'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/api/account/recharge.action']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/api/account/recharge.action'][0]
    type Res = ResponseTypes['GET/api/account/recharge.action']
    return useResponseData<RapperStore, M, Req, Item>('GET/api/account/recharge.action', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：获取账户详情
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=8524&itf=67468
   */
  /* tslint:disable */
  'GET/api/account/getInfo.json': function useData(
    filter?:
      | {request?: Models['GET/api/account/getInfo.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['GET/api/account/getInfo.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/api/account/getInfo.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/api/account/getInfo.json'][0]
    type Res = ResponseTypes['GET/api/account/getInfo.json']
    return useResponseData<RapperStore, M, Req, Item>('GET/api/account/getInfo.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：【接口优化】新建单元
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=8524&itf=78321
   */
  /* tslint:disable */
  'POST/api/adgroup/batchAdd.json': function useData(
    filter?:
      | {request?: Models['POST/api/adgroup/batchAdd.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['POST/api/adgroup/batchAdd.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['POST/api/adgroup/batchAdd.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['POST/api/adgroup/batchAdd.json'][0]
    type Res = ResponseTypes['POST/api/adgroup/batchAdd.json']
    return useResponseData<RapperStore, M, Req, Item>('POST/api/adgroup/batchAdd.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：盘量接口(待定)
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=8524&itf=80936
   */
  /* tslint:disable */
  'POST/api/campaign/estimateContractPv.json': function useData(
    filter?:
      | {request?: Models['POST/api/campaign/estimateContractPv.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['POST/api/campaign/estimateContractPv.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['POST/api/campaign/estimateContractPv.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['POST/api/campaign/estimateContractPv.json'][0]
    type Res = ResponseTypes['POST/api/campaign/estimateContractPv.json']
    return useResponseData<RapperStore, M, Req, Item>('POST/api/campaign/estimateContractPv.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：锁量接口
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=8524&itf=84599
   */
  /* tslint:disable */
  'POST/api/algotool/lockQuantity.json': function useData(
    filter?:
      | {request?: Models['POST/api/algotool/lockQuantity.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['POST/api/algotool/lockQuantity.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['POST/api/algotool/lockQuantity.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['POST/api/algotool/lockQuantity.json'][0]
    type Res = ResponseTypes['POST/api/algotool/lockQuantity.json']
    return useResponseData<RapperStore, M, Req, Item>('POST/api/algotool/lockQuantity.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：【管理】查询定向列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=8828&itf=68386
   */
  /* tslint:disable */
  'GET/api/crowd/findPage.json': function useData(
    filter?:
      | {request?: Models['GET/api/crowd/findPage.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['GET/api/crowd/findPage.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/api/crowd/findPage.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/api/crowd/findPage.json'][0]
    type Res = ResponseTypes['GET/api/crowd/findPage.json']
    return useResponseData<RapperStore, M, Req, Item>('GET/api/crowd/findPage.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：查询预算模拟器
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=8828&itf=83281
   */
  /* tslint:disable */
  'POST/api/algotool/getBudgetSimulator.json': function useData(
    filter?:
      | {request?: Models['POST/api/algotool/getBudgetSimulator.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['POST/api/algotool/getBudgetSimulator.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['POST/api/algotool/getBudgetSimulator.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['POST/api/algotool/getBudgetSimulator.json'][0]
    type Res = ResponseTypes['POST/api/algotool/getBudgetSimulator.json']
    return useResponseData<RapperStore, M, Req, Item>('POST/api/algotool/getBudgetSimulator.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：新建推广计划
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=8828&itf=67209
   */
  /* tslint:disable */
  'POST/api/campaign/add.json': function useData(
    filter?:
      | {request?: Models['POST/api/campaign/add.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['POST/api/campaign/add.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['POST/api/campaign/add.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['POST/api/campaign/add.json'][0]
    type Res = ResponseTypes['POST/api/campaign/add.json']
    return useResponseData<RapperStore, M, Req, Item>('POST/api/campaign/add.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：分页获取单元列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=8828&itf=67275
   */
  /* tslint:disable */
  'GET/api/adgroup/findPage.json': function useData(
    filter?:
      | {request?: Models['GET/api/adgroup/findPage.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['GET/api/adgroup/findPage.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/api/adgroup/findPage.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/api/adgroup/findPage.json'][0]
    type Res = ResponseTypes['GET/api/adgroup/findPage.json']
    return useResponseData<RapperStore, M, Req, Item>('GET/api/adgroup/findPage.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：全量修改计划信息
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=8828&itf=67338
   */
  /* tslint:disable */
  'PUT/api/campaign/modEntire.json': function useData(
    filter?:
      | {request?: Models['PUT/api/campaign/modEntire.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['PUT/api/campaign/modEntire.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['PUT/api/campaign/modEntire.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['PUT/api/campaign/modEntire.json'][0]
    type Res = ResponseTypes['PUT/api/campaign/modEntire.json']
    return useResponseData<RapperStore, M, Req, Item>('PUT/api/campaign/modEntire.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },

  /**
   * 接口名：智能人群探索
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=8828&itf=83321
   */
  /* tslint:disable */
  'GET/api/algotool/probeInterest.json': function useData(
    filter?:
      | {request?: Models['GET/api/algotool/probeInterest.json']['Req']}
      | {(storeData: RapperStore['$$rapperResponseData']['GET/api/algotool/probeInterest.json'][0]): boolean}
  ) {
    type M = keyof RapperStore['$$rapperResponseData']
    type Req = Models['GET/api/algotool/probeInterest.json']['Req']
    type Item = RapperStore['$$rapperResponseData']['GET/api/algotool/probeInterest.json'][0]
    type Res = ResponseTypes['GET/api/algotool/probeInterest.json']
    return useResponseData<RapperStore, M, Req, Item>('GET/api/algotool/probeInterest.json', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number
        /** 是否正在请求中 */
        isPending: boolean
        /** 请求错误信息 */
        errorMessage?: string
      }
    ]
  },
}

export const useAllResponse = {
  /**
   * 接口名：计划相关字段参考[新建]
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6615&itf=67832
   */
  /* tslint:disable */
  'GET/readme/campaign': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['GET/readme/campaign']) || []
      return selectedState as Array<ResponseTypes['GET/readme/campaign']>
    })
  },

  /**
   * 接口名：获取计划默认设置
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6615&itf=67189
   */
  /* tslint:disable */
  'GET/api/campaign/default.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['GET/api/campaign/default.json']) || []
      return selectedState as Array<ResponseTypes['GET/api/campaign/default.json']>
    })
  },

  /**
   * 接口名：获取计划详情
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6615&itf=67240
   */
  /* tslint:disable */
  'GET/api/campaign/get.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['GET/api/campaign/get.json']) || []
      return selectedState as Array<ResponseTypes['GET/api/campaign/get.json']>
    })
  },

  /**
   * 接口名：获取计划结算信息
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6615&itf=73647
   */
  /* tslint:disable */
  'GET/api/campaign/getSettleInfo.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['GET/api/campaign/getSettleInfo.json']) || []
      return selectedState as Array<ResponseTypes['GET/api/campaign/getSettleInfo.json']>
    })
  },

  /**
   * 接口名：获取计划列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6615&itf=67241
   */
  /* tslint:disable */
  'GET/api/campaign/findList.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['GET/api/campaign/findList.json']) || []
      return selectedState as Array<ResponseTypes['GET/api/campaign/findList.json']>
    })
  },

  /**
   * 接口名：分页获取计划列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6615&itf=67264
   */
  /* tslint:disable */
  'GET/api/campaign/findPage.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['GET/api/campaign/findPage.json']) || []
      return selectedState as Array<ResponseTypes['GET/api/campaign/findPage.json']>
    })
  },

  /**
   * 接口名：获取草稿计划列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6615&itf=67236
   */
  /* tslint:disable */
  'GET/api/campaign/findDraftList.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['GET/api/campaign/findDraftList.json']) || []
      return selectedState as Array<ResponseTypes['GET/api/campaign/findDraftList.json']>
    })
  },

  /**
   * 接口名：删除计划
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6615&itf=67242
   */
  /* tslint:disable */
  'DELETE/api/campaign/delete.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['DELETE/api/campaign/delete.json']) || []
      return selectedState as Array<ResponseTypes['DELETE/api/campaign/delete.json']>
    })
  },

  /**
   * 接口名：克隆计划
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6615&itf=67277
   */
  /* tslint:disable */
  'POST/api/campaign/clone.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['POST/api/campaign/clone.json']) || []
      return selectedState as Array<ResponseTypes['POST/api/campaign/clone.json']>
    })
  },

  /**
   * 接口名：【提醒】修改计划预算提醒
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6615&itf=67321
   */
  /* tslint:disable */
  'PUT/api/campaign/updateCampaignBudgetRemindSetting.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] &&
          state['$$rapperResponseData']['PUT/api/campaign/updateCampaignBudgetRemindSetting.json']) ||
        []
      return selectedState as Array<ResponseTypes['PUT/api/campaign/updateCampaignBudgetRemindSetting.json']>
    })
  },

  /**
   * 接口名：【提醒】获取计划预算提醒
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6615&itf=67369
   */
  /* tslint:disable */
  'GET/api/campaign/getCampaignBudgetRemindSetting.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] &&
          state['$$rapperResponseData']['GET/api/campaign/getCampaignBudgetRemindSetting.json']) ||
        []
      return selectedState as Array<ResponseTypes['GET/api/campaign/getCampaignBudgetRemindSetting.json']>
    })
  },

  /**
   * 接口名：批量修改计划信息
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6615&itf=67654
   */
  /* tslint:disable */
  'PUT/api/campaign/batchModify.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['PUT/api/campaign/batchModify.json']) || []
      return selectedState as Array<ResponseTypes['PUT/api/campaign/batchModify.json']>
    })
  },

  /**
   * 接口名：计划完成
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6615&itf=67672
   */
  /* tslint:disable */
  'PUT/api/campaign/complete.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['PUT/api/campaign/complete.json']) || []
      return selectedState as Array<ResponseTypes['PUT/api/campaign/complete.json']>
    })
  },

  /**
   * 接口名：修改置顶状态
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6615&itf=67674
   */
  /* tslint:disable */
  'PUT/api/campaign/setTop.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['PUT/api/campaign/setTop.json']) || []
      return selectedState as Array<ResponseTypes['PUT/api/campaign/setTop.json']>
    })
  },

  /**
   * 接口名：获取有效计划数
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6615&itf=67975
   */
  /* tslint:disable */
  'GET/api/campaign/validCount.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['GET/api/campaign/validCount.json']) || []
      return selectedState as Array<ResponseTypes['GET/api/campaign/validCount.json']>
    })
  },

  /**
   * 接口名：获取总预算
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6615&itf=69603
   */
  /* tslint:disable */
  'GET/api/campaign/findDayBudgetSum.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['GET/api/campaign/findDayBudgetSum.json']) || []
      return selectedState as Array<ResponseTypes['GET/api/campaign/findDayBudgetSum.json']>
    })
  },

  /**
   * 接口名：获取计划流程信息
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6615&itf=73883
   */
  /* tslint:disable */
  'GET/api/campaign/displayConfig.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['GET/api/campaign/displayConfig.json']) || []
      return selectedState as Array<ResponseTypes['GET/api/campaign/displayConfig.json']>
    })
  },

  /**
   * 接口名：获取计划可以修改的配置
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6615&itf=76004
   */
  /* tslint:disable */
  'GET/api/campaign/modifyConfig.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['GET/api/campaign/modifyConfig.json']) || []
      return selectedState as Array<ResponseTypes['GET/api/campaign/modifyConfig.json']>
    })
  },

  /**
   * 接口名：批量转换计划到活动计划
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6615&itf=75064
   */
  /* tslint:disable */
  'PUT/api/campaign/activity/transfer.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['PUT/api/campaign/activity/transfer.json']) ||
        []
      return selectedState as Array<ResponseTypes['PUT/api/campaign/activity/transfer.json']>
    })
  },

  /**
   * 接口名：批量转换活动scene
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6615&itf=75562
   */
  /* tslint:disable */
  'PUT/api/campaign/transferScene.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['PUT/api/campaign/transferScene.json']) || []
      return selectedState as Array<ResponseTypes['PUT/api/campaign/transferScene.json']>
    })
  },

  /**
   * 接口名：转换活动阶段
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6615&itf=83231
   */
  /* tslint:disable */
  'PUT/api/campaign/activity/transferPhase.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] &&
          state['$$rapperResponseData']['PUT/api/campaign/activity/transferPhase.json']) ||
        []
      return selectedState as Array<ResponseTypes['PUT/api/campaign/activity/transferPhase.json']>
    })
  },

  /**
   * 接口名：获取再营销-标签信息
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6615&itf=80101
   */
  /* tslint:disable */
  'GET/api/target/getRemarketingCoverage.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] &&
          state['$$rapperResponseData']['GET/api/target/getRemarketingCoverage.json']) ||
        []
      return selectedState as Array<ResponseTypes['GET/api/target/getRemarketingCoverage.json']>
    })
  },

  /**
   * 接口名：新建单元
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6699&itf=67272
   */
  /* tslint:disable */
  'POST/api/adgroup/add.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['POST/api/adgroup/add.json']) || []
      return selectedState as Array<ResponseTypes['POST/api/adgroup/add.json']>
    })
  },

  /**
   * 接口名：获取单元默认设置
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6699&itf=67271
   */
  /* tslint:disable */
  'GET/api/adgroup/default.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['GET/api/adgroup/default.json']) || []
      return selectedState as Array<ResponseTypes['GET/api/adgroup/default.json']>
    })
  },

  /**
   * 接口名：获取单元详情
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6699&itf=67273
   */
  /* tslint:disable */
  'GET/api/adgroup/get.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['GET/api/adgroup/get.json']) || []
      return selectedState as Array<ResponseTypes['GET/api/adgroup/get.json']>
    })
  },

  /**
   * 接口名：获取单元列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6699&itf=67274
   */
  /* tslint:disable */
  'GET/api/adgroup/findList.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['GET/api/adgroup/findList.json']) || []
      return selectedState as Array<ResponseTypes['GET/api/adgroup/findList.json']>
    })
  },

  /**
   * 接口名：批量删除单元
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6699&itf=67276
   */
  /* tslint:disable */
  'DELETE/api/adgroup/batchDelete.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['DELETE/api/adgroup/batchDelete.json']) || []
      return selectedState as Array<ResponseTypes['DELETE/api/adgroup/batchDelete.json']>
    })
  },

  /**
   * 接口名：克隆单元
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6699&itf=67278
   */
  /* tslint:disable */
  'POST/api/adgroup/clone.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['POST/api/adgroup/clone.json']) || []
      return selectedState as Array<ResponseTypes['POST/api/adgroup/clone.json']>
    })
  },

  /**
   * 接口名：批量全量修改单元信息
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6699&itf=67342
   */
  /* tslint:disable */
  'PUT/api/adgroup/batchModEntire.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['PUT/api/adgroup/batchModEntire.json']) || []
      return selectedState as Array<ResponseTypes['PUT/api/adgroup/batchModEntire.json']>
    })
  },

  /**
   * 接口名：批量部分修改单元信息
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6699&itf=79050
   */
  /* tslint:disable */
  'PUT/api/adgroup/batchModifyPart.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['PUT/api/adgroup/batchModifyPart.json']) || []
      return selectedState as Array<ResponseTypes['PUT/api/adgroup/batchModifyPart.json']>
    })
  },

  /**
   * 接口名：质量分接口
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6699&itf=67557
   */
  /* tslint:disable */
  'GET/api/adgroup/qualityScore/findList.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] &&
          state['$$rapperResponseData']['GET/api/adgroup/qualityScore/findList.json']) ||
        []
      return selectedState as Array<ResponseTypes['GET/api/adgroup/qualityScore/findList.json']>
    })
  },

  /**
   * 接口名：质量分折线图
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6699&itf=69823
   */
  /* tslint:disable */
  'GET/api/adgroup/qualityScore/findHisList.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] &&
          state['$$rapperResponseData']['GET/api/adgroup/qualityScore/findHisList.json']) ||
        []
      return selectedState as Array<ResponseTypes['GET/api/adgroup/qualityScore/findHisList.json']>
    })
  },

  /**
   * 接口名：批量修改单元
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6699&itf=67703
   */
  /* tslint:disable */
  'PUT/api/adgroup/batchModify.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['PUT/api/adgroup/batchModify.json']) || []
      return selectedState as Array<ResponseTypes['PUT/api/adgroup/batchModify.json']>
    })
  },

  /**
   * 接口名：质量分查询条件
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6699&itf=68838
   */
  /* tslint:disable */
  'GET/api/adgroup/qualityScore/findQueryCondition.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] &&
          state['$$rapperResponseData']['GET/api/adgroup/qualityScore/findQueryCondition.json']) ||
        []
      return selectedState as Array<ResponseTypes['GET/api/adgroup/qualityScore/findQueryCondition.json']>
    })
  },

  /**
   * 接口名：查看计划带着单元的组合接口
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6699&itf=69419
   */
  /* tslint:disable */
  'GET/api/adgroup/findCampaignAndAdgroupList.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] &&
          state['$$rapperResponseData']['GET/api/adgroup/findCampaignAndAdgroupList.json']) ||
        []
      return selectedState as Array<ResponseTypes['GET/api/adgroup/findCampaignAndAdgroupList.json']>
    })
  },

  /**
   * 接口名：修改单元上的系统创意设置
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6699&itf=75561
   */
  /* tslint:disable */
  'PUT/api/adgroup/useSystemCreative.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['PUT/api/adgroup/useSystemCreative.json']) || []
      return selectedState as Array<ResponseTypes['PUT/api/adgroup/useSystemCreative.json']>
    })
  },

  /**
   * 接口名：【接口优化】修改单元
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6699&itf=78328
   */
  /* tslint:disable */
  'PUT/api/adgroup/batchModifyEntire.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['PUT/api/adgroup/batchModifyEntire.json']) || []
      return selectedState as Array<ResponseTypes['PUT/api/adgroup/batchModifyEntire.json']>
    })
  },

  /**
   * 接口名：批量修改单元出价
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6699&itf=87108
   */
  /* tslint:disable */
  'PUT/api/adgroup/batchModifyPrice.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['PUT/api/adgroup/batchModifyPrice.json']) || []
      return selectedState as Array<ResponseTypes['PUT/api/adgroup/batchModifyPrice.json']>
    })
  },

  /**
   * 接口名：批量新建创意
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6662&itf=67197
   */
  /* tslint:disable */
  'POST/api/creative/batchAddAndBind.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['POST/api/creative/batchAddAndBind.json']) || []
      return selectedState as Array<ResponseTypes['POST/api/creative/batchAddAndBind.json']>
    })
  },

  /**
   * 接口名：批量解绑创意
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6662&itf=73851
   */
  /* tslint:disable */
  'PUT/api/creative/batchUnbind.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['PUT/api/creative/batchUnbind.json']) || []
      return selectedState as Array<ResponseTypes['PUT/api/creative/batchUnbind.json']>
    })
  },

  /**
   * 接口名：推荐创意
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6662&itf=83233
   */
  /* tslint:disable */
  'GET/api/creative/recommend.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['GET/api/creative/recommend.json']) || []
      return selectedState as Array<ResponseTypes['GET/api/creative/recommend.json']>
    })
  },

  /**
   * 接口名：横向管理查看创意列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6662&itf=67199
   */
  /* tslint:disable */
  'GET/api/creative/findPage.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['GET/api/creative/findPage.json']) || []
      return selectedState as Array<ResponseTypes['GET/api/creative/findPage.json']>
    })
  },

  /**
   * 接口名：查询创意违规记录
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6662&itf=67558
   */
  /* tslint:disable */
  'GET/api/creative/findPunishRecordList.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] &&
          state['$$rapperResponseData']['GET/api/creative/findPunishRecordList.json']) ||
        []
      return selectedState as Array<ResponseTypes['GET/api/creative/findPunishRecordList.json']>
    })
  },

  /**
   * 接口名：创意查询条件
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6662&itf=67560
   */
  /* tslint:disable */
  'GET/api/creative/findQueryCondition.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['GET/api/creative/findQueryCondition.json']) ||
        []
      return selectedState as Array<ResponseTypes['GET/api/creative/findQueryCondition.json']>
    })
  },

  /**
   * 接口名：跳转新建创意页面
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6662&itf=68950
   */
  /* tslint:disable */
  'GET/api/creativeCenter/gotoCreation.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['GET/api/creativeCenter/gotoCreation.json']) ||
        []
      return selectedState as Array<ResponseTypes['GET/api/creativeCenter/gotoCreation.json']>
    })
  },

  /**
   * 接口名：查看创意模板
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6662&itf=70224
   */
  /* tslint:disable */
  'GET/api/creative/template/findPackageList.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] &&
          state['$$rapperResponseData']['GET/api/creative/template/findPackageList.json']) ||
        []
      return selectedState as Array<ResponseTypes['GET/api/creative/template/findPackageList.json']>
    })
  },

  /**
   * 接口名：跳转模板制作页面
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6662&itf=70256
   */
  /* tslint:disable */
  'GET/api/creativeCenter/gotoTemplateNew.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] &&
          state['$$rapperResponseData']['GET/api/creativeCenter/gotoTemplateNew.json']) ||
        []
      return selectedState as Array<ResponseTypes['GET/api/creativeCenter/gotoTemplateNew.json']>
    })
  },

  /**
   * 接口名：获取创意中心需要的物料
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6662&itf=70355
   */
  /* tslint:disable */
  'GET/api/creativeCenter/getMaterial.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['GET/api/creativeCenter/getMaterial.json']) ||
        []
      return selectedState as Array<ResponseTypes['GET/api/creativeCenter/getMaterial.json']>
    })
  },

  /**
   * 接口名：删除创意
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6662&itf=73923
   */
  /* tslint:disable */
  'DELETE/api/creative/delete.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['DELETE/api/creative/delete.json']) || []
      return selectedState as Array<ResponseTypes['DELETE/api/creative/delete.json']>
    })
  },

  /**
   * 接口名：活动创意打标
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6662&itf=85285
   */
  /* tslint:disable */
  'PUT/api/creative/activity/batchAddTag.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] &&
          state['$$rapperResponseData']['PUT/api/creative/activity/batchAddTag.json']) ||
        []
      return selectedState as Array<ResponseTypes['PUT/api/creative/activity/batchAddTag.json']>
    })
  },

  /**
   * 接口名：预览创意接口
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6662&itf=77911
   */
  /* tslint:disable */
  'POST/api/creative/preview.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['POST/api/creative/preview.json']) || []
      return selectedState as Array<ResponseTypes['POST/api/creative/preview.json']>
    })
  },

  /**
   * 接口名：获取资源位列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6687&itf=67190
   */
  /* tslint:disable */
  'GET/api/adzone/findList.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['GET/api/adzone/findList.json']) || []
      return selectedState as Array<ResponseTypes['GET/api/adzone/findList.json']>
    })
  },

  /**
   * 接口名：检查资源位匹配情况
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6687&itf=67243
   */
  /* tslint:disable */
  'GET/api/adzone/checkList.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['GET/api/adzone/checkList.json']) || []
      return selectedState as Array<ResponseTypes['GET/api/adzone/checkList.json']>
    })
  },

  /**
   * 接口名：【横向】移除绑定资源位
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6687&itf=67248
   */
  /* tslint:disable */
  'PUT/api/adzone/unbindList.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['PUT/api/adzone/unbindList.json']) || []
      return selectedState as Array<ResponseTypes['PUT/api/adzone/unbindList.json']>
    })
  },

  /**
   * 接口名：【横向】更新广告位绑定情况
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6687&itf=67254
   */
  /* tslint:disable */
  'PUT/api/adzone/bindList.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['PUT/api/adzone/bindList.json']) || []
      return selectedState as Array<ResponseTypes['PUT/api/adzone/bindList.json']>
    })
  },

  /**
   * 接口名：【横向】分页获取资源位列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6687&itf=67267
   */
  /* tslint:disable */
  'GET/api/adzone/findPage.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['GET/api/adzone/findPage.json']) || []
      return selectedState as Array<ResponseTypes['GET/api/adzone/findPage.json']>
    })
  },

  /**
   * 接口名：【管理】批量修改溢价
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6687&itf=68949
   */
  /* tslint:disable */
  'PUT/api/adzone/batchModify.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['PUT/api/adzone/batchModify.json']) || []
      return selectedState as Array<ResponseTypes['PUT/api/adzone/batchModify.json']>
    })
  },

  /**
   * 接口名：分页获取物料列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6688&itf=67403
   */
  /* tslint:disable */
  'GET/api/material/findPage.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['GET/api/material/findPage.json']) || []
      return selectedState as Array<ResponseTypes['GET/api/material/findPage.json']>
    })
  },

  /**
   * 接口名：获取推荐物料列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6688&itf=87196
   */
  /* tslint:disable */
  'GET/api/material/recommend.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['GET/api/material/recommend.json']) || []
      return selectedState as Array<ResponseTypes['GET/api/material/recommend.json']>
    })
  },

  /**
   * 接口名：获取物料查询条件
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6688&itf=67405
   */
  /* tslint:disable */
  'GET/api/material/findQueryCondition.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['GET/api/material/findQueryCondition.json']) ||
        []
      return selectedState as Array<ResponseTypes['GET/api/material/findQueryCondition.json']>
    })
  },

  /**
   * 接口名：获取商品查询条件
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6688&itf=70820
   */
  /* tslint:disable */
  'GET/api/material/item/findQueryCondition.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] &&
          state['$$rapperResponseData']['GET/api/material/item/findQueryCondition.json']) ||
        []
      return selectedState as Array<ResponseTypes['GET/api/material/item/findQueryCondition.json']>
    })
  },

  /**
   * 接口名：获取权益查询条件
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6688&itf=78780
   */
  /* tslint:disable */
  'GET/api/coupon/findQueryCondition.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['GET/api/coupon/findQueryCondition.json']) || []
      return selectedState as Array<ResponseTypes['GET/api/coupon/findQueryCondition.json']>
    })
  },

  /**
   * 接口名：查询物料违规记录
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6688&itf=67559
   */
  /* tslint:disable */
  'GET/api/material/findPunishRecordList.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] &&
          state['$$rapperResponseData']['GET/api/material/findPunishRecordList.json']) ||
        []
      return selectedState as Array<ResponseTypes['GET/api/material/findPunishRecordList.json']>
    })
  },

  /**
   * 接口名：校验推广
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6688&itf=67656
   */
  /* tslint:disable */
  'GET/api/material/accessAllowed.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['GET/api/material/accessAllowed.json']) || []
      return selectedState as Array<ResponseTypes['GET/api/material/accessAllowed.json']>
    })
  },

  /**
   * 接口名：校验商品
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6688&itf=70819
   */
  /* tslint:disable */
  'GET/api/material/item/accessAllowed.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['GET/api/material/item/accessAllowed.json']) ||
        []
      return selectedState as Array<ResponseTypes['GET/api/material/item/accessAllowed.json']>
    })
  },

  /**
   * 接口名：优惠券接口
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6688&itf=70837
   */
  /* tslint:disable */
  'GET/api/coupon/findList.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['GET/api/coupon/findList.json']) || []
      return selectedState as Array<ResponseTypes['GET/api/coupon/findList.json']>
    })
  },

  /**
   * 接口名：分页获取权益信息
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6688&itf=78647
   */
  /* tslint:disable */
  'GET/api/coupon/findPage.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['GET/api/coupon/findPage.json']) || []
      return selectedState as Array<ResponseTypes['GET/api/coupon/findPage.json']>
    })
  },

  /**
   * 接口名：获取推荐优惠券
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6688&itf=78925
   */
  /* tslint:disable */
  'GET/api/coupon/recommend.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['GET/api/coupon/recommend.json']) || []
      return selectedState as Array<ResponseTypes['GET/api/coupon/recommend.json']>
    })
  },

  /**
   * 接口名：批量校验接口
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6688&itf=75890
   */
  /* tslint:disable */
  'GET/api/material/batchAccessAllowed.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['GET/api/material/batchAccessAllowed.json']) ||
        []
      return selectedState as Array<ResponseTypes['GET/api/material/batchAccessAllowed.json']>
    })
  },

  /**
   * 接口名：【管理】新增定向
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6840&itf=68388
   */
  /* tslint:disable */
  'PUT/api/crowd/modifyByType.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['PUT/api/crowd/modifyByType.json']) || []
      return selectedState as Array<ResponseTypes['PUT/api/crowd/modifyByType.json']>
    })
  },

  /**
   * 接口名：【管理】删除定向绑定
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6840&itf=68391
   */
  /* tslint:disable */
  'DELETE/api/crowd/delete.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['DELETE/api/crowd/delete.json']) || []
      return selectedState as Array<ResponseTypes['DELETE/api/crowd/delete.json']>
    })
  },

  /**
   * 接口名：【管理】查询定向列表不分页
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6840&itf=68395
   */
  /* tslint:disable */
  'GET/api/crowd/findList.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['GET/api/crowd/findList.json']) || []
      return selectedState as Array<ResponseTypes['GET/api/crowd/findList.json']>
    })
  },

  /**
   * 接口名：【主流程】查询推荐定向
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6840&itf=68397
   */
  /* tslint:disable */
  'GET/api/target/findSuggest.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['GET/api/target/findSuggest.json']) || []
      return selectedState as Array<ResponseTypes['GET/api/target/findSuggest.json']>
    })
  },

  /**
   * 接口名：【工具】查询建议出价&市场平均价
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6840&itf=68400
   */
  /* tslint:disable */
  'POST/api/crowd/getSuggestPrice.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['POST/api/crowd/getSuggestPrice.json']) || []
      return selectedState as Array<ResponseTypes['POST/api/crowd/getSuggestPrice.json']>
    })
  },

  /**
   * 接口名：【工具】流量预估
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6840&itf=68418
   */
  /* tslint:disable */
  'POST/api/algotool/getPredictedPvUv.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['POST/api/algotool/getPredictedPvUv.json']) ||
        []
      return selectedState as Array<ResponseTypes['POST/api/algotool/getPredictedPvUv.json']>
    })
  },

  /**
   * 接口名：查询定向列表（没有category）
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6840&itf=68420
   */
  /* tslint:disable */
  'GET/api/target/findList.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['GET/api/target/findList.json']) || []
      return selectedState as Array<ResponseTypes['GET/api/target/findList.json']>
    })
  },

  /**
   * 接口名：查询定向分组列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6840&itf=68421
   */
  /* tslint:disable */
  'GET/api/target/findCategoryList.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['GET/api/target/findCategoryList.json']) || []
      return selectedState as Array<ResponseTypes['GET/api/target/findCategoryList.json']>
    })
  },

  /**
   * 接口名：查询定向标签分页
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6840&itf=68425
   */
  /* tslint:disable */
  'GET/api/target/findLabelPage.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['GET/api/target/findLabelPage.json']) || []
      return selectedState as Array<ResponseTypes['GET/api/target/findLabelPage.json']>
    })
  },

  /**
   * 接口名：【管理】查询定向筛选框
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6840&itf=68426
   */
  /* tslint:disable */
  'GET/api/target/findTargetTypeCondition.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] &&
          state['$$rapperResponseData']['GET/api/target/findTargetTypeCondition.json']) ||
        []
      return selectedState as Array<ResponseTypes['GET/api/target/findTargetTypeCondition.json']>
    })
  },

  /**
   * 接口名：查询店铺关键词
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6840&itf=68427
   */
  /* tslint:disable */
  'GET/api/target/getKeywordShopUv.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['GET/api/target/getKeywordShopUv.json']) || []
      return selectedState as Array<ResponseTypes['GET/api/target/getKeywordShopUv.json']>
    })
  },

  /**
   * 接口名：查询店铺定向筛选条件
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6840&itf=68429
   */
  /* tslint:disable */
  'GET/api/target/findShopTargetQueryCondition.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] &&
          state['$$rapperResponseData']['GET/api/target/findShopTargetQueryCondition.json']) ||
        []
      return selectedState as Array<ResponseTypes['GET/api/target/findShopTargetQueryCondition.json']>
    })
  },

  /**
   * 接口名：【工具】单品托管手动出价建议价
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6840&itf=68552
   */
  /* tslint:disable */
  'GET/api/algotool/findManualBidSuggestPrice.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] &&
          state['$$rapperResponseData']['GET/api/algotool/findManualBidSuggestPrice.json']) ||
        []
      return selectedState as Array<ResponseTypes['GET/api/algotool/findManualBidSuggestPrice.json']>
    })
  },

  /**
   * 接口名：【管理】批量出价
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6840&itf=68946
   */
  /* tslint:disable */
  'POST/api/crowd/batchModify.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['POST/api/crowd/batchModify.json']) || []
      return selectedState as Array<ResponseTypes['POST/api/crowd/batchModify.json']>
    })
  },

  /**
   * 接口名：【工具】出价模拟器
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6840&itf=69205
   */
  /* tslint:disable */
  'GET/api/crowd/findSimulatorPointList.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['GET/api/crowd/findSimulatorPointList.json']) ||
        []
      return selectedState as Array<ResponseTypes['GET/api/crowd/findSimulatorPointList.json']>
    })
  },

  /**
   * 接口名：【工具】资源位建议溢价
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6840&itf=69646
   */
  /* tslint:disable */
  'POST/api/adzone/getSuggestDiscount.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['POST/api/adzone/getSuggestDiscount.json']) ||
        []
      return selectedState as Array<ResponseTypes['POST/api/adzone/getSuggestDiscount.json']>
    })
  },

  /**
   * 接口名：关键词包含优化
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6840&itf=77913
   */
  /* tslint:disable */
  'POST/api/target/findSonkeywordList.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['POST/api/target/findSonkeywordList.json']) ||
        []
      return selectedState as Array<ResponseTypes['POST/api/target/findSonkeywordList.json']>
    })
  },

  /**
   * 接口名：【人群推荐】获取人群推荐
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6840&itf=83230
   */
  /* tslint:disable */
  'GET/api/target/findRecommendList.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['GET/api/target/findRecommendList.json']) || []
      return selectedState as Array<ResponseTypes['GET/api/target/findRecommendList.json']>
    })
  },

  /**
   * 接口名：【人群推荐】分页获取指定推荐人群
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6840&itf=83235
   */
  /* tslint:disable */
  'GET/api/target/findRecommendPage.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['GET/api/target/findRecommendPage.json']) || []
      return selectedState as Array<ResponseTypes['GET/api/target/findRecommendPage.json']>
    })
  },

  /**
   * 接口名：【人群推荐】新增定向（非覆盖）
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6840&itf=83236
   */
  /* tslint:disable */
  'PUT/api/target/addTargetLabel.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['PUT/api/target/addTargetLabel.json']) || []
      return selectedState as Array<ResponseTypes['PUT/api/target/addTargetLabel.json']>
    })
  },

  /**
   * 接口名：更新报表展现指标
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6692&itf=67498
   */
  /* tslint:disable */
  'POST/api/member/updateConfig.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['POST/api/member/updateConfig.json']) || []
      return selectedState as Array<ResponseTypes['POST/api/member/updateConfig.json']>
    })
  },

  /**
   * 接口名：用户登出
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6692&itf=67238
   */
  /* tslint:disable */
  'GET/api/member/logout.action': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['GET/api/member/logout.action']) || []
      return selectedState as Array<ResponseTypes['GET/api/member/logout.action']>
    })
  },

  /**
   * 接口名：【CRM】伪登陆
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6692&itf=67244
   */
  /* tslint:disable */
  'GET/api/member/adminLogin.action': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['GET/api/member/adminLogin.action']) || []
      return selectedState as Array<ResponseTypes['GET/api/member/adminLogin.action']>
    })
  },

  /**
   * 接口名：用户协议签署
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6692&itf=67246
   */
  /* tslint:disable */
  'POST/api/member/signProtocol.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['POST/api/member/signProtocol.json']) || []
      return selectedState as Array<ResponseTypes['POST/api/member/signProtocol.json']>
    })
  },

  /**
   * 接口名：获取用户信息
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6692&itf=67253
   */
  /* tslint:disable */
  'GET/api/member/getInfo.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['GET/api/member/getInfo.json']) || []
      return selectedState as Array<ResponseTypes['GET/api/member/getInfo.json']>
    })
  },

  /**
   * 接口名：创建用户联系人
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6692&itf=67294
   */
  /* tslint:disable */
  'POST/api/member/addContacts.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['POST/api/member/addContacts.json']) || []
      return selectedState as Array<ResponseTypes['POST/api/member/addContacts.json']>
    })
  },

  /**
   * 接口名：用户品牌检测
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6692&itf=67350
   */
  /* tslint:disable */
  'GET/api/member/getQualificationBrandAccess.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] &&
          state['$$rapperResponseData']['GET/api/member/getQualificationBrandAccess.json']) ||
        []
      return selectedState as Array<ResponseTypes['GET/api/member/getQualificationBrandAccess.json']>
    })
  },

  /**
   * 接口名：校验用户联系人旺旺合法性
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6692&itf=67295
   */
  /* tslint:disable */
  'GET/api/member/checkContactsName.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['GET/api/member/checkContactsName.json']) || []
      return selectedState as Array<ResponseTypes['GET/api/member/checkContactsName.json']>
    })
  },

  /**
   * 接口名：获取用户联系人列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6692&itf=67298
   */
  /* tslint:disable */
  'GET/api/member/findContactsList.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['GET/api/member/findContactsList.json']) || []
      return selectedState as Array<ResponseTypes['GET/api/member/findContactsList.json']>
    })
  },

  /**
   * 接口名：查询用户违规状态
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6692&itf=67473
   */
  /* tslint:disable */
  'GET/api/member/getPunishStatus.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['GET/api/member/getPunishStatus.json']) || []
      return selectedState as Array<ResponseTypes['GET/api/member/getPunishStatus.json']>
    })
  },

  /**
   * 接口名：查询用户违规记录
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6692&itf=67476
   */
  /* tslint:disable */
  'GET/api/member/findPunishRecordList.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['GET/api/member/findPunishRecordList.json']) ||
        []
      return selectedState as Array<ResponseTypes['GET/api/member/findPunishRecordList.json']>
    })
  },

  /**
   * 接口名：查询用户资质违规记录
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6692&itf=67482
   */
  /* tslint:disable */
  'GET/api/member/findQualificationPunishRecordList.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] &&
          state['$$rapperResponseData']['GET/api/member/findQualificationPunishRecordList.json']) ||
        []
      return selectedState as Array<ResponseTypes['GET/api/member/findQualificationPunishRecordList.json']>
    })
  },

  /**
   * 接口名：判断用户是否签订协议
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6692&itf=67731
   */
  /* tslint:disable */
  'GET/api/member/isProtocolSigned.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['GET/api/member/isProtocolSigned.json']) || []
      return selectedState as Array<ResponseTypes['GET/api/member/isProtocolSigned.json']>
    })
  },

  /**
   * 接口名：用户准入
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6692&itf=68649
   */
  /* tslint:disable */
  'POST/api/member/joinBusinessPlatform.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['POST/api/member/joinBusinessPlatform.json']) ||
        []
      return selectedState as Array<ResponseTypes['POST/api/member/joinBusinessPlatform.json']>
    })
  },

  /**
   * 接口名：用户处罚
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6692&itf=68692
   */
  /* tslint:disable */
  'GET/TODO': function useData() {
    return useSelector((state: State) => {
      const selectedState = (state['$$rapperResponseData'] && state['$$rapperResponseData']['GET/TODO']) || []
      return selectedState as Array<ResponseTypes['GET/TODO']>
    })
  },

  /**
   * 接口名：获取用户维度故障信息
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6692&itf=69558
   */
  /* tslint:disable */
  'GET/api/member/findDiagnoseList.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['GET/api/member/findDiagnoseList.json']) || []
      return selectedState as Array<ResponseTypes['GET/api/member/findDiagnoseList.json']>
    })
  },

  /**
   * 接口名：信息流运营编辑接口
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6692&itf=70153
   */
  /* tslint:disable */
  'GET/https://mo.m.taobao.com/feeds/': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['GET/https://mo.m.taobao.com/feeds/']) || []
      return selectedState as Array<ResponseTypes['GET/https://mo.m.taobao.com/feeds/']>
    })
  },

  /**
   * 接口名：一站式运营编辑接口
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6692&itf=71471
   */
  /* tslint:disable */
  'GET/https://mo.m.taobao.com/one-stop/': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['GET/https://mo.m.taobao.com/one-stop/']) || []
      return selectedState as Array<ResponseTypes['GET/https://mo.m.taobao.com/one-stop/']>
    })
  },

  /**
   * 接口名：获取邀请链接
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6692&itf=73310
   */
  /* tslint:disable */
  'GET/api/member/invitation/url.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['GET/api/member/invitation/url.json']) || []
      return selectedState as Array<ResponseTypes['GET/api/member/invitation/url.json']>
    })
  },

  /**
   * 接口名：获取用户使用进度
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6692&itf=73741
   */
  /* tslint:disable */
  'GET/api/member/stage.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['GET/api/member/stage.json']) || []
      return selectedState as Array<ResponseTypes['GET/api/member/stage.json']>
    })
  },

  /**
   * 接口名：用户活动的一些信息
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6692&itf=75881
   */
  /* tslint:disable */
  'GET/api/member/activity.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['GET/api/member/activity.json']) || []
      return selectedState as Array<ResponseTypes['GET/api/member/activity.json']>
    })
  },

  /**
   * 接口名：用户活动的宝贝引导信息
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6692&itf=87195
   */
  /* tslint:disable */
  'GET/api/member/activity/itemGuide.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['GET/api/member/activity/itemGuide.json']) || []
      return selectedState as Array<ResponseTypes['GET/api/member/activity/itemGuide.json']>
    })
  },

  /**
   * 接口名：转移计划信息
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6692&itf=77790
   */
  /* tslint:disable */
  'GET/api/member/transfer.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['GET/api/member/transfer.json']) || []
      return selectedState as Array<ResponseTypes['GET/api/member/transfer.json']>
    })
  },

  /**
   * 接口名：新客任务
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6692&itf=79580
   */
  /* tslint:disable */
  'GET/api/member/newGuestTask.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['GET/api/member/newGuestTask.json']) || []
      return selectedState as Array<ResponseTypes['GET/api/member/newGuestTask.json']>
    })
  },

  /**
   * 接口名：获取账户及自动充值提醒
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6707&itf=67316
   */
  /* tslint:disable */
  'GET/api/account/getAcctBalanceRemindSettingAutoRecharge.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] &&
          state['$$rapperResponseData']['GET/api/account/getAcctBalanceRemindSettingAutoRecharge.json']) ||
        []
      return selectedState as Array<ResponseTypes['GET/api/account/getAcctBalanceRemindSettingAutoRecharge.json']>
    })
  },

  /**
   * 接口名：查询支付宝账号是否完成代扣协议签约
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6707&itf=67323
   */
  /* tslint:disable */
  'GET/api/account/getSignInfo.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['GET/api/account/getSignInfo.json']) || []
      return selectedState as Array<ResponseTypes['GET/api/account/getSignInfo.json']>
    })
  },

  /**
   * 接口名：更新账户及自动充值设置
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6707&itf=67324
   */
  /* tslint:disable */
  'PUT/api/account/modifyAcctBalanceRemindSettingAutoRecharge.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] &&
          state['$$rapperResponseData']['PUT/api/account/modifyAcctBalanceRemindSettingAutoRecharge.json']) ||
        []
      return selectedState as Array<ResponseTypes['PUT/api/account/modifyAcctBalanceRemindSettingAutoRecharge.json']>
    })
  },

  /**
   * 接口名：账户解约自动充值
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6707&itf=67330
   */
  /* tslint:disable */
  'PUT/api/account/unsignAutoRecharge.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['PUT/api/account/unsignAutoRecharge.json']) ||
        []
      return selectedState as Array<ResponseTypes['PUT/api/account/unsignAutoRecharge.json']>
    })
  },

  /**
   * 接口名：查询账户流水
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6707&itf=67374
   */
  /* tslint:disable */
  'GET/api/account/findItemList.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['GET/api/account/findItemList.json']) || []
      return selectedState as Array<ResponseTypes['GET/api/account/findItemList.json']>
    })
  },

  /**
   * 接口名：下载账户流水
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6707&itf=67375
   */
  /* tslint:disable */
  'GET/api/account/exportItemList.action': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['GET/api/account/exportItemList.action']) || []
      return selectedState as Array<ResponseTypes['GET/api/account/exportItemList.action']>
    })
  },

  /**
   * 接口名：优惠券
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6707&itf=67407
   */
  /* tslint:disable */
  'GET/和钻展保持一致': function useData() {
    return useSelector((state: State) => {
      const selectedState = (state['$$rapperResponseData'] && state['$$rapperResponseData']['GET/和钻展保持一致']) || []
      return selectedState as Array<ResponseTypes['GET/和钻展保持一致']>
    })
  },

  /**
   * 接口名：获取提醒设置（账户余额和计划预算）
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6707&itf=68995
   */
  /* tslint:disable */
  'GET/api/account/findMessageRemindList.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] &&
          state['$$rapperResponseData']['GET/api/account/findMessageRemindList.json']) ||
        []
      return selectedState as Array<ResponseTypes['GET/api/account/findMessageRemindList.json']>
    })
  },

  /**
   * 接口名：覆盖更新提醒设置
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6707&itf=69000
   */
  /* tslint:disable */
  'POST/api/account/modifyAllMessageRemindList.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] &&
          state['$$rapperResponseData']['POST/api/account/modifyAllMessageRemindList.json']) ||
        []
      return selectedState as Array<ResponseTypes['POST/api/account/modifyAllMessageRemindList.json']>
    })
  },

  /**
   * 接口名：获取退款列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6707&itf=72837
   */
  /* tslint:disable */
  'GET/api/account/getRefundList.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['GET/api/account/getRefundList.json']) || []
      return selectedState as Array<ResponseTypes['GET/api/account/getRefundList.json']>
    })
  },

  /**
   * 接口名：创建退款
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6707&itf=72838
   */
  /* tslint:disable */
  'POST/api/account/createRefund.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['POST/api/account/createRefund.json']) || []
      return selectedState as Array<ResponseTypes['POST/api/account/createRefund.json']>
    })
  },

  /**
   * 接口名：退款校验
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6707&itf=72839
   */
  /* tslint:disable */
  'GET/api/account/checkRefund.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['GET/api/account/checkRefund.json']) || []
      return selectedState as Array<ResponseTypes['GET/api/account/checkRefund.json']>
    })
  },

  /**
   * 接口名：【国际版】是否签署cae代扣协议
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6707&itf=72855
   */
  /* tslint:disable */
  'GET/api/account/isSignGlobalAlipay.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['GET/api/account/isSignGlobalAlipay.json']) ||
        []
      return selectedState as Array<ResponseTypes['GET/api/account/isSignGlobalAlipay.json']>
    })
  },

  /**
   * 接口名：【国际版】充值
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6707&itf=72857
   */
  /* tslint:disable */
  'GET/api/account/charge.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['GET/api/account/charge.json']) || []
      return selectedState as Array<ResponseTypes['GET/api/account/charge.json']>
    })
  },

  /**
   * 接口名：获取操作日志信息
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6707&itf=74120
   */
  /* tslint:disable */
  'GET/api/log/findOperationLog.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['GET/api/log/findOperationLog.json']) || []
      return selectedState as Array<ResponseTypes['GET/api/log/findOperationLog.json']>
    })
  },

  /**
   * 接口名：通过单元名称查询单元信息
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6707&itf=74341
   */
  /* tslint:disable */
  'GET/api/log/findAdgroupByName.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['GET/api/log/findAdgroupByName.json']) || []
      return selectedState as Array<ResponseTypes['GET/api/log/findAdgroupByName.json']>
    })
  },

  /**
   * 接口名：通过计划名称查询计划信息
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6707&itf=74342
   */
  /* tslint:disable */
  'GET/api/log/findCampaignByName.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['GET/api/log/findCampaignByName.json']) || []
      return selectedState as Array<ResponseTypes['GET/api/log/findCampaignByName.json']>
    })
  },

  /**
   * 接口名：获取累计消耗
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6707&itf=76780
   */
  /* tslint:disable */
  'GET/api/account/findAccumulateDeduct.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['GET/api/account/findAccumulateDeduct.json']) ||
        []
      return selectedState as Array<ResponseTypes['GET/api/account/findAccumulateDeduct.json']>
    })
  },

  /**
   * 接口名：发送短信验证码
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6708&itf=67327
   */
  /* tslint:disable */
  'GET/api/message/sendMobileCode.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['GET/api/message/sendMobileCode.json']) || []
      return selectedState as Array<ResponseTypes['GET/api/message/sendMobileCode.json']>
    })
  },

  /**
   * 接口名：验证短信验证码
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6708&itf=67328
   */
  /* tslint:disable */
  'POST/api/message/verifyMobilePhoneCode.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] &&
          state['$$rapperResponseData']['POST/api/message/verifyMobilePhoneCode.json']) ||
        []
      return selectedState as Array<ResponseTypes['POST/api/message/verifyMobilePhoneCode.json']>
    })
  },

  /**
   * 接口名：系统码表获取
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6711&itf=67372
   */
  /* tslint:disable */
  'GET/api/common/findCodeList.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['GET/api/common/findCodeList.json']) || []
      return selectedState as Array<ResponseTypes['GET/api/common/findCodeList.json']>
    })
  },

  /**
   * 接口名：获取前端CDN版本
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6711&itf=67763
   */
  /* tslint:disable */
  'GET/api/common/getVersion.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['GET/api/common/getVersion.json']) || []
      return selectedState as Array<ResponseTypes['GET/api/common/getVersion.json']>
    })
  },

  /**
   * 接口名：获取组件元数据列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6712&itf=67393
   */
  /* tslint:disable */
  'GET/api/component/findComponentMetaList.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] &&
          state['$$rapperResponseData']['GET/api/component/findComponentMetaList.json']) ||
        []
      return selectedState as Array<ResponseTypes['GET/api/component/findComponentMetaList.json']>
    })
  },

  /**
   * 接口名：获取用户组建模板
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6712&itf=67395
   */
  /* tslint:disable */
  'GET/api/component/findMemberTemplateList.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] &&
          state['$$rapperResponseData']['GET/api/component/findMemberTemplateList.json']) ||
        []
      return selectedState as Array<ResponseTypes['GET/api/component/findMemberTemplateList.json']>
    })
  },

  /**
   * 接口名：新增用户组件模板
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6712&itf=67396
   */
  /* tslint:disable */
  'POST/api/component/addMemberTemplate.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['POST/api/component/addMemberTemplate.json']) ||
        []
      return selectedState as Array<ResponseTypes['POST/api/component/addMemberTemplate.json']>
    })
  },

  /**
   * 接口名：修改用户组建模板
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6712&itf=67398
   */
  /* tslint:disable */
  'PUT/api/component/updateMemberTemplate.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] &&
          state['$$rapperResponseData']['PUT/api/component/updateMemberTemplate.json']) ||
        []
      return selectedState as Array<ResponseTypes['PUT/api/component/updateMemberTemplate.json']>
    })
  },

  /**
   * 接口名：删除用户组建模板
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6712&itf=67399
   */
  /* tslint:disable */
  'DELETE/api/component/deleteMemberTemplate.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] &&
          state['$$rapperResponseData']['DELETE/api/component/deleteMemberTemplate.json']) ||
        []
      return selectedState as Array<ResponseTypes['DELETE/api/component/deleteMemberTemplate.json']>
    })
  },

  /**
   * 接口名：✅【新】获取菜单列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6712&itf=80888
   */
  /* tslint:disable */
  'GET/api/component/findMenuList.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['GET/api/component/findMenuList.json']) || []
      return selectedState as Array<ResponseTypes['GET/api/component/findMenuList.json']>
    })
  },

  /**
   * 接口名：✅【新】获取组件列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6712&itf=80943
   */
  /* tslint:disable */
  'GET/api/component/findComponentList.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['GET/api/component/findComponentList.json']) ||
        []
      return selectedState as Array<ResponseTypes['GET/api/component/findComponentList.json']>
    })
  },

  /**
   * 接口名：【报表】账户分时汇总
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6752&itf=67459
   */
  /* tslint:disable */
  'GET/api/account/report/findHourSum.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['GET/api/account/report/findHourSum.json']) ||
        []
      return selectedState as Array<ResponseTypes['GET/api/account/report/findHourSum.json']>
    })
  },

  /**
   * 接口名：【报表】账户分时列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6752&itf=67344
   */
  /* tslint:disable */
  'GET/api/account/report/findHourList.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['GET/api/account/report/findHourList.json']) ||
        []
      return selectedState as Array<ResponseTypes['GET/api/account/report/findHourList.json']>
    })
  },

  /**
   * 接口名：【报表】账户整体分日汇总
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6752&itf=67472
   */
  /* tslint:disable */
  'GET/api/account/report/findDaySum.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['GET/api/account/report/findDaySum.json']) || []
      return selectedState as Array<ResponseTypes['GET/api/account/report/findDaySum.json']>
    })
  },

  /**
   * 接口名：【报表】账户整体分日列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6752&itf=67475
   */
  /* tslint:disable */
  'GET/api/account/report/findDayList.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['GET/api/account/report/findDayList.json']) ||
        []
      return selectedState as Array<ResponseTypes['GET/api/account/report/findDayList.json']>
    })
  },

  /**
   * 接口名：【 报表】计划分页列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6752&itf=67623
   */
  /* tslint:disable */
  'GET/api/campaign/report/findPage.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['GET/api/campaign/report/findPage.json']) || []
      return selectedState as Array<ResponseTypes['GET/api/campaign/report/findPage.json']>
    })
  },

  /**
   * 接口名：【报表】单个计划报表： 列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6752&itf=67480
   */
  /* tslint:disable */
  'GET/api/campaign/report/findList.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['GET/api/campaign/report/findList.json']) || []
      return selectedState as Array<ResponseTypes['GET/api/campaign/report/findList.json']>
    })
  },

  /**
   * 接口名：【报表】单个计划报表：汇总
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6752&itf=67481
   */
  /* tslint:disable */
  'GET/api/campaign/report/findSum.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['GET/api/campaign/report/findSum.json']) || []
      return selectedState as Array<ResponseTypes['GET/api/campaign/report/findSum.json']>
    })
  },

  /**
   * 接口名：【报表】单元分页列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6752&itf=67621
   */
  /* tslint:disable */
  'GET/api/adgroup/report/findPage.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['GET/api/adgroup/report/findPage.json']) || []
      return selectedState as Array<ResponseTypes['GET/api/adgroup/report/findPage.json']>
    })
  },

  /**
   * 接口名：【报表】单个单元报表： 列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6752&itf=67486
   */
  /* tslint:disable */
  'GET/api/adgroup/report/findList.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['GET/api/adgroup/report/findList.json']) || []
      return selectedState as Array<ResponseTypes['GET/api/adgroup/report/findList.json']>
    })
  },

  /**
   * 接口名：【报表】单个单元报表：汇总
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6752&itf=67487
   */
  /* tslint:disable */
  'GET/api/adgroup/report/findSum.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['GET/api/adgroup/report/findSum.json']) || []
      return selectedState as Array<ResponseTypes['GET/api/adgroup/report/findSum.json']>
    })
  },

  /**
   * 接口名：【报表】创意分页列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6752&itf=67639
   */
  /* tslint:disable */
  'GET/api/creative/report/findPage.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['GET/api/creative/report/findPage.json']) || []
      return selectedState as Array<ResponseTypes['GET/api/creative/report/findPage.json']>
    })
  },

  /**
   * 接口名：【报表】单个创意报表： 列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6752&itf=69359
   */
  /* tslint:disable */
  'GET/api/creative/report/findList.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['GET/api/creative/report/findList.json']) || []
      return selectedState as Array<ResponseTypes['GET/api/creative/report/findList.json']>
    })
  },

  /**
   * 接口名：【报表】单个创意报表： 汇总
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6752&itf=69360
   */
  /* tslint:disable */
  'GET/api/creative/report/findSum.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['GET/api/creative/report/findSum.json']) || []
      return selectedState as Array<ResponseTypes['GET/api/creative/report/findSum.json']>
    })
  },

  /**
   * 接口名：【报表】定向分页列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6752&itf=67637
   */
  /* tslint:disable */
  'GET/api/crowd/report/findPage.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['GET/api/crowd/report/findPage.json']) || []
      return selectedState as Array<ResponseTypes['GET/api/crowd/report/findPage.json']>
    })
  },

  /**
   * 接口名：【报表】单个定向报表： 列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6752&itf=69469
   */
  /* tslint:disable */
  'GET/api/crowd/report/findList.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['GET/api/crowd/report/findList.json']) || []
      return selectedState as Array<ResponseTypes['GET/api/crowd/report/findList.json']>
    })
  },

  /**
   * 接口名：【报表】单个定向报表： 汇总
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6752&itf=69470
   */
  /* tslint:disable */
  'GET/api/crowd/report/findSum.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['GET/api/crowd/report/findSum.json']) || []
      return selectedState as Array<ResponseTypes['GET/api/crowd/report/findSum.json']>
    })
  },

  /**
   * 接口名：【报表】资源位分页列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6752&itf=67622
   */
  /* tslint:disable */
  'GET/api/adzone/report/findPage.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['GET/api/adzone/report/findPage.json']) || []
      return selectedState as Array<ResponseTypes['GET/api/adzone/report/findPage.json']>
    })
  },

  /**
   * 接口名：【报表】单个资源位报表： 列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6752&itf=69472
   */
  /* tslint:disable */
  'GET/api/adzone/report/findList.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['GET/api/adzone/report/findList.json']) || []
      return selectedState as Array<ResponseTypes['GET/api/adzone/report/findList.json']>
    })
  },

  /**
   * 接口名：【报表】单个资源位报表： 汇总
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6752&itf=69471
   */
  /* tslint:disable */
  'GET/api/adzone/report/findSum.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['GET/api/adzone/report/findSum.json']) || []
      return selectedState as Array<ResponseTypes['GET/api/adzone/report/findSum.json']>
    })
  },

  /**
   * 接口名：【报表】账户概览：人群整体分日汇总
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6752&itf=79815
   */
  /* tslint:disable */
  'GET/api/account/report/findCrowdDaySum.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] &&
          state['$$rapperResponseData']['GET/api/account/report/findCrowdDaySum.json']) ||
        []
      return selectedState as Array<ResponseTypes['GET/api/account/report/findCrowdDaySum.json']>
    })
  },

  /**
   * 接口名：【报表】账户概览：人群整体分日列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6752&itf=79816
   */
  /* tslint:disable */
  'GET/api/account/report/findCrowdDayList.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] &&
          state['$$rapperResponseData']['GET/api/account/report/findCrowdDayList.json']) ||
        []
      return selectedState as Array<ResponseTypes['GET/api/account/report/findCrowdDayList.json']>
    })
  },

  /**
   * 接口名：【报表】账户概览：宝贝分页列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6752&itf=79817
   */
  /* tslint:disable */
  'GET/api/material/report/findItemPage.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['GET/api/material/report/findItemPage.json']) ||
        []
      return selectedState as Array<ResponseTypes['GET/api/material/report/findItemPage.json']>
    })
  },

  /**
   * 接口名：【报表】双十一活动报表-消费者触达
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6752&itf=82974
   */
  /* tslint:disable */
  'GET/api/activity/report/consumerReach.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] &&
          state['$$rapperResponseData']['GET/api/activity/report/consumerReach.json']) ||
        []
      return selectedState as Array<ResponseTypes['GET/api/activity/report/consumerReach.json']>
    })
  },

  /**
   * 接口名：【报表】账户分时列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7005&itf=69611
   */
  /* tslint:disable */
  'GET/api/account/report/exportHourList.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] &&
          state['$$rapperResponseData']['GET/api/account/report/exportHourList.json']) ||
        []
      return selectedState as Array<ResponseTypes['GET/api/account/report/exportHourList.json']>
    })
  },

  /**
   * 接口名：【报表】账户整体分日列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7005&itf=69612
   */
  /* tslint:disable */
  'GET/api/account/report/exportDayList.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['GET/api/account/report/exportDayList.json']) ||
        []
      return selectedState as Array<ResponseTypes['GET/api/account/report/exportDayList.json']>
    })
  },

  /**
   * 接口名：【 报表】计划报表下载
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7005&itf=69614
   */
  /* tslint:disable */
  'GET/api/campaign/report/exportCampaign.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] &&
          state['$$rapperResponseData']['GET/api/campaign/report/exportCampaign.json']) ||
        []
      return selectedState as Array<ResponseTypes['GET/api/campaign/report/exportCampaign.json']>
    })
  },

  /**
   * 接口名：【报表】单个计划报表： 列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7005&itf=69615
   */
  /* tslint:disable */
  'GET/api/campaign/report/exportDayOrHourList.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] &&
          state['$$rapperResponseData']['GET/api/campaign/report/exportDayOrHourList.json']) ||
        []
      return selectedState as Array<ResponseTypes['GET/api/campaign/report/exportDayOrHourList.json']>
    })
  },

  /**
   * 接口名：【报表】单个计划报表：汇总
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7005&itf=69616
   */
  /* tslint:disable */
  'GET/api/campaign/report/exportDayOrHourSum.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] &&
          state['$$rapperResponseData']['GET/api/campaign/report/exportDayOrHourSum.json']) ||
        []
      return selectedState as Array<ResponseTypes['GET/api/campaign/report/exportDayOrHourSum.json']>
    })
  },

  /**
   * 接口名：【报表】单元报表下载
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7005&itf=69617
   */
  /* tslint:disable */
  'GET/api/adgroup/report/exportAdgroup.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['GET/api/adgroup/report/exportAdgroup.json']) ||
        []
      return selectedState as Array<ResponseTypes['GET/api/adgroup/report/exportAdgroup.json']>
    })
  },

  /**
   * 接口名：【报表】单个单元报表： 列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7005&itf=69618
   */
  /* tslint:disable */
  'GET/api/adgroup/report/exportDayOrHourList.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] &&
          state['$$rapperResponseData']['GET/api/adgroup/report/exportDayOrHourList.json']) ||
        []
      return selectedState as Array<ResponseTypes['GET/api/adgroup/report/exportDayOrHourList.json']>
    })
  },

  /**
   * 接口名：【报表】单个单元报表：汇总
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7005&itf=69619
   */
  /* tslint:disable */
  'GET/api/adgroup/report/exportDayOrHourSum.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] &&
          state['$$rapperResponseData']['GET/api/adgroup/report/exportDayOrHourSum.json']) ||
        []
      return selectedState as Array<ResponseTypes['GET/api/adgroup/report/exportDayOrHourSum.json']>
    })
  },

  /**
   * 接口名：【报表】创意下载
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7005&itf=69620
   */
  /* tslint:disable */
  'GET/api/creative/report/exportCreative.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] &&
          state['$$rapperResponseData']['GET/api/creative/report/exportCreative.json']) ||
        []
      return selectedState as Array<ResponseTypes['GET/api/creative/report/exportCreative.json']>
    })
  },

  /**
   * 接口名：【报表】单个创意报表： 列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7005&itf=69622
   */
  /* tslint:disable */
  'GET/api/creative/report/exportDayOrHourList.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] &&
          state['$$rapperResponseData']['GET/api/creative/report/exportDayOrHourList.json']) ||
        []
      return selectedState as Array<ResponseTypes['GET/api/creative/report/exportDayOrHourList.json']>
    })
  },

  /**
   * 接口名：【报表】单个创意报表： 汇总
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7005&itf=69623
   */
  /* tslint:disable */
  'GET/api/creative/report/exportDayOrHourSum.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] &&
          state['$$rapperResponseData']['GET/api/creative/report/exportDayOrHourSum.json']) ||
        []
      return selectedState as Array<ResponseTypes['GET/api/creative/report/exportDayOrHourSum.json']>
    })
  },

  /**
   * 接口名：【报表】定向下载
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7005&itf=69624
   */
  /* tslint:disable */
  'GET/api/crowd/report/exportCrowd.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['GET/api/crowd/report/exportCrowd.json']) || []
      return selectedState as Array<ResponseTypes['GET/api/crowd/report/exportCrowd.json']>
    })
  },

  /**
   * 接口名：【报表】单个定向报表： 列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7005&itf=69625
   */
  /* tslint:disable */
  'GET/api/crowd/report/exportDayOrHourList.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] &&
          state['$$rapperResponseData']['GET/api/crowd/report/exportDayOrHourList.json']) ||
        []
      return selectedState as Array<ResponseTypes['GET/api/crowd/report/exportDayOrHourList.json']>
    })
  },

  /**
   * 接口名：【报表】单个定向报表： 汇总
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7005&itf=69626
   */
  /* tslint:disable */
  'GET/api/crowd/report/exportDayOrHourSum.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] &&
          state['$$rapperResponseData']['GET/api/crowd/report/exportDayOrHourSum.json']) ||
        []
      return selectedState as Array<ResponseTypes['GET/api/crowd/report/exportDayOrHourSum.json']>
    })
  },

  /**
   * 接口名：【报表】资源位下载
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7005&itf=69627
   */
  /* tslint:disable */
  'GET/api/adzone/report/exportAdzone.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['GET/api/adzone/report/exportAdzone.json']) ||
        []
      return selectedState as Array<ResponseTypes['GET/api/adzone/report/exportAdzone.json']>
    })
  },

  /**
   * 接口名：【报表】单个资源位报表： 列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7005&itf=69628
   */
  /* tslint:disable */
  'GET/api/adzone/report/exportDayOrHourList.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] &&
          state['$$rapperResponseData']['GET/api/adzone/report/exportDayOrHourList.json']) ||
        []
      return selectedState as Array<ResponseTypes['GET/api/adzone/report/exportDayOrHourList.json']>
    })
  },

  /**
   * 接口名：【报表】单个资源位报表： 汇总
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7005&itf=69629
   */
  /* tslint:disable */
  'GET/api/adzone/report/exportDayOrHourSum.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] &&
          state['$$rapperResponseData']['GET/api/adzone/report/exportDayOrHourSum.json']) ||
        []
      return selectedState as Array<ResponseTypes['GET/api/adzone/report/exportDayOrHourSum.json']>
    })
  },

  /**
   * 接口名：【报表】账户概览：宝贝分页列表下载
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7005&itf=79824
   */
  /* tslint:disable */
  'GET/api/material/report/exportItem.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['GET/api/material/report/exportItem.json']) ||
        []
      return selectedState as Array<ResponseTypes['GET/api/material/report/exportItem.json']>
    })
  },

  /**
   * 接口名：【报表】账户概览：人群整体分日列表下载
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7005&itf=80230
   */
  /* tslint:disable */
  'GET/api/account/report/exportCrowdDayList.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] &&
          state['$$rapperResponseData']['GET/api/account/report/exportCrowdDayList.json']) ||
        []
      return selectedState as Array<ResponseTypes['GET/api/account/report/exportCrowdDayList.json']>
    })
  },

  /**
   * 接口名：查询站内信列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7037&itf=69919
   */
  /* tslint:disable */
  'GET/api/message/findLetterList.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['GET/api/message/findLetterList.json']) || []
      return selectedState as Array<ResponseTypes['GET/api/message/findLetterList.json']>
    })
  },

  /**
   * 接口名：查看站内信
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7037&itf=69920
   */
  /* tslint:disable */
  'GET/api/message/getLetterDetail.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['GET/api/message/getLetterDetail.json']) || []
      return selectedState as Array<ResponseTypes['GET/api/message/getLetterDetail.json']>
    })
  },

  /**
   * 接口名：批量已读站内信
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7037&itf=70115
   */
  /* tslint:disable */
  'POST/api/message/batchReadLetters.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['POST/api/message/batchReadLetters.json']) || []
      return selectedState as Array<ResponseTypes['POST/api/message/batchReadLetters.json']>
    })
  },

  /**
   * 接口名：消费者汇总卡片
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7107&itf=70493
   */
  /* tslint:disable */
  'GET/api/report/consumer/findSummary.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['GET/api/report/consumer/findSummary.json']) ||
        []
      return selectedState as Array<ResponseTypes['GET/api/report/consumer/findSummary.json']>
    })
  },

  /**
   * 接口名：消费者流转
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7107&itf=70497
   */
  /* tslint:disable */
  'GET/api/report/consumer/findConsumerCirculation.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] &&
          state['$$rapperResponseData']['GET/api/report/consumer/findConsumerCirculation.json']) ||
        []
      return selectedState as Array<ResponseTypes['GET/api/report/consumer/findConsumerCirculation.json']>
    })
  },

  /**
   * 接口名：粉丝汇总卡片
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7167&itf=70935
   */
  /* tslint:disable */
  'GET/api/report/fans/findSummary.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['GET/api/report/fans/findSummary.json']) || []
      return selectedState as Array<ResponseTypes['GET/api/report/fans/findSummary.json']>
    })
  },

  /**
   * 接口名：粉丝流转
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7167&itf=70962
   */
  /* tslint:disable */
  'GET/api/report/fans/findCirculation.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['GET/api/report/fans/findCirculation.json']) ||
        []
      return selectedState as Array<ResponseTypes['GET/api/report/fans/findCirculation.json']>
    })
  },

  /**
   * 接口名：查询直钻迁移计划
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7473&itf=73258
   */
  /* tslint:disable */
  'GET/api/campaign/findTransferPage.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['GET/api/campaign/findTransferPage.json']) || []
      return selectedState as Array<ResponseTypes['GET/api/campaign/findTransferPage.json']>
    })
  },

  /**
   * 接口名：迁移完成
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7473&itf=73370
   */
  /* tslint:disable */
  'POST/api/campaign/transfer.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['POST/api/campaign/transfer.json']) || []
      return selectedState as Array<ResponseTypes['POST/api/campaign/transfer.json']>
    })
  },

  /**
   * 接口名：活动整体分日汇总
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7723&itf=75133
   */
  /* tslint:disable */
  'GET/api/activity/report/findDaySum.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['GET/api/activity/report/findDaySum.json']) ||
        []
      return selectedState as Array<ResponseTypes['GET/api/activity/report/findDaySum.json']>
    })
  },

  /**
   * 接口名：活动整体分日列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7723&itf=75150
   */
  /* tslint:disable */
  'GET/api/activity/report/findDayList.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['GET/api/activity/report/findDayList.json']) ||
        []
      return selectedState as Array<ResponseTypes['GET/api/activity/report/findDayList.json']>
    })
  },

  /**
   * 接口名：活动人群整体分日汇总
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7723&itf=75151
   */
  /* tslint:disable */
  'GET/api/activity/report/findCrowdDaySum.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] &&
          state['$$rapperResponseData']['GET/api/activity/report/findCrowdDaySum.json']) ||
        []
      return selectedState as Array<ResponseTypes['GET/api/activity/report/findCrowdDaySum.json']>
    })
  },

  /**
   * 接口名：活动人群整体分日报表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7723&itf=75152
   */
  /* tslint:disable */
  'GET/api/activity/report/findCrowdDayList.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] &&
          state['$$rapperResponseData']['GET/api/activity/report/findCrowdDayList.json']) ||
        []
      return selectedState as Array<ResponseTypes['GET/api/activity/report/findCrowdDayList.json']>
    })
  },

  /**
   * 接口名：活动宝贝分页列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7723&itf=75153
   */
  /* tslint:disable */
  'GET/api/activity/report/findItemPage.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['GET/api/activity/report/findItemPage.json']) ||
        []
      return selectedState as Array<ResponseTypes['GET/api/activity/report/findItemPage.json']>
    })
  },

  /**
   * 接口名：活动整体分日列表下载
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7723&itf=75164
   */
  /* tslint:disable */
  'GET/api/activity/report/exportDayList.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] &&
          state['$$rapperResponseData']['GET/api/activity/report/exportDayList.json']) ||
        []
      return selectedState as Array<ResponseTypes['GET/api/activity/report/exportDayList.json']>
    })
  },

  /**
   * 接口名：活动人群整体分日报表下载
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7723&itf=75165
   */
  /* tslint:disable */
  'GET/api/activity/report/exportCrowdDayList.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] &&
          state['$$rapperResponseData']['GET/api/activity/report/exportCrowdDayList.json']) ||
        []
      return selectedState as Array<ResponseTypes['GET/api/activity/report/exportCrowdDayList.json']>
    })
  },

  /**
   * 接口名：活动宝贝列表下载
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7723&itf=75166
   */
  /* tslint:disable */
  'GET/api/activity/report/exportItem.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['GET/api/activity/report/exportItem.json']) ||
        []
      return selectedState as Array<ResponseTypes['GET/api/activity/report/exportItem.json']>
    })
  },

  /**
   * 接口名：618活动接口迁移到日常接口的map
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7723&itf=79825
   */
  /* tslint:disable */
  'GET/map': function useData() {
    return useSelector((state: State) => {
      const selectedState = (state['$$rapperResponseData'] && state['$$rapperResponseData']['GET/map']) || []
      return selectedState as Array<ResponseTypes['GET/map']>
    })
  },

  /**
   * 接口名：结案-计划投放效果
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7789&itf=75586
   */
  /* tslint:disable */
  'GET/api/report/case/findCampaignDaySum.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] &&
          state['$$rapperResponseData']['GET/api/report/case/findCampaignDaySum.json']) ||
        []
      return selectedState as Array<ResponseTypes['GET/api/report/case/findCampaignDaySum.json']>
    })
  },

  /**
   * 接口名：结案-商品明细分析
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7789&itf=75587
   */
  /* tslint:disable */
  'GET/api/report/case/findItemSumList.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['GET/api/report/case/findItemSumList.json']) ||
        []
      return selectedState as Array<ResponseTypes['GET/api/report/case/findItemSumList.json']>
    })
  },

  /**
   * 接口名：结案-商品整体趋势
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7789&itf=75588
   */
  /* tslint:disable */
  'GET/api/report/case/findItemTrendDayList.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] &&
          state['$$rapperResponseData']['GET/api/report/case/findItemTrendDayList.json']) ||
        []
      return selectedState as Array<ResponseTypes['GET/api/report/case/findItemTrendDayList.json']>
    })
  },

  /**
   * 接口名：【已有接口】查询新品计划列表 /api/campaign/findList.json
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7789&itf=75590
   */
  /* tslint:disable */
  'GET/findList.json': function useData() {
    return useSelector((state: State) => {
      const selectedState = (state['$$rapperResponseData'] && state['$$rapperResponseData']['GET/findList.json']) || []
      return selectedState as Array<ResponseTypes['GET/findList.json']>
    })
  },

  /**
   * 接口名：结案-查询商品对比曲线
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7789&itf=77755
   */
  /* tslint:disable */
  'GET/api/report/case/findFeedShopItemAllListComp.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] &&
          state['$$rapperResponseData']['GET/api/report/case/findFeedShopItemAllListComp.json']) ||
        []
      return selectedState as Array<ResponseTypes['GET/api/report/case/findFeedShopItemAllListComp.json']>
    })
  },

  /**
   * 接口名：查询计划绑定的定向列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7935&itf=76654
   */
  /* tslint:disable */
  'GET/api/campaign/crowd/findList.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['GET/api/campaign/crowd/findList.json']) || []
      return selectedState as Array<ResponseTypes['GET/api/campaign/crowd/findList.json']>
    })
  },

  /**
   * 接口名：修改计划绑定定向
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7935&itf=76656
   */
  /* tslint:disable */
  'PUT/api/campaign/crowd/modify.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['PUT/api/campaign/crowd/modify.json']) || []
      return selectedState as Array<ResponseTypes['PUT/api/campaign/crowd/modify.json']>
    })
  },

  /**
   * 接口名：一键创建推广计划单环
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7956&itf=76782
   */
  /* tslint:disable */
  'POST/api/solution/add.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['POST/api/solution/add.json']) || []
      return selectedState as Array<ResponseTypes['POST/api/solution/add.json']>
    })
  },

  /**
   * 接口名：分页获取商品列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7956&itf=70821
   */
  /* tslint:disable */
  'GET/api/material/item/findPage.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['GET/api/material/item/findPage.json']) || []
      return selectedState as Array<ResponseTypes['GET/api/material/item/findPage.json']>
    })
  },

  /**
   * 接口名：是否可使用一键推广
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7956&itf=77116
   */
  /* tslint:disable */
  'GET/api/solution/allowPromotion.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['GET/api/solution/allowPromotion.json']) || []
      return selectedState as Array<ResponseTypes['GET/api/solution/allowPromotion.json']>
    })
  },

  /**
   * 接口名：批量一键创建
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7956&itf=77594
   */
  /* tslint:disable */
  'POST/api/solution/batchAdd.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['POST/api/solution/batchAdd.json']) || []
      return selectedState as Array<ResponseTypes['POST/api/solution/batchAdd.json']>
    })
  },

  /**
   * 接口名：查询定向标签不分页
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=8120&itf=68423
   */
  /* tslint:disable */
  'GET/api/target/findLabelList.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['GET/api/target/findLabelList.json']) || []
      return selectedState as Array<ResponseTypes['GET/api/target/findLabelList.json']>
    })
  },

  /**
   * 接口名：查询类目精选的类目列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=8120&itf=78707
   */
  /* tslint:disable */
  'GET/api/target/findSelectionCategoryList.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] &&
          state['$$rapperResponseData']['GET/api/target/findSelectionCategoryList.json']) ||
        []
      return selectedState as Array<ResponseTypes['GET/api/target/findSelectionCategoryList.json']>
    })
  },

  /**
   * 接口名：账户充值
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=8524&itf=67373
   */
  /* tslint:disable */
  'GET/api/account/recharge.action': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['GET/api/account/recharge.action']) || []
      return selectedState as Array<ResponseTypes['GET/api/account/recharge.action']>
    })
  },

  /**
   * 接口名：获取账户详情
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=8524&itf=67468
   */
  /* tslint:disable */
  'GET/api/account/getInfo.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['GET/api/account/getInfo.json']) || []
      return selectedState as Array<ResponseTypes['GET/api/account/getInfo.json']>
    })
  },

  /**
   * 接口名：【接口优化】新建单元
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=8524&itf=78321
   */
  /* tslint:disable */
  'POST/api/adgroup/batchAdd.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['POST/api/adgroup/batchAdd.json']) || []
      return selectedState as Array<ResponseTypes['POST/api/adgroup/batchAdd.json']>
    })
  },

  /**
   * 接口名：盘量接口(待定)
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=8524&itf=80936
   */
  /* tslint:disable */
  'POST/api/campaign/estimateContractPv.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['POST/api/campaign/estimateContractPv.json']) ||
        []
      return selectedState as Array<ResponseTypes['POST/api/campaign/estimateContractPv.json']>
    })
  },

  /**
   * 接口名：锁量接口
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=8524&itf=84599
   */
  /* tslint:disable */
  'POST/api/algotool/lockQuantity.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['POST/api/algotool/lockQuantity.json']) || []
      return selectedState as Array<ResponseTypes['POST/api/algotool/lockQuantity.json']>
    })
  },

  /**
   * 接口名：【管理】查询定向列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=8828&itf=68386
   */
  /* tslint:disable */
  'GET/api/crowd/findPage.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['GET/api/crowd/findPage.json']) || []
      return selectedState as Array<ResponseTypes['GET/api/crowd/findPage.json']>
    })
  },

  /**
   * 接口名：查询预算模拟器
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=8828&itf=83281
   */
  /* tslint:disable */
  'POST/api/algotool/getBudgetSimulator.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['POST/api/algotool/getBudgetSimulator.json']) ||
        []
      return selectedState as Array<ResponseTypes['POST/api/algotool/getBudgetSimulator.json']>
    })
  },

  /**
   * 接口名：新建推广计划
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=8828&itf=67209
   */
  /* tslint:disable */
  'POST/api/campaign/add.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['POST/api/campaign/add.json']) || []
      return selectedState as Array<ResponseTypes['POST/api/campaign/add.json']>
    })
  },

  /**
   * 接口名：分页获取单元列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=8828&itf=67275
   */
  /* tslint:disable */
  'GET/api/adgroup/findPage.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['GET/api/adgroup/findPage.json']) || []
      return selectedState as Array<ResponseTypes['GET/api/adgroup/findPage.json']>
    })
  },

  /**
   * 接口名：全量修改计划信息
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=8828&itf=67338
   */
  /* tslint:disable */
  'PUT/api/campaign/modEntire.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['PUT/api/campaign/modEntire.json']) || []
      return selectedState as Array<ResponseTypes['PUT/api/campaign/modEntire.json']>
    })
  },

  /**
   * 接口名：智能人群探索
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=8828&itf=83321
   */
  /* tslint:disable */
  'GET/api/algotool/probeInterest.json': function useData() {
    return useSelector((state: State) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['GET/api/algotool/probeInterest.json']) || []
      return selectedState as Array<ResponseTypes['GET/api/algotool/probeInterest.json']>
    })
  },
}

/** 重置接口数据 */
export const clearResponseCache = {
  /**
   * 接口名：计划相关字段参考[新建]
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6615&itf=67832
   */
  'GET/readme/campaign': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/readme/campaign': undefined},
    })
  },

  /**
   * 接口名：获取计划默认设置
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6615&itf=67189
   */
  'GET/api/campaign/default.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/api/campaign/default.json': undefined},
    })
  },

  /**
   * 接口名：获取计划详情
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6615&itf=67240
   */
  'GET/api/campaign/get.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/api/campaign/get.json': undefined},
    })
  },

  /**
   * 接口名：获取计划结算信息
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6615&itf=73647
   */
  'GET/api/campaign/getSettleInfo.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/api/campaign/getSettleInfo.json': undefined},
    })
  },

  /**
   * 接口名：获取计划列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6615&itf=67241
   */
  'GET/api/campaign/findList.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/api/campaign/findList.json': undefined},
    })
  },

  /**
   * 接口名：分页获取计划列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6615&itf=67264
   */
  'GET/api/campaign/findPage.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/api/campaign/findPage.json': undefined},
    })
  },

  /**
   * 接口名：获取草稿计划列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6615&itf=67236
   */
  'GET/api/campaign/findDraftList.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/api/campaign/findDraftList.json': undefined},
    })
  },

  /**
   * 接口名：删除计划
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6615&itf=67242
   */
  'DELETE/api/campaign/delete.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'DELETE/api/campaign/delete.json': undefined},
    })
  },

  /**
   * 接口名：克隆计划
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6615&itf=67277
   */
  'POST/api/campaign/clone.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'POST/api/campaign/clone.json': undefined},
    })
  },

  /**
   * 接口名：【提醒】修改计划预算提醒
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6615&itf=67321
   */
  'PUT/api/campaign/updateCampaignBudgetRemindSetting.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'PUT/api/campaign/updateCampaignBudgetRemindSetting.json': undefined},
    })
  },

  /**
   * 接口名：【提醒】获取计划预算提醒
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6615&itf=67369
   */
  'GET/api/campaign/getCampaignBudgetRemindSetting.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/api/campaign/getCampaignBudgetRemindSetting.json': undefined},
    })
  },

  /**
   * 接口名：批量修改计划信息
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6615&itf=67654
   */
  'PUT/api/campaign/batchModify.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'PUT/api/campaign/batchModify.json': undefined},
    })
  },

  /**
   * 接口名：计划完成
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6615&itf=67672
   */
  'PUT/api/campaign/complete.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'PUT/api/campaign/complete.json': undefined},
    })
  },

  /**
   * 接口名：修改置顶状态
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6615&itf=67674
   */
  'PUT/api/campaign/setTop.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'PUT/api/campaign/setTop.json': undefined},
    })
  },

  /**
   * 接口名：获取有效计划数
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6615&itf=67975
   */
  'GET/api/campaign/validCount.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/api/campaign/validCount.json': undefined},
    })
  },

  /**
   * 接口名：获取总预算
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6615&itf=69603
   */
  'GET/api/campaign/findDayBudgetSum.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/api/campaign/findDayBudgetSum.json': undefined},
    })
  },

  /**
   * 接口名：获取计划流程信息
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6615&itf=73883
   */
  'GET/api/campaign/displayConfig.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/api/campaign/displayConfig.json': undefined},
    })
  },

  /**
   * 接口名：获取计划可以修改的配置
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6615&itf=76004
   */
  'GET/api/campaign/modifyConfig.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/api/campaign/modifyConfig.json': undefined},
    })
  },

  /**
   * 接口名：批量转换计划到活动计划
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6615&itf=75064
   */
  'PUT/api/campaign/activity/transfer.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'PUT/api/campaign/activity/transfer.json': undefined},
    })
  },

  /**
   * 接口名：批量转换活动scene
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6615&itf=75562
   */
  'PUT/api/campaign/transferScene.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'PUT/api/campaign/transferScene.json': undefined},
    })
  },

  /**
   * 接口名：转换活动阶段
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6615&itf=83231
   */
  'PUT/api/campaign/activity/transferPhase.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'PUT/api/campaign/activity/transferPhase.json': undefined},
    })
  },

  /**
   * 接口名：获取再营销-标签信息
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6615&itf=80101
   */
  'GET/api/target/getRemarketingCoverage.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/api/target/getRemarketingCoverage.json': undefined},
    })
  },

  /**
   * 接口名：新建单元
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6699&itf=67272
   */
  'POST/api/adgroup/add.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'POST/api/adgroup/add.json': undefined},
    })
  },

  /**
   * 接口名：获取单元默认设置
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6699&itf=67271
   */
  'GET/api/adgroup/default.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/api/adgroup/default.json': undefined},
    })
  },

  /**
   * 接口名：获取单元详情
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6699&itf=67273
   */
  'GET/api/adgroup/get.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/api/adgroup/get.json': undefined},
    })
  },

  /**
   * 接口名：获取单元列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6699&itf=67274
   */
  'GET/api/adgroup/findList.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/api/adgroup/findList.json': undefined},
    })
  },

  /**
   * 接口名：批量删除单元
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6699&itf=67276
   */
  'DELETE/api/adgroup/batchDelete.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'DELETE/api/adgroup/batchDelete.json': undefined},
    })
  },

  /**
   * 接口名：克隆单元
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6699&itf=67278
   */
  'POST/api/adgroup/clone.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'POST/api/adgroup/clone.json': undefined},
    })
  },

  /**
   * 接口名：批量全量修改单元信息
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6699&itf=67342
   */
  'PUT/api/adgroup/batchModEntire.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'PUT/api/adgroup/batchModEntire.json': undefined},
    })
  },

  /**
   * 接口名：批量部分修改单元信息
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6699&itf=79050
   */
  'PUT/api/adgroup/batchModifyPart.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'PUT/api/adgroup/batchModifyPart.json': undefined},
    })
  },

  /**
   * 接口名：质量分接口
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6699&itf=67557
   */
  'GET/api/adgroup/qualityScore/findList.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/api/adgroup/qualityScore/findList.json': undefined},
    })
  },

  /**
   * 接口名：质量分折线图
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6699&itf=69823
   */
  'GET/api/adgroup/qualityScore/findHisList.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/api/adgroup/qualityScore/findHisList.json': undefined},
    })
  },

  /**
   * 接口名：批量修改单元
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6699&itf=67703
   */
  'PUT/api/adgroup/batchModify.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'PUT/api/adgroup/batchModify.json': undefined},
    })
  },

  /**
   * 接口名：质量分查询条件
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6699&itf=68838
   */
  'GET/api/adgroup/qualityScore/findQueryCondition.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/api/adgroup/qualityScore/findQueryCondition.json': undefined},
    })
  },

  /**
   * 接口名：查看计划带着单元的组合接口
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6699&itf=69419
   */
  'GET/api/adgroup/findCampaignAndAdgroupList.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/api/adgroup/findCampaignAndAdgroupList.json': undefined},
    })
  },

  /**
   * 接口名：修改单元上的系统创意设置
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6699&itf=75561
   */
  'PUT/api/adgroup/useSystemCreative.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'PUT/api/adgroup/useSystemCreative.json': undefined},
    })
  },

  /**
   * 接口名：【接口优化】修改单元
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6699&itf=78328
   */
  'PUT/api/adgroup/batchModifyEntire.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'PUT/api/adgroup/batchModifyEntire.json': undefined},
    })
  },

  /**
   * 接口名：批量修改单元出价
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6699&itf=87108
   */
  'PUT/api/adgroup/batchModifyPrice.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'PUT/api/adgroup/batchModifyPrice.json': undefined},
    })
  },

  /**
   * 接口名：批量新建创意
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6662&itf=67197
   */
  'POST/api/creative/batchAddAndBind.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'POST/api/creative/batchAddAndBind.json': undefined},
    })
  },

  /**
   * 接口名：批量解绑创意
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6662&itf=73851
   */
  'PUT/api/creative/batchUnbind.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'PUT/api/creative/batchUnbind.json': undefined},
    })
  },

  /**
   * 接口名：推荐创意
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6662&itf=83233
   */
  'GET/api/creative/recommend.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/api/creative/recommend.json': undefined},
    })
  },

  /**
   * 接口名：横向管理查看创意列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6662&itf=67199
   */
  'GET/api/creative/findPage.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/api/creative/findPage.json': undefined},
    })
  },

  /**
   * 接口名：查询创意违规记录
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6662&itf=67558
   */
  'GET/api/creative/findPunishRecordList.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/api/creative/findPunishRecordList.json': undefined},
    })
  },

  /**
   * 接口名：创意查询条件
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6662&itf=67560
   */
  'GET/api/creative/findQueryCondition.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/api/creative/findQueryCondition.json': undefined},
    })
  },

  /**
   * 接口名：跳转新建创意页面
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6662&itf=68950
   */
  'GET/api/creativeCenter/gotoCreation.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/api/creativeCenter/gotoCreation.json': undefined},
    })
  },

  /**
   * 接口名：查看创意模板
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6662&itf=70224
   */
  'GET/api/creative/template/findPackageList.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/api/creative/template/findPackageList.json': undefined},
    })
  },

  /**
   * 接口名：跳转模板制作页面
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6662&itf=70256
   */
  'GET/api/creativeCenter/gotoTemplateNew.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/api/creativeCenter/gotoTemplateNew.json': undefined},
    })
  },

  /**
   * 接口名：获取创意中心需要的物料
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6662&itf=70355
   */
  'GET/api/creativeCenter/getMaterial.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/api/creativeCenter/getMaterial.json': undefined},
    })
  },

  /**
   * 接口名：删除创意
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6662&itf=73923
   */
  'DELETE/api/creative/delete.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'DELETE/api/creative/delete.json': undefined},
    })
  },

  /**
   * 接口名：活动创意打标
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6662&itf=85285
   */
  'PUT/api/creative/activity/batchAddTag.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'PUT/api/creative/activity/batchAddTag.json': undefined},
    })
  },

  /**
   * 接口名：预览创意接口
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6662&itf=77911
   */
  'POST/api/creative/preview.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'POST/api/creative/preview.json': undefined},
    })
  },

  /**
   * 接口名：获取资源位列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6687&itf=67190
   */
  'GET/api/adzone/findList.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/api/adzone/findList.json': undefined},
    })
  },

  /**
   * 接口名：检查资源位匹配情况
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6687&itf=67243
   */
  'GET/api/adzone/checkList.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/api/adzone/checkList.json': undefined},
    })
  },

  /**
   * 接口名：【横向】移除绑定资源位
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6687&itf=67248
   */
  'PUT/api/adzone/unbindList.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'PUT/api/adzone/unbindList.json': undefined},
    })
  },

  /**
   * 接口名：【横向】更新广告位绑定情况
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6687&itf=67254
   */
  'PUT/api/adzone/bindList.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'PUT/api/adzone/bindList.json': undefined},
    })
  },

  /**
   * 接口名：【横向】分页获取资源位列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6687&itf=67267
   */
  'GET/api/adzone/findPage.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/api/adzone/findPage.json': undefined},
    })
  },

  /**
   * 接口名：【管理】批量修改溢价
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6687&itf=68949
   */
  'PUT/api/adzone/batchModify.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'PUT/api/adzone/batchModify.json': undefined},
    })
  },

  /**
   * 接口名：分页获取物料列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6688&itf=67403
   */
  'GET/api/material/findPage.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/api/material/findPage.json': undefined},
    })
  },

  /**
   * 接口名：获取推荐物料列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6688&itf=87196
   */
  'GET/api/material/recommend.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/api/material/recommend.json': undefined},
    })
  },

  /**
   * 接口名：获取物料查询条件
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6688&itf=67405
   */
  'GET/api/material/findQueryCondition.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/api/material/findQueryCondition.json': undefined},
    })
  },

  /**
   * 接口名：获取商品查询条件
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6688&itf=70820
   */
  'GET/api/material/item/findQueryCondition.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/api/material/item/findQueryCondition.json': undefined},
    })
  },

  /**
   * 接口名：获取权益查询条件
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6688&itf=78780
   */
  'GET/api/coupon/findQueryCondition.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/api/coupon/findQueryCondition.json': undefined},
    })
  },

  /**
   * 接口名：查询物料违规记录
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6688&itf=67559
   */
  'GET/api/material/findPunishRecordList.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/api/material/findPunishRecordList.json': undefined},
    })
  },

  /**
   * 接口名：校验推广
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6688&itf=67656
   */
  'GET/api/material/accessAllowed.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/api/material/accessAllowed.json': undefined},
    })
  },

  /**
   * 接口名：校验商品
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6688&itf=70819
   */
  'GET/api/material/item/accessAllowed.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/api/material/item/accessAllowed.json': undefined},
    })
  },

  /**
   * 接口名：优惠券接口
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6688&itf=70837
   */
  'GET/api/coupon/findList.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/api/coupon/findList.json': undefined},
    })
  },

  /**
   * 接口名：分页获取权益信息
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6688&itf=78647
   */
  'GET/api/coupon/findPage.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/api/coupon/findPage.json': undefined},
    })
  },

  /**
   * 接口名：获取推荐优惠券
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6688&itf=78925
   */
  'GET/api/coupon/recommend.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/api/coupon/recommend.json': undefined},
    })
  },

  /**
   * 接口名：批量校验接口
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6688&itf=75890
   */
  'GET/api/material/batchAccessAllowed.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/api/material/batchAccessAllowed.json': undefined},
    })
  },

  /**
   * 接口名：【管理】新增定向
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6840&itf=68388
   */
  'PUT/api/crowd/modifyByType.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'PUT/api/crowd/modifyByType.json': undefined},
    })
  },

  /**
   * 接口名：【管理】删除定向绑定
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6840&itf=68391
   */
  'DELETE/api/crowd/delete.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'DELETE/api/crowd/delete.json': undefined},
    })
  },

  /**
   * 接口名：【管理】查询定向列表不分页
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6840&itf=68395
   */
  'GET/api/crowd/findList.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/api/crowd/findList.json': undefined},
    })
  },

  /**
   * 接口名：【主流程】查询推荐定向
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6840&itf=68397
   */
  'GET/api/target/findSuggest.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/api/target/findSuggest.json': undefined},
    })
  },

  /**
   * 接口名：【工具】查询建议出价&市场平均价
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6840&itf=68400
   */
  'POST/api/crowd/getSuggestPrice.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'POST/api/crowd/getSuggestPrice.json': undefined},
    })
  },

  /**
   * 接口名：【工具】流量预估
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6840&itf=68418
   */
  'POST/api/algotool/getPredictedPvUv.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'POST/api/algotool/getPredictedPvUv.json': undefined},
    })
  },

  /**
   * 接口名：查询定向列表（没有category）
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6840&itf=68420
   */
  'GET/api/target/findList.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/api/target/findList.json': undefined},
    })
  },

  /**
   * 接口名：查询定向分组列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6840&itf=68421
   */
  'GET/api/target/findCategoryList.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/api/target/findCategoryList.json': undefined},
    })
  },

  /**
   * 接口名：查询定向标签分页
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6840&itf=68425
   */
  'GET/api/target/findLabelPage.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/api/target/findLabelPage.json': undefined},
    })
  },

  /**
   * 接口名：【管理】查询定向筛选框
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6840&itf=68426
   */
  'GET/api/target/findTargetTypeCondition.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/api/target/findTargetTypeCondition.json': undefined},
    })
  },

  /**
   * 接口名：查询店铺关键词
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6840&itf=68427
   */
  'GET/api/target/getKeywordShopUv.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/api/target/getKeywordShopUv.json': undefined},
    })
  },

  /**
   * 接口名：查询店铺定向筛选条件
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6840&itf=68429
   */
  'GET/api/target/findShopTargetQueryCondition.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/api/target/findShopTargetQueryCondition.json': undefined},
    })
  },

  /**
   * 接口名：【工具】单品托管手动出价建议价
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6840&itf=68552
   */
  'GET/api/algotool/findManualBidSuggestPrice.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/api/algotool/findManualBidSuggestPrice.json': undefined},
    })
  },

  /**
   * 接口名：【管理】批量出价
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6840&itf=68946
   */
  'POST/api/crowd/batchModify.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'POST/api/crowd/batchModify.json': undefined},
    })
  },

  /**
   * 接口名：【工具】出价模拟器
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6840&itf=69205
   */
  'GET/api/crowd/findSimulatorPointList.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/api/crowd/findSimulatorPointList.json': undefined},
    })
  },

  /**
   * 接口名：【工具】资源位建议溢价
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6840&itf=69646
   */
  'POST/api/adzone/getSuggestDiscount.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'POST/api/adzone/getSuggestDiscount.json': undefined},
    })
  },

  /**
   * 接口名：关键词包含优化
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6840&itf=77913
   */
  'POST/api/target/findSonkeywordList.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'POST/api/target/findSonkeywordList.json': undefined},
    })
  },

  /**
   * 接口名：【人群推荐】获取人群推荐
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6840&itf=83230
   */
  'GET/api/target/findRecommendList.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/api/target/findRecommendList.json': undefined},
    })
  },

  /**
   * 接口名：【人群推荐】分页获取指定推荐人群
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6840&itf=83235
   */
  'GET/api/target/findRecommendPage.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/api/target/findRecommendPage.json': undefined},
    })
  },

  /**
   * 接口名：【人群推荐】新增定向（非覆盖）
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6840&itf=83236
   */
  'PUT/api/target/addTargetLabel.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'PUT/api/target/addTargetLabel.json': undefined},
    })
  },

  /**
   * 接口名：更新报表展现指标
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6692&itf=67498
   */
  'POST/api/member/updateConfig.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'POST/api/member/updateConfig.json': undefined},
    })
  },

  /**
   * 接口名：用户登出
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6692&itf=67238
   */
  'GET/api/member/logout.action': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/api/member/logout.action': undefined},
    })
  },

  /**
   * 接口名：【CRM】伪登陆
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6692&itf=67244
   */
  'GET/api/member/adminLogin.action': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/api/member/adminLogin.action': undefined},
    })
  },

  /**
   * 接口名：用户协议签署
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6692&itf=67246
   */
  'POST/api/member/signProtocol.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'POST/api/member/signProtocol.json': undefined},
    })
  },

  /**
   * 接口名：获取用户信息
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6692&itf=67253
   */
  'GET/api/member/getInfo.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/api/member/getInfo.json': undefined},
    })
  },

  /**
   * 接口名：创建用户联系人
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6692&itf=67294
   */
  'POST/api/member/addContacts.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'POST/api/member/addContacts.json': undefined},
    })
  },

  /**
   * 接口名：用户品牌检测
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6692&itf=67350
   */
  'GET/api/member/getQualificationBrandAccess.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/api/member/getQualificationBrandAccess.json': undefined},
    })
  },

  /**
   * 接口名：校验用户联系人旺旺合法性
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6692&itf=67295
   */
  'GET/api/member/checkContactsName.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/api/member/checkContactsName.json': undefined},
    })
  },

  /**
   * 接口名：获取用户联系人列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6692&itf=67298
   */
  'GET/api/member/findContactsList.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/api/member/findContactsList.json': undefined},
    })
  },

  /**
   * 接口名：查询用户违规状态
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6692&itf=67473
   */
  'GET/api/member/getPunishStatus.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/api/member/getPunishStatus.json': undefined},
    })
  },

  /**
   * 接口名：查询用户违规记录
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6692&itf=67476
   */
  'GET/api/member/findPunishRecordList.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/api/member/findPunishRecordList.json': undefined},
    })
  },

  /**
   * 接口名：查询用户资质违规记录
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6692&itf=67482
   */
  'GET/api/member/findQualificationPunishRecordList.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/api/member/findQualificationPunishRecordList.json': undefined},
    })
  },

  /**
   * 接口名：判断用户是否签订协议
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6692&itf=67731
   */
  'GET/api/member/isProtocolSigned.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/api/member/isProtocolSigned.json': undefined},
    })
  },

  /**
   * 接口名：用户准入
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6692&itf=68649
   */
  'POST/api/member/joinBusinessPlatform.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'POST/api/member/joinBusinessPlatform.json': undefined},
    })
  },

  /**
   * 接口名：用户处罚
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6692&itf=68692
   */
  'GET/TODO': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/TODO': undefined},
    })
  },

  /**
   * 接口名：获取用户维度故障信息
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6692&itf=69558
   */
  'GET/api/member/findDiagnoseList.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/api/member/findDiagnoseList.json': undefined},
    })
  },

  /**
   * 接口名：信息流运营编辑接口
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6692&itf=70153
   */
  'GET/https://mo.m.taobao.com/feeds/': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/https://mo.m.taobao.com/feeds/': undefined},
    })
  },

  /**
   * 接口名：一站式运营编辑接口
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6692&itf=71471
   */
  'GET/https://mo.m.taobao.com/one-stop/': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/https://mo.m.taobao.com/one-stop/': undefined},
    })
  },

  /**
   * 接口名：获取邀请链接
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6692&itf=73310
   */
  'GET/api/member/invitation/url.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/api/member/invitation/url.json': undefined},
    })
  },

  /**
   * 接口名：获取用户使用进度
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6692&itf=73741
   */
  'GET/api/member/stage.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/api/member/stage.json': undefined},
    })
  },

  /**
   * 接口名：用户活动的一些信息
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6692&itf=75881
   */
  'GET/api/member/activity.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/api/member/activity.json': undefined},
    })
  },

  /**
   * 接口名：用户活动的宝贝引导信息
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6692&itf=87195
   */
  'GET/api/member/activity/itemGuide.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/api/member/activity/itemGuide.json': undefined},
    })
  },

  /**
   * 接口名：转移计划信息
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6692&itf=77790
   */
  'GET/api/member/transfer.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/api/member/transfer.json': undefined},
    })
  },

  /**
   * 接口名：新客任务
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6692&itf=79580
   */
  'GET/api/member/newGuestTask.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/api/member/newGuestTask.json': undefined},
    })
  },

  /**
   * 接口名：获取账户及自动充值提醒
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6707&itf=67316
   */
  'GET/api/account/getAcctBalanceRemindSettingAutoRecharge.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/api/account/getAcctBalanceRemindSettingAutoRecharge.json': undefined},
    })
  },

  /**
   * 接口名：查询支付宝账号是否完成代扣协议签约
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6707&itf=67323
   */
  'GET/api/account/getSignInfo.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/api/account/getSignInfo.json': undefined},
    })
  },

  /**
   * 接口名：更新账户及自动充值设置
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6707&itf=67324
   */
  'PUT/api/account/modifyAcctBalanceRemindSettingAutoRecharge.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'PUT/api/account/modifyAcctBalanceRemindSettingAutoRecharge.json': undefined},
    })
  },

  /**
   * 接口名：账户解约自动充值
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6707&itf=67330
   */
  'PUT/api/account/unsignAutoRecharge.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'PUT/api/account/unsignAutoRecharge.json': undefined},
    })
  },

  /**
   * 接口名：查询账户流水
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6707&itf=67374
   */
  'GET/api/account/findItemList.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/api/account/findItemList.json': undefined},
    })
  },

  /**
   * 接口名：下载账户流水
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6707&itf=67375
   */
  'GET/api/account/exportItemList.action': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/api/account/exportItemList.action': undefined},
    })
  },

  /**
   * 接口名：优惠券
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6707&itf=67407
   */
  'GET/和钻展保持一致': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/和钻展保持一致': undefined},
    })
  },

  /**
   * 接口名：获取提醒设置（账户余额和计划预算）
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6707&itf=68995
   */
  'GET/api/account/findMessageRemindList.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/api/account/findMessageRemindList.json': undefined},
    })
  },

  /**
   * 接口名：覆盖更新提醒设置
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6707&itf=69000
   */
  'POST/api/account/modifyAllMessageRemindList.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'POST/api/account/modifyAllMessageRemindList.json': undefined},
    })
  },

  /**
   * 接口名：获取退款列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6707&itf=72837
   */
  'GET/api/account/getRefundList.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/api/account/getRefundList.json': undefined},
    })
  },

  /**
   * 接口名：创建退款
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6707&itf=72838
   */
  'POST/api/account/createRefund.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'POST/api/account/createRefund.json': undefined},
    })
  },

  /**
   * 接口名：退款校验
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6707&itf=72839
   */
  'GET/api/account/checkRefund.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/api/account/checkRefund.json': undefined},
    })
  },

  /**
   * 接口名：【国际版】是否签署cae代扣协议
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6707&itf=72855
   */
  'GET/api/account/isSignGlobalAlipay.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/api/account/isSignGlobalAlipay.json': undefined},
    })
  },

  /**
   * 接口名：【国际版】充值
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6707&itf=72857
   */
  'GET/api/account/charge.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/api/account/charge.json': undefined},
    })
  },

  /**
   * 接口名：获取操作日志信息
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6707&itf=74120
   */
  'GET/api/log/findOperationLog.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/api/log/findOperationLog.json': undefined},
    })
  },

  /**
   * 接口名：通过单元名称查询单元信息
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6707&itf=74341
   */
  'GET/api/log/findAdgroupByName.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/api/log/findAdgroupByName.json': undefined},
    })
  },

  /**
   * 接口名：通过计划名称查询计划信息
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6707&itf=74342
   */
  'GET/api/log/findCampaignByName.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/api/log/findCampaignByName.json': undefined},
    })
  },

  /**
   * 接口名：获取累计消耗
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6707&itf=76780
   */
  'GET/api/account/findAccumulateDeduct.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/api/account/findAccumulateDeduct.json': undefined},
    })
  },

  /**
   * 接口名：发送短信验证码
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6708&itf=67327
   */
  'GET/api/message/sendMobileCode.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/api/message/sendMobileCode.json': undefined},
    })
  },

  /**
   * 接口名：验证短信验证码
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6708&itf=67328
   */
  'POST/api/message/verifyMobilePhoneCode.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'POST/api/message/verifyMobilePhoneCode.json': undefined},
    })
  },

  /**
   * 接口名：系统码表获取
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6711&itf=67372
   */
  'GET/api/common/findCodeList.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/api/common/findCodeList.json': undefined},
    })
  },

  /**
   * 接口名：获取前端CDN版本
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6711&itf=67763
   */
  'GET/api/common/getVersion.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/api/common/getVersion.json': undefined},
    })
  },

  /**
   * 接口名：获取组件元数据列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6712&itf=67393
   */
  'GET/api/component/findComponentMetaList.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/api/component/findComponentMetaList.json': undefined},
    })
  },

  /**
   * 接口名：获取用户组建模板
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6712&itf=67395
   */
  'GET/api/component/findMemberTemplateList.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/api/component/findMemberTemplateList.json': undefined},
    })
  },

  /**
   * 接口名：新增用户组件模板
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6712&itf=67396
   */
  'POST/api/component/addMemberTemplate.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'POST/api/component/addMemberTemplate.json': undefined},
    })
  },

  /**
   * 接口名：修改用户组建模板
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6712&itf=67398
   */
  'PUT/api/component/updateMemberTemplate.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'PUT/api/component/updateMemberTemplate.json': undefined},
    })
  },

  /**
   * 接口名：删除用户组建模板
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6712&itf=67399
   */
  'DELETE/api/component/deleteMemberTemplate.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'DELETE/api/component/deleteMemberTemplate.json': undefined},
    })
  },

  /**
   * 接口名：✅【新】获取菜单列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6712&itf=80888
   */
  'GET/api/component/findMenuList.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/api/component/findMenuList.json': undefined},
    })
  },

  /**
   * 接口名：✅【新】获取组件列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6712&itf=80943
   */
  'GET/api/component/findComponentList.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/api/component/findComponentList.json': undefined},
    })
  },

  /**
   * 接口名：【报表】账户分时汇总
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6752&itf=67459
   */
  'GET/api/account/report/findHourSum.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/api/account/report/findHourSum.json': undefined},
    })
  },

  /**
   * 接口名：【报表】账户分时列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6752&itf=67344
   */
  'GET/api/account/report/findHourList.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/api/account/report/findHourList.json': undefined},
    })
  },

  /**
   * 接口名：【报表】账户整体分日汇总
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6752&itf=67472
   */
  'GET/api/account/report/findDaySum.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/api/account/report/findDaySum.json': undefined},
    })
  },

  /**
   * 接口名：【报表】账户整体分日列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6752&itf=67475
   */
  'GET/api/account/report/findDayList.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/api/account/report/findDayList.json': undefined},
    })
  },

  /**
   * 接口名：【 报表】计划分页列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6752&itf=67623
   */
  'GET/api/campaign/report/findPage.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/api/campaign/report/findPage.json': undefined},
    })
  },

  /**
   * 接口名：【报表】单个计划报表： 列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6752&itf=67480
   */
  'GET/api/campaign/report/findList.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/api/campaign/report/findList.json': undefined},
    })
  },

  /**
   * 接口名：【报表】单个计划报表：汇总
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6752&itf=67481
   */
  'GET/api/campaign/report/findSum.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/api/campaign/report/findSum.json': undefined},
    })
  },

  /**
   * 接口名：【报表】单元分页列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6752&itf=67621
   */
  'GET/api/adgroup/report/findPage.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/api/adgroup/report/findPage.json': undefined},
    })
  },

  /**
   * 接口名：【报表】单个单元报表： 列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6752&itf=67486
   */
  'GET/api/adgroup/report/findList.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/api/adgroup/report/findList.json': undefined},
    })
  },

  /**
   * 接口名：【报表】单个单元报表：汇总
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6752&itf=67487
   */
  'GET/api/adgroup/report/findSum.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/api/adgroup/report/findSum.json': undefined},
    })
  },

  /**
   * 接口名：【报表】创意分页列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6752&itf=67639
   */
  'GET/api/creative/report/findPage.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/api/creative/report/findPage.json': undefined},
    })
  },

  /**
   * 接口名：【报表】单个创意报表： 列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6752&itf=69359
   */
  'GET/api/creative/report/findList.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/api/creative/report/findList.json': undefined},
    })
  },

  /**
   * 接口名：【报表】单个创意报表： 汇总
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6752&itf=69360
   */
  'GET/api/creative/report/findSum.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/api/creative/report/findSum.json': undefined},
    })
  },

  /**
   * 接口名：【报表】定向分页列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6752&itf=67637
   */
  'GET/api/crowd/report/findPage.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/api/crowd/report/findPage.json': undefined},
    })
  },

  /**
   * 接口名：【报表】单个定向报表： 列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6752&itf=69469
   */
  'GET/api/crowd/report/findList.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/api/crowd/report/findList.json': undefined},
    })
  },

  /**
   * 接口名：【报表】单个定向报表： 汇总
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6752&itf=69470
   */
  'GET/api/crowd/report/findSum.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/api/crowd/report/findSum.json': undefined},
    })
  },

  /**
   * 接口名：【报表】资源位分页列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6752&itf=67622
   */
  'GET/api/adzone/report/findPage.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/api/adzone/report/findPage.json': undefined},
    })
  },

  /**
   * 接口名：【报表】单个资源位报表： 列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6752&itf=69472
   */
  'GET/api/adzone/report/findList.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/api/adzone/report/findList.json': undefined},
    })
  },

  /**
   * 接口名：【报表】单个资源位报表： 汇总
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6752&itf=69471
   */
  'GET/api/adzone/report/findSum.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/api/adzone/report/findSum.json': undefined},
    })
  },

  /**
   * 接口名：【报表】账户概览：人群整体分日汇总
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6752&itf=79815
   */
  'GET/api/account/report/findCrowdDaySum.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/api/account/report/findCrowdDaySum.json': undefined},
    })
  },

  /**
   * 接口名：【报表】账户概览：人群整体分日列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6752&itf=79816
   */
  'GET/api/account/report/findCrowdDayList.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/api/account/report/findCrowdDayList.json': undefined},
    })
  },

  /**
   * 接口名：【报表】账户概览：宝贝分页列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6752&itf=79817
   */
  'GET/api/material/report/findItemPage.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/api/material/report/findItemPage.json': undefined},
    })
  },

  /**
   * 接口名：【报表】双十一活动报表-消费者触达
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=6752&itf=82974
   */
  'GET/api/activity/report/consumerReach.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/api/activity/report/consumerReach.json': undefined},
    })
  },

  /**
   * 接口名：【报表】账户分时列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7005&itf=69611
   */
  'GET/api/account/report/exportHourList.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/api/account/report/exportHourList.json': undefined},
    })
  },

  /**
   * 接口名：【报表】账户整体分日列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7005&itf=69612
   */
  'GET/api/account/report/exportDayList.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/api/account/report/exportDayList.json': undefined},
    })
  },

  /**
   * 接口名：【 报表】计划报表下载
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7005&itf=69614
   */
  'GET/api/campaign/report/exportCampaign.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/api/campaign/report/exportCampaign.json': undefined},
    })
  },

  /**
   * 接口名：【报表】单个计划报表： 列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7005&itf=69615
   */
  'GET/api/campaign/report/exportDayOrHourList.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/api/campaign/report/exportDayOrHourList.json': undefined},
    })
  },

  /**
   * 接口名：【报表】单个计划报表：汇总
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7005&itf=69616
   */
  'GET/api/campaign/report/exportDayOrHourSum.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/api/campaign/report/exportDayOrHourSum.json': undefined},
    })
  },

  /**
   * 接口名：【报表】单元报表下载
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7005&itf=69617
   */
  'GET/api/adgroup/report/exportAdgroup.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/api/adgroup/report/exportAdgroup.json': undefined},
    })
  },

  /**
   * 接口名：【报表】单个单元报表： 列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7005&itf=69618
   */
  'GET/api/adgroup/report/exportDayOrHourList.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/api/adgroup/report/exportDayOrHourList.json': undefined},
    })
  },

  /**
   * 接口名：【报表】单个单元报表：汇总
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7005&itf=69619
   */
  'GET/api/adgroup/report/exportDayOrHourSum.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/api/adgroup/report/exportDayOrHourSum.json': undefined},
    })
  },

  /**
   * 接口名：【报表】创意下载
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7005&itf=69620
   */
  'GET/api/creative/report/exportCreative.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/api/creative/report/exportCreative.json': undefined},
    })
  },

  /**
   * 接口名：【报表】单个创意报表： 列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7005&itf=69622
   */
  'GET/api/creative/report/exportDayOrHourList.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/api/creative/report/exportDayOrHourList.json': undefined},
    })
  },

  /**
   * 接口名：【报表】单个创意报表： 汇总
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7005&itf=69623
   */
  'GET/api/creative/report/exportDayOrHourSum.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/api/creative/report/exportDayOrHourSum.json': undefined},
    })
  },

  /**
   * 接口名：【报表】定向下载
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7005&itf=69624
   */
  'GET/api/crowd/report/exportCrowd.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/api/crowd/report/exportCrowd.json': undefined},
    })
  },

  /**
   * 接口名：【报表】单个定向报表： 列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7005&itf=69625
   */
  'GET/api/crowd/report/exportDayOrHourList.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/api/crowd/report/exportDayOrHourList.json': undefined},
    })
  },

  /**
   * 接口名：【报表】单个定向报表： 汇总
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7005&itf=69626
   */
  'GET/api/crowd/report/exportDayOrHourSum.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/api/crowd/report/exportDayOrHourSum.json': undefined},
    })
  },

  /**
   * 接口名：【报表】资源位下载
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7005&itf=69627
   */
  'GET/api/adzone/report/exportAdzone.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/api/adzone/report/exportAdzone.json': undefined},
    })
  },

  /**
   * 接口名：【报表】单个资源位报表： 列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7005&itf=69628
   */
  'GET/api/adzone/report/exportDayOrHourList.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/api/adzone/report/exportDayOrHourList.json': undefined},
    })
  },

  /**
   * 接口名：【报表】单个资源位报表： 汇总
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7005&itf=69629
   */
  'GET/api/adzone/report/exportDayOrHourSum.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/api/adzone/report/exportDayOrHourSum.json': undefined},
    })
  },

  /**
   * 接口名：【报表】账户概览：宝贝分页列表下载
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7005&itf=79824
   */
  'GET/api/material/report/exportItem.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/api/material/report/exportItem.json': undefined},
    })
  },

  /**
   * 接口名：【报表】账户概览：人群整体分日列表下载
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7005&itf=80230
   */
  'GET/api/account/report/exportCrowdDayList.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/api/account/report/exportCrowdDayList.json': undefined},
    })
  },

  /**
   * 接口名：查询站内信列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7037&itf=69919
   */
  'GET/api/message/findLetterList.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/api/message/findLetterList.json': undefined},
    })
  },

  /**
   * 接口名：查看站内信
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7037&itf=69920
   */
  'GET/api/message/getLetterDetail.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/api/message/getLetterDetail.json': undefined},
    })
  },

  /**
   * 接口名：批量已读站内信
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7037&itf=70115
   */
  'POST/api/message/batchReadLetters.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'POST/api/message/batchReadLetters.json': undefined},
    })
  },

  /**
   * 接口名：消费者汇总卡片
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7107&itf=70493
   */
  'GET/api/report/consumer/findSummary.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/api/report/consumer/findSummary.json': undefined},
    })
  },

  /**
   * 接口名：消费者流转
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7107&itf=70497
   */
  'GET/api/report/consumer/findConsumerCirculation.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/api/report/consumer/findConsumerCirculation.json': undefined},
    })
  },

  /**
   * 接口名：粉丝汇总卡片
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7167&itf=70935
   */
  'GET/api/report/fans/findSummary.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/api/report/fans/findSummary.json': undefined},
    })
  },

  /**
   * 接口名：粉丝流转
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7167&itf=70962
   */
  'GET/api/report/fans/findCirculation.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/api/report/fans/findCirculation.json': undefined},
    })
  },

  /**
   * 接口名：查询直钻迁移计划
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7473&itf=73258
   */
  'GET/api/campaign/findTransferPage.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/api/campaign/findTransferPage.json': undefined},
    })
  },

  /**
   * 接口名：迁移完成
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7473&itf=73370
   */
  'POST/api/campaign/transfer.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'POST/api/campaign/transfer.json': undefined},
    })
  },

  /**
   * 接口名：活动整体分日汇总
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7723&itf=75133
   */
  'GET/api/activity/report/findDaySum.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/api/activity/report/findDaySum.json': undefined},
    })
  },

  /**
   * 接口名：活动整体分日列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7723&itf=75150
   */
  'GET/api/activity/report/findDayList.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/api/activity/report/findDayList.json': undefined},
    })
  },

  /**
   * 接口名：活动人群整体分日汇总
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7723&itf=75151
   */
  'GET/api/activity/report/findCrowdDaySum.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/api/activity/report/findCrowdDaySum.json': undefined},
    })
  },

  /**
   * 接口名：活动人群整体分日报表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7723&itf=75152
   */
  'GET/api/activity/report/findCrowdDayList.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/api/activity/report/findCrowdDayList.json': undefined},
    })
  },

  /**
   * 接口名：活动宝贝分页列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7723&itf=75153
   */
  'GET/api/activity/report/findItemPage.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/api/activity/report/findItemPage.json': undefined},
    })
  },

  /**
   * 接口名：活动整体分日列表下载
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7723&itf=75164
   */
  'GET/api/activity/report/exportDayList.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/api/activity/report/exportDayList.json': undefined},
    })
  },

  /**
   * 接口名：活动人群整体分日报表下载
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7723&itf=75165
   */
  'GET/api/activity/report/exportCrowdDayList.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/api/activity/report/exportCrowdDayList.json': undefined},
    })
  },

  /**
   * 接口名：活动宝贝列表下载
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7723&itf=75166
   */
  'GET/api/activity/report/exportItem.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/api/activity/report/exportItem.json': undefined},
    })
  },

  /**
   * 接口名：618活动接口迁移到日常接口的map
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7723&itf=79825
   */
  'GET/map': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/map': undefined},
    })
  },

  /**
   * 接口名：结案-计划投放效果
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7789&itf=75586
   */
  'GET/api/report/case/findCampaignDaySum.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/api/report/case/findCampaignDaySum.json': undefined},
    })
  },

  /**
   * 接口名：结案-商品明细分析
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7789&itf=75587
   */
  'GET/api/report/case/findItemSumList.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/api/report/case/findItemSumList.json': undefined},
    })
  },

  /**
   * 接口名：结案-商品整体趋势
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7789&itf=75588
   */
  'GET/api/report/case/findItemTrendDayList.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/api/report/case/findItemTrendDayList.json': undefined},
    })
  },

  /**
   * 接口名：【已有接口】查询新品计划列表 /api/campaign/findList.json
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7789&itf=75590
   */
  'GET/findList.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/findList.json': undefined},
    })
  },

  /**
   * 接口名：结案-查询商品对比曲线
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7789&itf=77755
   */
  'GET/api/report/case/findFeedShopItemAllListComp.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/api/report/case/findFeedShopItemAllListComp.json': undefined},
    })
  },

  /**
   * 接口名：查询计划绑定的定向列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7935&itf=76654
   */
  'GET/api/campaign/crowd/findList.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/api/campaign/crowd/findList.json': undefined},
    })
  },

  /**
   * 接口名：修改计划绑定定向
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7935&itf=76656
   */
  'PUT/api/campaign/crowd/modify.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'PUT/api/campaign/crowd/modify.json': undefined},
    })
  },

  /**
   * 接口名：一键创建推广计划单环
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7956&itf=76782
   */
  'POST/api/solution/add.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'POST/api/solution/add.json': undefined},
    })
  },

  /**
   * 接口名：分页获取商品列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7956&itf=70821
   */
  'GET/api/material/item/findPage.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/api/material/item/findPage.json': undefined},
    })
  },

  /**
   * 接口名：是否可使用一键推广
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7956&itf=77116
   */
  'GET/api/solution/allowPromotion.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/api/solution/allowPromotion.json': undefined},
    })
  },

  /**
   * 接口名：批量一键创建
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=7956&itf=77594
   */
  'POST/api/solution/batchAdd.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'POST/api/solution/batchAdd.json': undefined},
    })
  },

  /**
   * 接口名：查询定向标签不分页
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=8120&itf=68423
   */
  'GET/api/target/findLabelList.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/api/target/findLabelList.json': undefined},
    })
  },

  /**
   * 接口名：查询类目精选的类目列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=8120&itf=78707
   */
  'GET/api/target/findSelectionCategoryList.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/api/target/findSelectionCategoryList.json': undefined},
    })
  },

  /**
   * 接口名：账户充值
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=8524&itf=67373
   */
  'GET/api/account/recharge.action': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/api/account/recharge.action': undefined},
    })
  },

  /**
   * 接口名：获取账户详情
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=8524&itf=67468
   */
  'GET/api/account/getInfo.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/api/account/getInfo.json': undefined},
    })
  },

  /**
   * 接口名：【接口优化】新建单元
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=8524&itf=78321
   */
  'POST/api/adgroup/batchAdd.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'POST/api/adgroup/batchAdd.json': undefined},
    })
  },

  /**
   * 接口名：盘量接口(待定)
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=8524&itf=80936
   */
  'POST/api/campaign/estimateContractPv.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'POST/api/campaign/estimateContractPv.json': undefined},
    })
  },

  /**
   * 接口名：锁量接口
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=8524&itf=84599
   */
  'POST/api/algotool/lockQuantity.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'POST/api/algotool/lockQuantity.json': undefined},
    })
  },

  /**
   * 接口名：【管理】查询定向列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=8828&itf=68386
   */
  'GET/api/crowd/findPage.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/api/crowd/findPage.json': undefined},
    })
  },

  /**
   * 接口名：查询预算模拟器
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=8828&itf=83281
   */
  'POST/api/algotool/getBudgetSimulator.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'POST/api/algotool/getBudgetSimulator.json': undefined},
    })
  },

  /**
   * 接口名：新建推广计划
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=8828&itf=67209
   */
  'POST/api/campaign/add.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'POST/api/campaign/add.json': undefined},
    })
  },

  /**
   * 接口名：分页获取单元列表
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=8828&itf=67275
   */
  'GET/api/adgroup/findPage.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/api/adgroup/findPage.json': undefined},
    })
  },

  /**
   * 接口名：全量修改计划信息
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=8828&itf=67338
   */
  'PUT/api/campaign/modEntire.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'PUT/api/campaign/modEntire.json': undefined},
    })
  },

  /**
   * 接口名：智能人群探索
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900&mod=8828&itf=83321
   */
  'GET/api/algotool/probeInterest.json': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: {'GET/api/algotool/probeInterest.json': undefined},
    })
  },
}

export const rapperSelector = {
  'GET/readme/campaign': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/readme/campaign']
    return connectGetResponse(responseData) as ResponseTypes['GET/readme/campaign']
  },
  'GET/api/campaign/default.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/api/campaign/default.json']
    return connectGetResponse(responseData) as ResponseTypes['GET/api/campaign/default.json']
  },
  'GET/api/campaign/get.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/api/campaign/get.json']
    return connectGetResponse(responseData) as ResponseTypes['GET/api/campaign/get.json']
  },
  'GET/api/campaign/getSettleInfo.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/api/campaign/getSettleInfo.json']
    return connectGetResponse(responseData) as ResponseTypes['GET/api/campaign/getSettleInfo.json']
  },
  'GET/api/campaign/findList.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/api/campaign/findList.json']
    return connectGetResponse(responseData) as ResponseTypes['GET/api/campaign/findList.json']
  },
  'GET/api/campaign/findPage.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/api/campaign/findPage.json']
    return connectGetResponse(responseData) as ResponseTypes['GET/api/campaign/findPage.json']
  },
  'GET/api/campaign/findDraftList.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/api/campaign/findDraftList.json']
    return connectGetResponse(responseData) as ResponseTypes['GET/api/campaign/findDraftList.json']
  },
  'DELETE/api/campaign/delete.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['DELETE/api/campaign/delete.json']
    return connectGetResponse(responseData) as ResponseTypes['DELETE/api/campaign/delete.json']
  },
  'POST/api/campaign/clone.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['POST/api/campaign/clone.json']
    return connectGetResponse(responseData) as ResponseTypes['POST/api/campaign/clone.json']
  },
  'PUT/api/campaign/updateCampaignBudgetRemindSetting.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['PUT/api/campaign/updateCampaignBudgetRemindSetting.json']
    return connectGetResponse(responseData) as ResponseTypes['PUT/api/campaign/updateCampaignBudgetRemindSetting.json']
  },
  'GET/api/campaign/getCampaignBudgetRemindSetting.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/api/campaign/getCampaignBudgetRemindSetting.json']
    return connectGetResponse(responseData) as ResponseTypes['GET/api/campaign/getCampaignBudgetRemindSetting.json']
  },
  'PUT/api/campaign/batchModify.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['PUT/api/campaign/batchModify.json']
    return connectGetResponse(responseData) as ResponseTypes['PUT/api/campaign/batchModify.json']
  },
  'PUT/api/campaign/complete.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['PUT/api/campaign/complete.json']
    return connectGetResponse(responseData) as ResponseTypes['PUT/api/campaign/complete.json']
  },
  'PUT/api/campaign/setTop.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['PUT/api/campaign/setTop.json']
    return connectGetResponse(responseData) as ResponseTypes['PUT/api/campaign/setTop.json']
  },
  'GET/api/campaign/validCount.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/api/campaign/validCount.json']
    return connectGetResponse(responseData) as ResponseTypes['GET/api/campaign/validCount.json']
  },
  'GET/api/campaign/findDayBudgetSum.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/api/campaign/findDayBudgetSum.json']
    return connectGetResponse(responseData) as ResponseTypes['GET/api/campaign/findDayBudgetSum.json']
  },
  'GET/api/campaign/displayConfig.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/api/campaign/displayConfig.json']
    return connectGetResponse(responseData) as ResponseTypes['GET/api/campaign/displayConfig.json']
  },
  'GET/api/campaign/modifyConfig.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/api/campaign/modifyConfig.json']
    return connectGetResponse(responseData) as ResponseTypes['GET/api/campaign/modifyConfig.json']
  },
  'PUT/api/campaign/activity/transfer.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['PUT/api/campaign/activity/transfer.json']
    return connectGetResponse(responseData) as ResponseTypes['PUT/api/campaign/activity/transfer.json']
  },
  'PUT/api/campaign/transferScene.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['PUT/api/campaign/transferScene.json']
    return connectGetResponse(responseData) as ResponseTypes['PUT/api/campaign/transferScene.json']
  },
  'PUT/api/campaign/activity/transferPhase.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['PUT/api/campaign/activity/transferPhase.json']
    return connectGetResponse(responseData) as ResponseTypes['PUT/api/campaign/activity/transferPhase.json']
  },
  'GET/api/target/getRemarketingCoverage.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/api/target/getRemarketingCoverage.json']
    return connectGetResponse(responseData) as ResponseTypes['GET/api/target/getRemarketingCoverage.json']
  },
  'POST/api/adgroup/add.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['POST/api/adgroup/add.json']
    return connectGetResponse(responseData) as ResponseTypes['POST/api/adgroup/add.json']
  },
  'GET/api/adgroup/default.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/api/adgroup/default.json']
    return connectGetResponse(responseData) as ResponseTypes['GET/api/adgroup/default.json']
  },
  'GET/api/adgroup/get.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/api/adgroup/get.json']
    return connectGetResponse(responseData) as ResponseTypes['GET/api/adgroup/get.json']
  },
  'GET/api/adgroup/findList.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/api/adgroup/findList.json']
    return connectGetResponse(responseData) as ResponseTypes['GET/api/adgroup/findList.json']
  },
  'DELETE/api/adgroup/batchDelete.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['DELETE/api/adgroup/batchDelete.json']
    return connectGetResponse(responseData) as ResponseTypes['DELETE/api/adgroup/batchDelete.json']
  },
  'POST/api/adgroup/clone.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['POST/api/adgroup/clone.json']
    return connectGetResponse(responseData) as ResponseTypes['POST/api/adgroup/clone.json']
  },
  'PUT/api/adgroup/batchModEntire.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['PUT/api/adgroup/batchModEntire.json']
    return connectGetResponse(responseData) as ResponseTypes['PUT/api/adgroup/batchModEntire.json']
  },
  'PUT/api/adgroup/batchModifyPart.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['PUT/api/adgroup/batchModifyPart.json']
    return connectGetResponse(responseData) as ResponseTypes['PUT/api/adgroup/batchModifyPart.json']
  },
  'GET/api/adgroup/qualityScore/findList.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/api/adgroup/qualityScore/findList.json']
    return connectGetResponse(responseData) as ResponseTypes['GET/api/adgroup/qualityScore/findList.json']
  },
  'GET/api/adgroup/qualityScore/findHisList.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/api/adgroup/qualityScore/findHisList.json']
    return connectGetResponse(responseData) as ResponseTypes['GET/api/adgroup/qualityScore/findHisList.json']
  },
  'PUT/api/adgroup/batchModify.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['PUT/api/adgroup/batchModify.json']
    return connectGetResponse(responseData) as ResponseTypes['PUT/api/adgroup/batchModify.json']
  },
  'GET/api/adgroup/qualityScore/findQueryCondition.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/api/adgroup/qualityScore/findQueryCondition.json']
    return connectGetResponse(responseData) as ResponseTypes['GET/api/adgroup/qualityScore/findQueryCondition.json']
  },
  'GET/api/adgroup/findCampaignAndAdgroupList.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/api/adgroup/findCampaignAndAdgroupList.json']
    return connectGetResponse(responseData) as ResponseTypes['GET/api/adgroup/findCampaignAndAdgroupList.json']
  },
  'PUT/api/adgroup/useSystemCreative.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['PUT/api/adgroup/useSystemCreative.json']
    return connectGetResponse(responseData) as ResponseTypes['PUT/api/adgroup/useSystemCreative.json']
  },
  'PUT/api/adgroup/batchModifyEntire.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['PUT/api/adgroup/batchModifyEntire.json']
    return connectGetResponse(responseData) as ResponseTypes['PUT/api/adgroup/batchModifyEntire.json']
  },
  'PUT/api/adgroup/batchModifyPrice.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['PUT/api/adgroup/batchModifyPrice.json']
    return connectGetResponse(responseData) as ResponseTypes['PUT/api/adgroup/batchModifyPrice.json']
  },
  'POST/api/creative/batchAddAndBind.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['POST/api/creative/batchAddAndBind.json']
    return connectGetResponse(responseData) as ResponseTypes['POST/api/creative/batchAddAndBind.json']
  },
  'PUT/api/creative/batchUnbind.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['PUT/api/creative/batchUnbind.json']
    return connectGetResponse(responseData) as ResponseTypes['PUT/api/creative/batchUnbind.json']
  },
  'GET/api/creative/recommend.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/api/creative/recommend.json']
    return connectGetResponse(responseData) as ResponseTypes['GET/api/creative/recommend.json']
  },
  'GET/api/creative/findPage.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/api/creative/findPage.json']
    return connectGetResponse(responseData) as ResponseTypes['GET/api/creative/findPage.json']
  },
  'GET/api/creative/findPunishRecordList.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/api/creative/findPunishRecordList.json']
    return connectGetResponse(responseData) as ResponseTypes['GET/api/creative/findPunishRecordList.json']
  },
  'GET/api/creative/findQueryCondition.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/api/creative/findQueryCondition.json']
    return connectGetResponse(responseData) as ResponseTypes['GET/api/creative/findQueryCondition.json']
  },
  'GET/api/creativeCenter/gotoCreation.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/api/creativeCenter/gotoCreation.json']
    return connectGetResponse(responseData) as ResponseTypes['GET/api/creativeCenter/gotoCreation.json']
  },
  'GET/api/creative/template/findPackageList.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/api/creative/template/findPackageList.json']
    return connectGetResponse(responseData) as ResponseTypes['GET/api/creative/template/findPackageList.json']
  },
  'GET/api/creativeCenter/gotoTemplateNew.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/api/creativeCenter/gotoTemplateNew.json']
    return connectGetResponse(responseData) as ResponseTypes['GET/api/creativeCenter/gotoTemplateNew.json']
  },
  'GET/api/creativeCenter/getMaterial.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/api/creativeCenter/getMaterial.json']
    return connectGetResponse(responseData) as ResponseTypes['GET/api/creativeCenter/getMaterial.json']
  },
  'DELETE/api/creative/delete.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['DELETE/api/creative/delete.json']
    return connectGetResponse(responseData) as ResponseTypes['DELETE/api/creative/delete.json']
  },
  'PUT/api/creative/activity/batchAddTag.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['PUT/api/creative/activity/batchAddTag.json']
    return connectGetResponse(responseData) as ResponseTypes['PUT/api/creative/activity/batchAddTag.json']
  },
  'POST/api/creative/preview.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['POST/api/creative/preview.json']
    return connectGetResponse(responseData) as ResponseTypes['POST/api/creative/preview.json']
  },
  'GET/api/adzone/findList.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/api/adzone/findList.json']
    return connectGetResponse(responseData) as ResponseTypes['GET/api/adzone/findList.json']
  },
  'GET/api/adzone/checkList.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/api/adzone/checkList.json']
    return connectGetResponse(responseData) as ResponseTypes['GET/api/adzone/checkList.json']
  },
  'PUT/api/adzone/unbindList.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['PUT/api/adzone/unbindList.json']
    return connectGetResponse(responseData) as ResponseTypes['PUT/api/adzone/unbindList.json']
  },
  'PUT/api/adzone/bindList.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['PUT/api/adzone/bindList.json']
    return connectGetResponse(responseData) as ResponseTypes['PUT/api/adzone/bindList.json']
  },
  'GET/api/adzone/findPage.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/api/adzone/findPage.json']
    return connectGetResponse(responseData) as ResponseTypes['GET/api/adzone/findPage.json']
  },
  'PUT/api/adzone/batchModify.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['PUT/api/adzone/batchModify.json']
    return connectGetResponse(responseData) as ResponseTypes['PUT/api/adzone/batchModify.json']
  },
  'GET/api/material/findPage.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/api/material/findPage.json']
    return connectGetResponse(responseData) as ResponseTypes['GET/api/material/findPage.json']
  },
  'GET/api/material/recommend.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/api/material/recommend.json']
    return connectGetResponse(responseData) as ResponseTypes['GET/api/material/recommend.json']
  },
  'GET/api/material/findQueryCondition.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/api/material/findQueryCondition.json']
    return connectGetResponse(responseData) as ResponseTypes['GET/api/material/findQueryCondition.json']
  },
  'GET/api/material/item/findQueryCondition.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/api/material/item/findQueryCondition.json']
    return connectGetResponse(responseData) as ResponseTypes['GET/api/material/item/findQueryCondition.json']
  },
  'GET/api/coupon/findQueryCondition.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/api/coupon/findQueryCondition.json']
    return connectGetResponse(responseData) as ResponseTypes['GET/api/coupon/findQueryCondition.json']
  },
  'GET/api/material/findPunishRecordList.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/api/material/findPunishRecordList.json']
    return connectGetResponse(responseData) as ResponseTypes['GET/api/material/findPunishRecordList.json']
  },
  'GET/api/material/accessAllowed.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/api/material/accessAllowed.json']
    return connectGetResponse(responseData) as ResponseTypes['GET/api/material/accessAllowed.json']
  },
  'GET/api/material/item/accessAllowed.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/api/material/item/accessAllowed.json']
    return connectGetResponse(responseData) as ResponseTypes['GET/api/material/item/accessAllowed.json']
  },
  'GET/api/coupon/findList.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/api/coupon/findList.json']
    return connectGetResponse(responseData) as ResponseTypes['GET/api/coupon/findList.json']
  },
  'GET/api/coupon/findPage.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/api/coupon/findPage.json']
    return connectGetResponse(responseData) as ResponseTypes['GET/api/coupon/findPage.json']
  },
  'GET/api/coupon/recommend.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/api/coupon/recommend.json']
    return connectGetResponse(responseData) as ResponseTypes['GET/api/coupon/recommend.json']
  },
  'GET/api/material/batchAccessAllowed.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/api/material/batchAccessAllowed.json']
    return connectGetResponse(responseData) as ResponseTypes['GET/api/material/batchAccessAllowed.json']
  },
  'PUT/api/crowd/modifyByType.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['PUT/api/crowd/modifyByType.json']
    return connectGetResponse(responseData) as ResponseTypes['PUT/api/crowd/modifyByType.json']
  },
  'DELETE/api/crowd/delete.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['DELETE/api/crowd/delete.json']
    return connectGetResponse(responseData) as ResponseTypes['DELETE/api/crowd/delete.json']
  },
  'GET/api/crowd/findList.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/api/crowd/findList.json']
    return connectGetResponse(responseData) as ResponseTypes['GET/api/crowd/findList.json']
  },
  'GET/api/target/findSuggest.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/api/target/findSuggest.json']
    return connectGetResponse(responseData) as ResponseTypes['GET/api/target/findSuggest.json']
  },
  'POST/api/crowd/getSuggestPrice.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['POST/api/crowd/getSuggestPrice.json']
    return connectGetResponse(responseData) as ResponseTypes['POST/api/crowd/getSuggestPrice.json']
  },
  'POST/api/algotool/getPredictedPvUv.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['POST/api/algotool/getPredictedPvUv.json']
    return connectGetResponse(responseData) as ResponseTypes['POST/api/algotool/getPredictedPvUv.json']
  },
  'GET/api/target/findList.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/api/target/findList.json']
    return connectGetResponse(responseData) as ResponseTypes['GET/api/target/findList.json']
  },
  'GET/api/target/findCategoryList.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/api/target/findCategoryList.json']
    return connectGetResponse(responseData) as ResponseTypes['GET/api/target/findCategoryList.json']
  },
  'GET/api/target/findLabelPage.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/api/target/findLabelPage.json']
    return connectGetResponse(responseData) as ResponseTypes['GET/api/target/findLabelPage.json']
  },
  'GET/api/target/findTargetTypeCondition.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/api/target/findTargetTypeCondition.json']
    return connectGetResponse(responseData) as ResponseTypes['GET/api/target/findTargetTypeCondition.json']
  },
  'GET/api/target/getKeywordShopUv.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/api/target/getKeywordShopUv.json']
    return connectGetResponse(responseData) as ResponseTypes['GET/api/target/getKeywordShopUv.json']
  },
  'GET/api/target/findShopTargetQueryCondition.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/api/target/findShopTargetQueryCondition.json']
    return connectGetResponse(responseData) as ResponseTypes['GET/api/target/findShopTargetQueryCondition.json']
  },
  'GET/api/algotool/findManualBidSuggestPrice.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/api/algotool/findManualBidSuggestPrice.json']
    return connectGetResponse(responseData) as ResponseTypes['GET/api/algotool/findManualBidSuggestPrice.json']
  },
  'POST/api/crowd/batchModify.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['POST/api/crowd/batchModify.json']
    return connectGetResponse(responseData) as ResponseTypes['POST/api/crowd/batchModify.json']
  },
  'GET/api/crowd/findSimulatorPointList.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/api/crowd/findSimulatorPointList.json']
    return connectGetResponse(responseData) as ResponseTypes['GET/api/crowd/findSimulatorPointList.json']
  },
  'POST/api/adzone/getSuggestDiscount.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['POST/api/adzone/getSuggestDiscount.json']
    return connectGetResponse(responseData) as ResponseTypes['POST/api/adzone/getSuggestDiscount.json']
  },
  'POST/api/target/findSonkeywordList.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['POST/api/target/findSonkeywordList.json']
    return connectGetResponse(responseData) as ResponseTypes['POST/api/target/findSonkeywordList.json']
  },
  'GET/api/target/findRecommendList.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/api/target/findRecommendList.json']
    return connectGetResponse(responseData) as ResponseTypes['GET/api/target/findRecommendList.json']
  },
  'GET/api/target/findRecommendPage.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/api/target/findRecommendPage.json']
    return connectGetResponse(responseData) as ResponseTypes['GET/api/target/findRecommendPage.json']
  },
  'PUT/api/target/addTargetLabel.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['PUT/api/target/addTargetLabel.json']
    return connectGetResponse(responseData) as ResponseTypes['PUT/api/target/addTargetLabel.json']
  },
  'POST/api/member/updateConfig.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['POST/api/member/updateConfig.json']
    return connectGetResponse(responseData) as ResponseTypes['POST/api/member/updateConfig.json']
  },
  'GET/api/member/logout.action': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/api/member/logout.action']
    return connectGetResponse(responseData) as ResponseTypes['GET/api/member/logout.action']
  },
  'GET/api/member/adminLogin.action': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/api/member/adminLogin.action']
    return connectGetResponse(responseData) as ResponseTypes['GET/api/member/adminLogin.action']
  },
  'POST/api/member/signProtocol.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['POST/api/member/signProtocol.json']
    return connectGetResponse(responseData) as ResponseTypes['POST/api/member/signProtocol.json']
  },
  'GET/api/member/getInfo.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/api/member/getInfo.json']
    return connectGetResponse(responseData) as ResponseTypes['GET/api/member/getInfo.json']
  },
  'POST/api/member/addContacts.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['POST/api/member/addContacts.json']
    return connectGetResponse(responseData) as ResponseTypes['POST/api/member/addContacts.json']
  },
  'GET/api/member/getQualificationBrandAccess.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/api/member/getQualificationBrandAccess.json']
    return connectGetResponse(responseData) as ResponseTypes['GET/api/member/getQualificationBrandAccess.json']
  },
  'GET/api/member/checkContactsName.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/api/member/checkContactsName.json']
    return connectGetResponse(responseData) as ResponseTypes['GET/api/member/checkContactsName.json']
  },
  'GET/api/member/findContactsList.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/api/member/findContactsList.json']
    return connectGetResponse(responseData) as ResponseTypes['GET/api/member/findContactsList.json']
  },
  'GET/api/member/getPunishStatus.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/api/member/getPunishStatus.json']
    return connectGetResponse(responseData) as ResponseTypes['GET/api/member/getPunishStatus.json']
  },
  'GET/api/member/findPunishRecordList.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/api/member/findPunishRecordList.json']
    return connectGetResponse(responseData) as ResponseTypes['GET/api/member/findPunishRecordList.json']
  },
  'GET/api/member/findQualificationPunishRecordList.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/api/member/findQualificationPunishRecordList.json']
    return connectGetResponse(responseData) as ResponseTypes['GET/api/member/findQualificationPunishRecordList.json']
  },
  'GET/api/member/isProtocolSigned.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/api/member/isProtocolSigned.json']
    return connectGetResponse(responseData) as ResponseTypes['GET/api/member/isProtocolSigned.json']
  },
  'POST/api/member/joinBusinessPlatform.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['POST/api/member/joinBusinessPlatform.json']
    return connectGetResponse(responseData) as ResponseTypes['POST/api/member/joinBusinessPlatform.json']
  },
  'GET/TODO': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/TODO']
    return connectGetResponse(responseData) as ResponseTypes['GET/TODO']
  },
  'GET/api/member/findDiagnoseList.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/api/member/findDiagnoseList.json']
    return connectGetResponse(responseData) as ResponseTypes['GET/api/member/findDiagnoseList.json']
  },
  'GET/https://mo.m.taobao.com/feeds/': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/https://mo.m.taobao.com/feeds/']
    return connectGetResponse(responseData) as ResponseTypes['GET/https://mo.m.taobao.com/feeds/']
  },
  'GET/https://mo.m.taobao.com/one-stop/': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/https://mo.m.taobao.com/one-stop/']
    return connectGetResponse(responseData) as ResponseTypes['GET/https://mo.m.taobao.com/one-stop/']
  },
  'GET/api/member/invitation/url.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/api/member/invitation/url.json']
    return connectGetResponse(responseData) as ResponseTypes['GET/api/member/invitation/url.json']
  },
  'GET/api/member/stage.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/api/member/stage.json']
    return connectGetResponse(responseData) as ResponseTypes['GET/api/member/stage.json']
  },
  'GET/api/member/activity.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/api/member/activity.json']
    return connectGetResponse(responseData) as ResponseTypes['GET/api/member/activity.json']
  },
  'GET/api/member/activity/itemGuide.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/api/member/activity/itemGuide.json']
    return connectGetResponse(responseData) as ResponseTypes['GET/api/member/activity/itemGuide.json']
  },
  'GET/api/member/transfer.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/api/member/transfer.json']
    return connectGetResponse(responseData) as ResponseTypes['GET/api/member/transfer.json']
  },
  'GET/api/member/newGuestTask.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/api/member/newGuestTask.json']
    return connectGetResponse(responseData) as ResponseTypes['GET/api/member/newGuestTask.json']
  },
  'GET/api/account/getAcctBalanceRemindSettingAutoRecharge.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/api/account/getAcctBalanceRemindSettingAutoRecharge.json']
    return connectGetResponse(
      responseData
    ) as ResponseTypes['GET/api/account/getAcctBalanceRemindSettingAutoRecharge.json']
  },
  'GET/api/account/getSignInfo.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/api/account/getSignInfo.json']
    return connectGetResponse(responseData) as ResponseTypes['GET/api/account/getSignInfo.json']
  },
  'PUT/api/account/modifyAcctBalanceRemindSettingAutoRecharge.json': (state: State) => {
    const responseData =
      state['$$rapperResponseData']['PUT/api/account/modifyAcctBalanceRemindSettingAutoRecharge.json']
    return connectGetResponse(
      responseData
    ) as ResponseTypes['PUT/api/account/modifyAcctBalanceRemindSettingAutoRecharge.json']
  },
  'PUT/api/account/unsignAutoRecharge.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['PUT/api/account/unsignAutoRecharge.json']
    return connectGetResponse(responseData) as ResponseTypes['PUT/api/account/unsignAutoRecharge.json']
  },
  'GET/api/account/findItemList.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/api/account/findItemList.json']
    return connectGetResponse(responseData) as ResponseTypes['GET/api/account/findItemList.json']
  },
  'GET/api/account/exportItemList.action': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/api/account/exportItemList.action']
    return connectGetResponse(responseData) as ResponseTypes['GET/api/account/exportItemList.action']
  },
  'GET/和钻展保持一致': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/和钻展保持一致']
    return connectGetResponse(responseData) as ResponseTypes['GET/和钻展保持一致']
  },
  'GET/api/account/findMessageRemindList.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/api/account/findMessageRemindList.json']
    return connectGetResponse(responseData) as ResponseTypes['GET/api/account/findMessageRemindList.json']
  },
  'POST/api/account/modifyAllMessageRemindList.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['POST/api/account/modifyAllMessageRemindList.json']
    return connectGetResponse(responseData) as ResponseTypes['POST/api/account/modifyAllMessageRemindList.json']
  },
  'GET/api/account/getRefundList.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/api/account/getRefundList.json']
    return connectGetResponse(responseData) as ResponseTypes['GET/api/account/getRefundList.json']
  },
  'POST/api/account/createRefund.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['POST/api/account/createRefund.json']
    return connectGetResponse(responseData) as ResponseTypes['POST/api/account/createRefund.json']
  },
  'GET/api/account/checkRefund.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/api/account/checkRefund.json']
    return connectGetResponse(responseData) as ResponseTypes['GET/api/account/checkRefund.json']
  },
  'GET/api/account/isSignGlobalAlipay.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/api/account/isSignGlobalAlipay.json']
    return connectGetResponse(responseData) as ResponseTypes['GET/api/account/isSignGlobalAlipay.json']
  },
  'GET/api/account/charge.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/api/account/charge.json']
    return connectGetResponse(responseData) as ResponseTypes['GET/api/account/charge.json']
  },
  'GET/api/log/findOperationLog.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/api/log/findOperationLog.json']
    return connectGetResponse(responseData) as ResponseTypes['GET/api/log/findOperationLog.json']
  },
  'GET/api/log/findAdgroupByName.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/api/log/findAdgroupByName.json']
    return connectGetResponse(responseData) as ResponseTypes['GET/api/log/findAdgroupByName.json']
  },
  'GET/api/log/findCampaignByName.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/api/log/findCampaignByName.json']
    return connectGetResponse(responseData) as ResponseTypes['GET/api/log/findCampaignByName.json']
  },
  'GET/api/account/findAccumulateDeduct.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/api/account/findAccumulateDeduct.json']
    return connectGetResponse(responseData) as ResponseTypes['GET/api/account/findAccumulateDeduct.json']
  },
  'GET/api/message/sendMobileCode.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/api/message/sendMobileCode.json']
    return connectGetResponse(responseData) as ResponseTypes['GET/api/message/sendMobileCode.json']
  },
  'POST/api/message/verifyMobilePhoneCode.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['POST/api/message/verifyMobilePhoneCode.json']
    return connectGetResponse(responseData) as ResponseTypes['POST/api/message/verifyMobilePhoneCode.json']
  },
  'GET/api/common/findCodeList.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/api/common/findCodeList.json']
    return connectGetResponse(responseData) as ResponseTypes['GET/api/common/findCodeList.json']
  },
  'GET/api/common/getVersion.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/api/common/getVersion.json']
    return connectGetResponse(responseData) as ResponseTypes['GET/api/common/getVersion.json']
  },
  'GET/api/component/findComponentMetaList.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/api/component/findComponentMetaList.json']
    return connectGetResponse(responseData) as ResponseTypes['GET/api/component/findComponentMetaList.json']
  },
  'GET/api/component/findMemberTemplateList.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/api/component/findMemberTemplateList.json']
    return connectGetResponse(responseData) as ResponseTypes['GET/api/component/findMemberTemplateList.json']
  },
  'POST/api/component/addMemberTemplate.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['POST/api/component/addMemberTemplate.json']
    return connectGetResponse(responseData) as ResponseTypes['POST/api/component/addMemberTemplate.json']
  },
  'PUT/api/component/updateMemberTemplate.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['PUT/api/component/updateMemberTemplate.json']
    return connectGetResponse(responseData) as ResponseTypes['PUT/api/component/updateMemberTemplate.json']
  },
  'DELETE/api/component/deleteMemberTemplate.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['DELETE/api/component/deleteMemberTemplate.json']
    return connectGetResponse(responseData) as ResponseTypes['DELETE/api/component/deleteMemberTemplate.json']
  },
  'GET/api/component/findMenuList.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/api/component/findMenuList.json']
    return connectGetResponse(responseData) as ResponseTypes['GET/api/component/findMenuList.json']
  },
  'GET/api/component/findComponentList.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/api/component/findComponentList.json']
    return connectGetResponse(responseData) as ResponseTypes['GET/api/component/findComponentList.json']
  },
  'GET/api/account/report/findHourSum.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/api/account/report/findHourSum.json']
    return connectGetResponse(responseData) as ResponseTypes['GET/api/account/report/findHourSum.json']
  },
  'GET/api/account/report/findHourList.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/api/account/report/findHourList.json']
    return connectGetResponse(responseData) as ResponseTypes['GET/api/account/report/findHourList.json']
  },
  'GET/api/account/report/findDaySum.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/api/account/report/findDaySum.json']
    return connectGetResponse(responseData) as ResponseTypes['GET/api/account/report/findDaySum.json']
  },
  'GET/api/account/report/findDayList.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/api/account/report/findDayList.json']
    return connectGetResponse(responseData) as ResponseTypes['GET/api/account/report/findDayList.json']
  },
  'GET/api/campaign/report/findPage.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/api/campaign/report/findPage.json']
    return connectGetResponse(responseData) as ResponseTypes['GET/api/campaign/report/findPage.json']
  },
  'GET/api/campaign/report/findList.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/api/campaign/report/findList.json']
    return connectGetResponse(responseData) as ResponseTypes['GET/api/campaign/report/findList.json']
  },
  'GET/api/campaign/report/findSum.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/api/campaign/report/findSum.json']
    return connectGetResponse(responseData) as ResponseTypes['GET/api/campaign/report/findSum.json']
  },
  'GET/api/adgroup/report/findPage.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/api/adgroup/report/findPage.json']
    return connectGetResponse(responseData) as ResponseTypes['GET/api/adgroup/report/findPage.json']
  },
  'GET/api/adgroup/report/findList.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/api/adgroup/report/findList.json']
    return connectGetResponse(responseData) as ResponseTypes['GET/api/adgroup/report/findList.json']
  },
  'GET/api/adgroup/report/findSum.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/api/adgroup/report/findSum.json']
    return connectGetResponse(responseData) as ResponseTypes['GET/api/adgroup/report/findSum.json']
  },
  'GET/api/creative/report/findPage.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/api/creative/report/findPage.json']
    return connectGetResponse(responseData) as ResponseTypes['GET/api/creative/report/findPage.json']
  },
  'GET/api/creative/report/findList.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/api/creative/report/findList.json']
    return connectGetResponse(responseData) as ResponseTypes['GET/api/creative/report/findList.json']
  },
  'GET/api/creative/report/findSum.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/api/creative/report/findSum.json']
    return connectGetResponse(responseData) as ResponseTypes['GET/api/creative/report/findSum.json']
  },
  'GET/api/crowd/report/findPage.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/api/crowd/report/findPage.json']
    return connectGetResponse(responseData) as ResponseTypes['GET/api/crowd/report/findPage.json']
  },
  'GET/api/crowd/report/findList.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/api/crowd/report/findList.json']
    return connectGetResponse(responseData) as ResponseTypes['GET/api/crowd/report/findList.json']
  },
  'GET/api/crowd/report/findSum.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/api/crowd/report/findSum.json']
    return connectGetResponse(responseData) as ResponseTypes['GET/api/crowd/report/findSum.json']
  },
  'GET/api/adzone/report/findPage.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/api/adzone/report/findPage.json']
    return connectGetResponse(responseData) as ResponseTypes['GET/api/adzone/report/findPage.json']
  },
  'GET/api/adzone/report/findList.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/api/adzone/report/findList.json']
    return connectGetResponse(responseData) as ResponseTypes['GET/api/adzone/report/findList.json']
  },
  'GET/api/adzone/report/findSum.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/api/adzone/report/findSum.json']
    return connectGetResponse(responseData) as ResponseTypes['GET/api/adzone/report/findSum.json']
  },
  'GET/api/account/report/findCrowdDaySum.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/api/account/report/findCrowdDaySum.json']
    return connectGetResponse(responseData) as ResponseTypes['GET/api/account/report/findCrowdDaySum.json']
  },
  'GET/api/account/report/findCrowdDayList.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/api/account/report/findCrowdDayList.json']
    return connectGetResponse(responseData) as ResponseTypes['GET/api/account/report/findCrowdDayList.json']
  },
  'GET/api/material/report/findItemPage.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/api/material/report/findItemPage.json']
    return connectGetResponse(responseData) as ResponseTypes['GET/api/material/report/findItemPage.json']
  },
  'GET/api/activity/report/consumerReach.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/api/activity/report/consumerReach.json']
    return connectGetResponse(responseData) as ResponseTypes['GET/api/activity/report/consumerReach.json']
  },
  'GET/api/account/report/exportHourList.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/api/account/report/exportHourList.json']
    return connectGetResponse(responseData) as ResponseTypes['GET/api/account/report/exportHourList.json']
  },
  'GET/api/account/report/exportDayList.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/api/account/report/exportDayList.json']
    return connectGetResponse(responseData) as ResponseTypes['GET/api/account/report/exportDayList.json']
  },
  'GET/api/campaign/report/exportCampaign.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/api/campaign/report/exportCampaign.json']
    return connectGetResponse(responseData) as ResponseTypes['GET/api/campaign/report/exportCampaign.json']
  },
  'GET/api/campaign/report/exportDayOrHourList.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/api/campaign/report/exportDayOrHourList.json']
    return connectGetResponse(responseData) as ResponseTypes['GET/api/campaign/report/exportDayOrHourList.json']
  },
  'GET/api/campaign/report/exportDayOrHourSum.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/api/campaign/report/exportDayOrHourSum.json']
    return connectGetResponse(responseData) as ResponseTypes['GET/api/campaign/report/exportDayOrHourSum.json']
  },
  'GET/api/adgroup/report/exportAdgroup.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/api/adgroup/report/exportAdgroup.json']
    return connectGetResponse(responseData) as ResponseTypes['GET/api/adgroup/report/exportAdgroup.json']
  },
  'GET/api/adgroup/report/exportDayOrHourList.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/api/adgroup/report/exportDayOrHourList.json']
    return connectGetResponse(responseData) as ResponseTypes['GET/api/adgroup/report/exportDayOrHourList.json']
  },
  'GET/api/adgroup/report/exportDayOrHourSum.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/api/adgroup/report/exportDayOrHourSum.json']
    return connectGetResponse(responseData) as ResponseTypes['GET/api/adgroup/report/exportDayOrHourSum.json']
  },
  'GET/api/creative/report/exportCreative.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/api/creative/report/exportCreative.json']
    return connectGetResponse(responseData) as ResponseTypes['GET/api/creative/report/exportCreative.json']
  },
  'GET/api/creative/report/exportDayOrHourList.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/api/creative/report/exportDayOrHourList.json']
    return connectGetResponse(responseData) as ResponseTypes['GET/api/creative/report/exportDayOrHourList.json']
  },
  'GET/api/creative/report/exportDayOrHourSum.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/api/creative/report/exportDayOrHourSum.json']
    return connectGetResponse(responseData) as ResponseTypes['GET/api/creative/report/exportDayOrHourSum.json']
  },
  'GET/api/crowd/report/exportCrowd.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/api/crowd/report/exportCrowd.json']
    return connectGetResponse(responseData) as ResponseTypes['GET/api/crowd/report/exportCrowd.json']
  },
  'GET/api/crowd/report/exportDayOrHourList.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/api/crowd/report/exportDayOrHourList.json']
    return connectGetResponse(responseData) as ResponseTypes['GET/api/crowd/report/exportDayOrHourList.json']
  },
  'GET/api/crowd/report/exportDayOrHourSum.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/api/crowd/report/exportDayOrHourSum.json']
    return connectGetResponse(responseData) as ResponseTypes['GET/api/crowd/report/exportDayOrHourSum.json']
  },
  'GET/api/adzone/report/exportAdzone.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/api/adzone/report/exportAdzone.json']
    return connectGetResponse(responseData) as ResponseTypes['GET/api/adzone/report/exportAdzone.json']
  },
  'GET/api/adzone/report/exportDayOrHourList.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/api/adzone/report/exportDayOrHourList.json']
    return connectGetResponse(responseData) as ResponseTypes['GET/api/adzone/report/exportDayOrHourList.json']
  },
  'GET/api/adzone/report/exportDayOrHourSum.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/api/adzone/report/exportDayOrHourSum.json']
    return connectGetResponse(responseData) as ResponseTypes['GET/api/adzone/report/exportDayOrHourSum.json']
  },
  'GET/api/material/report/exportItem.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/api/material/report/exportItem.json']
    return connectGetResponse(responseData) as ResponseTypes['GET/api/material/report/exportItem.json']
  },
  'GET/api/account/report/exportCrowdDayList.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/api/account/report/exportCrowdDayList.json']
    return connectGetResponse(responseData) as ResponseTypes['GET/api/account/report/exportCrowdDayList.json']
  },
  'GET/api/message/findLetterList.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/api/message/findLetterList.json']
    return connectGetResponse(responseData) as ResponseTypes['GET/api/message/findLetterList.json']
  },
  'GET/api/message/getLetterDetail.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/api/message/getLetterDetail.json']
    return connectGetResponse(responseData) as ResponseTypes['GET/api/message/getLetterDetail.json']
  },
  'POST/api/message/batchReadLetters.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['POST/api/message/batchReadLetters.json']
    return connectGetResponse(responseData) as ResponseTypes['POST/api/message/batchReadLetters.json']
  },
  'GET/api/report/consumer/findSummary.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/api/report/consumer/findSummary.json']
    return connectGetResponse(responseData) as ResponseTypes['GET/api/report/consumer/findSummary.json']
  },
  'GET/api/report/consumer/findConsumerCirculation.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/api/report/consumer/findConsumerCirculation.json']
    return connectGetResponse(responseData) as ResponseTypes['GET/api/report/consumer/findConsumerCirculation.json']
  },
  'GET/api/report/fans/findSummary.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/api/report/fans/findSummary.json']
    return connectGetResponse(responseData) as ResponseTypes['GET/api/report/fans/findSummary.json']
  },
  'GET/api/report/fans/findCirculation.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/api/report/fans/findCirculation.json']
    return connectGetResponse(responseData) as ResponseTypes['GET/api/report/fans/findCirculation.json']
  },
  'GET/api/campaign/findTransferPage.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/api/campaign/findTransferPage.json']
    return connectGetResponse(responseData) as ResponseTypes['GET/api/campaign/findTransferPage.json']
  },
  'POST/api/campaign/transfer.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['POST/api/campaign/transfer.json']
    return connectGetResponse(responseData) as ResponseTypes['POST/api/campaign/transfer.json']
  },
  'GET/api/activity/report/findDaySum.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/api/activity/report/findDaySum.json']
    return connectGetResponse(responseData) as ResponseTypes['GET/api/activity/report/findDaySum.json']
  },
  'GET/api/activity/report/findDayList.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/api/activity/report/findDayList.json']
    return connectGetResponse(responseData) as ResponseTypes['GET/api/activity/report/findDayList.json']
  },
  'GET/api/activity/report/findCrowdDaySum.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/api/activity/report/findCrowdDaySum.json']
    return connectGetResponse(responseData) as ResponseTypes['GET/api/activity/report/findCrowdDaySum.json']
  },
  'GET/api/activity/report/findCrowdDayList.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/api/activity/report/findCrowdDayList.json']
    return connectGetResponse(responseData) as ResponseTypes['GET/api/activity/report/findCrowdDayList.json']
  },
  'GET/api/activity/report/findItemPage.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/api/activity/report/findItemPage.json']
    return connectGetResponse(responseData) as ResponseTypes['GET/api/activity/report/findItemPage.json']
  },
  'GET/api/activity/report/exportDayList.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/api/activity/report/exportDayList.json']
    return connectGetResponse(responseData) as ResponseTypes['GET/api/activity/report/exportDayList.json']
  },
  'GET/api/activity/report/exportCrowdDayList.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/api/activity/report/exportCrowdDayList.json']
    return connectGetResponse(responseData) as ResponseTypes['GET/api/activity/report/exportCrowdDayList.json']
  },
  'GET/api/activity/report/exportItem.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/api/activity/report/exportItem.json']
    return connectGetResponse(responseData) as ResponseTypes['GET/api/activity/report/exportItem.json']
  },
  'GET/map': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/map']
    return connectGetResponse(responseData) as ResponseTypes['GET/map']
  },
  'GET/api/report/case/findCampaignDaySum.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/api/report/case/findCampaignDaySum.json']
    return connectGetResponse(responseData) as ResponseTypes['GET/api/report/case/findCampaignDaySum.json']
  },
  'GET/api/report/case/findItemSumList.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/api/report/case/findItemSumList.json']
    return connectGetResponse(responseData) as ResponseTypes['GET/api/report/case/findItemSumList.json']
  },
  'GET/api/report/case/findItemTrendDayList.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/api/report/case/findItemTrendDayList.json']
    return connectGetResponse(responseData) as ResponseTypes['GET/api/report/case/findItemTrendDayList.json']
  },
  'GET/findList.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/findList.json']
    return connectGetResponse(responseData) as ResponseTypes['GET/findList.json']
  },
  'GET/api/report/case/findFeedShopItemAllListComp.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/api/report/case/findFeedShopItemAllListComp.json']
    return connectGetResponse(responseData) as ResponseTypes['GET/api/report/case/findFeedShopItemAllListComp.json']
  },
  'GET/api/campaign/crowd/findList.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/api/campaign/crowd/findList.json']
    return connectGetResponse(responseData) as ResponseTypes['GET/api/campaign/crowd/findList.json']
  },
  'PUT/api/campaign/crowd/modify.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['PUT/api/campaign/crowd/modify.json']
    return connectGetResponse(responseData) as ResponseTypes['PUT/api/campaign/crowd/modify.json']
  },
  'POST/api/solution/add.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['POST/api/solution/add.json']
    return connectGetResponse(responseData) as ResponseTypes['POST/api/solution/add.json']
  },
  'GET/api/material/item/findPage.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/api/material/item/findPage.json']
    return connectGetResponse(responseData) as ResponseTypes['GET/api/material/item/findPage.json']
  },
  'GET/api/solution/allowPromotion.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/api/solution/allowPromotion.json']
    return connectGetResponse(responseData) as ResponseTypes['GET/api/solution/allowPromotion.json']
  },
  'POST/api/solution/batchAdd.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['POST/api/solution/batchAdd.json']
    return connectGetResponse(responseData) as ResponseTypes['POST/api/solution/batchAdd.json']
  },
  'GET/api/target/findLabelList.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/api/target/findLabelList.json']
    return connectGetResponse(responseData) as ResponseTypes['GET/api/target/findLabelList.json']
  },
  'GET/api/target/findSelectionCategoryList.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/api/target/findSelectionCategoryList.json']
    return connectGetResponse(responseData) as ResponseTypes['GET/api/target/findSelectionCategoryList.json']
  },
  'GET/api/account/recharge.action': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/api/account/recharge.action']
    return connectGetResponse(responseData) as ResponseTypes['GET/api/account/recharge.action']
  },
  'GET/api/account/getInfo.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/api/account/getInfo.json']
    return connectGetResponse(responseData) as ResponseTypes['GET/api/account/getInfo.json']
  },
  'POST/api/adgroup/batchAdd.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['POST/api/adgroup/batchAdd.json']
    return connectGetResponse(responseData) as ResponseTypes['POST/api/adgroup/batchAdd.json']
  },
  'POST/api/campaign/estimateContractPv.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['POST/api/campaign/estimateContractPv.json']
    return connectGetResponse(responseData) as ResponseTypes['POST/api/campaign/estimateContractPv.json']
  },
  'POST/api/algotool/lockQuantity.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['POST/api/algotool/lockQuantity.json']
    return connectGetResponse(responseData) as ResponseTypes['POST/api/algotool/lockQuantity.json']
  },
  'GET/api/crowd/findPage.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/api/crowd/findPage.json']
    return connectGetResponse(responseData) as ResponseTypes['GET/api/crowd/findPage.json']
  },
  'POST/api/algotool/getBudgetSimulator.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['POST/api/algotool/getBudgetSimulator.json']
    return connectGetResponse(responseData) as ResponseTypes['POST/api/algotool/getBudgetSimulator.json']
  },
  'POST/api/campaign/add.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['POST/api/campaign/add.json']
    return connectGetResponse(responseData) as ResponseTypes['POST/api/campaign/add.json']
  },
  'GET/api/adgroup/findPage.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/api/adgroup/findPage.json']
    return connectGetResponse(responseData) as ResponseTypes['GET/api/adgroup/findPage.json']
  },
  'PUT/api/campaign/modEntire.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['PUT/api/campaign/modEntire.json']
    return connectGetResponse(responseData) as ResponseTypes['PUT/api/campaign/modEntire.json']
  },
  'GET/api/algotool/probeInterest.json': (state: State) => {
    const responseData = state['$$rapperResponseData']['GET/api/algotool/probeInterest.json']
    return connectGetResponse(responseData) as ResponseTypes['GET/api/algotool/probeInterest.json']
  },
}

export const rapperActions = RequestTypes || []
