#!/usr/bin/env node

const { rapper } = require('@ali/rapper-redux');
const { resolve } = require('path');
const chalk = require('chalk');
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
  rapUrl: packageConfig.rapper.rapUrl || 'https://rap2api.alibabainc.com',
});
