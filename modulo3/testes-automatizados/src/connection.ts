import knex, { Knex } from "Knex";
import dotenv from "dotenv";

dotenv.config();

const connection: Knex = knex({
    client: "mysql",
    connection: {
        host: process.env.DB_HOST as string,
        port: Number(process.env.DB_PORT as string),
        user: process.env.DB_USER as string,
        password: process.env.DB_PASSWORD as string,
        database: process.env.DB_SCHEMA as string
    }
});

export default connection;
