import * as path from 'path';
import * as mkdirp from 'mkdirp';
import * as fs from 'fs';
import * as crypto from 'crypto';
import axios from 'axios';
import { IGeneratedCode } from './types';
import latestVersion = require('latest-version');

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

export async function getLatestVersion(name: string): Promise<string> {
  let version = '';
  if (name.indexOf('@ali') > -1) {
    const url = `http://registry.npm.alibaba-inc.com/${name}/latest`;
    const responseData = await axios.get(url, { timeout: 1000 * 20 });
    version = responseData.data.version;
  } else {
    version = await latestVersion(name);
  }
  return version;
}
