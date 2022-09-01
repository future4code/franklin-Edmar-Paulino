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

a)
```sql
SELECT Movie.id, Movie.title, Rating.rate, Rating.comment FROM Movie LEFT JOIN Rating ON Movie.id = Rating.movie_id; 
```

b)
```sql
SELECT MovieCast.movie_id, Movie.title, MovieCast.actor_id FROM Movie RIGHT JOIN MovieCast ON MovieCast.movie_id = Movie.id;
```

c)
```sql
SELECT Movie.title, AVG(Rating.rate) AS average FROM Movie LEFT JOIN Rating ON Movie.id = Rating.movie_id GROUP BY Movie.title;
```

### Exercício 5

a)
```sql
SELECT * FROM Movie m
LEFT JOIN MovieCast mc ON m.id = mc.movie_id
JOIN Actor a ON a.id = mc.actor_id;
```
Selecione tudo de Movie, juntando MovieCast onde Movie.id é igual a MovieCast.movie_id, e juntando Actor onde Actor.id é igual a MovieCast.actor_id.
Precisamos de dois JOIN pois a relação entre Movie e Actor acontencem em uma terceira tabela, a MovieCast.

b)
```sql
SELECT Movie.id AS move_id, Movie.title AS movie_title, Actor.id AS actor_id, Actor.name AS actor_name FROM Movie
JOIN MovieCast ON Movie.id = MovieCast.movie_id
JOIN Actor ON Actor.id = MovieCast.actor_id;
```

c)
```
Error Code: 1054. Unknown column 'm' in 'field list'
```
Este error ocorreu porque ele tentou reconhecer m como uma coluna e não o nome de uma tabela, porque foi passado m,title ao invés de m.title.

d)
```sql
SELECT m.title AS movie_title, a.name AS actor_name, r.rate AS rating, r.comment AS comment FROM Movie m
JOIN Rating r ON m.id = r.movie_id
JOIN MovieCast mc ON m.id = mc.movie_id
JOIN Actor a ON  mc.actor_id = a.id;
```

### Exercício 6

a)
N:M - muitos para muitos

b)
```sql
CREATE TABLE Oscar (
	id VARCHAR(255) PRIMARY KEY,
	name VARCHAR(255) NOT NULL,
    date DATE NOT NULL UNIQUE
);

CREATE TABLE OscarWinners (
	oscar_id VARCHAR(255),
    movie_id INT,
    FOREIGN KEY (oscar_id) REFERENCES Oscar(id),
    FOREIGN KEY (movie_id) REFERENCES Movie(id)
);
```
Eu criei duas tabelas, uma para os Oscars e outra para realizar a relação de um Oscar com vários filmes ou de um filme com vários Oscars.

c)
```sql
INSERT INTO Oscar (id, name, date)
VALUES ("001", "Óscar de melhor filme", "2002-12-01"),
("002", "Óscar de melhor direção", "2002-12-02"),
("003", "Óscar de melhor roteiro", "2002-12-03"),
("004", "Óscar de melhor figurino", "2002-12-04"),
("005", "Óscar de melhor animação", "2002-12-05"),
("006", "Óscar de melhor iluminação", "2002-12-06"),
("007", "Óscar de melhor personagem", "2002-12-07"),
("008", "Óscar de melhor ator", "2002-12-08");

INSERT INTO OscarWinners (oscar_id, movie_id)
VALUES ("001", 2),
("002", 3),
("003", 2),
("004", 4),
("005", 3),
("006", 4),
("007", 2),
("008", 3);
```

d)
```sql
SELECT m.title AS movie, o.name AS oscar FROM Movie m
JOIN OscarWinners oc ON m.id = oc.movie_id
JOIN Oscar o ON oc.oscar_id = o.id;
```