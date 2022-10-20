import CompetitionBusiness from "../business/CompetitionBusiness";
import { IIDInputDTO, IMessageOutputDTO } from "../model/Competition";
import CompetitionDatabaseMock from "./mocks/CompetitionDatabaseMock";
import IdGeneratorMock from "./mocks/IdGeneratorMock";

describe("finishCompetition", () => {
    const competitionBusiness: CompetitionBusiness = new CompetitionBusiness(
        new CompetitionDatabaseMock(),
        new IdGeneratorMock()
    );

    test("Should throw the error ID da competição não informado for an empty ID", async () => {
        expect.assertions(1);
        try {
            const input: IIDInputDTO = { id: "" };
            await competitionBusiness.finishCompetition(input);
        } catch (error: unknown) {
            if (error instanceof Error) {
                expect(error.message).toBe("ID da competição não informado");
            }
        }
    })

    test("Should throw the error Competição não encontrada for an invalid ID", async () => {
        expect.assertions(1);
        try {
            const competitionBusiness: CompetitionBusiness = new CompetitionBusiness(
                new CompetitionDatabaseMock(true),
                new IdGeneratorMock()
            );
            const input: IIDInputDTO = { id: "d98ecd2d-a77d-4004-8ec7-371a6d839229" };
            await competitionBusiness.finishCompetition(input);
        } catch (error: unknown) {
            if (error instanceof Error) {
                expect(error.message).toBe("Competição não encontrada");
            }
        }
    })

    test("Should throw the error Competição já finalizada for an finished competition", async () => {
        expect.assertions(1);
        try {
            const competitionBusiness: CompetitionBusiness = new CompetitionBusiness(
                new CompetitionDatabaseMock(false, false, false, true),
                new IdGeneratorMock()
            );
            const input: IIDInputDTO = { id: "d98ecd2d-a77d-4004-8ec7-371a6d839229" };
            await competitionBusiness.finishCompetition(input);
        } catch (error: unknown) {
            if (error instanceof Error) {
                expect(error.message).toBe("Competição já finalizada");
            }
        }
    })

    test("Should throw the error Competição não finalizada for none affected rows in database", async () => {
        expect.assertions(1);
        try {
            const competitionBusiness: CompetitionBusiness = new CompetitionBusiness(
                new CompetitionDatabaseMock(false, false, false, false, 1, 0),
                new IdGeneratorMock()
            );
            const input: IIDInputDTO = { id: "d98ecd2d-a77d-4004-8ec7-371a6d839229" };
            await competitionBusiness.finishCompetition(input);
        } catch (error: unknown) {
            if (error instanceof Error) {
                expect(error.message).toBe("Competição não finalizada");
            }
        }
    })
    
    test("Should return a successful message for correct input", async () => {
        const input: IIDInputDTO = { id: "d98ecd2d-a77d-4004-8ec7-371a6d839229" };
        const output: IMessageOutputDTO = await competitionBusiness.finishCompetition(input);
        const expectedOutput: IMessageOutputDTO = { message: "Competição finalizada com sucesso" };
        expect(output).toMatchObject(expectedOutput);
    })
});