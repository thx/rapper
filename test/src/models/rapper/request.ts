/* md5: 729948968a65ca17e24866d408372ad0 */
/* Rap仓库id: 237514 */
/* Rapper版本: 1.0.3-beta.0 */
/* eslint-disable */
/* tslint:disable */

/**
 * 本文件由 Rapper 同步 Rap 平台接口，自动生成，请勿修改
 * Rap仓库 地址: https://rap2.taobao.org/repository/editor?id=237514
 */

import * as commonLib from '@ali/rap/runtime/commonLib';
import * as reduxLib from '@ali/rap/runtime/reduxLib';
import { RequestTypes } from './redux';

export interface IModels {
  /**
   * 接口名：GET请求
   * Rap 地址: https://rap2.taobao.org/repository/editor?id=237514&mod=340613&itf=1377102
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
   * Rap 地址: https://rap2.taobao.org/repository/editor?id=237514&mod=340613&itf=1377105
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
   * Rap 地址: https://rap2.taobao.org/repository/editor?id=237514&mod=340613&itf=1377106
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
   * Rap 地址: https://rap2.taobao.org/repository/editor?id=237514&mod=340613&itf=1380746
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
   * Rap 地址: https://rap2.taobao.org/repository/editor?id=237514&mod=340613&itf=1482796
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
}

export function createFetch(fetchConfig: commonLib.RequesterOption) {
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
     * Rap 地址: https://rap2.taobao.org/repository/editor?id=237514&mod=340613&itf=1377102
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
     * Rap 地址: https://rap2.taobao.org/repository/editor?id=237514&mod=340613&itf=1377105
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
     * Rap 地址: https://rap2.taobao.org/repository/editor?id=237514&mod=340613&itf=1377106
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
     * Rap 地址: https://rap2.taobao.org/repository/editor?id=237514&mod=340613&itf=1380746
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
     * Rap 地址: https://rap2.taobao.org/repository/editor?id=237514&mod=340613&itf=1482796
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
  };
}
