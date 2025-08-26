const readline = require('readline-sync');

const num1 = parseInt(readline.question('Digite o primeiro numero inteiro: '));
const num2 = parseInt(readline.question('Digite o segundo numero inteiro: '));

if (num1 >= num2) {
    console.log('Intervalo inválido. O primeiro número deve ser menor que o segundo.');
    process.exit(1);
}

console.log(`Números múltiplos de 3 e 5 entre ${num1} e ${num2}:`);
for (let i = num1; i <= num2; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i);
    }
}