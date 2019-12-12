/* md5: e593061a5bef747f787fb5ee49efccb8 */
/* Rap仓库id: 237514 */
/* eslint-disable */
/* tslint:disable */

/**
 * 本文件由 Rapper 同步 Rap 平台接口，自动生成，请勿修改
 * Rap仓库 地址: https://rap2.taobao.org/repository/editor?id=237514
 */

import { useSelector } from 'react-redux';
import { IModels, IResponseTypes } from './request';
import {
  dispatchAction,
  useResponseData,
  getResponseData,
  getRapperDataSelector,
  IState,
  IInterfaceInfo,
} from './lib';

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
};

/** store中存储的数据结构 */
interface IRapperStore {
  'GET/example/1574387719563': Array<
    IInterfaceInfo & {
      request: IModels['GET/example/1574387719563']['Req'];
      response: IModels['GET/example/1574387719563']['Res'];
    }
  >;

  'GET/testGet': Array<
    IInterfaceInfo & {
      request: IModels['GET/testGet']['Req'];
      response: IModels['GET/testGet']['Res'];
    }
  >;

  'POST/testPost': Array<
    IInterfaceInfo & {
      request: IModels['POST/testPost']['Req'];
      response: IModels['POST/testPost']['Res'];
    }
  >;

  'POST/testFormData': Array<
    IInterfaceInfo & {
      request: IModels['POST/testFormData']['Req'];
      response: IModels['POST/testFormData']['Res'];
    }
  >;

  'GET/group/:groupId/member/:memberId': Array<
    IInterfaceInfo & {
      request: IModels['GET/group/:groupId/member/:memberId']['Req'];
      response: IModels['GET/group/:groupId/member/:memberId']['Res'];
    }
  >;
}
type TRapperStoreKey = keyof IRapperStore;

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
    return useResponseData<TRapperStoreKey, Req, Res, Item>('GET/example/1574387719563', filter);
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
    return useResponseData<TRapperStoreKey, Req, Res, Item>('GET/testGet', filter);
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
    return useResponseData<TRapperStoreKey, Req, Res, Item>('POST/testPost', filter);
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
    return useResponseData<TRapperStoreKey, Req, Res, Item>('POST/testFormData', filter);
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
    return useResponseData<TRapperStoreKey, Req, Res, Item>(
      'GET/group/:groupId/member/:memberId',
      filter,
    );
  },
};

export const useAllResponse = {
  /**
   * 接口名：示例接口
   * Rap 地址: https://rap2.taobao.org/repository/editor?id=237514&mod=340613&itf=1376440
   */
  /* tslint:disable */
  'GET/example/1574387719563': function useData() {
    return useSelector((state: IState) => {
      const selectedState =
        (state['$$rapperResponseData'] &&
          state['$$rapperResponseData']['GET/example/1574387719563']) ||
        [];
      type TReturnItem = IInterfaceInfo & {
        request?: IModels['GET/example/1574387719563']['Req'];
        response?: IModels['GET/example/1574387719563']['Res'];
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
    return useSelector((state: IState) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['GET/testGet']) || [];
      type TReturnItem = IInterfaceInfo & {
        request?: IModels['GET/example/1574387719563']['Req'];
        response?: IModels['GET/example/1574387719563']['Res'];
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
    return useSelector((state: IState) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['POST/testPost']) || [];
      type TReturnItem = IInterfaceInfo & {
        request?: IModels['GET/example/1574387719563']['Req'];
        response?: IModels['GET/example/1574387719563']['Res'];
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
    return useSelector((state: IState) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['POST/testFormData']) || [];
      type TReturnItem = IInterfaceInfo & {
        request?: IModels['GET/example/1574387719563']['Req'];
        response?: IModels['GET/example/1574387719563']['Res'];
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
    return useSelector((state: IState) => {
      const selectedState =
        (state['$$rapperResponseData'] &&
          state['$$rapperResponseData']['GET/group/:groupId/member/:memberId']) ||
        [];
      type TReturnItem = IInterfaceInfo & {
        request?: IModels['GET/example/1574387719563']['Req'];
        response?: IModels['GET/example/1574387719563']['Res'];
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
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: { 'GET/example/1574387719563': undefined },
    });
  },

  /**
   * 接口名：GET请求
   * Rap 地址: https://rap2.taobao.org/repository/editor?id=237514&mod=340613&itf=1377102
   */
  'GET/testGet': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: { 'GET/testGet': undefined },
    });
  },

  /**
   * 接口名：POST 请求
   * Rap 地址: https://rap2.taobao.org/repository/editor?id=237514&mod=340613&itf=1377105
   */
  'POST/testPost': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: { 'POST/testPost': undefined },
    });
  },

  /**
   * 接口名：form表单提交请求
   * Rap 地址: https://rap2.taobao.org/repository/editor?id=237514&mod=340613&itf=1377106
   */
  'POST/testFormData': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: { 'POST/testFormData': undefined },
    });
  },

  /**
   * 接口名：RESTful 接口
   * Rap 地址: https://rap2.taobao.org/repository/editor?id=237514&mod=340613&itf=1380746
   */
  'GET/group/:groupId/member/:memberId': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: { 'GET/group/:groupId/member/:memberId': undefined },
    });
  },
};

export const rapperBaseSelector = {
  'GET/example/1574387719563': (
    state: IState,
    filter?:
      | { request?: IModels['GET/example/1574387719563']['Req'] }
      | { (storeData: IRapperStore['GET/example/1574387719563'][0]): boolean },
  ) => {
    type Req = IModels['GET/example/1574387719563']['Req'];
    type Res = IResponseTypes['GET/example/1574387719563'];
    type Item = IRapperStore['GET/example/1574387719563'][0];
    return getResponseData<TRapperStoreKey, Req, Res, Item>(
      state,
      'GET/example/1574387719563',
      filter,
    );
  },
  'GET/testGet': (
    state: IState,
    filter?:
      | { request?: IModels['GET/testGet']['Req'] }
      | { (storeData: IRapperStore['GET/testGet'][0]): boolean },
  ) => {
    type Req = IModels['GET/testGet']['Req'];
    type Res = IResponseTypes['GET/testGet'];
    type Item = IRapperStore['GET/testGet'][0];
    return getResponseData<TRapperStoreKey, Req, Res, Item>(state, 'GET/testGet', filter);
  },
  'POST/testPost': (
    state: IState,
    filter?:
      | { request?: IModels['POST/testPost']['Req'] }
      | { (storeData: IRapperStore['POST/testPost'][0]): boolean },
  ) => {
    type Req = IModels['POST/testPost']['Req'];
    type Res = IResponseTypes['POST/testPost'];
    type Item = IRapperStore['POST/testPost'][0];
    return getResponseData<TRapperStoreKey, Req, Res, Item>(state, 'POST/testPost', filter);
  },
  'POST/testFormData': (
    state: IState,
    filter?:
      | { request?: IModels['POST/testFormData']['Req'] }
      | { (storeData: IRapperStore['POST/testFormData'][0]): boolean },
  ) => {
    type Req = IModels['POST/testFormData']['Req'];
    type Res = IResponseTypes['POST/testFormData'];
    type Item = IRapperStore['POST/testFormData'][0];
    return getResponseData<TRapperStoreKey, Req, Res, Item>(state, 'POST/testFormData', filter);
  },
  'GET/group/:groupId/member/:memberId': (
    state: IState,
    filter?:
      | { request?: IModels['GET/group/:groupId/member/:memberId']['Req'] }
      | { (storeData: IRapperStore['GET/group/:groupId/member/:memberId'][0]): boolean },
  ) => {
    type Req = IModels['GET/group/:groupId/member/:memberId']['Req'];
    type Res = IResponseTypes['GET/group/:groupId/member/:memberId'];
    type Item = IRapperStore['GET/group/:groupId/member/:memberId'][0];
    return getResponseData<TRapperStoreKey, Req, Res, Item>(
      state,
      'GET/group/:groupId/member/:memberId',
      filter,
    );
  },
};

export const rapperDataSelector = {
  'GET/example/1574387719563': (state: IState) => {
    type Res = IResponseTypes['GET/example/1574387719563'];
    return getRapperDataSelector<TRapperStoreKey, Res>(state, 'GET/example/1574387719563');
  },
  'GET/testGet': (state: IState) => {
    type Res = IResponseTypes['GET/testGet'];
    return getRapperDataSelector<TRapperStoreKey, Res>(state, 'GET/testGet');
  },
  'POST/testPost': (state: IState) => {
    type Res = IResponseTypes['POST/testPost'];
    return getRapperDataSelector<TRapperStoreKey, Res>(state, 'POST/testPost');
  },
  'POST/testFormData': (state: IState) => {
    type Res = IResponseTypes['POST/testFormData'];
    return getRapperDataSelector<TRapperStoreKey, Res>(state, 'POST/testFormData');
  },
  'GET/group/:groupId/member/:memberId': (state: IState) => {
    type Res = IResponseTypes['GET/group/:groupId/member/:memberId'];
    return getRapperDataSelector<TRapperStoreKey, Res>(
      state,
      'GET/group/:groupId/member/:memberId',
    );
  },
};

export const rapperActions = RequestTypes || [];
