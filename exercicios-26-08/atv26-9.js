
const matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
   

// Diagonal Principal: [0,0], [1,1], [2,2]
const diagonalPrincipal = [];
let somaPrincipal = 0;

// Diagonal Secundária: [0,2], [1,1], [2,0]
const diagonalSecundaria = [];
let somaSecundaria = 0;

for (let i = 0; i < 3; i++) {
    diagonalPrincipal.push(matriz[i][i]);
    somaPrincipal += matriz[i][i];

    diagonalSecundaria.push(matriz[i][2 - i]);
    somaSecundaria += matriz[i][2 - i];
}

console.log("Elementos da Diagonal Principal:", diagonalPrincipal.join(", "));
console.log("Elementos da Diagonal Secundária:", diagonalSecundaria.join(", "));
console.log("Soma da Diagonal Principal:", somaPrincipal);
console.log("Soma da Diagonal Secundária:", somaSecundaria);