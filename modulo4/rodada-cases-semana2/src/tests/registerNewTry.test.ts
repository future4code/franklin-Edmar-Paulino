import CompetitionBusiness from "../business/CompetitionBusiness";
import CompetitionDatabaseMock from "./mocks/CompetitionDatabaseMock";
import IdGeneratorMock from "./mocks/IdGeneratorMock";
import { IMessageOutputDTO, IRegisterNewTryInputDTO } from "../model/Competition";

describe("registerNewTry", () => {
    const competitionBusiness: CompetitionBusiness = new CompetitionBusiness(
        new CompetitionDatabaseMock(),
        new IdGeneratorMock()
    );
    
    test("Shoud throw the error ID do resultado não informado for empty ID", async () => {
        expect.assertions(1);
        try {
            const input: IRegisterNewTryInputDTO = {
                id: "",
                newResult: 100
            };
            await competitionBusiness.updateNumberOfTries(input);
        } catch (error: unknown) {
            if (error instanceof Error) {
                expect(error.message).toBe("ID do resultado não informado");
            }
        }
    })

    test("Shoud throw the error Parâmetro 'newValue' inválido! for wrong type for newValue", async () => {
        expect.assertions(1);
        try {
            const input: any = {
                id: "d98ecd2d-a77d-4004-8ec7-371a6d839229",
                newResult: "100"
            };
            await competitionBusiness.updateNumberOfTries(input);
        } catch (error: unknown) {
            if (error instanceof Error) {
                expect(error.message).toBe("Parâmetro 'newValue' inválido!");
            }
        }
    })

    test("Shoud throw the error ID do resultado não encontrado for invalid ID", async () => {
        expect.assertions(1);
        const competitionBusiness: CompetitionBusiness = new CompetitionBusiness(
            new CompetitionDatabaseMock(false, true),
            new IdGeneratorMock()
        );
        try {
            const input: any = {
                id: "d98ecd2d-a77d-4004-8ec7-371a6d839229",
                newResult: 100
            };
            await competitionBusiness.updateNumberOfTries(input);
        } catch (error: unknown) {
            if (error instanceof Error) {
                expect(error.message).toBe("ID do resultado não encontrado");
            }
        }
    })

    test("Shoud throw the error Não há tentativas restantes for 0 attempts remaining", async () => {
        expect.assertions(1);
        const competitionBusiness: CompetitionBusiness = new CompetitionBusiness(
            new CompetitionDatabaseMock(false, false, false, false, 0, 0),
            new IdGeneratorMock()
        );
        try {
            const input: any = {
                id: "d98ecd2d-a77d-4004-8ec7-371a6d839229",
                newResult: 100
            };
            await competitionBusiness.updateNumberOfTries(input);
        } catch (error: unknown) {
            if (error instanceof Error) {
                expect(error.message).toBe("Não há tentativas restantes");
            }
        }
    })
    
    test("Shoud throw the error O número de tentativas não foi atualizado for no rows affected", async () => {
        expect.assertions(1);
        const competitionBusiness: CompetitionBusiness = new CompetitionBusiness(
            new CompetitionDatabaseMock(false, false, false, false, 1, 0),
            new IdGeneratorMock()
        );
        try {
            const input: any = {
                id: "d98ecd2d-a77d-4004-8ec7-371a6d839229",
                newResult: 100
            };
            await competitionBusiness.updateNumberOfTries(input);
        } catch (error: unknown) {
            if (error instanceof Error) {
                expect(error.message).toBe("O número de tentativas não foi atualizado");
            }
        }
    })

    
    test("Shoud return the correct object for successful", async () => {
        const input: any = {
            id: "d98ecd2d-a77d-4004-8ec7-371a6d839229",
            newResult: 100
        };
        const result: IMessageOutputDTO = await competitionBusiness.updateNumberOfTries(input);
        const expectedObject: IMessageOutputDTO = { message: "Resultado atualizado com sucesso. Tentativas restantes 0" };
        expect(result).toMatchObject(expectedObject);
    })
});