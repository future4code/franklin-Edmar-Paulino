import { Character } from "../src/Character";
import { decreaseCharacterDefense } from "../src/decreaseCharacterDefense";

describe("decreaseCharacterDefense test suit", (): void => {
    test("Should throw a new error for an invalid character", (): void => {
        expect.assertions(1);
        try {
            const character: Character = {
                name: "Bulbasaur",
                life: 0,
                strength: 100,
                defense: 100
            };
            const newDefense: number = 100;

            decreaseCharacterDefense(character, newDefense);
        } catch(error: unknown) {
            if (error instanceof Error) {
                expect(error.message).toBe("Invalid character");
            }
        }
    });

    test("Should throw a new error for newDefense equal to current character defense", (): void => {
        expect.assertions(1);
        try {
            const character: Character = {
                name: "Bulbasaur",
                life: 1500,
                strength: 100,
                defense: 100
            };
            const newDefense: number = 100;

            decreaseCharacterDefense(character, newDefense);
        } catch(error: unknown) {
            if (error instanceof Error) {
                expect(error.message).toBe("Invalid new character defense");
            }
        }
    });

    test("Should throw a new error for newDefense greater than current character defense", (): void => {
        expect.assertions(1);
        try {
            const character: Character = {
                name: "Bulbasaur",
                life: 1500,
                strength: 100,
                defense: 100
            };
            const newDefense: number = 110;

            decreaseCharacterDefense(character, newDefense);
        } catch(error: unknown) {
            if (error instanceof Error) {
                expect(error.message).toBe("Invalid new character defense");
            }
        }
    });

    test("Should change the character defense to the newDefense value", (): void => {
        const character: Character = {
            name: "Bulbasaur",
            life: 1500,
            strength: 100,
            defense: 100
        };
        const newDefense: number = 90;

        decreaseCharacterDefense(character, newDefense);
        
        expect(character.defense).toBe(newDefense);
    });
});
