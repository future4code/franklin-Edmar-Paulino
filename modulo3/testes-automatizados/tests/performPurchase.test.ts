import { performPurchase } from "../src";
import { User } from "../src/User";

describe("Teste da função performPurchase que verifica se um usuário pode fazer uma compra ou não", (): void => {
    const user: User = { name: "Apolodev", balance: 100000 };

    test("Teste com um usuário com o saldo maior do que o valor de compra", (): void => {
        const result: User | undefined = performPurchase(user, 30000);

        expect(result).toEqual({ ...user, balance: 70000 } as User);
    });

    test("Teste com um usuário com saldo igual ao valor de compra", (): void => {
        const result: User | undefined = performPurchase(user, 100000);

        expect(result).toEqual({ ...user, balance: 0 } as User);
    });
    
    test("Teste com um usuário com o saldo menor do que o valor de compra", (): void => {
        const result: User | undefined = performPurchase(user, 200000);

        expect(result).not.toBeDefined();
    });
});