/* eslint-disable */

/**
 * 本文件由 Rapper 同步 Rap 平台接口，自动生成，请勿修改
 * Rap仓库 地址: https://rap2.taobao.org/repository/editor?id=237514
 */

import { useSelector } from 'react-redux';
import { IModels, IResponseTypes } from './request';
import { dispatchAction, useResponseData, connectGetResponse, IState } from './lib';

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
};

/** store中存储的数据结构 */
interface IRapperStore {
  $$rapperResponseData: {
    'GET/example/1574387719563': Array<{
      request: IModels['GET/example/1574387719563']['Req'];
      response: IModels['GET/example/1574387719563']['Res'];
      id: number;
      requestTime: number;
      responseTime: number;
      isPending: boolean;
    }>;

    'GET/testGet': Array<{
      request: IModels['GET/testGet']['Req'];
      response: IModels['GET/testGet']['Res'];
      id: number;
      requestTime: number;
      responseTime: number;
      isPending: boolean;
    }>;

    'POST/testPost': Array<{
      request: IModels['POST/testPost']['Req'];
      response: IModels['POST/testPost']['Res'];
      id: number;
      requestTime: number;
      responseTime: number;
      isPending: boolean;
    }>;

    'POST/testFormData': Array<{
      request: IModels['POST/testFormData']['Req'];
      response: IModels['POST/testFormData']['Res'];
      id: number;
      requestTime: number;
      responseTime: number;
      isPending: boolean;
    }>;
  };
}

export const useResponse = {
  /**
   * 接口名：示例接口
   * Rap 地址: https://rap2.taobao.org/repository/editor?id=237514&mod=340613&itf=1376440
   */
  /* tslint:disable */
  'GET/example/1574387719563': function useData(
    filter?:
      | { request?: IModels['GET/example/1574387719563']['Req'] }
      | {
          (
            storeData: IRapperStore['$$rapperResponseData']['GET/example/1574387719563'][0],
          ): boolean;
        },
  ) {
    type M = keyof IRapperStore['$$rapperResponseData'];
    type Req = IModels['GET/example/1574387719563']['Req'];
    type Item = IRapperStore['$$rapperResponseData']['GET/example/1574387719563'][0];
    type Res = IResponseTypes['GET/example/1574387719563'];
    return useResponseData<IRapperStore, M, Req, Item>('GET/example/1574387719563', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number;
        /** 是否正在请求中 */
        isPending: boolean;
        /** 请求错误信息 */
        errorMessage?: string;
      },
    ];
  },

  /**
   * 接口名：GET请求
   * Rap 地址: https://rap2.taobao.org/repository/editor?id=237514&mod=340613&itf=1377102
   */
  /* tslint:disable */
  'GET/testGet': function useData(
    filter?:
      | { request?: IModels['GET/testGet']['Req'] }
      | { (storeData: IRapperStore['$$rapperResponseData']['GET/testGet'][0]): boolean },
  ) {
    type M = keyof IRapperStore['$$rapperResponseData'];
    type Req = IModels['GET/testGet']['Req'];
    type Item = IRapperStore['$$rapperResponseData']['GET/testGet'][0];
    type Res = IResponseTypes['GET/testGet'];
    return useResponseData<IRapperStore, M, Req, Item>('GET/testGet', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number;
        /** 是否正在请求中 */
        isPending: boolean;
        /** 请求错误信息 */
        errorMessage?: string;
      },
    ];
  },

  /**
   * 接口名：POST 请求
   * Rap 地址: https://rap2.taobao.org/repository/editor?id=237514&mod=340613&itf=1377105
   */
  /* tslint:disable */
  'POST/testPost': function useData(
    filter?:
      | { request?: IModels['POST/testPost']['Req'] }
      | { (storeData: IRapperStore['$$rapperResponseData']['POST/testPost'][0]): boolean },
  ) {
    type M = keyof IRapperStore['$$rapperResponseData'];
    type Req = IModels['POST/testPost']['Req'];
    type Item = IRapperStore['$$rapperResponseData']['POST/testPost'][0];
    type Res = IResponseTypes['POST/testPost'];
    return useResponseData<IRapperStore, M, Req, Item>('POST/testPost', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number;
        /** 是否正在请求中 */
        isPending: boolean;
        /** 请求错误信息 */
        errorMessage?: string;
      },
    ];
  },

  /**
   * 接口名：form表单提交请求
   * Rap 地址: https://rap2.taobao.org/repository/editor?id=237514&mod=340613&itf=1377106
   */
  /* tslint:disable */
  'POST/testFormData': function useData(
    filter?:
      | { request?: IModels['POST/testFormData']['Req'] }
      | { (storeData: IRapperStore['$$rapperResponseData']['POST/testFormData'][0]): boolean },
  ) {
    type M = keyof IRapperStore['$$rapperResponseData'];
    type Req = IModels['POST/testFormData']['Req'];
    type Item = IRapperStore['$$rapperResponseData']['POST/testFormData'][0];
    type Res = IResponseTypes['POST/testFormData'];
    return useResponseData<IRapperStore, M, Req, Item>('POST/testFormData', filter) as [
      Res | undefined,
      {
        /** 本次请求的唯一id */
        id: number;
        /** 是否正在请求中 */
        isPending: boolean;
        /** 请求错误信息 */
        errorMessage?: string;
      },
    ];
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
      return selectedState as Array<IResponseTypes['GET/example/1574387719563']>;
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
      return selectedState as Array<IResponseTypes['GET/testGet']>;
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
      return selectedState as Array<IResponseTypes['POST/testPost']>;
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
      return selectedState as Array<IResponseTypes['POST/testFormData']>;
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
};

export const rapperSelector = {
  'GET/example/1574387719563': (state: IState) => {
    const responseData = state['$$rapperResponseData']['GET/example/1574387719563'];
    return connectGetResponse(responseData) as
      | IResponseTypes['GET/example/1574387719563']
      | undefined;
  },
  'GET/testGet': (state: IState) => {
    const responseData = state['$$rapperResponseData']['GET/testGet'];
    return connectGetResponse(responseData) as IResponseTypes['GET/testGet'] | undefined;
  },
  'POST/testPost': (state: IState) => {
    const responseData = state['$$rapperResponseData']['POST/testPost'];
    return connectGetResponse(responseData) as IResponseTypes['POST/testPost'] | undefined;
  },
  'POST/testFormData': (state: IState) => {
    const responseData = state['$$rapperResponseData']['POST/testFormData'];
    return connectGetResponse(responseData) as IResponseTypes['POST/testFormData'] | undefined;
  },
};

export const rapperActions = RequestTypes || [];
