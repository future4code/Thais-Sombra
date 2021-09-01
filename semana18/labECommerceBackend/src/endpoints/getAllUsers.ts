import { Request, Response } from "express";
import UserDataBase from "../data/UserDataBase";

export const getAllUsers = async (req: Request, res: Response) => {
    try {
        const userDataBase = new UserDataBase();

        const returnList = await userDataBase.getAll();

        console.log(returnList)

        res.status(200).send(returnList)
    } catch (error: any){
        res.status(500).send(error.message || error.sqlMessage)
    };
};