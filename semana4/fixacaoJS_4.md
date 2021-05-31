``` Exercício javascript treino 4

function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
   let ocorrencia = arrayDeNumeros.indexOf(numeroEscolhido)
    let quantidadeAparece = 0

    switch (ocorrencia){
        case -1:
            return "Número não encontrado"
        default:
            for (let number of arrayDeNumeros){
                if (number === numeroEscolhido){
                    quantidadeAparece++
                }
            }
    return `O número ${numeroEscolhido} aparece ${quantidadeAparece}x`
    }
}

```