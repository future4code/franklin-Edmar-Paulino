import * as jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export interface ITokenPayload {
    id: string
}

class Authenticator {
    public generateToken = (payload: ITokenPayload): string => {
        const token: string = jwt.sign(
            payload,
            process.env.JWT_KEY as string,
            { 
                expiresIn: process.env.JWT_EXPIRES_IN as string
            }
        );

        return token;
    };

    public getTokenData = (token: string): ITokenPayload => {
        const tokenData: ITokenPayload = jwt.verify(
            token,
            process.env.JWT_KEY as string
        ) as ITokenPayload;
        
        return tokenData;
    };
}

export default Authenticator;
