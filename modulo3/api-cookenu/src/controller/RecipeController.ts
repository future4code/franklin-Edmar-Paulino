import { Request, Response } from "express";

class RecipeController {
    public createRecipe = async (req: Request, res: Response): Promise<void> => {
        try {

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
