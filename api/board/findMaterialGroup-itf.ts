/**
 * 本文件由 Pang 从 Rap 中自动生成，请勿修改
 * 接口名：获取创意元素
 * Rap: http://rap2.alibaba-inc.com/repository/editor?id=2025&itf=41392
 */
const url: string = "/board/findMaterialGroup.json";
const method: string = "GET";
export {url, method};

export interface Req {
  size?: string;
  templateId?: number;
  deviceType?: number;
  productId?: number;
  skip?: number;
  limit?: number;
  callback?: string;
  wordPackageIds?: {
    [k: string]: any;
  }[];
  [k: string]: any;
}

export interface Res {
  data?: {
    count?: number;
    rcmdList?: {
      elementGroupId?: number;
      recReason?: string;
      materialGroupList?: {
        id?: number;
        auditStatus?: number;
        materialList?: {
          id?: number;
          type?: number;
          content?: string;
          [k: string]: any;
        }[];
        [k: string]: any;
      }[];
      [k: string]: any;
    }[];
    list?: {
      id?: number;
      auditStatus?: number;
      materialList?: {
        id?: number;
        type?: number;
        content?: string;
        [k: string]: any;
      }[];
      [k: string]: any;
    }[];
    memberId?: number;
    [k: string]: any;
  };
  info?: {
    disableTime?: boolean;
    errorCode?: null;
    lockSla?: boolean;
    message?: null;
    ok?: boolean;
    unlockUrl?: null;
    [k: string]: any;
  };
  [k: string]: any;
}
