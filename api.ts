import convert from './convert';
import axios from 'axios';
import * as _ from 'lodash';
import * as camelCase from 'camelcase';
import * as path from 'path';
import * as fs from 'fs';
import * as mkdirp from 'mkdirp';
import { format } from 'json-schema-to-typescript/dist/src/formatter';
import { DEFAULT_OPTIONS } from 'json-schema-to-typescript';
const projectId = '2025';
const folder = path.resolve(__dirname, 'api');

function urlToName(url: string, namePrefix: string = ''): string {
  url = url.trim();
  return namePrefix + path.basename(url, path.extname(url));
}

function urlToPath(url: string, suffix: string = ''): string {
  const relativePath = url.replace(/^\/+/g, '').trim();
  const newFileName = path.join(
    path.dirname(relativePath),
    `${urlToName(relativePath)}${suffix}.ts`
  );
  return path.resolve(folder, newFileName);
}

function writeFile(filepath: string, contents: string, cb?) {
  mkdirp(path.dirname(filepath), function(err) {
    if (err) return cb(err);
    fs.writeFile(filepath, contents, cb);
  });
}

axios
  .get(`http://rap2api.alibaba-inc.com/repository/get?id=${projectId}`)
  .then(response => {
    const modules: Array<any> = response.data.data.modules;
    const interfaces: Array<any> = _(modules)
      .map(m => m.interfaces)
      .flatten()
      .value();

    interfaces.forEach(itf => {
      const writeItf = ([reqItf, resItf]) => {
        const itfFileName = urlToPath(itf.url, '-itf');
        writeFile(
          itfFileName,
          format(
            `/**
            * 本文件由 Pang 从 Rap 中自动生成，请勿修改
            * 接口名：${itf.name}
            * Rap: http://rap2.alibaba-inc.com/repository/editor?id=${projectId}&itf=${
              itf.id
            }
            */
          const url: string = '${itf.url}';
          const method: string = '${itf.method}'
          export { url, method };

          ${reqItf}

          ${resItf}`,
            DEFAULT_OPTIONS
          ),
          () => {}
        );
        writeFile(
          urlToPath(itf.url),
          format(
            `/**
            * 本文件由 Pang 从 Rap 中自动生成，请勿修改
            * 接口名：${itf.name}
            * Rap: http://rap2.alibaba-inc.com/repository/editor?id=${projectId}&itf=${
              itf.id
            }
            */
            import axios, { AxiosRequestConfig } from 'axios';
            import { Req, Res, url, method } from './${path.basename(
              itfFileName,
              path.extname(itfFileName)
            )}';
            export default function(req: Req, cfg?: AxiosRequestConfig): Promise<Res> {
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
            `,
            DEFAULT_OPTIONS
          ),
          () => {}
        );
      };
      convert(itf)
        .then(writeItf)
        .catch(err => {});
    });
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
