/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
console.log("Bem vindo ao jogo de Blackjack!")

let game = confirm("Quer iniciar uma nova rodada?")

if (game) {
   let userCards = [comprarCarta(), comprarCarta()]
   let dealerCards = [comprarCarta(), comprarCarta()]


   let userScore = userCards[0].valor + userCards[1].valor
   let dealerScore = dealerCards[0].valor + dealerCards[1].valor

   console.log(`Usuário - cartas: ${userCards[0].texto} ${userCards[1].texto} - pontuação ${userScore}`)
   console.log(`Computador - cartas: ${dealerCards[0].texto} ${dealerCards[1].texto} - pontuação ${dealerScore}`)

   if (userScore > dealerScore) {
      console.log("O usuário ganhou")
   } else if (dealerScore > userScore) {
      console.log("O computador ganhou!")
   } else if (userScore === dealerScore) {
      console.log("Empate")
   }

} else {
   console.log("O jogo acabou!")
}