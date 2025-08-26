const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let count = 0;
let pares = 0;
let impares = 0;

function perguntarNumero() {
    if (count < 10) {
        rl.question(`Digite o ${count + 1}º número inteiro: `, (input) => {
            const numero = parseInt(input, 10);
            if (!isNaN(numero)) {
                if (numero % 2 === 0) {
                    pares++;
                } else {
                    impares++;
                }
                count++;
                perguntarNumero();
            } else {
                console.log('Por favor, digite um número inteiro válido.');
                perguntarNumero();
            }
        });
    } else {
        console.log(`Quantidade de números pares: ${pares}`);
        console.log(`Quantidade de números ímpares: ${impares}`);
        rl.close();
    }
}

perguntarNumero();