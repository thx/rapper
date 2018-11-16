import createApi = require('./api');
import { resolve } from 'path';

createApi(2025, resolve(__dirname, '../api'))
  .then(() => {
    console.log('success');
  })
  .catch(err => {
    console.log(err);
  });
