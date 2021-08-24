import { Request, Response } from "express"
import selectAllUsers from "../queries/selectAllUsers"

export const getAllUsersParam = async(req: Request,res: Response): Promise<void> =>{
    try {
        
       const type = req.params.type
       const name = req.query.name
       
       if(typeof name !== "string"){
          res.statusCode = 422
          throw new Error (" 'name' must be either 'name' or 'type'")
         }
         
      const result = await selectAllUsers(type,name)
 
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