import { Request, Response } from "express";
import UserDatabase from "../data/UserDatabase";
import Authenticator from "../services/Authenticator";
import HashManager from "../services/HashManager";
import IdGenerator from "../services/IdGenerator";
import { user } from "../types";

async function createUser(req: Request, res: Response): Promise<void> {
    try {
        const { name, nickname, email, password, role } = req.body;
    
        if (!name || !nickname || !email || !password || !role) {
            res.statusCode = 422;
            throw new Error("Preencha os campos 'name', 'nickname', 'role', 'password' e 'email'");
        }
    
        const userDB: UserDatabase = new UserDatabase();
        const user: user = await userDB.getByEmail(email);
    
        if (user) {
            res.statusCode = 409
            throw new Error("Email já cadastrado");
        }
    
        const idGenerator: IdGenerator = new IdGenerator();
        const id: string = idGenerator.generateId();
        const hashManager: HashManager = new HashManager();
        const hash: string = await hashManager.generateHash(password);
        const newUser: user = { id, name, nickname, email, password: hash, role };
    
        await userDB.create(newUser);
    
        const authenticator: Authenticator = new Authenticator();
        const token: string = authenticator.generateToken({ id, role });
    
        res.status(201).send({ newUser: { id, name, nickname, email }, token });
    } catch(error: any) {
        console.error(error.message);
        if (res.statusCode === 200) {
            res.status(500).send({ message: "Internal server error" });
        } else {
            res.send({ message: error.message });
        }
    }
}

export default createUser;
