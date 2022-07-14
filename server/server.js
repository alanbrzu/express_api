import express from "express";
import router from "./routes/dispoRoute.js";

const app = express();

// boilerplate to use static files
// app.use(express.static("public")); // homepage
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("homeSearch");
});

// connect dispo router
app.use("/dispos", router);

// local host
app.listen(3002);
