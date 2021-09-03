import Purchase from "../entities/Purchase";
import BaseDataBase from "./BaseDataBase";
import { usersTableName } from "./TableDataBase";

export default class PurchaseDataBase extends BaseDataBase{

    public insertPurchase = async ( purchase: Purchase): Promise<any> => {
        const result = await BaseDataBase.connection(usersTableName)
            .insert({
                id: purchase.getId(),
                user_id: purchase.getUserId(),
                product_id: purchase.getProductId(),
                quantity: purchase.quantity,
                total_value: purchase.totalValue
            });
            return result;
    };

    public getAll = async (): Promise<any> =>{
        const result = await BaseDataBase.connection(usersTableName);
        return result;
    };

    public selectPurchaseByUserId = async (userId: string): Promise<any> =>{
        const result = await BaseDataBase.connection.raw(`
                SELECT * FROM ${usersTableName}
                WHERE user_id = "${userId}"
                ;
            `);
            return result[0]
    };

};