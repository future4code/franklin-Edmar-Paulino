export interface IGetProfileInputDTO {
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

export interface IUserDB {
    id: string,
    name: string,
    email: string,
    password: string
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
        private password: string
    ) {}

    public getId = (): string => this.id;

    public getName = (): string => this.name;

    public getEmail = (): string => this.email;
    
    public getPassword = (): string => this.password;
}

export class UserFollow {
    constructor(
        private id: string,
        private userToFollowId: string
    ) {}

    public getId = (): string => this.id;

    public getUserToFollowId = (): string => this.userToFollowId;
}
