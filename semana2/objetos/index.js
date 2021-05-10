// Semana 2 - Aula 7

// Exercícios de interpretação de código

// 1. Leia o código abaixo
/*

_______________________________________________________________________
const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0])
console.log(filme.elenco[filme.elenco.length - 1])
console.log(filme.transmissoesHoje[2])

_______________________________________________________________________
a) O que vai ser impresso no console?
    Resposta:

console.log(filme.elenco[0]) -> Matheus Nachtergaele
console.log(filme.elenco[filme.elenco.length - 1]) -> Virginia Cavendish
console.log(filme.transmissoesHoje[2]) -> {canal: "Globo", horario: "14h"}

*/

// 2. Leia o código abaixo
/*
_____________________________________________________________________

const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a","o")}

console.log(cachorro)
console.log(gato)
console.log(tartaruga)

_____________________________________________________________________

a) O que vai ser impresso no console?
    Resposta:  
    {nome: "Juca", idade: 3, raca: "SRD"}
    {nome: "Juba", idade: 3, raca: "SRD"}
    {nome: "Jubo", idade: 3, raca: "SRD"}

b) O que faz a sintaxe dos três pontos antes do nome de um objeto?
    Resposta: Os "..." significam que o objeto ou array será copiado, é o spread/espalhamento
*/

// 3. Leia o código abaixo
/*
________________________________________________
function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))
________________________________________________

a) O que vai ser impresso no console?
b) Explique o valor impresso no console. Você sabe por que isso aconteceu?
    Resposta:
    false -> Booleano referente ao backender
    undefined -> Não existe a propriedade altura
*/

// Exercícios de escrita de código

// 1. Resolva os passos a seguir:
/*
a) Crie um objeto. Ele deve conter duas propriedades: nome (string) e apelidos (um array que sempre terá exatamente três apelidos). Depois, escreva uma função que recebe como entrada um objeto e imprime uma mensagem no modelo abaixo:

// Exemplo de entrada
const pessoa = {
   nome: "Amanda", 
   apelidos: ["Amandinha", "Mandinha", "Mandi"]
}

// Exemplo de saída
"Eu sou Amanda, mas pode me chamar de: Amandinha, Mandinha ou Mandi"
*/

const pessoa = {
	nome: "Emanuely", 
	apelidos: ["Manu", "Ma", "Nusca"]
 }

 function chamarNome(pessoa){
	console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]} ou ${pessoa.apelidos[2]}`)
	
 }

chamarNome(pessoa)

// b) Agora, usando o operador spread, crie um novo objeto mantendo o valor da propriedade nome, mas com uma nova lista de três apelidos. Depois, chame a função feita no item anterior passando como argumento o novo objeto

const outraPessoa = {
	...pessoa,
	apelidos: ["Mani", "Manuela", "Nu"]
}

chamarNome(outraPessoa)

// 2. Resolva os passos a seguir:

//a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão. 

const objetoHumano = {
	nome: 'Floki',
	idade: 20,
	profissao: 'Guerreiro'
}
const segundoObjetoHumano = {
	... objetoHumano
}

segundoObjetoHumano.nome = 'Ragnar'
segundoObjetoHumano.idade = 30
segundoObjetoHumano.profissao = 'Agricultor'

//b) Escreva uma função que receba esses objetos e retorne um array com as seguintes informações:

function retornarArrayHumano (objeto){
	const array = []
	array.push(objetoHumano.nome, objetoHumano.nome.length,objetoHumano.idade,objetoHumano.profissao, objetoHumano.profissao.length)
	console.log(array)
}

retornarArrayHumano(objetoHumano)
retornarArrayHumano(segundoObjetoHumano)

// 3. Resolva os passos a seguir:

//a) Crie uma variável de escopo global que guarde um array vazio chamada carrinho

const carrinho = [
	
]
	
const fruta1 = {
	nome: 'Uva',
	disponibilidade: true 
}

const fruta2 = {
	nome: 'Pitaya',
	disponibilidade: true 
}

const fruta3 = {
	nome: 'Melão',
	disponibilidade: true 
}

function comprarFrutas (fruta1,fruta2,fruta3){
	carrinho.push(fruta1)
	carrinho.push(fruta2)
	carrinho.push(fruta3)
	return carrinho
}

console.log(comprarFrutas(fruta1, fruta2, fruta3))

// DESAFIO

// 1. Crie um função que pergunte ao usuário seu nome, sua idade e sua profissão e depois imprima no console um objeto com essas propriedades. Depois de imprimir o novo objeto, imprima também o tipo dele para garantir que é um objeto.

function userDataQuestions (){
	const nome = prompt('Informe o seu nome:')
	const idade = Number(prompt('Informe a sua idade:'))
	const profissao = prompt('Informe a sua profissão:')
}
