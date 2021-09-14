import BaseDB from "./BaseDB";

const printError = ( error: any ) => { console.log(error.sqlMessage || error.message )};

export default class TableDataBase extends BaseDB {
    public createTables = async () : Promise<void> => {
        await BaseDB.connection.raw(`
           
        `)
        .then(()=> { console.log("Tabelas criadas") })
        .catch(printError);
    }
};