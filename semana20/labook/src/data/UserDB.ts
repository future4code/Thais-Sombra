import { User } from "../model/User";
import BaseDB from "./BaseDB";
import { userTableName } from "./constants";

export default class UserDB extends BaseDB{
    public insertUser = async (user: User): Promise<any> => {
        const result = await BaseDB.connection(userTableName)
            .insert({
                id: user.id,
                name: user.name,
                email: user.email,
                password: user.passwordHash
            });
        return result;
    };

    public findUserByEmail = async (email: string): Promise<any> => {
        const result = await BaseDB.connection(userTableName)
            .select('*')
            .where({
                email: email
            });
        return result[0];
    };
};