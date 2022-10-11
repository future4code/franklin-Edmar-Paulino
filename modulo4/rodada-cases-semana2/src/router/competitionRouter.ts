import { Router } from "express";
import CompetitionController from "../controller/CompetitionController";


const competitionRouter: Router = Router();
const competitionController: CompetitionController = new CompetitionController();

competitionRouter.post("/competition", competitionController.createCompetition);
competitionRouter.post("/competition/:id", competitionController.registerResult);
competitionRouter.post("/competition/:id/finish", competitionController.finishCompetition);
competitionRouter.get("/competition/:id", competitionController.getCompetitionRanking);

export default competitionRouter;
