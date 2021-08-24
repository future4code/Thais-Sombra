import express from "express"
import cors from "cors"
import { AddressInfo } from "net"
import { getAllRecipes } from "./endpoints/getAllRecipes"
import { getAllUsers } from "./endpoints/getAllUsers"
import { getAllUsersParam } from "./endpoints/getAllUsersParam"
import { getAllUsersEx2 } from "./endpoints/getAllUsersEx2"

export const app = express()

app.use(express.json())
app.use(cors())

app.get("/recipes", getAllRecipes)
app.get("/users", getAllUsers)
app.get("/users/:type", getAllUsersParam)
app.get("/filter", getAllUsersEx2)

const server = app.listen(process.env.PORT || 3003, () => {
   if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
   } else {
      console.error(`Failure upon starting server.`);
   }
})
