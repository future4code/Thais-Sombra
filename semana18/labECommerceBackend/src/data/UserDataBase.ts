import User from "../entities/User";
import BaseDataBase from "./BaseDataBase";

export default class UserDataBase extends BaseDataBase{
    
    public insertUser = async ( user: User ): Promise<any> => {
        const result = await BaseDataBase.connection("labcommerce_backend_users")
            .insert({
                id: user.getId(),
                name: user.name,
                email: user.email,
                age: user.age
            });
            return result;
    };

    public getAll = async () : Promise<any> =>{
        return await BaseDataBase.connection("labcommerce_backend_users");
    };

};