/* md5: 871e205cd0f0a34d3d2d3342a848ee90 */
/* Rap仓库id: 237514 */
/* Rapper版本: 1.2.0-beta.2 */
/* eslint-disable */
/* tslint:disable */
// @ts-nocheck

/**
 * 本文件由 Rapper 同步 Rap 平台接口，自动生成，请勿修改
 * Rap仓库 地址: http://rap2.taobao.org/repository/editor?id=237514
 */

import { useSelector } from 'react-redux';
import { IModels, IResponseTypes } from './request';
import * as reduxLib from '@ali/rap/runtime/reduxLib';
import { fetch } from './index';

/** 请求types */
export const RequestTypes = {
  'GET/testGet': ['GET/testGet_REQUEST', 'GET/testGet_SUCCESS', 'GET/testGet_FAILURE'],

  'GET/testGet2': ['GET/testGet2_REQUEST', 'GET/testGet2_SUCCESS', 'GET/testGet2_FAILURE'],

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

  'GET/useAPI/request': [
    'GET/useAPI/request_REQUEST',
    'GET/useAPI/request_SUCCESS',
    'GET/useAPI/request_FAILURE',
  ],

  'GET/useAPI/multiple-tab': [
    'GET/useAPI/multiple-tab_REQUEST',
    'GET/useAPI/multiple-tab_SUCCESS',
    'GET/useAPI/multiple-tab_FAILURE',
  ],

  'POST/test/root': ['POST/test/root_REQUEST', 'POST/test/root_SUCCESS', 'POST/test/root_FAILURE'],

  'POST/test/debounce': [
    'POST/test/debounce_REQUEST',
    'POST/test/debounce_SUCCESS',
    'POST/test/debounce_FAILURE',
  ],

  'GET/example/1575626712231': [
    'GET/example/1575626712231_REQUEST',
    'GET/example/1575626712231_SUCCESS',
    'GET/example/1575626712231_FAILURE',
  ],
};

/** store中存储的数据结构 */
interface IRapperStore {
  'GET/testGet': Array<
    reduxLib.IInterfaceInfo & {
      request: IModels['GET/testGet']['Req'];
      response: IResponseTypes['GET/testGet'];
    }
  >;

  'GET/testGet2': Array<
    reduxLib.IInterfaceInfo & {
      request: IModels['GET/testGet2']['Req'];
      response: IResponseTypes['GET/testGet2'];
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

  'GET/useAPI/request': Array<
    reduxLib.IInterfaceInfo & {
      request: IModels['GET/useAPI/request']['Req'];
      response: IResponseTypes['GET/useAPI/request'];
    }
  >;

  'GET/useAPI/multiple-tab': Array<
    reduxLib.IInterfaceInfo & {
      request: IModels['GET/useAPI/multiple-tab']['Req'];
      response: IResponseTypes['GET/useAPI/multiple-tab'];
    }
  >;

  'POST/test/root': Array<
    reduxLib.IInterfaceInfo & {
      request: IModels['POST/test/root']['Req'];
      response: IResponseTypes['POST/test/root'];
    }
  >;

  'POST/test/debounce': Array<
    reduxLib.IInterfaceInfo & {
      request: IModels['POST/test/debounce']['Req'];
      response: IResponseTypes['POST/test/debounce'];
    }
  >;

  'GET/example/1575626712231': Array<
    reduxLib.IInterfaceInfo & {
      request: IModels['GET/example/1575626712231']['Req'];
      response: IResponseTypes['GET/example/1575626712231'];
    }
  >;
}
export type TRapperStoreKey = keyof IRapperStore;

export const useResponse = {
  /**
   * 接口名：GET请求
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=237514&mod=340613&itf=1377102
   */
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
   * 接口名：GET请求副本
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=237514&mod=340613&itf=1904966
   */
  'GET/testGet2': function useData(
    filter?:
      | { request?: IModels['GET/testGet2']['Req'] }
      | { (storeData: IRapperStore['GET/testGet2'][0]): boolean },
  ) {
    type Req = IModels['GET/testGet2']['Req'];
    type Item = IRapperStore['GET/testGet2'][0];
    type Res = IResponseTypes['GET/testGet2'];
    return reduxLib.useResponseData<TRapperStoreKey, Req, Res | undefined, Item>(
      'GET/testGet2',
      filter,
    );
  },

  /**
   * 接口名：POST 请求
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=237514&mod=340613&itf=1377105
   */
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

  /**
   * 接口名：useAPI-request
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=237514&mod=340613&itf=1670435
   */
  'GET/useAPI/request': function useData(
    filter?:
      | { request?: IModels['GET/useAPI/request']['Req'] }
      | { (storeData: IRapperStore['GET/useAPI/request'][0]): boolean },
  ) {
    type Req = IModels['GET/useAPI/request']['Req'];
    type Item = IRapperStore['GET/useAPI/request'][0];
    type Res = IResponseTypes['GET/useAPI/request'];
    return reduxLib.useResponseData<TRapperStoreKey, Req, Res | undefined, Item>(
      'GET/useAPI/request',
      filter,
    );
  },

  /**
   * 接口名：useAPI-多tab
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=237514&mod=340613&itf=1681938
   */
  'GET/useAPI/multiple-tab': function useData(
    filter?:
      | { request?: IModels['GET/useAPI/multiple-tab']['Req'] }
      | { (storeData: IRapperStore['GET/useAPI/multiple-tab'][0]): boolean },
  ) {
    type Req = IModels['GET/useAPI/multiple-tab']['Req'];
    type Item = IRapperStore['GET/useAPI/multiple-tab'][0];
    type Res = IResponseTypes['GET/useAPI/multiple-tab'];
    return reduxLib.useResponseData<TRapperStoreKey, Req, Res | undefined, Item>(
      'GET/useAPI/multiple-tab',
      filter,
    );
  },

  /**
   * 接口名：测试root
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=237514&mod=340613&itf=1775969
   */
  'POST/test/root': function useData(
    filter?:
      | { request?: IModels['POST/test/root']['Req'] }
      | { (storeData: IRapperStore['POST/test/root'][0]): boolean },
  ) {
    type Req = IModels['POST/test/root']['Req'];
    type Item = IRapperStore['POST/test/root'][0];
    type Res = IResponseTypes['POST/test/root'];
    return reduxLib.useResponseData<TRapperStoreKey, Req, Res | undefined, Item>(
      'POST/test/root',
      filter,
    );
  },

  /**
   * 接口名：测试debounce
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=237514&mod=340613&itf=1921502
   */
  'POST/test/debounce': function useData(
    filter?:
      | { request?: IModels['POST/test/debounce']['Req'] }
      | { (storeData: IRapperStore['POST/test/debounce'][0]): boolean },
  ) {
    type Req = IModels['POST/test/debounce']['Req'];
    type Item = IRapperStore['POST/test/debounce'][0];
    type Res = IResponseTypes['POST/test/debounce'];
    return reduxLib.useResponseData<TRapperStoreKey, Req, Res | undefined, Item>(
      'POST/test/debounce',
      filter,
    );
  },

  /**
   * 接口名：示例接口
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=239096&mod=344548&itf=1399160
   */
  'GET/example/1575626712231': function useData(
    filter?:
      | { request?: IModels['GET/example/1575626712231']['Req'] }
      | { (storeData: IRapperStore['GET/example/1575626712231'][0]): boolean },
  ) {
    type Req = IModels['GET/example/1575626712231']['Req'];
    type Item = IRapperStore['GET/example/1575626712231'][0];
    type Res = IResponseTypes['GET/example/1575626712231'];
    return reduxLib.useResponseData<TRapperStoreKey, Req, Res | undefined, Item>(
      'GET/example/1575626712231',
      filter,
    );
  },
};

export const useAPI = {
  /**
   * 接口名：GET请求
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=237514&mod=340613&itf=1377102
   */
  'GET/testGet': function useData(
    requestParams?: IModels['GET/testGet']['Req'],
    extra?: reduxLib.IUseAPIExtra<IModels['GET/testGet']['Req']>,
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
   * 接口名：GET请求副本
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=237514&mod=340613&itf=1904966
   */
  'GET/testGet2': function useData(
    requestParams?: IModels['GET/testGet2']['Req'],
    extra?: reduxLib.IUseAPIExtra<IModels['GET/testGet2']['Req']>,
  ) {
    type Req = IModels['GET/testGet2']['Req'];
    type Res = IResponseTypes['GET/testGet2'];
    type IFetcher = typeof fetch['GET/testGet2'];
    return reduxLib.useAPICommon<TRapperStoreKey, Req, Res | undefined, IFetcher>({
      modelName: 'GET/testGet2',
      fetcher: fetch['GET/testGet2'],
      requestParams,
      extra,
    });
  },

  /**
   * 接口名：POST 请求
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=237514&mod=340613&itf=1377105
   */
  'POST/testPost': function useData(
    requestParams?: IModels['POST/testPost']['Req'],
    extra?: reduxLib.IUseAPIExtra<IModels['POST/testPost']['Req']>,
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
  'POST/testFormData': function useData(
    requestParams?: IModels['POST/testFormData']['Req'],
    extra?: reduxLib.IUseAPIExtra<IModels['POST/testFormData']['Req']>,
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
  'GET/group/:groupId/member/{memberId}': function useData(
    requestParams?: IModels['GET/group/:groupId/member/{memberId}']['Req'],
    extra?: reduxLib.IUseAPIExtra<IModels['GET/group/:groupId/member/{memberId}']['Req']>,
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
  'GET/useAPI': function useData(
    requestParams?: IModels['GET/useAPI']['Req'],
    extra?: reduxLib.IUseAPIExtra<IModels['GET/useAPI']['Req']>,
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

  /**
   * 接口名：useAPI-request
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=237514&mod=340613&itf=1670435
   */
  'GET/useAPI/request': function useData(
    requestParams?: IModels['GET/useAPI/request']['Req'],
    extra?: reduxLib.IUseAPIExtra<IModels['GET/useAPI/request']['Req']>,
  ) {
    type Req = IModels['GET/useAPI/request']['Req'];
    type Res = IResponseTypes['GET/useAPI/request'];
    type IFetcher = typeof fetch['GET/useAPI/request'];
    return reduxLib.useAPICommon<TRapperStoreKey, Req, Res | undefined, IFetcher>({
      modelName: 'GET/useAPI/request',
      fetcher: fetch['GET/useAPI/request'],
      requestParams,
      extra,
    });
  },

  /**
   * 接口名：useAPI-多tab
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=237514&mod=340613&itf=1681938
   */
  'GET/useAPI/multiple-tab': function useData(
    requestParams?: IModels['GET/useAPI/multiple-tab']['Req'],
    extra?: reduxLib.IUseAPIExtra<IModels['GET/useAPI/multiple-tab']['Req']>,
  ) {
    type Req = IModels['GET/useAPI/multiple-tab']['Req'];
    type Res = IResponseTypes['GET/useAPI/multiple-tab'];
    type IFetcher = typeof fetch['GET/useAPI/multiple-tab'];
    return reduxLib.useAPICommon<TRapperStoreKey, Req, Res | undefined, IFetcher>({
      modelName: 'GET/useAPI/multiple-tab',
      fetcher: fetch['GET/useAPI/multiple-tab'],
      requestParams,
      extra,
    });
  },

  /**
   * 接口名：测试root
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=237514&mod=340613&itf=1775969
   */
  'POST/test/root': function useData(
    requestParams?: IModels['POST/test/root']['Req'],
    extra?: reduxLib.IUseAPIExtra<IModels['POST/test/root']['Req']>,
  ) {
    type Req = IModels['POST/test/root']['Req'];
    type Res = IResponseTypes['POST/test/root'];
    type IFetcher = typeof fetch['POST/test/root'];
    return reduxLib.useAPICommon<TRapperStoreKey, Req, Res | undefined, IFetcher>({
      modelName: 'POST/test/root',
      fetcher: fetch['POST/test/root'],
      requestParams,
      extra,
    });
  },

  /**
   * 接口名：测试debounce
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=237514&mod=340613&itf=1921502
   */
  'POST/test/debounce': function useData(
    requestParams?: IModels['POST/test/debounce']['Req'],
    extra?: reduxLib.IUseAPIExtra<IModels['POST/test/debounce']['Req']>,
  ) {
    type Req = IModels['POST/test/debounce']['Req'];
    type Res = IResponseTypes['POST/test/debounce'];
    type IFetcher = typeof fetch['POST/test/debounce'];
    return reduxLib.useAPICommon<TRapperStoreKey, Req, Res | undefined, IFetcher>({
      modelName: 'POST/test/debounce',
      fetcher: fetch['POST/test/debounce'],
      requestParams,
      extra,
    });
  },

  /**
   * 接口名：示例接口
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=239096&mod=344548&itf=1399160
   */
  'GET/example/1575626712231': function useData(
    requestParams?: IModels['GET/example/1575626712231']['Req'],
    extra?: reduxLib.IUseAPIExtra<IModels['GET/example/1575626712231']['Req']>,
  ) {
    type Req = IModels['GET/example/1575626712231']['Req'];
    type Res = IResponseTypes['GET/example/1575626712231'];
    type IFetcher = typeof fetch['GET/example/1575626712231'];
    return reduxLib.useAPICommon<TRapperStoreKey, Req, Res | undefined, IFetcher>({
      modelName: 'GET/example/1575626712231',
      fetcher: fetch['GET/example/1575626712231'],
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
   * 接口名：GET请求副本
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=237514&mod=340613&itf=1904966
   */
  'GET/testGet2': function useData() {
    return useSelector((state: reduxLib.IState) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['GET/testGet2']) || [];
      type TReturnItem = reduxLib.IInterfaceInfo & {
        request?: IModels['GET/testGet2']['Req'];
        response?: IResponseTypes['GET/testGet2'];
      };
      return selectedState as Array<TReturnItem>;
    });
  },

  /**
   * 接口名：POST 请求
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=237514&mod=340613&itf=1377105
   */
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

  /**
   * 接口名：useAPI-request
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=237514&mod=340613&itf=1670435
   */
  'GET/useAPI/request': function useData() {
    return useSelector((state: reduxLib.IState) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['GET/useAPI/request']) ||
        [];
      type TReturnItem = reduxLib.IInterfaceInfo & {
        request?: IModels['GET/useAPI/request']['Req'];
        response?: IResponseTypes['GET/useAPI/request'];
      };
      return selectedState as Array<TReturnItem>;
    });
  },

  /**
   * 接口名：useAPI-多tab
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=237514&mod=340613&itf=1681938
   */
  'GET/useAPI/multiple-tab': function useData() {
    return useSelector((state: reduxLib.IState) => {
      const selectedState =
        (state['$$rapperResponseData'] &&
          state['$$rapperResponseData']['GET/useAPI/multiple-tab']) ||
        [];
      type TReturnItem = reduxLib.IInterfaceInfo & {
        request?: IModels['GET/useAPI/multiple-tab']['Req'];
        response?: IResponseTypes['GET/useAPI/multiple-tab'];
      };
      return selectedState as Array<TReturnItem>;
    });
  },

  /**
   * 接口名：测试root
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=237514&mod=340613&itf=1775969
   */
  'POST/test/root': function useData() {
    return useSelector((state: reduxLib.IState) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['POST/test/root']) || [];
      type TReturnItem = reduxLib.IInterfaceInfo & {
        request?: IModels['POST/test/root']['Req'];
        response?: IResponseTypes['POST/test/root'];
      };
      return selectedState as Array<TReturnItem>;
    });
  },

  /**
   * 接口名：测试debounce
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=237514&mod=340613&itf=1921502
   */
  'POST/test/debounce': function useData() {
    return useSelector((state: reduxLib.IState) => {
      const selectedState =
        (state['$$rapperResponseData'] && state['$$rapperResponseData']['POST/test/debounce']) ||
        [];
      type TReturnItem = reduxLib.IInterfaceInfo & {
        request?: IModels['POST/test/debounce']['Req'];
        response?: IResponseTypes['POST/test/debounce'];
      };
      return selectedState as Array<TReturnItem>;
    });
  },

  /**
   * 接口名：示例接口
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=239096&mod=344548&itf=1399160
   */
  'GET/example/1575626712231': function useData() {
    return useSelector((state: reduxLib.IState) => {
      const selectedState =
        (state['$$rapperResponseData'] &&
          state['$$rapperResponseData']['GET/example/1575626712231']) ||
        [];
      type TReturnItem = reduxLib.IInterfaceInfo & {
        request?: IModels['GET/example/1575626712231']['Req'];
        response?: IResponseTypes['GET/example/1575626712231'];
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
   * 接口名：GET请求副本
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=237514&mod=340613&itf=1904966
   */
  'GET/testGet2': (): void => {
    reduxLib.dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: { 'GET/testGet2': undefined },
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

  /**
   * 接口名：useAPI-request
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=237514&mod=340613&itf=1670435
   */
  'GET/useAPI/request': (): void => {
    reduxLib.dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: { 'GET/useAPI/request': undefined },
    });
  },

  /**
   * 接口名：useAPI-多tab
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=237514&mod=340613&itf=1681938
   */
  'GET/useAPI/multiple-tab': (): void => {
    reduxLib.dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: { 'GET/useAPI/multiple-tab': undefined },
    });
  },

  /**
   * 接口名：测试root
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=237514&mod=340613&itf=1775969
   */
  'POST/test/root': (): void => {
    reduxLib.dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: { 'POST/test/root': undefined },
    });
  },

  /**
   * 接口名：测试debounce
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=237514&mod=340613&itf=1921502
   */
  'POST/test/debounce': (): void => {
    reduxLib.dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: { 'POST/test/debounce': undefined },
    });
  },

  /**
   * 接口名：示例接口
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=239096&mod=344548&itf=1399160
   */
  'GET/example/1575626712231': (): void => {
    reduxLib.dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: { 'GET/example/1575626712231': undefined },
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
  'GET/testGet2': (
    state: reduxLib.IState,
    filter?:
      | { request?: IModels['GET/testGet2']['Req'] }
      | { (storeData: IRapperStore['GET/testGet2'][0]): boolean },
  ) => {
    type Req = IModels['GET/testGet2']['Req'];
    type Res = IResponseTypes['GET/testGet2'];
    type Item = IRapperStore['GET/testGet2'][0];
    return reduxLib.getResponseData<TRapperStoreKey, Req, Res | undefined, Item>(
      state,
      'GET/testGet2',
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
  'GET/useAPI/request': (
    state: reduxLib.IState,
    filter?:
      | { request?: IModels['GET/useAPI/request']['Req'] }
      | { (storeData: IRapperStore['GET/useAPI/request'][0]): boolean },
  ) => {
    type Req = IModels['GET/useAPI/request']['Req'];
    type Res = IResponseTypes['GET/useAPI/request'];
    type Item = IRapperStore['GET/useAPI/request'][0];
    return reduxLib.getResponseData<TRapperStoreKey, Req, Res | undefined, Item>(
      state,
      'GET/useAPI/request',
      filter,
    );
  },
  'GET/useAPI/multiple-tab': (
    state: reduxLib.IState,
    filter?:
      | { request?: IModels['GET/useAPI/multiple-tab']['Req'] }
      | { (storeData: IRapperStore['GET/useAPI/multiple-tab'][0]): boolean },
  ) => {
    type Req = IModels['GET/useAPI/multiple-tab']['Req'];
    type Res = IResponseTypes['GET/useAPI/multiple-tab'];
    type Item = IRapperStore['GET/useAPI/multiple-tab'][0];
    return reduxLib.getResponseData<TRapperStoreKey, Req, Res | undefined, Item>(
      state,
      'GET/useAPI/multiple-tab',
      filter,
    );
  },
  'POST/test/root': (
    state: reduxLib.IState,
    filter?:
      | { request?: IModels['POST/test/root']['Req'] }
      | { (storeData: IRapperStore['POST/test/root'][0]): boolean },
  ) => {
    type Req = IModels['POST/test/root']['Req'];
    type Res = IResponseTypes['POST/test/root'];
    type Item = IRapperStore['POST/test/root'][0];
    return reduxLib.getResponseData<TRapperStoreKey, Req, Res | undefined, Item>(
      state,
      'POST/test/root',
      filter,
    );
  },
  'POST/test/debounce': (
    state: reduxLib.IState,
    filter?:
      | { request?: IModels['POST/test/debounce']['Req'] }
      | { (storeData: IRapperStore['POST/test/debounce'][0]): boolean },
  ) => {
    type Req = IModels['POST/test/debounce']['Req'];
    type Res = IResponseTypes['POST/test/debounce'];
    type Item = IRapperStore['POST/test/debounce'][0];
    return reduxLib.getResponseData<TRapperStoreKey, Req, Res | undefined, Item>(
      state,
      'POST/test/debounce',
      filter,
    );
  },
  'GET/example/1575626712231': (
    state: reduxLib.IState,
    filter?:
      | { request?: IModels['GET/example/1575626712231']['Req'] }
      | { (storeData: IRapperStore['GET/example/1575626712231'][0]): boolean },
  ) => {
    type Req = IModels['GET/example/1575626712231']['Req'];
    type Res = IResponseTypes['GET/example/1575626712231'];
    type Item = IRapperStore['GET/example/1575626712231'][0];
    return reduxLib.getResponseData<TRapperStoreKey, Req, Res | undefined, Item>(
      state,
      'GET/example/1575626712231',
      filter,
    );
  },
};

export const rapperDataSelector = {
  'GET/testGet': (state: reduxLib.IState) => {
    type Res = IResponseTypes['GET/testGet'];
    return reduxLib.getRapperDataSelector<TRapperStoreKey, Res>(state, 'GET/testGet');
  },
  'GET/testGet2': (state: reduxLib.IState) => {
    type Res = IResponseTypes['GET/testGet2'];
    return reduxLib.getRapperDataSelector<TRapperStoreKey, Res>(state, 'GET/testGet2');
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
  'GET/useAPI/request': (state: reduxLib.IState) => {
    type Res = IResponseTypes['GET/useAPI/request'];
    return reduxLib.getRapperDataSelector<TRapperStoreKey, Res>(state, 'GET/useAPI/request');
  },
  'GET/useAPI/multiple-tab': (state: reduxLib.IState) => {
    type Res = IResponseTypes['GET/useAPI/multiple-tab'];
    return reduxLib.getRapperDataSelector<TRapperStoreKey, Res>(state, 'GET/useAPI/multiple-tab');
  },
  'POST/test/root': (state: reduxLib.IState) => {
    type Res = IResponseTypes['POST/test/root'];
    return reduxLib.getRapperDataSelector<TRapperStoreKey, Res>(state, 'POST/test/root');
  },
  'POST/test/debounce': (state: reduxLib.IState) => {
    type Res = IResponseTypes['POST/test/debounce'];
    return reduxLib.getRapperDataSelector<TRapperStoreKey, Res>(state, 'POST/test/debounce');
  },
  'GET/example/1575626712231': (state: reduxLib.IState) => {
    type Res = IResponseTypes['GET/example/1575626712231'];
    return reduxLib.getRapperDataSelector<TRapperStoreKey, Res>(state, 'GET/example/1575626712231');
  },
};

export const rapperActions = RequestTypes || [];
