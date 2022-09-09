import { Request, Response } from "express";
import UserDatabase from "../data/UserDatabase";
import Authenticator from "../services/Authenticator";
import { AuthenticationData, user } from "../types";

async function getUser(req: Request, res: Response): Promise<void> {
    try {
        const token: string = req.headers.authorization as string;

        if (!token) {
            res.statusCode = 400;
            throw new Error("Token não enviado");
        }

        const authenticator: Authenticator = new Authenticator();
        const tokenData: AuthenticationData = authenticator.getTokenData(token);

        const userDB: UserDatabase = new UserDatabase();
        const user: user = await userDB.getById(tokenData.id);

        res.status(200).send({ user: { id: user.id, email: user.email }});
    } catch(error: any) {
        console.error(error.message);
        if (res.statusCode === 200) {
            res.status(500).send({ message: "Internal server error" });
        } else {
            res.send({ message: error.message });
        }
    }
}

export default getUser;
