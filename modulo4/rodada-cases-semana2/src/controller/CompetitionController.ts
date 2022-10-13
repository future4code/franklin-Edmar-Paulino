import { Request, Response } from "express";
import CompetitionBusiness from "../business/CompetitionBusiness";
import { ICreateCompetitionInputDTO, IIDOutputDTO } from "../model/Competition";

class CompetitionController {
    constructor(
        private competitionBusiness: CompetitionBusiness
    ){}

    public createCompetition = async (req: Request, res: Response): Promise<void> => {
        try {
            const input: ICreateCompetitionInputDTO = {
                name: req.body.name,
                type: req.body.type
            };
            const result: IIDOutputDTO = await this.competitionBusiness.createCompetition(input);
            res.status(200).send(result);
        } catch(err: unknown) {
            if (err instanceof Error) {
                console.error(err.message);
                res.status(400).send({ message: err.message });
            } else {
                console.error(err);
                res.status(500).send({ message: "Internal server error" });
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

    public newTry = async (req: Request, res: Response): Promise<void> => {
        try {
            res.status(200).send({ message: "New try registered!" });
        } catch(err: unknown) {
            if (err instanceof Error) {
                console.error(err.message);
            } else {
                console.error(err);
            }
        }
    }

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
