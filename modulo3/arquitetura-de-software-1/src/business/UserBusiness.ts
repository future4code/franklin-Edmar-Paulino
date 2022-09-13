import UserDatabase from "../database/UserDatabase";
import { User, USER_ROLES } from "../model/User";
import Authenticator, { ITokenPayload } from "../services/Authenticator";
import HashManager from "../services/HashManager";
import IdGenerator from "../services/IdGenerator";
import BaseBusiness from "./BaseBusiness";

class UserBusiness extends BaseBusiness {    
    public signup = async (name: any, email: any, password: any): Promise<object> => {
        if (!name || typeof name !== "string") {
            throw new Error("Parâmetro 'name' inválido");
        }

        if (!email || typeof email !== "string") {
            throw new Error("Parâmetro 'email' inválido");
        }

        if (!this.validateEmail(email)) {
            throw new Error("Email inválido");
        }

        if (!password || typeof password !== "string") {
            throw new Error("Parâmetro 'password' inválido");
        }

        if (!this.validatePassword(password)) {
            throw new Error("Senha inválida");
        }

        const idGenerator: IdGenerator = new IdGenerator();
        const id: string = idGenerator.generate();

        const hashManager: HashManager = new HashManager();
        const hashPassword: string = await hashManager.hash(password);

        const user: User = new User(id, name, email, hashPassword);

        const userDatabase: UserDatabase = new UserDatabase();
        await userDatabase.createUser(user);

        const payload: ITokenPayload = {
            id: user.getId(),
            role: user.getRole()
        }

        const authenticator: Authenticator = new Authenticator();
        const token = authenticator.generateToken(payload);

        const response: object = { token };

        return response;
    };

    public login = async (email: any, password: any): Promise<object> => {
        if (!email || typeof email !== "string") {
            throw new Error("Parâmetro 'email' inválido");
        }

        if (!this.validateEmail(email)) {
            throw new Error("Email inválido");
        }

        if (!password || typeof password !== "string") {
            throw new Error("Parâmetro 'password' inválido");
        }

        if (!this.validatePassword(password)) {
            throw new Error("Senha inválida");
        }

        const userDatabase: UserDatabase = new UserDatabase();
        const user: any = await userDatabase.getUserByEmail(email);

        if (!user) {
            throw new Error("Email inexistente");
        }

        const hashManager: HashManager = new HashManager();
        const isCorrectPassword: boolean = await hashManager.compare(password, user.password);

        if (!isCorrectPassword) {
            throw new Error("Senha inválida");
        }

        const payload: ITokenPayload = {
            id: user.id,
            role: user.role
        };

        const authenticator: Authenticator = new Authenticator();
        const token = authenticator.generateToken(payload);

        const response: object = { token };

        return response;
    };

    public getUsers = async (token: string): Promise<object> => {
        if (!token) {
            throw new Error("Token não informado!");
        }

        const authenticator: Authenticator = new Authenticator();
        const tokenData: ITokenPayload = authenticator.getTokenPayload(token);

        const userDatabase: UserDatabase = new UserDatabase();
        const user: any = await userDatabase.getUserById(tokenData.id as string);

        if (!user) {
            throw new Error("Token inválido!");
        }

        const users: any = await userDatabase.getAllUsers();
        const response: object = { users };

        return response;
    };

    public deleteUser = async (token: string, id: string): Promise<object> => {
        if (!token) {
            throw new Error("Token não informado!");
        }

        const authenticator: Authenticator = new Authenticator();
        const tokenData: ITokenPayload = authenticator.getTokenPayload(token);

        const userDatabase: UserDatabase = new UserDatabase();
        const user: any = await userDatabase.getUserById(tokenData.id as string);

        if (!user) {
            throw new Error("Token inválido!");
        }

        if (user.role !== USER_ROLES.ADMIN) {
            throw new Error("Funcionalidade acessível apenas a usuários com privilégios de ADMIN");
        }

        const affectedRows: number = await userDatabase.deleteUser(id);

        if (affectedRows === 0) {
            throw new Error("Não foi possível apagar este usuário");
        }

        const response: object = { message: "Usuário apagado com sucesso!" };
        return response;
    };
}

export default UserBusiness;
