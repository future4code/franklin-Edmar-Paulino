import { Request, Response } from "express";
import AuthBusiness from "../business/AuthBusiness";
import { IAuthOutputDTO, ILoginAuthInputDTO, ISignupAuthInputDTO } from "../model/Auth";

class AuthController {
    constructor(
        private authBusiness: AuthBusiness
    ) {}

    public signup = async (req: Request, res: Response): Promise<void> => {
        try {
            const input: ISignupAuthInputDTO = {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            };
            const response: IAuthOutputDTO = await this.authBusiness.signup(input);

            res.status(201).send(response);
        } catch(error: unknown) {
            if (error instanceof Error) {
                console.error(error.message);
                res.status(400).send({ message: error.message });
            } else {
                console.error(error);
                res.status(500).send({ message: "Unexpected server error" });
            }
        }
    };

    public login = async (req: Request, res: Response): Promise<void> => {
        try {
            const input: ILoginAuthInputDTO = {
                email: req.body.email,
                password: req.body.password
            };
            const response: IAuthOutputDTO = await this.authBusiness.login(input);

            res.status(200).send(response);
        } catch(error: unknown) {
            if (error instanceof Error) {
                console.error(error.message);
                res.status(400).send({ message: error.message });
            } else {
                console.error(error);
                res.status(500).send({ message: "Unexpected server error" });
            }
        }
    };
}

export default AuthController;
