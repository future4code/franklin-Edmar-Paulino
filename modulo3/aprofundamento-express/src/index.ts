import express, { Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";

// Server configuration
const app = express();
app.use(express.json());
app.use(cors());

// types
type ToDo = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
};


// variables
let toDoList: ToDo[] = [
    {
        userId: 1,
        id: 1,
        title: "Comprar pão de queijo",
        completed: true
    },
    {
        userId: 3,
        id: 2,
        title: "Comprar sushi",
        completed: false
    },
    {
        userId: 5,
        id: 3,
        title: "Comprar geléia de pimenta",
        completed: false
    },
    {
        userId: 2,
        id: 4,
        title: "Comprar yakisoba",
        completed: false
    },
    {
        userId: 4,
        id: 5,
        title: "Comprar açaí",
        completed: true
    },
];

// Server endpoints
app.get("/ping", (req: Request, res: Response) => {
    res.status(200).send({ message: "pong" });
});

app.get("/todos", (req: Request, res: Response) => {
    res.status(200).send(toDoList);
});

app.get("/todos/:status", (req: Request, res: Response) => {
    const status: string = req.params.status;
    if (status === "completed" || status === "pending") {
        const statusBool: boolean = status === "completed";
        res.status(200).send(toDoList.filter((toDo: ToDo) => toDo.completed === statusBool));
    } else {
        res.status(404).end();
    }
});

app.post("/todos", (req: Request, res: Response) => {
    const userId: number = req.body.userId;
    const title: string = req.body.title;
    if (userId && title) {
        const newToDo: ToDo = {
            id: toDoList[toDoList.length - 1].id + 1,
            userId,
            title,
            completed: false
        };
        toDoList.push(newToDo);
        res.status(201).send(toDoList);
    } else {
        res.status(404).end();
    }
});

app.put("/todos/:id", (req: Request, res: Response) => {
    const id: number = Number(req.params.id);
    if (toDoList.find((toDo: ToDo) => toDo.id === id)){
        toDoList.forEach((toDo: ToDo) => {
            if (toDo.id === id) {
                toDo.completed = !toDo.completed;
            }
        })
        res.status(201).end();
    } else {
        res.status(404).send({ message: `Id ${id} not found` });
    }
});

app.delete("/todos/:id", (req: Request, res: Response) => {
    const id: number = Number(req.params.id);
    if (toDoList.find((toDo: ToDo) => toDo.id === id)) {
        toDoList = toDoList.filter((toDo: ToDo) => toDo.id !== id);
        res.status(201).end();
    } else {
        res.status(404).send({ message: `Id ${id} not found` });        
    }
});

app.get("/users/:userId/todos", (req: Request, res: Response) => {
    const userId: number = Number(req.params.userId);
    if (toDoList.find((toDo: ToDo) => toDo.userId === userId)) {
        res.status(200).send({
            todos: {
                selectedUser: toDoList.filter((toDo: ToDo) => toDo.userId === userId),
                others: toDoList.filter((toDo: ToDo) => toDo.userId !== userId)
            }
        });
    } else {
        res.status(404).send({ message: `User Id ${userId} not found` });        
    }
});


// Server init
const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error("Failure upon starting server.");
    }
});
