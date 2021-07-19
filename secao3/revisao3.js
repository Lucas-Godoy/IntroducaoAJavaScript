let objeto = {
    objeto2 : {
        vetor : [1,2, {valor: 55}]
    },
};

console.log(objeto["objeto2"].vetor[2]);
console.log(objeto.objeto2.vetor[2]);
console.log(objeto["objeto2"]["vetor"][2]);