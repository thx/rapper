#!/usr/bin/env node

import { rapper } from './index';
import { resolve } from 'path';
import chalk from 'chalk';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const packageConfig = require(resolve(process.cwd(), './package.json'));

if (!packageConfig.rapper) {
  console.log(chalk.yellow('尚未在 package.json 中配置 rapper'));
  process.exit(1);
}
if (!packageConfig.rapper.projectId) {
  console.log(chalk.yellow('尚未在 package.json 中配置 rapper.projectId'));
  process.exit(1);
}
rapper({
  type: packageConfig.rapper.type || 'redux',
  projectId: packageConfig.rapper.projectId,
  rapperPath: resolve(process.cwd(), './src/models/rapper/'),
  rapUrl: packageConfig.rapper.rapUrl || 'https://rap2.alibaba-inc.com',
  apiUrl: packageConfig.rapper.apiUrl || 'https://rap2api.alibaba-inc.com',
});
