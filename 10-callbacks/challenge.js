function receberPedido(callback) {
    setTimeout(() => {
        console.log("Pedido recebido.");
        callback();
    }, 1000);
}

function processarPagamento(sucesso, erro) {
    setTimeout(() => {
        if (Math.random() < 0.3) {
            erro();
        } else {
            sucesso();
        }
    }, 2000);
}

function enviarPedido(callback) {
    setTimeout(() => {
        console.log("Pedido enviado.")
        callback();
    }, 1500);
}

function sucesso(){
    console.log("Pagamento aprovado.")
}

function erro(){
    console.log("Pagamento recusado.")
}

receberPedido(
    () => {
        processarPagamento(
            () => {
                sucesso();
                enviarPedido(() => {
                    console.log("Fluxo finalizado.");
                });
            },

            () => { 
                erro();
                console.log("Encerrando fluxo.");
            }
        );
});