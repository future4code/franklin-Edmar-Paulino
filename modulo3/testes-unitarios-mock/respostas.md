# Testes unitários e Mocks

## Exercício 3

### c)
Com a inversão de depenências fazemos com o que o usuário informe a função que será chamada para efetuar a validação,
isso facilita para caso queiramos efetuar testes e não queremos testar esse função tida como dependência, assim podemos
criar uma função de Mock que vai retornar o que desejamos e passar para a função que depende dela, assim podendo fazer
testes mais flexíveis e também sem ter terminado ou até feito a implementação da função que a função dependente irá depender,
caso a função não possua inversão de dependências, devemos sempre levar em conta os possíveis retornos dela mediante a entrada
que estamos passando e isso pode deixar os testes mais rígidos.


### Exercício 4

### a)
Da validateCharacter uma vez que a perfomAttack é depentende dela, e recebe ela por parâmetro na forma de inversão de dependências.