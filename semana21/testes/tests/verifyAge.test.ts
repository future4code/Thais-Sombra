import { verifyAge } from "../src/functions/verifyAge";
import { LOCATION, User } from "../src/model/casino/inputCasino";
import { Casino } from "../src/model/casino/inputCasino";
import { Result } from "../src/model/casino/outputCasino";
import { NACIONALITY } from "../src/model/casino/inputCasino";

describe("Testing verifyAge", () => {
    test("Testing for brazilian user in Brazil and 18+", () =>{

        const user: User[] = [{
            name: "Floki",
            age: 20,
            nacionality: NACIONALITY.BRAZILIAN
        }];

        const casino: Casino = {
            name: "COCOBAMBU",
            location: LOCATION.BRAZIL
        };

        const result: Result = verifyAge(casino, user);

        expect(result.brazilians.allowed).toEqual(["Floki"]);

    });

    test("Testing for american user in Brazil and 18+", () =>{

        const user: User[] = [{
            name: "Floki",
            age: 20,
            nacionality: NACIONALITY.AMERICAN
        }];

        const casino: Casino = {
            name: "COCOBAMBU",
            location: LOCATION.BRAZIL
        };

        const result = verifyAge(casino, user);

        expect(result.americans.allowed).toEqual(["Floki"]);
        
    });

    test("Testing for 2 americans and 2 brazilians in EUA and 19 years", () =>{

        const user: User[] = [
            {
                name: "Floki",
                age: 19,
                nacionality: NACIONALITY.AMERICAN
            },
            {
                name: "Jon",
                age: 19,
                nacionality: NACIONALITY.AMERICAN
            },
            {
                name: "Paulo",
                age: 19,
                nacionality: NACIONALITY.BRAZILIAN
            },
            {
                name: "Daniel",
                age: 19,
                nacionality: NACIONALITY.BRAZILIAN
            }
        ];

        const casino: Casino = {
            name: "COCOBAMBU",
            location: LOCATION.EUA
        };

        const result = verifyAge(casino, user);

        expect(result.americans.unallowed).toEqual(["Floki", "Jon"]);

        expect(result.brazilians.unallowed).toStrictEqual(["Paulo", "Daniel"]);
        
    });

    test("Testing for 2 americans and 2 brazilians in EUA", () =>{

        const user: User[] = [
            {
                name: "Floki",
                age: 21,
                nacionality: NACIONALITY.AMERICAN
            },
            {
                name: "Jon",
                age: 21,
                nacionality: NACIONALITY.AMERICAN
            },
            {
                name: "Paulo",
                age: 19,
                nacionality: NACIONALITY.BRAZILIAN
            },
            {
                name: "Daniel",
                age: 19,
                nacionality: NACIONALITY.BRAZILIAN
            }
        ];

        const casino: Casino = {
            name: "COCOBAMBU",
            location: LOCATION.EUA
        };

        const result = verifyAge(casino, user);

        expect(result.americans.allowed).toEqual(["Floki", "Jon"]);

        expect(result.brazilians.unallowed).toStrictEqual(["Paulo", "Daniel"]);
        
    });

});