import { Router } from "express";
import RecipeBusiness from "../business/RecipeBusiness";
import RecipeController from "../controller/RecipeController";
import RecipeDatabase from "../database/RecipeDatabase";
import UserDatabase from "../database/UserDatabase";
import Authenticator from "../services/Authenticator";
import IdGenerator from "../services/IdGenerator";

const recipeRouter: Router = Router();
const recipeController: RecipeController = new RecipeController(
    new RecipeBusiness(
        new UserDatabase(),
        new RecipeDatabase(),
        new IdGenerator(),
        new Authenticator()
    )
);

recipeRouter.post("/", recipeController.createRecipe);
recipeRouter.get("/:id", recipeController.getRecipe);
recipeRouter.put("/:id", recipeController.editRecipe);
recipeRouter.delete("/:id", recipeController.deleteRecipe);

export default recipeRouter;
