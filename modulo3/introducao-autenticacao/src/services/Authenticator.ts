import * as jwt from "jsonwebtoken";
import { AuthenticationData } from "../types";
import dotenv from "dotenv";

dotenv.config();

class Authenticator {
    private expiresIn: string = "1min";

    public generateToken(payload: AuthenticationData): string {
        const token: string = jwt.sign(
            payload,
            process.env.JWT_KEY as string,
            { expiresIn: this.expiresIn }
        );

        return token;
    }

    public getTokenData(token: string): AuthenticationData {
        const payload: any = jwt.verify(token, process.env.JWT_KEY as string) as any;
        const tokenData: AuthenticationData = { id: payload.id };
    
        return tokenData;
    }
}

export default Authenticator;
