~~~Exercício fixação Javascript - Treino 5
function criarArrayNomesAnimais() {
    const animais = [
      { nome: "Cachorro", classificacao: "mamífero" },
      { nome: "Papagaio", classificacao: "ave" },
      { nome: "Gato", classificacao: "mamífero" },
      { nome: "Carpa", classificacao: "peixe" },
      { nome: "Pomba", classificacao: "ave" }
    ]
    const nomeAnimais = animais.map((animal, indice, array) => {
        return animal.nome
    })
    return nomeAnimais
}
~~~