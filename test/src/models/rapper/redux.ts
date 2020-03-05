/* md5: c7eb9ef160e9ff5544520e7064e5d8a9 */
/* Rap仓库id: 237514 */
/* Rapper版本: 1.0.0-beta.21 */
/* eslint-disable */
/* tslint:disable */

/**
 * 本文件由 Rapper 同步 Rap 平台接口，自动生成，请勿修改
 * Rap仓库 地址: https://rap2.taobao.org/repository/editor?id=237514
 */

import { useSelector } from 'react-redux';
import { IModels, IResponseTypes, createFetch } from './request';
import * as reduxLib from '@ali/mc-rap/runtime/reduxLib';
import { fetch } from './index';

/** 请求types */
export const RequestTypes = {
  'GET/example/1574387719563': [
    'GET/example/1574387719563_REQUEST',
    'GET/example/1574387719563_SUCCESS',
    'GET/example/1574387719563_FAILURE',
  ],

  'GET/testGet': ['GET/testGet_REQUEST', 'GET/testGet_SUCCESS', 'GET/testGet_FAILURE'],

  'POST/testPost': ['POST/testPost_REQUEST', 'POST/testPost_SUCCESS', 'POST/testPost_FAILURE'],

  'POST/testFormData': [
    'POST/testFormData_REQUEST',
    'POST/testFormData_SUCCESS',
    'POST/testFormData_FAILURE',
  ],

  'GET/group/:groupId/member/:memberId': [
    'GET/group/:groupId/member/:memberId_REQUEST',
    'GET/group/:groupId/member/:memberId_SUCCESS',
    'GET/group/:groupId/member/:memberId_FAILURE',
  ],

  'GET/useAPI': ['GET/useAPI_REQUEST', 'GET/useAPI_SUCCESS', 'GET/useAPI_FAILURE'],
};

/** store中存储的数据结构 */
interface IRapperStore {
  'GET/example/1574387719563': Array<
    reduxLib.IInterfaceInfo & {
      request: IModels['GET/example/1574387719563']['Req'];
      response: IResponseTypes['GET/example/1574387719563'];
    }
  >;

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

  'GET/group/:groupId/member/:memberId': Array<
    reduxLib.IInterfaceInfo & {
      request: IModels['GET/group/:groupId/member/:memberId']['Req'];
      response: IResponseTypes['GET/group/:groupId/member/:memberId'];
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
   * 接口名：示例接口
   * Rap 地址: https://rap2.taobao.org/repository/editor?id=237514&mod=340613&itf=1376440
   */
  /* tslint:disable */
  'GET/example/1574387719563': function useData(
    filter?:
      | { request?: IModels['GET/example/1574387719563']['Req'] }
      | { (storeData: IRapperStore['GET/example/1574387719563'][0]): boolean },
  ) {
    type Req = IModels['GET/example/1574387719563']['Req'];
    type Item = IRapperStore['GET/example/1574387719563'][0];
    type Res = IResponseTypes['GET/example/1574387719563'];
    return reduxLib.useResponseData<TRapperStoreKey, Req, Res, Item>(
      'GET/example/1574387719563',
      filter,
    );
  },

  /**
   * 接口名：GET请求
   * Rap 地址: https://rap2.taobao.org/repository/editor?id=237514&mod=340613&itf=1377102
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
    return reduxLib.useResponseData<TRapperStoreKey, Req, Res, Item>('GET/testGet', filter);
  },

  /**
   * 接口名：POST 请求
   * Rap 地址: https://rap2.taobao.org/repository/editor?id=237514&mod=340613&itf=1377105
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
    return reduxLib.useResponseData<TRapperStoreKey, Req, Res, Item>('POST/testPost', filter);
  },

  /**
   * 接口名：form表单提交请求
   * Rap 地址: https://rap2.taobao.org/repository/editor?id=237514&mod=340613&itf=1377106
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
    return reduxLib.useResponseData<TRapperStoreKey, Req, Res, Item>('POST/testFormData', filter);
  },

  /**
   * 接口名：RESTful 接口
   * Rap 地址: https://rap2.taobao.org/repository/editor?id=237514&mod=340613&itf=1380746
   */
  /* tslint:disable */
  'GET/group/:groupId/member/:memberId': function useData(
    filter?:
      | { request?: IModels['GET/group/:groupId/member/:memberId']['Req'] }
      | { (storeData: IRapperStore['GET/group/:groupId/member/:memberId'][0]): boolean },
  ) {
    type Req = IModels['GET/group/:groupId/member/:memberId']['Req'];
    type Item = IRapperStore['GET/group/:groupId/member/:memberId'][0];
    type Res = IResponseTypes['GET/group/:groupId/member/:memberId'];
    return reduxLib.useResponseData<TRapperStoreKey, Req, Res, Item>(
      'GET/group/:groupId/member/:memberId',
      filter,
    );
  },

  /**
   * 接口名：useAPI测试接口
   * Rap 地址: https://rap2.taobao.org/repository/editor?id=237514&mod=340613&itf=1482796
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
    return reduxLib.useResponseData<TRapperStoreKey, Req, Res, Item>('GET/useAPI', filter);
  },
};

export const useAPI = {
  /**
   * 接口名：示例接口
   * Rap 地址: https://rap2.taobao.org/repository/editor?id=237514&mod=340613&itf=1376440
   */
  /* tslint:disable */
  'GET/example/1574387719563': function useData(
    requestParams?: IModels['GET/example/1574387719563']['Req'],
    extra?: reduxLib.IUseAPIExtra & { fetch?: ReturnType<typeof createFetch> },
  ) {
    type Req = IModels['GET/example/1574387719563']['Req'];
    type Res = IResponseTypes['GET/example/1574387719563'];
    const rapperFetch = extra && extra.fetch ? extra.fetch : fetch;
    type IFetcher = typeof rapperFetch['GET/example/1574387719563'];
    return reduxLib.useAPICommon<TRapperStoreKey, Req, Res, IFetcher>({
      modelName: 'GET/example/1574387719563',
      fetcher: rapperFetch['GET/example/1574387719563'],
      requestParams,
      extra,
    });
  },

  /**
   * 接口名：GET请求
   * Rap 地址: https://rap2.taobao.org/repository/editor?id=237514&mod=340613&itf=1377102
   */
  /* tslint:disable */
  'GET/testGet': function useData(
    requestParams?: IModels['GET/testGet']['Req'],
    extra?: reduxLib.IUseAPIExtra & { fetch?: ReturnType<typeof createFetch> },
  ) {
    type Req = IModels['GET/testGet']['Req'];
    type Res = IResponseTypes['GET/testGet'];
    const rapperFetch = extra && extra.fetch ? extra.fetch : fetch;
    type IFetcher = typeof rapperFetch['GET/testGet'];
    return reduxLib.useAPICommon<TRapperStoreKey, Req, Res, IFetcher>({
      modelName: 'GET/testGet',
      fetcher: rapperFetch['GET/testGet'],
      requestParams,
      extra,
    });
  },

  /**
   * 接口名：POST 请求
   * Rap 地址: https://rap2.taobao.org/repository/editor?id=237514&mod=340613&itf=1377105
   */
  /* tslint:disable */
  'POST/testPost': function useData(
    requestParams?: IModels['POST/testPost']['Req'],
    extra?: reduxLib.IUseAPIExtra & { fetch?: ReturnType<typeof createFetch> },
  ) {
    type Req = IModels['POST/testPost']['Req'];
    type Res = IResponseTypes['POST/testPost'];
    const rapperFetch = extra && extra.fetch ? extra.fetch : fetch;
    type IFetcher = typeof rapperFetch['POST/testPost'];
    return reduxLib.useAPICommon<TRapperStoreKey, Req, Res, IFetcher>({
      modelName: 'POST/testPost',
      fetcher: rapperFetch['POST/testPost'],
      requestParams,
      extra,
    });
  },

  /**
   * 接口名：form表单提交请求
   * Rap 地址: https://rap2.taobao.org/repository/editor?id=237514&mod=340613&itf=1377106
   */
  /* tslint:disable */
  'POST/testFormData': function useData(
    requestParams?: IModels['POST/testFormData']['Req'],
    extra?: reduxLib.IUseAPIExtra & { fetch?: ReturnType<typeof createFetch> },
  ) {
    type Req = IModels['POST/testFormData']['Req'];
    type Res = IResponseTypes['POST/testFormData'];
    const rapperFetch = extra && extra.fetch ? extra.fetch : fetch;
    type IFetcher = typeof rapperFetch['POST/testFormData'];
    return reduxLib.useAPICommon<TRapperStoreKey, Req, Res, IFetcher>({
      modelName: 'POST/testFormData',
      fetcher: rapperFetch['POST/testFormData'],
      requestParams,
      extra,
    });
  },

  /**
   * 接口名：RESTful 接口
   * Rap 地址: https://rap2.taobao.org/repository/editor?id=237514&mod=340613&itf=1380746
   */
  /* tslint:disable */
  'GET/group/:groupId/member/:memberId': function useData(
    requestParams?: IModels['GET/group/:groupId/member/:memberId']['Req'],
    extra?: reduxLib.IUseAPIExtra & { fetch?: ReturnType<typeof createFetch> },
  ) {
    type Req = IModels['GET/group/:groupId/member/:memberId']['Req'];
    type Res = IResponseTypes['GET/group/:groupId/member/:memberId'];
    const rapperFetch = extra && extra.fetch ? extra.fetch : fetch;
    type IFetcher = typeof rapperFetch['GET/group/:groupId/member/:memberId'];
    return reduxLib.useAPICommon<TRapperStoreKey, Req, Res, IFetcher>({
      modelName: 'GET/group/:groupId/member/:memberId',
      fetcher: rapperFetch['GET/group/:groupId/member/:memberId'],
      requestParams,
      extra,
    });
  },

  /**
   * 接口名：useAPI测试接口
   * Rap 地址: https://rap2.taobao.org/repository/editor?id=237514&mod=340613&itf=1482796
   */
  /* tslint:disable */
  'GET/useAPI': function useData(
    requestParams?: IModels['GET/useAPI']['Req'],
    extra?: reduxLib.IUseAPIExtra & { fetch?: ReturnType<typeof createFetch> },
  ) {
    type Req = IModels['GET/useAPI']['Req'];
    type Res = IResponseTypes['GET/useAPI'];
    const rapperFetch = extra && extra.fetch ? extra.fetch : fetch;
    type IFetcher = typeof rapperFetch['GET/useAPI'];
    return reduxLib.useAPICommon<TRapperStoreKey, Req, Res, IFetcher>({
      modelName: 'GET/useAPI',
      fetcher: rapperFetch['GET/useAPI'],
      requestParams,
      extra,
    });
  },
};

export const useAllResponse = {
  /**
   * 接口名：示例接口
   * Rap 地址: https://rap2.taobao.org/repository/editor?id=237514&mod=340613&itf=1376440
   */
  /* tslint:disable */
  'GET/example/1574387719563': function useData() {
    return useSelector((state: reduxLib.IState) => {
      const selectedState =
        (state['$$rapperResponseData'] &&
          state['$$rapperResponseData']['GET/example/1574387719563']) ||
        [];
      type TReturnItem = reduxLib.IInterfaceInfo & {
        request?: IModels['GET/example/1574387719563']['Req'];
        response?: IResponseTypes['GET/example/1574387719563'];
      };
      return selectedState as Array<TReturnItem>;
    });
  },

  /**
   * 接口名：GET请求
   * Rap 地址: https://rap2.taobao.org/repository/editor?id=237514&mod=340613&itf=1377102
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
   * Rap 地址: https://rap2.taobao.org/repository/editor?id=237514&mod=340613&itf=1377105
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
   * Rap 地址: https://rap2.taobao.org/repository/editor?id=237514&mod=340613&itf=1377106
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
   * Rap 地址: https://rap2.taobao.org/repository/editor?id=237514&mod=340613&itf=1380746
   */
  /* tslint:disable */
  'GET/group/:groupId/member/:memberId': function useData() {
    return useSelector((state: reduxLib.IState) => {
      const selectedState =
        (state['$$rapperResponseData'] &&
          state['$$rapperResponseData']['GET/group/:groupId/member/:memberId']) ||
        [];
      type TReturnItem = reduxLib.IInterfaceInfo & {
        request?: IModels['GET/group/:groupId/member/:memberId']['Req'];
        response?: IResponseTypes['GET/group/:groupId/member/:memberId'];
      };
      return selectedState as Array<TReturnItem>;
    });
  },

  /**
   * 接口名：useAPI测试接口
   * Rap 地址: https://rap2.taobao.org/repository/editor?id=237514&mod=340613&itf=1482796
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
   * 接口名：示例接口
   * Rap 地址: https://rap2.taobao.org/repository/editor?id=237514&mod=340613&itf=1376440
   */
  'GET/example/1574387719563': (): void => {
    reduxLib.dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: { 'GET/example/1574387719563': undefined },
    });
  },

  /**
   * 接口名：GET请求
   * Rap 地址: https://rap2.taobao.org/repository/editor?id=237514&mod=340613&itf=1377102
   */
  'GET/testGet': (): void => {
    reduxLib.dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: { 'GET/testGet': undefined },
    });
  },

  /**
   * 接口名：POST 请求
   * Rap 地址: https://rap2.taobao.org/repository/editor?id=237514&mod=340613&itf=1377105
   */
  'POST/testPost': (): void => {
    reduxLib.dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: { 'POST/testPost': undefined },
    });
  },

  /**
   * 接口名：form表单提交请求
   * Rap 地址: https://rap2.taobao.org/repository/editor?id=237514&mod=340613&itf=1377106
   */
  'POST/testFormData': (): void => {
    reduxLib.dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: { 'POST/testFormData': undefined },
    });
  },

  /**
   * 接口名：RESTful 接口
   * Rap 地址: https://rap2.taobao.org/repository/editor?id=237514&mod=340613&itf=1380746
   */
  'GET/group/:groupId/member/:memberId': (): void => {
    reduxLib.dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: { 'GET/group/:groupId/member/:memberId': undefined },
    });
  },

  /**
   * 接口名：useAPI测试接口
   * Rap 地址: https://rap2.taobao.org/repository/editor?id=237514&mod=340613&itf=1482796
   */
  'GET/useAPI': (): void => {
    reduxLib.dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: { 'GET/useAPI': undefined },
    });
  },
};

export const rapperBaseSelector = {
  'GET/example/1574387719563': (
    state: reduxLib.IState,
    filter?:
      | { request?: IModels['GET/example/1574387719563']['Req'] }
      | { (storeData: IRapperStore['GET/example/1574387719563'][0]): boolean },
  ) => {
    type Req = IModels['GET/example/1574387719563']['Req'];
    type Res = IResponseTypes['GET/example/1574387719563'];
    type Item = IRapperStore['GET/example/1574387719563'][0];
    return reduxLib.getResponseData<TRapperStoreKey, Req, Res, Item>(
      state,
      'GET/example/1574387719563',
      filter,
    );
  },
  'GET/testGet': (
    state: reduxLib.IState,
    filter?:
      | { request?: IModels['GET/testGet']['Req'] }
      | { (storeData: IRapperStore['GET/testGet'][0]): boolean },
  ) => {
    type Req = IModels['GET/testGet']['Req'];
    type Res = IResponseTypes['GET/testGet'];
    type Item = IRapperStore['GET/testGet'][0];
    return reduxLib.getResponseData<TRapperStoreKey, Req, Res, Item>(state, 'GET/testGet', filter);
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
    return reduxLib.getResponseData<TRapperStoreKey, Req, Res, Item>(
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
    return reduxLib.getResponseData<TRapperStoreKey, Req, Res, Item>(
      state,
      'POST/testFormData',
      filter,
    );
  },
  'GET/group/:groupId/member/:memberId': (
    state: reduxLib.IState,
    filter?:
      | { request?: IModels['GET/group/:groupId/member/:memberId']['Req'] }
      | { (storeData: IRapperStore['GET/group/:groupId/member/:memberId'][0]): boolean },
  ) => {
    type Req = IModels['GET/group/:groupId/member/:memberId']['Req'];
    type Res = IResponseTypes['GET/group/:groupId/member/:memberId'];
    type Item = IRapperStore['GET/group/:groupId/member/:memberId'][0];
    return reduxLib.getResponseData<TRapperStoreKey, Req, Res, Item>(
      state,
      'GET/group/:groupId/member/:memberId',
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
    return reduxLib.getResponseData<TRapperStoreKey, Req, Res, Item>(state, 'GET/useAPI', filter);
  },
};

export const rapperDataSelector = {
  'GET/example/1574387719563': (state: reduxLib.IState) => {
    type Res = IResponseTypes['GET/example/1574387719563'];
    return reduxLib.getRapperDataSelector<TRapperStoreKey, Res>(state, 'GET/example/1574387719563');
  },
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
  'GET/group/:groupId/member/:memberId': (state: reduxLib.IState) => {
    type Res = IResponseTypes['GET/group/:groupId/member/:memberId'];
    return reduxLib.getRapperDataSelector<TRapperStoreKey, Res>(
      state,
      'GET/group/:groupId/member/:memberId',
    );
  },
  'GET/useAPI': (state: reduxLib.IState) => {
    type Res = IResponseTypes['GET/useAPI'];
    return reduxLib.getRapperDataSelector<TRapperStoreKey, Res>(state, 'GET/useAPI');
  },
};

export const rapperActions = RequestTypes || [];
