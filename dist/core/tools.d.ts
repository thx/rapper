import { Interface, Intf, UrlMapper } from '../types';
/** 给接口增加 modelName */
export declare function getIntfWithModelName(
  intfs: Interface.Root[],
  urlMapper?: UrlMapper,
): Intf[];
/**
 * 转换rap接口名称
 * 比如 magix 将 / 转换成 _ ，RESTful接口，清除占位符
 * 参数 noTransform 用来配置是否 将 / 转换成 _ ，默认转换
 */
export declare function rap2name(itf: Interface.Root, urlMapper?: UrlMapper): string;
/** 接口去重 */
export declare function uniqueItfs(itfs: Intf[]): Intf[];
