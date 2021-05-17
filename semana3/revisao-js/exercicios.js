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
   let newArray = [...array]
   for (let j = 0; j < newArray.length - 1; j++) {
       for (let i = 0; i < newArray.length - 1; i++) {
           if (newArray[i] > newArray[i + 1]) {
               let temporario = newArray[i]
               newArray[i] = newArray[i + 1]
               newArray[i + 1] = temporario
           }
       }
   }
   return newArray
}

// Exercício 12

function filmeFavorito() {
   let filmeAstro = 
   {
      nome: '' , 
      ano: 0 , 
      diretor: '',
      atores: '' 
   }

   const nomeFilme = 'O Diabo Veste Prada'
   const ano = 2006
   const diretor = 'David Frankel'
   const atores = ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']

   filmeAstro.nome = nomeFilme
   filmeAstro.ano = ano
   filmeAstro.diretor = diretor
   filmeAstro.atores = atores

   return filmeAstro
}

// Exercício 13

function imprimeChamada() {
   const filmeAstro = {
      nome: 'O Diabo Veste Prada',
      ano: 2006,
      diretor: 'David Frankel',
      atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']
    }
      frase = `Venha assistir ao filme ${filmeAstro.nome}, de ${filmeAstro.ano}, dirigido por ${filmeAstro.diretor} e estrelado por ${filmeAstro.atores[0]}, ${filmeAstro.atores[1]}, ${filmeAstro.atores[2]}, ${filmeAstro.atores[3]}.`
   
      return frase
}

// Exercício 14

function criaRetangulo(lado1, lado2) {
   let retangulo = {
      largura: lado1,
      altura: lado2,
      perimetro: 2*(lado1 + lado2),
      area: lado1*lado2
  }
  return retangulo
}

// Exercício 15

function anonimizaPessoa(pessoa) {
   pessoaAnonima = {...pessoa}
   pessoaAnonima.nome = "ANÔNIMO"
   return pessoaAnonima
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
   const adultos = arrayDePessoas.filter((pessoa) =>{
      return pessoa.idade >= 18
   })
   return adultos
}

// Exercício 16, letra B

function menoresDe18(arrayDePessoas) {
   const naoAdultos = arrayDePessoas.filter((pessoa) =>{
      return pessoa.idade <= 18
   })
   return naoAdultos
}

// Exercício 17, letra A

function multiplicaArrayPor2(array) {
   let newArray = []
   for (let i = 0; i < array.length; i++) {
      newArray.push(array[i] * 2)
   }
   return newArray
}

// Exercício 17, letra B

function multiplicaArrayPor2S(array) {
   let newArray = []
   for (let i = 0; i < array.length; i++) {
      newArray.push((array[i] * 2).toString())
   }
   return newArray
}

// Exercício 17, letra C

function verificaParidade(array) {
   let newArray = []
   for (let i = 0; i < array.length; i++){
      if (array[i] % 2 === 0) {
         newArray.push(`${array[i]} é par`)
      } else{
         newArray.push(`${array[i]} é ímpar`)
      }
   }
   return newArray
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
   const pessoas = [
      { nome: "Paula", idade: 12, altura: 1.8},
      { nome: "João", idade: 20, altura: 1.3},
      { nome: "Pedro", idade: 15, altura: 1.9},
      { nome: "Luciano", idade: 22, altura: 1.8},
      { nome: "Artur", idade: 10, altura: 1.2},
      { nome: "Soter", idade: 70, altura: 1.9}
   ]
   const permitidosNoBrinquedo = pessoas.filter((pessoa) =>{
      return pessoa.idade >= 14 && pessoa.idade <= 60 && pessoa.altura >= 1.5
   })
   return permitidosNoBrinquedo
}


// Exercício 18, letra B

function retornaPessoasNaoAutorizadas() {
   const pessoas = [
      { nome: "Paula", idade: 12, altura: 1.8},
      { nome: "João", idade: 20, altura: 1.3},
      { nome: "Pedro", idade: 15, altura: 1.9},
      { nome: "Luciano", idade: 22, altura: 1.8},
      { nome: "Artur", idade: 10, altura: 1.2},
      { nome: "Soter", idade: 70, altura: 1.9}
   ]
   const naoPermitidosNoBrinquedo = pessoas.filter((pessoa) =>{
      return pessoa.idade < 14 || pessoa.idade > 60 || pessoa.altura < 1.5
   })
   return naoPermitidosNoBrinquedo
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
   consultasNome.sort(function (a, b) {
      return a.nome < b.nome ? -1 : a.nome > b.nome ? 1 : 0;    
    })
    return consultasNome.sort()
}

// Exercício 19, letra B

const consultasData = [
   { nome: "João", dataDaConsulta: "01/10/2021" },
   { nome: "Pedro", dataDaConsulta: "02/07/2021" },
   { nome: "Paula", dataDaConsulta: "03/11/2021" },
   { nome: "Márcia", dataDaConsulta: "04/05/2021" }
]

function ordenaPorData() {
   //consultasData.sort(function (x, y) {
     // let c = new Date(x.dataDaConsulta)
     // let d = new Date(y.dataDaConsulta)  
     // return c - d
   // })
   // return consultasData.sort()
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
   const saldoClientes = contas.map((conta)=>{
      return {...conta, saldoTotal: conta.saldoTotal}
   })
}