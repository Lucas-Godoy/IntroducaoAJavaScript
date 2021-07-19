//Declarar 2 variaveis com tipos e valores diferentes e verificar, aonde tiver o tipo number voce vai imprimir no console a frase
// Estou estudando javascript

const idade = 23;
const nome = "lucas";

if (idade || nome === typeof Number) {
  console.log("Estou estudando javascript");
}

//Declarar 2 variaveis em escopos diferentes, porem, 1 variavel nao pode ter valor nem tipo alterados e chamar uam das variaveis
// que ira substituir o valor de apenas 1 variavel

var nome1 = "lucas";
nome1 = "joão";

function sobrenome() {
  const nome1 = "godoy";
  return nome1;
}
console.log(nome1);
console.log(sobrenome());

//Crie 1 variavel que vai receber qualquer valor, e depois mude o valor dessa variavel 2 vezes para qualquer valor
//e imprima o ultimo valor

var carro = "corsa";
carro = "gol";
carro = "uno";

console.log(carro);
