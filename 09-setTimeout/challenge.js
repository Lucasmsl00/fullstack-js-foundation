setTimeout(() => {
    console.log("Pedido recebido.");

    setTimeout(() => {

        if (Math.random() < 0.3) {
            console.log("Pagamento recusado");
            return;

        }

        console.log("Pagamento aprovado.");

        setTimeout(() => {
            console.log("Pedido enviado.");
        }, 1500);


    }, 2000);
}, 1000);