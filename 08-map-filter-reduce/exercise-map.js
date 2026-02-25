let produtos = [
    { name: "Mouse", price: 50 },
    { name: "Monitor", price: 800 }
];


let novosProdutos = produtos.map(p => ({
    ...produtos,
    price: p.price + (p.price * 0.2)
}));


console.log(novosProdutos);
