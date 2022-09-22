import { Character } from "../src/Character";
import { validateCharacter } from "../src/validateCharacter";

describe("validateCharacter test suit", (): void => {
    test("Should return false for empty string in parameter name", (): void => {
        const character: Character = {
            name: "",
            life: 1500,
            defense: 80,
            strength: 100
        }

        const result: boolean = validateCharacter(character);

        expect(result).toBe(false);
    });

    test("Should return false for parameter life with value 0", (): void => {
        const character: Character = {
            name: "Naruto",
            life: 0,
            defense: 80,
            strength: 100
        }

        const result: boolean = validateCharacter(character);

        expect(result).toBe(false);
    });

    test("Should return false for parameter strength with value 0", (): void => {
        const character: Character = {
            name: "Naruto",
            life: 1500,
            defense: 80,
            strength: 0
        }

        const result: boolean = validateCharacter(character);

        expect(result).toBe(false);
    });

    test("Should return false for parameter defense with value 0", (): void => {
        const character: Character = {
            name: "Naruto",
            life: 1500,
            defense: 0,
            strength: 100
        }

        const result: boolean = validateCharacter(character);

        expect(result).toBe(false);
    });

    test("Should return false for parameter life with negative value", (): void => {
        const character: Character = {
            name: "Naruto",
            life: -1500,
            defense: 80,
            strength: 100
        }

        const result: boolean = validateCharacter(character);

        expect(result).toBe(false);
     });

    test("Should return true for all parameters with valid values", (): void => {
        const character: Character = {
            name: "Naruto",
            life: 1500,
            defense: 80,
            strength: 100
        }

        const result: boolean = validateCharacter(character);

        expect(result).toBe(true);
     });
});