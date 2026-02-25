let products = [
    { name: "Mouse", price: 50 },
    { name: "Monitor", price: 800 }
];

let productsPriceGreaterThanOneHundred = products.filter(p => p.price > 100);

console.log(productsPriceGreaterThanOneHundred);