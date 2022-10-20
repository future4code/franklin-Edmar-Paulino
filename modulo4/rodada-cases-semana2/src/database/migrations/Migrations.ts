import BaseDatabase from "../BaseDatabase";
import CompetitionDatabase from "../CompetitionDatabase";
import { competitions, results } from "./data";

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
        } catch(err: unknown) {
            if (err instanceof Error) {
                console.error(err.message);
            } else {
                console.error(err);
            }
        }
    };

    private createTables = async (): Promise<void> => {
        await BaseDatabase.connection.raw(`
        DROP TABLE IF EXISTS ${CompetitionDatabase.TABLE_RESULTS};
        DROP TABLE IF EXISTS ${CompetitionDatabase.TABLE_COMPETITIONS};
        
        CREATE TABLE IF NOT EXISTS ${CompetitionDatabase.TABLE_COMPETITIONS}(
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            type ENUM("HUNDRED_DASH", "DART") NOT NULL,
            finished BOOL NOT NULL
        );                
        
        CREATE TABLE IF NOT EXISTS ${CompetitionDatabase.TABLE_RESULTS}(
            id VARCHAR(255) PRIMARY KEY,
            competition_id VARCHAR(255) NOT NULL,
            athlete VARCHAR(255) NOT NULL,
            result FLOAT NOT NULL,
            remaining_attempts INT NOT NULL DEFAULT 1,
            FOREIGN KEY (competition_id) REFERENCES ${CompetitionDatabase.TABLE_COMPETITIONS}(id)
        );
    `);
    };

    private insertData = async (): Promise<void> => {
        await BaseDatabase.connection(CompetitionDatabase.TABLE_COMPETITIONS).insert(competitions);
        await BaseDatabase.connection(CompetitionDatabase.TABLE_RESULTS).insert(results);
    }
}

const migrations: Migrations = new Migrations();
migrations.execute();
