import { rapper } from '../index';
import { resolve } from 'path';

rapper({
  type: 'requester',
  /** rap项目id */
  projectId: 3564,
  /** 输出文件的目录，默认是 ./model */
  rapperPath: resolve(process.cwd(), './test_data/model'),
  /** rap地址，默认是 http://rap2api.taobao.org */
  rapUrl: 'https://rap2api.alibaba-inc.com',
});
// .then(() => {
//     console.log('rapper:generate model success')
// })
// .catch(err => {
//     console.log('rapper:generate model failed', err)
// })
