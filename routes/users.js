import { Router } from "express";
const router = Router();

router.get("/", (req, res) => {
  res.render("users/login");
});

router.post("/", (req, res) => {
  const isValid = true;
  if (isValid) {
    users.push({ name: req.body.name });
    res.redirect(`/users/${users.length - 1}`);
  } else {
    console.log("error");
    res.render("users/login", { name: req.body.name });
  }
  console.log(req.body.name);
  res.send(req.body.name);
});

router.get("/existing", (req, res) => {
  res.send("welcome user");
});

router.get("/newUser", (req, res) => {
  res.send("create account");
});

router
  .route("/:id")
  .get((req, res) => {
    console.log(`id: ${req.params.id}`);
    console.log(req.user.name);
    res.send(`hello user ${req.user.name}`);
  })
  .put((req, res) => {
    res.send(`Updated user ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`Deleted user ${req.params.id}`);
  });

//kinda confused about this part
const users = [{ name: "alan" }, { name: "brian" }];

router.param("id", (req, res, next, id) => {
  req.user = users[id];
  next();
});

export default router;
