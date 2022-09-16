import { IRecipeDB, Recipe } from "../model/Recipe";
import BaseDatabase from "./BaseDatabase";

class RecipeDatabase extends BaseDatabase {
    public static TABLE_RECIPES = "Cookenu_Recipes";

    public toRecipeDBModel = (recipe: Recipe) => {
        const recipeDB: IRecipeDB = {
            id: recipe.getId(),
            creator_user_id: recipe.getCreatorUserId(),
            title: recipe.getTitle(),
            description: recipe.getDescription(),
            created_at: recipe.getCreatedAt()
        };

        return recipeDB;
    };

    public getRecipeById = async (id: string): Promise<any> => {
        const [result] = await BaseDatabase.connection(RecipeDatabase.TABLE_RECIPES)
            .select()
            .where({ id });

        return result;
    };

    public createRecipe = async (recipe: Recipe): Promise<void> => {
        const recipeDB: IRecipeDB = this.toRecipeDBModel(recipe);

        await BaseDatabase.connection(RecipeDatabase.TABLE_RECIPES).insert(recipeDB);
    };
}

export default RecipeDatabase;
