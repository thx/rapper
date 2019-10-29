import { Intf } from '../types';
import {
  createActionStr,
  createFetchStr,
  createUseRapStr,
  createGetResponseStr,
  createConnectStr,
} from './reduxCreator';
import { createTools, createTypesStr, createReduxRuntime } from './libCreator';

/** 生成 index.ts */
function createIndexStr(projectId: number): string {
  return `
    /**
     * 本文件由 Rapper 从 Rap 中自动生成，请勿修改
     * Rap 地址: http://rap2.alibaba-inc.com/repository/editor?id=${projectId}
     */

    import { fetch, useResponse, useAllResponse, clearResponseCache, rapperActions } from './redux'
    import { rapReducers, rapEnhancer } from './lib'
    import { Models } from './request'
    
    export {
        /** 发送rapper请求 */
        fetch,
        /** 以Hooks的方式使用请求响应数据 */
        useResponse,
        /** 使用请求响应数据（包含缓存） */
        useAllResponse,
        /** 清除此接口的缓存 */
        clearResponseCache,
        Models,
        rapperActions,
        rapReducers,
        rapEnhancer,
    };
    `;
}

/** 生成 redux.ts */
function createDynamicStr(interfaces: Intf[], { projectId }: { projectId: number }): string {
  return `
        /**
         * 本文件由 Rapper 从 Rap 中自动生成，请勿修改
         * Rap 地址: http://rap2.alibaba-inc.com/repository/editor?id=${projectId}
         */
        import { connect as defaultConnect, useSelector } from 'react-redux'
        import { Models } from './request'
        import { dispatchAction, useResponseData, RAPPER_REQUEST, RAPPER_CLEAR_STORE, RAPPER_STATE_KEY, ResponsePromiseType, State } from './lib'
    
        ${createActionStr(interfaces)}
        ${createFetchStr(interfaces)}
        ${createUseRapStr(interfaces)}
        ${createGetResponseStr()}
        ${createConnectStr()}
    
        export const rapperActions = RequestTypes || []
        `;
}

/** 生成 lib.ts */
function createLibStr(interfaces: Intf[], { projectId }: { projectId: number }): string {
  return `
    /**
     * 本文件由 Rapper 从 Rap 中自动生成，请勿修改
     * Rap 地址: http://rap2.alibaba-inc.com/repository/editor?id=${projectId}
     */
    import { useState, useEffect } from 'react'
    import { useSelector } from 'react-redux'
    import baseFetch from './base-fetch'

    export const RAPPER_REQUEST = '$$RAPPER_REQUEST'
    export const RAPPER_UPDATE_STORE = '$$RAPPER_UPDATE_STORE'
    export const RAPPER_CLEAR_STORE = '$$RAPPER_CLEAR_STORE'
    export const RAPPER_STATE_KEY = '$$rapperResponseData'

    ${createTypesStr()}
    ${createTools()}
    ${createReduxRuntime()}
    `;
}

export default { createIndexStr, createDynamicStr, createLibStr };
