import chalk from 'chalk'
import * as fs from 'fs'
import { format } from 'json-schema-to-typescript/dist/src/formatter'
import { DEFAULT_OPTIONS } from 'json-schema-to-typescript'
import { Intf, UrlMapper, RAPPER_TYPE, TRAILING_COMMA } from './types'
import { createModel, getInterfaces } from './core/common'
import RequesterCreator from './requester'
import ReduxCreator from './redux';
import { writeFile } from './utils'
import baseFetchStr from './core/base-fetch'
import runtimeStr from './redux/runtime'
import reduxTypesStr from './redux/types'
import { getIntfWithModelName, uniqueItfs } from './core/tools'

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
  codeStyle?: {};
}
export default async function ({
  type,
  projectId,
  rapUrl = 'http://rap2.taobao.org',
  rapperPath = './rapper',
  urlMapper = t => t,
  codeStyle,
}: IRapper) {
  /** 参数校验 */
  if (!type) {
    return new Promise(() => console.log(chalk.red('rapper: 请配置 type 参数')))
  } else if (!['requester', 'redux'].includes(type)) {
    return new Promise(() => console.log(chalk.red('rapper: type 参数配置错误，请重新配置')))
  }
  if (!projectId) {
    return new Promise(() => console.log(chalk.red('rapper: 请配置 projectId 参数')))
  }

  DEFAULT_OPTIONS.style = {
    ...DEFAULT_OPTIONS.style,
    singleQuote: true,
    semi: false,
    trailingComma: TRAILING_COMMA.ES5,
  };
  if (codeStyle && typeof codeStyle === 'object') {
    DEFAULT_OPTIONS.style = { ...DEFAULT_OPTIONS.style, ...codeStyle };
  }

  if (!rapperPath) {
    return new Promise(() => console.log(chalk.red('rapper: rapperPath 配置失败，请修改')))
  } else {
    rapperPath = rapperPath.replace(/\/$/, '')
  }

  /** 输出文件集合 */
  const outputFiles = [];

  /** 获取所有接口 */
  let interfaces = []
  try {
    interfaces = await getInterfaces(rapUrl, projectId)
  } catch (e) {
    return new Promise(() => console.log(chalk.red(`rapper: 同步 rap 接口失败，${e}`)))
  }
  if (!(Array.isArray(interfaces) && interfaces.length)) {
    return new Promise(() => console.log(chalk.yellow('rapper: 没有课同步的 rap 接口')))
  }
  interfaces = uniqueItfs(
    getIntfWithModelName(interfaces, urlMapper)
  );

  let Creator: {
    createIndexStr?: (projectId: number) => string
    createRequestStr?: (interfaces: Intf[], { projectId }: { projectId: any; }) => string
  } = {}
  switch (type) {
    case 'requester':
      Creator = RequesterCreator
      break
    case 'redux':
      Creator = ReduxCreator
      break
    default:
      Creator = {}
  }

  /** 生成 index.ts */
  Creator.createIndexStr && outputFiles.push({
    path: `${rapperPath}/index.ts`,
    content: format(Creator.createIndexStr(projectId), DEFAULT_OPTIONS)
  });

  /** 生成 model.ts */
  const modelStr = await createModel(interfaces, { projectId, });
  outputFiles.push({
    path: `${rapperPath}/model.ts`,
    content: format(modelStr, DEFAULT_OPTIONS)
  });

  /** 生成 request.ts */
  Creator.createRequestStr && outputFiles.push({
    path: `${rapperPath}/request.ts`,
    content: format(Creator.createRequestStr(interfaces, { projectId, }), DEFAULT_OPTIONS)
  });

  /** 生成 base-fetch.ts */
  if (!fs.existsSync(`${rapperPath}/base-fetch.ts`)) {
    outputFiles.push({
      path: `${rapperPath}/base-fetch.ts`,
      content: format(baseFetchStr, DEFAULT_OPTIONS)
    });
  }

  /** 生成 redux runtime.ts */
  if (type === 'redux') {
    outputFiles.push({
      path: `${rapperPath}/runtime.ts`,
      content: format(runtimeStr, DEFAULT_OPTIONS)
    });
    outputFiles.push({
      path: `${rapperPath}/types.ts`,
      content: format(reduxTypesStr, DEFAULT_OPTIONS)
    });
  }

  return Promise.all(
    outputFiles.map(({ path, content }) => writeFile(path, content))
  )
    .then(() => {
      console.log(chalk.green(`rapper: 同步成功！共同步:${interfaces.length} 个接口`));
    })
    .catch(err => {
      console.log(chalk.red(err));
    });
}
