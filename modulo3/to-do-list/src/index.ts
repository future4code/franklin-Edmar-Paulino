import express, { Express, Request, Response } from "express";
import cors from "cors";
import { AddressInfo, Server } from "net";
import knex, { Knex } from "knex";
import dotenv from "dotenv";

// Types
type User = { id: string, name: string, nickname: string, email: string };


// Functions
function createHash(): string {
    const hashTable: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    let hash: string = "";
    for (let i: number = 0; i < 32; i++) {
        hash = hash.concat(hashTable.charAt(Math.random() * 62));
        if (i >= 8 && i <= 20 && i % 4 === 0) {
            hash = hash.concat("-");
        }
    }
    return hash;
}


// Variables
const users: User[] = [];


// Configs
dotenv.config();

export const connection: Knex = knex({
    client: "mysql",
    connection: {
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT) || 3306,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_SCHEMA
    }
});

const app: Express = express();
app.use(express.json());
app.use(cors());


// Endpoints
app.post("/user", (req: Request, res: Response): void => {
    const { name, nickname, email } = req.body;
    if (name && nickname && email) {
        const id = createHash();
        const newUser: User = { id, name, nickname, email };
        users.push(newUser);
        res.status(201).send({ message: `usuário criado com sucesso. id: ${id}` });
    } else {
        res.status(400).send({ message: "favor infomar todos os campos, name, nickname, email." });
    }
});

app.get("/user/:id", (req: Request, res: Response): void => {
    const { id } = req.params;
    const user: any = users.find((user: User): any => id === user.id);
    if (user) {
        res.status(200).send({ id: user.id, nickname: user.nickname });
    } else {
        res.status(404).send({ message: `usuário ${id} não encontrado` });
    }
});


// Server
const server: Server = app.listen(process.env.PORT || 3003, (): void => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in the http://localhost:${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});
