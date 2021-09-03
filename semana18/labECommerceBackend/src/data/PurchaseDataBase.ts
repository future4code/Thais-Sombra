import Purchase from "../entities/Purchase";
import BaseDataBase from "./BaseDataBase";

export default class PurchaseDataBase extends BaseDataBase{

    public insertPurchase = async ( purchase: Purchase): Promise<any> => {
        const result = await BaseDataBase.connection("labcommerce_backend_purchase")
            .insert({
                id: purchase.getId(),
                userId: purchase.getUserId(),
                productId: purchase.getProductId(),
                quantity: purchase.quantity,
                totalValue: purchase.totalValue
            });
            return result;
    };

    public getAll = async (): Promise<any> =>{
        const result = await BaseDataBase.connection("labcommerce_backend_purchase");
        return result;
    };

};