import { Character } from "../src/Character";
import { recoverCharacters } from "../src/recoverCharacters";

describe("recoverCharacters test suit", (): void => {
    test("Should return an array with all characters with life value 1500", (): void => {
        expect.assertions(4);
        const validator = jest.fn((character: Character) => true);
        const characters: Character[] = [
            {
                name: "Bulbasaur",
                life: 150,
                strength: 290,
                defense: 110
            },
            {
                name: "Charmander",
                life: 500,
                strength: 300,
                defense: 90
            },
            {
                name: "Pikachu",
                life: 300,
                strength: 290,
                defense: 110
            },
            {
                name: "Totodile",
                life: 100,
                strength: 300,
                defense: 90
            }
        ];

        const result: Character[] = recoverCharacters(characters, validator);
        
        result.forEach((character: Character) => {
            expect(character.life).toBe(1500);
        });
    });

    test("Should throw a new error for a character with invalid attributes", (): void => {
        expect.assertions(1);
        try {
            const validator = jest.fn((character: Character) => false);
            const characters: Character[] = [
                {
                    name: "Bulbasaur",
                    life: 150,
                    strength: 290,
                    defense: 110
                },
                {
                    name: "Charmander",
                    life: 500,
                    strength: 300,
                    defense: 90
                },
                {
                    name: "Pikachu",
                    life: 300,
                    strength: 290,
                    defense: 110
                },
                {
                    name: "Totodile",
                    life: 100,
                    strength: 300,
                    defense: 90
                }
            ];
    
            const result: Character[] = recoverCharacters(characters, validator);
        } catch(error: unknown) {
            if (error instanceof Error) {
                expect(error.message).toBe("Inválid character at position 0");
            }
        }
    });

    test("Should throw a new error for an array with only one character", (): void => {
        expect.assertions(1);
        try {
            const validator = jest.fn((character: Character) => true);
            const characters: Character[] = [
                {
                    name: "Bulbasaur",
                    life: 150,
                    strength: 290,
                    defense: 110
                }
            ];
    
            const result: Character[] = recoverCharacters(characters, validator);
        } catch(error: unknown) {
            if (error instanceof Error) {
                expect(error.message).toBe("Minimun of characters is 2");
            }
        }
    });
});