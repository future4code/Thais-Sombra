import { Request, Response } from "express";
import ProductDataBase from "../data/ProductDataBase";
import Ticket from "../entities/Ticket";

export const createTicket = async (req: Request, res: Response) => {
    try{
        const { name, description, price, origin, destination } = req.body;

        if (!name || !description || !price || !origin || !destination){
            throw new Error("Preencha todos os campos")
        };

        const id = Date.now() + Math.random().toString();

        const ticket = new Ticket(id, name, description, price, origin, destination );

        await new ProductDataBase().insertProduct(ticket);

        res.status(201).send({
            message: "Nova passagem cadastrada com sucesso!",
            ticket: ticket
        });
        
    } catch(error: any){
                res.status(500).send(error.message || error.sqlMessage);
    };

};