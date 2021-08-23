import { connection } from "../data/connection"
import { user } from "../types"

export default async function selectAllUsers(type:string):Promise<any> {
    const result = await connection.raw(`
       SELECT * FROM aula48_exercicio
       WHERE type = "${type}";
    `)
 
    return result[0]
 }