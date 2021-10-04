// ENUNCIADO: Uma Matriz é uma estrutura bidimensional que pode possuir elementos em linhas e colunas. Como mostrado abaixo:

// 1 2 3 
// 4 5 6 
// 7 8 9

// Nesse caso, o elemento da linha 3 e coluna 2 é o 8; o elemento da linha 2 e coluna 3 é o 6 e assim por diante. Sobre isso, responda as perguntas abaixo:

//a. Como podemos representar uma Matriz em Typescript?

const matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

//b. Escreva uma função que receba uma Matriz, o índice da linha, o índice da coluna e um valor. Essa função deve alterar o elemento das linha e coluna em questão pelo valor passado. (Caso não tenha nenhum valor nos índices passados, retorne um erro: `Fora do intervalo da matriz`)

export const replaceMatrixNumber =(
    matrix: number[][],
    rowIndex: number,
    columnIndex: number,
    number: number
): any => {

    if (
        matrix[rowIndex-1] === undefined ||
        matrix[rowIndex-1][columnIndex-1] === undefined
    ) {
        return ("Fora do intervalo da matriz");
    };

    matrix[rowIndex-1][columnIndex-1] = number;
    return matrix
};

console.log(replaceMatrixNumber(matrix, 1, 2, 10));
