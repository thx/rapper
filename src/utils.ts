import * as path from 'path';
import * as mkdirp from 'mkdirp';
import * as fs from 'fs';
import { GeneratedCode } from './types';

export function withoutExt(p: string) {
  return p.replace(/\.[^/.]+$/, '');
}

export function relativeImport(from: string, to: string) {
  return withoutExt('./' + path.relative(path.dirname(from), to));
}

export function mixGeneratedCode(codeArr: Array<GeneratedCode>) {
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
