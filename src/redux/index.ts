import { Intf, GeneratedCode } from '../types';
import {
  createActionStr,
  createFetchStr,
  createUseRapStr,
  createSelectorStr,
  createConnectStr,
  createRequestStr,
} from './reduxCreator';
import { createTools, createTypesStr, createReduxRuntime } from './libCreator';

/** 生成 index.ts */
function createIndexStr(projectId: number): GeneratedCode {
  return {
    import: `
      import { fetch, useResponse, useAllResponse, clearResponseCache, rapperActions, rapperSelector, connect, RapperProps } from './redux'
      import { rapReducers, rapEnhancer } from './lib'
      import { Models } from './request'
    `,
    body: '',
    export: `
      export {
        /** 发送rapper请求 */
        fetch,
        /** 以Hooks的方式使用请求响应数据 */
        useResponse,
        /** 使用请求响应数据（包含缓存） */
        useAllResponse,
        /** 清除此接口的缓存 */
        clearResponseCache,
        connect,
        rapperSelector,
        rapperActions,
        rapReducers,
        rapEnhancer,
      };

      /** 所有接口的类型定义 */
      export type Models = Models
      /** class component 默认 props */
      export type RapperProps = RapperProps
    `,
  };
}

/** 生成 redux.ts */
function createDynamicStr(interfaces: Intf[], { projectId }: { projectId: number }): string {
  return `
    import { connect as defaultConnect, useSelector } from 'react-redux'
    import { createSelector } from 'reselect'
    import { Models } from './request'
    import { dispatchAction, useResponseData, connectGetResponse, ResponsePromiseType, State } from './lib'

    ${createActionStr(interfaces)}
    ${createFetchStr(interfaces)}
    ${createUseRapStr(interfaces)}
    ${createSelectorStr(interfaces)}
    ${createConnectStr()}

    export const rapperActions = RequestTypes || []
  `;
}

/** 生成 lib.ts */
function createLibStr(interfaces: Intf[], { projectId }: { projectId: number }): GeneratedCode {
  return {
    import: `
      import { useState, useEffect } from 'react'
      import { useSelector } from 'react-redux'
      import baseFetch from './base-fetch'
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
export default { createIndexStr, createDynamicStr, createLibStr, createRequestStr };
