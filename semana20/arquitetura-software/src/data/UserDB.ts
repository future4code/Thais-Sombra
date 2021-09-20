import User from "../entities/User";
import BaseDB from "./BaseDB";
import { userTableName } from "./constants";

export default class UserDB extends BaseDB{

    public insertUser = async (user: User): Promise<any> =>{
        const result = await BaseDB.connection(userTableName)
            .insert({
                id: user.getId(),
                name: user.name,
                email: user.email,
                password: user.cypherPassword,
                role: user.role
            });
            return result;
    };

    public validateEmail = async (email:string) : Promise<any> =>{
        const result = await BaseDB.connection.raw(`
            SELECT id FROM ${userTableName}
            WHERE email = "${email}"
            ;
        `);
        return result[0]
    };
};