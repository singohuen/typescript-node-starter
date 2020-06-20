import express from "express";
const app: express.Application = express();

app.get("/", (req: express.Request, res: express.Response) => {
  res.send("Hello world!");
});

app.listen(8000, () => console.log("app started"));
