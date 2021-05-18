~~~Exercícios de Fixação de Javascript - Treino 1

function calculaSalario(carrosVendidos, valorVendas) {
  const salarioFixo = 2000
  let salarioVariavel = carrosVendidos*100 + valorVendas*0.05
  let salarioMes = salarioFixo + salarioVariavel
  return salarioMes
}

~~~