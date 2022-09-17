import { IUserDB, IUserFollowDB, User, UserFollow, USER_ROLES } from "../model/User";
import BaseDatabase from "./BaseDatabase";
import RecipeDatabase from "./RecipeDatabase";

class UserDatabase extends BaseDatabase {
    public static TABLE_USERS = "Cookenu_Users";
    public static TABLE_FOLLOWERS = "Cookenu_Users_Followers"

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

    public toUserFollowDB = (userFollow: UserFollow): IUserFollowDB => {
        const userFollowDB: IUserFollowDB = {
            id: userFollow.getId(),
            user_to_follow_id: userFollow.getUserToFollowId()
        };

        return userFollowDB;
    }

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
            .insert(userDB);
    };

    public checkFollow = async (userFollow: UserFollow): Promise<boolean> => {
        const userFollowDB: IUserFollowDB = this.toUserFollowDB(userFollow);

        const [result] = await BaseDatabase.connection(UserDatabase.TABLE_FOLLOWERS)
            .select()
            .where(userFollowDB);
        
        return Boolean(result);
    };

    public followUser = async (userFollow: UserFollow): Promise<void> => {
        const userFollowDB: IUserFollowDB = this.toUserFollowDB(userFollow);

        await BaseDatabase.connection(UserDatabase.TABLE_FOLLOWERS)
            .insert(userFollowDB);
    };

    public unfollowUser = async (userFollow: UserFollow): Promise<number> => {
        const userFollowDB: IUserFollowDB = this.toUserFollowDB(userFollow);

        const affectedRows: any = await BaseDatabase.connection(UserDatabase.TABLE_FOLLOWERS)
            .del()
            .where(userFollowDB);
        
        return Number(affectedRows);
    };

    public getFeed = async (id: string): Promise<any> => {
        const result = await BaseDatabase.connection(UserDatabase.TABLE_FOLLOWERS)
            .select([
                `${RecipeDatabase.TABLE_RECIPES}.id AS id`,
                `${RecipeDatabase.TABLE_RECIPES}.title AS title`,
                `${RecipeDatabase.TABLE_RECIPES}.description AS description`,
                `${RecipeDatabase.TABLE_RECIPES}.created_at AS createdAt`,
                `${UserDatabase.TABLE_USERS}.id AS userId`,
                `${UserDatabase.TABLE_USERS}.name AS userName`
            ])
            .from(UserDatabase.TABLE_FOLLOWERS)
            .join(RecipeDatabase.TABLE_RECIPES,`${RecipeDatabase.TABLE_RECIPES}.creator_user_id`, `${UserDatabase.TABLE_FOLLOWERS}.user_to_follow_id`)
            .join(UserDatabase.TABLE_USERS, `${UserDatabase.TABLE_USERS}.id`, `${UserDatabase.TABLE_FOLLOWERS}.user_to_follow_id`)
            .whereRaw(`${UserDatabase.TABLE_FOLLOWERS}.id = "${id}"`);
        
        return result;
    };
}

export default UserDatabase;
