import { User } from "./User";

export function performPurchase(user: User, value: number): User | undefined {
    if (user.balance >= value) {
        const newUser: User = {
            name: user.name,
            balance: user.balance - value
        };
        return newUser;
    }
    return undefined;
}