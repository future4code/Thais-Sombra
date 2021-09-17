import app from "./app";
import UserController from "./controllers/UserController";


const userController = new UserController();

app.post("/signup", userController.signup);
app.post("/login", userController.login);
app.post("/post", userController.createPost);