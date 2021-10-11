export interface hashTable {
   [key: string]: any
}

let homer: hashTable = {
   name: "Homer Simpson",
   cartoon: "The Simpsons"
}

homer.phrase = "Moe, me vê mais uma Duff Beer!"

delete homer.name

// homer = null // só funciona tipando homer como any

console.log(homer);