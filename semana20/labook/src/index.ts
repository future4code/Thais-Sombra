import app from "./app";
import PostController from "./controllers/PostController";
import UserController from "./controllers/UserController";


const userController = new UserController();
const postController = new PostController();

app.post("/signup", userController.signup);
app.post("/login", userController.login);
app.post("/post", postController.createPost);
app.get("/post/:id", postController.searchPostById);