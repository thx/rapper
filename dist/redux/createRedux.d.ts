import { Intf } from '../types';
/** 生成 index.ts */
declare function createIndexStr(): string;
/** 生成 redux.ts */
interface IOptionsParams {
    projectId: number;
}
declare function createReduxStr(interfaces: Intf[], { projectId }: IOptionsParams): string;
/** 生成 fetch.ts */
declare function createReduxFetchStr(projectId: number, interfaces: Intf[]): string;
/** 生成 useRap.ts */
declare function createUseRapStr(interfaces: Intf[]): string;
export { createIndexStr, createReduxStr, createReduxFetchStr, createUseRapStr };
