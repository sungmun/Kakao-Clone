import express from "express";
import { read, save, remove } from "./friend.controller";

const router = express.Router();

router.post("/", save);
router.get("/", read);
router.delete("/", remove);

export default router;
