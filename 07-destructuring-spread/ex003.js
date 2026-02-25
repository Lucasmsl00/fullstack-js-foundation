let produtos = [
    { name: "Mouse", price: 50 },
    { name: "Monitor", price: 800 }
];

let novosProdutos = produtos.map(produto => ({
    ...produto,
    price: produto.price + 10
}));

console.log(novosProdutos);