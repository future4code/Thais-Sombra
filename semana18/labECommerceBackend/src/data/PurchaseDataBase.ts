import Purchase from "../entities/Purchase";
import BaseDataBase from "./BaseDataBase";

const tableName = "labcommerce_backend_purchase"

export default class PurchaseDataBase extends BaseDataBase{


    public insertPurchase = async ( purchase: Purchase): Promise<any> => {
        const result = await BaseDataBase.connection(tableName)
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
        const result = await BaseDataBase.connection(tableName);
        return result;
    };

    public selectPurchaseByUserId = async (userId: string): Promise<any> =>{
        const result = await BaseDataBase.connection.raw(`
                SELECT * FROM ${tableName}
                WHERE user_id = "${userId}"
                ;
            `);
            return result[0]
    };

};