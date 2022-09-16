import BaseDatabase from "../BaseDatabase";
import RecipeDatabase from "../RecipeDatabase";
import UserDatabase from "../UserDatabase";
import { followers, recipes, users } from "./data";

class Migrations extends BaseDatabase {
    public execute = async (): Promise<void> => {
        try {
            console.log("Creating tables...");
            await this.createTables();
            console.log("Tables created successfully.");

            console.log("Populating tables...");
            await this.insertData();
            console.log("Tables populated successfully.");

            console.log("Migrations completed.");
        } catch(error: unknown) {
            if (error instanceof Error) {
                console.error(error.message);
            } else {
                console.error("Unexpected error!");
                console.error(error);
            }
        }
    };

    private createTables = async (): Promise<void> => {
        await BaseDatabase.connection.raw(`
            DROP TABLE IF EXISTS ${RecipeDatabase.TABLE_RECIPES};
            DROP TABLE IF EXISTS ${UserDatabase.TABLE_FOLLOWERS};
            DROP TABLE IF EXISTS ${UserDatabase.TABLE_USERS};
            
            CREATE TABLE IF NOT EXISTS ${UserDatabase.TABLE_USERS}(
                id VARCHAR(255) PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                email VARCHAR(255) NOT NULL UNIQUE,
                password VARCHAR(255) NOT NULL
            );                
            
            CREATE TABLE IF NOT EXISTS ${UserDatabase.TABLE_FOLLOWERS}(
                id VARCHAR(255) NOT NULL,
                user_to_follow_id VARCHAR(255) NOT NULL,
                FOREIGN KEY (id) REFERENCES ${UserDatabase.TABLE_USERS}(id),
                FOREIGN KEY (user_to_follow_id) REFERENCES ${UserDatabase.TABLE_USERS}(id)
            );

            CREATE TABLE IF NOT EXISTS ${RecipeDatabase.TABLE_RECIPES}(
                id VARCHAR(255) PRIMARY KEY,
                creator_user_id VARCHAR(255) NOT NULL,
                title VARCHAR(255) NOT NULL,
                description TEXT NOT NULL,
                created_at DATE NOT NULL,
                FOREIGN KEY (creator_user_id) REFERENCES ${UserDatabase.TABLE_USERS}(id)
            );

        `);
    };

    private insertData = async (): Promise<void> => {
        await BaseDatabase.connection(UserDatabase.TABLE_USERS).insert(users);
        await BaseDatabase.connection(UserDatabase.TABLE_FOLLOWERS).insert(followers);
        await BaseDatabase.connection(RecipeDatabase.TABLE_RECIPES).insert(recipes);
    };
}

const migrations: Migrations = new Migrations();
migrations.execute();
