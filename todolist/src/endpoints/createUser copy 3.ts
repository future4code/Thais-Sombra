import { Request, Response } from 'express'

export default async function createUser (
    req:Request,
    res:Response
){
    try{
        
    } catch (error){
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
    }
}