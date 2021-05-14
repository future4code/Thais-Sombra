let pontinhos = ("::::::::::::::::::::::::::::::")
console.log(pontinhos)
console.log("Welcome to the blackjack game!")
console.log(pontinhos)

let newMatch = confirm(`${pontinhos}${pontinhos}

Welcome to the blackjack game!

Do you want to start a new match?

${pontinhos}${pontinhos}`
)

if (newMatch) {

   // Sorteia cartas
   let userCards = darCartasUser()
   let dealerCards = darCartasDealer()

   function darCartasUser(){
      let cartasUser = [comprarCarta(), comprarCarta()]
      return cartasUser
   }
   
   function darCartasDealer(){
      let cartasDealer = [comprarCarta(), comprarCarta()]
      return cartasDealer
   }
      
   // Verifica se repetiu A A
   while ((userCards[0].valor === 11 && userCards[1].valor === 11) || (dealerCards[0].valor === 11 && dealerCards[1].valor === 11)) {
      console.log("Two Aces!! Shuffle cards... ")
      darCartasUser()
      darCartasDealer()
   }

   // Função para array de cartas 
   let cartas = userCards.map((card) => {
      return card.texto
   })

   let cardsDealer = dealerCards.map((card) => {
      return card.texto
   })

   // Função cálculo de pontos
   function score(handCards) {
      return handCards.reduce((a, b) => a + b.valor, 0)
   }

   dealerScore = score(userCards) 
   userScore = score(userCards)

   // Verifica se usuário já chegou com 21 pontos
   if (userScore === 21) {
      //alert((`   User hand: ${cartas} points: ${score(userCards)}\nDealer hand: ${dealerCards[0].texto}\nUser victory!!!`))
     vencedor(userScore, dealerScore)

   } else {

      // Questiona se user quer comprar nova carta
      let hit = confirm(`:::::::::::: Blackjack Labevegas :::::::::::\n\n    User hand: ${cartas} points: ${score(userCards)}\n\nDealer hand: ${dealerCards[0].texto}\n\n:::::::::::: Hit? ::::::::::::`)

      // Loop para compra de carta do user
      while (hit) {
         userCards.push(comprarCarta())

         cartas = userCards.map((card) => {
            return card.texto
         })

         dealerScore = score(dealerCards)

         let userScore = score(userCards)

         if (userScore < 21) {

            hit = confirm(`:::::::::::: Blackjack Labevegas :::::::::::\n\n  User hand: ${cartas} points: ${userScore}\n\nDealer hand: ${dealerCards[0].texto}\n\n:::::::::::: Hit? ::::::::::::`)

         } else if (userScore === 21) {

            hit = false

         }else {

            hit = false
         }
      }

      // Função para array de cartas 
      cartas = userCards.map((card) => {
         return card.texto
      })

      // Loop para compra de carta do dealer
      userScore = score(userCards)

      while (score(dealerCards) <= 21 && score(dealerCards) < userScore && userScore <= 21) {
         dealerScore = score(dealerCards)

         if (dealerScore < 21 && dealerScore < userScore && userScore <= 21) {

            dealerCards.push(comprarCarta())

         } else if (dealerScore < 21 && dealerScore > userScore && userScore <= 21) {
            
            break

         } else {

            console.log("Outro bug")

         }
      }

      cardsDealer = dealerCards.map((card) => {
         return card.texto
      })

      userScore = score(userCards)

      dealerScore = score(dealerCards)

      vencedor(userScore, dealerScore)
   }

   function vencedor(userScore, dealerScore) {

      let texto = (`:::::::::::: Blackjack Labevegas ::::::::::::\n\n    User hand: ${cartas} points: ${userScore}\n\nDealer hand: ${cardsDealer} points: ${dealerScore}`)

      if (userScore > dealerScore && userScore <= 21 || userScore === 21) {

         alert(`${texto}\n\n:::::::::::: User victory ::::::::::::`)

      } else if (dealerScore > userScore && dealerScore <= 21) {

         alert(`${texto}\n\n:::::::::::: Dealer victory ::::::::::::`)

      } else if ((userScore === dealerScore && dealerScore <= 21) || (userScore > 21 && dealerScore > 21)) {

         alert(`${texto}\n\n:::::::::::: Draw ::::::::::::`)

      } else if (userScore > 21 && dealerScore < 21) {

         alert(`${texto}\n\n:::::::::::: Dealer victory ::::::::::::`)
         
      } else if (userScore < 21 && dealerScore > 21) {
         
         alert(`${texto}\n\n:::::::::::: User victory ::::::::::::`)
         
      } else if (userScore > 21 && dealerScore === 21 || dealerScore === 21){
         
         alert(`${texto}\n\n:::::::::::: Dealer victory ::::::::::::`)
         
      } else {

         alert(`${texto}\n\n:::::::::::: U find a Bug ::::::::::::`)
         
      }
   }

} else {

   console.log("The game is over!")

}