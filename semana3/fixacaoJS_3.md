~~~Exercícios de Fixação de Javascript - Treino 3
    function calculaNota(ex, p1, p2) {
        
        const media = (1/6)*ex + (2/6)*p1 + (3/6)*p2

        if(media < 6){
            return "D"
        } else if (media < 7.5){
            return "C"
        } else if (media < 9) {
            return "B"
        } else {
            return "A"
        }
    }
~~~