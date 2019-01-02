import convert from './convert';
import axios from 'axios';
import * as _ from 'lodash';
import * as path from 'path';
import * as fs from 'fs';
import * as mkdirp from 'mkdirp';
import { format } from 'json-schema-to-typescript/dist/src/formatter';
import { DEFAULT_OPTIONS } from 'json-schema-to-typescript';
import { Interface } from "./itf";

function urlToName(url: string, namePrefix: string = ''): string {
  url = url.trim();
  return namePrefix + path.basename(url, path.extname(url));
}

function urlToPath(folder: string, url: string, suffix: string = ''): string {
  const relativePath = url.trim().replace(/^\/+/g, '');
  const newFileName = path.join(
    path.dirname(relativePath),
    `${urlToName(relativePath)}${suffix}.ts`
  );
  return path.resolve(folder, newFileName);
}

function writeFile(filepath: string, contents: string) {
  return new Promise((resolve, reject) => {
    mkdirp(path.dirname(filepath), function(err) {
      if (err) return reject(`filepath: ${filepath}, ${err}`);
      fs.writeFile(filepath, contents, err => {
        if (err) return reject(`filepath: ${filepath}, ${err}`);
        resolve();
      });
    });
  });
}


interface CreateApiParams {
  projectId: number;
  folder: string;
  requestFactory: (itf: Interface.Root, ReqType: string, ResType: string) => string;
  urlMapper?: (url: string) => string;
}

async function createApi({
  projectId,
  folder,
  requestFactory,
  urlMapper = s => s
}: CreateApiParams) {
  return axios
    .get(`http://rap2api.alibaba-inc.com/repository/get?id=${projectId}`)
    .then(response => {
      const modules: Array<any> = response.data.data.modules;
      const interfaces: Array<any> = _(modules)
        .map(m => m.interfaces)
        .flatten()
        .value();

      return Promise.all(
        interfaces.map(itf => {
          const url = urlMapper(itf.url);
          const writeItf = ([reqItf, resItf]: [string, string]) => {
            const itfFileName = urlToPath(folder, url, '-itf');
            return Promise.all([
              writeFile(
                itfFileName,
                format(
                  `/**
                * 本文件由 Rapper 从 Rap 中自动生成，请勿修改
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
                )
              ),
              writeFile(
                urlToPath(folder, url),
                format(
                  `/**
                * 本文件由 Rapper 从 Rap 中自动生成，请勿修改
                * 接口名：${itf.name}
                * Rap: http://rap2.alibaba-inc.com/repository/editor?id=${projectId}&itf=${
                    itf.id
                  }
                */
                import { Req, Res, url, method } from './${path.basename(
                  itfFileName,
                  path.extname(itfFileName)
                )}';
                /* 自定义请求代码开始 */
                ${requestFactory(itf,'Req','Res')}
                /* 自定义请求代码结束 */
                `,
                  DEFAULT_OPTIONS
                )
              )
            ]);
          };
          return convert(itf).then(writeItf);
        })
      );
    });
}

export = createApi;
