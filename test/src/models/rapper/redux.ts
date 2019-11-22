/* eslint-disable */

/**
 * 本文件由 Rapper 同步 Rap 平台接口，自动生成，请勿修改
 * Rap仓库 地址: https://rap2.alibaba-inc.com/repository/editor?id=3564
 */

import { useSelector } from 'react-redux';
import { IModels, IResponseTypes } from './request';
import { dispatchAction, useResponseData, connectGetResponse, IState } from './lib';

/** 请求types */
export const RequestTypes = {
  'GET/example/1565269104015': [
    'GET/example/1565269104015_REQUEST',
    'GET/example/1565269104015_SUCCESS',
    'GET/example/1565269104015_FAILURE',
  ],

  'GET/openapi/param2/1/gateway.subway/testing/adgroup/price/update$': [
    'GET/openapi/param2/1/gateway.subway/testing/adgroup/price/update$_REQUEST',
    'GET/openapi/param2/1/gateway.subway/testing/adgroup/price/update$_SUCCESS',
    'GET/openapi/param2/1/gateway.subway/testing/adgroup/price/update$_FAILURE',
  ],
};

/** store中存储的数据结构 */
interface IRapperStore {
  $$rapperResponseData: {
    'GET/example/1565269104015': Array<{
      request: IModels['GET/example/1565269104015']['Req'];
      response: IModels['GET/example/1565269104015']['Res'];
      id: number;
      requestTime: number;
      responseTime: number;
      isPending: boolean;
    }>;

    'GET/openapi/param2/1/gateway.subway/testing/adgroup/price/update$': Array<{
      request: IModels['GET/openapi/param2/1/gateway.subway/testing/adgroup/price/update$']['Req'];
      response: IModels['GET/openapi/param2/1/gateway.subway/testing/adgroup/price/update$']['Res'];
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
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3564&mod=8414&itf=80291
   */
  /* tslint:disable */
  'GET/example/1565269104015': function useData(
    filter?:
      | { request?: IModels['GET/example/1565269104015']['Req'] }
      | {
          (
            storeData: IRapperStore['$$rapperResponseData']['GET/example/1565269104015'][0],
          ): boolean;
        },
  ) {
    type M = keyof IRapperStore['$$rapperResponseData'];
    type Req = IModels['GET/example/1565269104015']['Req'];
    type Item = IRapperStore['$$rapperResponseData']['GET/example/1565269104015'][0];
    type Res = IResponseTypes['GET/example/1565269104015'];
    return useResponseData<IRapperStore, M, Req, Item>('GET/example/1565269104015', filter) as [
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
   * 接口名：智能推广-修改ad出价上限
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3564&mod=8414&itf=80292
   */
  /* tslint:disable */
  'GET/openapi/param2/1/gateway.subway/testing/adgroup/price/update$': function useData(
    filter?:
      | {
          request?: IModels['GET/openapi/param2/1/gateway.subway/testing/adgroup/price/update$']['Req'];
        }
      | {
          (
            storeData: IRapperStore['$$rapperResponseData']['GET/openapi/param2/1/gateway.subway/testing/adgroup/price/update$'][0],
          ): boolean;
        },
  ) {
    type M = keyof IRapperStore['$$rapperResponseData'];
    type Req = IModels['GET/openapi/param2/1/gateway.subway/testing/adgroup/price/update$']['Req'];
    type Item = IRapperStore['$$rapperResponseData']['GET/openapi/param2/1/gateway.subway/testing/adgroup/price/update$'][0];
    type Res = IResponseTypes['GET/openapi/param2/1/gateway.subway/testing/adgroup/price/update$'];
    return useResponseData<IRapperStore, M, Req, Item>(
      'GET/openapi/param2/1/gateway.subway/testing/adgroup/price/update$',
      filter,
    ) as [
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
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3564&mod=8414&itf=80291
   */
  /* tslint:disable */
  'GET/example/1565269104015': function useData() {
    return useSelector((state: IState) => {
      const selectedState =
        (state['$$rapperResponseData'] &&
          state['$$rapperResponseData']['GET/example/1565269104015']) ||
        [];
      return selectedState as Array<IResponseTypes['GET/example/1565269104015']>;
    });
  },

  /**
   * 接口名：智能推广-修改ad出价上限
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3564&mod=8414&itf=80292
   */
  /* tslint:disable */
  'GET/openapi/param2/1/gateway.subway/testing/adgroup/price/update$': function useData() {
    return useSelector((state: IState) => {
      const selectedState =
        (state['$$rapperResponseData'] &&
          state['$$rapperResponseData'][
            'GET/openapi/param2/1/gateway.subway/testing/adgroup/price/update$'
          ]) ||
        [];
      return selectedState as Array<
        IResponseTypes['GET/openapi/param2/1/gateway.subway/testing/adgroup/price/update$']
      >;
    });
  },
};

/** 重置接口数据 */
export const clearResponseCache = {
  /**
   * 接口名：示例接口
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3564&mod=8414&itf=80291
   */
  'GET/example/1565269104015': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: { 'GET/example/1565269104015': undefined },
    });
  },

  /**
   * 接口名：智能推广-修改ad出价上限
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3564&mod=8414&itf=80292
   */
  'GET/openapi/param2/1/gateway.subway/testing/adgroup/price/update$': (): void => {
    dispatchAction({
      type: '$$RAPPER_CLEAR_STORE',
      payload: { 'GET/openapi/param2/1/gateway.subway/testing/adgroup/price/update$': undefined },
    });
  },
};

export const rapperSelector = {
  'GET/example/1565269104015': (state: IState) => {
    const responseData = state['$$rapperResponseData']['GET/example/1565269104015'];
    return connectGetResponse(responseData) as
      | IResponseTypes['GET/example/1565269104015']
      | undefined;
  },
  'GET/openapi/param2/1/gateway.subway/testing/adgroup/price/update$': (state: IState) => {
    const responseData =
      state['$$rapperResponseData'][
        'GET/openapi/param2/1/gateway.subway/testing/adgroup/price/update$'
      ];
    return connectGetResponse(responseData) as
      | IResponseTypes['GET/openapi/param2/1/gateway.subway/testing/adgroup/price/update$']
      | undefined;
  },
};

export const rapperActions = RequestTypes || [];
