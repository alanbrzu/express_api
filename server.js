import express from "express";
import router from "./routes/users.js";

const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "ejs");

app.use("/users", router);

app.listen(3005);
