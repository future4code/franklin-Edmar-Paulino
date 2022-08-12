import express, { Request, Response } from "express";
import cors from "cors";

const app = express();

// configurações
app.use(cors());
app.use(express.json());


// tipos
type Transaction = {
    value: number,
    date: string,
    description: string
}

type Account = {
    name: string,
    cpf: string,
    birth: string,
    balance: number,
    transactions: Transaction[]
}


// variáveis
const users: Account[] = [
    {
        name: "Will Smith",
        cpf: "12312312312",
        birth: "25/09/1968",
        balance: 12598500.00,
        transactions: [
            {
                value: 12598500.00,
                date: "30/10/2021",
                description: "Depósito bancário"
            },
            {
                value: 5000000.00,
                date: "01/04/2022",
                description: "Depósito bancário"
            },
            {
                value: 5000000.00,
                date: "02/04/2022",
                description: "Pagamento de conta"
            },
        ]
    },
    {
        name: "Eddie Murphy",
        cpf: "32132132132",
        birth: "03/04/1961",
        balance: 10900038.57,
        transactions: [
            {
                value: 11900038.57,
                date: "12/12/2021",
                description: "Depósito bancário"
            },
            {
                value: 1000000.00,
                date: "25/07/2022",
                description: "Pagamento de conta"
            },
        ]
    },
    {
        name: "Chris Rock",
        cpf: "23423423423",
        birth: "07/02/1965",
        balance: 11934517.98,
        transactions: [
            {
                value: 11934517.98,
                date: "04/02/2022",
                description: "Depósito bancário"
            },
        ]
    },
];


// endpoints
app.get("/users", (req: Request, res: Response) => {
    res.status(200).send(users);
});

// criar conta
app.post("/users", (req: Request, res: Response) => {
    const { name, cpf, birth } = req.body;
    if (name && cpf && birth) {
        if (isOfAge(birth)) {
            if (!users.find((account: Account) => account.cpf === cpf)) {
                const newAccount: Account = createNewAccount(name, cpf, birth);
                users.push(newAccount);
                res.status(201).send({ message: "Cliente cadastrado com sucesso." });
            } else {
                res.status(400).send({ message: "Cliente já existente." });
            }
        } else {
            res.status(400).send({ message: "Somente pessoas maiores de 18 anos podems efetuar abertura de contas." });
        }
    } else {
        res.status(400).send({ message: "É necessário informar o nome, cpf e data de nascimento para efetuar a requisição." });
    }
});

// pegar saldo
app.get("/balance", (req: Request, res: Response) => {
    const { name, cpf } = req.body;
    if (name && cpf) {
        const account = users.find((account: Account) => account.name === name && account.cpf === cpf);
        if (account) {
            res.status(200).send({ balance: account.balance });
        } else {
            res.status(404).send({ message: "Cliente não encontrado no sistema" })
        }
    } else {
        res.status(400).send({ message: "É necessário informar o nome e cpf do cliente para realizar a requisição."});
    }
});

// adicionar saldo
// app.put("/balance", (req: Request, res: Response) => {

// });

// pagar conta
// app.put("/pay", (req: Request, res: Response) => {

// });

// transferência interna
// app.put("/transfer", (req: Request, res: Response) => {

// });


// inicialização
app.listen("3003", () => console.log("API is running..."));

// funções
function isOfAge(birth: string): boolean {
    const [ day, month, year ] = birth.split("/");
    const date: Date = new Date();
    if (date.getFullYear() - Number(year) > 18)
        return true;
    if (date.getFullYear() - Number(year) === 18 && (date.getMonth() + 1) > Number(month))
        return true;
    if (date.getFullYear() - Number(year) === 18 && (date.getMonth() + 1) === Number(month) && date.getDate() >= Number(day))
        return true;
    return false;
}

function createNewAccount(name: string, cpf: string, birth: string): Account {
    const transactions: Transaction[] = [];
    const newAccount: Account = { name, cpf, birth, balance: 0, transactions};
    return newAccount;
}