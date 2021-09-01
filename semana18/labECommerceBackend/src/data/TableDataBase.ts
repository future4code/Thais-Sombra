import BaseDataBase from "./BaseDataBase";

export default class TableDataBase extends BaseDataBase {
    public createTables = async () : Promise<void> => {
        await BaseDataBase.connection.raw(`
            CREATE TABLE labcommerce_backend_users (
                id VARCHAR(64) NOT NULL PRIMARY KEY,
                name VARCHAR(64) NOT NULL,
                email VARCHAR(64) NOT NULL,
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
                FOREIGN LEY (ticket_id) REFERENCE labcommerce_backend_tickets(id)
            );

            CREATE TABLE labcommerce_backend_purchase (
                id VARCHAR(64) NOT NULL PRIMARY KEY,
                user_id VARCHAR(64) NOT NULL,
                product_id VARCHAR(64) NOT NULL,
                quantity INT NOT NULL,
                total_value FLOAT NOT NULL,
                FOREING KEY (user_id) REFERENCES labcommerce_backend_users(id),
                FOREING KEY (product_id) labcommerce_backend_products(id)
            );
        `)
    }
};