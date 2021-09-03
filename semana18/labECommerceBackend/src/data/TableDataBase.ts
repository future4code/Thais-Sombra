import BaseDataBase from "./BaseDataBase";

const printError = ( error: any ) => { console.log(error.sqlMessage || error.message )};

export default class TableDataBase extends BaseDataBase {
    public createTables = async () : Promise<void> => {
        await BaseDataBase.connection.raw(`
            CREATE TABLE IF NOT EXISTS labcommerce_backend_users (
                id VARCHAR(64) NOT NULL PRIMARY KEY,
                name VARCHAR(64) NOT NULL,
                email VARCHAR(64) NOT NULL UNIQUE,
                age INT NOT NULL
            );

            CREATE TABLE IF NOT EXISTS labcommerce_backend_products (
                id VARCHAR(64) NOT NULL PRIMARY KEY,
                name VARCHAR(120) NOT NULL,
                description VARCHAR(260) NOT NULL,
                price FLOAT NOT NULL,
                origin VARCHAR(120),
                destination VARCHAR(120)
            );

            CREATE TABLE IF NOT EXISTS labcommerce_backend_purchase (
                id VARCHAR(64) NOT NULL PRIMARY KEY,
                user_id VARCHAR(64) NOT NULL,
                product_id VARCHAR(64) NOT NULL,
                quantity INT NOT NULL,
                total_value FLOAT NOT NULL,
                FOREIGN KEY (user_id) REFERENCES labcommerce_backend_users(id),
                FOREIGN KEY (product_id) REFERENCES labcommerce_backend_products(id)
            );
        `)
        .then(()=> { console.log("Tabelas criadas") })
        .catch(printError);
    }
};