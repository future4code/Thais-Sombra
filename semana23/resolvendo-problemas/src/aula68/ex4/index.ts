// ENUNCIADO: Agora, vamos implementar algumas operações envolvendo matrizes. Para isso, estamos indicando algumas referências que podem ajudá-los a entender como essas operações são feitas "no papel".

// a. Implemente uma função que receba uma matriz e imprima, no console, todos os seus elementos

const matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];


export const returnMatrixNumbers =(
    matrix: number[][],
): any => {

    for (const row of matrix){
        for (const element of row){
            console.log("Ex4.a",element);
        };
    };
   
};

console.log(returnMatrixNumbers(matrix));

// b. Implemente uma função que receba duas matrizes e devolva a soma delas

export const sumMatrix =(
    matrixA: number[][],
    matrixB: number[][],
): any => {

    const newMatrix: number[][] = [];

    const rowSize = matrixA[0].length;
    const columnSize = matrixB[0].length;

    for (let i = 0; i < rowSize; i++) {
        let newMatrixRow = [];
        for (let j = 0; j < columnSize; j++) {
          newMatrixRow.push(matrixA[i][j] + matrixB[i][j]);
        }
        newMatrix.push(newMatrixRow);
      }
      return newMatrix;
};

console.log(sumMatrix(matrix,matrix));

// c. Implemente uma função que receba uma matriz e devolva a sua matriz transposta

// d. Implemente uma função que receba duas matrizes e devolva a multiplicação delas
