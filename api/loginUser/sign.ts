/**
 * 本文件由 Pang 从 Rap 中自动生成，请勿修改
 * 接口名：签署协议
 * Rap: http://rap2.alibaba-inc.com/repository/editor?id=2025&itf=44968
 */
import axios, {AxiosRequestConfig} from "axios";
import {Req, Res, url, method} from "./sign-itf";
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
