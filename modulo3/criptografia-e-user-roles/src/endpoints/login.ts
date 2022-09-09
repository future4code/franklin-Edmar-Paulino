import { Request, Response } from "express";
import UserDatabase from "../data/UserDatabase";
import Authenticator from "../services/Authenticator";
import HashManager from "../services/HashManager";
import { user } from "../types";

async function login(req: Request, res: Response): Promise<void> {
    try {
        const { email, password } = req.body;
        const userDB: UserDatabase = new UserDatabase();
        const user: user = await userDB.getByEmail(email);

        if (!user) {
            res.statusCode = 400;
            throw new Error("Email ou senha inválidos");
        }

        const hashManager: HashManager = new HashManager();
        const passwordIsCorrect: boolean = await hashManager.compareHash(password, user.password);
        if (!passwordIsCorrect) {
            res.statusCode = 400;
            throw new Error("Email ou senha inválidos");
        }

        const authenticator: Authenticator = new Authenticator();
        const token: string = authenticator.generateToken({ id: user.id, role: user.role });

        res.status(200).send({ token });
    } catch(error: any) {
        console.error(error.message);
        if (res.statusCode === 200) {
            res.status(500).send({ message: "Internal server error" });
        } else {
            res.send({ message: error.message });
        }
    }
}

export default login;
