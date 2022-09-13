import bcrypt from "bcryptjs";

class HashManager {
    public hash = async (plainText: string): Promise<string> => {
        const rounds: number = Number(process.env.BCRYPT_COST_FACTOR as string);
        const salt: string = await bcrypt.genSalt(rounds);
        const hash: string = await bcrypt.hash(plainText, salt);

        return hash;
    };

    public compare = async (plainText: string, hash: string): Promise<boolean> => {
        return bcrypt.compare(plainText, hash);
    }
}

export default HashManager;
