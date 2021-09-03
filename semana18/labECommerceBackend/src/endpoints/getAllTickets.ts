import { Request, Response } from "express";
import ProductDataBase from "../data/ProductDataBase";

export const getAllTickets = async (req: Request, res: Response) => {
    try {
        const productDataBase = new ProductDataBase();

        const returnList = await productDataBase.getAllTickets();

        res.status(200).send(returnList);

    } catch(error: any){
        res.status(500).send(error.message || error.sqlMessage)
    };
};