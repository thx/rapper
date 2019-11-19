import chalk from 'chalk';
import { format } from 'json-schema-to-typescript/dist/src/formatter';
import { DEFAULT_OPTIONS } from 'json-schema-to-typescript';
import { Intf, UrlMapper, RAPPER_TYPE, TRAILING_COMMA, GeneratedCode, CreatorExtr } from './types';
import { createBaseRequestStr, createBaseIndexCode, createBaseLibCode } from './core/base-creator';
import ReduxCreator from './redux';
import { writeFile, mixGeneratedCode } from './utils';
import { getInterfaces, getIntfWithModelName, uniqueItfs, creatHeadHelpStr } from './core/tools';
import scanFile from './core/scanFile';
import url = require('url');

export interface Rapper {
  /** 必填，redux、requester 等 */
  type: RAPPER_TYPE;
  /** 必填，api仓库地址，从仓库的数据按钮可以获得 */
  apiUrl: string;
  /** 选填，rap平台前端地址，默认是 http://rap2.taobao.org */
  rapUrl?: string;
  /** 选填，生成出 rapper 的文件夹地址, 默认 ./src/rapper */
  rapperPath?: string;
  /** 选填，url映射，可用来将复杂的url映射为简单的url */
  urlMapper?: UrlMapper;
  /** 选填，输出模板代码的格式 */
  codeStyle?: {};
  /** 选填，类型变换 type Selector<T> = T */
  resSelector?: string;
}
export default async function({
  type,
  rapUrl = 'http://rap2.taobao.org',
  apiUrl = 'http://rap2api.taobao.org',
  rapperPath = './src/rapper',
  urlMapper = t => t,
  codeStyle,
  resSelector = 'type ResSelector<T> = T',
}: Rapper) {
  /** 参数校验 */
  if (!type) {
    return new Promise(() => console.log(chalk.red('rapper: 请配置 type 参数')));
  } else if (!['requester', 'redux'].includes(type)) {
    return new Promise(() => console.log(chalk.red('rapper: type 参数配置错误，请重新配置')));
  }
  const apiParams = url.parse(apiUrl, true).query;
  const projectId = parseInt(Array.isArray(apiParams.id) ? apiParams.id[0] : apiParams.id);

  DEFAULT_OPTIONS.style = {
    ...DEFAULT_OPTIONS.style,
    singleQuote: true,
    semi: false,
    trailingComma: TRAILING_COMMA.ES5,
  };
  if (codeStyle && typeof codeStyle === 'object') {
    DEFAULT_OPTIONS.style = { ...codeStyle };
  }

  rapperPath = rapperPath.replace(/\/$/, '');
  rapUrl = rapUrl.replace(/\/$/, '');
  apiUrl = apiUrl.replace(/\/$/, '');

  /** 输出文件集合 */
  const outputFiles = [];

  /** 获取所有接口 */
  let interfaces: Array<Intf> = [];
  try {
    interfaces = await getInterfaces(apiUrl);
  } catch (e) {
    return new Promise(() => console.log(chalk.red(`rapper: 同步 rap 接口失败，${e}`)));
  }
  if (!(Array.isArray(interfaces) && interfaces.length)) {
    return new Promise(() => console.log(chalk.yellow('rapper: 没有课同步的 rap 接口')));
  }
  interfaces = uniqueItfs(getIntfWithModelName(interfaces, urlMapper));

  let Creator: {
    createIndexStr?: () => GeneratedCode;
    createDynamicStr?: (interfaces: Array<Intf>, extr: CreatorExtr) => string;
    createLibStr?: (interfaces: Array<Intf>, extr: CreatorExtr) => GeneratedCode;
    createBaseRequestStr?: (interfaces: Array<Intf>, extr: CreatorExtr) => Promise<string>;
  } = {};
  switch (type) {
    case 'redux':
      Creator = ReduxCreator;
      break;
    default:
      Creator = {};
  }

  /** 生成 index.ts */
  const indexCodeArr: Array<GeneratedCode> = [createBaseIndexCode()];
  if (Creator.createIndexStr) {
    indexCodeArr.push(Creator.createIndexStr());
  }
  const indexStr = `
    /* eslint-disable */
    ${creatHeadHelpStr(rapUrl, projectId)}
    ${mixGeneratedCode(indexCodeArr)}
  `;
  outputFiles.push({
    path: `${rapperPath}/index.ts`,
    content: format(indexStr, DEFAULT_OPTIONS),
  });

  /** 生成基础的 request.ts 请求函数和类型声明 */
  let requestStr = '';
  if (Creator.createBaseRequestStr) {
    requestStr = await Creator.createBaseRequestStr(interfaces, {
      rapUrl,
      resSelector,
    });
  } else {
    requestStr = await createBaseRequestStr(interfaces, {
      rapUrl,
      resSelector,
    });
  }
  requestStr = `
    /* eslint-disable */
    ${creatHeadHelpStr(rapUrl, projectId)}
    ${requestStr}
  `;
  outputFiles.push({
    path: `${rapperPath}/request.ts`,
    content: format(requestStr, DEFAULT_OPTIONS),
  });

  /** 生成 ${type}.ts 动态的 */
  Creator.createDynamicStr &&
    outputFiles.push({
      path: `${rapperPath}/${type}.ts`,
      content: format(
        `
          /* eslint-disable */
          ${creatHeadHelpStr(rapUrl, projectId)}
          ${Creator.createDynamicStr(interfaces, { rapUrl, resSelector })}
        `,
        DEFAULT_OPTIONS,
      ),
    });

  /** 生成静态的 lib */
  const libCodeArr: Array<GeneratedCode> = [createBaseLibCode()];
  if (Creator.createLibStr) {
    libCodeArr.push(Creator.createLibStr(interfaces, { rapUrl, resSelector }));
  }
  const libStr = `
    /* eslint-disable */
    ${creatHeadHelpStr(rapUrl, projectId)}
    ${mixGeneratedCode(libCodeArr)}
  `;
  outputFiles.push({
    path: `${rapperPath}/lib.ts`,
    content: format(libStr, DEFAULT_OPTIONS),
  });

  /** Rap 接口引用扫描 */
  const scanResult = scanFile(interfaces, [rapperPath]);
  if (scanResult.length) {
    console.log(
      chalk.red('rapper: 同步失败，如下文件使用了已被 Rap 删除的接口，请确认后重新执行同步'),
    );
    scanResult.forEach(({ key, filePath, start, line }) => {
      console.log(chalk.red(`  接口: ${key}, 所在文件: ${filePath}:${line}:${start}`));
    });
  } else {
    return Promise.all(outputFiles.map(({ path, content }) => writeFile(path, content)))
      .then(() => {
        console.log(chalk.green(`rapper: 同步成功！共同步:${interfaces.length} 个接口`));
      })
      .catch(err => {
        console.log(chalk.red(err));
      });
  }
}
