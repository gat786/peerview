import express from "express";
import axios from "axios";
import config from "../config";

const app = express();

app.get("/upload", (req, res, next) => {    
  axios.post(
    config.LivepeerUrl + "asset/request-upload",
    {},
    {
      headers: {
        Authorization: `Bearer ${config.LivepeerKey}`,
      },
    }
  );
});
