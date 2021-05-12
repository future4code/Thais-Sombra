// Exercícios Aula 8

//Exercícios de interpretação de código

// 1. Leia o código abaixo:
/*
__________________________________________________________________________
const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}
__________________________________________________________________________
a) Explique o que o código faz. Qual o teste que ele realiza? 
    Resposta: Recebe um número e verifica se o resto da divisão for igual (===) a 0, o número atendeu a primeira condição e "passou no teste"
b) Para que tipos de números ele imprime no console "Passou no teste"? 
    Resposta: Números pares
c) Para que tipos de números a mensagem é "Não passou no teste"?
    Resposta: Número ímpares
*/

// 2. O código abaixo foi feito por uma pessoa desenvolvedora, contratada para automatizar algumas tarefas de um supermercado:

/*
__________________________________________________________________________
let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)
__________________________________________________________________________

a) Para que serve o código acima?
    Resposta: Ele recebe uma entrada com o nome de uma fruta, caso seja igual a algum dos cases, ele irá retornar com o nome da fruto e o preço descrito no case, caso a fruta escolhida não tenha sido listada no case, irá retornar um preço padrão de R$ 5,00

b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
    Resposta: O preço da fruta Maçã é R$ 2.25 
    
c) Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console se retirássemos o `break` que está logo acima do `default` (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?
    Resposta: Ele irá continuar "rodando" o código e retornar que o preço é R$ 5 que está no default, se retirar o break de Laranja e escolher essa fruta, ele irá retornar o preço da Maçã que ainda tem o break.

*/

// 3. Leia o código abaixo:

/*
______________________________________________________________
const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)
_______________________________________________________________

a) O que a primeira linha está fazendo?
    Resposta: a primeira linha do if compara o valor informado no prompt da const numero e retorna um booleano se for maior ou menor que zero.
b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
    Resposta: 
    Number = 10 -> Retorna: Esse número passou no teste
    Number = -10 -> Não retorna nenhuma mensagem

c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
    Resposta: Haverá um erro referente a variável mensagem, ela foi declarada dentro do if mas não está relacionada a nenhuma ação, o console.log externo chama a variável, mas não tem acesso ao escopo do if, então não irá imprimir nada na tela e apresentará um erro de definição
*/

// Exercícios de escrita de código
/*
// Exercício 1
console.log(':::::: Exercício 01 ::::::')
function avaliarIdadeDirecao(){
    const userAge = Number(prompt('Ex.01 - Direção\nInforme a sua idade:'))
    if (userAge >= 18){
        console.log('Você pode dirigir')
    } else {
        console.log('Você não pode dirigir')
    }
}

avaliarIdadeDirecao()

// Exercício 2
console.log(':::::: Exercício 02 ::::::')

function verificarTurnoAlunoIf(){
    const turnoAluno = prompt('Ex.02 - Turno\nInforme o turno que você estuda:\n[Preencha com M, V ou N]\n[M (matutino) / V (vespertino) / N (noturno)]\n').toLowerCase()
    if (turnoAluno === 'm'){
        console.log('Bom dia!')
    } else if (turnoAluno === 'v'){
        console.log('Boa tarde!')
    } else if (turnoAluno === 'n'){
        console.log('Boa noite!')
    } else {
        console.log('Preencha com M, V ou N')
    }
    
}

verificarTurnoAlunoIf()
// Exercício 3
console.log(':::::: Exercício 03 ::::::')

function verificarTurnoAluno(){
    const turnoAluno = prompt('Ex.03 - Turno\nInforme o turno que você estuda:\n[Preencha com M, V ou N]\n[M (matutino) / V (vespertino) / N (noturno)]\n').toLowerCase()
    switch (turnoAluno){
        case 'm':
            console.log('Bom dia!')
            break
        case 'v':
            console.log('Boa tarde!')
            break
        case 'n':
            console.log('Boa noite!')
            break
        default:
            console.log('Preencha com M, V ou N')
            break
    }
    
}

verificarTurnoAluno()

// Exercício 4
console.log(':::::: Exercício 04 ::::::')

function irAoCinema(){
    const filmeGenero = prompt("Ex.04 - Filme\nEscolha o genêro de filme que deseja assistir:\n[Ação, Comédia, Drama, Fantasia ...]").toLowerCase()
    const filmePrecoIngresso = Number(prompt("Qual o valor do ingresso:"))
    if (filmeGenero === "fantasia" && filmePrecoIngresso < 15) {
        console.log('Bom filme!')
    } else {
        console.log('Escolha outro filme :(')
    }
}

irAoCinema()

// Desafio

console.log(':::::: Desafio 01 ::::::')

function irAoCinemaSnack() {
    const filmeGenero = prompt("Ex.04 - Filme\nEscolha o genêro de filme que deseja assistir:\n[Ação, Comédia, Drama, Fantasia ...]").toLowerCase()
    const filmePrecoIngresso = Number(prompt("Qual o valor do ingresso:"))
    if (filmeGenero === "fantasia" && filmePrecoIngresso < 15) {
        const snack = prompt("Ex.04 - Filme\nQual snack vai te acompanhar durante o filme?")
        if (snack !== "") {
            console.log('Bom filme!')
            console.log(`Aproveite o seu ${snack}`)
        } else {
            console.log('Bom filme!')
        }
    } else {
        console.log('Escolha outro filme :(')
    }
}

irAoCinemaSnack()
*/

console.log(':::::: Desafio 02 ::::::')

const dadosDaCompra = comprarIngressos()
imprimirComprovante(dadosDaCompra)

function comprarIngressos(){
    const arrayCompra = []
    const userName = prompt('Informe o seu nome:')
    const tipoDeJogo = prompt('Infome o tipo de jogo:\n[ IN (internacional) / DO (doméstico) ]').toUpperCase()
    const etapaDoJogo = prompt('Infome a etapa do jogo:\n[ SF (semi-final) / DT (decisão terceiro lugar) / FI (final) ]').toUpperCase()
    const categoria = Number(prompt('Informe a categoria:\n [ 1, 2, 3 ou 4]'))
    const quantidadeIngressos = Number(prompt('Informe quantos ingressos deseja comprar:'))
    const custoUnitario = buscarCustoIngresso(etapaDoJogo, categoria)
    arrayCompra.push(userName,tipoDeJogo,custoUnitario[0],categoria,quantidadeIngressos, custoUnitario[1])
    return arrayCompra
   
}

function imprimirComprovante(arrayCompra){
    const nome = arrayCompra[0]
    const tipoDoJogo = arrayCompra[1]
    const etapa = arrayCompra[2]
    const categoria = arrayCompra[3]
    const qtdIngressos = arrayCompra[4]
    const custo = arrayCompra[5]

    if (tipoDoJogo === "IN"){
        tipo = "Internacional"
    } else if (tipoDoJogo === "DO"){
        tipo = "Nacional"
    } else {

    }

    switch (tipoDoJogo){
        case 'IN':
            let custoTotalIn = (custo*qtdIngressos)/4.1
            let custoIngressoInternacional = custo/4.1
            let comprovanteIN = `
            ---Dados da compra---
            Nome do cliente: ${nome}
            Tipo de jogo: Internacional
            Etapa do jogo: ${etapa}
            Categoria: ${categoria}
            Quantidade de Ingressos: ${qtdIngressos} ingressos
            ---Valores---
            Valor do ingresso: U$ ${custoIngressoInternacional}
            Valor total: U$ ${custoTotalIn}
            `
            console.log(comprovanteIN)
            break
        case 'DO':
            let custoTotalDo = custo*qtdIngressos
            let comprovanteDo = `
            ---Dados da compra---
            Nome do cliente: ${nome}
            Tipo de jogo: Nacional
            Etapa do jogo: ${etapa}
            Categoria: ${categoria}
            Quantidade de Ingressos: ${qtdIngressos} ingressos
            ---Valores---
            Valor do ingresso: R$ ${custo}
            Valor total: R$ ${custoTotalDo}
            `
            console.log(comprovanteDo)
            break
        default:
            break
    }

    
}

function buscarCustoIngresso(etapaDoJogo, categoria){
    switch (etapaDoJogo) {
        case 'SF':
            switch (categoria) {
                case 1:
                    return ['Semifinais', 1320]
                case 2:
                    return ['Semifinais', 880]
                case 3:
                    return ['Semifinais', 550]
                case 4:
                    return ['Semifinais', 220]
                default:
                    break
            }
        case 'DT':
            switch (categoria) {
                case 1:
                    return ['Decisão do 3º lugar', 660]
                case 2:
                    return ['Decisão do 3º lugar', 440]
                case 3:
                    return ['Decisão do 3º lugar', 330]
                case 4:
                    return ['Decisão do 3º lugar', 170]
                default:
                    break
            }
        case 'FI':
            switch (categoria) {
                case 1:
                    return ['Final', 1980]
                case 2:
                    return ['Final', 1320]
                case 3:
                    return ['Final', 880]
                case 4:
                    return ['Final', 330]
                default:
                    break
            }
        default:
            break    
    }

}
