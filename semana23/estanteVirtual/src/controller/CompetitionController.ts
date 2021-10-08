import { Request, Response } from "express";
import CompetitionBusiness from "../business/CompetitionBusiness";

export default class CompetitionController {

    async insertCompetition(req: Request, res:Response){
        try{

            await new CompetitionBusiness().insertCompetition(req.body);

            res.status(201).send("Sucess")

        } catch (error:any){
            if (error.code) {
                res.status(error.code).send({ message: error.message });
            } else {
                res.status(500).send({ message: error.message });
            };
        };
    };

    async getAllCompetitions(req: Request, res:Response){
        try{

            const result = await new CompetitionBusiness().getAllCompetitions();
    
            res.status(200).send(result)

        } catch (error:any){
            if (error.code) {
                res.status(error.code).send({ message: error.message });
            } else {
                res.status(500).send({ message: error.message });
            };
        };
    };

    async updateStatusCompetitionToFinished (req: Request, res:Response){
        try{

            const result = await new CompetitionBusiness().updateStatusCompetitionToFinished(req.params.id);
    
            res.status(200).send("sucess")

        } catch (error:any){
            if (error.code) {
                res.status(error.code).send({ message: error.message });
            } else {
                res.status(500).send({ message: error.message });
            };
        };
    };

};