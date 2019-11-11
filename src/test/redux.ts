import { rapper } from '../index';

rapper({
  type: 'redux',
  /** rap项目id */
  /** 输出文件的目录，默认是 ./src/rapper */
  rapperPath: './test_data/model',
  apiUrl: 'https://rap2api.alibaba-inc.com/repository/get?id=3564',
  /** rap 前端地址，默认是 http://rap2.taobao.org */
  rapUrl: 'https://rap2.alibaba-inc.com',
  codeStyle: {
    semi: true,
    trailingComma: 'all',
    singleQuote: true,
    printWidth: 100,
    tabWidth: 2,
  },
});
// .then(() => {
//     console.log('rapper:generate model success')
// })
// .catch(err => {
//     console.log('rapper:generate model failed', err)
// })
