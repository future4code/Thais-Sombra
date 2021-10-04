// [1] ENUNCIADO: Implemente um método que performe uma compressão de string usando a contagem dos caracteres repetidos em sequência. Caso o resultado final tenha um tamanho maior do que a string inicial, seu programa deve retornar a string inicial

import { findSourceMap } from "module"

// [2] CASOS DE TESTES

// Para o input aabbb o resultado deve ser a2b3
// Para o input aabcccccaaa o resultado deve ser a2b1c5a3
// Para o input accurate o resultado deve ser accurate (já que inicialmente o código retornaria a1c2u1r1a1t1e1 que possui o tamanho maior do que accurate)
// Para o input escola o resultado deve ser escola (já que inicialmente o código retornaria e1s1c1o1l1a1 que possui o tamanho maior do que escola)
// Para o input accuraaaaaaaaaate, o resultado deve ser a1c2u1r1a10t1e1

// [3] ALGORITMO DE FORÇA BRUTA??

// 

// [4] ALGORITMO USANDO HASH TABLES

// catalogar os caracteres de cada string ("amar" -> {a:2, m:1, r:1})
// comparar as hash tables resultantes


export interface hashTable {
    [key: string]: any
};

const formatString = (text: string) => {
    return text
       .toLowerCase()
       .replace(/ /g, "")
       .replace(/[éèê]/g, "e")
       .replace(/[áàãâ]/g, "a")
       .replace(/[íì]/g, "i")
       .replace(/[óòô]/g, "o")
       .replace(/[úù]/g, "u")
 }
 
 const createHashTable = (text: string): hashTable => {
 
    const result: hashTable = {}
 
    for (let character of text) {
 
       if (result[character]) {
          result[character]++
       } else {
          result[character] = 1
       }
    }

    return result
 }
 
 const compressHashTables = (
    firstTable: hashTable
 ): any => {
    
    let result = "";
    for (let key in firstTable){
        result += key + firstTable[key]
    };    
 
    return result;
 }
 
 const realizeCompression = (
    firstText: string
 ) => {
 
    firstText = formatString(firstText)
 
    const firstTextHash = createHashTable(firstText)
 
    return compressHashTables(firstTextHash)
 };
 
console.log(realizeCompression("aabbb"));
console.log(realizeCompression("aabcccccaaa"));
console.log(realizeCompression("accurate "));
console.log(realizeCompression("escola"));
console.log(realizeCompression("accuraaaaaaaaaate"));

export const stringCompression = (input) => {
    const substrings = [];
    let lastChar = input[0];
    let charCount = 0;
  
    for (const char of input) {
      if (char !== lastChar) {
        substrings.push(lastChar + charCount);
        lastChar = char;
        charCount = 0;
      }
      charCount++;
    }
  
    substrings.push(lastChar + charCount);
    let result = "";
    for (const key of substrings) {
      result += key;
    }
  
    return result.length > input.length ? input : result;
  };

  console.log(stringCompression("aabcccccaaa"))
