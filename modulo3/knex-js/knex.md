# Aula - Knex.js

## Exercícios propostos

### Exercício 1
a) Um array de arrys, sendo o primeiro array os dados buscados e o próximo sendo as informações sobre cada campo do dado retornado.

b)
```ts
async function getActorByName(name:string):Promise<any> {
    if (!name) {
        throw new Error("Nome não informado!");
    }
    const result:any = await connection.raw(`SELECT * FROM Actor WHERE name = "${name}"`);
    return result[0][0];
}
```

c)
```ts
async function getGenderCount(gender:string):Promise<any> {
    if (!gender) {
        throw new Error("Genêro não informado!");
    }
    const result:any = await connection.raw(`
        SELECT COUNT(*) as "${gender}" FROM Actor WHERE gender = "${gender}"
    `);
    return result[0][0];
}
```

### Exercício 2

### Exercício 3

### Exercício 4

## Desafios

### Exercício 5

### Exercício 6

### Exercício 7

