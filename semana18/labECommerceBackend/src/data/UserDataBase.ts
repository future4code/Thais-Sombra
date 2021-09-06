import User from "../entities/User";
import BaseDataBase from "./BaseDataBase";
import { usersTableName } from "./TableDataBase";

export default class UserDataBase extends BaseDataBase{
    
    public insertUser = async ( user: User ): Promise<any> => {
        const result = await BaseDataBase.connection(usersTableName)
            .insert({
                id: user.getId(),
                name: user.name,
                email: user.email,
                age: user.age
            });
            return result;
    };

    public selectAllUsersId = async () : Promise<any> =>{
        const result = await BaseDataBase.connection.raw(`
            SELECT id FROM ${usersTableName}
            ;
        `);
        return result[0]
    };

    public selectUserById = async (userId: string): Promise<any> =>{
        const result = await BaseDataBase.connection.raw(`
                SELECT * FROM ${usersTableName}
                WHERE id = "${userId}"
                ;
            `);
            return result[0]
    };

};