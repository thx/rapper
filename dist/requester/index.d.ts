import { Intf } from '../types';
/** fetch.ts 文件的内容 */
interface ICreateFetchParams {
  projectId: number;
  relModelPath: string;
  relBaseFetchPath: string;
}
/** 生成 index.ts */
declare function createIndexStr(projectId: number): string;
/** 生成 request.ts */
declare function createRequestStr(interfaces: Intf[], extr: ICreateFetchParams): string;
declare const _default: {
  createIndexStr: typeof createIndexStr;
  createRequestStr: typeof createRequestStr;
};
export default _default;
