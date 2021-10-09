import BaseDB from "./BaseDB";
import { resultsTableName, athleteTableName, competitionsTableName } from "./constants";

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

    public getAllResultByCompetitionId = async (competitionId:string): Promise<any> =>{
        const result = await BaseDB.connection(resultsTableName)
            .select('athlete.id')
            .innerJoin(competitionsTableName, `${competitionsTableName}.id`, '=', `${resultsTableName}.competition_id`)
            .where({
                competition_id: competitionId
            });
        return result;
    };

};
