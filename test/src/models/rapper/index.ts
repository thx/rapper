/* md5: 6c8f5c18314c8d7a91b7a3ca7b8b3151 */
/* Rap仓库id: 237514 */
/* eslint-disable */
/* tslint:disable */

/**
 * 本文件由 Rapper 同步 Rap 平台接口，自动生成，请勿修改
 * Rap仓库 地址: https://rap2.taobao.org/repository/editor?id=237514
 */

import { createFetch, IModels } from './request';

import {
  useResponse,
  useAllResponse,
  clearResponseCache,
  rapperActions,
  rapperSelector,
} from './redux';
import { rapperReducers, rapperEnhancer } from './lib';
import { IResponseTypes } from './request';

const fetch = createFetch({});

export { fetch, createFetch };
export type Models = IModels;

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
};

/** 响应类型 */
export type ResponseTypes = IResponseTypes;
