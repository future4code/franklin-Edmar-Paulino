import { IUserDB, User } from "../model/User";
import BaseDatabase from "./BaseDatabase";

class UserDatabase extends BaseDatabase {
    public static TABLE_USERS = "Cookenu_Users";

    public toUserDBModel = (user: User): IUserDB => {
        const userDB: IUserDB = {
            id: user.getId(),
            name: user.getName(),
            email: user.getEmail(),
            password: user.getPassword()
        }

        return userDB;
    };

    public getUserById = async (id: string): Promise<any> => {
        const [result] = await BaseDatabase.connection(UserDatabase.TABLE_USERS)
            .select()
            .where({ id });
        
        return result;
    };

    public getUserByEmail = async (email: string): Promise<any> => {
        const [result] = await BaseDatabase.connection(UserDatabase.TABLE_USERS)
            .select()
            .where({ email });
        
        return result;
    };

    public createUser = async (user: User): Promise<void> => {
        const userDB: IUserDB = this.toUserDBModel(user);

        await BaseDatabase.connection(UserDatabase.TABLE_USERS)
            .insert(userDB)
    }

}

export default UserDatabase;
