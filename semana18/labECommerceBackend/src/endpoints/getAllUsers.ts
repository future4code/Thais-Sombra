import { Request, Response } from "express";
import User from "../entities/User";
import Purchase from "../entities/Purchase";
import UserDataBase from "../data/UserDataBase";

export const getAllUsers = async (req: Request, res: Response) => {
    try {        
        const usersAndPurchases = await new UserDataBase().selectUsersAndPurchases();

        res.status(200).send(usersAndPurchases);
        
    } catch (error: any){
        res.status(500).send(error.message || error.sqlMessage)
    };
};