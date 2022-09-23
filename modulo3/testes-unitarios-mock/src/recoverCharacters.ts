import { Character } from "./Character";
import { validateCharacter } from "./validateCharacter";

export function recoverCharacters(characters: Character[]): Character[] {
    if (characters.length < 2) {
        throw new Error("Minimun of characters is 2");
    }

    const recoveredCharacters: Character[] = characters.map((character: Character, index: number): Character => {
        if (!validateCharacter(character)) {
            throw new Error(`Inválid character at position ${index}`);
        }
        return { ...character, life: 1500 };
    });

    return recoveredCharacters;
}
