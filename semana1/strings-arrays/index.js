/* Exercícios - Aula 5 - Strings e Arrays*/

//Exercícios de interpretação de código

/* 
1.Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.

let array
console.log('a. ', array)
    //Resposta: a. Undefined, pois não teve definição do array

array = null
console.log('b. ', array)
    //Resposta: b. null, o array foi definido como null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)
    //Resposta: c. 10, pois o Array possui 11 informações 

let i = 0
console.log('d. ', array[i])
    //Resposta: d. 3, irá retornar a informação que está na posição i = 0 do Array

array[i+1] = 19
console.log('e. ', array)
    //Resposta: e. [3, 19 ...], irá apresentar todos os itens do Array e substituir
    // o item que está na posição [i = 0 + 1, logo o item que está na segunda posição] por 19

const valor = array[i+6]
console.log('f. ', valor)
    //Resposta: f. 9, retorna o item que está na posição 7 ( ou posição 6 considerando que o Array começa a contagem no 0)
*/

/* 2. Leia o código abaixo com atenção

const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)

Qual será o valor impresso no console se a entrada do usuário for:
 "Subi num ônibus em Marrocos"?
    //Resposta: SUBI NUM ÔNIBUS EM MIRROCOS 27
    //Altera a frase para caixa alta e substitui a letra A maiuscula por 
    //I maiusculo, e o número 27 é referente ao comprimento de caracteres da frase, 
    //considerando também os espaços entre as palavras
*/

// Exercícios de escrita de código

/* 1. Faça um programa que pergunte ao usuário seu nome e seu e-mail. 
Em seguida, imprima na tela a seguinte mensagem: */

const nomeDoUsuario = prompt("Querido User, preencha o campo abaixo com o seu nome:")
const emailDoUsuario = prompt("Agora informe o seu e-mail:")

const frase = `O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeDoUsuario}!`
console.log(frase)

/* Faça um programa que contenha um array com 5 das suas comidas preferidas, 
armazenado em uma variável. Em seguida, siga os passos:*/

let comida = ["Pizza", "Sashimi", "Guioza", "Missoshiro", "Purê de batata"]

//a) Imprima na tela o array completo

console.log(comida)

//b) Imprima na tela a mensagem "Essas são as minhas comidas preferidas: ", 
//seguida por cada uma das comidas, **uma embaixo da outra**.
const i = 0
console.log(`Essas são as minhas comidas preferidas: ${comida[i]}`)
console.log(`Essas são as minhas comidas preferidas: ${comida[i+1]}`)
console.log(`Essas são as minhas comidas preferidas: ${comida[i+2]}`)
console.log(`Essas são as minhas comidas preferidas: ${comida[i+3]}`)
console.log(`Essas são as minhas comidas preferidas: ${comida[i+4]}`)
//c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. 

const comidaUser = prompt (`${nomeDoUsuario}, qual a sua comida preferida?`)

//Troque a segunda comida da sua lista pela inserida pelo usuário. 

comida.splice(1,1,comidaUser)

//Imprima na tela a nova lista

console.log(comida)

/* 3. Faça um programa, seguindo os passos: */
//a) Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`

let listaDeTarefas = []

//b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, 
//uma por uma, no array

const tarefaUm = prompt ("Informe a primeira tarefa do dia:")
    listaDeTarefas.push(tarefaUm)
const tarefaDois = prompt ("Informe a segunda tarefa do dia:")
    listaDeTarefas.push(tarefaDois)
const tarefaTres = prompt ("Informe a terceira tarefa do dia:")
    listaDeTarefas.push(tarefaTres)

//c) Imprima o array na tela

console.log(listaDeTarefas)

//d) Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou:
// 0, 1 ou 2 

const removerTarefa = Number(prompt ("Informe o número da tarefa a ser excluída 1, 2 ou 3:"))

//e) Remova da lista o item de índice que o usuário escolheu.

listaDeTarefas.splice(removerTarefa-1, 1)

//f) Imprima o array na tela

console.log(listaDeTarefas)

/* CHALLENGE */

/* 1.Receba uma frase e retorne um array onde cada elemento é uma das palavras 
da frase, ignorando os espaços */

const minhaFrase = prompt("Escreva uma frase:")
const splits = minhaFrase.split(" ")

console.log(splits);

/* 2. Dado o array ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"], 
faça um programa que acha o índice da palavra Abacaxi e imprime tanto 
o índice quanto o tamanho do array */

const frutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]

const indice = frutas.indexOf("Abacaxi")
const qtdString = frutas.length
console.log(`Abacaxi está no índice ${indice}, ou seja, na posição ${indice + 1 } de um total de ${qtdString} itens`)
