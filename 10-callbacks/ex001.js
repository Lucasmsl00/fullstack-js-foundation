function saudacao(nome, callback) {
    console.log(`Olá ${nome}`);
    callback();
}

function despedida() {
    console.log("Até mais!");
}

saudacao("Lucas", despedida);