import { Intf } from '../types';
/** fetch.ts 文件的内容 */
interface ICreateFetchParams {
    projectId: number;
    relModelPath: string;
    relBaseFetchPath: string;
}
/** 生成 index.ts */
declare function createIndexStr(projectId: number): string;
/** 生成 fetch.ts */
declare function createFetchStr(interfaces: Intf[], extr: ICreateFetchParams): string;
declare const _default: {
    createIndexStr: typeof createIndexStr;
    createFetchStr: typeof createFetchStr;
};
export default _default;
