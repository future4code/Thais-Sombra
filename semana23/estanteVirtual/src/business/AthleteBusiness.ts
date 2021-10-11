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

        const athleteDTO: AthleteDTO={
            name: body.name
        };

        if(!athleteDTO.name){
            throw new BaseError("Preencha todos os campos", 400);
        };

        const randomId = new IdGenerator().generateId();

        const athlete = {
            id: randomId,
            name: athleteDTO.name
        };

        const result = await this.athleteDB.insertAthlete(athlete);

        return result;

    };

    async getAllAthletes (){
        const result = await this.athleteDB.getAllAthletes();
        return result;
    };

    async getAthleteById (athleteId: string) {

        if(!athleteId){
            throw new BaseError("Informe o Id do atleta", 400);
        };

        const result = await this.athleteDB.getAthleteById(athleteId);

        return result;
    };

};