import knex, { Knex } from "knex";
import dotenv from "dotenv";

dotenv.config();

class BaseDatabase {
    private static connection: Knex = knex({
        client: "mysql",
        connection: {
            host: process.env.DB_HOST as string,
            user: process.env.DB_USER as string,
            password: process.env.DB_PASSWORD as string,
            database: process.env.DB_SCHEMA as string,
            port: Number(process.env.DB_PORT as string)
        }
    })
    protected getConnection = (): Knex => {
        return BaseDatabase.connection;
    }
}

export default BaseDatabase;
