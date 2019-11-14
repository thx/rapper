import { Intf, GeneratedCode, CreatorExtr } from '../types';
import { createActionStr, createUseRapStr, createSelectorStr } from './reduxCreator';
import { createTools, createTypesStr, createReduxRuntime } from './libCreator';
import { createBaseRequestStr } from './requesterCreator';

/** 生成 index.ts */
function createIndexStr(): GeneratedCode {
  return {
    import: `
      import { useResponse, useAllResponse, clearResponseCache, rapperActions, rapperSelector } from './redux'
      import { rapperReducers, rapperEnhancer } from './lib'
      import { ResponseTypes as RequestResponseTypes } from './request'
    `,
    body: '',
    export: `
      export {
        /** 以Hooks的方式使用请求响应数据 */
        useResponse,
        /** 使用请求响应数据（包含缓存） */
        useAllResponse,
        /** 清除此接口的缓存 */
        clearResponseCache,
        rapperSelector,
        rapperActions,
        rapperReducers,
        rapperEnhancer,
      };

      /** 响应类型 */
      export type ResponseTypes = RequestResponseTypes
    `,
  };
}

/** 生成 redux.ts */
function createDynamicStr(interfaces: Array<Intf>, extr: CreatorExtr): string {
  return `
    import { useSelector } from 'react-redux'
    import { createSelector } from 'reselect'
    import { Models, ResponseTypes } from './request'
    import { dispatchAction, useResponseData, connectGetResponse, State } from './lib'

    ${createActionStr(interfaces, extr)}
    ${createUseRapStr(interfaces, extr)}
    ${createSelectorStr(interfaces)}

    export const rapperActions = RequestTypes || []
  `;
}

/** 生成 lib.ts */
function createLibStr(interfaces: Array<Intf>, extr: CreatorExtr): GeneratedCode {
  return {
    import: `
      import { useState, useEffect } from 'react'
      import { useSelector } from 'react-redux'
    `,
    body: `
      ${createTypesStr()}
      ${createTools()}
      ${createReduxRuntime()}
    `,
    export: '',
  };
}

export const RAPPER_REQUEST = '$$RAPPER_REQUEST';
export const RAPPER_CLEAR_STORE = '$$RAPPER_CLEAR_STORE';
export const RAPPER_UPDATE_STORE = '$$RAPPER_UPDATE_STORE';
export const RAPPER_STATE_KEY = '$$rapperResponseData';
export default { createIndexStr, createDynamicStr, createLibStr, createBaseRequestStr };
