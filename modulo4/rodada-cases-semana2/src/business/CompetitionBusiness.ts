import CompetitionDatabase from "../database/CompetitionDatabase";
import { Competition, COMPETITION_TYPE, ICreateCompetitionInputDTO, IIDOutputDTO } from "../model/Competition";
import IdGenerator from "../services/IdGenerator";

class CompetitionBusiness {
    constructor(
        private competitionDatabase: CompetitionDatabase,
        private idGenerator: IdGenerator
    ){}
    public createCompetition = async (input: ICreateCompetitionInputDTO): Promise<IIDOutputDTO> => {
        const { name, type } = input;

        if (!name || typeof name !== "string") {
            throw new Error("Parâmetro 'name' inválido!");
        }

        if (!type || typeof type !== "string" || (type !== COMPETITION_TYPE.HUNDRED_DASH && type !== COMPETITION_TYPE.DART)) {
            throw new Error("Parâmetro 'type' inválido")
        }

        const id: string = this.idGenerator.generate();
        const competition: Competition = new Competition(id, name, type);
        await this.competitionDatabase.createCompetition(competition);
        const result: IIDOutputDTO = { id };
        
        return result;
    }
}

export default CompetitionBusiness;
