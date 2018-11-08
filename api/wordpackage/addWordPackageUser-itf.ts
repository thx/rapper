/**
 * 本文件由 Pang 从 Rap 中自动生成，请勿修改
 * 接口名：添加自定词包和词
 * Rap: http://rap2.alibaba-inc.com/repository/editor?id=2025&itf=47344
 */
const url: string = "/wordpackage/addWordPackageUser.json";
const method: string = "POST";
export {url, method};

export interface Req {
  wordPackageUser?: {
    productId?: number;
    wordPackageName?: string;
    subProductType?: number;
    [k: string]: any;
  };
  words?: {
    [k: string]: any;
  }[];
  [k: string]: any;
}

export interface Res {
  [k: string]: any;
}
