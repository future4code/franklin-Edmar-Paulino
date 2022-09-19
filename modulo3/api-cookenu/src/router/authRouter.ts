import { Router } from "express";
import AuthBusiness from "../business/AuthBusiness";
import AuthController from "../controller/AuthController";
import UserDatabase from "../database/UserDatabase";
import Authenticator from "../services/Authenticator";
import HashManager from "../services/HashManager";
import IdGenerator from "../services/IdGenerator";

const authRouter: Router = Router();
const authController: AuthController = new AuthController(
    new AuthBusiness(
        new UserDatabase,
        new IdGenerator,
        new Authenticator,
        new HashManager
    )
);

authRouter.post("/signup", authController.signup);
authRouter.post("/login", authController.login);

export default authRouter;
