import CompetitionDatabase from "../database/CompetitionDatabase";
import { ICreateCompetitionInputDTO, IIDOutputDTO } from "../model/Competition";
import IdGenerator from "../services/IdGenerator";

class CompetitionBusiness {
    constructor(
        private competitionDatabase: CompetitionDatabase,
        private idGenerator: IdGenerator
    ){}
    public createCompetition = async (input: ICreateCompetitionInputDTO): Promise<IIDOutputDTO> => {
        const id: string = this.idGenerator.generate();
        const result: IIDOutputDTO = { id };
        return result;
    }
}

export default CompetitionBusiness;
