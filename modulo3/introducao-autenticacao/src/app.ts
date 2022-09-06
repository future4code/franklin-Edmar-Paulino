import express, { Express } from "express";
import cors from "cors";
import { AddressInfo, Server } from "net";

const app: Express = express();

app.use(express.json());
app.use(cors());

const server: Server = app.listen(Number(process.env.PORT as string) || 3003, (): void => {
    if (server) {
        const address: AddressInfo = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error("Failure upon starting server.");
    }
});

export default app;
