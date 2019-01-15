import express from "express";
import controller from "./user.controller";
import { check } from "../utile";

const router = express.Router();

router.post("/", controller.login);
router.get("/", check, controller.check);

export default router;
