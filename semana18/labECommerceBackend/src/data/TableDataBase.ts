import BaseDataBase from "./BaseDataBase";

const printError = ( error: any ) => { console.log(error.sqlMessage || error.message )};

export default class TableDataBase extends BaseDataBase {
    public createTables = async () : Promise<void> => {
        await BaseDataBase.connection.raw(`
            CREATE TABLE labcommerce_backend_users (
                id VARCHAR(64) NOT NULL PRIMARY KEY,
                name VARCHAR(64) NOT NULL,
                email VARCHAR(64) NOT NULL UNIQUE,
                age INT NOT NULL
            );

            CREATE TABLE labcommerce_backend_tickets (
                id VARCHAR(64) NOT NULL PRIMARY KEY,
                origin VARCHAR(100) NOT NULL,
                destiny VARCHAR(64) NOT NULL
            );

            CREATE TABLE labcommerce_backend_products (
                id VARCHAR(64) NOT NULL PRIMARY KEY,
                name VARCHAR(120) NOT NULL,
                description VARCHAR(260) NOT NULL,
                price FLOAT NOT NULL,
                ticket_id VARCHAR(64),
                FOREIGN KEY (ticket_id) REFERENCES labcommerce_backend_tickets(id)
            );

            CREATE TABLE labcommerce_backend_purchase (
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