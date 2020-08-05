import { createFetch } from './rapper';

const fetch = createFetch({
  prefix: 'http://rap2api.taobao.org/app/mock/237514',
  // query: () => {
  //   return { a: 1, b: [], c: { a: [] } };
  // },
  query: { token: '34213' },
  fetchOption: {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    }
  },
});

export default fetch;
