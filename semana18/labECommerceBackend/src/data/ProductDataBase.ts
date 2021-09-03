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
        const result = await BaseDataBase.connection("labcommerce_backend_products");
        return result;
    };

    public getAllTickets = async (): Promise<any> =>{
        const result = await BaseDataBase.connection.raw(`
                SELECT * FROM labcommerce_backend_products
                WHERE origin IS NOT NULL
                ;
            `);
            return result[0]
    };

    public getProductById = async (id: string): Promise<any> =>{
        const result = await BaseDataBase.connection.raw(`
                SELECT * FROM labcommerce_backend_products
                WHERE id = "${id}"
                ;
            `);
            return result[0]
    };

};