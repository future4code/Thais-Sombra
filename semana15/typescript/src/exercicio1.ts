// a) Crie uma variável **minhaString** do tipo `string` e atribua um valor a ela. Tente atribuir um número a esta variável. O que acontece?

// let minhaString: string = "Hello World"
// minhaString = 123

// O typescript avisa que um nuúmero não pode ser atribuído a uma variável de tipo string


// b) Crie uma variável **meuNumero** do tipo `number` e atribua um valor numérico. Como podemos fazer para que essa variável também aceite strings?

// let meuNumero: number | string = 0
// meuNumero = "123"
// meuNumero = 55
// meuNumero = "abc"

 // Usar  | para aceitar mais de um type

// c) Agora crie um novo objeto. Este objeto é uma pessoa, e deve possuir três propriedades:

const primeiraPessoa = {
    nome: 'Maíra',
    idade: 26,
    corFavorita: 'Azul'
}

type Pessoa = {
    nome: string,
    idade: number,
    corFavorita: string
}

const segundaPessoa: Pessoa = {
    nome: 'Ragnar',
    idade: 35,
    corFavorita: 'Branco'
}

const terceiraPessoa: Pessoa = {
    nome: 'Lagherta',
    idade: 35,
    corFavorita: 'Azul'
}

const quartaPessoa: Pessoa = {
    nome: 'Bjorn',
    idade: 15,
    corFavorita: 'Verde'
}

// d) Modifique o tipo de objeto para que possamos apenas escolher entre as cores do arco-íris. Utilize um `enum` para isso.

enum RAIBOW_COLORS {
    VERMELHO = 'Vermelho',
    LARANJA ='Laranja',
    AMARELO = 'Amarelo',
    VERDE = 'Verde',
    AZUL = 'Azul',
    ANIL = 'Anil',
    VIOLETA = 'Violeta'
}

const primeiraPessoaRaibow = {
    nome: 'Maíra',
    idade: 26,
    corFavorita: RAIBOW_COLORS.AZUL
}

const segundaPessoaRaibow: Pessoa = {
    nome: 'Ragnar',
    idade: 35,
    corFavorita: RAIBOW_COLORS.VIOLETA
}

const terceiraPessoaRaibow: Pessoa = {
    nome: 'Lagherta',
    idade: 35,
    corFavorita: RAIBOW_COLORS.AZUL
}

const quartaPessoaRaibow: Pessoa = {
    nome: 'Bjorn',
    idade: 15,
    corFavorita: RAIBOW_COLORS.VERDE
}