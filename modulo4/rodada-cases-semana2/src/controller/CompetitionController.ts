import { Request, Response } from "express";
import CompetitionBusiness from "../business/CompetitionBusiness";
import { 
    ICreateCompetitionInputDTO,
    IIDInputDTO,
    IRegisterNewTryInputDTO,
    IIDOutputDTO,
    IMessageOutputDTO,
    IRegisterCompetitionResultInputDTO,
    IStatusCode,
    IRankingOutputDTO
} from "../model/Competition";

export const statusCode: IStatusCode = {
    code: 200,
    reset: () => statusCode.code = 200
};

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
            const output: IIDOutputDTO = await this.competitionBusiness.createCompetition(input);
            res.status(200).send(output);
        } catch(err: unknown) {
            if (err instanceof Error) {
                console.error(err);
                if (statusCode.code === 200) {
                    res.status(500).send({ message: "An unexpected error occurred" });
                } else {
                    res.status(statusCode.code).send({ message: err.message });
                }
            } else {
                console.error(err);
                res.status(500).send({ message: "Internal server error" });
            }
        } finally {
            statusCode.reset();
        }
    };

    public registerCompetitionResult = async (req: Request, res: Response): Promise<void> => {
        try {
            const input: IRegisterCompetitionResultInputDTO = {
                competitionId: req.params.id,
                athlete: req.body.athlete,
                result: req.body.result
            };
            const output: IIDOutputDTO = await this.competitionBusiness.registerCompetitionResult(input);

            res.status(200).send(output);
        } catch(err: unknown) {
            if (err instanceof Error) {
                console.error(err);
                if (statusCode.code === 200) {
                    res.status(500).send({ message: "An unexpected error occurred" });
                } else {
                    res.status(statusCode.code).send({ message: err.message });
                }
            } else {
                console.error(err);
                res.status(500).send({ message: "Internal server error" });
            }
        } finally {
            statusCode.reset();
        }
    };

    public registerNewTry = async (req: Request, res: Response): Promise<void> => {
        try {
            const input: IRegisterNewTryInputDTO = {
                id: req.params.id,
                newResult: req.body.newResult
            }
            const output: IMessageOutputDTO = await this.competitionBusiness.updateNumberOfTries(input);

            res.status(200).send(output);
        } catch(err: unknown) {
            if (err instanceof Error) {
                console.error(err);
                if (statusCode.code === 200) {
                    res.status(500).send({ message: "An unexpected error occurred" });
                } else {
                    res.status(statusCode.code).send({ message: err.message });
                }
            } else {
                console.error(err);
                res.status(500).send({ message: "Internal server error" });
            }
        } finally {
            statusCode.reset();
        }
    };

    public finishCompetition = async (req: Request, res: Response): Promise<void> => {
        try {
            const input: IIDInputDTO = { id: req.params.id };
            const output: IMessageOutputDTO = await this.competitionBusiness.finishCompetition(input);

            res.status(200).send(output);
        } catch(err: unknown) {
            if (err instanceof Error) {
                console.error(err);
                if (statusCode.code === 200) {
                    res.status(500).send({ message: "An unexpected error occurred" });
                } else {
                    res.status(statusCode.code).send({ message: err.message });
                }
            } else {
                console.error(err);
                res.status(500).send({ message: "Internal server error" });
            }
        } finally {
            statusCode.reset();
        }
    };

    public getCompetitionRanking = async (req: Request, res: Response): Promise<void> => {
        try {
            const input: IIDInputDTO = { id: req.params.id };
            const output: IRankingOutputDTO = await this.competitionBusiness.getCompetitionRanking(input);

            res.status(200).send(output);
        } catch(err: unknown) {
            if (err instanceof Error) {
                console.error(err);
                if (statusCode.code === 200) {
                    res.status(500).send({ message: "An unexpected error occurred" });
                } else {
                    res.status(statusCode.code).send({ message: err.message });
                }
            } else {
                console.error(err);
                res.status(500).send({ message: "Internal server error" });
            }
        } finally {
            statusCode.reset();
        }
    };
}

export default CompetitionController;
