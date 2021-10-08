import ResultDB from "../data/ResultDB";
import { BaseError } from "../error/BaseError";
import { IdGenerator } from "../services/IdGenerator";
import { ResultDTO } from "../model/AthleteResult";

export default class ResultBusiness {

    private resultDB: ResultDB;

    constructor() {
        this.resultDB = new ResultDB
    };

    async insertAthleteResult (body:any){

        const resultDTO: ResultDTO={
            athlete: body.athlete,
            value: body.value,
            unit: body.unit,
            competitionId: body.competitionId
        };

        if(!resultDTO.athlete || !resultDTO.value || !resultDTO.unit || !resultDTO.competitionId){
            throw new BaseError("Preencha todos os campos", 400);
        };

        const randomId = new IdGenerator().generateId;

        const athleteResult = {
            id: randomId,
            athlete: resultDTO.athlete, 
            value: resultDTO.value, 
            unit: resultDTO.unit, 
            competitionId: resultDTO.competitionId
        };

        const result = await this.resultDB.insertResult(athleteResult);

        return result;

    };


};