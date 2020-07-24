/* md5: 40f78ed896ac6e65b27064f3c7a50aa0 */
/* Rap仓库id: 237514 */
/* Rapper版本: 1.1.0-beta.3 */
/* eslint-disable */
/* tslint:disable */

/**
 * 本文件由 Rapper 同步 Rap 平台接口，自动生成，请勿修改
 * Rap仓库 地址: http://rap2.taobao.org/repository/editor?id=237514
 */

import { useSelector } from 'react-redux';
import { IModels, IResponseTypes, createFetch } from './request';
import * as reduxLib from '@ali/rap/runtime/reduxLib';
import { fetch } from './index';

/** 请求types */
export const RequestTypes = {
  'GET/testGet': ['GET/testGet_REQUEST', 'GET/testGet_SUCCESS', 'GET/testGet_FAILURE'],

  'POST/testPost': ['POST/testPost_REQUEST', 'POST/testPost_SUCCESS', 'POST/testPost_FAILURE'],

  'POST/testFormData': [
    'POST/testFormData_REQUEST',
    'POST/testFormData_SUCCESS',
    'POST/testFormData_FAILURE',
  ],

  'GET/group/:groupId/member/{memberId}': [
    'GET/group/:groupId/member/{memberId}_REQUEST',
    'GET/group/:groupId/member/{memberId}_SUCCESS',
    'GET/group/:groupId/member/{memberId}_FAILURE',
  ],

  'GET/useAPI': ['GET/useAPI_REQUEST', 'GET/useAPI_SUCCESS', 'GET/useAPI_FAILURE'],
};

/** store中存储的数据结构 */
interface IRapperStore {
  'GET/testGet': Array<
    reduxLib.IInterfaceInfo & {
      request: IModels['GET/testGet']['Req'];
      response: IResponseTypes['GET/testGet'];
    }
  >;

  'POST/testPost': Array<
    reduxLib.IInterfaceInfo & {
      request: IModels['POST/testPost']['Req'];
      response: IResponseTypes['POST/testPost'];
    }
  >;

  'POST/testFormData': Array<
    reduxLib.IInterfaceInfo & {
      request: IModels['POST/testFormData']['Req'];
      response: IResponseTypes['POST/testFormData'];
    }
  >;

  'GET/group/:groupId/member/{memberId}': Array<
    reduxLib.IInterfaceInfo & {
      request: IModels['GET/group/:groupId/member/{memberId}']['Req'];
      response: IResponseTypes['GET/group/:groupId/member/{memberId}'];
    }
  >;

  'GET/useAPI': Array<
    reduxLib.IInterfaceInfo & {
      request: IModels['GET/useAPI']['Req'];
      response: IResponseTypes['GET/useAPI'];
    }
  >;
}
export type TRapperStoreKey = keyof IRapperStore;

export const useResponse = {
  /**
   * 接口名：GET请求
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=237514&mod=340613&itf=1377102
   */
  /* tslint:disable */
  'GET/testGet': function useData(
    filter?:
      | { request?: IModels['GET/testGet']['Req'] }
      | { (storeData: IRapperStore['GET/testGet'][0]): boolean },
  ) {
    type Req = IModels['GET/testGet']['Req'];
    type Item = IRapperStore['GET/testGet'][0];
    type Res = IResponseTypes['GET/testGet'];
    return reduxLib.useResponseData<TRapperStoreKey, Req, Res | undefined, Item>(
      'GET/testGet',
      filter,
    );
  },

  /**
   * 接口名：POST 请求
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=237514&mod=340613&itf=1377105
   */
  /* tslint:disable */
  'POST/testPost': function useData(
    filter?:
      | { request?: IModels['POST/testPost']['Req'] }
      | { (storeData: IRapperStore['POST/testPost'][0]): boolean },
  ) {
    type Req = IModels['POST/testPost']['Req'];
    type Item = IRapperStore['POST/testPost'][0];
    type Res = IResponseTypes['POST/testPost'];
    return reduxLib.useResponseData<TRapperStoreKey, Req, Res | undefined, Item>(
      'POST/testPost',
      filter,
    );
  },

  /**
   * 接口名：form表单提交请求
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=237514&mod=340613&itf=1377106
   */
  /* tslint:disable */
  'POST/testFormData': function useData(
    filter?:
      | { request?: IModels['POST/testFormData']['Req'] }
      | { (storeData: IRapperStore['POST/testFormData'][0]): boolean },
  ) {
    type Req = IModels['POST/testFormData']['Req'];
    type Item = IRapperStore['POST/testFormData'][0];
    type Res = IResponseTypes['POST/testFormData'];
    return reduxLib.useResponseData<TRapperStoreKey, Req, Res | undefined, Item>(
      'POST/testFormData',
      filter,
    );
  },

  /**
   * 接口名：RESTful 接口
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=237514&mod=340613&itf=1380746
   */
  /* tslint:disable */
  'GET/group/:groupId/member/{memberId}': function useData(
    filter?:
      | { request?: IModels['GET/group/:groupId/member/{memberId}']['Req'] }
      | { (storeData: IRapperStore['GET/group/:groupId/member/{memberId}'][0]): boolean },
  ) {
    type Req = IModels['GET/group/:groupId/member/{memberId}']['Req'];
    type Item = IRapperStore['GET/group/:groupId/member/{memberId}'][0];
    type Res = IResponseTypes['GET/group/:groupId/member/{memberId}'];
    return reduxLib.useResponseData<TRapperStoreKey, Req, Res | undefined, Item>(
      'GET/group/:groupId/member/{memberId}',
      filter,
    );
  },

  /**
   * 接口名：useAPI测试接口
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=237514&mod=340613&itf=1482796
   */
  /* tslint:disable */
  'GET/useAPI': function useData(
    filter?:
      | { request?: IModels['GET/useAPI']['Req'] }
      | { (storeData: IRapperStore['GET/useAPI'][0]): boolean },
  ) {
    type Req = IModels['GET/useAPI']['Req'];
    type Item = IRapperStore['GET/useAPI'][0];
    type Res = IResponseTypes['GET/useAPI'];
    return reduxLib.useResponseData<TRapperStoreKey, Req, Res | undefined, Item>(
      'GET/useAPI',
      filter,
    );
  },
};

export const useAPI = {
  /**
   * 接口名：GET请求
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=237514&mod=340613&itf=1377102
   */
  /* tslint:disable */
  'GET/testGet': function useData(
    requestParams?: IModels['GET/testGet']['Req'],
    extra?: reduxLib.IUseAPIExtra,
  ) {
    type Req = IModels['GET/testGet']['Req'];
    type Res = IResponseTypes['GET/testGet'];
    type IFetcher = typeof fetch['GET/testGet'];
    return reduxLib.useAPICommon<TRapperStoreKey, Req, Res | undefined, IFetcher>({
      modelName: 'GET/testGet',
      fetcher: fetch['GET/testGet'],
      requestParams,
      extra,
    });
  },

  /**
   * 接口名：POST 请求
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=237514&mod=340613&itf=1377105
   */
  /* tslint:disable */
  'POST/testPost': function useData(
    requestParams?: IModels['POST/testPost']['Req'],
    extra?: reduxLib.IUseAPIExtra,
  ) {
    type Req = IModels['POST/testPost']['Req'];
    type Res = IResponseTypes['POST/testPost'];
    type IFetcher = typeof fetch['POST/testPost'];
    return reduxLib.useAPICommon<TRapperStoreKey, Req, Res | undefined, IFetcher>({
      modelName: 'POST/testPost',
      fetcher: fetch['POST/testPost'],
      requestParams,
      extra,
    });
  },

  /**
   * 接口名：form表单提交请求
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=237514&mod=340613&itf=1377106
   */
  /* tslint:disable */
  'POST/testFormData': function useData(
    requestParams?: IModels['POST/testFormData']['Req'],
    extra?: reduxLib.IUseAPIExtra,
  ) {
    type Req = IModels['POST/testFormData']['Req'];
    type Res = IResponseTypes['POST/testFormData'];
    type IFetcher = typeof fetch['POST/testFormData'];
    return reduxLib.useAPICommon<TRapperStoreKey, Req, Res | undefined, IFetcher>({
      modelName: 'POST/testFormData',
      fetcher: fetch['POST/testFormData'],
      requestParams,
      extra,
    });
  },

  /**
   * 接口名：RESTful 接口
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=237514&mod=340613&itf=1380746
   */
  /* tslint:disable */
  'GET/group/:groupId/member/{memberId}': function useData(
    requestParams?: IModels['GET/group/:groupId/member/{memberId}']['Req'],
    extra?: reduxLib.IUseAPIExtra,
  ) {
    type Req = IModels['GET/group/:groupId/member/{memberId}']['Req'];
    type Res = IResponseTypes['GET/group/:groupId/member/{memberId}'];
    type IFetcher = typeof fetch['GET/group/:groupId/member/{memberId}'];
    return reduxLib.useAPICommon<TRapperStoreKey, Req, Res | undefined, IFetcher>({
      modelName: 'GET/group/:groupId/member/{memberId}',
      fetcher: fetch['GET/group/:groupId/member/{memberId}'],
      requestParams,
      extra,
    });
  },

  /**
   * 接口名：useAPI测试接口
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=237514&mod=340613&itf=1482796
   */
  /* tslint:disable */
  'GET/useAPI': function useData(
    requestParams?: IModels['GET/useAPI']['Req'],
    extra?: reduxLib.IUseAPIExtra,
  ) {
    type Req = IModels['GET/useAPI']['Req'];
    type Res = IResponseTypes['GET/useAPI'];
    type IFetcher = typeof fetch['GET/useAPI'];
    return reduxLib.useAPICommon<TRapperStoreKey, Req, Res | undefined, IFetcher>({
      modelName: 'GET/useAPI',
      fetcher: fetch['GET/useAPI'],
      requestParams,
      extra,
    });
  },
};

export const useAllResponse = {
  /**
   * 接口名：GET请求
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=237514&mod=340613&itf=1377102
   */
  /* tslint:disable */
  'GET/testGet': function useData() {
    return useSelector((state: reduxLib.IState) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['GET/testGet']) || [];
      type TReturnItem = reduxLib.IInterfaceInfo & {
        request?: IModels['GET/testGet']['Req'];
        response?: IResponseTypes['GET/testGet'];
      };
      return selectedState as Array<TReturnItem>;
    });
  },

  /**
   * 接口名：POST 请求
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=237514&mod=340613&itf=1377105
   */
  /* tslint:disable */
  'POST/testPost': function useData() {
    return useSelector((state: reduxLib.IState) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['POST/testPost']) || [];
      type TReturnItem = reduxLib.IInterfaceInfo & {
        request?: IModels['POST/testPost']['Req'];
        response?: IResponseTypes['POST/testPost'];
      };
      return selectedState as Array<TReturnItem>;
    });
  },

  /**
   * 接口名：form表单提交请求
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=237514&mod=340613&itf=1377106
   */
  /* tslint:disable */
  'POST/testFormData': function useData() {
    return useSelector((state: reduxLib.IState) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['POST/testFormData']) || [];
      type TReturnItem = reduxLib.IInterfaceInfo & {
        request?: IModels['POST/testFormData']['Req'];
        response?: IResponseTypes['POST/testFormData'];
      };
      return selectedState as Array<TReturnItem>;
    });
  },

  /**
   * 接口名：RESTful 接口
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=237514&mod=340613&itf=1380746
   */
  /* tslint:disable */
  'GET/group/:groupId/member/{memberId}': function useData() {
    return useSelector((state: reduxLib.IState) => {
      const selectedState =
        (state['$$rapperResponseData'] &&
          state['$$rapperResponseData']['GET/group/:groupId/member/{memberId}']) ||
        [];
      type TReturnItem = reduxLib.IInterfaceInfo & {
        request?: IModels['GET/group/:groupId/member/{memberId}']['Req'];
        response?: IResponseTypes['GET/group/:groupId/member/{memberId}'];
      };
      return selectedState as Array<TReturnItem>;
    });
  },

  /**
   * 接口名：useAPI测试接口
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=237514&mod=340613&itf=1482796
   */
  /* tslint:disable */
  'GET/useAPI': function useData() {
    return useSelector((state: reduxLib.IState) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['GET/useAPI']) || [];
      type TReturnItem = reduxLib.IInterfaceInfo & {
        request?: IModels['GET/useAPI']['Req'];
        response?: IResponseTypes['GET/useAPI'];
      };
      return selectedState as Array<TReturnItem>;
    });
  },
};

/** 重置接口数据 */
export const clearResponseCache = {
  /**
   * 接口名：GET请求
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=237514&mod=340613&itf=1377102
   */
  'GET/testGet': (): void => {
    reduxLib.dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: { 'GET/testGet': undefined },
    });
  },

  /**
   * 接口名：POST 请求
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=237514&mod=340613&itf=1377105
   */
  'POST/testPost': (): void => {
    reduxLib.dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: { 'POST/testPost': undefined },
    });
  },

  /**
   * 接口名：form表单提交请求
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=237514&mod=340613&itf=1377106
   */
  'POST/testFormData': (): void => {
    reduxLib.dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: { 'POST/testFormData': undefined },
    });
  },

  /**
   * 接口名：RESTful 接口
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=237514&mod=340613&itf=1380746
   */
  'GET/group/:groupId/member/{memberId}': (): void => {
    reduxLib.dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: { 'GET/group/:groupId/member/{memberId}': undefined },
    });
  },

  /**
   * 接口名：useAPI测试接口
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=237514&mod=340613&itf=1482796
   */
  'GET/useAPI': (): void => {
    reduxLib.dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: { 'GET/useAPI': undefined },
    });
  },
};

export const rapperBaseSelector = {
  'GET/testGet': (
    state: reduxLib.IState,
    filter?:
      | { request?: IModels['GET/testGet']['Req'] }
      | { (storeData: IRapperStore['GET/testGet'][0]): boolean },
  ) => {
    type Req = IModels['GET/testGet']['Req'];
    type Res = IResponseTypes['GET/testGet'];
    type Item = IRapperStore['GET/testGet'][0];
    return reduxLib.getResponseData<TRapperStoreKey, Req, Res | undefined, Item>(
      state,
      'GET/testGet',
      filter,
    );
  },
  'POST/testPost': (
    state: reduxLib.IState,
    filter?:
      | { request?: IModels['POST/testPost']['Req'] }
      | { (storeData: IRapperStore['POST/testPost'][0]): boolean },
  ) => {
    type Req = IModels['POST/testPost']['Req'];
    type Res = IResponseTypes['POST/testPost'];
    type Item = IRapperStore['POST/testPost'][0];
    return reduxLib.getResponseData<TRapperStoreKey, Req, Res | undefined, Item>(
      state,
      'POST/testPost',
      filter,
    );
  },
  'POST/testFormData': (
    state: reduxLib.IState,
    filter?:
      | { request?: IModels['POST/testFormData']['Req'] }
      | { (storeData: IRapperStore['POST/testFormData'][0]): boolean },
  ) => {
    type Req = IModels['POST/testFormData']['Req'];
    type Res = IResponseTypes['POST/testFormData'];
    type Item = IRapperStore['POST/testFormData'][0];
    return reduxLib.getResponseData<TRapperStoreKey, Req, Res | undefined, Item>(
      state,
      'POST/testFormData',
      filter,
    );
  },
  'GET/group/:groupId/member/{memberId}': (
    state: reduxLib.IState,
    filter?:
      | { request?: IModels['GET/group/:groupId/member/{memberId}']['Req'] }
      | { (storeData: IRapperStore['GET/group/:groupId/member/{memberId}'][0]): boolean },
  ) => {
    type Req = IModels['GET/group/:groupId/member/{memberId}']['Req'];
    type Res = IResponseTypes['GET/group/:groupId/member/{memberId}'];
    type Item = IRapperStore['GET/group/:groupId/member/{memberId}'][0];
    return reduxLib.getResponseData<TRapperStoreKey, Req, Res | undefined, Item>(
      state,
      'GET/group/:groupId/member/{memberId}',
      filter,
    );
  },
  'GET/useAPI': (
    state: reduxLib.IState,
    filter?:
      | { request?: IModels['GET/useAPI']['Req'] }
      | { (storeData: IRapperStore['GET/useAPI'][0]): boolean },
  ) => {
    type Req = IModels['GET/useAPI']['Req'];
    type Res = IResponseTypes['GET/useAPI'];
    type Item = IRapperStore['GET/useAPI'][0];
    return reduxLib.getResponseData<TRapperStoreKey, Req, Res | undefined, Item>(
      state,
      'GET/useAPI',
      filter,
    );
  },
};

export const rapperDataSelector = {
  'GET/testGet': (state: reduxLib.IState) => {
    type Res = IResponseTypes['GET/testGet'];
    return reduxLib.getRapperDataSelector<TRapperStoreKey, Res>(state, 'GET/testGet');
  },
  'POST/testPost': (state: reduxLib.IState) => {
    type Res = IResponseTypes['POST/testPost'];
    return reduxLib.getRapperDataSelector<TRapperStoreKey, Res>(state, 'POST/testPost');
  },
  'POST/testFormData': (state: reduxLib.IState) => {
    type Res = IResponseTypes['POST/testFormData'];
    return reduxLib.getRapperDataSelector<TRapperStoreKey, Res>(state, 'POST/testFormData');
  },
  'GET/group/:groupId/member/{memberId}': (state: reduxLib.IState) => {
    type Res = IResponseTypes['GET/group/:groupId/member/{memberId}'];
    return reduxLib.getRapperDataSelector<TRapperStoreKey, Res>(
      state,
      'GET/group/:groupId/member/{memberId}',
    );
  },
  'GET/useAPI': (state: reduxLib.IState) => {
    type Res = IResponseTypes['GET/useAPI'];
    return reduxLib.getRapperDataSelector<TRapperStoreKey, Res>(state, 'GET/useAPI');
  },
};

export const rapperActions = RequestTypes || [];
