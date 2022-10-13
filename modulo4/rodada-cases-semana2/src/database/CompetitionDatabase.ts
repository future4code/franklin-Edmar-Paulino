import { Competition, ICompetitionDB } from "../model/Competition";
import BaseDatabase from "./BaseDatabase";

class CompetitionDatabase extends BaseDatabase {
    public static TABLE_COMPETITIONS = "Olympics_Competitions";
    public static TABLE_RESULTS = "Olympics_Results";

    public toCompetitionDBModel = (competition: Competition): ICompetitionDB => {
        const competitionDB: ICompetitionDB = {
            id: competition.getId(),
            name: competition.getName(),
            type: competition.getType(),
            finished: competition.getFinished()
        };

        return competitionDB;
    }

    public createCompetition = async (newCompetition: Competition): Promise<void> => {
        const competitionDB: ICompetitionDB = this.toCompetitionDBModel(newCompetition);
        await BaseDatabase.connection(CompetitionDatabase.TABLE_COMPETITIONS).insert(competitionDB);
    }
}

export default CompetitionDatabase;
