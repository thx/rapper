import createApi = require('./api');
import { resolve } from 'path';

createApi({
  projectId: 2025,
  folder: resolve(__dirname, '../api'),
  requestFactory: () => {
    return `
  import axios, { AxiosRequestConfig } from 'axios';
  function request(req: Req, cfg?: AxiosRequestConfig): Promise<Res> {
    return new Promise<Res>((resolve, reject) => {
      axios({
        url,
        method,
        ...cfg
      })
        .then(res => {
          const data: Res = res.data;
          resolve(data);
        })
        .catch(reject);
    });
  }
  export default request;
  `;
  },
  urlMapper: (url) => url.replace('https://brandsearch.taobao.com', 'brandsearch')
})
  .then(() => {
    console.log('success');
  })
  .catch(err => {
    console.log(err);
  });
