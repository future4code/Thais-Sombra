import { Request, Response } from "express"
import { connection } from "../data/connection"

export const getAllUsersEx2 = async(req: Request,res: Response): Promise<void> =>{
    try {
        
       const name = req.query.name || "%"
       const sort = req.query.sort || 'email'
       const order = req.query.order || "asc"
 
       if(sort !== 'email' && sort !== "type"){
          res.statusCode = 422
          throw new Error (" 'sort' must be either 'name' or 'type'")
       }
 
       if(order !== 'asc' && order !== 'desc'){
          res.statusCode = 422
          throw new Error("'order' must be either 'asc' or 'desc'")
       }

       const result = await connection("aula48_exercicio")
        .where("name", "LIKE", `%${name}%`)
        .orderBy(sort, order)
 
       if(!result.length){
          res.statusCode = 404
          throw new Error("No users found")
       }
 
       res.status(200).send(result)
       
    } catch (error) {
       console.log(error)
       res.send(error.message || error.sqlMessage)
    }
 }
 