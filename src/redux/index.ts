import { Intf, IGeneratedCode, ICreatorExtr } from '../types';
import {
  createActionStr,
  createUseRapStr,
  createBaseSelectorStr,
  createDataSelectorStr,
} from './reduxCreator';
import { createBaseRequestStr } from './requesterCreator';
import { getPackageName } from '../utils';

const packageName = getPackageName();

/** 生成 index.ts */
function createIndexStr(): IGeneratedCode {
  return {
    import: `
      import { useResponse, useRapper, useAllResponse, clearResponseCache, rapperActions, rapperBaseSelector, rapperDataSelector } from './redux'
      import { IResponseTypes } from './request'
      import reduxLib from '${packageName}/runtime/reduxLib'
    `,
    body: `
      const { rapperReducers, rapperEnhancer } = reduxLib
    `,
    export: `
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
      export type ResponseTypes = IResponseTypes
    `,
  };
}

/** 生成 redux.ts */
function createDynamicStr(interfaces: Array<Intf>, extr: ICreatorExtr): string {
  return `
    import { useSelector } from 'react-redux'
    import { IModels, IResponseTypes, createFetch } from './request'
    import reduxLib from '${packageName}/runtime/reduxLib'
    import { fetch } from './index'

    ${createActionStr(interfaces, extr)}
    ${createUseRapStr(interfaces, extr)}
    ${createBaseSelectorStr(interfaces)}
    ${createDataSelectorStr(interfaces)}

    export const rapperActions = RequestTypes || []
  `;
}

export default { createIndexStr, createDynamicStr, createBaseRequestStr };
