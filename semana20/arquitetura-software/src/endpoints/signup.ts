import { Request, Response } from "express";
import { generateToken } from "../services/authenticator";
import { hash } from "../services/hashManager";
import { generateId } from "../services/idGenerator";
import UserDB from "../data/UserDB";
import User from "../entities/User";

export default async function signup(
    req: Request,
    res: Response
): Promise<void> {
    try {
        const { name, email, password, role } = req.body;

        if( !name || !email || !password || !role){
            res.statusCode = 422
            throw new Error("'name', 'email' and 'password' required");
        };

        if (email.indexOf('@') === -1) {
            throw new Error("'email' not valid");
        };

        if ( password.length <6 ) {
            res.statusCode = 422
            throw new Error("'password' must be at least 6 characters long")
        };
        
        const [result] = await new UserDB().validateEmail(email)
        console.log(result)
        if(result){
            res.statusCode = 409;
            throw new Error("Email already in use")
        };
        
        const id:string = generateId();
        
        const cypherPassword = await hash(password);
        console.log(cypherPassword)

        const user = new User(id, name, email, cypherPassword, role);
        
       await new UserDB().insertUser(user);

        const token:string = generateToken({id});
        res.send({token});
        console.log(token)

    } catch (error: any) {
        if(res.statusCode === 200){
            res.status(500).send("Internal server error");
        } else {
            res.send(error.message);
        };
    };
};

