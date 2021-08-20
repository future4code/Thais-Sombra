import express from 'express'
import knex from 'knex'
import dotenv from 'dotenv'

dotenv.config()

export const connection = knex({
    client: 'mysql',
    connection: {
        host: process.env.DB_HOST,
        port: 3306,
        user: process.env.DB_PASSWORD,
        database: process.env.DB_SCHEMA,
        multipleStatements: true
    }
})

const app = express()
app.use(express.json())

app.listen(3003, ()=> console.log('Servidor rodando na porta 3003'))