// Exemplos

// Exercício 0A

function soma(num1, num2) {
   // implemente sua lógica aqui
   return num1 + num2
}

// Exercício 0B

function imprimeMensagem() {
   // implemente sua lógica aqui
   const mensagem = prompt('Digite uma mensagem!')

   console.log(mensagem)
}

// Exercícios

//Exercício 1

function calculaAreaRetangulo() {
   const altura = Number(prompt("(Ex.1 - Cálculo área do retângulo)\nInforme a altura:"))
   const largura = Number(prompt("(Ex.1 - Cálculo área do retângulo)\nInforme a largura:"))
   console.log(altura * largura)
}

//Exercício 2

function imprimeIdade() {
   const anoAtual = Number(prompt("(Ex.2 - Idade usuário)\nInforme em qual ano estamos:"))
   const anoNascimento = Number(prompt("(Ex.2 - Idade usuário)\nInforme em qual ano você nasceu:"))
   console.log(anoAtual - anoNascimento)
}

//Exercício 3

function calculaIMC(peso, altura) {
   return (peso/(altura**2))

}

//Exercício 4

function imprimeInformacoesUsuario() {
   const nome = prompt("(Ex.4 - Nome e IMC)\nInforme seu nome:")
   const idade = prompt("(Ex.4 - Nome e IMC)\nInforme sua idade:")
   const email = prompt("(Ex.4 - IMC)\nInforme o seu e-mail:")
   
   console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

//Exercício 5

function imprimeTresCoresFavoritas() {
   const cor1 = prompt("(Ex.6 - Array Cores)\nInforme a primeira cor:")
   const cor2 = prompt("(Ex.6 - Array Cores)\nInforme a segunda cor:")
   const cor3 = prompt("(Ex.6 - Array Cores)\nInforme a terceira cor:")
   const arrayCores = []
   arrayCores.push(cor1,cor2,cor3)
   console.log(arrayCores)
}

//Exercício 6

function retornaStringEmMaiuscula(string) {
   return string.toUpperCase()
}

//Exercício 7

function calculaIngressosEspetaculo(custo, valorIngresso) {
   return (custo / valorIngresso)
}

// Exercício 8

function checaStringsMesmoTamanho(string1, string2) {
   return (string1.length === string2.length)
}

// Exercício 9

function retornaPrimeiroElemento(array) {
   return array[0]   
}

// Exercício 10

function retornaUltimoElemento(array) {
   return array[array.length -1]  
}

//Exercício 11

function trocaPrimeiroEUltimo(array) {
   const primeiro = array[0]
   const ultimo = array[array.length-1]
   array[0] = ultimo
   array[array.length-1] = primeiro
   return array
}

// Exercício 12

function checaIgualdadeDesconsiderandoCase(string1, string2) {
   return string1.toUpperCase() === string2.toUpperCase()
}

// Exercício 13

function checaRenovacaoRG() {
   const anoAtualEx13 = Number(prompt("(Ex.13 - Renovar RG)\nInforme o ano atual:"))
   const anoDeNascimentoEx13 = Number(prompt("(Ex.13 - Renovar RG)\nInforme o seu ano de nascimento:"))
   const anoDeEmissaoEx13 = Number(prompt("(Ex.13 - Renovar RG)\nInforme o ano de emissão do seu RG:"))
   const menorQue20 = (((anoAtualEx13 - anoDeNascimentoEx13) <= 20) && ((anoAtualEx13 - anoDeEmissaoEx13) >= 5))
    
   const menorQue50 = ((anoAtualEx13 - anoDeNascimentoEx13) < 50) && ((anoAtualEx13 - anoDeEmissaoEx13) >= 10)
    
   const maiorQue50 = ((anoAtualEx13 - anoDeNascimentoEx13) >= 50) && ((anoAtualEx13 - anoDeEmissaoEx13) >= 15)
   
       console.log(menorQue20 || menorQue50 || maiorQue50)
}

// Exercício 14

function checaAnoBissexto(ano) {
   const bissexto = (ano % 4 == 0) && (ano % 100 != 0) || (ano % 400 == 0)
   return bissexto
}

// Exercício 15

function checaValidadeInscricaoLabenu() {
   const maior18 = prompt("Você tem mais de 18 anos?") 
   const formacao = prompt("Você possui ensino médio completo?")
   const disponibilidade = prompt("Você possui disponibilidade exclusiva durante os horários do curso?")
   return((maior18.toUpperCase()==="SIM")&&(formacao.toUpperCase()==="SIM")&&(disponibilidade.toUpperCase()==="SIM"))

}