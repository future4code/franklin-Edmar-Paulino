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
    if (!id) {
        errorStatus = 400;
        throw new Error("ID da tarefa não informado");
    }
    const taskIdExist:any = await connection("TodoListTask")
    .select([ "id" ])
    .where({ id: id });
    if (taskIdExist.length === 0) {
        errorStatus = 400;
        throw new Error("Não existe tarefa com o ID informado");
    }
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
        throw new Error("Tarefa não encontrado.")
    }
    // Não está funcionando como deveria
    const limitDate:string = `${result.limitDate.getDate()}/${result.limitDate.getMonth()}/${result.limitDate.getFullYear()}`;
    result.limitDate = limitDate;
    return result;
}

async function getUsers():Promise<any> {
    const result:any = await connection("TodoListUser")
    .select(["id", "nickname"])
    .from("TodoListUser");
    return result;
}

async function getUserTasks(creatorUserId:any):Promise<any> {
    if (!creatorUserId) {
        errorStatus = 400;
        throw new Error("ID do usuário criador da tarefa não informado");
    }
    const result:any = connection("TodoListTask")
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
    const result:any = await connection("TodoListUser")
    .select(["id", "nickname"])
    .from("TodoListUser")
    .whereLike("nickname", `%${query}%`)
    .orWhereLike("email", `%${query}%`);
    return result;
}

async function addResponsibleUserToTask(task_id:string, responsible_user_ids:string[]):Promise<void> {
    if (!task_id || !responsible_user_ids || responsible_user_ids.length === 0) {
        errorStatus = 400;
        throw new Error("Favor informar ID da tarefa e ID(s) do(s) usuário(s) responsável(eis) por ela");
    }
    responsible_user_ids.forEach(async (responsible_user_id):Promise<void> => {
        await connection("TodoListResponsibleUserTaskRelation")
        .insert({ task_id, responsible_user_id })
        .into("TodoListResponsibleUserTaskRelation");
    });
}

async function getResponsibleUsersOfTask(task_id:string):Promise<any> {
    if (!task_id) {
        errorStatus = 400;
        throw new Error("ID da tarefa não informado");
    }
    const taskIdExist:any = await connection("TodoListTask")
    .select([ "id" ])
    .where({ id: task_id });
    if (taskIdExist.length === 0) {
        errorStatus = 400;
        throw new Error("Não existe tarefa com o ID informado");
    }
    const result:any = await connection("TodoListResponsibleUserTaskRelation")
    .select([
        "TodoListUser.id AS id",
        "TodoListUser.nickname AS nickname"
    ])
    .from("TodoListResponsibleUserTaskRelation")
    .where({ task_id })
    .join("TodoListUser", { "TodoListResponsibleUserTaskRelation.responsible_user_id": "TodoListUser.id" });
    return result;
}

async function updateTaskStatus(id:string, newStatus:string):Promise<void> {
    if (!id) {
        errorStatus = 400;
        throw new Error("ID da tarefa não informado");
    }
    if (!newStatus) {
        errorStatus = 400;
        throw new Error("Favor informar o status da tarefa");
    }
    const taskIdExist:any = await connection("TodoListTask")
    .select([ "id" ])
    .where({ id });
    if (taskIdExist.length === 0) {
        errorStatus = 400;
        throw new Error("Não existe tarefa com o ID informado");
    }
    await connection("TodoListTask")
    .update({ status: newStatus })
    .where({ id });
}

async function getTasksByStatus(status:any):Promise<any> {
    console.log("status here: " + status)
    if (!status) {
        errorStatus = 400;
        throw new Error("Status não informado");
    }
    const result = await connection("TodoListTask")
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
    .where({ "TodoListTask.status": `${status}` })
    .join("TodoListUser", {"TodoListTask.creator_user_id": "TodoListUser.id"});
    if (!result) {
        errorStatus = 404;
        throw new Error("Tarefa não encontrado.")
    }
    return result;
}

async function getDelayedTasks():Promise<any> {
    const result:any = connection("TodoListTask")
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
    .where(connection.raw(`CURDATE() > TodoListTask.limit_date`))
    .join("TodoListUser", { "TodoListTask.creator_user_id": "TodoListUser.id" });
    // concertar formatação da data
    return result;
}

async function removeUserResponsibleFromTask(taskId:string, responsibleUserId:string):Promise<void> {
    if (!taskId || !responsibleUserId) {
        errorStatus = 400;
        throw new Error("Favor informar o ID da tarefa e ID do usuário responsável por ela");
    }
    const exist = await connection("TodoListResponsibleUserTaskRelation")
    .select()
    .where({
        "task_id": taskId,
        "responsible_user_id": responsibleUserId
    });
    if (exist.length === 0) {
        errorStatus = 400;
        throw new Error("ID da tarefa ou do usuário inválido");
    }
    await connection("TodoListResponsibleUserTaskRelation")
    .where({
        "task_id": taskId,
        "responsible_user_id": responsibleUserId
    })
    .del();
}

async function searchTask(query:any):Promise<any> {
    if (!query) {
        errorStatus = 400;
        throw new Error("Termo de busca não informado");
    }
    const result = await connection("TodoListTask")
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
    .whereLike("TodoListTask.title", `%${query}%`)
    .orWhereLike("TodoListTask.description", `%${query}%`)
    .join("TodoListUser", {"TodoListTask.creator_user_id": "TodoListUser.id"});
    if (!result) {
        errorStatus = 404;
        throw new Error("Tarefa não encontrado.")
    }
    return result;    
}

async function updateMultipleTaskStatus(task_ids:string[], status:string):Promise<void> {
    if (!task_ids || task_ids.length === 0 || !status) {
        errorStatus = 400;
        throw new Error("ID(s) da(s) tarefa(s) ou status não informado(s)");
    }
    task_ids.forEach(async (task_id):Promise<void> => {
        const taskIdExist:any = await connection("TodoListTask")
        .select([ "id" ])
        .where({ id: task_id });
        console.log(taskIdExist)
        if (taskIdExist.length === 0) {
            errorStatus = 400;
            throw new Error(`Não existe tarefa com o ID informado: ${task_id}`);
        }
    })
    task_ids.forEach(async (task_id):Promise<void> => {
        await connection("TodoListTask")
        .update({ status })
        .where({ id: task_id })
    })
}

async function deleteTask(id:string):Promise<void> {
    if (!id) {
        errorStatus = 400;
        throw new Error("ID não informado!");
    }
    await connection("TodoListResponsibleUserTaskRelation")
    .where({ "TodoListResponsibleUserTaskRelation.task_id": id })
    .del();
    await connection("TodoListTask")
    .where({ id })
    .del();
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

app.get("/task/delayed", async (req:Request, res:Response):Promise<void> => {
    try {
        const result:any = await getDelayedTasks();
        res.status(200).send({ tasks: result });
    } catch(error:any) {
        console.error(error.message);
        res.status(errorStatus).send(error.message);
    }
});

app.post("/task/responsible", async (req:Request, res:Response):Promise<void> => {
    try {
        const { task_id, responsible_user_id } = req.body;
        await addResponsibleUserToTask(task_id, responsible_user_id);
        res.status(201).send({ message: "Atribuição de responsabilidade efetuada com sucesso" });
    } catch(error:any) {
        console.error(error.message);
        res.status(errorStatus).send(error.message);
    }
});

app.get("/task", async (req:Request, res:Response):Promise<void> => {
    try {
        const { creatorUserId, status, query } = req.query;
        let result:any = [];
        if (creatorUserId) {
            result = await getUserTasks(creatorUserId);
        } else if (status) {
            result = await getTasksByStatus(status);
        } else if (query) {
            result = await searchTask(query);
        }
        res.status(200).send({ tasks: result });
    } catch(error:any) {
        console.error(error.message);
        res.status(errorStatus).send(error.message);
    }
});

app.put("/task/status/edit", async (req:Request, res:Response):Promise<void> => {
    try {
        const { task_ids, status } = req.body;
        await updateMultipleTaskStatus(task_ids, status);
        res.status(201).send({ message: "Status das tarefas atualizados com sucesso" });
    } catch(error:any) {
        console.error(error.message);
        res.status(errorStatus).send(error.message);
    }
})

app.get("/task/:id", async (req:Request, res:Response):Promise<void> => {
    try {
        const { id } = req.params;
        const result:any = await getTaskById(id);
        result.responsibleUsers = await getResponsibleUsersOfTask(id);
        res.status(200).send(result);
    } catch(error:any) {
        console.error(error.message);
        res.status(errorStatus).send(error.message);
    }
});

app.get("/task/:id/responsible", async (req:Request, res:Response):Promise<void> => {
    try {
        const { id } = req.params;
        const result:any = await getResponsibleUsersOfTask(id);
        res.status(200).send({ users: result });
    } catch(error:any) {
        console.error(error.message);
        res.status(errorStatus).send(error.message);
    }
});

app.put("/task/status/:id", async (req:Request, res:Response):Promise<void> => {
    try {
        const { id } = req.params;
        const { status } = req.body;
        await updateTaskStatus(id, status);
        res.status(201).send({ message: "Status atualizado com sucesso" });
    } catch(error:any) {
        console.error(error.message);
        res.status(errorStatus).send(error.message);
    }
});

app.delete("/task/:taskId/responsible/:responsibleUserId", async (req:Request, res:Response):Promise<void> => {
    try {
        const { taskId, responsibleUserId} = req.params;
        await removeUserResponsibleFromTask(taskId, responsibleUserId);
        res.status(201).send({ message: "Responsabilidade removida com sucesso!" });
    } catch(error:any) {
        console.error(error.message);
        res.status(errorStatus).send(error.message);
    }
});

app.delete("/task/:id", async (req:Request, res:Response):Promise<void> => {
    try {
        const { id } = req.params;
        await deleteTask(id);
        res.status(201).send({ message: "Tarefa deletada com sucesso" });
    } catch(error:any) {
        console.error(error.message);
        res.status(errorStatus).send(error.message);
    }
});