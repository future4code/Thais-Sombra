// Exercícios aula 10 

//Exercícios de interpretação de código

// 1. Leia o código abaixo
/*
a) O que vai ser impresso no console?
    Resposta: Irá percorrer o array de objetos e imprimir uma linha por vez
__________________________________________________________________
const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" }
]

const novoArrayA = usuarios.map((item, index, array) => {
    console.log(item, index, array)
})
__________________________________________________________________
*/
// 2. Leia o código abaixo
/*
a) O que vai ser impresso no console?
    Resposta: Irá percorrer o array de objetos e imprimir um novo array com apenas parâmetros atribuídos a nome
__________________________________________________________________
const usuarios = [
  { nome: "Amanda Rangel", apelido: "Mandi" },
  { nome: "Laís Petra", apelido: "Laura" },
  { nome: "Letícia Chijo", apelido: "Chijo" },
]

const novoArrayB = usuarios.map((item, index, array) => {
   return item.nome
})

console.log(novoArrayB)
__________________________________________________________________
*/
// 3. Leia o código abaixo
/*
a) O que vai ser impresso no console?
    Resposta: Irá percorrer o array de objetos e imprimir as linhas que os parâmetros atribuídos a apelido não sejam igual a Chijo
__________________________________________________________________
const usuarios = [
  { nome: "Amanda Rangel", apelido: "Mandi" },
  { nome: "Laís Petra", apelido: "Laura" },
  { nome: "Letícia Chijo", apelido: "Chijo" },
]

const novoArrayC = usuarios.filter((item, index, array) => {
   return item.apelido !== "Chijo"
})

console.log(novoArrayC)
__________________________________________________________________
*/

// Exercícios de escrita de código

// 1. Dado o seguinte array de cachorrinhos que são clientes de um pet shop, realize as operações pedidas nos itens abaixo utilizando as funções de array map e filter:

const pets = [
    { nome: "Lupin", raca: "Salsicha" },
    { nome: "Polly", raca: "Lhasa Apso" },
    { nome: "Madame", raca: "Poodle" },
    { nome: "Quentinho", raca: "Salsicha" },
    { nome: "Fluffy", raca: "Poodle" },
    { nome: "Caramelo", raca: "Vira-lata" },
]

//a) Crie um novo array que contenha apenas o nome dos doguinhos

console.log(":::::: Exercício 1.a ::::::")

const nomePets = pets.map((pet)=>{
    return pet.nome
})

console.log(nomePets)

//b) Crie um novo array apenas com os [cachorros salsicha](https://www.youtube.com/watch?v=YQ404vwjzus)

console.log(":::::: Exercício 1.b ::::::")

const racaPets = pets.filter((pet) => {
    return pet.raca === "Salsicha"
})

console.log(racaPets)


//c) Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles. A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a `[NOME]`!"

console.log(":::::: Exercício 1.c ::::::")

const msgPets = pets.filter((pet) => {
    return pet.raca === "Poodle"
}).map((pet) => {
    return (`Você ganhou um cupom de desconto de 10% para tosar o/a ${pet.nome}!
`)
})

console.log(msgPets)

// 2. Dado o seguinte array de produtos, realize as operações pedidas nos itens abaixo utilizando as funções de array map e filter:

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]

//a) Crie um novo array que contenha apenas o nome de cada item

console.log(":::::: Exercício 2.a ::::::")

const nomeProdutos = produtos.map((produto) => {
    return produto.nome
})

console.log(nomeProdutos)

//b) Crie um novo array que contenha um objeto com o nome e o preço de cada item, aplicando 5% de desconto em todos eles

console.log(":::::: Exercício 2.b ::::::")

const novoArrayProdutos = produtos.map((produto) => {
    return {
        nome: produto.nome, preco: produto.preco * 0.95
    }
})

console.log(novoArrayProdutos)

//c) Crie um novo array que contenha apenas os objetos da categoria Bebidas

console.log(":::::: Exercício 2.c ::::::")

const novoArrayBebidas = produtos.filter((produto) => {
    return produto.categoria === "Bebidas"
})

console.log(novoArrayBebidas)

//d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"

console.log(":::::: Exercício 2.d ::::::")

const novoArrayYpe = produtos
    .filter((produto) => {
        return produto.nome.includes("Ypê")
    })

console.log(novoArrayYpe)

//e) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]". Esse array deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê"

console.log(":::::: Exercício 2.e ::::::")

const fraseProduto = produtos
    .filter((produto) => {
        return produto.nome.includes("Ypê")})
    .map((produto) => {
        return (`Compre ${produto.nome} por ${produto.preco}`)
    })

console.log(fraseProduto)

// Desafio

console.log(":::::: Desafio a ::::::")

const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
]

const nomePokemon = pokemons.map((pokemon) => {
    return { ...pokemons.nome }
})

const organizaPokemons = pokemons.sort((a,b) => {
    if (a.nome < b.nome) {
        return -1;
    } else if (a.nome > b.nome) {
        return 1;
    }
    return 0;
})

console.log(organizaPokemons)

console.log(":::::: Desafio b ::::::")

const tipoPokemon = pokemons.map((pokemon) => {
    return pokemon.tipo
})

console.log(new Set(tipoPokemon))
