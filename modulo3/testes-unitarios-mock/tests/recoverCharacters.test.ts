import { Character } from "../src/Character";
import { recoverCharacters } from "../src/recoverCharacters";

describe("recoverCharacters test suit", (): void => {
    test("Should return a new array with 4 characters with life value 1500", (): void => {
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

        const result: Character[] = recoverCharacters(characters);
        
        expect(result).toHaveLength(4);
        result.forEach((character: Character) => {
            expect(character.life).toBe(1500);
        });
    });

    test("Should return a new array with 2 characters with life value 1500", (): void => {
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
            }
        ];

        const result: Character[] = recoverCharacters(characters);
        
        expect(result).toHaveLength(2);
        result.forEach((character: Character) => {
            expect(character.life).toBe(1500);
        });
    });

    test("Should throw a new error for a character with invalid attributes at postion 3 in the array", (): void => {
        expect.assertions(1);
        try {
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
                    life: -100,
                    strength: 300,
                    defense: 90
                }
            ];
    
            const result: Character[] = recoverCharacters(characters);
        } catch(error: unknown) {
            if (error instanceof Error) {
                expect(error.message).toBe("Inválid character at position 3");
            }
        }
    });

    test("Should throw a new error for an array with only one character", (): void => {
        expect.assertions(1);
        try {
            const characters: Character[] = [
                {
                    name: "Bulbasaur",
                    life: 150,
                    strength: 290,
                    defense: 110
                }
            ];
    
            const result: Character[] = recoverCharacters(characters);
        } catch(error: unknown) {
            if (error instanceof Error) {
                expect(error.message).toBe("Minimun of characters is 2");
            }
        }
    });
});
