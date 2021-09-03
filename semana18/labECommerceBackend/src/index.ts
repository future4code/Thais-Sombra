import app from "./app";
import { createProduct } from "./endpoints/createProduct";
import { createTicket } from "./endpoints/createTicket";
import { createUser } from "./endpoints/createUser";
import { getAllProducts } from "./endpoints/getAllProducts";
import { getAllTickets } from "./endpoints/getAllTickets";
import { getAllUsers } from "./endpoints/getAllUsers";

app.get("/users", getAllUsers)
app.get("/products", getAllProducts)
app.get("/tickets", getAllTickets)

app.post("/register/user", createUser)
app.post("/register/product", createProduct)
app.post("/register/ticket", createTicket)