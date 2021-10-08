import BaseDB from "./BaseDB";
import { competitionsTableName, resultsTableName, athleteTableName } from "./constants";

const printError = ( error: any ) => { console.log(error.sqlMessage || error.message )};

export default class TableDB extends BaseDB {
    public createTables = async () : Promise<void> => {
        await BaseDB.connection.raw(`
            CREATE TABLE IF NOT EXISTS ${competitionsTableName} (
                id VARCHAR(64) NOT NULL PRIMARY KEY,
                name VARCHAR(64) NOT NULL,
                status ENUM('in_progress','finished') DEFAULT 'in_progress'
            );

            CREATE TABLE IF NOT EXISTS ${athleteTableName} (
                id VARCHAR(64) NOT NULL PRIMARY KEY,
                name VARCHAR(64) NOT NULL
            );

            CREATE TABLE IF NOT EXISTS ${resultsTableName} (
                id VARCHAR(64) NOT NULL PRIMARY KEY,
                value FLOAT NOT NULL,
                unit ENUM('s','m'),
                athlete_id VARCHAR(64) NOT NULL,
                competition_id VARCHAR(64) NOT NULL,
                FOREIGN KEY (competition_id) REFERENCES ${competitionsTableName}(id),
                FOREIGN KEY (athlete_id) REFERENCES ${athleteTableName}(id)  
            );
        `)
        .then(()=> { console.log("MySQL tables created successfully") })
        .catch(printError);
    };

};
