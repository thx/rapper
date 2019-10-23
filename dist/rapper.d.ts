import { UrlMapper, RAPPER_TYPE, TRAILING_COMMA } from './types';
interface IRapper {
    /** 必填，redux、requester 等 */
    type: RAPPER_TYPE;
    /** 必填，rap 项目id */
    projectId: number;
    /** 选填，rap网站地址，默认是 http://rap2.taobao.org */
    rapUrl?: string;
    /** 选填，生成出 rapper 的文件夹地址, 默认 ./rapper */
    rapperPath?: string;
    /** 选填，url映射，可用来将复杂的url映射为简单的url */
    urlMapper?: UrlMapper;
    /** 选填，输出模板代码的格式 */
    codeStyle?: {
        /** 默认单引号 */
        singleQuote?: boolean;
        /** 默认2个空格 */
        tabWidth?: number;
        /** 分号结尾，默认true */
        semi?: boolean;
        /** 逗号 */
        trailingComma?: TRAILING_COMMA;
    };
}
export default function ({ type, projectId, rapUrl, rapperPath, urlMapper, codeStyle, }: IRapper): Promise<unknown>;
export {};
