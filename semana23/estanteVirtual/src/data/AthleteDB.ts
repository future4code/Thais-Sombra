import BaseDB from "./BaseDB";
import { athleteTableName } from "./constants";

export default class AthleteDB extends BaseDB {

    public insertAthlete = async (athlete:any): Promise<any> =>{
        const result = await BaseDB.connection(athleteTableName)
            .insert({
                id: athlete.id,
                name: athlete.name,
            });
        return athlete;
    };

};