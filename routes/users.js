import { Router } from "express";
const router = Router();

router.get("/", (req, res) => {
  res.send("user list");
});

router.get("/new", (req, res) => {
  res.send("new form");
});

export default router;
