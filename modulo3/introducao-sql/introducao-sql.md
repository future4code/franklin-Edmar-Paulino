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

### a)
```sql
SELECT * FROM Actor WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000;
```
O comando acima exibirá todos os atores nos quais o nomes começarem com A ou com J, e o salário for maior que R$ 300.000,00.

### b)
```sql
SELECT * FROM Actor WHERE name NOT LIKE "A%" AND salary > 350000;
```

### c)
```sql
SELECT * FROM Actor WHERE name LIKE "%G%" OR name LIKE "%g%";
```

### d)
```sql
SELECT * FROM Actor WHERE (name LIKE "%a%" OR name LIKE "%A%" OR name LIKE "%g%" OR name LIKE "%G%") AND salary BETWEEN 350000 AND 900000; 
```

## Exercício 5

### a)
```sql
CREATE TABLE Movie (
  id INT PRIMARY KEY NOT NULL,
  title VARCHAR(255) UNIQUE NOT NULL,
  synopsis TEXT NOT NULL,
  release_date DATE NOT NULL,
  rating INT NOT NULL
);
```

### b)
```sql
INSERT INTO Movie (id, title, synopsis, release_date, rating)
VALUES (
	1,
    "Se Eu Fosse Você",
    "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
    "2006/01/06",
    7
);
```

### c)
```sql
INSERT INTO Movie (id, title, synopsis, release_date, rating)
VALUES (
	2,
  "Doce de mãe",
  "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
  "2012/12/27",
  10
);
```

### d)
```sql
INSERT INTO Movie (id, title, synopsis, release_date, rating)
VALUES (
  3,
  "Dona Flor e Seus Dois Maridos",
  "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
  "2017/11/02",
  8
);
```

### e)
```sql
INSERT INTO Movie (id, title, synopsis, release_date, rating)
VALUES (
  4,
  "O Auto da Compadecida",
  "As aventuras de João Grilo e Chicó, dois nordestinos pobres que vivem de golpes para sobreviver. Eles estão sempre enganando o povo de um pequeno vilarejo, inclusive o temido cangaceiro Severino de Aracaju, que os persegue pela região.",
  "2000/09/10",
  10
);
```

## Exercício 6

### a)
```sql
SELECT id, title, rating FROM Movie WHERE id = 4;
```

### b)
```sql
SELECT * FROM Movie WHERE title = "O Auto da Compadecida";
```

### c)
```sql
SELECT id, title, synopsis FROM Movie WHERE rating >= 7;
```

## Exercício 7

### a)
```sql
SELECT * FROM Movie WHERE title LIKE "%vida%";
```

### b)
```sql
SELECT * FROM Movie WHERE title LIKE "%vida%" OR synopsis LIKE "%vida%";
```

### c)
```sql
SELECT * FROM Movie WHERE release_date < CURDATE();
```

### d)
```sql
SELECT * FROM Movie WHERE release_date < CURDATE() AND (title LIKE "%vida%" OR synopsis LIKE "%vida%") AND rating > 7;
```
