import connection from "../connection";

class UserDatabase {
    private userTableName: string = "User";

    public async createUser(id: string, email: string, password: string): Promise<void> {
        await connection(this.userTableName)
            .insert({ id, email, password });
    }

    public async getUserByEmail(email: string): Promise<any> {
        const [result] = await connection(this.userTableName)
            .select("*")
            .from(this.userTableName)
            .where({ email });

        return result;
    }

    public async getUserById(id: string): Promise<any> {
        const [result] = await connection(this.userTableName)
            .select("email")
            .from(this.userTableName)
            .where({ id });

        return result;
    }
}

export default UserDatabase;
