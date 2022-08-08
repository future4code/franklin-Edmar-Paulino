// a) Escreva uma função que receba uma string e retorne a string
// reversa. Em outras palavras, se o input da sua função for "abcd",
// a saída deve ser "dcba".

function strrev(str: string): string {
    let rev: string = "";

    for (let i: number = str.length - 1; i >= 0; i--) {
        rev += str[i];
    }
    
    return rev;
}

console.log(strrev("abcd"));
