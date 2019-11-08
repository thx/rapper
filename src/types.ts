export namespace Interface {
  export interface Property {
    id: number;
    scope: string;
    type: string;
    pos: number;
    name: string;
    rule?: string;
    value: string;
    description: string;
    parentId: number;
    priority: number;
    interfaceId: number;
    creatorId: number;
    moduleId: number;
    repositoryId: number;
    required: boolean;
    createdAt: Date;
    updatedAt: Date;
    deletedAt?: any;
  }

  export interface Root {
    id: number;
    name: string;
    url: string;
    method: string;
    description: string;
    priority: number;
    status: number;
    creatorId: number;
    lockerId?: any;
    moduleId: number;
    repositoryId: number;
    createdAt: Date;
    updatedAt: Date;
    deletedAt?: any;
    locker?: any;
    properties: Array<Property>;
  }
}

export type Intf = Interface.Root & { modelName: string };

export interface Modules {
  id: number;
  name: string;
  description: string;
  priority: number;
  creatorId: number;
  repositoryId: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date | null;
  interfaces: Array<Intf>;
}

export interface Collaborator {
  id: number;
  name: string;
  description: string;
  logo?: any;
  visibility: boolean;
  ownerId: number;
  organizationId?: any;
  creatorId: number;
  lockerId?: any;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: any;
}

/** url 匹配函数 */
export interface UrlMapper {
  (url: string): string;
}

/** 生成模板类型 */
export type RAPPER_TYPE = 'requester' | 'redux';

/** 句尾逗号 */
export enum TRAILING_COMMA {
  NONE = 'none',
  ALL = 'all',
  ES5 = 'es5',
}

/** 生成出的代码 */
export interface GeneratedCode {
  /** 顶部 import */
  import: string;
  body: string;
  export: string;
}

/** create 函数的参数 */
export interface CreatorExtr {
  rapUrl: string;
  resSelector: string;
}
