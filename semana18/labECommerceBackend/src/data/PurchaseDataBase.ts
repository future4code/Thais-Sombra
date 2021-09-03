import Purchase from "../entities/Purchase";
import BaseDataBase from "./BaseDataBase";

export default class PurchaseDataBase extends BaseDataBase{

    public insertPurchase = async ( purchase: Purchase): Promise<any> => {
        const result = await BaseDataBase.connection("labcommerce_backend_purchase")
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
        const result = await BaseDataBase.connection("labcommerce_backend_purchase");
        return result;
    };

};