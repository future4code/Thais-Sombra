import { Request, Response } from "express";
import UserDataBase from "../data/UserDataBase";
import User from "../entities/User";

export const createUser = async (req: Request, res: Response) =>{
    try{
        const { name, email, age } = req.body;

        if (!name || !email || !age) {
            throw new Error("Preencha todos os campos")
        };

        if (email.indexOf('@') === -1) {
            throw new Error("Digite um email válido");
        };

        const id = Date.now() + Math.random().toString();

        const user = new User(id, name, email, age);

        await new UserDataBase().insertUser(user)

        res.status(201).send({
            message:`Novo usuário cadastrado com sucesso!`,
            user: user})

    } catch (error: any ){
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
};