export declare namespace Interface {
    interface Property {
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
    interface Root {
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
        properties: Property[];
    }
}
export declare type Intf = Interface.Root & {
    modelName: string;
};
export interface IModules {
    id: number;
    name: string;
    description: string;
    priority: number;
    creatorId: number;
    repositoryId: number;
    createdAt: Date;
    updatedAt: Date;
    deletedAt?: Date | null;
    interfaces: Intf[];
}
export interface ICollaborator {
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
export declare type RAPPER_TYPE = 'requester' | 'redux';
/** 句尾逗号 */
export declare enum TRAILING_COMMA {
    NONE = "none",
    ALL = "all",
    ES5 = "es5"
}
