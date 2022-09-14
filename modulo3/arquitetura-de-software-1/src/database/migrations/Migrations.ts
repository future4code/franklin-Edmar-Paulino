import BaseDatabase from "../BaseDatabase";
import UserDatabase from "../UserDatabase";
import { users } from "./data";

class Migrations extends BaseDatabase {
    public execute = async (): Promise<void> => {
        try {
            console.log("Creating tables...");
            await this.createTable();
            console.log("Tables created successfully.");

            console.log("Populating tables...");
            await this.insertData();
            console.log("Tables populated successfully.");

            console.log("Migrations completed.");
        } catch(error: unknown) {
            console.log("Error in migrations...");
            if (error instanceof Error) {
                console.log(error.message);
            }
        } finally {
            console.log("Ending connection...");
            BaseDatabase.connection.destroy();
            console.log("Connection closed graciously.");
        }
    };

    public createTable = async (): Promise<void> => {
        await BaseDatabase.connection.raw(`
            CREATE TABLE IF NOT EXISTS ${UserDatabase.TABLE_USERS}(
                id VARCHAR(255) PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                email VARCHAR(255) NOT NULL UNIQUE,
                password VARCHAR(255) NOT NULL,
                role ENUM("NORMAL", "ADMIN") DEFAULT "NORMAL" NOT NULL
            )
        `);
    };

    public insertData = async (): Promise<void> => {
        await BaseDatabase
            .connection(UserDatabase.TABLE_USERS)
            .insert(users)
    }
}

const migrations: Migrations = new Migrations();
migrations.execute();
