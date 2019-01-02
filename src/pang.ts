import createApi = require('./api');
import { resolve } from 'path';

createApi({
  projectId: 2025,
  folder: resolve(__dirname, '../api'),
  requestFactory: (itf, ReqType, ResType) => {
    return `
    import BaseManager = require('mxext/mmanager');
    import BaseModel = require('app/models/basemodel');
    const Manager = BaseManager.create(BaseModel);
    Manager.registerModels([{
      name: 'request',
      url: url,
      type: method
    }])
    function request(req: ${ReqType}, alertError: boolean = true): Promise<${ResType}['data']> {
      return new Promise<${ResType}['data']>((resolve, reject) => {
        Manager.fetchOne({
          name: 'request',
          ${itf.method === 'GET' ? 'urlParams' : 'postParams'}: req,
        },(err, model) => {
          if(err) {
            alertError && alert(err.msg);
            return reject(err);
          }
          resolve(model.get('data'));
        })
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
