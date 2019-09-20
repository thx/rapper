import { UrlMapper, RAP_TYPE } from './types';
interface ICreateModel {
    projectId: number;
    urlMapper?: UrlMapper;
    useCommonJsModule?: boolean;
    additionalProperties?: boolean;
    optionalExtra?: boolean;
    rapUrl?: string;
    outputPath?: string;
    modelPath?: string;
    requesterPath?: string;
    baseFetchPath?: string;
    serverAPI?: string;
    type?: RAP_TYPE;
}
export default function ({ projectId, modelPath, requesterPath, baseFetchPath, urlMapper, useCommonJsModule, additionalProperties, optionalExtra, rapUrl, outputPath, serverAPI, type, }: ICreateModel): Promise<{}[]>;
export {};
