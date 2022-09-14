import app from "./app";
import UserController from "./controller/UserController";

const userController: UserController = new UserController();
app.post("/users/signup", userController.signup);
app.post("/users/login", userController.login);
app.get("/users/all", userController.getUsers);
app.delete("/users/:id", userController.deleteUser);