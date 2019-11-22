/* eslint-disable */

/**
 * 本文件由 Rapper 同步 Rap 平台接口，自动生成，请勿修改
 * Rap仓库 地址: https://rap2.alibaba-inc.com/repository/editor?id=2900
 */

import {createFetch, Models as RequestModels} from './request'
import {defaultFetch} from './lib'

import {useResponse, useAllResponse, clearResponseCache, rapperActions, rapperSelector} from './redux'
import {rapperReducers, rapperEnhancer} from './lib'
import {ResponseTypes as RequestResponseTypes} from './request'

const fetch = createFetch({})

export {fetch, createFetch, defaultFetch}
export type Models = RequestModels

export {
  /** 以Hooks的方式使用请求响应数据 */
  useResponse,
  /** 使用请求响应数据（包含缓存） */
  useAllResponse,
  /** 清除此接口的缓存 */
  clearResponseCache,
  rapperSelector,
  rapperActions,
  rapperReducers,
  rapperEnhancer,
}

/** 响应类型 */
export type ResponseTypes = RequestResponseTypes
