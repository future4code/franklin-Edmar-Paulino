import { Request, Response } from "express";
import UserBusiness from "../business/UserBusiness";
import { IGetProfileInputDTO, IGetProfileOutputDTO, IGetUserProfileInputDTO } from "../model/User";

class UserController {
    constructor(
        private userBusiness: UserBusiness
    ) {}

    public getProfile = async (req: Request, res: Response): Promise<void> => {
        try {
            const input: IGetProfileInputDTO = {
                token: req.headers.authorization
            };
            const response: IGetProfileOutputDTO = await this.userBusiness.getProfile(input);

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

    public getUserProfile = async (req: Request, res: Response): Promise<void> => {
        try {
            const input: IGetUserProfileInputDTO = {
                id: req.params.id,
                token: req.headers.authorization
            };
            const response: IGetProfileOutputDTO = await this.userBusiness.getUserProfile(input);

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

export default UserController;
