/**
 * 本文件由 Pang 从 Rap 中自动生成，请勿修改
 * 接口名：查找用户词包更新历史
 * Rap: http://rap2.alibaba-inc.com/repository/editor?id=2025&itf=44982
 */
const url: string = "/wordpackage/findMemberWordPackageChange.json";
const method: string = "GET";
export {url, method};

export interface Req {
  [k: string]: any;
}

export interface Res {
  info?: {
    ok?: boolean;
    [k: string]: any;
  };
  data?: {
    count?: number;
    list?: {
      gmtCreate?: string;
      gmtModified?: string;
      id?: number;
      lastDay?: number;
      memberId?: number;
      memberNick?: string;
      newPrice?: number;
      oldPrice?: number;
      operationTime?: string;
      packageName?: string;
      priceDiff?: string;
      userId?: number;
      packageId?: number;
      userNick?: string;
      [k: string]: any;
    }[];
    [k: string]: any;
  };
  [k: string]: any;
}
