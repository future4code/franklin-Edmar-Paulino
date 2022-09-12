import * as jwt from "jsonwebtoken";
import { AuthenticationData } from "../types";

class Authenticator {
    private static EXPIRES_IN = "10m";

    public generateToken = (payload: AuthenticationData): string => {
        const token: string = jwt.sign(
            payload,
            process.env.JWT_KEY as string,
            {
                expiresIn: Authenticator.EXPIRES_IN
            }
        );

        return token;
    };

    public getTokenData = (token: string): AuthenticationData => {
        const tokenData: AuthenticationData = jwt.verify(token, process.env.JWT_KEY as string) as AuthenticationData;

        return tokenData;
    }
}

export default Authenticator;
