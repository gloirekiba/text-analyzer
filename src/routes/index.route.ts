import express, { Request, Response, Router } from "express";

import { APP_NAME } from "../config/default";

const router: Router = express.Router();

router.get("/", (req: Request, res: Response) => {
  res.render("index", { title: APP_NAME });
});

export default router;
