import { Request, Response } from "express";
import ProductDataBase from "../data/ProductDataBase";
import PurchaseDataBase from "../data/PurchaseDataBase";
import Purchase from "../entities/Purchase";

export const createPurchase = async (req: Request, res: Response) => {
    try{
        const { userId, productId, quantity } = req.body;

        if (!userId || !productId || !quantity){
            throw new Error("Preencha todos os campos")
        };

        const id = Date.now() + Math.random().toString();

        const price = await new ProductDataBase().getProductById(productId);
        
        const totalValue = price.price*Number(quantity);

        const purchase = new Purchase(id, userId, productId, quantity, totalValue);

        await new PurchaseDataBase().insertPurchase(purchase);

        res.status(201).send({
            message: "Nova compra cadastrado com sucesso!",
            purchase: purchase
        });
        
    } catch(error: any){
        res.status(500).send(error.message || error.sqlMessage);
    };
};