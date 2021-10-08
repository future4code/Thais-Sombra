import BaseDB from "../data/BaseDB";
import { competitionsTableName } from "../data/constants";

export default class CompetitionDB extends BaseDB {

    public insertCompetition = async (competition:any): Promise<any> =>{
        const result = await BaseDB.connection(competitionsTableName)
            .insert({
                id: competition.id,
                name: competition.name,
                status: competition.status
            });
        return result;
    };

    public getAllCompetitions = async (): Promise<any> => {
        const result = await BaseDB.connection(competitionsTableName)
            .select("*");
        return result;
    };

    public getCompetitionById = async (competitionId:string): Promise<any> => {
        const result = await BaseDB.connection(competitionsTableName)
            .select("*")
            .where({id: competitionId});
        return result;
    };

    public updateStatusCompetitionToFinished = async (competitionId:string): Promise<any> =>{
        const result = await BaseDB.connection(competitionsTableName)
            .update ({"status": "finished"})
            .where({id: competitionId});
        return result;
    };
};