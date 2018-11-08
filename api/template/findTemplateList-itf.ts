/**
 * 本文件由 Pang 从 Rap 中自动生成，请勿修改
 * 接口名：获取创意模板库
 * Rap: http://rap2.alibaba-inc.com/repository/editor?id=2025&itf=41366
 */
const url: string = "/template/findTemplateList.json";
const method: string = "GET";
export {url, method};

export interface Req {
  templatePlatform?: string;
  campaignType?: number;
  templateSize?: string;
  smartType?: number;
  pageSize?: number;
  offset?: number;
  page?: number;
  toPage?: number;
  perPageSize?: string;
  level?: number;
  templateType?: number;
  productId?: number;
  [k: string]: any;
}

export interface Res {
  data?: {
    count?: number;
    list?: {
      categories?: {
        [k: string]: any;
      }[];
      categoryNameList?: null;
      centralStatus?: number;
      comments?: string;
      format?: {
        [k: string]: any;
      }[];
      gmtCreate?: string;
      gmtModified?: string;
      hot?: null;
      id?: number;
      layout?: null;
      level?: number;
      metaData?: null;
      name?: null;
      picturePath?: string;
      productId?: number;
      reactRenderType?: null;
      reactType?: null;
      resizeable?: number;
      sceneNameList?: {
        [k: string]: any;
      }[];
      scenes?: null;
      settingMap?: {
        authority_control?: string;
        pic_path?: string;
        render_type?: string;
        template_level?: string;
        template_metadata?: string;
        template_url?: string;
        [k: string]: any;
      };
      smartType?: {
        [k: string]: any;
      }[];
      status?: number;
      style?: null;
      templateFields?: {
        [k: string]: any;
      }[];
      templateId?: number;
      templatePackageId?: number;
      templatePlatform?: number;
      templateSize?: {
        [k: string]: any;
      }[];
      templateType?: number;
      templateUrl?: string;
      typeNameList?: null;
      contentDisplayFormatDesc?: string;
      [k: string]: any;
    }[];
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
