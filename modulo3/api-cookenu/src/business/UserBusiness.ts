import UserDatabase from "../database/UserDatabase";
import { IGetProfileInputDTO, IGetProfileOutputDTO, IGetUserProfileInputDTO } from "../model/User";
import Authenticator, { ITokenPayload } from "../services/Authenticator";

class UserBusiness {
    constructor(
        private userDatabase: UserDatabase,
        private authenticator: Authenticator
    ) {}
    
    public getProfile = async (input: IGetProfileInputDTO): Promise<IGetProfileOutputDTO> => {
        const { token } = input;

        if (!token) {
            throw new Error("Token de acesso não informado!");
        }

        const tokenData: ITokenPayload = this.authenticator.getTokenData(token);
        const user: any = await this.userDatabase.getUserById(tokenData.id);

        if (!user) {
            throw new Error("Token de acesso inválido");
        }

        const response: IGetProfileOutputDTO = {
            id: user.id,
            name: user.name,
            email: user.email
        };

        return response;
    };

    public getUserProfile = async (input: IGetUserProfileInputDTO): Promise<IGetProfileOutputDTO> => {
        const { id, token } = input;

        if (!token) {
            throw new Error("Token de acesso não informado!");
        }

        if (!id) {
            throw new Error("ID do usuário não informado!");
        }

        const tokenData: ITokenPayload = this.authenticator.getTokenData(token);
        const tokenIdExists: any = await this.userDatabase.getUserById(tokenData.id);

        if (!tokenIdExists) {
            throw new Error("Token de acesso inválido!");
        }

        const user: any = await this.userDatabase.getUserById(id);

        if (!user) {
            throw new Error("ID inválido");
        }

        const response: IGetProfileOutputDTO = {
            id: user.id,
            name: user.name,
            email: user.email
        };

        return response;
    };
}

export default UserBusiness;
