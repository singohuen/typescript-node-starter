import express from "express";
const app: express.Application = express();

app.get("/", (req: express.Request, res: express.Response) => {
  res.json({ text: "Hello world!" });
});

export default app;
