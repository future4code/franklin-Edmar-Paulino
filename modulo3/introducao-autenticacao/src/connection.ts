import knex, { Knex } from "knex";
import dotenv from "dotenv";

dotenv.config();

const connection: Knex = knex({
    client: "mysql",
    connection: {
        host: process.env.DB_HOST as string,
        user: process.env.DB_USER as string,
        port: Number(process.env.DB_PORT) || 3306,
        password: process.env.DB_PASSWORD as string,
        database: process.env.DB_SCHEMA as string
    }
});

export default connection;