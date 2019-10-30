import chalk from 'chalk';
import { format } from 'json-schema-to-typescript/dist/src/formatter';
import { DEFAULT_OPTIONS } from 'json-schema-to-typescript';
import { Intf, UrlMapper, RAPPER_TYPE, TRAILING_COMMA, GeneratedCode } from './types';
import { createBaseRequestStr, createBaseIndexCode, createBaseLibCode } from './core/base-creator';
import ReduxCreator from './redux';
import { writeFile, mixGeneratedCode } from './utils';
import { getInterfaces, getIntfWithModelName, uniqueItfs } from './core/tools';

interface Rapper {
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
  codeStyle?: {};
}
export default async function({
  type,
  projectId,
  rapUrl = 'http://rap2.taobao.org',
  rapperPath = './rapper',
  urlMapper = t => t,
  codeStyle,
}: Rapper) {
  /** 参数校验 */
  if (!type) {
    return new Promise(() => console.log(chalk.red('rapper: 请配置 type 参数')));
  } else if (!['requester', 'redux'].includes(type)) {
    return new Promise(() => console.log(chalk.red('rapper: type 参数配置错误，请重新配置')));
  }
  if (!projectId) {
    return new Promise(() => console.log(chalk.red('rapper: 请配置 projectId 参数')));
  }

  DEFAULT_OPTIONS.style = {
    ...DEFAULT_OPTIONS.style,
    singleQuote: true,
    semi: false,
    trailingComma: TRAILING_COMMA.ES5,
  };
  if (codeStyle && typeof codeStyle === 'object') {
    DEFAULT_OPTIONS.style = { ...codeStyle };
  }

  if (!rapperPath) {
    return new Promise(() => console.log(chalk.red('rapper: rapperPath 配置失败，请修改')));
  } else {
    rapperPath = rapperPath.replace(/\/$/, '');
  }

  /** 输出文件集合 */
  const outputFiles = [];

  /** 获取所有接口 */
  let interfaces = [];
  try {
    interfaces = await getInterfaces(rapUrl, projectId);
  } catch (e) {
    return new Promise(() => console.log(chalk.red(`rapper: 同步 rap 接口失败，${e}`)));
  }
  if (!(Array.isArray(interfaces) && interfaces.length)) {
    return new Promise(() => console.log(chalk.yellow('rapper: 没有课同步的 rap 接口')));
  }
  interfaces = uniqueItfs(getIntfWithModelName(interfaces, urlMapper));

  let Creator: {
    createIndexStr?: (projectId: number) => string;
    createDynamicStr?: (interfaces: Intf[], { projectId }: { projectId: number }) => string;
    createLibStr?: (interfaces: Intf[], { projectId }: { projectId: number }) => string;
  } = {};
  switch (type) {
    case 'redux':
      Creator = ReduxCreator;
      break;
    default:
      Creator = {};
  }

  /** 生成 index.ts */
  const indexCodeArr: GeneratedCode[] = [createBaseIndexCode()];
  // if (Creator.createIndexStr) {
  //   /** 定制的 */
  //   indexCodeArr.push(Creator.createIndexStr(projectId), DEFAULT_OPTIONS))

  // } else {
  //   /** 默认的 */
  //   outputFiles.push({
  //     path: `${rapperPath}/index.ts`,
  //     content: format(createBaseIndexStr(projectId), DEFAULT_OPTIONS),
  //   });
  // }

  outputFiles.push({
    path: `${rapperPath}/index.ts`,
    content: format(mixGeneratedCode(indexCodeArr), DEFAULT_OPTIONS),
  });

  /** 生成基础的 request.ts 请求函数和类型声明 */
  const requestStr = await createBaseRequestStr(interfaces, {
    projectId,
  });
  outputFiles.push({
    path: `${rapperPath}/request.ts`,
    content: format(requestStr, DEFAULT_OPTIONS),
  });

  /** 生成 ${type}.ts 动态的 */
  Creator.createDynamicStr &&
    outputFiles.push({
      path: `${rapperPath}/${type}.ts`,
      content: format(Creator.createDynamicStr(interfaces, { projectId }), DEFAULT_OPTIONS),
    });

  /** 生成静态的 lib */

  const libCodeArr = [createBaseLibCode()];

  outputFiles.push({
    path: `${rapperPath}/lib.ts`,
    content: format(mixGeneratedCode(libCodeArr), DEFAULT_OPTIONS),
  });

  // Creator.createLibStr &&
  //   outputFiles.push({
  //     path: `${rapperPath}/lib.ts`,
  //     content: format(Creator.createLibStr(interfaces, { projectId }), DEFAULT_OPTIONS),
  //   });

  /** 生成 base-fetch.ts */
  // if (!fs.existsSync(`${rapperPath}/base-fetch.ts`)) {
  //   outputFiles.push({
  //     path: `${rapperPath}/base-fetch.ts`,
  //     content: format(baseFetchStr, DEFAULT_OPTIONS),
  //   });
  // }

  /** 生成 redux runtime.ts
   *  todo 这里重构分别放到 redux.ts 和 lib.ts 里面 */
  // if (type === 'redux') {
  //   outputFiles.push({
  //     path: `${rapperPath}/runtime.ts`,
  //     content: format(runtimeStr, DEFAULT_OPTIONS),
  //   });
  //   outputFiles.push({
  //     path: `${rapperPath}/types.ts`,
  //     content: format(reduxTypesStr, DEFAULT_OPTIONS),
  //   });
  // }

  return Promise.all(outputFiles.map(({ path, content }) => writeFile(path, content)))
    .then(() => {
      console.log(chalk.green(`rapper: 同步成功！共同步:${interfaces.length} 个接口`));
    })
    .catch(err => {
      console.log(chalk.red(err));
    });
}
