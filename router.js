import Router from "express";
import Controller from "./controller.js";
import checkIdUrl from "./middleware.js";

const router = new Router();

router.post("/generate", Controller.createRandomNumber);
router.get("/retrieve/:id", checkIdUrl, Controller.getId);

export default router;
