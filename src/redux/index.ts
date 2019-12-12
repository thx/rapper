import { Intf, IGeneratedCode, ICreatorExtr } from '../types';
import {
  createActionStr,
  createUseRapStr,
  createBaseSelectorStr,
  createDataSelectorStr,
} from './reduxCreator';
import { createTools, createTypesStr, createReduxRuntime } from './libCreator';
import { createBaseRequestStr } from './requesterCreator';

/** 生成 index.ts */
function createIndexStr(): IGeneratedCode {
  return {
    import: `
      import { useResponse, useAllResponse, clearResponseCache, rapperActions, rapperBaseSelector, rapperDataSelector } from './redux'
      import { rapperReducers, rapperEnhancer } from './lib'
      import { IResponseTypes } from './request'
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
    import { IModels, IResponseTypes } from './request'
    import { dispatchAction, useResponseData, getResponseData, getRapperDataSelector, IState, IInterfaceInfo } from './lib'

    ${createActionStr(interfaces, extr)}
    ${createUseRapStr(interfaces, extr)}
    ${createBaseSelectorStr(interfaces)}
    ${createDataSelectorStr(interfaces)}

    export const rapperActions = RequestTypes || []
  `;
}

/** 生成 lib.ts */
function createLibStr(interfaces: Array<Intf>, extr: ICreatorExtr): IGeneratedCode {
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
