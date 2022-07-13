import express from "express";
import router from "./routes/users.js";
const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  console.log("howdy");
  res.render("index", { text123: "world" });
});

const kek = "kek";

const userRouter = router;

app.use("/users", userRouter);

app.listen(3005);
