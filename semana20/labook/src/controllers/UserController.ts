import { Request, Response } from "express";
import UserBusiness from "../business/UserBusiness";
import { SignupDTO, LoginDTO } from "../model/User";

export default class UserController {
    private userBusiness: UserBusiness;

    constructor() {
      this.userBusiness = new UserBusiness();
    }
  
    async signup(req: Request, res: Response) {
        try {

            const signupDTO: SignupDTO = {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
            };

            if (!signupDTO.email || !signupDTO.name || !signupDTO.password) {
                res.statusCode = 400;
                throw new Error("Preencha todos os campos");
            };

            if (signupDTO.email.indexOf("@") === -1) {
                res.statusCode = 400;
                throw new Error("Digite um email válido");
            };

            const output = await new UserBusiness().signup(signupDTO);

            console.log(output)
            if(!output){
                res.statusCode = 400;
            }

            res.status(201).send({output})

        } catch (error: any){
            if(res.statusCode === 200){
                res.status(500).send(error.message);
            } else {
                res.send(error.message);
            };
        };
    };

    async login(req: Request, res: Response) {
        try{

            const loginDTO: LoginDTO = {
                email: req.body.email,
                password: req.body.password,
            };

            if (!loginDTO.email || !loginDTO.password) {
                throw new Error("Preencha todos os campos");
            };

            if (loginDTO.email.indexOf("@") === -1) {
                throw new Error("Digite um email válido");
            };

            const output = await this.userBusiness.login(loginDTO);
            
            res.status(202).send({output})

        } catch (error: any){
            if(res.statusCode === 200){
                res.status(500).send("Internal server error");
            } else {
                res.send(error.message);
            };
        };

    }
};