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
    tile: string,
    description: string,
    createdAt: string
}

export interface IRecipeDB {
    id: string,
    creator_user_id: string,
    title: string,
    description: string,
    created_at: string
}
