import app from "./app";
import { Request, Response } from "express";
import connection from "./connection";
import { createHash } from "./functions";

let errorStatus:number = 500;

async function createUser(name:string, nickname:string, email:string):Promise<void> {
    if (!name || !nickname || !email) {
        errorStatus = 400;
        throw new Error("Favor informar nome, apelido e email.");
    }
    const id:string = createHash();
    await connection("TodoListUser")
    .insert({ id, name, nickname, email})
    .into("TodoListUser");
}

async function getUserById(id:string):Promise<any> {
    const [result] = await connection("TodoListUser")
    .select(["id", "nickname"])
    .from("TodoListUser")
    .where({ id });
    if (!result) {
        errorStatus = 404;
        throw new Error("Usuário não encontrado.");
    }
    return result;
}

async function editUser(id:string, newName:string, newNickname:string):Promise<void> {
    if (!newName || !newNickname) {
        errorStatus = 400;
        throw new Error("Favor informar nome e apelido.");
    }
    await connection("TodoListUser")
    .update({ name: newName, nickname: newNickname })
    .where({ id });
}

async function createTask(title:string, description:string, limitDate:string, creatorUserId:string):Promise<void> {
    if (!title || !description || !limitDate || !creatorUserId) {
        errorStatus = 404;
        throw new Error("Favor informar titulo, descrição, data limite e ID do usuário criador da tarefa")
    }
    const re:RegExp = RegExp("(0[1-9]|[12][0-9]|3[01])/(0[1-9]|1[012])/[0-9]{4}");
    if (re.test(limitDate) === false) {
        errorStatus = 404;
        throw new Error("Favor informar a data corretamente: dd/mm/aaaa");
    }
    const [day, month, year] = limitDate.split("/");
    const date:Date = new Date(`${year}-${month}-${day}`);
    const id:string = createHash();
    await connection("TodoListTask")
    .insert({ id, title, description, limit_date: date, creator_user_id: creatorUserId})
    .into("TodoListTask");
}

async function getTaskById(id:string):Promise<any> {
    const [result] = await connection("TodoListTask")
    .select([
        "TodoListTask.id AS taskId",
        "TodoListTask.title",
        "TodoListTask.description",
        "TodoListTask.limit_date AS limitDate",
        "TodoListTask.status",
        "TodoListTask.creator_user_id AS creatorUserId",
        "TodoListUser.nickname AS creatorUserNickname"
    ])
    .from("TodoListTask")
    .where({ "TodoListTask.id": id })
    .join("TodoListUser", {"TodoListTask.creator_user_id": "TodoListUser.id"});
    if (!result) {
        errorStatus = 404;
        throw new Error("Usuário não econtrado.")
    }
    // Não está funcionando como deveria
    const limitDate:string = `${result.limitDate.getDate()}/${result.limitDate.getMonth()}/${result.limitDate.getFullYear()}`;
    result.limitDate = limitDate;
    return result;
}

async function getUsers():Promise<any> {
    const result = await connection("TodoListUser")
    .select(["id", "nickname"])
    .from("TodoListUser");
    return result;
}

async function getUserTasks(creatorUserId:any):Promise<any> {
    if (!creatorUserId) {
        errorStatus = 400;
        throw new Error("ID do usuário criador da tarefa não informado");
    }
    const result = connection("TodoListTask")
    .select([
        "TodoListTask.id AS taskId",
        "TodoListTask.title",
        "TodoListTask.description",
        "TodoListTask.limit_date AS limitDate",
        "TodoListTask.status",
        "TodoListTask.creator_user_id AS creatorUserId",
        "TodoListUser.nickname AS creatorUserNickname"
    ])
    .from("TodoListTask")
    .where({ "TodoListTask.creator_user_id": creatorUserId })
    .join("TodoListUser", { "TodoListTask.creator_user_id": "TodoListUser.id" });
    // concertar formatação da data
    return result;
}

async function searchUser(query:any):Promise<any> {
    if (!query) {
        errorStatus = 400;
        throw new Error("Termo de busca não informado");
    }
    const result = connection("TodoListUser")
    .select(["id", "nickname"])
    .from("TodoListUser")
    .whereLike("nickname", `%${query}%`)
    .orWhereLike("email", `%${query}%`);
    return result;
}

app.post("/user", async (req:Request, res:Response):Promise<void> => {
    try {
        const { name, nickname, email} = req.body;
        await createUser(name, nickname, email);
        res.status(201).send({ message: "Usuário criado com sucesso" });
    } catch(error:any) {
        console.error(error);
        res.status(errorStatus).send(error.message);
    }
});

app.get("/user", async (req:Request, res:Response):Promise<void> => {
    try {
        const { query } = req.query;
        const result:any = await searchUser(query);
        res.status(200).send({ users: result });
    } catch(error:any) {
        console.error(error.message);
        res.status(errorStatus).send(error.message);
    }
});

app.get("/user/all", async (req:Request, res:Response):Promise<void> => {
    try {
        const result:any = await getUsers();
        res.status(200).send({ users: result });
    } catch(error:any) {
        console.error(error.message);
        res.status(errorStatus).send(error.message);
    }
});

app.get("/user/:id", async (req:Request, res:Response):Promise<void> => {
    try {
        const { id } = req.params;
        const result:any = await getUserById(id);
        res.status(200).send(result);
    } catch(error:any) {
        console.error(error);
        res.status(errorStatus).send(error.message);
    }
});

app.put("/user/edit/:id", async (req:Request, res:Response):Promise<void> => {
    try {
        const { id } = req.params;
        const { name, nickname } = req.body;
        await editUser(id, name, nickname);
        res.status(201).send({ message: "Alterações salvas com sucesso" });
    } catch(error:any) {
        console.error(error);
        res.status(errorStatus).send(error.message);
    }
});

app.post("/task", async (req:Request, res:Response):Promise<void> => {
    try {
        const { title, description, limitDate, creatorUserId } = req.body;
        await createTask(title, description, limitDate, creatorUserId);
        res.status(201).send({ message: "Tarefa criada com sucesso" });
    } catch(error:any) {
        console.error(error.message);
        res.status(errorStatus).send(error.message);
    }
});

app.get("/task/:id", async (req:Request, res:Response):Promise<void> => {
    try {
        const { id } = req.params;
        const result:any = await getTaskById(id);
        res.status(200).send(result);
    } catch(error:any) {
        console.error(error.message);
        res.status(errorStatus).send(error.message);
    }
});

app.get("/task", async (req:Request, res:Response):Promise<void> => {
    try {
        const { creatorUserId } = req.query;
        const result:any = await getUserTasks(creatorUserId);
        res.status(200).send({ tasks: result });
    } catch(error:any) {
        console.error(error.message);
        res.status(errorStatus).send(error.message);
    }
});
