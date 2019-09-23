import { RAP_TYPE, Interface, Intf, UrlMapper } from './types';
/** 从rap查询所有接口数据 */
export declare function getInterfaces(rapUrl: string, projectId: number): Promise<Intf[]>;
/** 给接口增加 modelName */
export declare function getIntfWithModelName(intfs: Interface.Root[], urlMapper: UrlMapper, type: RAP_TYPE): Intf[];
/**
 * 转换rap接口名称
 * 比如 magix 将 / 转换成 _ ，RESTful接口，清除占位符
 * 参数 noTransform 用来配置是否 将 / 转换成 _ ，默认转换
 */
export declare function rap2name(itf: Interface.Root, urlMapper: UrlMapper, type: RAP_TYPE): string;
/** 接口去重 */
export declare function uniqueItfs(itfs: Intf[]): Intf[];
/**
 * search 参数转换，比如 { a: 1, b: 2, c: undefined } 转换成 "a=1&b=2"
 * 会自动删除 undefined
 */
export declare function locationStringify(obj?: {
    [key: string]: any;
}): string;
