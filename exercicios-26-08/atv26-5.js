const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let soma = 0;

function lerNumero() {
    rl.question('Digite um número inteiro (0 para sair): ', (input) => {
        const numero = parseInt(input, 10);

        if (numero === 0) {
            console.log(`Soma dos números positivos: ${soma}`);
            rl.close();
        } else {
            if (numero > 0) {
                soma += numero;
            }
            lerNumero();
        }
    });
}

lerNumero();