import express from "express";
import {
    save,
    read,
    update,
    remove,
    addUser,
    listRead
} from "./talkRoom.controller";

const router = express.Router();

router.post("/", save); //생성
router.post("/user", addUser); //유저추가

router.get("/", listRead); //목록
router.get("/:id", read); //내용

router.put("/:id", update); //변경

router.delete("/:id", remove); //유저 나가기

export default router;
