import express from "express";
import { PORT, MONGOURL } from "./config.js";
import studentRouter from "./routes/studentroutes.js";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();

app.use(express.json());

app.use(bodyParser.json({ limit: "100mb" }));
app.use(bodyParser.urlencoded({ limit: "100mb", extended: true }));

app.use(cors());

app.use("/", studentRouter);

mongoose
  .connect(MONGOURL)
  .then(() => {
    console.log("Connected to Database");
    app.listen(PORT, () => {
      console.log(`App is connected to ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
