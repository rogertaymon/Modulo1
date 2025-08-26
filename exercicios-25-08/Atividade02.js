const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite um número inteiro: ', (input) => {
  const numero = parseInt(input, 10);

  if (isNaN(numero)) {
    console.log('Valor inválido. Por favor, digite um número inteiro.');
  } else {
    const parOuImpar = numero % 2 === 0 ? 'par' : 'ímpar';
    const positivoOuNegativo = numero >= 0 ? 'positivo' : 'negativo';

    console.log(`O número ${numero} é ${parOuImpar} e ${positivoOuNegativo}.`);
  }

  rl.close();
});