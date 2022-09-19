export enum USER_ROLES {
    NORMAL = "NORMAL",
    ADMIN = "ADMIN"
}

export interface ITokenInputDTO {
    token: string | undefined
}

export interface IGetUserProfileInputDTO {
    id: string,
    token: string | undefined
}

export interface IGetProfileOutputDTO {
    id: string,
    name: string,
    email: string
}

export interface IFollowUserInputDTO {
    token: string | undefined,
    userToFollowId: string
}

export interface IUnfollowUserInputDTO {
    token: string | undefined,
    userToUnfollowId: string
}

export interface IMessageOutputDTO {
    message: string
}

export interface IGetUserFeedOutputDTO {
    recipes: {}[] | []
}

export interface IUserDB {
    id: string,
    name: string,
    email: string,
    password: string,
    role: USER_ROLES
}

export interface IUserFollowDB {
    id: string,
    user_to_follow_id: string
}

export class User {
    constructor(
        private id: string,
        private name: string,
        private email: string,
        private password: string,
        private role: USER_ROLES
    ) {}

    public getId = (): string => this.id;

    public getName = (): string => this.name;

    public getEmail = (): string => this.email;
    
    public getPassword = (): string => this.password;

    public getRole = (): USER_ROLES => this.role;
}

export class UserFollow {
    constructor(
        private id: string,
        private userToFollowId: string
    ) {}

    public getId = (): string => this.id;

    public getUserToFollowId = (): string => this.userToFollowId;
}
