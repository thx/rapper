/* md5: 9932fd6a04f083fba84fd584f9eac5a5 */
/* Rap仓库id: 237514 */
/* Rapper版本: 1.0.0-beta.21 */
/* eslint-disable */
/* tslint:disable */

/**
 * 本文件由 Rapper 同步 Rap 平台接口，自动生成，请勿修改
 * Rap仓库 地址: https://rap2.taobao.org/repository/editor?id=237514
 */

import { createFetch, IModels } from './request';
import * as commonLib from '@ali/mc-rap/runtime/commonLib';

import {
  useResponse,
  useAPI,
  useAllResponse,
  clearResponseCache,
  rapperActions,
  rapperBaseSelector,
  rapperDataSelector,
} from './redux';
import { IResponseTypes } from './request';
import * as reduxLib from '@ali/mc-rap/runtime/reduxLib';

const { defaultFetch } = commonLib;
const fetch = createFetch({});

const { rapperReducers, rapperEnhancer } = reduxLib;

export { fetch, createFetch, defaultFetch };
export type Models = IModels;

export {
  /** 以Hooks的方式使用请求响应数据 */
  useResponse,
  useAPI,
  /** 使用请求响应数据（包含缓存） */
  useAllResponse,
  /** 清除此接口的缓存 */
  clearResponseCache,
  rapperBaseSelector,
  rapperDataSelector,
  rapperActions,
  rapperReducers,
  rapperEnhancer,
};

/** 响应类型 */
export type ResponseTypes = IResponseTypes;
