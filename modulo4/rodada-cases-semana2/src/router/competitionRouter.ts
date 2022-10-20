import { Router } from "express";
import CompetitionBusiness from "../business/CompetitionBusiness";
import CompetitionController from "../controller/CompetitionController";
import CompetitionDatabase from "../database/CompetitionDatabase";
import IdGenerator from "../services/IdGenerator";


const competitionRouter: Router = Router();
const competitionController: CompetitionController = new CompetitionController(
    new CompetitionBusiness(
        new CompetitionDatabase(),
        new IdGenerator()
    )
);

competitionRouter.post("/competition", competitionController.createCompetition);
competitionRouter.post("/competition/:id", competitionController.registerCompetitionResult);
competitionRouter.put("/result/:id", competitionController.registerNewTry);
competitionRouter.put("/competition/:id/finish", competitionController.finishCompetition);
competitionRouter.get("/competition/:id/ranking", competitionController.getCompetitionRanking);

export default competitionRouter;
