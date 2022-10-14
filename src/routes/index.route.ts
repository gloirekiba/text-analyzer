import express, { Request, Response, Router } from "express";

import Text from "../helpers/Text";
import { getTextStats } from "../helpers/helpers";

const router: Router = express.Router();

router.get("/", (req: Request, res: Response) => {
  res.render("index", { title: "Express" });
});

router.post("/stats", (req: Request, res: Response) => {
  const text = req.body.text as string;
  const stats = getTextStats(text);
  const words = Text.wordRepetition(text);

  res.render("stats", { title: "Express", stats, words });
});

export default router;
