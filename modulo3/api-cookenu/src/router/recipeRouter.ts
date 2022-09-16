import { Router } from "express";
import RecipeController from "../controller/RecipeController";

const recipeRouter: Router = Router();
const recipeController: RecipeController = new RecipeController();

recipeRouter.post("/", recipeController.createRecipe);
recipeRouter.get("/:id", recipeController.getRecipe);

export default recipeRouter;
