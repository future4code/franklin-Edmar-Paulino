import express, { Express } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Server, AddressInfo } from "net";
import competitionRouter from "./router/competitionRouter";
import IdGenerator from "./services/IdGenerator";

dotenv.config();

const app: Express = express();

app.use(express.json());
app.use(cors());
app.use("/", competitionRouter);

const server: Server = app.listen(process.env.API_PORT as string, (): void => {
    if (server) {
        const address: AddressInfo = server.address() as AddressInfo;
        console.log(`Server running in the http://localhost:${address.port}`);
    } else {
        console.error("Failure upon starting server.");
    }
});
