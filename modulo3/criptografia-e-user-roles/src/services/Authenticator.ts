import * as jwt from "jsonwebtoken";
import { AuthenticatorData } from "../types";

class Authenticator {
    private static EXPIRES_IN = "10m";

    public generateToken = (payload: AuthenticatorData): string => {
        const token: string = jwt.sign(
            payload,
            process.env.JWT_KEY as string,
            {
                expiresIn: Authenticator.EXPIRES_IN
            }
        );

        return token;
    };

    public getTokenData = (token: string): AuthenticatorData => {
        const tokenData: AuthenticatorData = jwt.verify(token, process.env.JWT_KEY as string) as AuthenticatorData;

        return tokenData;
    }
}

export default Authenticator;
