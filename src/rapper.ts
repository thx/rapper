import chalk from 'chalk';
import { format } from 'json-schema-to-typescript/dist/src/formatter';
import { DEFAULT_OPTIONS } from 'json-schema-to-typescript';
import { UrlMapper, RAP_TYPE, TRAILING_COMMA } from './types';
import { createModel, createFetch } from './requester/index';
import {
  createIndexStr,
  createReduxStr,
  createReduxFetchStr,
  createUseRapStr
} from './redux/createRedux';
import { relativeImport, writeFile } from './utils';
import { getInterfaces, getIntfWithModelName, uniqueItfs } from './common';

interface ICreateModel {
  projectId: number;
  urlMapper?: UrlMapper;
  useCommonJsModule?: boolean;
  additionalProperties?: boolean;
  optionalExtra?: boolean;
  rapUrl?: string;
  /** 生成出 rapper 的文件夹地址 */
  rapperPath?: string;
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
    trailingComma?: TRAILING_COMMA;
  };
}
export default async function({
  projectId,
  modelPath,
  requesterPath,
  baseFetchPath,
  urlMapper = t => t,
  useCommonJsModule = false,
  additionalProperties = false,
  optionalExtra = true,
  rapUrl = 'http://rap2.taobao.org',
  outputPath = './model',
  type = 'default',
  codeStyle
}: ICreateModel) {
  DEFAULT_OPTIONS.style = {
    ...DEFAULT_OPTIONS.style,
    singleQuote: true,
    semi: false,
    trailingComma: TRAILING_COMMA.ES5
  };
  if (codeStyle && typeof codeStyle === 'object') {
    DEFAULT_OPTIONS.style = { ...DEFAULT_OPTIONS.style, ...codeStyle };
  }

  /** 输出文件集合 */
  const outputFiles = [];

  /** 获取所有接口 */
  const interfaces = uniqueItfs(
    getIntfWithModelName(
      await getInterfaces(rapUrl, projectId),
      urlMapper,
      type
    )
  );

  /** 生成 model.ts */
  const modelStr = await createModel(interfaces, {
    projectId,
    additionalProperties
  });
  outputFiles.push({
    path: outputPath ? `${outputPath}/model.ts` : modelPath,
    content: format(modelStr, DEFAULT_OPTIONS)
  });

  if (type === 'redux') {
    if (!outputPath) {
      console.log(chalk.red('配置文件中 outputPath 不能为空'));
      return;
    }
    /** 生成 index.ts */
    outputFiles.push({
      path: `${outputPath}/index.ts`,
      content: format(createIndexStr(), DEFAULT_OPTIONS)
    });

    /** 生成 redux.ts */
    outputFiles.push({
      path: `${outputPath}/redux.ts`,
      content: format(
        createReduxStr(interfaces, { projectId }),
        DEFAULT_OPTIONS
      )
    });

    /** 生成 redux 版本的 fetch.ts */
    outputFiles.push({
      path: `${outputPath}/fetch.ts`,
      content: format(
        createReduxFetchStr(projectId, interfaces),
        DEFAULT_OPTIONS
      )
    });

    /** 生成 useRap.ts */
    outputFiles.push({
      path: `${outputPath}/useRap.ts`,
      content: format(createUseRapStr(interfaces), DEFAULT_OPTIONS)
    });
  } else if (requesterPath) {
    /** 生成 fetch.ts */
    const relModelPath = relativeImport(requesterPath, modelPath);
    const relBaseFetchPath = relativeImport(requesterPath, baseFetchPath);

    const fetchStr = createFetch(interfaces, {
      projectId,
      useCommonJsModule,
      optionalExtra,
      relModelPath,
      relBaseFetchPath
    });
    outputFiles.push({
      path: requesterPath,
      content: format(fetchStr, DEFAULT_OPTIONS)
    });
  }

  return Promise.all(
    outputFiles.map(({ path, content }) => writeFile(path, content))
  )
    .then(() => {
      console.log(
        chalk.green(
          `rapper-redux: model 生成成功！共同步:${interfaces.length} 个接口`
        )
      );
    })
    .catch(err => {
      console.log(chalk.red(err));
    });
}
