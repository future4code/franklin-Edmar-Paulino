// Para acessar os parâmetros passados na linha de comando usamos o process.argv[indice do parâmetro], sendo que o primeiro parâmetro é próprio node e o segundo é o nome do arquivo que está sendo executado
if (process.argv.length !== 4) {
    console.log(`\x1b[31mEsperava 2 parâmetros, mas recebi ${process.argv.length - 2}.\x1b[0m`);
} else {
    const name = process.argv[2];
    const age = Number(process.argv[3]);
    console.log(`\x1b[32mOlá, ${name}! Você tem ${age} anos. Em sete anos você terá ${age + 7}.\x1b[0m`);
}
