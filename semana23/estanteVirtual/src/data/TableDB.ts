import BaseDB from "./BaseDB";
import { competitionsTableName, resultsTableName } from "./constants";

const printError = ( error: any ) => { console.log(error.sqlMessage || error.message )};

export default class TableDB extends BaseDB {
    public createTables = async () : Promise<void> => {
        await BaseDB.connection.raw(`
            CREATE TABLE IF NOT EXISTS ${competitionsTableName} (
                id VARCHAR(64) NOT NULL PRIMARY KEY,
                name VARCHAR(64) NOT NULL,
                status ENUM('in_progress','finished') DEFAULT 'in_progress'
            );

            CREATE TABLE IF NOT EXISTS ${resultsTableName} (
                id VARCHAR(64) NOT NULL PRIMARY KEY,
                athlete VARCHAR(64) NOT NULL,
                value FLOAT NOT NULL,
                unit ENUM('s','m'),
                competition_id VARCHAR(64),
                FOREIGN KEY (competition_id) REFERENCES ${competitionsTableName}(id) 
            );
        `)
        .then(()=> { console.log("MySQL tables created successfully") })
        .catch(printError);
    };

};
