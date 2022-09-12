import { Request, Response } from "express";
import UserDatabase from "../database/UserDatabase";
import Authenticator from "../services/Authenticator";
import { AuthenticationData } from "../types";

async function login(req: Request, res: Response): Promise<void> {
    try {
        const { email, password } = req.body;
        
        if (!email || email.indexOf('@') === -1) {
            res.statusCode = 400;
            throw new Error("Invalid email");
        }

        const user: any = await new UserDatabase().getUserByEmail(email);

        if (!user) {
            res.statusCode = 400;
            throw new Error("Invalid email");
        }

        if (user.password !== password) {
            res.statusCode = 400;
            throw new Error("Invalid password");
        }

        const payload: AuthenticationData = { id: user.id };
        const token: string = new Authenticator().generateToken(payload);
        
        res.status(200).send({ token });
    } catch(error: any) {
        console.error(error.message);
        if (res.statusCode === 200) {
            res.status(500).send({ message: "Internal server error." });
        } else {
            res.send({ message: error.message });
        }
    }
}

export default login;