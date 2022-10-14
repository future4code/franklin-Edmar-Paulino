import { Competition, CompetitionResult, ICompetitionDB, ICompetitionResultDB } from "../model/Competition";
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
    };

    public toCompetitionResultDBModel = (competitionResult: CompetitionResult): ICompetitionResultDB => {
        const competitionResultDB: ICompetitionResultDB = {
            competition_id: competitionResult.getCompetitionId(),
            id: competitionResult.getId(),
            athlete: competitionResult.getAthlete(),
            result: competitionResult.getValue(),
            tries: competitionResult.getTries()            
        };

        return competitionResultDB;
    };

    public getCompetitionById = async (id: string): Promise<ICompetitionDB> => {
        const [competition] = await BaseDatabase.connection(CompetitionDatabase.TABLE_COMPETITIONS)
            .select()
            .where({ id });

        return competition as ICompetitionDB;
    };

    public getCompetitionResultById = async (id: string): Promise<ICompetitionResultDB> => {
        const [competitionResult] = await BaseDatabase.connection(CompetitionDatabase.TABLE_RESULTS)
            .select()
            .where({ id });

        return competitionResult as ICompetitionResultDB;
    };

    public createCompetition = async (newCompetition: Competition): Promise<void> => {
        const newCompetitionDB: ICompetitionDB = this.toCompetitionDBModel(newCompetition);
        await BaseDatabase.connection(CompetitionDatabase.TABLE_COMPETITIONS).insert(newCompetitionDB);
    };

    public createCompetitionResult = async (newCompetitionResult: CompetitionResult): Promise<void> => {
        const newCompetitionResultDB: ICompetitionResultDB = this.toCompetitionResultDBModel(newCompetitionResult);
        await BaseDatabase.connection(CompetitionDatabase.TABLE_RESULTS).insert(newCompetitionResultDB);
    };

    public updateCompetitionResult = async (competitionResult: CompetitionResult): Promise<number> => {
        const competitionResultDB: ICompetitionResultDB = this.toCompetitionResultDBModel(competitionResult);
        const affectedRows: any = await BaseDatabase.connection(CompetitionDatabase.TABLE_RESULTS)
            .update(competitionResultDB)
            .where({ id: competitionResultDB.id });

        return Number(affectedRows);
    };

    public updateCompetition = async (competition: Competition): Promise<number> => {
        const competitionDB: ICompetitionDB = this.toCompetitionDBModel(competition);
        const affectedRows: any = await BaseDatabase.connection(CompetitionDatabase.TABLE_COMPETITIONS)
            .update(competitionDB)
            .where({ id: competitionDB.id });

        return Number(affectedRows);
    };
}

export default CompetitionDatabase;
