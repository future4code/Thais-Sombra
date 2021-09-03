import app from "./app";
import { getAllUsers } from "./endpoints/getAllUsers";
import { getAllProducts } from "./endpoints/getAllProducts";
import { getAllTickets } from "./endpoints/getAllTickets";
import { getAllPurchases } from "./endpoints/getAllPurchases";
import { getPurchaseByUserId } from "./endpoints/getPurchaseByUserId";
import { createUser } from "./endpoints/createUser";
import { createProduct } from "./endpoints/createProduct";
import { createTicket } from "./endpoints/createTicket";
import { createPurchase } from "./endpoints/createPurchase";

app.get("/users", getAllUsers);
app.get("/products", getAllProducts);
app.get("/tickets", getAllTickets);
app.get("/purchase", getAllPurchases);
app.get("/purchase/:userid", getPurchaseByUserId);

app.post("/register/user", createUser);
app.post("/register/product", createProduct);
app.post("/register/ticket", createTicket);
app.post("/register/purchase", createPurchase);