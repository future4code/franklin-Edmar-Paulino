
export function checaPalindromo(frase) {
  const letrasDaFrase = frase
                          .toLowerCase()
                          .split("")
                          .filter((caractere) => caractere >= 'a' && caractere <= 'z');

  const novaFrase = letrasDaFrase.join("");              
  const fraseReversa = letrasDaFrase.reverse().join("");

  return novaFrase === fraseReversa;
}
