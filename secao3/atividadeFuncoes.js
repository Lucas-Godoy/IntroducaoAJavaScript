//declare uma variavel que recebe um array, com 3 valores que serao nome, profissao, idade
//crie uma funcao que ira ter 3 parametros, dentro da funcao voce ira adicionar mais 2 valores nesse array
//que sera salario e empresa e retornar esse array com novos valores

//obsvervacao: ao chamar a funcao no console.log passar nos 3 parametros, os valores do array um por um

let array = ['Lucas', 'ator porno', '23' ];
function addArray(valor1, valor2, valor3) {
    array.push('22000', 'lucasLTDA');

    return `Nome: ${valor1}, Profissao: ${valor2}, idade: ${valor3}, salario: ${array[3]}, empresa: ${array[4]}`;
}

const imprimir = addArray(array[0], array[1], array[2]);

console.log(imprimir)