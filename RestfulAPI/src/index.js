import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import morgan from "morgan";
import route from "./router";
import cors from "cors";

const port = 5000;

const app = express();

app.set("jwt-secret", "tester");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = mongoose.connection;
db.on("error", console.error);
db.once("open", () => console.log("Connected to Mongodb Server"));

mongoose.connect(
    "mongodb://localhost/kakao_talk",
    { useNewUrlParser: true }
);

app.use(morgan("dev"));

app.use(cors());

app.use("/", route);

app.listen(port, err => console.log("Express listening on port", port));

export default app;
//supervisor server.js
