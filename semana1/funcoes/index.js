// Aula 6 - Funções

//Exercícios de interpretação de código

/* 1.Leia o código abaixo

function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))


a) O que vai ser impresso no console?
    //Resposta: Irá realizar a multiplicação dos números que estão entre () conforme a função, ou seja 2*5 = 10 e 10*5 = 50

b) O que aconteceria se retirasse os dois `console.log` e simplesmente invocasse a função `minhaFuncao(2)` e `minhaFuncao(10)`? O que apareceria no console?
    //Resposta: O console não iria imprimir o resultado, mas a função seria executada da mesma forma
*/

/* 2.Leia o código abaixo

let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)

a. Explique o que essa função faz e qual é sua utilidade
    //Resposta: A função outraFuncao coloca em caixa baixa o texto inserido pelo user no prompt textoDoUsuario e após isso verifica que a palavra cenoura está contida no texto, retornando um true ou false

b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
     i.   `Eu gosto de cenoura` //Resposta: true
     ii.  `CENOURA é bom pra vista` //Resposta: true
     iii. `Cenouras crescem na terra` //Resposta: true (cenoura está dentro de cenouras)

*/

// Exercícios de escrita de código

// 1.Escreva as funções explicadas abaixo:

//a) A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas informações sobre você, como: "Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante."

console.log ("::::: Exercício 1a :::::")

function minhaFuncao() {
	console.log("Eu sou Thaís, tenho 29 anos, moro Barueri e sou estudante")
}

minhaFuncao()

//b) Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: o nome (string), a idade (number), a cidade (string) e uma profissão (string). Ela deve retornar uma string que unifique todas as informações da pessoa em uma só mensagem com o template:
console.log ("::::: Exercício 1b :::::")

function novaFuncao (){
    console.log (`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}`)
}

const nome = prompt ("Informe o seu nome:")
const idade = Number(prompt (` ${nome}, informe a sua idade:`))
const cidade = prompt (` ${nome}, em qual cidade você mora?`)
const profissao = prompt (` ${nome}, informe com o que você trabalha:`)

novaFuncao(nome,idade,cidade,profissao)

//2. Escreva as funções explicadas abaixo:

//a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e retorne o resultado. Invoque a função e imprima no console o resultado.
console.log ("::::: Exercício 2a :::::")

function somaNumeros(a,b){
    const soma = a + b
    return soma    
}

const a = Number(prompt("Informe o primeiro número para a somatória:"))
const b = Number(prompt("Informe o segundo número para a somatória:"))

const somaAB = somaNumeros(a,b)
console.log(`A soma de ${a} e ${b} é igual a ${somaAB}`)

//b) Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é **maior ou igual** ao segundo.
console.log ("::::: Exercício 2b :::::")

function comparaNumeros(x,y){
    const compara = x >= y
    return compara    
}

const x = Number(prompt("Informe o primeiro número para comparativo:"))
const y = Number(prompt("Informe o segundo número para comparativo:"))

const comparaXY = comparaNumeros(x,y)
console.log(`O ${x} é maior que ${y} ? ${comparaXY}`)

//c) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não
console.log ("::::: Exercício 2c :::::")
function parOuImpar(i){
    const parImpar = i % 2 === 0 
    return parImpar    
}

const i = Number(prompt("(Par ou Ímpar) Informe um número:"))

const parImparI = parOuImpar(i)
console.log(`O ${i} é um número par? ${parImparI}`)

//d) Faça uma função que recebe uma mensagem (`string`) como parâmetro e imprima o tamanho dessa mensagem, juntamente com uma versão dela em letras maiúsculas.
console.log ("::::: Exercício 2d :::::")

function mensagemCaixaAlta(mensagem){
    console.log(`A mensagem ${mensagem.toUpperCase()} possui comprimento de ${mensagem.length} caracteres`)
}

const mensagem = prompt("Escreve uma frase para conversão:")
mensagemCaixaAlta(mensagem)


//3. Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão). Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores inputados pelo usuário sendo o argumento. Por fim, mostre no console o resultado das operações:
console.log ("::::: Exercício 3a :::::")
function multiplicacao(q,w){
    return multiplicaQW = q * w
}

function divisao(q,w) {
    return dividiQW = q / w
}

function soma(q,w){
    return somaQW = q + w
}

function subtracao(q,w){
    return subtraiQW = q - w
}

const q = Number(prompt("Insira o primeiro número para realizar as operações básicas:"))
const w = Number(prompt("Insira o segundo número para realizar as operações básicas:"))

console.log(`Número inseridos: ${q} e ${w}`)
console.log(`Soma: ${soma(q,w)}`)
console.log(`Diferença: ${subtracao(q,w)}`)
console.log(`Multiplicação: ${multiplicacao(q,w)}`)
console.log(`Divisão: ${divisao(q,w)}`)

//  CHALLENGE

// 1. Funções são trechos de códigos como quaisquer outros mas que podemos acessá-los mais de uma vez ao longo do código através de invocações/chamadas. Então, funções podem chamar/invocar outras funções também. Sua tarefa é escrever duas funções
console.log ("::::: Desafio 1a :::::")
//a) Escreva uma *arrow function* que recebe um parâmetro e imprime no console esse parâmetro

const parametroInserido = Number(prompt("(Arrow) Informe um número para impressão no console:"))

const imprimeParametroArrow = (parametro) =>{
    console.log(parametro)
}

function imprimeParametroFunction(parametro){
    console.log(parametro)
}

const imprimeParametroExpressao = function(parametro){
    console.log(parametro)
}

imprimeParametroArrow(`Arrow: ${parametroInserido}`)
imprimeParametroFunction(`Function: ${parametroInserido}`)
imprimeParametroExpressao(`Expressão: ${parametroInserido}`)

//b) Escreva outra *arrow function* que recebe dois valores como parâmetros mas **nenhum retorno.** Faça a soma entre esses valores e chame a sua primeira função mandando este resultado da soma como entrada para imprimi-lo

console.log ("::::: Desafio 1b :::::")

const parametroA = Number(prompt("(Arrow) Informe o primeiro número para somatória:"))
const parametroB = Number(prompt("(Arrow) Informe o segundo número para somatória:"))

const imprimeSomaArrow = (parametroA, parametroB) =>{
    const parametro = parametroA + parametroB
    imprimeParametroArrow(`Resultado da soma: ${parametroA} + ${parametroB} = ${parametro}`)
}

imprimeSomaArrow(parametroA,parametroB)

// 2. Faça uma função que execute o teorema de Pitágoras, recebendo dois catetos e calculando o valor da hipotenusa. Retorne este valor, invoque a função e imprima o resultado no console. 
console.log ("::::: Desafio 2 :::::")

const catetoA = Number(prompt("(Pitágoras) Informe o cateto oposto:"))
const catetoB = Number(prompt("(Arrow) Informe o cateto adjacente:"))

function teoremaPitágoras(cA,cB){
    return hipotenusa = ((cA**2) + (cB**2))**0.5
}

console.log(`Cateto oposto: ${catetoA}`)
console.log(`Cateto adjacente: ${catetoB}`)
console.log(`Hipotenusa: ${teoremaPitágoras(catetoA,catetoB)}`)