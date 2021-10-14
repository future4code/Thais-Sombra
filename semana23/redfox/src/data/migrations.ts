import TableDB from "./TableDB";

const printError = ( error: any ) => { console.log(error.sqlMessage || error.message )};

const start = async () => {
    try{
        new TableDB().createTables();
     
    } catch( error: any ){
        printError (error)
    };
};

start();
