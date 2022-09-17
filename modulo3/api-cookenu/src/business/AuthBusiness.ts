import UserDatabase from "../database/UserDatabase";
import { IAuthOutputDTO, ILoginAuthInputDTO, ISignupAuthInputDTO } from "../model/Auth";
import { User, USER_ROLES } from "../model/User";
import Authenticator, { ITokenPayload } from "../services/Authenticator";
import HashManager from "../services/HashManager";
import IdGenerator from "../services/IdGenerator";

class AuthBusiness {
    private static EMAIL_PATTERN: RegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    constructor(
        private userDatabase: UserDatabase,
        private idGenerator: IdGenerator,
        private authenticator: Authenticator,
        private hashManager: HashManager
    ) {}

    private validateEmail = (email: string): boolean => {
        const regexp: RegExp = new RegExp(AuthBusiness.EMAIL_PATTERN);

        return regexp.test(email);
    }

    private validatePassword = (password: string): boolean => {
        return password.length >= 6;
    }

    public signup = async (input: ISignupAuthInputDTO): Promise<IAuthOutputDTO> => {
        const { name, email, password } = input;

        if (!name || typeof name !== "string") {
            throw new Error("Parâmentro 'name' inválido");
        }

        if (!email || typeof email !== "string") {
            throw new Error("Parâmentro 'email' inválido");
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

        const isAnExistingEmail: any = await this.userDatabase.getUserByEmail(email);

        if (isAnExistingEmail) {
            throw new Error("Email já cadastrado");
        }

        const id: string = this.idGenerator.generate();
        const hashPassword: string = await this.hashManager.hash(password);
        const user: User = new User(id, name, email, hashPassword, USER_ROLES.NORMAL);

        await this.userDatabase.createUser(user);

        const payload: ITokenPayload = {
            id: user.getId(),
            role: user.getRole()
        };
        const token: string = this.authenticator.generateToken(payload);
        const response: IAuthOutputDTO = { access_token: token };

        return response;
    };

    public login = async (input: ILoginAuthInputDTO): Promise<IAuthOutputDTO> => {
        const { email, password } = input;

        if (!email || typeof email !== "string") {
            throw new Error("Parâmetro 'email' inválido");
        }

        if (!this.validateEmail(email)) {
            throw new Error("Email inválido");
        }

        if (!password || typeof password !== "string") {
            throw new Error("Parâmetro 'password' inválido");
        }

        const user: any = await this.userDatabase.getUserByEmail(email);

        if (!user) {
            throw new Error("Email não cadastrado");
        }

        const isCorrectPassword: boolean = await this.hashManager.compare(password, user.password);

        if (!isCorrectPassword) {
            throw new Error("Senha inválida");
        }

        const payload: ITokenPayload = { id: user.id, role: user.role };
        const token: string = this.authenticator.generateToken(payload);
        const response: IAuthOutputDTO = { access_token: token };

        return response;
    };
}

export default AuthBusiness;
