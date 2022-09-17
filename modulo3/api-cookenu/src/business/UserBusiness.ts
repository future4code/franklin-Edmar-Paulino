import UserDatabase from "../database/UserDatabase";
import { IFollowUserInputDTO, ITokenInputDTO, IGetProfileOutputDTO, IGetUserProfileInputDTO, IMessageOutputDTO, IUnfollowUserInputDTO, UserFollow, IGetUserFeedOutputDTO } from "../model/User";
import Authenticator, { ITokenPayload } from "../services/Authenticator";

class UserBusiness {
    constructor(
        private userDatabase: UserDatabase,
        private authenticator: Authenticator
    ) {}
    
    public getProfile = async (input: ITokenInputDTO): Promise<IGetProfileOutputDTO> => {
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

    public followUser = async (input: IFollowUserInputDTO): Promise<IMessageOutputDTO> => {
        const { token, userToFollowId } = input;

        if (!token) {
            throw new Error("Token de acesso inválido!");
        }

        if (!userToFollowId || typeof userToFollowId !== "string") {
            throw new Error("Parâmetro 'userToFollowId' inválido");
        }

        const tokenData: ITokenPayload = this.authenticator.getTokenData(token);

        if (tokenData.id === userToFollowId) {
            throw new Error("Seu ID é igual ao ID do usuário que deseja seguir");
        }

        const user: any = await this.userDatabase.getUserById(tokenData.id);

        if (!user) {
            throw new Error("Token de acesso inválido!");
        }

        const userToFollow: any = await this.userDatabase.getUserById(userToFollowId);

        if (!userToFollow) {
            throw new Error("ID de usuário para seguir inválido!");
        }

        const userFollow: UserFollow = new UserFollow(user.id, userToFollow.id);
        const alreadyFollow: boolean = await this.userDatabase.checkFollow(userFollow);

        if (alreadyFollow) {
            throw new Error("Você já segue este usuário");
        }

        await this.userDatabase.followUser(userFollow);

        const response: IMessageOutputDTO = { message: "Followed successfully" };

        return response;
    };
    
    public unfollowUser = async (input: IUnfollowUserInputDTO): Promise<IMessageOutputDTO> => {
        const { token, userToUnfollowId } = input;

        if (!token) {
            throw new Error("Token de acesso inválido!");
        }

        if (!userToUnfollowId || typeof userToUnfollowId !== "string") {
            throw new Error("Parâmetro 'userToUnfollowId' inválido");
        }

        const tokenData: ITokenPayload = this.authenticator.getTokenData(token);
        const user: any = await this.userDatabase.getUserById(tokenData.id);

        if (!user) {
            throw new Error("Token de acesso inválido!");
        }

        const userToUnfollow: any = await this.userDatabase.getUserById(userToUnfollowId);

        if (!userToUnfollow) {
            throw new Error("ID de usuário para deixar de seguir inválido!");
        }

        const userFollow: UserFollow = new UserFollow(user.id, userToUnfollowId);
        const alreadyFollow: boolean = await this.userDatabase.checkFollow(userFollow);

        if (!alreadyFollow) {
            throw new Error("Você não segue este usuário");
        }

        const affectedRows: number = await this.userDatabase.unfollowUser(userFollow);

        if (affectedRows === 0) {
            throw new Error("Não foi possível deixar de seguir este usuário");
        }

        const response: IMessageOutputDTO = { message: "Unfollowed successfully" };

        return response;
    };

    public getUserFeed = async (input: ITokenInputDTO): Promise<IGetUserFeedOutputDTO> => {
        const { token } = input;

        if (!token) {
            throw new Error("Token de acesso não enviado!");
        }

        const tokenData: ITokenPayload = await this.authenticator.getTokenData(token);
        const user: any = await this.userDatabase.getUserById(tokenData.id);

        if (!user) {
            throw new Error("Token de acesso inválido!");
        }

        const query: any = await this.userDatabase.getFeed(user.id);
        const recipes: {}[] = query.map((recipe: { createdAt: Date }): object => {
            const day: number = recipe.createdAt.getDate();
            const month: number = recipe.createdAt.getMonth() + 1;
            const year: number = recipe.createdAt.getFullYear();
            const createdAt = `${day}/${month < 10 ? "0" + month : month}/${year}`;

            return { ...recipe, createdAt };
        });
        const response: IGetUserFeedOutputDTO = { recipes };

        return response;
    };
}

export default UserBusiness;
