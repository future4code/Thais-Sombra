// Interpretação de código

/* Exercício 1
Analise o programa abaixo e diga o que será impresso no console,
SEM EXECUTAR o programa.
_______________________
    let a = 10
    let b = 10

    console.log(b)

    b = 5
    console.log(a, b)
_______________________

    Resposta: Irá imprimir duas linhas, a primeira linha
    com o primeiro dado inserido na variável b, no caso 10 e 
    a segunda linha com as variáveis a e b respectivamente, mas
    a variável b recebeu um novo valor (5), então a segunda linha
    irá imprimir 10 5, resumindo:
    ____________
        10
        10 5
    ____________

*/

/* Exercício 2
Analise o programa abaixo e diga o que será impresso no console,
SEM EXECUTAR o programa.
_______________________
    let a = 10
    let b = 20
    c = a
    b = c
    a = b

    console.log(a, b, c)
_______________________
    Resposta: 
    let a = 10
    let b = 20
    c = a -> a = 10 logo c = 10
    b = c -> c = 10 logo b = 10
    a = b -> b = 10 logo a = 10

    console.log (a, b, c) = console.log(10, 10, 10)
    _____________
        10 10 10
    _____________
 
*/

/* Exercício 3
Analise o programa abaixo, entenda o que ele faz e sugira melhores 
nomes para as variáveis. Lembre-se que devemos escolher nomes 
significativos, usar o padrão camelCase. Alem disso, os nomes 
não podem começar com números ou caracteres especiais.
___________________________________________________________
let p = prompt("Quantas horas você trabalha por dia?")
let t = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${t/p} por hora`)
___________________________________________________________
    Resposta:
    Substituir p por horasDiariasDeTrabalho
    Substituir t por salarioDiario
    _________________________________________________________
    let horasDiariasDeTrabalho = prompt("Quantas horas você trabalha por dia?")
    let salarioDiario = prompt("Quanto você recebe por dia?")
    alert(`Voce recebe ${salarioDiario/horasDiariasDeTrabalho} por hora`)
    _________________________________________________________
*/

// Escrita de código

/*Exercício 1
Construa um programa, seguindo os seguintes passos:*/

/*a) Declare uma variável para armazenar um nome, sem atribuir um 
valor.*/
let nome

/*b) Declare uma variável para armazenar uma idade, sem atribuir um 
valor.*/
let idade

/*c) Imprima na tela o tipo dessas variáveis que acabou de criar, 
usando o comando `typeof`.*/
console.log ("O tipo da variável nome é:", typeof nome)
console.log ("O tipo da variável idade é:", typeof idade)

/*d) Reflita: por que esse tipo foi impresso? Escreva a resposta em 
um comentário de código.

    Resposta: A resposta é undefined, como não atribui nenhum valor a variável
    o js não consegue identificar se é uma string, number e etc.
*/

/*e) Pergunte ao usuário seu nome e sua idade, atribuindo esses dois 
valores às variáveis que acabou de criar.*/

nome = prompt("Prezado User, preencha o campo abaixo com o seu nome:")
idade = prompt("Agora uma pergunta pessoal, qual a sua idade?")

/* f) Novamente, imprima na tela o tipo dessas variáveis. 
O que você notou? Escreva em um comentário de código.*/
console.log ("O tipo da variável nome é:", typeof nome)
console.log ("O tipo da variável idade é:", typeof idade)
    /* Resposta: o typeof de ambas retornou como string, o prompt
    sempre retorna as informações recebidas como esse tipo.*/

/*g) Para finalizar, imprima na tela a mensagem: "Olá nome, você 
tem idade anos". Onde nome e idade são os valores que o usuário 
inseriu*/

console.log("Olá", nome, ", você tem", idade, "anos")

/*Exercício 2
Escreva um programa que faça 3 perguntas de Sim ou Não, 
armazenado em uma variável. Por exemplo: "Você está usando 
uma roupa azul hoje?". Depois, siga os passos:
a) Crie três novas variáveis, contendo as respostas
b) Imprima na tela todas as perguntas seguidas por suas 
respectivas respostas. Por exemplo:
Você está usando uma roupa azul hoje? - SIM*/

let roupaPreta = prompt("Perguntinhas de Sim ou Não para aquecer o cérebro!! Primeira! Você está usando uma peça de roupa preta?")
let estudanteLabenu = prompt("Segunda! Você é um estudante da Labenu?")
let feraEmGit = prompt("Última, mas não menos importante! Você já está fera em GIT??? (Sinceridade!)")

console.log("Está usando uma peça de roupa preta?", roupaPreta)
console.log("Você é um estudante Labenu?", estudanteLabenu)
console.log("Você já está fera em GIT?", feraEmGit)

/*Exercício 3
Dadas duas variáveis a e b com valores diferentes, troque o 
conteúdo delas sem atribuir diretamente os valores!*/

// valores iniciais:
let a = 10
let b = 25
console.log(a,b)
let c = b
b = a
a = c
console.log(a,b)
/* valores finais:
a = 25
b = 10*/
