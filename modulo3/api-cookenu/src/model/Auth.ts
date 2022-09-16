export interface ISignupAuthInputDTO {
    name: string,
    email: string,
    password: string
}

export interface ILoginAuthInputDTO {
    email: string,
    password: string
}

export interface IAuthOutputDTO {
    access_token: string
}
