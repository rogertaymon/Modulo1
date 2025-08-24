const leia = require ('readline-sync');

let salario = leia.questionFloat('Digite o seu Salario : ');
let abono = leia.questionFloat('Digite o Abono : ');
let novoSalario = salario + abono
console.log ('O novo salario é: ' + novoSalario.toLocaleString ('pt-BR', {style: 'currency', currency: 'BRL'}));

