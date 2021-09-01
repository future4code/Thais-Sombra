import TableDataBase from "./TableDataBase";

const printError = ( error: any ) => { console.log(error.sqlMessage || error.message )};

const start = async () => {
    try{
        new TableDataBase().createTables()
            .then(()=> { console.log("Tabelas criadas") })
    } catch( error: any ){
        printError (`Horas pipocas ${error}`)
    };
};

start();