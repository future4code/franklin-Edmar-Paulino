# relacoes-sql

## Exercícios propostos

### Exercício 1

a)
Chave estrangeira é a chave que faz referência com outra tabela, na qual a tabela atual se relaciona.

b)
```sql
CREATE TABLE Rating (
	id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL, 
    rate FLOAT NOT NULL,
    movie_id INT,
    FOREIGN KEY (movie_id) REFERENCES Movie(id)
);

INSERT INTO Rating (id, comment, rate, movie_id)
VALUES ("001", "Que filme maravilhoso", 10, 2),
("002", "Muito bom", 8, 3),
("003", "Uma obra prima do senhor", 10, 4);
```

c)
```
Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`DB_NAME`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))
```
Este erro ocorreu porque a chave estrangeira não foi encontrada na tabela referenciada.

d)
```sql
ALTER TABLE Movie DROP COLUMN rating;
```

e)
```
Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`DB_NAME`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))
```
Este erro ocorreu porque tentando deletar um item da tabela pai antes de deletar elementos que referenciam este intem na tabela filha.

### Exercício 2

a)
```sql
CREATE TABLE MovieCast (
	movie_id INT,
    actor_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);
```
Cria uma tabela com dois campos sendo os dois campos chaves estrangeiras que referenciam outras tabelas.

b)
```sql
INSERT INTO MovieCast (movie_id, actor_id)
VALUE (2, "001"),
(2, "004"),
(3, "005"),
(3, "007"),
(4, "001"),
(4, "004");
```

c)
```
Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`DB_NAME`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))
```
Este erro ocorreu porque a chave estrangeira não foi encontrada na tabela referenciada.

d)
```
Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`DB_NAME`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))
```
Este erro ocorreu porque tentando deletar um item da tabela pai antes de deletar elementos que referenciam este intem na tabela filha.

### Exercício 3

a)
```sql
SELECT * FROM Movie 
INNER JOIN Rating ON Movie.id = Rating.movie_id;
```
O operador ON explicita as colunas onde a referência ocorre nas tabelas relacionadas.

b)
```sql
SELECT Movie.title, Movie.id, Rating.rate FROM Movie JOIN Rating ON Movie.id = Rating.movie_id;
```


## Desafios

### Exercício 4

### Exercício 5

### Exercício 6