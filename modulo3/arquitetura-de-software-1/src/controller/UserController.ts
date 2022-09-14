import { Request, Response } from "express";
import UserBusiness from "../business/UserBusiness";

class UserController {
    public signup = async (req: Request, res: Response): Promise<void> => {
        try {
            const { name, email, password } = req.body;
            
            const userBusiness: UserBusiness = new UserBusiness();
            const response: object = await userBusiness.signup(name, email, password);

            res.status(201).send(response);
        } catch(error: unknown) {  
            if (error instanceof Error) {
                const { message } = error;
                console.error(message);
                if (res.statusCode === 200 && message.indexOf("inválid") === -1) {
                    res.status(500).send({ message: "Internal server error" });
                } else {
                    res.status(400).send({ message });
                }
            } else {
                console.error(error);
                res.status(500).send({ message: "Unexpected server error" });
            }
        }
    };

    public login = async (req: Request, res: Response): Promise<void> => {
        try {
            const { email, password } = req.body;

            const userBusiness: UserBusiness = new UserBusiness();
            const response: object = await userBusiness.login(email, password);

            res.status(200).send(response);
        } catch(error: unknown) {
            if (error instanceof Error) {
                const { message } = error;
                
                console.error(message);
                if (res.statusCode === 200 && message.indexOf("inválid") === -1) {
                    res.status(500).send({ message: "Internal server error" });
                } else {
                    res.status(400).send({ message });
                }
            } else {
                console.error(error);
                res.status(500).send({ message: "Unexpected server error" });
            }
        }
    };

    public getUsers = async (req: Request, res: Response): Promise<void> => {
        try {
            const token: string = req.headers.authorization as string;

            const userBusiness: UserBusiness = new UserBusiness();
            const response: object = await userBusiness.getUsers(token);

            res.status(200).send(response);
        } catch(error: unknown) {
            if (error instanceof Error) {
                const { message } = error;
                
                console.error(message);
                if (res.statusCode === 200 && message.indexOf("inválid") === -1) {
                    res.status(500).send({ message: "Internal server error" });
                } else {
                    res.status(400).send({ message });
                }
            } else {
                console.error(error);
                res.status(500).send({ message: "Unexpected server error" });
            }
        }
    };

    public deleteUser = async (req: Request, res: Response): Promise<void> => {
        try {
            const { id } = req.params;
            const token: string = req.headers.authorization as string;

            const userBusiness: UserBusiness = new UserBusiness();
            const response: object = await userBusiness.deleteUser(token, id);

            res.status(200).send(response);
        } catch(error: unknown) {
            if (error instanceof Error) {
                const { message } = error;
                
                console.error(message);
                if (res.statusCode === 200 && message.indexOf("inválid") === -1) {
                    res.status(500).send({ message: "Internal server error" });
                } else {
                    res.status(400).send({ message });
                }
            } else {
                console.error(error);
                res.status(500).send({ message: "Unexpected server error" });
            }
        }
    };
}

export default UserController;
