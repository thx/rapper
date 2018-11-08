import convert from './convert';
import axios from 'axios';
import * as _ from 'lodash';
import * as camelCase from 'camelcase';
import * as path from 'path';
import * as fs from 'fs';
import * as mkdirp from 'mkdirp';

const id = '2025';
const folder = path.resolve(__dirname, 'api');

function urlToName(url: string): string {
  return path.basename(url, path.extname(url));
}

function urlToPath(url: string): string {
  const relativePath = url.replace(/^\/+/g, '');
  const newFileName = path.resolve(path.dirname(relativePath), urlToName(relativePath) + '.d.ts');
  return path.resolve(folder, newFileName);
}

function writeFile(filepath: string, contents: string, cb?) {
  mkdirp(path.dirname(filepath), function(err) {
    if (err) return cb(err);
    fs.writeFile(filepath, contents, cb);
  });
}

axios
  .get(`http://rap2api.alibaba-inc.com/repository/get?id=${id}`)
  .then(response => {
    const modules : Array<any> = response.data.data.modules;
    const interfaces : Array<any> = _(modules)
      .map(m => m.interfaces)
      .flatten()
      .value();
    
    interfaces.forEach(itf => {
        writeFile(urlToPath(itf.url), '213')
    })
  })
  .catch(err => {
    console.log(err);
  });

// function urlToName(url: string): string {
//   return camelCase(
//     url
//       .replace(/\.json$/, '')
//       .replace(/^\/+/g, '')
//       .replace(/\//g, '-')
//   );
// }


