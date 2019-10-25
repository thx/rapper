'use strict';
exports.__esModule = true;
const index_1 = require('../index');
const path_1 = require('path');
index_1.rapper({
  type: 'redux',
  /** rap项目id */
  projectId: 3564,
  /** 输出文件的目录，默认是 ./model */
  rapperPath: path_1.resolve(process.cwd(), './test_data/model'),
  /** rap地址，默认是 http://rap2api.taobao.org */
  rapUrl: 'https://rap2api.alibaba-inc.com',
});
// .then(() => {
//     console.log('rapper:generate model success')
// })
// .catch(err => {
//     console.log('rapper:generate model failed', err)
// })
