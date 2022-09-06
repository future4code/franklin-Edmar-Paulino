import { Request, Response } from "express";
import UserDatabase from "../database/UserDatabase";
import Authenticator from "../services/Authenticator";
import { AuthenticationData } from "../types";

async function profile(req: Request, res: Response): Promise<void> {
    try {
        const token: string = req.headers.authorization as string;

        if (!token) {
            res.statusCode = 422;
            throw new Error("Invalid token");
        }

        const tokenData: AuthenticationData = new Authenticator().getTokenData(token);
        const user: any = await new UserDatabase().getUserById(tokenData.id);

        if (!user) {
            res.statusCode = 422;
            throw new Error("Invalid tokena");
        }

        res.status(200).send({ id: tokenData.id, email: user });

    } catch(error: any) {
        console.error(error.message);
        if (res.statusCode === 200) {
            res.status(500).send({ message: "Internal server error" });
        } else {
            res.send({ message: error.message });
        }
    }
}

export default profile;