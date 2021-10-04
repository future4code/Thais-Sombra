// [1] ENUNCIADO: Considere que a gente só possa fazer três operações com string: adicionar um caractere ao final dele, remover um caractere do final dele ou substituir um caractere por outro. Dizemos que uma string é 'one edit' de outra se ela for o resultado da original a partir de UMA SÓ dessas operações. Escreva um método que determine se uma string é  'one edit' de outra.

// [2] CASOS DE TESTE

// "banan" é 'one edit' de "banana" (remoção de um caracter)
// "bananak" é 'one edit' de "banana" (adição de um caracter)
// "panana" é 'one edit' de "banana" (troca de um caracter)
// "bananaaa" não é 'one edit' de "banana" (adição de dois caracteres)

// [3] ALGORITMO DE FORÇA BRUTA

// Comparar length das strings
// A maior inclui a menor
// Varrer string e contar letras diferentes


export interface hashTable {
    [key: string]: any
};

const validateOneEdit = (textA: string, textB: string) => {

    const textALength = textA.length;
    const textBLength = textB.length;

    if((textALength-textBLength)>1){
        return false;
    };

    if(textALength>textBLength){
        return textA.includes(textB);
    }else if(textBLength>textALength){
        return textB.includes(textA)
    };

    let charsDiffCount = 0;

    for(let i=0; i<textALength; i++){
        if(textA[i] !== textB[i]){
            charsDiffCount++
        };
    };

    return charsDiffCount === 1

};

console.log(validateOneEdit("banan","banana"));
console.log(validateOneEdit("bananak","banana"));
console.log(validateOneEdit("panana","banana"));
console.log(validateOneEdit("bananaaa","banana"));
