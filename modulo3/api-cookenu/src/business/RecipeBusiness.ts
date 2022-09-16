import RecipeDatabase from "../database/RecipeDatabase";
import UserDatabase from "../database/UserDatabase";
import { ICreateRecipeInputDTO, IGetRecipeInputDTO, IGetRecipeOutputDTO, Recipe } from "../model/Recipe";
import Authenticator, { ITokenPayload } from "../services/Authenticator";
import IdGenerator from "../services/IdGenerator";

class RecipeBusiness {
    constructor(
        private userDatabase: UserDatabase,
        private recipeDatabase: RecipeDatabase,
        private idGenerator: IdGenerator,
        private authenticator: Authenticator
    ) {}

    public createRecipe = async (input: ICreateRecipeInputDTO): Promise<void> => {
        const { token, title, description } = input;

        if (!token) {
            throw new Error("Token de acesso não informado!");
        }

        if (!title || typeof title !== "string") {
            throw new Error("Parâmetro 'title' inválido");
        }

        if (!description || typeof description !== "string") {
            throw new Error("Parâmetro 'description' inválido");
        }

        const tokenData: ITokenPayload = this.authenticator.getTokenData(token);
        const tokenIdExists: any = await this.userDatabase.getUserById(tokenData.id);

        if (!tokenIdExists) {
            throw new Error("Token de acesso inválido!");
        }

        const id: string = this.idGenerator.generate();
        const recipe: Recipe = new Recipe(id, tokenData.id, title, description);

        await this.recipeDatabase.createRecipe(recipe);
    };

    public getRecipe = async (input: IGetRecipeInputDTO): Promise<IGetRecipeOutputDTO> => {
        const { id, token } = input;

        if (!token) {
            throw new Error("Token de acesso não informado!");
        }

        if (!id) {
            throw new Error("ID da receita não informado!");
        }

        const tokenData: ITokenPayload = this.authenticator.getTokenData(token);
        const tokenIdExists: any = await this.userDatabase.getUserById(tokenData.id);

        if (!tokenIdExists) {
            throw new Error("Token de acesso inválido!");
        }

        const recipe: any = await this.recipeDatabase.getRecipeById(id);

        if (!recipe) {
            throw new Error("ID da receita inválido!");
        }

        const day: number = recipe.created_at.getDate();
        const month: number = recipe.created_at.getMonth() + 1;
        const year: number = recipe.created_at.getFullYear();

        const response: IGetRecipeOutputDTO = {
            id: recipe.id,
            title: recipe.title,
            description: recipe.description,
            createdAt: `${day}/${month < 10 ? "0" + month : month}/${year}`
        };

        return response;
    }
}

export default RecipeBusiness;
