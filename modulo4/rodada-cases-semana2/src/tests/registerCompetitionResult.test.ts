import CompetitionBusiness from "../business/CompetitionBusiness";
import { IIDOutputDTO, IRegisterCompetitionResultInputDTO } from "../model/Competition";
import CompetitionDatabaseMock from "./mocks/CompetitionDatabaseMock";
import IdGeneratorMock from "./mocks/IdGeneratorMock";

describe("registerCompetitionResult", () => {
    const competitionBusiness: CompetitionBusiness = new CompetitionBusiness(
        new CompetitionDatabaseMock(),
        new IdGeneratorMock()
    );
    
    test("Should throw the error ID da competição não informado for empty ID", async (): Promise<void> => {
        expect.assertions(1);
        try {
            const input: IRegisterCompetitionResultInputDTO = {
                competitionId: "",
                athlete: "Astro Dev",
                result: 100
            };
            await competitionBusiness.registerCompetitionResult(input);
        } catch (error: unknown) {
            if (error instanceof Error) {
                expect(error.message).toBe("ID da competição não informado");
            }
        }
    })

    test("Should throw the error Parâmetro 'athlete' inválido for empty athlete", async (): Promise<void> => {
        expect.assertions(1);
        try {
            const input: IRegisterCompetitionResultInputDTO = {
                competitionId: "d98ecd2d-a77d-4004-8ec7-371a6d839229",
                athlete: "",
                result: 100
            };
            await competitionBusiness.registerCompetitionResult(input);
        } catch (error: unknown) {
            if (error instanceof Error) {
                expect(error.message).toBe("Parâmetro 'athlete' inválido");
            }
        }
    })

    test("Should throw the error Parâmetro 'result' inválido for a string in parameter result", async (): Promise<void> => {
        expect.assertions(1);
        try {
            const input: any = {
                competitionId: "d98ecd2d-a77d-4004-8ec7-371a6d839229",
                athlete: "Astro Dev",
                result: "100"
            };
            await competitionBusiness.registerCompetitionResult(input);
        } catch (error: unknown) {
            if (error instanceof Error) {
                expect(error.message).toBe("Parâmetro 'result' inválido");
            }
        }
    })

    test("Should throw the error ID da competição não encontrado for an invalid ID", async (): Promise<void> => {
        const competitionBusiness: CompetitionBusiness = new CompetitionBusiness(
            new CompetitionDatabaseMock(true),
            new IdGeneratorMock()
        );
        expect.assertions(1);
        try {
            const input: any = {
                competitionId: "d98ecd2d-a77d-4004-8ec7-371a6d839229",
                athlete: "Astro Dev",
                result: 100
            };
            await competitionBusiness.registerCompetitionResult(input);
        } catch (error: unknown) {
            if (error instanceof Error) {
                expect(error.message).toBe("ID da competição não encontrado");
            }
        }
    })

    test("Should throw the error Competição já finalizada. Não é possível cadastrar o resultado for an finished competition", async (): Promise<void> => {
        const competitionBusiness: CompetitionBusiness = new CompetitionBusiness(
            new CompetitionDatabaseMock(false, false, false, true),
            new IdGeneratorMock()
        );
        expect.assertions(1);
        try {
            const input: any = {
                competitionId: "d98ecd2d-a77d-4004-8ec7-371a6d839229",
                athlete: "Astro Dev",
                result: 100
            };
            await competitionBusiness.registerCompetitionResult(input);
        } catch (error: unknown) {
            if (error instanceof Error) {
                expect(error.message).toBe("Competição já finalizada. Não é possível cadastrar o resultado");
            }
        }
    })

    test("Should return an object containing ID with corrects inputs", async (): Promise<void> => {
        const input: IRegisterCompetitionResultInputDTO = {
            competitionId: "d98ecd2d-a77d-4004-8ec7-371a6d839229",
            athlete: "Astro Dev",
            result: 100
        };
        const result: IIDOutputDTO = await competitionBusiness.registerCompetitionResult(input);
        expect(result).toMatchObject({ id: "d98ecd2d-a77d-4004-8ec7-371a6d839229" });
    })
});
