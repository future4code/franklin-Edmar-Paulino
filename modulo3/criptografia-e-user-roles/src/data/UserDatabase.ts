import BaseDatabase from "./BaseDatabase";
import { user } from "../types";

class UserDatabase extends BaseDatabase {
    public create = async (newUser: user): Promise<void> => {
        await this.getConnection()("to_do_list_users")
        .insert(newUser);
    };

    public edit = async (id: string, columsUpdate: { name: string, nickname: string }): Promise<number> => {
        const affectRows: any = await this.getConnection()("to_do_list_users")
        .update(columsUpdate)
        .where({ id });

        return Number(affectRows);
    };

    public getByEmail = async (email: string): Promise<user> => {
        const [result] = await this.getConnection()("to_do_list_users")
        .where({ email });

        return result;
    };

    public getById = async (id: string): Promise<user> => {
        const [result] = await this.getConnection()("to_do_list_users")
        .where({ id });

        return result;
    };
}

export default UserDatabase;
