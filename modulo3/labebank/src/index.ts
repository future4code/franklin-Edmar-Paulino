import express, { Request, Response } from "express";
import cors from "cors";

const app = express();

// Server config
app.use(cors());
app.use(express.json());


// tipos
type Transaction = {
    
}

type Account = {

}


// endpoints
app.get("/", (request: Request, response: Response) => {
    response.status(200).send({ message: "Hello world" });
});

// criar conta

// pegar saldo

// adicionar saldo

// pagar conta

// transferência interna



// Server init
app.listen("3003", () => console.log("API is running..."));
