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
    /** 输出模板代码的格式 */
    codeStyle?: {
        /** 默认单引号 */
        singleQuote?: boolean;
        /** 默认2个空格 */
        tabWidth?: number;
    };
}
export default function ({ projectId, modelPath, requesterPath, baseFetchPath, urlMapper, useCommonJsModule, additionalProperties, optionalExtra, rapUrl, outputPath, serverAPI, type, codeStyle, }: ICreateModel): Promise<{}[]>;
export {};
