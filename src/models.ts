#!/usr/bin/env node

import { rapper } from './index';
import { resolve } from 'path';
import chalk from 'chalk';
import * as program from 'commander';
import { IRapper } from './rapper';

// Todo: 增加 checkUpdate

(() => {
  program
    .option('--type <typeName>', '设置类型')
    .option('--apiUrl <apiUrl>', '设置Rap平台后端地址')
    .option('--rapUrl <rapUrl>', '设置Rap平台前端地址')
    .option('--rapperPath <rapperPath>', '设置生成代码所在目录')
    .option('--resSelector <resSelector>', '响应数据类型转换配置');

  program.parse(process.argv);

  let rapperConfig: IRapper;
  if (program.type && program.apiUrl && program.rapUrl) {
    /** 通过 scripts 配置 */
    rapperConfig = {
      type: program.type,
      apiUrl: program.apiUrl,
      rapUrl: program.rapUrl,
      rapperPath: resolve(process.cwd(), program.rapperPath || './src/models/rapper/'),
    };
    program.resSelector && (rapperConfig.resSelector = program.resSelector);
  } else {
    /** 通过 package.json 的 rapper 字段配置 */
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const packageConfig = require(resolve(process.cwd(), './package.json'));

    if (!packageConfig.rapper) {
      console.log(chalk.yellow('尚未在 package.json 中配置 rapper，请参考配置手册'));
      process.exit(1);
    }
    const { projectId, type, rapUrl, apiUrl, rapperPath, resSelector } = packageConfig.rapper;
    if (!projectId) {
      console.log(chalk.yellow('尚未在 package.json 中配置 rapper.projectId'));
      process.exit(1);
    }
    rapperConfig = {
      type: type || 'redux',
      apiUrl: `${apiUrl}/repository/get?id=${projectId}`,
      rapUrl,
      rapperPath: resolve(process.cwd(), rapperPath || './src/models/rapper/'),
    };
    resSelector && (rapperConfig.resSelector = resSelector);
  }

  rapper(rapperConfig);
})();
