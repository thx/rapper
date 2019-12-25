import { createFetch } from './rapper';

const fetch = createFetch({
  prefix: 'http://rap2api.taobao.org/app/mock/237514',
  query: {
    token: 'afdsfasdfsd',
  },
});

export default fetch;
