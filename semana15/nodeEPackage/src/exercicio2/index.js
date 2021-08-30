const operation = process.argv[2]
const number1 = Number(process.argv[3])
const number2 = Number(process.argv[4])

switch(operation){
    case 'add':
        console.log(`Resposta: ${number1+number2}`)
        break
    case 'sub':
        console.log(`Resposta: ${number1-number2}`)
        break
    case 'mult':
        console.log(`Resposta: ${number1*number2}`)
        break
    case 'div':
        console.log(`Resposta: ${number1/number2}`)
        break
    default:
        console.log("Verifique os inputs")
}