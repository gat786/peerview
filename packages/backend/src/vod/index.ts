import express from "express";
import axios from "axios";
import config from "../config";
import { get_auth_headers } from "../auth";

const app = express();

app.get("/upload", (req, res, next) => {
  axios.post(
    config.LivepeerUrl + "asset/request-upload",
    {},
    {
      headers: get_auth_headers(),
    }
  );
});

app.post("/create-stream", async (req, res, next) => {
  try {
    const response = await axios.post(
      config.LivepeerUrl + "stream",
      {},
      { headers: { ...get_auth_headers(), "Content-Type": "application/json" } }
    );
    return res.json({
      message: "Creating stream",
    });
  } catch (err) {
    console.log(err);
    return res.json({
      message: "Failed creating livestream",
    });
  }
});

export default app;
