import config from "./config";
import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res, next) => {
  return res.send("Hello world");
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
