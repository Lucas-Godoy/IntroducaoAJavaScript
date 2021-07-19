let nome = 'Lucas';

let somar = function (valor1, valor2) {
  let resultado = valor1 + valor2;

  nome = 'Lucas Godoy';

  return `${nome}. O resultado da soma foi ${resultado}`;
};

console.log(somar(1, 2)); 
console.log(somar(4, 4));
console.log(somar(99, 1));
