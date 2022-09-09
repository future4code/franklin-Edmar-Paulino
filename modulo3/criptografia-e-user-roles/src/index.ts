import app from "./app";
import createUser from "./endpoints/createUser";
import login from "./endpoints/login";
import getProfile from "./endpoints/getProfile";
import editUser from "./endpoints/editUser";

app.post("/user/signup", createUser);
app.post("/user/login", login);
app.get("/user/profile", getProfile);
app.put("/user/edit", editUser);
