import BaseDB from "./BaseDB";
import { userTableName } from "./constants";

const printError = ( error: any ) => { console.log(error.sqlMessage || error.message )};

export default class TableDB extends BaseDB {
    public createTables = async () : Promise<void> => {
        await BaseDB.connection.raw(`
            CREATE TABLE ${userTableName}(
                id VARCHAR(255) PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                email VARCHAR(255) NOT NULL UNIQUE,
                password VARCHAR(255) NOT NULL,
                role VARCHAR(255) DEFAULT "NORMAL"
            )
        `)
        .then(() => console.log("MySql tables were successfully created"))
        .catch(printError)
    };
};