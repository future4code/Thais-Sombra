import AthleteDB from "../data/AthleteDB";
import { BaseError } from "../error/BaseError";
import { IdGenerator } from "../services/IdGenerator";
import { AthleteDTO } from "../model/Athlete";

export default class AthleteBusiness {

    private athleteDB: AthleteDB;

    constructor() {
        this.athleteDB = new AthleteDB
    };

    async insertAthlete (body:any){

        const resultDTO: AthleteDTO={
            name: body.name
        };

        if(!resultDTO.name){
            throw new BaseError("Preencha todos os campos", 400);
        };

        const randomId = new IdGenerator().generateId();

        const athleteResult = {
            id: randomId,
            name: resultDTO.name
        };

        const result = await this.athleteDB.insertAthlete(athleteResult);

        return result;

    };


};