import app from "./app";
import signup from "./endpoints/recipes/useres/signup";

app.post("/users/signup", signup);
app.post("/users/login");
app.get("/users/profile");
app.get("/users/:id/profile");

app.post("/recipe");
app.get("/recipe/:id");