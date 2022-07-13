import { Router } from "express";
const router = Router();

router.get("/", (req, res) => {
  res.send("please login");
});

router.get("/existing", (req, res) => {
  res.send("welcome user");
});

router.get("/newUser", (req, res) => {
  res.send("create account");
});

//need post to create account

router
  .route("/:id")
  .get((req, res) => {
    console.log(req.user.name);
    res.send(`hello user ${req.params.id}`);
  })
  .put((req, res) => {
    res.send(`Updated user ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`Deleted user ${req.params.id}`);
  });

const users = [{ name: "alan" }, { name: "brian" }];

router.param("id", (req, res, next, id) => {
  req.user = users[id];
  next();
});

export default router;
