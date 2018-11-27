import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import next from "next";
import morgan from "morgan";
import route from "./router";

const dev = process.env.NODE_ENV !== "production";
const port = 3000;

const app = next({ dev, dir: "./src" });
const server = express();

server.set("jwt-secret", "tester");

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

const handle = app.getRequestHandler();

const db = mongoose.connection;
db.on("error", console.error);
db.once("open", () => console.log("Connected to Mongodb Server"));

mongoose.connect(
    "mongodb://localhost/kakao_talk",
    { useNewUrlParser: true }
);

server.use(morgan("dev"));

server.use("/", route);

app.prepare().then(() => {
    server.get("*", (req, res) => handle(req, res));
    server.listen(port, err => console.log("Express listening on port", port));
});

export default app;
//supervisor server.js
