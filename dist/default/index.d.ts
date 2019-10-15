import { Intf } from '../types';
/** model.ts 文件的内容 */
interface ICreateModelParams {
    projectId: number;
    additionalProperties?: boolean;
}
declare function createModel(interfaces: Intf[], extr: ICreateModelParams): Promise<string>;
/** fetch.ts 文件的内容 */
interface ICreateFetchParams {
    projectId: number;
    useCommonJsModule?: boolean;
    optionalExtra?: boolean;
    relModelPath: string;
    relBaseFetchPath: string;
}
declare function createFetch(interfaces: Intf[], extr: ICreateFetchParams): string;
export { createModel, createFetch };
