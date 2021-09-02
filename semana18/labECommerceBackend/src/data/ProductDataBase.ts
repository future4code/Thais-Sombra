import Product from "../entities/Product";
import BaseDataBase from "./BaseDataBase";

export default class ProductDataBase extends BaseDataBase{

    public insertProduct = async ( product: Product): Promise<any> => {
        const result = await BaseDataBase.connection("labcommerce_backend_products")
            .insert({
                id: product.getId(),
                name: product.name,
                description: product.description,
                price: product.price,
                origin: product.origin,
                destination: product.destination
            });
            return result;
    };

    public getAll = async (): Promise<any> =>{
        return await BaseDataBase.connection("labcommerce_backend_products")
    };

};