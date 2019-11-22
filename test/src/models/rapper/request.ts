/* eslint-disable */

/**
 * 本文件由 Rapper 同步 Rap 平台接口，自动生成，请勿修改
 * Rap仓库 地址: https://rap2.alibaba-inc.com/repository/editor?id=3564
 */

import { dispatchAction, RequesterOption, IUserFetchParams, IExtra, getRapperRequest } from './lib';
import { RequestTypes } from './redux';

export interface IModels {
  /**
   * 接口名：示例接口
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3564&mod=8414&itf=80291
   */
  'GET/example/1565269104015': {
    Req: {
      /**
       * 请求属性示例
       */
      foo?: string;
    };
    Res: {
      /**
       * 字符串属性示例
       */
      string: string;
      /**
       * 数字属性示例
       */
      number: number;
      /**
       * 布尔属性示例
       */
      boolean: boolean;
      /**
       * 正则属性示例
       */
      regexp: string;
      /**
       * 函数属性示例
       */
      function: string;
      /**
       * 数组属性示例
       */
      array: {
        /**
         * 数组元素示例
         */
        foo: number;
        /**
         * 数组元素示例
         */
        bar: string;
      }[];
      /**
       * 自定义数组元素示例
       */
      items: any[];
      /**
       * 对象属性示例
       */
      object: {
        /**
         * 对象属性示例
         */
        foo: number;
        /**
         * 对象属性示例
         */
        bar: string;
      };
      /**
       * 占位符示例
       */
      placeholder: string;
    };
  };

  /**
   * 接口名：智能推广-修改ad出价上限
   * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3564&mod=8414&itf=80292
   */
  'GET/openapi/param2/1/gateway.subway/testing/adgroup/price/update$': {
    Req: {
      /**
       * 所有出价单位为：分。 {"campaignId":"65649263","adgroupPrices":[{"adgroupId":"1688741147","bidPrice":"","mobileBidPrice":"23"}]}
       */
      priceBody?: string;
      /**
       * 101001013
       */
      productId?: string;
    };
    Res: {
      custId: number;
      result: {
        tableData: {
          id: number;
        }[];
      };
    };
  };
}

type ResSelector<T> = T;

export interface IResponseTypes {
  'GET/example/1565269104015': ResSelector<IModels['GET/example/1565269104015']['Res']>;
  'GET/openapi/param2/1/gateway.subway/testing/adgroup/price/update$': ResSelector<
    IModels['GET/openapi/param2/1/gateway.subway/testing/adgroup/price/update$']['Res']
  >;
}

export function createFetch(fetchConfig: RequesterOption) {
  const rapperFetch = getRapperRequest(fetchConfig);
  const sendRapperFetch = (
    modelName: keyof typeof RequestTypes,
    requestParams: IUserFetchParams,
  ) => {
    const { extra } = requestParams;
    if (extra && extra.type === 'normal') {
      return rapperFetch(requestParams);
    } else {
      const action = {
        type: '$$RAPPER_REQUEST',
        payload: { ...requestParams, modelName, types: RequestTypes[modelName] },
      };
      return dispatchAction(action, rapperFetch);
    }
  };

  return {
    /**
     * 接口名：示例接口
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3564&mod=8414&itf=80291
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/example/1565269104015': (
      req?: IModels['GET/example/1565269104015']['Req'],
      extra?: IExtra,
    ) => {
      return sendRapperFetch('GET/example/1565269104015', {
        url: '/example/1565269104015',
        method: 'GET',
        params: req,
        extra,
      }) as Promise<IResponseTypes['GET/example/1565269104015']>;
    },

    /**
     * 接口名：智能推广-修改ad出价上限
     * Rap 地址: https://rap2.alibaba-inc.com/repository/editor?id=3564&mod=8414&itf=80292
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/openapi/param2/1/gateway.subway/testing/adgroup/price/update$': (
      req?: IModels['GET/openapi/param2/1/gateway.subway/testing/adgroup/price/update$']['Req'],
      extra?: IExtra,
    ) => {
      return sendRapperFetch('GET/openapi/param2/1/gateway.subway/testing/adgroup/price/update$', {
        url: '/openapi/param2/1/gateway.subway/testing/adgroup/price/update$',
        method: 'GET',
        params: req,
        extra,
      }) as Promise<
        IResponseTypes['GET/openapi/param2/1/gateway.subway/testing/adgroup/price/update$']
      >;
    },
  };
}
