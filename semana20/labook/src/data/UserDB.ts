import { User } from "../model/User";
import BaseDB from "./BaseDB";
import { usersTableName } from "./constants";

export default class UserDB extends BaseDB{
    public insertUser = async (user: User): Promise<any> => {
        const result = await BaseDB.connection(usersTableName)
            .insert({
                id: user.id,
                name: user.name,
                email: user.email,
                password: user.passwordHash
            });
            return result;
    };
};