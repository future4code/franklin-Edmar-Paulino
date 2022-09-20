import express, { Express } from "express";
import { AddressInfo, Server } from "net";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();

app.use(express.json());

const server: Server = app.listen(process.env.API_PORT as string, (): void => {
    if (server) {
        const address: AddressInfo = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error("Failure upon starting server");
    }
});

export default app;
