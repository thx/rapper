export namespace Interface {
    export interface Property {
        id: number
        scope: string
        type: string
        pos: number
        name: string
        rule?: string
        value: string
        description: string
        parentId: number
        priority: number
        interfaceId: number
        creatorId: number
        moduleId: number
        repositoryId: number
        required: boolean
        createdAt: Date
        updatedAt: Date
        deletedAt?: any
    }

    export interface Root {
        id: number
        name: string
        url: string
        method: string
        description: string
        priority: number
        status: number
        creatorId: number
        lockerId?: any
        moduleId: number
        repositoryId: number
        createdAt: Date
        updatedAt: Date
        deletedAt?: any
        locker?: any
        properties: Property[]
    }
}

export type Intf = Interface.Root & { modelName: string }

export interface IModules {
    id: number
    name: string
    description: string
    priority: number
    creatorId: number
    repositoryId: number
    createdAt: Date
    updatedAt: Date
    deletedAt?: Date | null
    interfaces: Intf[]
}

export interface ICollaborator {
    id: number
    name: string
    description: string
    logo?: any
    visibility: boolean
    ownerId: number
    organizationId?: any
    creatorId: number
    lockerId?: any
    createdAt: Date
    updatedAt: Date
    deletedAt?: any
}

/** url 匹配函数 */
export interface UrlMapper {
    (url: string): string
}

/** 请求类型 */
export type REQUEST_METHOD = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'OPTIONS' | 'PATCH' | 'HEAD'
