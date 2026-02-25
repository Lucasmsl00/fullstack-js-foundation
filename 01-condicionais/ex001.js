let numero = 10;

if (numero > 0) {
    console.log("Positivo")
} else if (numero === 0) {
    console.log("Zero")
} else {
    console.log("Negativo")
}

let idade = 16;

if (idade < 12) {
    console.log("Criança")
} else if (idade < 18) {
    console.log("Adolescente")
} else {
    console.log("Adulto")
}

let cor = "vermelho";

switch (cor) {
    case "verde":
        console.log("Siga");
        break;
    case "amarelo":
        console.log("Atenção");
        break;
    case "vermelho":
        console.log("Pare");
        break;
}
