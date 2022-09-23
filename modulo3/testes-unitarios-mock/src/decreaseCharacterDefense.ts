import { Character } from "./Character";
import { validateCharacter } from "./validateCharacter";

export function decreaseCharacterDefense(character: Character, newDefense: number): void {
    if (!validateCharacter(character)) {
        throw new Error("Invalid character");
    }

    if (newDefense >= character.defense) {
        throw new Error("Invalid new character defense");
    }

    character.defense = newDefense;
}
