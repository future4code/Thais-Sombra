import BaseDB from "./BaseDB";
import { resultsTableName } from "./constants";

export default class ResultDB extends BaseDB {

    public insertResult = async (athleteResult:any): Promise<any> =>{
        const result = await BaseDB.connection(resultsTableName)
            .insert({
                id: athleteResult.id,
                athlete_id: athleteResult.athleteId,
                value: athleteResult.value,
                unit: athleteResult.unit,
                competition_id: athleteResult.competitionId
            });
        return result;
    };

};