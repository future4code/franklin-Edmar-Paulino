if (process.argv.length !== 5) {
    console.log(`Esperava 3 parâmetros, mas recebi ${process.argv.length - 2}.`);
} else {
    const num1 = Number(process.argv[2]);
    const operator = process.argv[3];
    const num2 = Number(process.argv[4]);
    
    switch (operator) {
        case '+':
            console.log(`${num1} + ${num2} = ${num1 + num2}`);
            break;
        case '-':
            console.log(`${num1} - ${num2} = ${num1 - num2}`);
            break;
        case '*':
            console.log(`${num1} * ${num2} = ${num1 * num2}`);
            break;
        case '/':
            console.log(`${num1} / ${num2} = ${num1 / num2}`);
            break;
        default:
            console.log("Operador inválido!")
            break;
    }
}
