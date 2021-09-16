import BaseDB from "./BaseDB";
import { postTableName, userTableName } from "./constants";

const printError = ( error: any ) => { console.log(error.sqlMessage || error.message )};

export default class TableDB extends BaseDB {
    public createTables = async () : Promise<void> => {
        await BaseDB.connection.raw(`
            CREATE TABLE IF NOT EXISTS ${userTableName}(
                id VARCHAR(255) PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                email VARCHAR(255) UNIQUE NOT NULL,
                password VARCHAR(255) NOT NULL
            );
    
            CREATE TABLE IF NOT EXISTS ${postTableName}(
                id VARCHAR(255) PRIMARY KEY,
                photo VARCHAR(255) NOT NULL,
                description VARCHAR(255) NOT NULL,
                type ENUM("normal","event") DEFAULT "normal",
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                author_id VARCHAR(255),
                FOREIGN KEY (author_id) REFERENCES ${userTableName} (id)
            );
        `)
        .then(()=> { console.log("MySQL tables created successfully") })
        .catch(printError);
    }
};