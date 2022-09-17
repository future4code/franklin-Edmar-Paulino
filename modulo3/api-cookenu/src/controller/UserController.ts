import { Request, Response } from "express";
import UserBusiness from "../business/UserBusiness";
import { 
    IFollowUserInputDTO,
    IGetProfileOutputDTO,
    IGetUserProfileInputDTO,
    IMessageOutputDTO,
    IUnfollowUserInputDTO,
    IGetUserFeedOutputDTO,
    ITokenInputDTO
} from "../model/User";

class UserController {
    constructor(
        private userBusiness: UserBusiness
    ) {}

    public getProfile = async (req: Request, res: Response): Promise<void> => {
        try {
            const input: ITokenInputDTO = {
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

    public followUser = async (req: Request, res: Response): Promise<void> => {
        try {
            const input: IFollowUserInputDTO = {
                token: req.headers.authorization,
                userToFollowId: req.body.userToFollowId
            };
            const response: IMessageOutputDTO = await this.userBusiness.followUser(input);

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

    public unfollowUser = async (req: Request, res: Response): Promise<void> => {
        try {
            const input: IUnfollowUserInputDTO = {
                token: req.headers.authorization,
                userToUnfollowId: req.body.userToUnfollowId
            };
            const response: IMessageOutputDTO = await this.userBusiness.unfollowUser(input);

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

    public getUserFeed = async (req: Request, res: Response): Promise<void> => {
        try {
            const input: ITokenInputDTO = {
                token: req.headers.authorization
            };
            const response: IGetUserFeedOutputDTO = await this.userBusiness.getUserFeed(input);

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

    public deleteUser = async (req: Request, res: Response): Promise<void> => {
        try {
            const input: IGetUserProfileInputDTO = {
                id: req.params.id,
                token: req.headers.authorization
            };
            const response: IMessageOutputDTO = await this.userBusiness.deleteUser(input);

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
