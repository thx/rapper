/* md5: c9fa8ffb81693d68c9e2d9f89a661292 */
/* Rap仓库id: 237514 */
/* Rapper版本: 1.2.1-beta.2 */
/* eslint-disable */
/* tslint:disable */

/**
 * 本文件由 Rapper 同步 Rap 平台接口，自动生成，请勿修改
 * Rap仓库 地址: http://rap2.taobao.org/repository/editor?id=237514
 */

import * as commonLib from '@ali/mc-rap/runtime/commonLib';
import * as reduxLib from '@ali/mc-rap/runtime/reduxLib';
import { RequestTypes } from './redux';

export interface IModels {
  /**
   * 接口名：GET请求
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=237514&mod=340613&itf=1377102
   */
  'GET/testGet': {
    Req: {
      id?: number;
      objectParams?: {
        a?: number[];
      };
    };
    Res: {
      errcode: number;
      value: string;
      message: string;
      time: string;
    };
  };

  /**
   * 接口名：POST 请求
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=237514&mod=340613&itf=1377105
   */
  'POST/testPost': {
    Req: {
      id?: number;
      objectParams?: {
        a?: number[];
        b?: {
          b1?: string;
        };
      };
    };
    Res: {
      errcode: number;
      message: string;
      value: {
        id: number;
        message: string;
      }[];
    };
  };

  /**
   * 接口名：form表单提交请求
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=237514&mod=340613&itf=1377106
   */
  'POST/testFormData': {
    Req: {
      type?: string;
      role?: string;
    };
    Res: {
      errcode: number;
      message: string;
      value: string;
    };
  };

  /**
   * 接口名：RESTful 接口
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=237514&mod=340613&itf=1380746
   */
  'GET/group/:groupId/member/{memberId}': {
    Req: {
      groupId?: string;
      memberId?: string;
    };
    Res: {
      restful: boolean;
    };
  };

  /**
   * 接口名：useAPI测试接口
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=237514&mod=340613&itf=1482796
   */
  'GET/useAPI': {
    Req: {
      /**
       * id
       */
      id?: number;
    };
    Res: {
      errcode: number;
      useAPI: string;
      data: {
        id: string;
        name: string;
      }[];
    };
  };

  /**
   * 接口名：useAPI-request
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=237514&mod=340613&itf=1670435
   */
  'GET/useAPI/request': {
    Req: {
      /**
       * id
       */
      id?: number;
    };
    Res: {
      data: {
        id: string;
        name: string;
      }[];
      errcode: number;
      useAPI: string;
    };
  };

  /**
   * 接口名：示例接口
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=239096&mod=344548&itf=1399160
   */
  'GET/example/1575626712231': {
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
}

type ResSelector<T> = T;

export interface IResponseTypes {
  'GET/testGet': ResSelector<IModels['GET/testGet']['Res']>;
  'POST/testPost': ResSelector<IModels['POST/testPost']['Res']>;
  'POST/testFormData': ResSelector<IModels['POST/testFormData']['Res']>;
  'GET/group/:groupId/member/{memberId}': ResSelector<
    IModels['GET/group/:groupId/member/{memberId}']['Res']
  >;
  'GET/useAPI': ResSelector<IModels['GET/useAPI']['Res']>;
  'GET/useAPI/request': ResSelector<IModels['GET/useAPI/request']['Res']>;
  'GET/example/1575626712231': ResSelector<IModels['GET/example/1575626712231']['Res']>;
}

export function createFetch(
  fetchConfig: commonLib.RequesterOption,
  extraConfig?: { fetchType?: commonLib.FetchType },
) {
  if (!extraConfig?.fetchType) {
    console.warn(
      'Rapper Warning: createFetch API will be deprecated, if you want to customize fetch, please use overrideFetch instead, since new API guarantees better type consistency during frontend lifespan. See detail https://www.yuque.com/rap/rapper/overridefetch',
    );
  }
  const rapperFetch = commonLib.getRapperRequest(fetchConfig);
  const sendRapperFetch = (
    modelName: keyof typeof RequestTypes,
    requestParams: commonLib.IUserFetchParams,
  ) => {
    const { extra } = requestParams;
    if (extra && extra.type === 'normal') {
      return rapperFetch(requestParams);
    } else {
      const action = {
        type: '$$RAPPER_REQUEST',
        payload: { ...requestParams, modelName, types: RequestTypes[modelName] },
      };
      return reduxLib.dispatchAction(action, rapperFetch);
    }
  };

  return {
    /**
     * 接口名：GET请求
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=237514&mod=340613&itf=1377102
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/testGet': (req?: IModels['GET/testGet']['Req'], extra?: commonLib.IExtra) => {
      return sendRapperFetch('GET/testGet', {
        url: '/testGet',
        method: 'GET',
        params: req,
        extra,
      }) as Promise<IResponseTypes['GET/testGet']>;
    },

    /**
     * 接口名：POST 请求
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=237514&mod=340613&itf=1377105
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'POST/testPost': (req?: IModels['POST/testPost']['Req'], extra?: commonLib.IExtra) => {
      return sendRapperFetch('POST/testPost', {
        url: '/testPost',
        method: 'POST',
        params: req,
        extra,
      }) as Promise<IResponseTypes['POST/testPost']>;
    },

    /**
     * 接口名：form表单提交请求
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=237514&mod=340613&itf=1377106
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'POST/testFormData': (req?: IModels['POST/testFormData']['Req'], extra?: commonLib.IExtra) => {
      return sendRapperFetch('POST/testFormData', {
        url: '/testFormData',
        method: 'POST',
        params: req,
        extra,
      }) as Promise<IResponseTypes['POST/testFormData']>;
    },

    /**
     * 接口名：RESTful 接口
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=237514&mod=340613&itf=1380746
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/group/:groupId/member/{memberId}': (
      req?: IModels['GET/group/:groupId/member/{memberId}']['Req'],
      extra?: commonLib.IExtra,
    ) => {
      return sendRapperFetch('GET/group/:groupId/member/{memberId}', {
        url: '/group/:groupId/member/{memberId}',
        method: 'GET',
        params: req,
        extra,
      }) as Promise<IResponseTypes['GET/group/:groupId/member/{memberId}']>;
    },

    /**
     * 接口名：useAPI测试接口
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=237514&mod=340613&itf=1482796
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/useAPI': (req?: IModels['GET/useAPI']['Req'], extra?: commonLib.IExtra) => {
      return sendRapperFetch('GET/useAPI', {
        url: '/useAPI',
        method: 'GET',
        params: req,
        extra,
      }) as Promise<IResponseTypes['GET/useAPI']>;
    },

    /**
     * 接口名：useAPI-request
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=237514&mod=340613&itf=1670435
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/useAPI/request': (
      req?: IModels['GET/useAPI/request']['Req'],
      extra?: commonLib.IExtra,
    ) => {
      return sendRapperFetch('GET/useAPI/request', {
        url: '/useAPI/request',
        method: 'GET',
        params: req,
        extra,
      }) as Promise<IResponseTypes['GET/useAPI/request']>;
    },

    /**
     * 接口名：示例接口
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=239096&mod=344548&itf=1399160
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/example/1575626712231': (
      req?: IModels['GET/example/1575626712231']['Req'],
      extra?: commonLib.IExtra,
    ) => {
      return sendRapperFetch('GET/example/1575626712231', {
        url: '/example/1575626712231',
        method: 'GET',
        params: req,
        extra,
      }) as Promise<IResponseTypes['GET/example/1575626712231']>;
    },
  };
}
