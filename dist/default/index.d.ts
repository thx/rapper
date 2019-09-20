/** model.ts 文件的内容 */
declare function createModel(interfaces: any, { projectId, additionalProperties }: {
    projectId: any;
    additionalProperties: any;
}): Promise<string>;
/** fetch.ts 文件的内容 */
declare function createFetch(interfaces: any, { projectId, useCommonJsModule, optionalExtra, relModelPath, relBaseFetchPath }: {
    projectId: any;
    useCommonJsModule: any;
    optionalExtra: any;
    relModelPath: any;
    relBaseFetchPath: any;
}): string;
export { createModel, createFetch };
