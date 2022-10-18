import {
    Competition,
    CompetitionResult,
    COMPETITION_TYPE,
    ICompetitionDB,
    ICompetitionResultDB,
    IRanking
} from "../../model/Competition";

class CompetitionDatabaseMock {
    public static TABLE_COMPETITIONS = "Olympics_Competitions";
    public static TABLE_RESULTS = "Olympics_Results";

    constructor(
        private isGetCompetitionByIdReturnNull: boolean = false,
        private isGetCompetitionResultByIdReturnNull: boolean = false,
        private isGetCompetitionResultsOrderedReturnNull: boolean = false,
        private competititonStatus: boolean = false
    ){}

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
            result: competitionResult.getResult(),
            remaining_attempts: competitionResult.getRemainingAttempts()            
        };

        return competitionResultDB;
    };

    public getCompetitionById = async (id: string) => {
        const competition: any = {
            id: "f77d0fc1-e102-4075-850c-dd0fb5852f98",
            name: "Fast and Furious Heros",
            type: COMPETITION_TYPE.HUNDRED_DASH,
            finished: this.competititonStatus
        };

        return this.isGetCompetitionByIdReturnNull ? null : competition;
    };

    public getCompetitionResultById = async (id: string): Promise<ICompetitionResultDB> => {
        const competitionResult: any = {
            id: "d98ecd2d-a77d-4004-8ec7-371a6d839229",
            competition_id: "f77d0fc1-e102-4075-850c-dd0fb5852f98",
            athlete: "Eliud Kipchoge",
            result: 20.5,
            remaining_attempts: 0
        };

        return this.isGetCompetitionResultByIdReturnNull ? null : competitionResult;
    };

    public createCompetition = async (newCompetition: Competition): Promise<void> => {};

    public createCompetitionResult = async (newCompetitionResult: CompetitionResult): Promise<void> => {};

    public updateCompetitionResult = async (competitionResult: CompetitionResult): Promise<number> => 1;

    public updateCompetition = async (competition: Competition): Promise<number> => 1;

    public getCompetitionResultsOrdered = async (competition_id: string, direction: string): Promise<IRanking[]> => {
        const result: any = [
            {
                id: "d98ecd2d-a77d-4004-8ec7-371a6d839229",
                athlete: "Eliud Kipchoge",
                result: 20.5
            },
            {
                id: "87e296be-a385-4ae6-8d51-ef546ac5a093",
                athlete: "Tamirat Tola",
                result: 19.3
            },
            {
                id: "c2418710-3de8-4c23-8db7-1b4e5b5d1267",
                athlete: "Mosinet Geremew",
                result: 20.7
            }
        ];
        
        return this.isGetCompetitionResultsOrderedReturnNull ? null : result;
    };
}

export default CompetitionDatabaseMock;
