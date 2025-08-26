const readline = require('readline-sync');

let totalBackend = 0;
let totalFrontendMulheres = 0;
let totalMobileHomens40 = 0;
let totalFullStackNB30 = 0;
let totalPessoas = 0;
let somaIdades = 0;

while (true) {
    // Idade
    let idade = parseInt(readline.question('Idade: '), 10);

    // Identidade de Gênero
    console.log('Identidade de Gênero:');
    console.log('1 – Mulher Cis');
    console.log('2 – Homem Cis');
    console.log('3 – Não Binário');
    console.log('4 – Mulher Trans');
    console.log('5 – Homem Trans');
    console.log('6 – Outros');
    let genero = parseInt(readline.question('Escolha (1-6): '), 10);

    // Pessoa Desenvolvedora
    console.log('Pessoa Desenvolvedora:');
    console.log('1 – Backend');
    console.log('2 – Frontend');
    console.log('3 – Mobile');
    console.log('4 – FullStack');
    let tipoDev = parseInt(readline.question('Escolha (1-4): '), 10);

    // Contabilização
    totalPessoas++;
    somaIdades += idade;

    if (tipoDev === 1) {
        totalBackend++;
    }
    if (tipoDev === 2 && (genero === 1 || genero === 4)) {
        totalFrontendMulheres++;
    }
    if (tipoDev === 3 && (genero === 2 || genero === 5) && idade > 40) {
        totalMobileHomens40++;
    }
    if (tipoDev === 4 && genero === 3 && idade < 30) {
        totalFullStackNB30++;
    }

    // Continuar?
    let continuar = readline.question('Deseja continuar? (S/N): ').toUpperCase();
    if (continuar === 'N') break;
}

console.log('\nResultados da Pesquisa:');
console.log(`Número de pessoas desenvolvedoras Backend: ${totalBackend}`);
console.log(`Número de Mulheres Cis e Trans desenvolvedoras Frontend: ${totalFrontendMulheres}`);
console.log(`Número de Homens Cis e Trans desenvolvedores Mobile maiores de 40 anos: ${totalMobileHomens40}`);
console.log(`Número de Não Binários desenvolvedores FullStack menores de 30 anos: ${totalFullStackNB30}`);
console.log(`Número total de pessoas que responderam à pesquisa: ${totalPessoas}`);
console.log(`Média de idade das pessoas que responderam à pesquisa: ${(somaIdades / totalPessoas).toFixed(2)}`);