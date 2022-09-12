import { Request, Response } from "express";
import UserDatabase from "../data/UserDatabase";
import Authenticator from "../services/Authenticator";
import { AuthenticationData, UserRole } from "../types";

async function deleteUser(req: Request, res: Response): Promise<void> {
    try {
        const { id } = req.params;
        const token: string = req.headers.authorization as string;

        if (!id) {
            res.statusCode = 400;
            throw new Error("Id não informado");
        }

        if (!token) {
            res.statusCode = 400;
            throw new Error("Token não enviado");
        }

        const authenticator: Authenticator = new Authenticator();
        const tokenData: AuthenticationData = authenticator.getTokenData(token);

        if (tokenData.role !== UserRole.ADMIN) {
            res.statusCode = 401;
            throw new Error("Somente usuários administradores tem acesso a essa funcionalidade");
        }

        const userDB: UserDatabase = new UserDatabase();
        const affectedRows: number = await userDB.delete(id);

        if (affectedRows === 0) {
            res.statusCode = 404;
            throw new Error("Usuário não deletado");
        }

        res.status(200).end();
    } catch(error: any) {
        console.error(error.message);
        if (res.statusCode === 200) {
            res.status(500).send({ message: "Internal server error" });
        } else {
            res.send({ message: error.message });
        }
    }
}

export default deleteUser;
