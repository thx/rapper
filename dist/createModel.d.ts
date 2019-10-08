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
    type?: RAP_TYPE;
    /** 输出模板代码的格式 */
    codeStyle?: {
        /** 默认单引号 */
        singleQuote?: boolean;
        /** 默认2个空格 */
        tabWidth?: number;
        /** 分号结尾，默认true */
        semi?: boolean;
        /** 逗号 */
        trailingComma?: 'none' | 'all' | 'es5';
    };
}
export default function ({ projectId, modelPath, requesterPath, baseFetchPath, urlMapper, useCommonJsModule, additionalProperties, optionalExtra, rapUrl, outputPath, type, codeStyle, }: ICreateModel): Promise<void>;
export {};
