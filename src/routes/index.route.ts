import express, { Request, Response, Router } from "express";

import Text from "../helpers/Text";

const router: Router = express.Router();

router.get("/", (req: Request, res: Response) => {
  res.render("index", { title: "Express" });
});

router.post("/", (req: Request, res: Response) => {
  const text = req.body.text as string;

  const stats = [
    { name: "Total Words", value: Text.totalWordsClean(text) },
    { name: "Unique Words", value: Text.uniqueWordsClean(text) },
    { name: "Average Word Length", value: Text.averageWordLength(text) },
    { name: "Total Characters", value: text.length },
    {
      name: "Total Characters (no spaces)",
      value: text.replace(/\s/g, "").length,
    },
  ];

  res.render("stats", { title: "Express", stats });
});

export default router;
