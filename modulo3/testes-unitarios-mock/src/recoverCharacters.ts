import { Character } from "./Character";

export function recoverCharacters(characters: Character[], validator: (character: Character) => boolean): Character[] {
    if (characters.length < 2) {
        throw new Error("Minimun of characters is 2");
    }

    characters.forEach((character: Character, index: number): void => {
        if (!validator(character)) {
            throw new Error(`Inválid character at position ${index}`);
        }
        character.life = 1500;
    });

    return characters;
}
