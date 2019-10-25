import { Intf } from '../types';
import {
  createActionStr,
  createRapperRequestStr,
  createUseRapStr,
  createTypesStr,
  createReduxRuntime,
} from './creator';

/** 生成 index.ts */
function createIndexStr(projectId: number): string {
  return `
    /**
     * 本文件由 Rapper 从 Rap 中自动生成，请勿修改
     * Rap 地址: http://rap2.alibaba-inc.com/repository/editor?id=${projectId}
     */

    import { rapperRequest, useResponse, useAllResponse, clearResponseCache, rapperActions } from './request'
    import { rapReducers, rapEnhancer } from './runtime'
    
    export {
        /** 发送rapper请求 */
        rapperRequest,
        /** 以Hooks的方式使用请求响应数据 */
        useResponse,
        /** 使用请求响应数据（包含缓存） */
        useAllResponse,
        /** 清除此接口的缓存 */
        clearResponseCache,
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
        import { useState, useEffect } from 'react'
        import { useSelector } from 'react-redux'
        import { Models } from './model'
        import { dispatchAction, RAPPER_REQUEST, RAPPER_CLEAR_STORE, RAPPER_STATE_KEY } from './runtime'
        import baseFetch from './base-fetch'
    
        class Helper<Req> {
            Return = baseFetch<Req>({ url: '' })
        }
        type ResponsePromiseType<T> = Helper<T>['Return']
        
        type ThenArg<T> = T extends Promise<infer U> ? U : T
        type ResponseType<T> = ThenArg<Helper<T>['Return']>
    
        /** 深比较 */
        function looseEqual(newData: any, oldData: any): boolean {
            const newType = Object.prototype.toString.call(newData)
            const oldType = Object.prototype.toString.call(oldData)
    
            if (newType !== oldType) {
                return false
            }
    
            if (newType === '[object Object]' || newType === '[object Array]') {
                for (const key in newData) {
                    if (!looseEqual(newData[key], oldData[key])) {
                        return false
                    }
                }
                for (const key in oldData) {
                    if (!looseEqual(newData[key], oldData[key])) {
                        return false
                    }
                }
            } else if (newData !== oldData) {
                return false
            }
    
            return true
        }
    
        /** 根据请求参数筛选，暂时只支持 request */
        function paramsFilter<Req extends { [key: string]: any }, I extends { request: Req }, Fil extends { request?: Req }>(
            item: I,
            filter: Fil
        ): boolean {
            if (filter && filter.request) {
                const filterRequest = filter.request // 这一行是解决 ts2532 报错
                if (Object.prototype.toString.call(filter.request) === '[object Object]') {
                    const reqResult = Object.keys(filter.request).every((key): boolean => {
                        return item.request[key] === filterRequest[key]
                    })
                    if (!reqResult) {
                        return false
                    }
                } else {
                    return false
                }
            }
            return true
        }
    
        /** 根据filter函数自定义筛选 */
        function functionFilter<I, Fil>(item: I, filter: Fil) {
            if (filter !== undefined) {
                if (typeof filter === 'function') {
                    return filter(item)
                } else {
                    return false
                }
            }
            return true
        }
    
        ${createActionStr(interfaces)}
        ${createRapperRequestStr(interfaces)}
        ${createUseRapStr(interfaces)}
    
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
    import { IAction, IEnhancerProps, IStore, StoreEnhancer, StoreCreator, Reducer, AnyAction } from './types'
    import baseFetch from './base-fetch'

    ${createTypesStr()}
    ${createReduxRuntime()}
    `;
}

export default { createIndexStr, createDynamicStr, createLibStr };
