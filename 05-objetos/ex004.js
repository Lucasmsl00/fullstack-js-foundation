let produtos = [
    { name: "Alicate", price: 4.99, stock: 5},
    { name: "Abacaxi", price: 5, stock: 100},
    { name: "Açafrão", price: 8, stock: 0}
];

for (let i = 0; i < produtos.length; i++) {
    if (produtos[i].stock > 0) {
        console.log(`Nome: ${produtos[i].name}, Preço: ${produtos[i].price}, Estoque: ${produtos[i].stock}`);
    }
}