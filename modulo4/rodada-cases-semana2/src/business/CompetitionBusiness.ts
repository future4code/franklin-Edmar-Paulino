import { statusCode } from "../controller/CompetitionController";
import CompetitionDatabase from "../database/CompetitionDatabase";
import IdGenerator from "../services/IdGenerator";
import {
    Competition,
    COMPETITION_TYPE,
    ICreateCompetitionInputDTO,
    IIDOutputDTO,
    IRegisterCompetitionResultInputDTO,
    CompetitionResult,
    ICompetitionDB,
    IIDInputDTO,
    IMessageOutputDTO,
    ICompetitionResultDB,
    IRegisterNewTryInputDTO,
    IRankingOutputDTO,
    IRanking
} from "../model/Competition";

class CompetitionBusiness {
    constructor(
        private competitionDatabase: CompetitionDatabase,
        private idGenerator: IdGenerator
    ){}

    public createCompetition = async (input: ICreateCompetitionInputDTO): Promise<IIDOutputDTO> => {
        const { name, type } = input;

        if (!name || typeof name !== "string") {
            statusCode.code = 400;
            throw new Error("Parâmetro 'name' inválido");
        }
        
        if (!type || typeof type !== "string" || (type !== COMPETITION_TYPE.HUNDRED_DASH && type !== COMPETITION_TYPE.DART)) {
            statusCode.code = 400;
            throw new Error("Parâmetro 'type' inválido")
        }

        const id: string = this.idGenerator.generate();
        const competition: Competition = new Competition(id, name, type);
        await this.competitionDatabase.createCompetition(competition);
        const output: IIDOutputDTO = { id };
        
        return output;
    };

    public registerCompetitionResult = async (input: IRegisterCompetitionResultInputDTO): Promise<IIDOutputDTO> => {
        const { competitionId, athlete, result } = input;

        if (!competitionId || typeof competitionId !== "string") {
            statusCode.code = 400;
            throw new Error("ID da competição não informado");
        }

        if (!athlete || typeof athlete !== "string") {
            statusCode.code = 400;
            throw new Error("Parâmetro 'athlete' inválido");
        }

        if (!result || typeof result !== "number") {
            statusCode.code = 400;
            throw new Error("Parâmetro 'result' inválido");
        }

        const competitionDB: ICompetitionDB = await this.competitionDatabase.getCompetitionById(competitionId);

        if (!competitionDB) {
            statusCode.code = 404;
            throw new Error("ID da competição não encontrado");
        }

        if (competitionDB.finished) {
            statusCode.code = 400;
            throw new Error("Competição já finalizada. Não é possível cadastrar o resultado");
        }

        const id: string = this.idGenerator.generate();
        const tries: number = competitionDB.type === COMPETITION_TYPE.DART ? 2 : 0;
        const competitionResult: CompetitionResult = new CompetitionResult(id, competitionId, athlete, result, tries);
        await this.competitionDatabase.createCompetitionResult(competitionResult);

        const output: IIDOutputDTO = { id };

        return output;
    };

    public updateNumberOfTries = async (input: IRegisterNewTryInputDTO): Promise<IMessageOutputDTO> => {
        const { id, newResult } = input;

        if (!id || typeof id !== "string") {
            statusCode.code = 400;
            throw new Error("ID do resultado não informado");
        }

        if (!newResult || typeof newResult !== "number") {
            statusCode.code = 400;
            throw new Error("Parâmetro 'newValue' inválido!");
        }

        const competitionResultDB: ICompetitionResultDB = await this.competitionDatabase.getCompetitionResultById(id);

        if (!competitionResultDB) {
            statusCode.code = 404;
            throw new Error("ID do resultado não encontrado");
        }

        if (competitionResultDB.tries === 0) {
            statusCode.code = 400;
            throw new Error("Não há tentativas restantes");
        }

        const competitionResult: CompetitionResult = new CompetitionResult(
            id,
            competitionResultDB.competition_id,
            competitionResultDB.athlete,
            newResult > competitionResultDB.result ? newResult : competitionResultDB.result,
            competitionResultDB.tries - 1
        );

        const affectedRows: number = await this.competitionDatabase.updateCompetitionResult(competitionResult);

        if (affectedRows === 0) {
            statusCode.code = 400;
            throw new Error("O número de tentativas não foi atualizado");
        }

        const output: IMessageOutputDTO = { message: `Resultado atualizado com sucesso. Tentativas restantes ${competitionResult.getTries()}` };

        return output;
    };

    public finishCompetition = async (input: IIDInputDTO): Promise<IMessageOutputDTO> => {
        const { id } = input;

        if (!id || typeof id !== "string") {
            statusCode.code = 400;
            throw new Error("ID da competição não informado");
        }

        const competitionDB: ICompetitionDB = await this.competitionDatabase.getCompetitionById(id);

        if (!competitionDB) {
            statusCode.code = 404;
            throw new Error("Competição não encontrada");
        }

        if (competitionDB.finished) {
            statusCode.code = 400;
            throw new Error("Competição já finalizada");
        }

        const competition: Competition = new Competition(
            competitionDB.id,
            competitionDB.name,
            competitionDB.type,
            true
        );
        const affectedRows: number = await this.competitionDatabase.updateCompetition(competition);

        if (affectedRows === 0) {
            statusCode.code = 400;
            throw new Error("Competição não finalizada");
        }

        const output: IMessageOutputDTO = { message: "Competição finalizada com sucesso" };

        return output;
    };

    public getCompetitionRanking = async (input: IIDInputDTO): Promise<IRankingOutputDTO> => {
        const { id } = input;

        if (!id || typeof id !== "string") {
            statusCode.code = 400;
            throw new Error("ID da competição não informado");
        }

        const competitionDB: ICompetitionDB = await this.competitionDatabase.getCompetitionById(id);

        if (!competitionDB) {
            statusCode.code = 404;
            throw new Error("Competição não encontrada");
        }

        const direction: string = competitionDB.type === COMPETITION_TYPE.HUNDRED_DASH ? "ASC" : "DESC";
        const ranking: IRanking[] = await this.competitionDatabase.getCompetitionResultsOrdered(id, direction);

        if (!ranking) {
            statusCode.code = 400;
            throw new Error("Não foi possível carregar o ranking");
        }

        const output: IRankingOutputDTO = {
            name: competitionDB.name,
            finished: Boolean(competitionDB.finished),
            ranking
        };

        return output;
    };
}

export default CompetitionBusiness;
