var nome = 'Lucas';

nome = 'João'

//Declarando uma variavel com var, consigo mudar o valor e tipo dela quando declaradas no mesmo escopo

var idade = 23;

function obterIdade() {
    var idade = 45;
    return idade;
}

//Quando declaradas em escopos diferentes, não alteral valor nem tipo da variavel

//O mesmo acontece quando usamos let para declarar variavel

let sobrenome = 'Teixeira';

sobrenome = 'Godoy';

let carro = 'Ferrari';

function obterCarro(){
    let carro = 'Mustang';
    return carro
}

//Caso declare nome para funções com mesmo nome das variaveis, retornara um erro

const melhorAnime = 'dragon ball GT';

//quando declarado uma variavel com const nao pode alterar valor nem tipo