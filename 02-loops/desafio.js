let soma_pares = 0;

for (let i = 1; i <= 100; i++){
    if (i % 2 === 0) {
        soma_pares += 1;
    }
}

console.log("Foram encontrados " + soma_pares + " números pares");