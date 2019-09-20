import { Interface } from './types';
declare type Intf = Interface.Root & {
    modelName: string;
};
interface RequestFactory {
    (itf: Intf, ReqType: string, ResType: string): string;
}
interface UrlMapper {
    (url: string): string;
}
interface CreateApiParams {
    projectId: number;
    folder: string;
    requestFactory: RequestFactory;
    urlMapper?: UrlMapper;
    additionalProperties?: boolean;
}
export declare function createApi({ projectId, folder, requestFactory, urlMapper, additionalProperties }: CreateApiParams): Promise<(string | [{}, {}])[]>;
export declare function createModel({ projectId, modelPath, requesterPath, baseFetchPath, urlMapper, useCommonJsModule, additionalProperties, optionalExtra, }: {
    projectId: number;
    modelPath: string;
    requesterPath?: string;
    baseFetchPath?: string;
    urlMapper?: UrlMapper;
    useCommonJsModule?: boolean;
    additionalProperties?: boolean;
    optionalExtra?: boolean;
}): Promise<{}>;
export {};
