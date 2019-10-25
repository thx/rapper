'use strict';
var __assign =
  (this && this.__assign) ||
  function() {
    __assign =
      Object.assign ||
      function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (const p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
exports.__esModule = true;
const chalk_1 = require('chalk');
/** 给接口增加 modelName */
function getIntfWithModelName(intfs, urlMapper) {
  if (urlMapper === void 0) {
    urlMapper = function(t) {
      return t;
    };
  }
  return intfs.map(function(itf) {
    return __assign({}, itf, { modelName: rap2name(itf, urlMapper) });
  });
}
exports.getIntfWithModelName = getIntfWithModelName;
/**
 * 转换rap接口名称
 * 比如 magix 将 / 转换成 _ ，RESTful接口，清除占位符
 * 参数 noTransform 用来配置是否 将 / 转换成 _ ，默认转换
 */
function rap2name(itf, urlMapper) {
  if (urlMapper === void 0) {
    urlMapper = function(t) {
      return t;
    };
  }
  // copy from http://gitlab.alibaba-inc.com/thx/magix-cli/blob/master/util/rap.js
  const method = itf.method,
    url = itf.url,
    projectId = itf.repositoryId,
    id = itf.id;
  const apiUrl = urlMapper(url);
  const regExp = /^(?:https?:\/\/[^\/]+)?(\/?.+?\/?)(?:\.[^./]+)?$/;
  const regExpExec = regExp.exec(apiUrl);
  if (!regExpExec) {
    console.log(
      chalk_1['default'].red(
        '\n  \u2718 \u60A8\u7684rap\u63A5\u53E3url\u8BBE\u7F6E\u683C\u5F0F\u4E0D\u6B63\u786E\uFF0C\u53C2\u8003\u683C\u5F0F\uFF1A/api/test.json (\u63A5\u53E3url:' +
          apiUrl +
          ', \u9879\u76EEid:' +
          projectId +
          ', \u63A5\u53E3id:' +
          id +
          ')\n',
      ),
    );
    return;
  }
  const urlSplit = regExpExec[1].split('/');
  //接口地址为RESTful的，清除占位符
  //api/:id/get -> api//get
  //api/bid[0-9]{4}/get -> api//get
  urlSplit.forEach(function(item, i) {
    if (/\:id/.test(item)) {
      urlSplit[i] = '$id';
    } else if (/[\[\]\{\}]/.test(item)) {
      urlSplit[i] = '$regx';
    }
  });
  //只去除第一个为空的值，最后一个为空保留
  //有可能情况是接口 /api/login 以及 /api/login/ 需要同时存在
  if (urlSplit[0].trim() === '') {
    urlSplit.shift();
  }
  urlSplit.unshift(method.toLocaleUpperCase());
  return urlSplit.join('/');
}
exports.rap2name = rap2name;
/** 接口去重 */
function uniqueItfs(itfs) {
  const itfMap = new Map();
  itfs.forEach(function(itf) {
    const name = itf.modelName;
    if (itfMap.has(name)) {
      itfMap.get(name).push(itf);
    } else {
      itfMap.set(name, [itf]);
    }
  });
  const newItfs = [];
  itfMap.forEach(function(dupItfs) {
    dupItfs.sort(
      // 后更改的在前面
      function(a, b) {
        return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
      },
    );
    newItfs.push(dupItfs[0]);
    if (dupItfs.length > 1) {
      console.log(
        chalk_1['default'].yellow('发现重复接口，修改时间最晚的被采纳：\n') +
          dupItfs
            .map(function(itf, index) {
              const str =
                itf.name +
                ': http://rap2.alibaba-inc.com/repository/editor?id=' +
                itf.repositoryId +
                '&mod=' +
                itf.moduleId +
                '&itf=' +
                itf.id;
              return index === 0 ? chalk_1['default'].green(str) : chalk_1['default'].gray(str);
            })
            .join('\n') +
          '\n',
      );
    }
  });
  return newItfs;
}
exports.uniqueItfs = uniqueItfs;
