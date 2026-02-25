let produto = {
    name: "Teclado",
    price: 100,
    stock: 10
};

let novoProduto = {
    ...produto,
    price: 150,
    category: "Informática"
};

console.log(produto);
console.log(novoProduto);