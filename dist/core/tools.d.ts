import { Interface, Intf, UrlMapper } from '../types';
/** 给接口增加 modelName */
export declare function getIntfWithModelName(intfs: Interface.Root[], urlMapper?: UrlMapper): Intf[];
/**
 * 转换rap接口名称
 * 比如 magix 将 / 转换成 _ ，RESTful接口，清除占位符
 * 参数 noTransform 用来配置是否 将 / 转换成 _ ，默认转换
 */
export declare function rap2name(itf: Interface.Root, urlMapper?: UrlMapper): string;
/** 接口去重 */
export declare function uniqueItfs(itfs: Intf[]): Intf[];
/** 深比较 */
export declare function looseEqual(newData: any, oldData: any): boolean;
/** 根据请求参数筛选，暂时只支持 request */
export declare function paramsFilter<Req extends {
    [key: string]: any;
}, I extends {
    request: Req;
}, Fil extends {
    request?: Req;
}>(item: I, filter: Fil): boolean;
/** 根据filter函数自定义筛选 */
export declare function functionFilter<I, Fil>(item: I, filter: Fil): any;
