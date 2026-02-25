let numbers = [5, 10, 15, 20, 25];

let countGreaterThanTen = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 10) {
        countGreaterThanTen += 1;
    }
}

console.log(`${countGreaterThanTen} números na lista são maiores que 10.`)