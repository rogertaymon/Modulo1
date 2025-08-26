const prompt = require('readline-sync');

const vetor = [12, 5, 23, 8, 17, 3, 19, 1, 14, 10]; // exemplo de vetor

const numero = parseInt(prompt.question('Digite um numero para pesquisar: '));

const posicao = vetor.indexOf(numero);
2
if (posicao !== -1) {
    console.log(`O numero ${numero} esta na posicao ${posicao} do vetor.`);
} else {
    console.log('Não foi encontrado!');
}