import * as jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { USER_ROLES } from "../model/User";

dotenv.config();

export interface ITokenPayload {
    id: string,
    role: USER_ROLES
};

class Authenticator {
    public generateToken = (payload: ITokenPayload): string => {
        const token: string = jwt.sign(
            payload,
            process.env.JWT_KEY as string,
            {
                expiresIn: process.env.JWT_EXPIRES_IN
            }
        );

        return token;
    };

    public getTokenPayload = (token: string): ITokenPayload => {
        const payload: ITokenPayload = jwt.verify(
            token,
            process.env.JWT_KEY as string
        ) as ITokenPayload;

        return payload;
    };
}

export default Authenticator;
