# Introdução autenticação

## Exercícios propostos

### Exercício 1

a) Mais versátil pois aumenta o números de caracteres possíveis e permite que comece com 0 sem que este seja ignora. Sim, muito melhor.

b) 
```ts
import { v4 } from "uuid";

class IdGenerator {
    public generateId(): string {
        return v4();
    }
}

export default IdGenerator;
```

### Exercício 2

a) Primeiro é realizada a conexão com o banco de dados, após é declarado uma função que fará uma query no banco de dados para inserir os dados fornecidos.

b)
```sql
CREATE TABLE User (
	id VARCHAR(255) PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);
```

c)
```ts
private userTableName: string = "User";

public async createUser(id: string, email: string, password: string): Promise<void> {
    await connection(this.userTableName)
        .insert({ id, email, password })
        .into(this.userTableName);
}
```

### Exercício 3

a) Faz com que o valor seja interpretado como string uma vez que ele pode ser string ou any. Porque o payload do JWT requere que o valor seja uma string.

b) 
```ts
import * as jwt from "jsonwebtoken";
import { authenticationData } from "../types";
import dotenv from "dotenv";

dotenv.config();

class Authenticator {
    private expiresIn: string = "1min";

    public generateToken(payload: authenticationData): string {
        const token: string = jwt.sign(
            payload,
            process.env.JWT_KEY as string,
            { expiresIn: this.expiresIn }
        );

        return token;
    }
}

export default Authenticator;
```

### Exercício 4

a)
```ts
app.post("/user/signup", signup);
```

b)
```ts
if (!email || email.indexOf('@') === -1) {
    res.statusCode = 400;
    throw new Error("Invalid email");
}
```

c)
```ts
if (!password || password.length < 6) {
    res.statusCode = 400;
    throw new Error("Invalid password");
}
```

### Exercício 5

a)
```ts
public async getUserByEmail(email: string): Promise<any> {
    const [result] = await connection(this.userTableName)
        .select("*")
        .from(this.userTableName)
        .where({ email });

    return result;
}
```

### Exercício 6

a)
```ts
app.post("/user/login", login);
```

b)
```ts
if (!email || email.indexOf('@') === -1) {
    res.statusCode = 400;
    throw new Error("Invalid email");
}
```

### Exercício 7

a) Ela faz com que o retorno da função seja interpretado como sendo do tipo any. Porque a função pode retornar objetos de vários tipos.

b) 
```ts
public getTokenData(token: string): AuthenticationData {
    const payload: any = jwt.verify(token, process.env.JWT_KEY as string) as any;
    const tokenData: AuthenticationData = { id: payload.id };

    return tokenData;
}
```

### Exercício 8

a)
```ts
public async getUserById(id: string): Promise<any> {
    const [result] = await connection(this.userTableName)
        .select("email")
        .from(this.userTableName)
        .where({ id });

    return result;
}
```

b)
```ts
app.get("/user/profile", profile);
```
