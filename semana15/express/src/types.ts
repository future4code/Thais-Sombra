export enum CONTINENTS {
   "AFRICA" = "África",
   "AMERICA" = "América",
   "ASIA" = "Ásia",
   "EUROPE" = "Europa",
   "OCEANIA" = "Oceania"
}

export type country = {
   id: number,
   name: string,
   capital: string,
   continent: CONTINENTS
}

export const getContinent = (value: any): CONTINENTS | undefined => {
   switch (value) {
      case "AFRICA":
         return CONTINENTS.AFRICA
      case "ASIA":
         return CONTINENTS.ASIA
      case "AMERICA":
         return CONTINENTS.AMERICA
      case "EUROPE":
         return CONTINENTS.EUROPE
      case "OCEANIA":
         return CONTINENTS.OCEANIA
   }
}