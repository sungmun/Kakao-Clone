import express from "express";
import bodyParser from "body-parser";
import models from "./models";
import morgan from "morgan";
import route from "./router";
import cors from "cors";

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

app.listen(port, err => console.log("Express listening on port", port));

export default app;
//supervisor server.js
