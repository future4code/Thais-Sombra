//Exercício 1

function inverteArray(array) {
   let newArray = []
   for (let i = array.length - 1; i >= 0; i--) {
      newArray.push(array[i])
   }
   return newArray
}

//Exercício 2

function retornaNumerosParesElevadosADois(array) {
   let newArray = []
   for (let i = 0; i < array.length; i++){
      if (array[i] % 2 === 0) {
         newArray.push(array[i] ** 2)
      }
   }
   return newArray
}
//Exercício 3

function retornaNumerosPares(array) {
   let newArray = []
   for (let i = 0; i < array.length; i++){
      if (array[i] % 2 === 0) {
         newArray.push(array[i])
      }
   }
   return newArray
}

//Exercício 4

function retornaMaiorNumero(array) {
   let maiorNumero = array[0]
   for ( let i = 0; i <= array.length; i++){
      if (array[i] > maiorNumero){
         maiorNumero = array[i]
      }
   }
   return maiorNumero
}

//Exercício 5

function retornaQuantidadeElementos(array) {
   return array.length
}

//Exercício 6

function retornaExpressoesBooleanas() {
   const booleano1 = true
   const booleano2 = false
   const booleano3 = !booleano2
   const booleano4 = !booleano3

   const expressaoA = booleano1 && booleano2 && !booleano4
   const expressaoB = (booleano1 && booleano2) || !booleano3
   const expressaoC = (booleano2 || booleano3) && (booleano4 || booleano1)
   const expressaoD = !(booleano2 && booleano3) || !(booleano1 && booleano3)
   const expressaoE = !(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3)
   const respostas = [expressaoA, expressaoB, expressaoC, expressaoD, expressaoE]

   return respostas
}

//Exercício 7

function retornaNNumerosPares(n) {
   let array = []
   let i = 0
   while (array.length < n) {
      array.push(i)
      i = i + 2
   }
   return array
}

// Exercício 8

function checaTriangulo(a, b, c) {
   if ( a === b && a === c){
      triangulo = "Equilátero"
   } else if (a === b || a === c || b === c){
      triangulo = "Isósceles"
   }else{
      triangulo = "Escaleno"
   }
   return triangulo
}

// Exercício 9

function comparaDoisNumeros(num1, num2) {
   let array = 
   {
      maiorNumero: '' , 
      maiorDivisivelporMenor: '' , 
      diferenca: '' 
   }
   // maior número
   if (num1>num2){
      array.maiorNumero = num1
   }else {
      array.maiorNumero = num2
   }
   // divisivel
   if (array.maiorNumero === num1){
      array.maiorDivisivelporMenor = (array.maiorNumero % num2 === 0)

   } else{
      array.maiorDivisivelporMenor = (array.maiorNumero % num1 === 0)
   }
   //diferenca
   if (array.maiorNumero === num1){
      array.diferenca = (array.maiorNumero - num2)
   }else{
      array.diferenca = (array.maiorNumero - num1)
   }
   return array
}

// Exercício 10

function segundoMaiorEMenor(array) {
   let maiorNumero = array[0]
   for ( let i = 0; i <= array.length; i++){
      if (array[i] > maiorNumero){
         maiorNumero = array[i]
      }
   }

   let segundoMaiorNumero = maiorNumero
   for ( let i = 0; i <= array.length; i++){
      if (array[i] < maiorNumero && array[i] > array[i+1] ){
         segundoMaiorNumero = array[i]
      }
   }

   let menorNumero = array[0]
   for ( let i = 0; i <= array.length; i++){
      if (array[i] < menorNumero){
         menorNumero = array[i]
      }
   }

   let segundoMenorNumero = maiorNumero
   for ( let i = 0; i <= array.length; i++){
      if (array[i] > menorNumero && array[i] < array[i+1] && array[i] < segundoMenorNumero ){
         segundoMenorNumero = array[i]
      }
   }
   return [segundoMaiorNumero,segundoMenorNumero]
}

//Exercício 11

function ordenaArray(array) {

}

// Exercício 12

function filmeFavorito() {

}

// Exercício 13

function imprimeChamada() {

}

// Exercício 14

function criaRetangulo(lado1, lado2) {

}

// Exercício 15

function anonimizaPessoa(pessoa) {

}

// Exercício 16

const arrayDePessoas = [
   { nome: "Pedro", idade: 20 },
   { nome: "João", idade: 10 },
   { nome: "Paula", idade: 12 },
   { nome: "Artur", idade: 89 }
]

// Exercício 16, letra A

function maioresDe18(arrayDePessoas) {

}

// Exercício 16, letra B

function menoresDe18(arrayDePessoas) {

}

// Exercício 17, letra A

function multiplicaArrayPor2(array) {

}

// Exercício 17, letra B

function multiplicaArrayPor2S(array) {

}

// Exercício 17, letra C

function verificaParidade(array) {

}

// Exercício 18

const pessoas = [
   { nome: "Paula", idade: 12, altura: 1.8 },
   { nome: "João", idade: 20, altura: 1.3 },
   { nome: "Pedro", idade: 15, altura: 1.9 },
   { nome: "Luciano", idade: 22, altura: 1.8 },
   { nome: "Artur", idade: 10, altura: 1.2 },
   { nome: "Soter", idade: 70, altura: 1.9 }
]

//Exercício 18, letra A

function retornaPessoasAutorizadas() {

}


// Exercício 18, letra B

function retornaPessoasNaoAutorizadas() {

}

//Exercício 19

const consultasNome = [
   { nome: "João", dataDaConsulta: "01/10/2021" },
   { nome: "Pedro", dataDaConsulta: "02/07/2021" },
   { nome: "Paula", dataDaConsulta: "03/11/2021" },
   { nome: "Márcia", dataDaConsulta: "04/05/2021" }
]

//Exercício 19, letra A

function ordenaPorNome() {

}

// Exercício 19, letra B

const consultasData = [
   { nome: "João", dataDaConsulta: "01/10/2021" },
   { nome: "Pedro", dataDaConsulta: "02/07/2021" },
   { nome: "Paula", dataDaConsulta: "03/11/2021" },
   { nome: "Márcia", dataDaConsulta: "04/05/2021" }
]

function ordenaPorData() {

}

//Exercício 20

const contas = [
   { cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
   { cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
   { cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
   { cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
   { cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
   { cliente: "Soter", saldoTotal: 1200, compras: [] }
]

function atualizaSaldo() {

}