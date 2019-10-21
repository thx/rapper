import { Intf } from '../types';
/** 生成 index.ts */
declare function createIndexStr(projectId: number): string;
/** 生成 fetch.ts */
declare function createFetchStr(interfaces: Intf[], { projectId }: {
    projectId: any;
}): string;
export { createIndexStr, createFetchStr };
