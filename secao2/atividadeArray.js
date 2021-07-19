//crie uma variavel que recebe um array, esse array devera conter 3 valores
//em seguida imprima no console o valor da posicão 2 desse array

let carros = ['uno', 'fusca', 'chevette'];
console.log(carros[2]);

//index = posição do array

//nesse mesmo array, adicionar 1 carro na ultima posicao do array

carros.push('corsa');
console.log(carros)

//remove desse array o primeiro elemento dele
carros.shift();
console.log(carros);

//nesse mesmo array, adicione 1 valor na posição 1, removendo 1 elemento
removed = carros.splice(1, 1, 'strada');
console.log(carros);