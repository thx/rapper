import { Intf } from '../types';
/** 从rap查询所有接口数据 */
export declare function getInterfaces(rapUrl: string, projectId: number): Promise<any>;
/** 生成 model.ts 文件 */
interface ICreateModelParams {
  projectId: number;
}
export declare function createModel(interfaces: Intf[], extr: ICreateModelParams): Promise<string>;
export {};
