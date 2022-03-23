import config from "./config";
import express from "express";
import vod from "./vod";

const app = express();

app.use(express.json());

app.get("/", (req, res, next) => {
  return res.send("Hello world");
});

app.use("/vod", vod);

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
