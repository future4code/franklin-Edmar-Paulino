import { Request, Response } from "express";
import UserDatabase from "../data/UserDatabase";
import Authenticator from "../services/Authenticator";
import { AuthenticationData } from "../types";

async function editUser(req: Request, res: Response): Promise<void> {
    try {
        const { name, nickname } = req.body;
        const token: string = req.headers.authorization as string;

        if (!name && !nickname) {
            res.statusCode = 400;
            throw new Error("Informe o(s) novo(s) 'name' ou 'nickname'");
        }

        if (!token) {
            res.statusCode = 400;
            throw new Error("Token não enviado");
        }

        const authenticator: Authenticator = new Authenticator();
        const tokenData: AuthenticationData = authenticator.getTokenData(token);

        const userDB: UserDatabase = new UserDatabase();
        const affectedRows: number = await userDB.edit(tokenData.id, { name, nickname });

        if (affectedRows === 0) {
            res.statusCode = 404;
            throw new Error("Usuário não atualizado");
        }

        res.status(201).end();
    } catch(error: any) {
        console.error(error.message);
        if (res.statusCode === 200) {
            res.status(500).send({ message: "Internal server error" });
        } else {
            res.send({ message: error.message });
        }
    }
}

export default editUser;
