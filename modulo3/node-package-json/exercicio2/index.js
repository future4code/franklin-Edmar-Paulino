if (process.argv.length !== 5) {
    console.log(`\x1b[31mEsperava 3 parâmetros, mas recebi ${process.argv.length - 2}.\x1b[0m`);
} else {
    const num1 = Number(process.argv[2]);
    const operator = process.argv[3];
    const num2 = Number(process.argv[4]);
    
    switch (operator) {
        case '+':
            console.log(`\x1b[34m${num1} + ${num2} =\x1b[0m \x1b[32m${num1 + num2}\x1b[0m`);
            break;
        case '-':
            console.log(`\x1b[34m${num1} - ${num2} =\x1b[0m \x1b[32m${num1 - num2}\x1b[0m`);
            break;
        case '*':
            console.log(`\x1b[34m${num1} * ${num2} =\x1b[0m \x1b[32m${num1 * num2}\x1b[0m`);
            break;
        case '/':
            console.log(`\x1b[34m${num1} / ${num2} =\x1b[0m \x1b[32m${num1 / num2}\x1b[0m`);
            break;
        default:
            console.log(`\x1b[31mO operador '${operator}' é inválido!\x1b[0m`)
            break;
    }
}
