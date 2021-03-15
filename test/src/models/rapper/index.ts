/* md5: 2e1aff9ba453c5e553f745d0b3ca0056 */
/* Rap仓库id: 237514 */
/* Rapper版本: 1.2.0-beta.0 */
/* eslint-disable */
/* tslint:disable */
// @ts-nocheck

/**
 * 本文件由 Rapper 同步 Rap 平台接口，自动生成，请勿修改
 * Rap仓库 地址: http://rap2.taobao.org/repository/editor?id=237514
 */

import { createFetch, IModels } from './request';
import * as commonLib from '@ali/rap/runtime/commonLib';

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
import * as reduxLib from '@ali/rap/runtime/reduxLib';

const { defaultFetch } = commonLib;
let fetch = createFetch({}, { fetchType: commonLib.FetchType.BASE });

const { rapperReducers, rapperEnhancer } = reduxLib;

export const overrideFetch = (fetchConfig: commonLib.RequesterOption) => {
  fetch = createFetch(fetchConfig, { fetchType: commonLib.FetchType.AUTO });
};
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
