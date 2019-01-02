export namespace Interface {
    export interface Property {
        id: number;
        scope: string;
        type: string;
        pos: number;
        name: string;
        rule?: any;
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
        properties: Property[];
    }

}

