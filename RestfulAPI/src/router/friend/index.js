import express from "express";
import controller from "./friend.controller";

const router = express.Router();

router.post("/", controller.save);
router.get("/", controller.read);
router.delete("/", controller.delete);

export default router;
