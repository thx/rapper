/**
 * 扫描项目文件，排除是否存在 rap 接口已删除，但是项目仍然在使用的接口
 */
import * as fs from 'fs';
import * as path from 'path';
import chalk from 'chalk';
import { Intf } from '../types';
import { resolve } from 'path';

/**
 * 获取所有需要扫描的文件
 * @param parentPath
 */
function getFiles(parentPath: string): Array<string> {
  let fileList: Array<string> = [];

  /* 不扫描无效路径 */
  if (parentPath.indexOf('/.') > -1 || parentPath.indexOf('node_modules') > -1) {
    return fileList;
  }

  const files = fs.readdirSync(parentPath);

  files.forEach(item => {
    item = path.join(parentPath, item);

    if (item.indexOf('src') < 0) {
      return;
    }

    const stat = fs.statSync(item);
    try {
      if (stat.isDirectory()) {
        fileList = fileList.concat(getFiles(item));
      } else if (stat.isFile()) {
        fileList.push(item);
      }
    } catch (error) {
      console.log(chalk.red(`rapper: Rap 接口引用扫描失败, ${error}`));
    }
  });
  return fileList;
}

interface ErrorList {
  /** 被删除的接口 modelName */
  key: string;
  /** 被删除的接口所在文件 */
  filePath: string;
  /** 所在文件的行数 */
  line: number;
  /** 所在文件的列数 */
  start: number;
}
function scanAllfiles(interfaces: Array<Intf>, fileList: Array<string>): Array<ErrorList> {
  const strReg = /[\'\"]+(GET|POST|PUT|DELETE|OPTIONS|PATCH|HEAD)\/([^\'\"]*)[^(REQUEST)(SUCCESS)(FAILURE)]{1}[\'\"]+/g;

  const errorList: Array<ErrorList> = [];
  fileList.forEach(filePath => {
    /** 文件的扩展名 */
    const extName = path.extname(filePath);
    if (!['.ts', '.js', '.vue', '.es'].includes(extName)) {
      return;
    }
    /** 文件的内容 */
    const content = fs.readFileSync(filePath, 'UTF-8');
    /** 每一行比对 */
    content.split('\n').forEach((rowText, i) => {
      const regResult = rowText.match(strReg);
      if (regResult && regResult.length > 0) {
        regResult.forEach(item => {
          item = item.replace(/\'|\"/gi, '');
          /** 在 interfaces 里面找不到，说明无效Rap引用了 */
          const isExist = !!interfaces.find(({ modelName }) => modelName === item);
          if (!isExist) {
            const start = rowText.indexOf(item);
            errorList.push({
              key: item,
              filePath: resolve(process.cwd(), filePath),
              start,
              line: i + 1,
            });
          }
        });
      }
    });
  });
  return errorList;
}

/**
 * 扫描
 * @param interfaces, Rap平台同步的接口
 * @param excludePath, 排除检测的文件 (已默认排除 node_modules，无需配置此项)
 */
export default function(interfaces: Array<Intf>, excludePaths: Array<string>) {
  let fileList = getFiles('./');
  fileList = fileList.filter(file => {
    file = resolve(process.cwd(), file);
    return !excludePaths.find(exclude => file.indexOf(resolve(process.cwd(), exclude)) > -1);
  });
  return scanAllfiles(interfaces, fileList);
}
