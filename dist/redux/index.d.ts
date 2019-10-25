import { Intf } from '../types';
/** 生成 index.ts */
declare function createIndexStr(projectId: number): string;
/** 生成 request.ts */
declare function createRequestStr(
  interfaces: Intf[],
  {
    projectId,
  }: {
    projectId: any;
  },
): string;
declare const _default: {
  createIndexStr: typeof createIndexStr;
  createRequestStr: typeof createRequestStr;
};
export default _default;
