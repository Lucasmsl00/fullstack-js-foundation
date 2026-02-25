    function checkNumber(number) {
        // Forma mais simplificada: 

        return number % 2 === 0 ? "par" : "ímpar";

        // if (number % 2 === 0) {
        //     return "par";
        // } else {
        //     return "ímpar";
        // }
    }

    let result = checkNumber(21);

    console.log(`O número informado é ${result}`);