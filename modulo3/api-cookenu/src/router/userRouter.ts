import { Router } from "express";
import UserBusiness from "../business/UserBusiness";
import UserController from "../controller/UserController";
import UserDatabase from "../database/UserDatabase";
import Authenticator from "../services/Authenticator";

const userRouter: Router = Router();
const userController: UserController = new UserController(
    new UserBusiness(
        new UserDatabase(),
        new Authenticator()
    )
);

userRouter.get("/profile", userController.getProfile);
userRouter.get("/:id", userController.getUserProfile);

export default userRouter;
