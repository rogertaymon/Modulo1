const readline = require('readline-sync');

let saldo = 1000.00;

console.log("Escolha a operação:");
console.log("1 - Saldo");
console.log("2 - Saque");
console.log("3 - Depósito");

const operacao = parseInt(readline.question("Digite o codigo da operacao (1-3): "));

if (operacao === 1) {
    console.log(`Saldo atual: R$ ${saldo.toFixed(2)}`);
} else if (operacao === 2) {
    const valor = parseFloat(readline.question("Digite o valor para saque: "));
    if (valor > saldo) {
        console.log("Saldo insuficiente!");
    } else {
        saldo -= valor;
        console.log(`Saque realizado. Novo saldo: R$ ${saldo.toFixed(2)}`);
    }
} else if (operacao === 3) {
    const valor = parseFloat(readline.question("Digite o valor para depósito: "));
    saldo += valor;
    console.log(`Deposito realizado. Novo saldo: R$ ${saldo.toFixed(2)}`);
} else {
    console.log("Operação Inválida!");
}