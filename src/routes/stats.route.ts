import express, { Request, Response, Router } from "express";

import { APP_NAME } from "../config/default";
import Text from "../helpers/Text";
import { getTextStats } from "../helpers/helpers";

const router: Router = express.Router();

router.get("/", (req: Request, res: Response) => {
  res.render("stats", { title: APP_NAME });
});

router.post("/", (req: Request, res: Response) => {
  const text = req.body.text as string;
  const stats = getTextStats(text);
  const words = Text.wordRepetition(text);

  res.render("stats", { title: APP_NAME, stats, words });
});

export default router;
