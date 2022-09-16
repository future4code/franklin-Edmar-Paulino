import { Request, Response } from "express";
import RecipeBusiness from "../business/RecipeBusiness";
import { ICreateRecipeInputDTO, IGetRecipeInputDTO, IGetRecipeOutputDTO } from "../model/Recipe";

class RecipeController {
    constructor(
        private recipeBusiness: RecipeBusiness
    ) {}

    public createRecipe = async (req: Request, res: Response): Promise<void> => {
        try {
            const input: ICreateRecipeInputDTO = {
                token: req.headers.authorization,
                title: req.body.title,
                description: req.body.description
            };
            await this.recipeBusiness.createRecipe(input);

            res.status(201).end();
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

    public getRecipe = async (req: Request, res: Response): Promise<void> => {
        try {
            const input: IGetRecipeInputDTO = {
                id: req.params.id,
                token: req.headers.authorization
            };
            const response: IGetRecipeOutputDTO = await this.recipeBusiness.getRecipe(input);

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

export default RecipeController;
