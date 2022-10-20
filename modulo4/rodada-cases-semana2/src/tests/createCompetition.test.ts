import CompetitionBusiness from "../business/CompetitionBusiness";
import { COMPETITION_TYPE, ICreateCompetitionInputDTO, IIDOutputDTO } from "../model/Competition";
import CompetitionDatabaseMock from "./mocks/CompetitionDatabaseMock";
import IdGeneratorMock from "./mocks/IdGeneratorMock";

describe("createCompetition", () => {
    const competitionBusiness: CompetitionBusiness = new CompetitionBusiness(
        new CompetitionDatabaseMock(),
        new IdGeneratorMock()
    );

    test("Should throw the error Parâmetro 'name' inválido for empty name", async () => {
        expect.assertions(1);
        try {
            const input: ICreateCompetitionInputDTO = {
                name: "",
                type: COMPETITION_TYPE.DART
            };
            await competitionBusiness.createCompetition(input);
        } catch (error: unknown) {
            if (error instanceof Error) {
                expect(error.message).toBe("Parâmetro 'name' inválido");
            }
        }
    })

    test("Should throw the error Parâmetro 'type' inválido for empty type", async () => {
        expect.assertions(1);
        try {
            const input: ICreateCompetitionInputDTO = {
                name: "New Competition",
                type: "" as COMPETITION_TYPE
            };
            await competitionBusiness.createCompetition(input);
        } catch (error: unknown) {
            if (error instanceof Error) {
                expect(error.message).toBe("Parâmetro 'type' inválido");
            }
        }
    })

    test("Should return an object containing ID with corrects inputs", async () => {
        const input: ICreateCompetitionInputDTO = {
            name: "New Competition",
            type: COMPETITION_TYPE.DART
        };
        const result: IIDOutputDTO = await competitionBusiness.createCompetition(input);
        expect(result).toMatchObject({ id: "d98ecd2d-a77d-4004-8ec7-371a6d839229" });
    })    
});