import { Request, Response } from "express";

class CompetitionController {
    public createCompetition = async (req: Request, res: Response): Promise<void> => {
        try {
            res.status(200).send({ message: "Competition created!" });
        } catch(err: unknown) {
            if (err instanceof Error) {
                console.error(err.message);
            } else {
                console.error(err);
            }
        }
    };

    public registerResult = async (req: Request, res: Response): Promise<void> => {
        try {
            res.status(200).send({ message: "Results regitered!" });
        } catch(err: unknown) {
            if (err instanceof Error) {
                console.error(err.message);
            } else {
                console.error(err);
            }
        }
    };

    public finishCompetition = async (req: Request, res: Response): Promise<void> => {
        try {
            res.status(200).send({ message: "Competition finished!" });
        } catch(err: unknown) {
            if (err instanceof Error) {
                console.error(err.message);
            } else {
                console.error(err);
            }
        }
    };

    public getCompetitionRanking = async (req: Request, res: Response): Promise<void> => {
        try {
            res.status(200).send({ message: "Competition Ranking" });
        } catch(err: unknown) {
            if (err instanceof Error) {
                console.error(err.message);
            } else {
                console.error(err);
            }
        }
    };
}

export default CompetitionController;
