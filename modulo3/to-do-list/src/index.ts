import app from "./app";
import { Request, Response } from "express";
import connection from "./connection";
import { createHash } from "./functions";

app.post("/user", async (req: Request, res: Response) => {
    let errorStatus = 500;
    try {
        const { name, nickname, email} = req.body;
        if (!name || !nickname || !email) {
            errorStatus = 400;
            throw new Error("Favor informar nome, apelido e email.");
        }
        await connection("TodoListUser")
        .insert({ id: createHash(), name, nickname, email})
        .into("TodoListUser");
        res.status(200).end();
    } catch(error: any) {
        console.log(error);
        res.status(errorStatus).send(error.message);
    }
});

app.get("/user/:id", async (req: Request, res: Response) => {
    let errorStatus = 500;
    try {
        const [result] = await connection("TodoListUser")
        .select(["id", "nickname"])
        .from("TodoListUser")
        .where({ id: req.params.id  });
        console.log(typeof result)
        if (!result) {
            errorStatus = 404;
            throw new Error("Usuário não encontrado.");
        }
        res.status(200).send(result);
    } catch(error: any) {
        console.log(error);
        res.status(errorStatus).send(error.message);
    }
});

app.put("/user/edit/:id", async (req: Request, res: Response) => {
    let errorStatus = 500;
    try {
        const { name, nickname } = req.body;
        if (!name || !nickname) {
            errorStatus = 400;
            throw new Error("Favor informar nome e apelido.");
        }
        await connection("TodoListUser")
        .update({ name, nickname })
        .where({ id: req.params.id });
        res.status(201).end();
    } catch(error: any) {
        console.log(error);
        res.status(errorStatus).send(error.message);
    }
});
