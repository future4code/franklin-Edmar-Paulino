# Herança e Polimorfismo

## Herança

### Exercício 1

a) Não.

b) 1.

### Exercício 2

a) 1.

b) 1. Porque Customer utiliza o construtor da Classe Pai User.

### Exercício 3

a) Não. Primeiro porque por ser private a classe filha não herda esse atributo, e segundo ele não possui metódo para pegar essa informação fora da classe.

### Exercício 4

```ts
    public introduceYourself():string {
        return "Olá, bom dia!";
    }
```

### Exercício 5

```ts
    public introduceYourself():string {
        return `Olá, sou ${this.name}. Bom dia!`;
    }
```

## Polimorfismo

### Exercício 1

a) Todas. Não. Não aconteceu.

### Exercício 2

a) 
```sh
error TS2511: Cannot create an instance of an abstract class.
```
Não pode criar uma instância de uma classe abstrata.

b) Criar uma nova classe que herda da classe abstrata.

### Exercício 3

1) Criar uma nova classe que herda da classe abstrata.

2) É uma classe porque precisa ter um acesso restrito a um dos seus atributos, o que é impossível de se fazer em interfaces.

3) É uma classe abstrata porque não enxergamos uma situação em que seria necessário criar uma instância dessa classe.

### Exercício 4

a) 1 método que é o calculateBill por causa que estamos implementando a interface Cliente que nos obriga a declarar este método,
   o método getCep() é herdado da classe Residence.

### Exercício 5

a) Ambas herdam de uma super classe e implementam uma interface, recebem os atributos
   name, registrationNumber, consumedEnergy e cep, e implementam o método calculateBill();

b) As super classes são diferentes, uma recebe residentsQuantity e cpf enquanto a outra recebe floorsQuantity e cnpj, os valores
   para o cálculo da conta são diferentes, mesmo que ambas tenha a implementação.

### Exercício 6

a) Da classe Industry. Porque essa classe é uma indústria.

b) Da interface Client. Porque nossa classe é um cliente.

c) Não há motivos para criar setters, uma vez que nenhum dado informado deverá ser alterado após a instaciação.


## Desafios - Herança

### Exercício 6

### Exercício 7

### Exercício 8

### Exercício 9

### Exercício 10

### Exercício 11

## Desafios - Polimorfismo

### Exercício 7

### Exercício 8

