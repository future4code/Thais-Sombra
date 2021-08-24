import { Request, Response } from "express"
import { connection } from "../data/connection"

export const getUsers = async(req: Request,res: Response): Promise<void> =>{
    try {
        
       const name = req.query.name || "%"
       const type = req.params.type || "%"
       const sort = req.query.sort || 'name'
       const order = req.query.order || "desc"
       const page = Number(req.query.page) || 1

       if(sort !== 'email' && sort !== "type" && sort !== "name"){
          res.statusCode = 422
          throw new Error (" 'sort' must be either 'name' or 'type'")
       }
 
       if(order !== 'asc' && order !== 'desc'){
          res.statusCode = 422
          throw new Error("'order' must be either 'asc' or 'desc'")
       }

       const offset = 10 * (page - 1)

       const result = await connection("aula48_exercicio")
        .where("name", "LIKE", `%${name}%`)
        .orderBy(sort, order)
        .limit(10)
        .offset(offset)
 
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
 