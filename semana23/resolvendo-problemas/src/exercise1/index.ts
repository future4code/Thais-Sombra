// [1] ENUNCIADO: ESCREVA UM PROGRAMA QUE DETERMINE SE UM TEXTO É UM PALÍNDROMO

// [2] CASOS DE TESTE:

// "Bob" -> true
// "A daman admirou o rim da amada" -> true
// "Mateus" -> false

// [3] ALGORITMO DE FORÇA BRUTA:

// transformar os caracteres maiúsculos em minúsculos    -> ok
// remover os espaços da string                        
// transformar o texto num array de caracteres           -> ok
// inverter esse array                                   -> ok
// transformar de volta pra texto                        -> ok
// comparar com o original                               -> ok

// [4] OTIMIZAÇÃO (SE POSSÍVEL)

// [5] REVISAR A SOLUÇÃO

// [6] IMPLEMENTAR ESCREVENDO CÓDIGO BONITO
const validatePalyndrome = (text: string) => {

   const lowerCaseText: string = text.toLowerCase()

   const lowerCaseTextWithoutSpaces: string = lowerCaseText.replace(/ /g, "")

   const characters: string[] = lowerCaseTextWithoutSpaces.split("")

   const reversedCharacters: string[] = characters.reverse()

   const reversedText:string = reversedCharacters.join("")

   return reversedText === lowerCaseTextWithoutSpaces
}

// [7] TESTAR

console.log(validatePalyndrome("Bob"))
console.log(validatePalyndrome("A dama admirou o rim da amada"))
console.log(validatePalyndrome("Mateus"))