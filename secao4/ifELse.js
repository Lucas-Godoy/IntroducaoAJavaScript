const bool = 3;

// == verifica apenas o VALOR
// === verifica VALOR e TIPO

if (bool === "3") {
  console.log("1");
} else {
  console.log("2");
}

//Declare uma variavel que receba 1 valor, se o valor for do tipo string imprima o valor senao imprima a frase
//Nao e um numero

const numero = 12;

if (typeof numero === "string") {
  console.log(numero);
} else {
  console.log("nao e um string");
}
