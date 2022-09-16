import express, { Express } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Server, AddressInfo } from "net";
import authRouter from "./router/authRouter";
import userRouter from "./router/userRouter";
import recipeRouter from "./router/recipeRouter";

dotenv.config();

const app: Express = express();

app.use(express.json());
app.use(cors());
app.use("/", authRouter);
app.use("/user", userRouter);
app.use("/recipe", recipeRouter);

const server: Server = app.listen(process.env.API_PORT as string, (): void => {
    if (server) {
        const address: AddressInfo = server.address() as AddressInfo;
        console.error(`Server running in the http://localhost:${address.port}.`);
    } else {
        console.error("Failure upon starting server.");
    }
});
