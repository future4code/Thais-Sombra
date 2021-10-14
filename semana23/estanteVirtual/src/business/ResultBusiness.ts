import ResultDB from "../data/ResultDB";
import { BaseError } from "../error/BaseError";
import { IdGenerator } from "../services/IdGenerator";
import { ResultDTO } from "../model/AthleteResult";
import Ranking from "../services/Ranking";

export default class ResultBusiness {

    private resultDB: ResultDB;

    constructor() {
        this.resultDB = new ResultDB
    };

    async insertAthleteResult (params:any, body:any){

        const resultDTO: ResultDTO={
            athleteId: params.id,
            value: body.value,
            unit: body.unit,
            competitionId: body.competition_id
        };

        if(!resultDTO.athleteId || !resultDTO.value || !resultDTO.unit || !resultDTO.competitionId){
            throw new BaseError("Preencha todos os campos", 400);
        };

        const randomId = new IdGenerator().generateId();

        const athleteResult = {
            id: randomId,
            athleteId: resultDTO.athleteId, 
            value: resultDTO.value, 
            unit: resultDTO.unit, 
            competitionId: resultDTO.competitionId
        };

        const result = await this.resultDB.insertResult(athleteResult);

        return result;

    };

    async getAllResultsByCompetitionId (params:any){

        const competitionId = params.id;

        if(!competitionId){
            throw new BaseError("Informe o id da competição", 400);
        };

        const result = await this.resultDB.getAllResultByCompetitionId(competitionId);

        const ranking = Ranking(result)

        return ranking;
    };

};
