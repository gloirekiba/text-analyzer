import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.render("index", { title: "Express" });
});

router.post("/", (req, res) => {
  const text = req.body.text;
  res.send(text);
});

export default router;
