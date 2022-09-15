import bcrypt from "bcryptjs";
import dotenv from "dotenv";

dotenv.config();

class HashManager {
    public hash = async (plainText: string): Promise<string> => {
        const rounds: number = Number(process.env.BCRYPT_COST_FACTOR as string);
        const salt: string = await bcrypt.genSalt(rounds);
        const hash: string = await bcrypt.hash(plainText, salt);

        return hash;
    };

    public compare = async (plainText: string, hash: string): Promise<boolean> => {
        const result: boolean = await bcrypt.compare(plainText, hash);

        return result;
    };
}

export default HashManager;
