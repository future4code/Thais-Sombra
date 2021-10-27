import { findingMissingNumber, generateArray } from "../src/numeroFaltante";

describe("Testing logic exercises",()=>{
    test("Testing generateArray with arrayTotalNumber greater than missingNumber",()=>{
        const missingNumber: number = 95;
        const arrayTotalNumber: number = 100;

        const result = generateArray(missingNumber, arrayTotalNumber);

        expect(result.length).toBe(99);
    });

    test("Testing generateArray with missingNumber greater than arrayTotalNumber",()=>{
        const missingNumber: number = 95;
        const arrayTotalNumber: number = 70;

        const result = generateArray(missingNumber, arrayTotalNumber);

        expect(result).toBe("O número informado é menor que o número total de elementos do array");
    });

    test("Testing generateArray with arrayTotalNumber equal to 0",()=>{
        const missingNumber: number = 95;
        const arrayTotalNumber: number = 0;

        const result = generateArray(missingNumber, arrayTotalNumber);

        expect(result).toBe("Informe um número positivo e maior que zero para o total de elementos do array e para o número que deverá ser excluído");
    });

    test("Testing generateArray with missingNumber equal to 0",()=>{
        const missingNumber: number = 0;
        const arrayTotalNumber: number = 100;

        const result = generateArray(missingNumber, arrayTotalNumber);

        expect(result).toBe("Informe um número positivo e maior que zero para o total de elementos do array e para o número que deverá ser excluído");
    });

    test("Testing findingMissingNumber arrayTotalNumber greater than missingNumber",()=>{
        const missingNumber: number = 90;
        const arrayTotalNumber: number = 100;

        const array = generateArray(missingNumber,arrayTotalNumber);

        const result = findingMissingNumber(array);

        expect(result).toBe(missingNumber);
    });


    test("Testing findingMissingNumber with missingNumber greater than arrayTotalNumber",()=>{
        const missingNumber: number = 90;
        const arrayTotalNumber: number = 70;

        const array = generateArray(missingNumber,arrayTotalNumber);

        const result = findingMissingNumber(array);

        expect(result).toBe(0);
    });
});
