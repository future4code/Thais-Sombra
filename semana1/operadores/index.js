// Exercícios de interpretação de código

/*
1. Leia o código abaixo. Indique todas as mensagens impressas no console, 
SEM EXECUTAR o programa.

const bool1 = true
const bool2 = false
const bool3 = !bool2 :::> inverso de bool2, logo true

let resultado = bool1 && bool2 
    :::> true e false = false
console.log("a. ", resultado) 
    Resultado: a. false

resultado = bool1 && bool2 && bool3 
    :::> true e false e true = false
console.log("b. ", resultado) 
    Resultado: b. false

resultado = !resultado && (bool1 || bool2) 
    :::> Não false, logo true; true ou false = true; então true e true = true
console.log("c. ", resultado)
    Resultado: c. true

console.log("d. ", typeof resultado)
    :::> Tipo de true ou false é boleano
    Resultado: d. boolean
*/

/*
2.Seu colega se aproxima de você falando que o código dele não funciona como devia. 
Vamos ajudá-lo: consegue perceber algum problema? O que será impresso no console?

___________________________________________________
let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma)
___________________________________________________

    Resposta: Irá retornar os valores digitados concatenados, para que o código
    seja executado conforme o objetivo é necessário converter para número.
        
*/

/*
3. Para o exercício anterior, sugira ao seu colega uma solução para que o valor 
impresso no console seja, de fato, a soma dos dois números.

    Exemplo1:
            let primeiroNumero = Number(prompt("Digite um numero!"))
            let segundoNumero = Number(prompt("Digite outro numero!"))
            const soma = primeiroNumero + segundoNumero
            console.log(soma)
    Exemplo2:
        let primeiroNumero = prompt("Digite um numero!")
        let segundoNumero = prompt("Digite outro numero!"
        const soma = Number(primeiroNumero) + Number(segundoNumero)
        console.log(soma)

*/

// Exercícios de escrita de código

/*1. Faça um programa que:*/

/*a) Pergunte a idade do usuário*/

const idadeUser = Number(prompt("Usuário, qual a sua idade?"))

/*b) Pergunte a idade do seu melhor amigo ou da sua melhor amiga*/

const idadeAmigoDoUser = Number(prompt("Usuário, qual a idade da sua ou do seu best friend?"))

/*c) **Imprima na console** a seguinte mensagem: "Sua idade é maior do que a do 
seu melhor amigo?", seguido pela resposta (`true` ou `false`)*/

let comparativoDeIdade = idadeUser > idadeAmigoDoUser
    console.log("Sua idade é maior do que a do seu melhor amigo?", comparativoDeIdade)

/*d) **Imprima na console** a diferença de idade (não tem problema se sair um 
número negativo)*/

let diferencaDeIdade = idadeUser - idadeAmigoDoUser
    console.log("A diferença de idade de vocês é de:", diferencaDeIdade)

/*2. Faça uma programa que: */

/*a) Peça ao usuário que insira um número **par***/

const numeroPar = Number(prompt("Digite um número par:"))

/*b) Imprima na console **o resto da divisão** desse número por 2.*/

restoDivisao = numeroPar % 2
    console.log("O resto da divisão por 2 é:", restoDivisao) 

/*c) Teste o programa com diversos números pares. Você notou um padrão? 
Escreva em um comentário de código.
    Resposta: Todos os resultados foram 0, 
    provando que os números digitados são pares*/


/*d) O que acontece se o usuário inserir um número ímpar? 
Escreva em um comentário de código
    Resposta: Todos os resultados serão 1, 
    provando que os números digitados são ímpares*/

/*3. Faça um programa que pergunte ao usuário sua idade em anos. 
Depois, imprima no console*/

const idadeUsuario = Number(prompt("Usuário, qual a sua idade?"))

//a) A idade do usuário em meses
//b) A idade do usuário em dias
//c) A idade do usuário em horas

idadeUsuarioMeses = idadeUsuario * 12
idadeUsuarioDias = idadeUsuario * 365
idadeUsuarioHoras = idadeUsuarioDias * 24
    console.log("Você já viveu", idadeUsuarioMeses, "meses ou", idadeUsuarioDias, "dias ou", idadeUsuarioHoras, "horas")

/*4. Faça um programa que pergunte ao usuário dois números. Em seguida, 
faça as operações e imprima no console as seguintes mensagens: 

O primeiro numero é maior que segundo? true
O primeiro numero é igual ao segundo? false
O primeiro numero é divisível pelo segundo? true
O segundo numero é divisível pelo primeiro? true

*/

const numero1 = Number(prompt("Informe um número:"))
const numero2 = Number(prompt("Informe outro número:"))

numeroMaior = numero1 > numero2
    console.log("O primeiro numero é maior que segundo?", numeroMaior)

numerosIguais = numero1 === numero2
    console.log("O primeiro numero é igual ao segundo?", numerosIguais)

divisaoPrimeiroPeloSegundo = numero1 % numero2
comparativoDivisao = (numero1 >= numero2) && (divisaoPrimeiroPeloSegundo === 0)
    console.log("O primeiro numero é divisível pelo segundo?", comparativoDivisao)

divisaoSegundoPeloPrimeiro = numero2 % numero1
comparativoDivisao = (numero2 >= numero1) && (divisaoSegundoPeloPrimeiro === 0)
    console.log("O segundo numero é divisível pelo primeiro?", comparativoDivisao)

// CHALLENGE SEMANA 1 - AULA 4

/* PRIMEIRO - CONVERSÃO TEMPERATURA
*/

let fahrenheit = 77
    temperaturaFahrenheitKelvin = ((fahrenheit - 32)*(5/9)) + 273.15
    console.log("77ºF é equivalente a", temperaturaFahrenheitKelvin, "K")

let celsius = 80
    temperaturaCelsiusFahrenheit = celsius *(9/5) + 32
    console.log("80ºC é equivalente a", temperaturaCelsiusFahrenheit, "ºF")

celsius = 30
    temperaturaCelsiusFahrenheit = celsius *(9/5) + 32
    temperaturaCelsiusKelvin = celsius + 273.15
    console.log("30ºC é equivalente a", temperaturaCelsiusFahrenheit, "ºF e equivalente a", temperaturaCelsiusKelvin, "K")

celsius = Number(prompt("Insira um valor em graus Celsius:"))
    temperaturaCelsiusFahrenheit = celsius *(9/5) + 32
    temperaturaCelsiusKelvin = celsius + 273.15
    console.log("A conversão de", celsius, "ºC é equivalente a", temperaturaCelsiusFahrenheit, "ºF e equivalente a", temperaturaCelsiusKelvin, "K")

/* SEGUNDO - CONSUMO DE ENERGIA

*/

const consumoEnergia = 280
const tarifa = 0.05
valorPago = consumoEnergia * tarifa
    console.log("O valor a ser pago será de:", valorPago, "reais")

const desconto = 0.15

valorPago = valorPago*(1-desconto)
    console.log("O valor com desconto de 15% será de:", valorPago)

/* TERCEIRO - CONVERSOR DE UNIDADE */

/*a) Procure uma forma de converter libra (lb) para quilograma (kg) e escreva um 
programa que converta 20lb para kg. Imprima  a resposta no console da seguinte forma: 
`20lb equivalem a X kg` - 1 lb -> 0,45kg */

const libra = 20
const conversaoLbKg = 0.45
conversaoKg = libra * conversaoLbKg 

console.log(libra ,"lb equivalem a", conversaoKg, "kg")

/*b) Procure uma forma de converter onça (oz) para quilograma (kg) e escreva um 
programa que converta 10.5oz para kg. Imprima  a resposta no console da seguinte forma: 
`10.5oz equivalem a X kg` -> 1oz -> 0,0283495 */

const oz = 10.5
const conversaoOzKg = 0.0284
conversaoKg = oz * conversaoOzKg 

console.log(oz, "oz equivalem a ", conversaoKg, "kg")

/*c) Procure uma forma de converter milha (mi) para metro (m) e escreva um programa 
que converta 100mi para m. Imprima  a resposta no console da seguinte forma: 
`100mi equivalem a X m` -> 1mi -> 1609,34 */

const mi = 100
const conversaoMiM = 1609.34
conversaoM = mi * conversaoMiM

console.log(mi, "mi equivalem a", conversaoM, "m")

/*d) Procure uma forma de converter pés (ft) para metro (m) e escreva um programa 
que converta 50ft para m. Imprima  a resposta no console da seguinte forma: 
`50ft equivalem a X m` -> 1 ft -> 0,3048 */

const ft = 50
const conversaoFtM = 0.3048
conversaoM = ft * conversaoFtM

console.log(ft, "ft equivalem a", conversaoM, "m")

/*e) Procure uma forma de converter galão (gal) para litro (l) e escreva um programa 
que converta 103.56gal para litro. Imprima  a resposta no console da seguinte forma: 
`103.56gal equivalem a X l' -> 1 gal -> 3,785 L */

const gal = 103.56
const conversaoGalL = 3.785
conversaoL = gal * conversaoGalL 

console.log(gal, "gal equivalem a", conversaoL, "L")

/*f) Procure uma forma de converter xícara (xic) para litro (l) e escreva um programa 
que converta 450xic para litro. Imprima  a resposta no console da seguinte forma: 
`450 xic equivalem a X l` -> 1xic -> 250 mL ou 0,25L */

const xic = 450
const conversaoXicL = 0.25
conversaoL = xic * conversaoXicL 

console.log(xic, "xic equivalem a", conversaoL, "L")

/*g) Escolha ao menos **um** dos itens anteriores e modifique o programa para que ele 
peça ao usuário o valor da unidade original antes de converter */

const oz2 = Number(prompt("Insira um valor em oz para conversão em kg:"))
const conversaoOz2Kg = 0.0284
conversaoKg = oz2 * conversaoOzKg 

console.log(oz2, "oz equivalem a", conversaoKg, "kg")
