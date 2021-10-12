export const generateArray = (missingNumber: number, arrayTotalNumber: number):number[]|string => {
  
  if (arrayTotalNumber <=0 || missingNumber <=0){
    const erro = "Informe um número positivo e maior que zero para o total de elementos do array e para o número que deverá ser excluído"; 
    return erro;
  } else if (arrayTotalNumber > missingNumber){
    const array = [];
    
    for (let i = 1; i <= arrayTotalNumber; i++) {
      if (i === missingNumber){
      } else {
        array.push(i)
      }
    };
    return array;
  } else if(typeof(arrayTotalNumber) !== "number" || typeof(missingNumber) !== "number" ){
    const erro = "Informe um número inteiro e válido"; 
    return erro;
  } else {
    const erro = "O número informado é menor que o número total de elementos do array"; 
    return erro;
  };

};

export const findingMissingNumber = (array:number[]|string):number => {
  
  if(typeof(array)==="string"){
    return 0
  };

  let expectedSum = 0;

  for (let i = 1; i <= array.length+1; i++) {
    expectedSum += i;
  };

  let sum = 0;
  for (const num of array) {
    sum += num;
  }
  return expectedSum - sum;
};
