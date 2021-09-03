import { Request, Response } from "express";
import UserDataBase from "../data/UserDataBase";

export const getAllUsers = async (req: Request, res: Response) => {
    try {
        const usersId = await new UserDataBase().selectAllUsersId();

        const filteredIds = usersId.filter(function (elem: any, index: any, self: any) {
            return index === self.indexOf(elem);
        });

        res.status(200).send(returnList);
        
    } catch (error: any){
        res.status(500).send(error.message || error.sqlMessage)
    };
};