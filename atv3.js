const leia = require ('readline-sync');
let salarioBruto = leia.questionFloat('Digite o Salario Bruto: ');
let adicionalNoturno = leia.questionFloat('Digite o adicional noturno: ');
let horasExtras = leia.questionFloat('Digite o valor das horas extras: ');
let descontos = leia.questionFloat('Digite o valor dos descontos: ');
salarioLiquido = salarioBruto + adicionalNoturno + (horasExtras*5) - descontos
console.log ('O salario liquido é: ' + salarioLiquido.toLocaleString ('pt-BR', {style: 'currency', currency: 'BRL'}));
