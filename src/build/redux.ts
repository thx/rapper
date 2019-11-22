import { rapper } from '../index';

rapper({
  type: 'redux',
  /** 必填，api仓库地址，从仓库的数据按钮可以获得 */
  apiUrl:
    'http://rap2api.taobao.org/repository/get?id=237514&token=B9KfU4VLueRL5cX1R2ZYXjy7VNIU0b0r',
  /** rap 前端地址，默认是 http://rap2.taobao.org */
  rapUrl: 'https://rap2.taobao.org',
  /** 输出文件的目录，默认是 ./src/rapper */
  rapperPath: './test/src/models/rapper',
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
