// Faça uma função que receba dois números como parâmetros e imprima
// no terminal, as seguintes informações:

// a) A soma desses números

// b) A subtração desses números

// c) A multiplicação desses números

// d) Qual deles é o maior

// Você pode fazer todas as operações na mesma função.

// Como estamos usando o TypeScript, devemos passar para o código o tipo
// de parâmetro que é esperado pela função, afinal, no javascript, nada
// nos impede de passar parâmetros sem especificação. É como diz aquela
// piada de programador:
// "Alguém pode me explicar TypeScript como se eu fosse uma criança de
// 5 anos?"
// "Se você disser 'laranja', o TypeScript vai te perguntar se você está
// falando da fruta ou da cor. O JavaScript não vai te perguntar nada e
// você pode acabar bebendo um copo de tinta laranja."

function fazTudo(num1: number, num2: number): void {
    console.log(`A soma de ${num1} + ${num2} é ${num1 + num2}`);
    console.log(`A subtração de ${num1} - ${num2} é ${num1 - num2}`);
    console.log(`A multiplicação de ${num1} * ${num2} é ${num1 * num2}`);
    console.log(`O maior número entre ${num1} e ${num2} é ${num1 > num2 ? num1 : num2}`);
}
