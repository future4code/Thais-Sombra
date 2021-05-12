// Exercícios

// Exercícios de interpretação de código

/* 1. O que o código abaixo está fazendo? Qual o resultado impresso no console?
__________________________________
let valor = 0
for(let i = 0; i < 5; i++) {
  valor += i
}
console.log(valor)
__________________________________
    Resposta: O código realiza uma estrutura de repetição que soma os valores que estão entre 0 e 5, exlcuindo o número 5 da soma ( i > 5)

*/

/* 2. Leia o código abaixo:
_______________________________________________________________

const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
      console.log(numero)
            
    }
}

_______________________________________________________________
a) O que vai ser impresso no console?
    Resposta: Irá imprimir no console apenas os números do array que são maiores que 18.

b) Se eu quisesse acessar o **índice** de cada elemento dessa lista, o `for...of...` é suficiente? Se sim, o que poderia ser usado para fazer isso?
    Resposta: Seria possível acessar o índice com a inclusão do indexOf Exemplo=> console.log(lista.indexOf(numero))

*/

/* 3. Qual seria o resultado impresso no console, se o usuário digitasse o número 4 ?
____________________________________________________________________________
const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
  let linha = ""
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "0"
  }
  console.log(linha)
  quantidadeAtual++
}
____________________________________________________________________________
    Resposta: O código imprimi o valor 0 o mesmo número de vezes correspondente a linha, linha 1 irá ter 0, linha 2 irá ter 00 e etc
*/

// Exercícios de escrita de código

// Exercício 1 - Pet

const start = prompt("Preparado para iniciar o código?\n [ S / N ]").toLowerCase()

switch (start) {
    case 's':
        console.log("Já pega um cafezin que vai demorar um tiquin :3")
        console.log(":::::: Exercício 1 ::::::")
        const qtdPets = Number(prompt("Ex.01 - Pets\nInforme a quantidade de pets que você tem:"))

        let i = 1
        let petNameList = []
        let petNameConsole = []
        if (qtdPets === 0) {
            console.log("Que pena! Então você pode adotar um pet! Várias ongs tem bichinhos que precisam de um lar!! ")
        } else if (qtdPets > 0) {
            while (i <= qtdPets) {
                let petName = prompt(`Ex.01 - Pets\nQual o nome do pet de número ${i}?`)
                newPetName = `${petName} é o pet nº ${i}`
                petNameConsole.push(newPetName)
                petNameList.push(petName)
                i++
            }
            console.log(petNameList)
            console.log(petNameConsole)
        } else { }


        // Exercício 2 - Array Números

        const originalArray = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

        console.log(":::::: Exercício 2.a ::::::")
        for (let number of originalArray) {
            console.log(number)
        }

        console.log(":::::: Exercício 2.b ::::::")
        for (let number of originalArray) {
            console.log(number / 10)
        }
        console.log(":::::: Exercício 2.c ::::::")
        let newArray = []
        for (let number of originalArray) {
            if (number % 2 === 0) {
                newArray.push(number)
            }
        }
        console.log(newArray)

        console.log(":::::: Exercício 2.d ::::::")
        let newElementArray = []
        for (i = 0; i < originalArray.length; i++) {
            elemento = `O elemento do índex ${i} é: ${originalArray[i]}`
            newElementArray.push(elemento)
        }
        console.log(newElementArray)

        console.log(":::::: Exercício 2.e ::::::")

        function retornarMaiorNumero(array) {
            let maiorNumero = 0
            let menorNumero = array[0]
            for (const numero of array) {
                if (numero > maiorNumero) {
                    maiorNumero = numero
                } else if (numero < menorNumero) {
                    menorNumero = numero
                }
            }
            return `O maior número é ${maiorNumero} e o menor é ${menorNumero}`
        }
        const maiorNumeroDoArray = retornarMaiorNumero(originalArray)
        console.log(maiorNumeroDoArray)

        // Desafios

        console.log(":::::: Desafio 1 ::::::")

        let chosenNumber = Number(prompt("Desafio 1 - Advinhe o número\nJogador nº1, informe um número para o Jogador nº2 advinhar:"))

        console.log("LET'S PLAY A GAME!")
        let chute
        let numeroDeChutes = 0
        while (chute !== chosenNumber) {
            chute = Number(prompt("Desafio 1 - Advinhe o número\nJogador nº2, qual número o Jogador nº1 escolheu?"))
            console.log(`O número chutado foi: ${chute}`)
            if (chute === chosenNumber) {
                console.log("Acertou!!!")
            } else if (chute > chosenNumber) {
                console.log("Errrrrrrou, o número misterioso é menor.")
            } else if (chute < chosenNumber) {
                console.log("Errrrrrrou, o número misterioso é maior.")
            } else {

            }
            numeroDeChutes++
        }
        console.log(`O número de tentativas foi: ${numeroDeChutes}`)


        console.log(":::::: Desafio 2 ::::::")

        let randomNumber = Math.floor((Math.random() * 100) + 1);
        console.log("LET'S PLAY A GAME!")
        let chutePlayer
        let numeroDeChutesPlayer = 0
        while (chutePlayer !== randomNumber) {
            chutePlayer = Number(prompt("Desafio 2 - Advinhe o número\nJogador, qual o número misterioso?"))
            console.log(`O número chutado foi: ${chutePlayer}`)
            if (chutePlayer === randomNumber) {
                console.log("Acertou!!!")
            } else if (chutePlayer > randomNumber) {
                console.log("Errrrrrrou, o número misterioso é menor.")
            } else if (chutePlayer < randomNumber) {
                console.log("Errrrrrrou, o número misterioso é maior.")
            } else {

            }
            numeroDeChutesPlayer++
        }
        console.log(`O número de tentativas foi: ${numeroDeChutesPlayer}`)

        //  Resposta: A alteração foi simples, substitui a inclusão manual do número pelo jogador por uma função, mas foi necessário realizar um pesquisa prévia sobre funções do javascript.
        break
    default:
        console.log("Até a próxima!")
        break
}