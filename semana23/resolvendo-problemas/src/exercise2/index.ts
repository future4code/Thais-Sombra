// [1] ENUNCIADO: crie uma função que determine se duas strings são anagramas uma da outra

// [2] CASOS DE TESTE:
// "Roma", "amor" -> true
// "alegria", "alergia" -> true
// "alegria", "amor" -> false

// [3] ALGORITMO DE FORÇA BRUTA:

// transformar caracteres maiúsculos em minúsculos
// remover espaços
// remover acentuação
// remover caracteres especiais(?)
// ordenar alfabeticamente as strings
// compará-las

// [4] ALGORITMO USANDO HASH TABLES

// catalogar os caracteres de cada string ("amar" -> {a:2, m:1, r:1})
// comparar as hash tables resultantes

// [5] CONFERIR A SOLUÇÃO 

// [6] IMPLEMENTAR UM CÓDIGO BONITO

import { hashTable } from "../hash_tables"

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

const compareHashTables = (
   firstTable: hashTable,
   secondTable: hashTable
): boolean => {

   for (let key in firstTable) {
      if (firstTable[key] !== secondTable[key]) {
         return false
      }
   }

   for (let key in secondTable) {
      if (firstTable[key] !== secondTable[key]) {
         return false
      }
   }

   return true
}

const validateAnagram = (
   firstText: string,
   secondText: string
) => {

   firstText = formatString(firstText)
   secondText = formatString(secondText)

   const firstTextHash = createHashTable(firstText)
   const secondTextHash = createHashTable(secondText)

   return compareHashTables(firstTextHash, secondTextHash)
}

// [7] TESTAR O CÓDIGO:

console.log(validateAnagram("Roma", "amor"))
console.log(validateAnagram("alegria", "alergia"))
console.log(validateAnagram("cÉu", "uce"))
console.log(validateAnagram("alegria", "amor"))
console.log(validateAnagram("amor", "hamor"))