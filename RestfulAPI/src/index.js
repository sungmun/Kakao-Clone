import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import cors from "cors";
import socket from "socket.io";
import { createServer } from "http";
import models from "./database/models";
import route from "./router";

const port = 5000;

const app = express();

models.sequelize
  .sync()
  .then(() => {
    console.log("✓ DB connection success.");
    console.log("  Press CTRL-C to stop\n");
  })
  .catch(err => {
    console.error(err);
    console.log("✗ DB connection error. Please make sure DB is running.");
    process.exit();
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(morgan("dev"));

app.use(cors());

app.use("/", route);

const http = createServer(app);

http.listen(port, () => console.log("Express listening on port ", port));

export const socketIO = socket(http);

export default http;
// supervisor server.js
