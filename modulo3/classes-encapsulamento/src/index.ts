// a) Para que serve o construtor dentro de uma classe e como fazemos para chamá-lo?
// R - O construtor server para construir o objeto daquela classe, para chama-lo,
//     ou melhor instancia-lo utilizamos a palavra reservar "new"

// b) Copie o código abaixo para o seu exercício de hoje;
//    crie uma instância dessa classe (dê o nome, cpf e idade que você quiser).
//    Quantas vezes a mensagem "Chamando o construtor da classe User" foi impressa no terminal?
// R - 1 vez

// c) Como conseguimos ter acesso às propriedades privadas de uma classe?
// R - Através dos métodos Getters e Setters

// type Transaction = {
//     description:string,
//     value:number,
//     date:string
// };

class Transaction {
    private description:string;
    private value:number;
    private date:string;

    constructor(description:string, value:number, date:string) {
        this.description = description;
        this.value = value;
        this.date = date;
    }

    public getDescription():string {
        return this.description;
    }
    
    public getValue():number {
        return this.value;
    }

    public getDate():string {
        return this.date;
    }
}

class UserAccount {
    private cpf:string;
    private name:string;
    private age:number;
    private balance:number = 0;
    private transactions:Transaction[] = [];

    constructor(cpf:string, name:string, age:number) {
        console.log("Chamando o construtor da classe UserAccount");
        this.cpf = cpf;
        this.name = name;
        this.age = age;
    }

    public addTransaction(newTransaction:Transaction):void {
        this.transactions.push(newTransaction);
    }

    public getCpf():string {
        return this.cpf;
    }

    public getName():string {
        return this.name;
    }

    public getAge():number {
        return this.age;
    }

    public getBalance():number {
        return this.balance;
    }

    public getTransactions():Transaction[] {
        return [...this.transactions];
    }
}

class Bank {
    private accounts:UserAccount[] = [];

    public getAccounts():UserAccount[] {
        return [...this.accounts];
    }

    public addAccount(newAccount:UserAccount):void {
        this.accounts.push(newAccount);
    }

    public removeAccount(cpf:string):void {
        this.accounts = this.accounts.filter((account:UserAccount):boolean => account.getCpf() !== cpf);
    }
}

const client:UserAccount = new UserAccount("111", "Astro Dev", 20);
const transaction:Transaction = new Transaction("Depósito", 1000, "29/08/2022");
client.addTransaction(transaction);
const bank:Bank = new Bank();
bank.addAccount(client);
