import { Character } from "./Character";
import { validateCharacter } from "./validateCharacter";

export function increaseCharacterStrength(character: Character, newStrength: number): void {
    if (!validateCharacter(character)) {
        throw new Error("Invalid character");
    }

    if (character.strength >= newStrength) {
        throw new Error("Invalid new character strength");
    }

    character.strength = newStrength;
}
