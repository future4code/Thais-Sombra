import { verifyAge } from "../src/functions/verifyAge";
import { LOCATION, User } from "../src/model/casino/inputCasino";
import { Casino } from "../src/model/casino/inputCasino";
import { Result } from "../src/model/casino/outputCasino";
import { NACIONALITY } from "../src/model/casino/inputCasino";

describe("Ex5 - Testing verifyAge", () => {
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

        expect(result.brazilians.allowed.length).toBeGreaterThan(0);

        expect(result.brazilians.allowed.length).toBeLessThan(2);

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

        const result: Result = verifyAge(casino, user);

        expect(result.americans.unallowed.length).toBe(0);

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

        expect(result.americans.unallowed).toContain("Floki");

        expect(result.brazilians.unallowed).toContain("Paulo");
        
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

        expect(result.americans.unallowed.length).toBeLessThan(1);

        expect(result.americans.allowed.length).toBe(2);

        expect(result.brazilians.unallowed.length).toBeGreaterThan(1);
        
    });

});
