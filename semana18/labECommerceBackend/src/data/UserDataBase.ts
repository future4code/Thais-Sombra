import User from "../entities/User";
import BaseDataBase from "./BaseDataBase";

const tableName = "labcommerce_backend_users"

export default class UserDataBase extends BaseDataBase{
    
    public insertUser = async ( user: User ): Promise<any> => {
        const result = await BaseDataBase.connection(tableName)
            .insert({
                id: user.getId(),
                name: user.name,
                email: user.email,
                age: user.age
            });
            return result;
    };

    public getAll = async () : Promise<any> =>{
        return await BaseDataBase.connection(tableName);
    };

    public selectUserById = async (userId: string): Promise<any> =>{
        const result = await BaseDataBase.connection.raw(`
                SELECT * FROM ${tableName}
                WHERE id = "${userId}"
                ;
            `);
            return result[0]
    };

};