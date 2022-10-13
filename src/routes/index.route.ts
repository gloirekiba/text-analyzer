import express, { Request, Response, Router } from "express";

import Text from "../helpers/Text";
import getStats from "../helpers/stats";

const router: Router = express.Router();

router.get("/", (req: Request, res: Response) => {
  res.render("index", { title: "Express" });
});

router.post("/", (req: Request, res: Response) => {
  const text = req.body.text as string;
  const stats = getStats(text);
  const words = Text.wordRepetition(text);

  res.render("stats", { title: "Express", stats, words });
});

export default router;
