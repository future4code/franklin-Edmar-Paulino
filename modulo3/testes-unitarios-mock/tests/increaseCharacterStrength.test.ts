import { Character } from "../src/Character";
import { increaseCharacterStrength } from "../src/increaseCharacterStrength";

describe("increaseCharacterStrength test suit", (): void => {
    test("Should throw a new error for an inválid character", (): void => {
        expect.assertions(1);
        try {
            const character: Character = {
                name: "Bulbasaur",
                life: 0,
                strength: 100,
                defense: 100
            };
            const newStrenght: number = 100;
    
            increaseCharacterStrength(character, newStrenght);
        } catch(error: unknown) {
            if (error instanceof Error) {
                expect(error.message).toBe("Invalid character");
            }
        }
    });
    
    test("Should throw a new error for newStrenght equal current character strength", (): void => {
        expect.assertions(1);
        try {
            const character: Character = {
                name: "Bulbasaur",
                life: 1500,
                strength: 100,
                defense: 100
            };
            const newStrenght: number = 100;
            
            increaseCharacterStrength(character, newStrenght);
        } catch(error: unknown) {
            if (error instanceof Error) {
                expect(error.message).toBe("Invalid new character strength");
            }
        }
    });
    
    test("Should throw a new error for newStrenght less than current character strength", (): void => {
        expect.assertions(1);
        try {
            const character: Character = {
                name: "Bulbasaur",
                life: 1500,
                strength: 100,
                defense: 100
            };
            const newStrenght: number = 90;
    
            increaseCharacterStrength(character, newStrenght);
        } catch(error: unknown) {
            if (error instanceof Error) {
                expect(error.message).toBe("Invalid new character strength");
            }
        }
    });
    
    test("Should change the current character strength to the newStrength value", (): void => {
        const character: Character = {
            name: "Bulbasaur",
            life: 1500,
            strength: 100,
            defense: 100
        };
        const newStrenght: number = 110;

        increaseCharacterStrength(character, newStrenght);
        
        expect(character.strength).toBe(newStrenght);
    });
});
