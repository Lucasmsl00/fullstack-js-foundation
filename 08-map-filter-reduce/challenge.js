const formatador = new Intl.NumberFormat('pt-BR', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

let products = [
    { name: "Mouse", price: 50, stock: 10 },
    { name: "Monitor", price: 800, stock: 2 },
    { name: "Teclado", price: 100, stock: 5 }
];

let total = products
    .filter(p => p.stock > 0)
    .map(p => ({
        ...p,
        price: p.price * 0.9,
    }))
    .reduce((acc, p) => acc + (p.price * p.stock), 0);

    console.log(`O total que temos no estoque com desconto é de R$ ${formatador.format(total)}`);