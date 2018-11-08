/**
 * 本文件由 Pang 从 Rap 中自动生成，请勿修改
 * 接口名：一站bp鉴权
 * Rap: http://rap2.alibaba-inc.com/repository/editor?id=2025&itf=47390
 */
const url: string = "/onebp/getAdplusAuthority.json";
const method: string = "GET";
export {url, method};

export interface Req {
  [k: string]: any;
}

export interface Res {
  data?: {
    authority?: {
      adplusEnterUrl?: string;
      adplusMemberStatus?: number;
      memberId?: number;
      menuAuthorityList?: {
        authorityCode?: string;
        menuCnName?: string;
        menuCode?: string;
        menuLinkUrl?: string;
        sortNum?: number;
        [k: string]: any;
      }[];
      [k: string]: any;
    };
    memberId?: null;
    userId?: number;
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
