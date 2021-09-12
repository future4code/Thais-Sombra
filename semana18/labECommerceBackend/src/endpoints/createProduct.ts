import { Request, Response } from "express";
import ProductDataBase from "../data/ProductDataBase";
import Product from "../entities/Product";

export const createProduct = async (req: Request, res: Response) => {
    try{
        const { name, description, price } = req.body;

        if (!name || !description || !price){
            throw new Error("Preencha todos os campos")
        };

        const id = Date.now() + Math.random().toString();

        const product = new Product(id, name, description, price);

        await new ProductDataBase().insertProduct(product);

        res.status(201).send({
            message: "Novo produto cadastrado com sucesso!",
            product: product
        });
        
    } catch(error: any){
                res.status(500).send(error.message || error.sqlMessage);
    };
};