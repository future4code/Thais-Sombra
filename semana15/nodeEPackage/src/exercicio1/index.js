// Para acessar os parâmetros, podemos usar process.argv[i]

const userName = process.argv[2]
const age = Number(process.argv[3])

console.log(`Olá, ${userName}! Você tem ${age} anos. Em sete anos você terá ${age+7}`)