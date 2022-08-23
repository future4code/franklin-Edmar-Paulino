# aprofundamento-sql

## Exercício 1

### a)
```sql
ALTER TABLE Actor DROP COLUMN salary;
```
A query acima remove a coluna `salary`.

### b)
```sql
ALTER TABLE Actor CHANGE gender sex VARCHAR(6);
```
A query acima muda o nome da coluna de `gender` para `sex`.

### c) 
```sql
ALTER TABLE Actor CHANGE gender gender VARCHAR(255);
```
A query acima muda o tipo de dados da coluna `gender` de `VARCHAR(6)` para `VARCHAR(255)`.

### d)
```sql
ALTER TABLE Actor CHANGE gender gender VARCHAR(100) NOT NULL;
```

## Exercício 2

### a)
```sql
UPDATE Actor SET birth_date = "1929-10-29" WHERE id = "003";
```

### b)
```sql
UPDATE Actor SET name = "JULIANA PAES" WHERE name = "Juliana Paes";
UPDATE Actor SET name = "Juliana Paes" WHERE name = "JULIANA PAES";
```

### c)
```sql
UPDATE Actor SET
name = "Letícia Sabatella",
salary = 1800000,
birth_date = "1971-03-08",
gender = "female",
hometown = "Belo Horizonte"
WHERE id = "005";
```

### d)
```sql
UPDATE Actor SET name = "Milton Gonçalves" WHERE id = "18";
```
Não ocorre erro, o mysql busca pelo ID e como não encontra não altera nada.

## Exercício 3

### a)
```sql
DELETE FROM Actor WHERE name = "Fernanda Montenegro";
```

### b)
```sql
DELETE FROM Actor WHERE gender = "male" AND salary > 1000000;
```

## Exercício 4

### a)
```sql
SELECT MAX(salary) FROM Actor;
```

### b)
```sql
SELECT MIN(salary) FROM Actor WHERE gender = "female";
```

### c)
```sql
SELECT COUNT(*) FROM Actor WHERE gender = "female";
```

### d)
```sql
SELECT SUM(salary) FROM Actor;
```

## Exercício 5

### a)
```sql
SELECT COUNT(*), gender FROM Actor GROUP BY gender;
```
A query acima exibe uma tabela onde a primeira coluna é o `COUNT` e a segunda é o `gender`, sendo que em cada linha aparece a quantidade de atores do genêro exibido em sequência.

### b)
```sql
SELECT id, name FROM Actor ORDER BY name DESC;
```

### c)
```sql
SELECT * FROM Actor ORDER BY salary ASC;
```

### d)
```sql
SELECT * FROM Actor WHERE gender = "male" ORDER BY salary DESC LIMIT 3;
```

### e)
```sql
SELECT AVG(salary), gender FROM Actor GROUP BY gender;
```

## Exercício 6

### a)
```sql
ALTER TABLE Movie ADD playing_limit_date DATE;
```

### b)
```sql
ALTER TABLE Movie CHANGE rating rating FLOAT NOT NULL;
```

### c)
```sql
UPDATE Movie SET playing_limit_date = "2022-08-10" WHERE id = 3;
UPDATE Movie SET playing_limit_date = "2200-12-31" WHERE id = 4;
```

### d)
```sql
DELETE FROM Movie WHERE id = 1;

UPDATE Movie SET synopsis = "1 2 3 testando" WHERE id = 1;
```
Nenhuma linha foi alterado pois o id não foi encontrado.

## Exercício 7


## Exercício 8

