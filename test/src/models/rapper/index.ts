/* md5: 930099ff316588b9c0beee50f6c6cc8d */
/* Rap仓库id: 237514 */
/* Rapper版本: 0.2.3 */
/* eslint-disable */
/* tslint:disable */

/**
 * 本文件由 Rapper 同步 Rap 平台接口，自动生成，请勿修改
 * Rap仓库 地址: https://rap2.taobao.org/repository/editor?id=237514
 */

import { createFetch, IModels } from './request';
import { defaultFetch } from '@ali/rap/dist/runtime/lib';

import {
  useResponse,
  useRapper,
  useAllResponse,
  clearResponseCache,
  rapperActions,
  rapperBaseSelector,
  rapperDataSelector,
} from './redux';
import { rapperReducers, rapperEnhancer } from '@ali/rap/dist/runtime/lib';
import { IResponseTypes } from './request';

const fetch = createFetch({});

export { fetch, createFetch, defaultFetch };
export type Models = IModels;

export {
  /** 以Hooks的方式使用请求响应数据 */
  useResponse,
  useRapper,
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
