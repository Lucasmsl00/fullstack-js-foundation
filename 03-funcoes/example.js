function gerarNumeros(inicio, fim) {
    let lista = [];

    for (let i = inicio; i <= fim; i++) {
        lista.push(i);
    }

    return lista;
}


let numeros = gerarNumeros(1, 5);

console.log(numeros);