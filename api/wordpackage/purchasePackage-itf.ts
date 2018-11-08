/**
 * 本文件由 Pang 从 Rap 中自动生成，请勿修改
 * 接口名：购买词包
 * Rap: http://rap2.alibaba-inc.com/repository/editor?id=2025&itf=47446
 */
const url: string = "/wordpackage/purchasePackage.json";
const method: string = "POST";
export {url, method};

export interface Req {
  package?: {
    packageId?: number;
    productId?: number;
    subProductType?: number;
    [k: string]: any;
  };
  [k: string]: any;
}

export interface Res {
  [k: string]: any;
}
