import CompetitionDB from "../data/CompetitionDB";
import { BaseError } from "../error/BaseError";
import { CompetitionDTO, STATUS } from "../model/Competition";
import { IdGenerator } from "../services/IdGenerator";

export default class CompetitionBusiness {

    private competitionDB: CompetitionDB;

    constructor() {
        this.competitionDB = new CompetitionDB
    };

    async insertCompetition (body:any){
        
        const competitionDTO: CompetitionDTO={
            name: body.name,
            status:body.status
        };

        if(!competitionDTO.name || !competitionDTO.status){
            throw new BaseError("Preencha todos os campos", 400);
        };

        const randomId = new IdGenerator().generateId();

        const competition = {
            id: randomId,
            name: competitionDTO.name,
            status: competitionDTO.status
        };

        const result = await this.competitionDB.insertCompetition(competition);
        
        return result; 
    };

    async getAllCompetitions () {

        const result = await this.competitionDB.getAllCompetitions();
        return result;

    };

    async getCompetitionById (competitionId: string) {

        if(!competitionId){
            throw new BaseError("Informe o Id da competição", 400);
        };

        const result = await this.competitionDB.getCompetitionById(competitionId);

        return result;
    };


    async updateStatusCompetitionToFinished (competitionId: string){

        if(!competitionId){
            throw new BaseError("Informe o Id da competição", 400);
        }

        const result = await this.competitionDB.updateStatusCompetitionToFinished(competitionId);

        return result;
    };

};