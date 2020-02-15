import * as path from 'path';
import * as mkdirp from 'mkdirp';
import * as fs from 'fs';
import * as crypto from 'crypto';
import * as inquirer from 'inquirer';
import chalk from 'chalk';
import { IGeneratedCode } from './types';
const packageJson = require('../package.json');

export function withoutExt(p: string) {
  return p.replace(/\.[^/.]+$/, '');
}

export function relativeImport(from: string, to: string) {
  return withoutExt('./' + path.relative(path.dirname(from), to));
}

export function mixGeneratedCode(codeArr: Array<IGeneratedCode>) {
  const imports = codeArr.map(c => c.import);
  const bodies = codeArr.map(c => c.body);
  const _exports = codeArr.map(c => c.export);
  return `
    ${imports.join('\n')}
    ${bodies.join('\n')}
    ${_exports.join('\n')}
  `;
}

export function writeFile(filepath: string, contents: string) {
  return new Promise((resolve, reject) => {
    mkdirp(path.dirname(filepath), function(err) {
      if (err) return reject(`filepath: ${filepath}, ${err}`);
      fs.writeFile(filepath, contents, err => {
        if (err) return reject(`filepath: ${filepath}, ${err}`);
        resolve();
      });
    });
  });
}

export function moveFile(from: string, to: string) {
  return new Promise((resolve, reject) => {
    mkdirp(path.dirname(to), function(err) {
      if (err) return reject(`读取文件失败: ${from}, ${err}`);
      const contents = fs.readFileSync(from);
      fs.writeFile(to, contents, err => {
        if (err) return reject(`写入文件失败: ${to}, ${err}`);
        resolve();
      });
    });
  });
}

/**
 * 命令是否在根目录执行
 */
export function isInRoot() {
  const cwd = process.cwd();
  const flag = fs.existsSync(path.resolve(cwd, 'package.json'));
  return flag;
}

/** 获取文件md5 */
export function getMd5(fileContent: string) {
  const hash = crypto.createHash('md5');
  hash.update(fileContent);
  return hash.digest('hex');
}

export function getOldProjectId(rappperPath: string): string | undefined {
  const indexPath = path.resolve(process.cwd(), rappperPath, './index.ts');
  try {
    const content = fs.readFileSync(indexPath, 'UTF-8') || '';
    const projectIdStr = content.split('\n')[1] || '';
    const matchArr = projectIdStr.match(/\/\*\sRap仓库id:\s(\S*)\s\*\//) || [];
    return matchArr[1];
  } catch (err) {
    return undefined;
  }
}

/** 模板文件覆盖确认 */
export async function templateFilesOverwriteConfirm() {
  const question = [
    {
      name: 'confirmed',
      type: 'confirm',
      message: chalk.green(
        '检测到您修改了 rapper 生成的模板代码，新生成的模板代码将覆盖您的修改，确定要继续么？',
      ),
      default: false,
    },
  ];
  const answers = await inquirer.prompt(question);
  return answers;
}

/** 存在接口依赖被删确认 */
export async function templateFilesRelyConfirm() {
  const question = [
    {
      name: 'confirmed',
      type: 'confirm',
      message: chalk.green('确定要继续同步接口到本地吗? (会存在页面中调用的接口不存在的风险)？'),
      default: false,
    },
  ];
  const answers = await inquirer.prompt(question);
  return answers;
}

/** 获取当前包名 */
export function getPackageName() {
  return packageJson.name;
}
