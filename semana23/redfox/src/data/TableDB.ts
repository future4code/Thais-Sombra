import BaseDB from "./BaseDB";

const printError = ( error: any ) => { console.log(error.sqlMessage || error.message )};

export default class TableDB extends BaseDB {
    public createTables = async () : Promise<void> => {
        await BaseDB.connection.raw(`

        `)
        .then(()=> { console.log("MySQL tables created successfully") })
        .catch(printError);
    };

};
