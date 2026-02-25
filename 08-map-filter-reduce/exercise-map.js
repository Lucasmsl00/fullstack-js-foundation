let products = [
    { name: "Mouse", price: 50 },
    { name: "Monitor", price: 800 }
];


let newProducts = products.map(p => ({
    ...p,
    price: p.price + (p.price * 0.2)
}));


console.log(newProducts);
