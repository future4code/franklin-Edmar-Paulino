import { Character } from "./Character";

export function performAttack(attacker: Character, defender: Character, validator: (character: Character) => boolean) {
    if (!validator(attacker)) {
        throw new Error("Attacker character is not valid!");
    }

    if (!validator(defender)) {
        throw new Error("Defender character is not valid!");
    }

    const hit: number = attacker.strength - defender.defense;

    if (hit > 0) {
        defender.life -= hit;
        if (defender.life < 0) {
            defender.life = 0;
        }
    }
}
