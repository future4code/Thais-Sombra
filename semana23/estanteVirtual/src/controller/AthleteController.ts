import { Request, Response } from "express";
import AthleteBusiness from "../business/AthleteBusiness";

export default class AthleteController {

    async insertAthlete (req: Request, res:Response){
        try{

            const result = await new AthleteBusiness().insertAthlete(req.body);

            res.status(201).send(result)

        } catch (error:any){
            if (error.code) {
                res.status(error.code).send({ message: error.message });
            } else {
                res.status(500).send({ message: error.message });
            };
        };
    };

    async getAllAthletes(req: Request, res:Response){
        try{

            const result = await new AthleteBusiness().getAllAthletes();
    
            res.status(200).send(result)

        } catch (error:any){
            if (error.code) {
                res.status(error.code).send({ message: error.message });
            } else {
                res.status(500).send({ message: error.message });
            };
        };
    };

};