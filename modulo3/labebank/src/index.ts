import express, { Request, Response } from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());


app.get("/", (request: Request, response: Response) => {
    response.status(200).send({ message: "Hello world" });
});


app.listen("3003", () => console.log("API is running..."));
