import path from "path";
import morgan from "morgan";
import express, { Application, Request, Response, NextFunction } from "express";

import indexRouter from "./routes/index.route";
import statsRouter from "./routes/stats.route";

const app: Application = express();

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));

app.use("/", indexRouter);
app.use("/stats", statsRouter);

// Error handling

app.use((req: Request, res: Response, next: NextFunction) => {
  const err = new Error("Pag Not Found") as any;
  res.status(404);
  next(err);
});

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  res.status(err.status || 500);
  res.render("error", { title: "Error", message: err.message });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
