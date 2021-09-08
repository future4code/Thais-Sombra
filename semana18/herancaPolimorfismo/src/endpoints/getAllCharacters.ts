import { Request, Response } from "express"
import { CharacterDatabase } from "../database/CharacterDatabase"
import { Character } from "../entities/Character"
import { CharacterDb } from "../types"

export default async function getAllCharacters(
   req: Request,
   res: Response
): Promise<void> {

   try {
      
      const characterDatabase = new CharacterDatabase()
      const charactersDb: CharacterDb[] = await characterDatabase.getAll()

      const characters = charactersDb.map(character => {
         return new Character(
            character.name,
            character.gender,
            character.description,
            character.id
         )
      })

      res.send(characters)
   } catch (error) {
      res.status(500).send("Unexpected server error")
   }
}
