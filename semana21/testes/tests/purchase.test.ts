import { purchase } from "../src/functions/purchase";
import { User } from "../src/model/User";


describe("Testing purchase function", () => {

    test("Testing user.balance greater than value", () => {

        const user: User = {
            name: "Floki",
	        balance: 100
        };

        const result = purchase(user, 80);

        expect(result).toEqual({
            ...user,
            balance: 20
        });

    });

    test("Testing user.balance equal to value", () => {

        const user: User = {
            name: "Floki",
	        balance: 80
        };

        const result = purchase(user, 80);

        expect(result).toEqual({
            ...user,
            balance: 0
        });

    });

    test("Testing user.balance less than value", () => {

        const user: User = {
            name: "Floki",
	        balance: 50
        };

        const result = purchase(user, 80);

        expect(result).toEqual(undefined)

    });

});