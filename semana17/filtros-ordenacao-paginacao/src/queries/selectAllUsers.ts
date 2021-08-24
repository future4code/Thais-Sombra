import { connection } from "../data/connection"

export default async function selectAllUsers(type:string, name:string):Promise<any> {
    const result = await connection.raw(`
       SELECT * FROM aula48_exercicio
       WHERE type = "${type}"
       AND name = "${name}";
    `)
 
    return result[0]
 }