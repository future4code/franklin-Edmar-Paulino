import { Request, Response } from "express";
import UserDatabase from "../database/UserDatabase";
import Authenticator from "../services/Authenticator";
import IdGenerator from "../services/IdGenerator";
import { AuthenticationData } from "../types";

async function signup(req: Request, res: Response): Promise<void> {
    try {
        const { email, password } = req.body;
        
        if (!email || email.indexOf('@') === -1) {
            res.statusCode = 400;
            throw new Error("Invalid email");
        }

        if (!password || password.length < 6) {
            res.statusCode = 400;
            throw new Error("Invalid password");
        }

        const id: string = new IdGenerator().generateId();

        await new UserDatabase().createUser(id, email, password);

        const payload: AuthenticationData = { id };
        const token: string = new Authenticator().generateToken(payload);

        res.status(201).send({ token });
    } catch(error: any) {
        console.error(error.message);
        if (res.statusCode === 200) {
            res.status(500).send({ message: "Internal server error" });
        } else {
            res.send({ message: error.message });
        }
    }
}

export default signup;
