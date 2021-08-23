import { connection } from "../data/connection"
import { user } from "../types"

export default async function selectAllUsers(name:string):Promise<any> {
    const result = await connection.raw(`
       SELECT id, name, email, type
       FROM aula48_exercicio
       WHERE ${name} = "${name}";
    `)
 
    return result[0]
 }