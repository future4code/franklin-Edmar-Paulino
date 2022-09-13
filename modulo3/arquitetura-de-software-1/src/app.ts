import express, { Express } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { AddressInfo, Server } from "net";

dotenv.config();

const app: Express = express();

app.use(express.json());
app.use(cors());

const server: Server = app.listen(process.env.PORT || 3003, (): void => {
    if (server) {
        const address: AddressInfo = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});

export default app;
