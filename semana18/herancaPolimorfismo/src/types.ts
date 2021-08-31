// export enum GENDER {
//    MALE = "MALE",
//    FEMALE = "FEMALE",
//    OTHER = "OTHER"
// }

import { GENDER } from "./entities/Character";

// export type character = {
//    name: string,
//    gender: GENDER,
//    id?: number,
//    description?: string
// }


export type CharacterDb = {
  id: number,
  name: string,
  gender: GENDER,
  description: string
}
