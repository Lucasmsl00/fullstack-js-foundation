let products = [
    { name: "Mouse", price: 50 },
    { name: "Monitor", price: 800 }
];


let total = products.reduce((acumulator, products) => {
    return acumulator + products.price;
}, 0);

console.log(`O total que temos no estoque é de ${total}`);