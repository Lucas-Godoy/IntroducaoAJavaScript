const arrays = [{ time: "Knicks" }, { time: "Cavs" }, 50];

for (const arr of arrays) {
  if (arr.time === "Knicks") {
    console.log("NY Team");
  }

  if (arr.time === "Cavs") {
    console.log("Cleveland Team");
  }

  if (arr.time === 50) {
    console.log(arr);
  }
}

//forOf vai executar alguma ordem para cada elemento do array, um de cada vez

//crie um array com 3 valores numericos, quando o valor for menor que 100 imprima "menor que 100"
//quando valor for menor que 500 imprima "menor que 500"
//quando for menor que 1000 imprima "menor que 1000"

const numeros = [55, 250, 895];

for (const n of numeros) {
  if (n < 100) {
    console.log("Este número é menor que 100");
  } else if (n < 500) {
    console.log("Este numero é maior que 100 e menor que 500");
  } else {
    console.log("Este numero é maior que 100 e 500 mas é menor que 1000");
  }
}

//intuituo do forOf é executar alguma logica para cada posição do array
