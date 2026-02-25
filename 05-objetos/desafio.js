let produtos = [
    { name: "Alicate", price: 4.99, stock: 5},
    { name: "Abacaxi", price: 5, stock: 100},
    { name: "Açafrão", price: 55, stock: 0}
];

let countProductsGreaterThanFifty = 0;

for (let i = 0; i < produtos.length; i++) {
    if (produtos[i].price > 50) {
        countProductsGreaterThanFifty++;
    }
}

console.log(`${countProductsGreaterThanFifty} produto(s) custam mais de R$ 50,00`)