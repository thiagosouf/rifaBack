import { Router } from "express";
import authRouter from "./authRouter.js";
// import rifaRouter from "./rifaRouter.js";
import admRouter from "./admRouter.js";
import rifaRouter from "./rifaRouter.js";

const router = Router();
router.use(authRouter);
// router.use(rifaRouter);
router.use(admRouter);
router.use(rifaRouter);

export default router;
