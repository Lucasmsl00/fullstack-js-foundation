const formatador = new Intl.NumberFormat("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
});

const calculateDiscount = (price) => price > 100 ? price * 0.9 : price;

let cart = [
    { name: "Mouse", price: 50, quantity: 2, active: true },
    { name: "Monitor", price: 800, quantity: 1, active: false },
    { name: "Teclado", price: 100, quantity: 3, active: true },
    { name: "Headset", price: 200, quantity: 1, active: true }
];

let total = cart
    .filter(p => p.active)
    .map(p => ({
        ...p,
        price: calculateDiscount(p.price),
    }))
    .reduce((acc, p) => acc + (p.price * p.quantity), 0);


console.log(`Valor do carrinho: R$ ${formatador.format(total)}`);