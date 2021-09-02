import { Request, Response } from "express";

export const createProduct = async (req: Request, res: Response) => {
    try{
        
    } catch(error: any){
        switch (error.code) {
            case "ER_DUP_ENTRY":
                res.status(400).send("E-mail já cadastrado, insira um novo e-mail válido")
                break
            case "ER_TRUNCATED_WRONG_VALUE":
                res.status(400).send("Idade precisa ser um número inteiro, verifique o valor informado")
                break
            default:
                res.status(500).send(error.message || error.sqlMessage)
        };
    };
}