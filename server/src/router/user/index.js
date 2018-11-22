import express from "express";
import controller from "./user.controller";

const router = express.Router();

router.post("/", controller.login);
router.get("/", controller.check);

export default router;
