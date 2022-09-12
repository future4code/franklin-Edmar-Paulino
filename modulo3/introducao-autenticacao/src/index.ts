import app from "./app";
import login from "./endpoints/login";
import profile from "./endpoints/profile";
import signup from "./endpoints/signup";

app.post("/user/signup", signup);
app.post("/user/login", login);
app.get("/user/profile", profile);
