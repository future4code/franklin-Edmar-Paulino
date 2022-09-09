import BaseDatabase from "./BaseDatabase";
import { user } from "../types";

class UserDatabase extends BaseDatabase {
    private static dataBase: string = "to_do_list_users";

    public create = async (newUser: user): Promise<void> => {
        await this.getConnection()(UserDatabase.dataBase)
        .insert(newUser);
    };

    public edit = async (id: string, columsUpdate: { name: string, nickname: string }): Promise<number> => {
        const affectedRows: any = await this.getConnection()(UserDatabase.dataBase)
        .update(columsUpdate)
        .where({ id });

        return Number(affectedRows);
    };

    public getByEmail = async (email: string): Promise<user> => {
        const [result] = await this.getConnection()(UserDatabase.dataBase)
        .where({ email });

        return result;
    };

    public getById = async (id: string): Promise<user> => {
        const [result] = await this.getConnection()(UserDatabase.dataBase)
        .where({ id });

        return result;
    };

    public delete = async (id: string): Promise<number> => {
        const affectedRows: any = await this.getConnection()(UserDatabase.dataBase)
        .del()
        .where({ id });

        return Number(affectedRows);
    }
}

export default UserDatabase;
