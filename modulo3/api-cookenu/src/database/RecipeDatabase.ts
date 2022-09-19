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

    public editRecipe = async (recipe: Recipe): Promise<number> => {
        const recipeDB: IRecipeDB = this.toRecipeDBModel(recipe);
        const affectedRows: any = await BaseDatabase.connection(RecipeDatabase.TABLE_RECIPES)
            .update(recipeDB)
            .where({ id: recipeDB.id });
        
        return Number(affectedRows);
    };

    public deleteRecipe = async (id: string): Promise<number> => {
        const affectedRows: any = await BaseDatabase.connection(RecipeDatabase.TABLE_RECIPES)
            .del()
            .where({ id });
        
        return Number(affectedRows);
    };
}

export default RecipeDatabase;
