import { IUserDB, User } from "../model/User";
import BaseDatabase from "./BaseDatabase";

class UserDatabase extends BaseDatabase {
    public static TABLE_USERS: string = "Arq_Users";

    public toUserDBModel = (user: User): IUserDB => {
        const userDB: IUserDB = {
            id: user.getId(),
            name: user.getName(),
            email: user.getEmail(),
            password: user.getPassword(),
            role: user.getRole()
        }

        return userDB;
    };

    public createUser = async (user: User): Promise<void> => {
        const userDB: IUserDB = this.toUserDBModel(user);

        await BaseDatabase.connection(UserDatabase.TABLE_USERS)
            .insert(userDB);
    };

    public getUserByEmail = async (email: string): Promise<any> => {
        const [result] = await BaseDatabase.connection(UserDatabase.TABLE_USERS)
            .select()
            .where({ email });

        return result;
    };

    public getUserById = async (id: string): Promise<any> => {
        const [result] = await BaseDatabase.connection(UserDatabase.TABLE_USERS)
            .select()
            .where({ id });
        
        return result;
    }

    public getAllUsers = async (): Promise<any> => {
        const result = await BaseDatabase.connection(UserDatabase.TABLE_USERS)
            .select();
        
        return result;
    };

    public deleteUser = async (id: string): Promise<number> => {
        const affectedRows = await BaseDatabase.connection(UserDatabase.TABLE_USERS)
            .del()
            .where({ id });

        return Number(affectedRows);
    };
}

export default UserDatabase;
