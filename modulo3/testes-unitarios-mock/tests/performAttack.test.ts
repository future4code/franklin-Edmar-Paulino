import { Character } from "../src/Character";
import { performAttack } from "../src/performAttack";

describe("performAttack test suit", (): void => {
    test("Success output with mocked function passed as parameter", (): void => {
        const validator = jest.fn((character: Character) => true);
        const bulbasaur: Character = {
            name: "Bulbasaur",
            life: 1500,
            strength: 290,
            defense: 110
        }
        const charmander: Character = {
            name: "Charmander",
            life: 1500,
            strength: 300,
            defense: 90
        }
        
        performAttack(bulbasaur, charmander, validator);
        expect(charmander.life).toBe(1300);
        expect(validator).toHaveBeenCalled();
        expect(validator).toHaveBeenCalledTimes(2);
        expect(validator).toHaveReturnedTimes(2);
    });
    
    test("Throw error with mocked function passed as parameter", (): void => {
        expect.assertions(4);
        const validator = jest.fn((character: Character) => false);
        try {
            const bulbasaur: Character = {
                name: "Bulbasaur",
                life: 1500,
                strength: 120,
                defense: 110
            }
            const charmander: Character = {
                name: "Charmander",
                life: 1500,
                strength: 130,
                defense: 90
            }
            
            performAttack(bulbasaur, charmander, validator);
        } catch(error: unknown) {
            if (error instanceof Error) {
                expect(error.message).toBe("Attacker character is not valid!")
                expect(validator).toHaveBeenCalled();
                expect(validator).toHaveBeenCalledTimes(1);
                expect(validator).toHaveReturnedTimes(1);
            }
        }
    });

    test("Should not change life for attacker with strength equal defender defense", (): void => {
        const validator = jest.fn((character: Character) => true);
        const bulbasaur: Character = {
            name: "Bulbasaur",
            life: 1500,
            strength: 200,
            defense: 110
        }
        const charmander: Character = {
            name: "Charmander",
            life: 1500,
            strength: 300,
            defense: 200
        }

        performAttack(bulbasaur, charmander, validator);
        expect(charmander.life).toBe(1500);
    });

    test("Should not change life for attacker with strength less than defender defense", (): void => {
        const validator = jest.fn((character: Character) => true);
        const bulbasaur: Character = {
            name: "Bulbasaur",
            life: 1500,
            strength: 200,
            defense: 110
        }
        const charmander: Character = {
            name: "Charmander",
            life: 1500,
            strength: 300,
            defense: 300
        }

        performAttack(bulbasaur, charmander, validator);
        expect(charmander.life).toBe(1500);
    });

    test("Should change life to 0 for attacker with strength greater than defender life plus defense", (): void => {
        const validator = jest.fn((character: Character) => true);
        const bulbasaur: Character = {
            name: "Bulbasaur",
            life: 1500,
            strength: 2000,
            defense: 110
        }
        const charmander: Character = {
            name: "Charmander",
            life: 1500,
            strength: 300,
            defense: 300
        }

        performAttack(bulbasaur, charmander, validator);
        expect(charmander.life).toBe(0);
    });

    test("Should change life to 0 for attacker with strength equal defender life plus defense", (): void => {
        const validator = jest.fn((character: Character) => true);
        const bulbasaur: Character = {
            name: "Bulbasaur",
            life: 1500,
            strength: 2000,
            defense: 110
        }
        const charmander: Character = {
            name: "Charmander",
            life: 1500,
            strength: 300,
            defense: 500
        }

        performAttack(bulbasaur, charmander, validator);
        expect(charmander.life).toBe(0);
    });
});
