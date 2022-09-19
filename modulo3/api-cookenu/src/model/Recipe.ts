export interface IMessageOutputDTO {
    message: string
}

export interface ICreateRecipeInputDTO {
    token: string | undefined,
    title: string,
    description: string
}

export interface IGetRecipeInputDTO {
    id: string,
    token: string | undefined
}

export interface IGetRecipeOutputDTO {
    id: string,
    title: string,
    description: string,
    createdAt: string
}

export interface IEditRecipeInputDTO {
    token: string | undefined,
    id: string,
    title: string,
    description: string
}

export interface IRecipeDB {
    id: string,
    creator_user_id: string,
    title: string,
    description: string,
    created_at: Date
}

export class Recipe {
    
    constructor(
        private id: string,
        private creatorUserId: string,
        private title: string,
        private description: string,
        private createdAt: Date = new Date()
    ) {}

    public getId = (): string => this.id;

    public getCreatorUserId = (): string => this.creatorUserId;

    public getTitle = (): string => this.title;

    public getDescription = (): string => this.description;

    public getCreatedAt = (): Date => this.createdAt;
}
