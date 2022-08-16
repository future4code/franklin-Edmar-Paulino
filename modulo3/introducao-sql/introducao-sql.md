# introducao-sql

## Exercício 1

### a)
O comando:
```sql
    CREATE TABLE Actor (
        id VARCHAR(255) PRIMARY KEY,
        name VARCHAR (255) NOT NULL,
        salary FLOAT NOT NULL,
        birth_date DATE NOT NULL,
        gender VARCHAR(6) NOT NULL
    );
```
cria um nova tabela com o nome **Actor**, contendo as colunas *id*, *name*, *salary*, *birth_date* e *gender*.
Cada coluna deve possuir um tipo (INT, FLOAT, VARCHAR, ...) e caso tenha, as restrições (NOT NULL, PRIMARY KEY, UNIQUE, ...).

`id VARCHAR(255) PRIMARY KEY` 
- VARCHAR(255): String que poderá conter até 255 caracteres.
- PRIMARY KEY: Esse campo será utilizado como identificador único de cada item da tabela, que poderá ser utilizado para fazer relacionamento entre tabelas, esse valor não pode se repetir e não pode ser nulo.

`name VARCHAR (255) NOT NULL`
- VARCHAR(255): String que poderá conter até 255 caracteres.
- NOT NULL: Esse campo não poderá ficar vazio, nulo.

`salary FLOAT NOT NULL`
- FLOAT: Número decimal, não inteiro, com casas decimais.
- NOT NULL: Esse campo não poderá ficar vazio, nulo.

`birth_date DATE NOT NULL`
- DATE: Data.
- NOT NULL: Esse campo não poderá ficar vazio, nulo.

`gender VARCHAR(6) NOT NULL`
- VARCHAR(6): String que poderá conter até 6 caracteres.
- NOT NULL: Esse campo não poderá ficar vazio, nulo.

### b)
O comando `SHOW DATABASES` lista todos os bancos de dados cadastrados.

O comando `SHOW TABLES` lista todas as tabelas do banco de dados selecionado.

### c)
O comando `DESCRIBE Actor` descreve os campos da tabela **Actor**, como por exemplo: nome do campo, tipo do campo, se o campo é nulo, se é primary ou foreign key. 

## Exercício 2

### a)
```sql
    INSERT INTO Actor (id, name, salary, birth_date, gender)
    VALUES(
        "002",
        "Glória Pires",
        12000000,
        "1963-08-23",
        "female"
    );
```
### b)
O erro `Error Code: 1062. Duplicate entry '002' for key 'PRIMARY'` ocorre pois o valor do id é unico e não pode se repetir por ser uma chave primária.

### c)
```sql
INSERT INTO Actor (id, name, salary)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
```
O erro `Error Code: 1136. Column count doesn't match value count at row 1` ocorre porque a quantidade de valores informados é maior que a quantidade de colunas correspondentes.
Resposta correta:
```sql
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
```

### d)
```sql
INSERT INTO Actor (id, salary, birth_date, gender)
VALUES(
  "004",
  400000,
  "1949-04-18", 
  "male"
);
```
O erro `Error Code: 1364. Field 'name' doesn't have a default value` ocorre porque coluna name não foi informada, e como ela não possui um valor padrão para preenchimento caso não receba valor algum.
```sql
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  "Antônio Fagundes",
  400000,
  "1949-04-18", 
  "male"
);
```

### e)
```sql
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  1979-03-26, 
  "female"
);
```
O error `Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1` ocorre pois passamos a data sem aspas, e então ela é entendida como uma operação matemática, e é tentado atribuir ao campo data o resultado dessa operação.
```sql
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);
```

### f)
```sql
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "006", 
  "Reynaldo Gianecchini",
  2000000,
  "1972-11-12", 
  "male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "007", 
  "Alessandra Negrini",
  2000000,
  "1970-08-29", 
  "female"
);
```

## Exercício 3

### a)
```sql
SELECT * FROM Actor WHERE gender = "female";
```

### b)
```sql
SELECT salary FROM Actor WHERE name = "Tony Ramos";
```

### c)
```sql
SELECT * FROM Actor WHERE gender = "invalid";
```

### d)
```sql
SELECT id, name, salary FROM Actor WHERE salary <= 500000;
```

### e)
```sql
SELECT id, nome from Actor WHERE id = "002";
```
O erro `Error Code: 1054. Unknown column 'nome' in 'field list'` occore porque não existe nenhuma coluna chamda nome, e sim name.
```sql
SELECT id, name from Actor WHERE id = "002";
```

## Exercício 4

## Exercício 5

## Exercício 6

## Exercício 7