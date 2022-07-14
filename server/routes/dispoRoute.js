import { Router } from "express";
const router = Router();

// dispensaries route

// you want to res.render dispos closest to user location

router.get("/", (req, res) => {
  console.log("list dispo by distance");
  res.send("howdy partner");
});

export default router;
