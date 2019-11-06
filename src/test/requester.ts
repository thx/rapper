import { rapper } from '../index';

rapper({
  type: 'requester',
  /** rap项目id */
  projectId: 3564,
  /** 输出文件的目录，默认是 ./src/rapper */
  rapperPath: './test_data/model',
  /** rap地址，默认是 http://rap2.taobao.org */
  rapUrl: 'https://rap2.alibaba-inc.com',
  apiUrl: 'https://rap2api.alibaba-inc.com',
  codeStyle: {
    semi: true,
    trailingComma: 'all',
    singleQuote: true,
    printWidth: 100,
    tabWidth: 2,
  },
  resSelector: `type ResSelector<T extends { result: any }> = T['result']`,
});
// .then(() => {
//     console.log('rapper:generate model success')
// })
// .catch(err => {
//     console.log('rapper:generate model failed', err)
// })
